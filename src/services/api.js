import axios from "axios";

// https://api.unsplash.com/photos/?client_id=A63Q8oSKswQnAkxSDhQCdHUR7BQNILyqV4Pl2he7KLM

const api = axios.create({
   baseURL: 'https://api.unsplash.com/',
   headers: {
      Authorization: 'Client-ID A63Q8oSKswQnAkxSDhQCdHUR7BQNILyqV4Pl2he7KLM'
   }
})

export default api;