import { IconType } from "react-icons"
import { ResultGender } from "../Index"

/*export interface APIdata<T> {
    result: T,
    isError: boolean
}

export interface APIresult<T> {
    data: APIdata<T>;
    isLoading: boolean;
}*/


export interface Category {
    title: string,
    icon: IconType
}

export type Gender = string

export interface Producer {
    name: string,
    link: string
}

export interface Proyecto {
    official_title: string,
    name_section: string,
    category: Category['title'],
    producer: Producer,
    gender: Gender[],
    release_date: string,
    intro_link: string,
    logo_link: string,
    front_page: string,
    gallery_link: string[],
    access_link: string,
    description: string
}

export interface ProjectLost {
    official_title: string,
    producer: string,
    estimated_year: string,
    front_page: string,
    description: string
}
