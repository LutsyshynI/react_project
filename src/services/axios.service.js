import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((conf) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTRiMDliMzRhNzNmYTAyYzcxOWVlZTI2ZTIwNGNhNCIsInN1YiI6IjYzNGZjYjgxNTZiOWY3MDA3YjEyMDQzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f5BsKqqrawYieeSOThrmvNTtEq2ib8NPJQVAk953rcU'

    if (access) {
        conf.headers.Authorization = `Bearer ${access}`
        console.log(conf);
    }
    return conf
})

export {axiosService}