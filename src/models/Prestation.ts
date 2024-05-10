import type { ImageDTO } from "./Image";

export interface PresentationDTO {
    id: string,
    title : string,
    paragraphs : string[],
    image : ImageDTO,
}