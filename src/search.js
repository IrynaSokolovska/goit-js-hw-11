import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import 'simplelightbox/dist/simple-lightbox.min.js';

import { serviceAPI } from './service';
import { createMarkUp } from './template';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
let page = 1;
let query;
const lightbox = new SimpleLightbox('.gallery a');
form.addEventListener('submit', handlerSearchForm);
loadMore.addEventListener('click', handlerLoadMore);

async function handlerSearchForm(evt) {
  evt.preventDefault();
  loadMore.hidden = true;
  gallery.innerHTML = ''; 
  
    const { searchQuery } = evt.currentTarget.elements;
    
  query = searchQuery.value.trim();
  
  page = 1;
  evt.currentTarget.reset();

  if (!query) {
    Notiflix.Notify.failure(
        'Sorry, empty input. Please fill it.'
      );
    return;
  }
  

  try {
    const data = await serviceAPI(query);
    
    if (!data.hits.length) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
      
    }

    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);

      gallery.innerHTML = createMarkUp(data.hits);
      lightbox.refresh();

    if (data.totalHits > data.hits.length) {
      loadMore.hidden = false;
    }
  } catch (error) {
    Notiflix.Notify.failure('Oops');    
  }  
}

async function handlerLoadMore() {
  try {
    page += 1;
    const data = await serviceAPI(query, page);
      gallery.insertAdjacentHTML(`beforeend`, createMarkUp(data.hits));
      lightbox.refresh();
    if (page * 40 >= data.totalHits) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );
      loadMore.hidden = true;
      return;
    }
  } catch (error) {
    Notiflix.Notify.failure('Oops');
  }
}
