import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38039497-5ee2ddc1c8430029b87bf9d3f';


async function serviceAPI(searchQuery, page=1) {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
    
    return response.data;
}
export {serviceAPI}