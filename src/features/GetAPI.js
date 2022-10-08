import axios from "axios";

const GetApi = async (keyword) => {
  const options = {
    method: "GET",
    url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
    params: { q: "indonesia", pageNumber: "1", pageSize: "10", autoCorrect: "true" },
    headers: {
      "X-RapidAPI-Key": "0598613c52msha7ed4913e26d0d7p1720cajsnaf17581b23e6",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };
  console.log("api", axios.request(options).data.value);
  return axios.request(options);
};

export default GetApi;
