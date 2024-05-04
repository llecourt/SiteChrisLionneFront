import type { ProjectDTO } from "./models/Project";

type Quality = "200" | "500" | "1000";

export const parseUrl = (name : string, folder? : string, id? : string, quality? : Quality) => {
    var path: string[] = [];
    if(folder) path.push(folder);
    if(id) path.push(id);

    if(quality)
        name += "-" + quality;
    path.push(name);

    return "https://firebasestorage.googleapis.com/v0/b/sitechrislionne.appspot.com/o/"+ encodeURIComponent(path.join("/")) +"?alt=media";
}