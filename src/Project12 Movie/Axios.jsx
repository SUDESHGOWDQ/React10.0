import axios from "axios";

const Base_Url = `https://api.themoviedb.org/3/`;

export const Axios = axios.create({
	baseURL: Base_Url,
})

