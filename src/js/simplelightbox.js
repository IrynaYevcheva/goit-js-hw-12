import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('#gallery a', {
  showCounter: false,
  captionsData: 'alt',
  captionDelay: 200,
});

export default lightbox;
