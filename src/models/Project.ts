export interface ProjectDTO {
    id : string
    title : string,
    description : string,
    thumb_image : string,
    paragraphs : string[],
    images : string[],
    banner_image: string,
    is_front_page: boolean
}

export interface ProjectToCreateDTO {
    id : string
    title : string,
    description : string,
    thumb_image : string,
    paragraphs : string[],
    images : string[],
    banner_image: string,
    is_front_page: boolean
}