import Tabbies from "./lessons/tabbies";
import NFT from "./lessons/nft";

const assignment = document.querySelector('body').getAttribute('data-assignment');

switch (assignment) {

    case 'tabbies':
        Tabbies();
        console.log("Tabbies Lesson");
        break;
    case 'nft':
        NFT();
        console.log("NFT Lesson");
        break;
    case 'api':
        console.log("API Lesson");
        break;
    default: 
        console.log("No Lesson");
}