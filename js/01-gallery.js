import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
let modal;


const galleryMarkup = galleryItems
    .map(({ preview, original, description } = picture) => {
        const pictureMarkup =
            `<div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`
        return pictureMarkup
    })
    .join('');

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

function openModal(e) {
    e.preventDefault();

    modal = basicLightbox.create(`
    <div class="modal">
        <img
            src="${e.target.dataset.source}"
            alt="${e.target.alt}"
        />
    </div>
    `);

    modal.show();
};

function closeModal(e) {
    if (e.code === "Escape") {
        if (modal) {
            modal.close();
        };
    }
}


gallery.addEventListener('click', openModal);
gallery.addEventListener('keydown', closeModal);
