import type { ImageDTO, Quality } from "./models/Image";
import type { ProjectDTO } from "./models/Project";

export const parseUrlFromName = (name : string, folder? : string, id? : string) => {
    var path: string[] = [];
    if(folder) path.push(folder);
    if(id) path.push(id);

    path.push(name);

    return "https://firebasestorage.googleapis.com/v0/b/sitechrislionne.appspot.com/o/"+ encodeURIComponent(path.join("/")) +"?alt=media";
}

export const parseUrlFromImage = (image: ImageDTO, folder? : string, id? : string, quality? : Quality) => {
    var name = image.name;
    if(quality && image.sizes.find(e => e == quality) != undefined) {
        name += "-" + quality;
    }
    return parseUrlFromName(name, folder, id);
}