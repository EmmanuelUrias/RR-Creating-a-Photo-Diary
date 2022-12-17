import { renderKoalaCardImage } from "./renderKoalaCardImage";
import { renderKoalaCardContent } from "./renderKoalaCardContent";
import { selectKoala } from "./selectActiveKoala"

// Renders a card to display a single koala
export let renderKoalaCard = koala => {
    let koalaCard = document.createElement('div')
    koalaCard.setAttribute('class', 'item')
    koalaCard.style.cursor = 'pointer';
    koalaCard.addEventListener('click', () => {
        selectKoala(koala)
        console.log(koala)
    })

    let koalaImage = renderKoalaCardImage(koala)
    let koalaContent = renderKoalaCardContent(koala)

    koalaCard.append(
        koalaImage,
        koalaContent
    )

    return koalaCard
}