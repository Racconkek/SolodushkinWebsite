import axios from "axios";

const port = process.env.NODE_ENV === 'development'? '3000': process.env.PORT;

export const baseUrl = window.location.protocol + '\/\/' +
    window.location.hostname + ':' + port;
// window.location.port;

export class ApiService {

    static get baseUrl() { return baseUrl; }

    static async getData(path) {
        let url = baseUrl + path;
        try {
            const response =  await axios.get(url);
            return response.data;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    static async postData(path, data) {
        const url = baseUrl + path;
        try {
            return await axios.post(url, data);
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    // static async sendFiles(taskName, studentName, files) {
    //     const data = new FormData();
    //     for (let file of files) {
    //         // console.log(file.fileId, file.codeFile)
    //         data.append(file.fileId, file.codeFile);
    //     }
    //     data.append('studentName', studentName);
    //     data.append('taskName', taskName);
    //     try {
    //         let res = await axios.post(
    //             baseUrl + `/checkTask/${taskName}`,
    //             data,
    //             {
    //                 headers: { 'Content-Type': 'multipart/form-data' }
    //             }
    //         );
    //         return res.data;
    //     } catch (error) {
    //         console.error(error);
    //         return null;
    //     }
    // }
}
