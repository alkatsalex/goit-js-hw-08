// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const marckup = galleryItems.map(({preview, original, description,}) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join("")

gallery.innerHTML = marckup

gallery.addEventListener(`click`, choosePhoto)

function choosePhoto(e) {
 e.preventDefault();
  if (!e.target.classList.contains(`gallery__image`)) {
    return
  }

}
  var lightbox = new SimpleLightbox('.gallery__item a', { /* options */ });