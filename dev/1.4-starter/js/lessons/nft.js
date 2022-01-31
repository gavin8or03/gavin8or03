
const NFT = () => {
    window.addEventListener("DOMContentLoaded", () => {
        console.log("FROM NFT FILE")


        const bodyMain = document.querySelector(`body>div>main`);
        const newElementContainer = document.createElement(`ul`);

        const testObject = createNFT('name', 12, 'this collection', 'imgsrc', 'ownername', 1234, 5678, 910, 11, 12);

        console.log(testObject);

        // Create card from our template
        const newNFT = createDomNFT(testObject);

        // Create a <li> child of the <ul> we made above
        const newElement = document.createElement(`li`);

        // Add our card as the HTML within the newly created <li>
        newElement.innerHTML = newNFT;

        // Add the <li> to the DOM within the <ul>
        newElementContainer.appendChild(newElement);

    })

    const createNFT = (
        name,
        id,
        collection,
        img,
        owner,
        price,
        views,
        favorites,
        offers,
        history
    ) => (
        {
            name,
            id,
            collection,
            img,
            owner,
            price,
            views,
            favorites,
            offers,
            history
        }
    )
        






//One way to do it
// const createDomNFT = (nft) => {
//     const newElement = createNFT(nft.name, nft.id, nft.collection, nft.img, nft.owner, nft.price, nft.views, nft.favorites, nft.offers, nft.offers, nft.history);

//     return `<article data-nft-id="${newElement.id}">
//         <header>
//             <h4>${newElement.name}</h4>
//             <h5>Collection: ${newElement.collection}</h5>
//             <img src="${newElement.img}" alt="${newElement.name} from ${newElement.owner} in the ${newElement.collection} collection"/>
//         </header>
//         <ul>
//             <li>Owner:${newElement}</li>
//             <li>${newElement.owner}</li>
//             <li>${newElement.price}</li>
//             <li>${newElement.views}</li>
//             <li>${newElement.favorites}</li>
//             <li>${newElement.offers}</li>
//             <li>${newElement.history}</li>
//         </ul>
//     </article>`
// }

// // Preferred way to do it
    const createDomNFT = (nft) => {
        const {
            name,
            id,
            collection,
            img,
            owner,
            price,
            views,
            favorites,
            offers,
            history } = createNFT(nft.name, nft.id, nft.collection, nft.img, nft.owner, nft.price, nft.views, nft.favorites, nft.offers, nft.history);
        
        return `<article data-nft-id="${id}">
        <header>
            <h4>${name}</h4>
            <h5>Collection:${collection}</h5>
            <img src="${img}" alt="${name} from ${owner} in the ${collection} collection"/>
        </header>
        <ul>
            <li>Owner:${owner}</li>
            <li>Price:${price}</li>
            <li>Views:${views}</li>
            <li>Favorites:${favorites}</li>
            <li>Offers:${offers}</li>
            <li>History:${history}</li>
        </ul>
    </article>`
        
    }


}

export default NFT;

