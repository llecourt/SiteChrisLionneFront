import type { ImageDTO } from "./Image";

export interface ProjectDTO {
    id : string
    title : string,
    description : string,
    thumb_image : ImageDTO,
    paragraphs : string[],
    images : ImageDTO[],
    banner_image: ImageDTO,
    is_front_page: boolean,
    tags: string[],
}