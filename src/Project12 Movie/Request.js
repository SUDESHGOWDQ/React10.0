const API_Key = `ab1da08307f82007e9975d4dccf67670`

export const Request = {
	TrendingMovies:`trending/movie/day?api_key=${API_Key}&language=en-US`,
	UpcomingMovies:`movie/upcoming?api_key=${API_Key}&language=en-US&page=1`,
	PopularMovies:`movie/popular?api_key=${API_Key}&language=en-US&page=1`,
	TopRatedMovies:`movie/top_rated?api_key=${API_Key}&language=en-US&page=1`,
}