import { Category, Configuration, Gender, ProjectLost, ProjectPreview, Proyecto } from "./Interface/Types";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, startAfter, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIDbj5kZYPQmmgRBCddCEdYGfWo0z_xRU",
    authDomain: "shenp-96ced.firebaseapp.com",
    projectId: "shenp-96ced",
    storageBucket: "shenp-96ced.firebasestorage.app",
    messagingSenderId: "598199358408",
    appId: "1:598199358408:web:f47c8c5d989f50101826fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//OBTENER LAS CATEGORIAS
export async function getCatergories(): Promise<Category[]> {

    const result: Category[] = []

    try {
        const response = await getDocs(collection(db, 'CATEGORIAS'))
        response.forEach(category => {
            const data = category.data() as Category
            result.push({
                icon: data.icon,
                title: data.title
            })
        })

    } catch (error) {
        console.error(error)
        throw error
    }

    return result;
}

// OBTENER LISTAS DE GENEROS POR CUATRO
export async function getGeneros(localGeneratorList: Gender[]): Promise<Gender[]> {

    try {
        const docRef = doc(db, 'GENEROS', '98NcL2gR9838HNPAZOW0')
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data()
            const generosArray = data.GENEROS;

            if (Array.isArray(generosArray)) {
                return [...localGeneratorList, ...generosArray.slice(localGeneratorList.length, localGeneratorList.length + 4)]
            } else {
                console.error('El documento no es un Array')
            }

        } else {
            console.error('El documento no existe')
        }

    } catch (error) {
        console.error(error);
        throw error
    }

    return [];
}

// OBTENER LOS PROYECTOS SEGUN EL GENERO POR CUATRO
export async function getProyectsByGender(resultGenre: string, listOfProjectsAccordingToGenre: Proyecto[]): Promise<Proyecto[]> {
    try {
        const q = query(collection(db, 'PROYECTOS'), where('gender', 'array-contains', resultGenre))
        const querySnapshotGender = await getDocs(q)
        const proyectsByGenders = querySnapshotGender.docs.map(doc => {
            return doc.data() as Proyecto
        })
        
        return [...listOfProjectsAccordingToGenre, ...proyectsByGenders.slice(listOfProjectsAccordingToGenre.length, listOfProjectsAccordingToGenre.length + 4)]
    } catch (error) {
        console.error(error)
        throw error
    }

    return [];
}

// OBTENER LOS PROYECTOS PERDIDOS
export async function getProyectsLost(listOfProyectLost: ProjectLost[]): Promise<ProjectLost[]> {
    try {
        let q = query(collection(db, 'PROYECTOS_PERDIDOS'), limit(3));

        if (listOfProyectLost.length > 0) {
            const lastDoc = await getDocs(query(collection(db, 'PROYECTOS_PERDIDOS'), limit(listOfProyectLost.length)));
            q = query(q, startAfter(lastDoc.docs[lastDoc.docs.length - 1]));
        }

        const docSnapshot = await getDocs(q);
        const listProyectsLost = docSnapshot.docs.map((proyect) => proyect.data() as ProjectLost);

        return [...listOfProyectLost, ...listProyectsLost];
    } catch (error) {
        console.error(error);
        throw error
    }

    return [];
}

// OBTENER PROYECTOS MEDIANTE QUERY
export async function getResultsByQuery(searchQuery: string): Promise<ProjectPreview[]> {

    try {
        const response = await getDocs(collection(db, 'PROYECTOS'))
        return response.docs
            .map(proyecto => proyecto.data() as ProjectPreview)
            .filter(data => data.official_title.toLocaleLowerCase().includes(searchQuery))
            .map(data => ({
                name_section: data.name_section,
                category: data.category,
                front_page: data.front_page,
                official_title: data.official_title
            }))

    } catch (error) {
        console.error(error)
        throw error
    }
    return []
}

// OBTENER PROYECTO
export async function getProyect(nameSectionQuery: string): Promise<Proyecto | undefined> {
    try {
        const q = query(collection(db, 'PROYECTOS'), where('name_section', '==', nameSectionQuery))
        return (await getDocs(q)).docs[0].data() as Proyecto

    } catch (error) {
        console.error(error)
        throw error
    }
}

// OBTENER PROYECTOS POR CATEGORIA
export async function getResultsByCategory(categoryQuery: string): Promise<ProjectPreview[]> {

    const categoryFilter = categoryQuery = categoryQuery.charAt(0).toUpperCase() + categoryQuery.slice(1, -1);

    try {
        const q = query(collection(db, 'PROYECTOS'), where('category', '==', categoryFilter))
        return (await getDocs(q)).docs.map(proyecto => {
            const data = proyecto.data() as ProjectPreview
            return {
                category: data.category,
                front_page: data.front_page,
                name_section: data.name_section,
                official_title: data.official_title
            }
        })
    } catch (error) {
        console.error(error)
        throw error
    }
    return []
}

// OBTENER OPCIONES DE LA CONFIGURACION
export async function getOptions(): Promise<Configuration<{ titleContent: string, imgContent: string }[] | string>[]> {
    try {
        const docs = await getDocs(collection(db, 'CONFIGURACION'));
        return docs.docs.map(c => {
            const data = c.data().CONFIGURACION
            return data.map((con: Configuration<{ titleContent: string, imgContent: string }[] | string>) => {
                return {
                    content: con.content,
                    description: con.description,
                    title: con.title
                };
            });
        }).flat(); // Esto aplanará el array resultante si data.map() genera arrays dentro del array
    } catch (error) {
        console.error(error);
        throw error
    }

    return [];
}
