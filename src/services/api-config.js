export const apiConfig = {
  baseUrl: process.env.NODE_ENV === 'production' 
    ? "https://my-json-server.typicode.com/tomrodww/proj-js-04" 
    : "http://localhost:3333"
};
