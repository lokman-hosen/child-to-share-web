import {
    faBook, faPuzzlePiece, faShirt, faPencil, faFutbol, faBabyCarriage, faShoePrints, faPalette,
    faFlask, faMitten, faGuitar, faMobileScreen, faChair, faPumpSoap, faCakeCandles, faWandMagicSparkles,
    faBicycle, faPersonDress, faBagShopping, faGem, faStar, faTag,
} from '@fortawesome/free-solid-svg-icons';

// Categories have no icon stored (icon column is null), so map by name for display only.
const MAP = [
    [/book/i, faBook], [/toy|doll/i, faPuzzlePiece], [/cloth|borka|jaynamaj/i, faShirt], [/dress/i, faPersonDress],
    [/school|stationer/i, faPencil], [/sport/i, faFutbol], [/baby/i, faBabyCarriage], [/shoe/i, faShoePrints],
    [/art|craft/i, faPalette], [/educat/i, faFlask], [/winter/i, faMitten], [/music/i, faGuitar],
    [/electron/i, faMobileScreen], [/furnit/i, faChair], [/hygien/i, faPumpSoap], [/party/i, faCakeCandles],
    [/cosmet|hair/i, faWandMagicSparkles], [/transport|cycle|bike/i, faBicycle], [/bag/i, faBagShopping],
    [/jewel/i, faGem],
];

export default function categoryIcon(name = '') {
    for (const [re, icon] of MAP) if (re.test(name)) return icon;
    return name ? faTag : faStar;
}
