export type Quality = "orig" | "200" | "500" | "1000";

export interface ImageDTO {
    name: string;
    sizes: Quality[];
}