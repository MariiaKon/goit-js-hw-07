import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map(
        ({ preview, original, description } = picture) => {
            
            const pictureMarkup = `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`

            return pictureMarkup
        }
    )
    .join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);


let openModal;

gallery.addEventListener('click', openModal);

openModal = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250, 
});
