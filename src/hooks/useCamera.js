import { Camera, CameraResultType } from "@capacitor/camera";
import { Directory, Filesystem } from "@capacitor/filesystem";

export const useCamera = () => {

    const addFileOrTakePhoto = async () => {

        const options = { resultType: CameraResultType.Uri, allowEditing: false, quality: 100 };
        const originalFile = await Camera.getPhoto(options);

        console.log(originalFile);
        const photoInTempStorage = await Filesystem.readFile({ path: originalFile.webPath });

        let date = new Date(),
        time = date.getTime(),
        filename = `${ time }::-::mobile.jpeg`;

        await Filesystem.writeFile({ data: photoInTempStorage.data, path: filename, directory: Directory.Data });
        const gotFile = await Filesystem.getUri({ directory: Directory.Data, path: filename });
        const pathToFile = gotFile.uri;

        const returnData = { filename, pathToFile };
        return returnData;
    }

    return {

        addFileOrTakePhoto
    }
}