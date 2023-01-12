// Add imports above this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css"

import { galleryItems } from './gallery-items.js'
// Change code below this line

const gallery = document.querySelector(`.gallery`)

const marckup = galleryItems.map(({preview, original, alt ,description,}) => 
    `<div class="gallery">
    <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="" title="Beautiful Image"/></a>
</div>`
).join("")

gallery.insertAdjacentHTML("beforeend", marckup)

gallery.addEventListener(`click`, choosePhoto)

function choosePhoto(e) {
    if (!e.target.classList.contains(`gallery__image`)) {
        return
    }
    }
    var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});
      console.log(lightbox);
