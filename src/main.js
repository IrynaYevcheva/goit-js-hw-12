import iziToastMessage from './js/message.js';
import lightbox from './js/simplelightbox.js';

import axios from 'axios';

const form = document.querySelector('#form');
const gallery = document.querySelector('#gallery');
const loadingMessage = document.querySelector('.loader');
const loaderButton = document.querySelector('.loader-button');

let page = 1;
const per_page = 40;
let userSearchRequest;

form.addEventListener('submit', fetchImg);
loaderButton.addEventListener('click', onClickLoading);

async function onClickLoading() {
  loaderButton.classList.add('hidden');
  loadingMessage.classList.remove('hidden');
  await getImg(userSearchRequest);
}

function onClickLoadingBtn(totalHits) {
  const totalPages = Math.ceil(totalHits / per_page);
  if (page > totalPages) {
    iziToastMessage(
      'We are sorry, but you have reached the end of search results.'
    );
  } else {
    loaderButton.classList.remove('hidden');
  }
}

async function fetchImg(event) {
  event.preventDefault();
  loadingMessage.classList.remove('hidden');
  gallery.innerHTML = '';
  page = 1;
  userSearchRequest = event.currentTarget.elements.inputToSearch.value.trim();
  event.currentTarget.reset();
  loaderButton.classList.add('hidden');
  await getImg(userSearchRequest);
}

async function getImg(userSearchRequest) {
  try {
    const searchParams = new URLSearchParams({
      key: '41535570-7b1028e1c6f1b041bb0744cc1',
      q: userSearchRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page,
    });
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    const images = response.data;
    if (images.hits.length === 0) {
      iziToastMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      loaderButton.classList.add('hidden');
    } else {
      renderImages(images);
      onClickLoadingBtn(images.totalHits);
      lightbox.refresh();
    }
  } catch (error) {
    iziToastMessage('Oop.. somethings. went wrong. Please try again.');
  } finally {
    loadingMessage.classList.add('hidden');
  }
}

function renderImages(images) {
  page += 1;
  const markup = images.hits
    .map(
      img =>
        `<li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img class="gallery-img" src="${img.webformatURL}" alt="${img.tags}" loading="lazy"/>
        </a>
        <div class="image-info">
          <div>Likes:<span>${img.likes}</span></div>
          <div>Views:<span>${img.views}</span></div>
          <div>Comments:<span>${img.comments}</span></div>
          <div>Downloads:<span>${img.downloads}</span></div>
        </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  const scrollItem = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: scrollItem.height * 2.0,
    left: 0,
    behavior: 'smooth',
  });
}
