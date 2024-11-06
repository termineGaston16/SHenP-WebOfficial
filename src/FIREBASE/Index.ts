import { Category, Gender, Proyecto } from "./Interface/Types";
import { CATEGORIAS, GENEROS } from '../../DATA_BASE'

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
export interface ResultGender {
    genre: Gender,
    proyects: Proyecto[]
}

export async function getGeneros(localGeneratorList: ResultGender[]): Promise<ResultGender[]> {

    const result: ResultGender[] = localGeneratorList

    try {

        const nextGenres = GENEROS.slice(result.length, result.length + 4);
        for (let genre of nextGenres) {
            result.push({
                genre: genre,
                proyects: []
            });
        }
        
    } catch (error) {
        console.error(error)
    }

    return result
}