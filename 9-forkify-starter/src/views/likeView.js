import { limitRecipeTitle } from "./searchView";
const { elements } = require("./base");


export const toggleLikeButton = (isLike) => {
    const iconString = isLike ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconString}`);
}

export const toggleLikeMenu = (numLikes) => {
    elements.likeFields.style.visibility = numLikes > 0 ? 'visible' : 'hidden';

}

export const renderLike = (like) => {
    const markup = `
    <li>
        <a class="likes__link" href="#${like.id}">
            <figure class="likes__fig">
                <img src="${like.img}" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${limitRecipeTitle(like.title)}</h4>
                <p class="likes__author">NAM ĐẠI NHÂN</p>
            </div>
        </a>
    </li>
    `;
    elements.likeList.insertAdjacentHTML('beforeend',markup);
};

export const deleteLike = (id) => {
    const el = document.querySelector(`.like__link[href*="#${id}"`);

    if (el) el.parentElement.removeChild(el);
}