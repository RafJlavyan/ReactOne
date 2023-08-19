import axios, { Axios } from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/posts/"

export default class PostService {
    static async getAll(limit = 10, page = 1) {
       const response = await axios.get(
        baseUrl,
            {
                params: {
                    _limit: limit,
                    _page: page
                }
            }
          );
          return response
    }

    static async getById(id) {
        const response = await axios.get(
            baseUrl+id
        );
        return response
    }

    static async getComment(id) {
        const response = await axios.get(
            baseUrl+id+'/comments'
        );
        return response
    }
}