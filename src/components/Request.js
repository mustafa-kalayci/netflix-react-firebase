const key = "e9c1bf6c7ca23094a128900811f1d18e";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en=US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en=US&page=1`,
  requestTrending: ` https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
