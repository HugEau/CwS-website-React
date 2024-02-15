import valerieImg from '../images/valerieboutique.png'
import ohMyFoodImg from '../images/Ohmyfood.png'
import kasaImg from '../images/Kasa.png'
import ridingCitiesImg from '../images/ridingCitiesImg.png'
import CwSV1Img from '../images/CwSV1.png'
import CwSReactImg from '../images/CwSReact.png'
import bookiImg from '../images/Booki.png'
import printItImg from '../images/PrintIt.png'
import sophieBluelImg from '../images/sophieBluel.png'
import ninaCarducciImg from '../images/NinaCarducci.png'
import menuMakerImg from '../images/menuMaker.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faArrowUpWideShort, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add( faHtml5, faCss3, faJs, faReact, faSass, faPalette, faArrowUpWideShort, faPeopleGroup )

let Html5 = [<FontAwesomeIcon icon={faHtml5} size='2xl'/>, "HTML"]
let Css3 = [<FontAwesomeIcon icon={faCss3} size='2xl'/>, "CSS"]
let Js = [<FontAwesomeIcon icon={faJs} size='2xl'/>, "JS"]
let ReactJS = [<FontAwesomeIcon icon={faReact} size='2xl'/>, "React"]
let Sass = [<FontAwesomeIcon icon={faSass} size='2xl'/>, "Sass"]
let Palette = [<FontAwesomeIcon icon={faPalette} size='2xl'/>, "Design"]
let ArrowUpWideShort = [<FontAwesomeIcon icon={faArrowUpWideShort} size='2xl'/>, "SEO"]
let PeopleGroup = [<FontAwesomeIcon icon={faPeopleGroup} size='2xl'/>, "Gestion"]

export const works = [
    {
        "name": "Valérie Boutique",
        "image": valerieImg,
        "imagesRoller": [valerieImg,CwSReactImg],
        "link": "https://www.valerieboutique.fr",
        "id": "valerie",
        "code": [Html5,Css3,Js,Palette,ArrowUpWideShort],
        "category": "Vitrine",
        "description": "Site vitrine d’une boutique de prêt-à-porter spécialisée dans le Lin et le Velours à Honfleur, Calvados<br/><br/><u><b>Travail réalisé :</b></u> Design, création (cahier des charges, HTML, CSS, JS), refonte des bases (corrections + commits régulier), gestion Back-End, hébergement / mise en ligne, présentation à l’entrepreneur",
        "fullDescription": "Test",
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "OCR - CwS Portfolio",
        "image": CwSReactImg,
        "imagesRoller": [CwSReactImg,CwSV1Img],
        "link": "https://www.chesnelwebstudio.fr",
        "id": "CwSReact",
        "code": [Html5,Css3,Js,ReactJS,ArrowUpWideShort],
        "category": "Formation",
        "description": "Projet d'optimisation de performances, de référencement et d'accessibilité",
        "fullDescription": "",
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - OhMyFood",
        "image": ohMyFoodImg,
        "imagesRoller": [ohMyFoodImg,CwSReactImg],
        "link": "https://hugeau.github.io/OCR-P4-OhMyFood/index.html",
        "id": "ohMyFood",
        "code": [Html5,Sass],
        "category": "Formation",
        "description": "Création de l'interface d'un site de réservation de restaurant<br/><br/><u><b>Travail réalisé :</b></u> Suivi des designs imposés, utilisation d'animations, création en HTML et SASS, création manuelle de page pour les restaurants",
        "fullDescription": "",
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "OCR - Kasa",
        "image": kasaImg,
        "imagesRoller": [kasaImg,CwSReactImg],
        "link": "https://github.com/HugEau/OCR-P8-Kasa/",
        "id": "kasa",
        "code": [Html5,Sass],
        "category": "Formation",
        "description": "Création de l'interface d'un site de réservation de restaurant<br/><br/><u><b>Travail réalisé :</b></u> Suivi des designs imposés, utilisation d'animations, création en HTML et SASS, création manuelle de page pour les restaurants",
        "fullDescription": "",
        "homePage": true,
        "isOnline": false
    },
    {
        "name": "CwS - v1",
        "image": CwSV1Img,
        "imagesRoller": [CwSV1Img,CwSReactImg],
        "link": "https://github.com/HugEau/OCR-P8-Kasa",
        "id": "CwSV1",
        "code": [Html5,Sass,Js],
        "category": "Portfolio",
        "description": "",
        "fullDescription": "",
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "OCR - Riding Cities",
        "image": ridingCitiesImg,
        "imagesRoller": [ridingCitiesImg,CwSReactImg],
        "link": "https://hugeau.github.io/OCR-Projet2-RidingCities/",
        "id": "ridingCities",
        "code": [Html5,Css3],
        "category": "Formation",
        "description": "Premier projet HTML CSS chez OpenClassrooms, intégrations de features mineurs",
        "fullDescription": "",
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - Booki",
        "image": bookiImg,
        "imagesRoller": [bookiImg,CwSReactImg],
        "link": "https://hugeau.github.io/OCR-Projet3-Booki/",
        "id": "booki",
        "code": [Html5,Css3],
        "category": "Formation",
        "description": "Projet HTML CSS chez OpenClassrooms, intégrations des designs imposés",
        "fullDescription": "",
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - Print It",
        "image": printItImg,
        "imagesRoller": [printItImg,CwSReactImg],
        "link": "https://hugeau.github.io/OCR-P5-Print-It/",
        "id": "printIt",
        "code": [Html5,Css3,Js],
        "category": "Formation",
        "description": "Intégration d'un image roller à un portfolio",
        "fullDescription": "",
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - Sophie Bluel",
        "image": sophieBluelImg,
        "imagesRoller": [sophieBluelImg,CwSReactImg],
        "link": "https://github.com/HugEau/OCR-P6-Sophie-Bluel",
        "id": "sophieBluel",
        "code": [Html5,Css3],
        "category": "Formation",
        "description": "Projet complet d'intégration HTML, CSS et JS, utilisation d'une API REST en NodeJS, intégration de modales administrateurs",
        "fullDescription": "",
        "homePage": false,
        "isOnline": false
    },
    {
        "name": "OCR - Menu Maker",
        "image": menuMakerImg,
        "imagesRoller": [menuMakerImg,CwSReactImg],
        "link": "",
        "id": "menuMaker",
        "code": [PeopleGroup],
        "category": "Formation",
        "description": "Projet de gestion",
        "fullDescription": "",
        "homePage": false,
        "isOnline": false
    },
    {
        "name": "OCR - Nina Carducci",
        "image": ninaCarducciImg,
        "imagesRoller": [ninaCarducciImg,CwSReactImg],
        "link": "https://hugeau.github.io/OCR-Projet2-RidingCities/",
        "id": "ninaCarducci",
        "code": [Html5,ArrowUpWideShort],
        "category": "Formation",
        "description": "Projet d'optimisation de performances, de référencement et d'accessibilité",
        "fullDescription": "",
        "homePage": false,
        "isOnline": true
    }
]