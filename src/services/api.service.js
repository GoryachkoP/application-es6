import { request } from "http"

class ApiService {
    constructor(baseUrl) {
        this.url = baseUrl
    }

    async createPost(post) {
        try {
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            })

            const responce = await fetch(request)
            return await responce.json()
        } catch (error) {
            console.error(error);

        }
    }
}

export const apiService = new ApiService('https://pavel-js.firebaseio.com')