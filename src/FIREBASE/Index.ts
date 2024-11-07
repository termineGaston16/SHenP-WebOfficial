import { Category, Gender, ProjectLost, Proyecto } from "./Interface/Types";
import { CATEGORIAS, GENEROS, PROYECTOS, PROYECTOS_PERDIDOS } from '../../DATA_BASE'

//OBTENER LAS CATEGORIAS
export async function getCatergories(): Promise<Category[]> {

    const result: Category[] = []

    try {
        CATEGORIAS.forEach(c => {
            const title = c.title.charAt(0).toUpperCase() + c.title.slice(1).toLowerCase();
            result.push({ icon: c.icon, title: title });
        });

    } catch (error) {
        console.error(error)
    }

    return result;
}

// OBTENER LISTAS DE GENEROS POR CUATRO
export async function getGeneros(localGeneratorList: Gender[]): Promise<Gender[]> {
    try {
        const nextGenres = GENEROS.slice(localGeneratorList.length, localGeneratorList.length + 4);
        return [...localGeneratorList, ...nextGenres]

    } catch (error) {
        console.error(error)
    }

    return []
}

// OBTENER LOS PROYECTOS SEGUN EL GENERO POR CUATRO
export async function getProyectsByGender(resultGenre: string, listOfProjectsAccordingToGenre: Proyecto[]): Promise<Proyecto[]> {

    try {
        const proyectsByCategory = PROYECTOS.filter(proyecto => proyecto.gender.includes(resultGenre))

        const nextProyects = proyectsByCategory.slice(listOfProjectsAccordingToGenre.length, listOfProjectsAccordingToGenre.length + 4)
        return [...listOfProjectsAccordingToGenre, ...nextProyects]
    } catch (error) {
        console.error(error)
    }

    return [];
}

// OBTENER LOS PROYECTOS PERDIDOS
export async function getProyectsLost(listOfProyectLost: ProjectLost[]): Promise<ProjectLost[]> {
    try {
        const proyectsLost = PROYECTOS_PERDIDOS.slice(listOfProyectLost.length, listOfProyectLost.length + 3)
        return [...listOfProyectLost, ...proyectsLost]
    } catch (error) {
        console.error(error)
    }

    return []
}