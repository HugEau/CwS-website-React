import valerieNextImg from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext1.webp'
import valerieNextImg2 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext2.webp'
import valerieNextImg3 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext3.webp'
import valerieNextImg4 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext4.webp'
import valerieNextImg5 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext5.webp'
import valerieNextImg6 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext6.webp'
import valerieNextImg7 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext7.webp'
import valerieNextImg8 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext8.webp'
import valerieNextImg9 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext9.webp'
import valerieNextImg10 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext10.webp'
import valerieNextImg11 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext11.webp'
import valerieNextImg12 from '../images/ValerieBoutiqueNext/ValerieBoutiqueNext12.webp'

import piraimg from '../images/PiraMultisports/piramultisport1.webp'
import piraimg2 from '../images/PiraMultisports/piramultisport2.webp'
import piraimg3 from '../images/PiraMultisports/piramultisport3.webp'
import piraimg4 from '../images/PiraMultisports/piramultisport4.webp'

import valerieImg from '../images/ValerieBoutique/valerieboutique.webp'
import valerieImg2 from '../images/ValerieBoutique/valerieboutiqueVetement.webp'
import valerieImg3 from '../images/ValerieBoutique/valerieboutiqueModal.webp'

import ohMyFoodImg from '../images/OhMyFood/ohmyfood.webp'
import ohMyFoodImg2 from '../images/OhMyFood/ohmyfoodRest.webp'
import ohMyFoodImg3 from '../images/OhMyFood/ohmyfoodMenu.webp'

import kasaImg from '../images/Kasa/kasa.webp'
import kasaImg2 from '../images/Kasa/kasaLogement.webp'
import kasaImg3 from '../images/Kasa/kasaCollaps.webp'
import kasaImg4 from '../images/Kasa/kasaAbout.webp'

import CwSV1Img from '../images/CwSV1/cwsv1.webp'
import CwSV1Img2 from '../images/CwSV1/cwsV1Portfolio.webp'
import CwSV1Img3 from '../images/CwSV1/cwsV1Contact.webp'

import CwSReactImg from '../images/CwSReact/CwSReact.webp'
import CwSReactImg2 from '../images/CwSReact/CwSReactPortfolio.webp'
import CwSReactImg3 from '../images/CwSReact/CwSReactPortfolioList.webp'
import CwSReactImg4 from '../images/CwSReact/CwSReactWork.webp'

import bookiImg from '../images/Booki/booki.webp'
import bookiImg2 from '../images/Booki/bookiAct.webp'

import sophieBluelImg from '../images/SophieBluel/sophiebluel.webp'
import sophieBluelImg2 from '../images/SophieBluel/sophiebluelLogin.webp'
import sophieBluelImg3 from '../images/SophieBluel/sophiebluelProjet.webp'

import ninaCarducciImg from '../images/NinaCarducci/ninacarducci.webp'
import ninaCarducciImg2 from '../images/NinaCarducci/ninacarducciWave.webp'
import ninaCarducciImg3 from '../images/NinaCarducci/ninacarducciLighthouse.webp'

import menuMakerImg from '../images/MenuMaker/menumaker.webp'
import menuMakerImg2 from '../images/MenuMaker/menumakerKanban.webp'
import menuMakerImg3 from '../images/MenuMaker/menumakerSolution.webp'

import next from '../images/nextjs.svg'
import mongo from '../images/mongodb.svg'


import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3, faJs, faReact, faSass, faNodeJs} from '@fortawesome/free-brands-svg-icons';
import { faPalette, faArrowUpWideShort, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add( faHtml5, faCss3, faJs, faReact, faSass, faPalette, faArrowUpWideShort, faPeopleGroup )

let Html5 = [<FontAwesomeIcon icon={faHtml5} size='2xl'/>, "HTML"]
let Css3 = [<FontAwesomeIcon icon={faCss3} size='2xl'/>, "CSS"]
let Js = [<FontAwesomeIcon icon={faJs} size='2xl'/>, "JS"]
let ReactJS = [<FontAwesomeIcon icon={faReact} size='2xl'/>, "React"]
let NextJS = [<img src={next} alt='nextIcon'/>, "NextJS"]
let MongoDB = [<img src={mongo} alt='mongoIcon'/>, "Mongo"]
let NodeJS = [<FontAwesomeIcon icon={faNodeJs} size='2xl'/>, "NodeJS"]
let Sass = [<FontAwesomeIcon icon={faSass} size='2xl'/>, "Sass"]
let Palette = [<FontAwesomeIcon icon={faPalette} size='2xl'/>, "Design"]
let ArrowUpWideShort = [<FontAwesomeIcon icon={faArrowUpWideShort} size='2xl'/>, "SEO"]
let PeopleGroup = [<FontAwesomeIcon icon={faPeopleGroup} size='2xl'/>, "Gestion"]

export const works = [
    {
        "name": "Pira Multisports",
        "image": piraimg,
        "imagesRoller": [piraimg,piraimg2,piraimg3,piraimg4],
        "date": "Septembre 2025",
        "link": "https://www.piramultisports.fr",
        "id": "piraMultisports",
        "code": [NextJS,ReactJS,MongoDB,NodeJS,Palette,ArrowUpWideShort,PeopleGroup],
        "category": "Vitrine",
        "description": "Site d'entreprise pour un coach sportif sur le secteur du Havre.<br/>Mise en place d'un dashboard personnalisé et réutilisable pour la rédaction d'article et la gestion des contenus.<br/>Module d'actualités, d'article, de contact et d'affichage d'univers et de réseaux sociaux.",
        "fullDescription": 'Pira Multisports est un projet de site vitrine pour un coach sportif basé au Havre.<br/><br/>L’objectif principal de ce site est de présenter les différentes prestations proposées par le coach, mais aussi de permettre une gestion simplifiée des contenus via un dashboard administrateur personnalisé.<br/><br/>Ce dashboard permet au coach de rédiger et publier des articles, gérer les images et vidéos associées, ainsi que de mettre à jour les informations sur les services offerts.<br/><br/>Le site a été conçu avec une attention particulière portée à l’expérience utilisateur, garantissant une navigation fluide et intuitive pour les visiteurs.<br/><br/>',
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "Valérie Boutique",
        "image": valerieNextImg,
        "imagesRoller": [valerieNextImg,valerieNextImg2,valerieNextImg3,valerieNextImg4,valerieNextImg5,valerieNextImg6,valerieNextImg7,valerieNextImg8,valerieNextImg9,valerieNextImg10,valerieNextImg11,valerieNextImg12],
        "date": "Mars 2024",
        "link": "https://www.valerieboutique.fr",
        "id": "valerieNext",
        "code": [NextJS,ReactJS,MongoDB,NodeJS,Palette,ArrowUpWideShort,PeopleGroup],
        "category": "Vitrine",
        "description": "Site vitrine d’une boutique de prêt-à-porter spécialisée dans le Lin et le Velours à Honfleur, Calvados<br/><br/><u><b>Travail réalisé :</b></u> Design, création (cahier des charges, HTML, Sass, NextJS dont React et Node, MongoDB), refonte totale du site, implémentation Back-End de fonctions administratives, hébergement / mise en ligne, présentation à l’entrepreneur",
        "fullDescription": 'Valérie Boutique peut être décrit comme le projet pionnier de CwS. De nombreuses versions ont été réalisées afin de satisfaire chaque envies de cette entrepreneuse basée à Honfleur. Du design à la gestion des nouveaux articles, CwS s’occupe de tout.<br/><br/>Plusieurs étapes de conception ont été nécessaires, notamment de nombreuses phases de tests et de recherche de design pour faire suivre les évolutions créatives et techniques de CwS, incluant l’intégration du framework NextJS.<br/><br/>Dans l’optique d’un déploiement optimal, le site a subi une mise-à-jour importante récemment afin de garantir un référencement naturel renforcé, mais aussi proposer des fonctionnalités majeures tel que la gestion et création d’articles par l’entrepreneuse via par une interface administrateur et l’intégration d’une base donnée, d’un serveur et d’une API qui fonctionnent en cohésion pour fournir aux utilisateurs une expérience de navigation optimale.<br/><br/>Les sites ne restant pas bien longtemps dans une version fixe, des nouveautés techniques aux nouvelles tendances de social engineering, en passant par les découvertes de failles de sécurité, ces besoins requièrent une veille conséquente, ainsi rien ne doit être laissé au hasard. C’est pourquoi le site Valérie Boutique est géré, hébergé, sécurisé, optimisé et mis à jour par mes soins.<br/>Des mises à jours hebdomadaires sont déployés afin de répondre au mieux aux volontés de la boutique, mais également aux besoins des clients.<br/><br/>',
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "Valérie Boutique - Ancienne Version",
        "image": valerieImg,
        "imagesRoller": [valerieImg,valerieImg2,valerieImg3],
        "date": "Septembre - Décembre 2023",
        "link": "https://hugeau.github.io/ValerieBoutique-Website-Project/",
        "id": "valerie",
        "code": [Html5,Css3,Js,Palette,ArrowUpWideShort,PeopleGroup],
        "category": "Vitrine",
        "description": "Site vitrine d’une boutique de prêt-à-porter spécialisée dans le Lin et le Velours à Honfleur, Calvados<br/><br/><u><b>Travail réalisé :</b></u> Design, création (cahier des charges, HTML, CSS, JS), refonte des bases (corrections + commits régulier), gestion Back-End, hébergement / mise en ligne, présentation à l’entrepreneur",
        "fullDescription": 'Valérie Boutique peut être décrit comme le projet pionnier de CwS. De nombreuses versions ont été réalisées afin de satisfaire chaque envies de cette entrepreneuse basée à Honfleur. Du design à la gestion des nouveaux articles, CwS s’occupe de tout.<br/><br/>Plusieurs étapes de conception ont été nécessaires, notamment de nombreuses phases de tests et de recherche de design pour faire suivre les évolutions créatives et techniques de CwS.<br/><br/>Dans l’optique d’un déploiement optimal, le site a subi une mise-à-jour importante récemment afin de perpétuer cette recherche du meilleur pour ce site.<br/><br/>Ces nouvelles mises à jours sont désormais visible sur cet article : <a href="/projets/valerieNext">Valérie Boutique Next</a><br/><br/>',
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - CwS Portfolio",
        "image": CwSReactImg,
        "imagesRoller": [CwSReactImg,CwSReactImg2,CwSReactImg3,CwSReactImg4],
        "date": "Février 2024",
        "link": "https://www.chesnelwebstudio.fr",
        "id": "CwSReact",
        "code": [Html5,Sass,Js,ReactJS,Palette,ArrowUpWideShort,PeopleGroup],
        "category": "Formation",
        "description": "Projet d'optimisation de performances, de référencement et d'accessibilité",
        "fullDescription": 'Le site web de CwS devait se montrer à la hauteur des prestations proposées. C’est pourquoi une refonte totale a été engagée afin de correspondre à la fois aux nouveaux défis techniques mais aussi pour exposer au maximum mes créations.<br/><br/>Le site s’enrichit alors de toutes nouvelles pages comme l’apparition d’un portfolio plus complet et de descriptions techniques et simplifiées pour votre plus grand confort.<br/><br/>Cette refonte totale passe notamment par la migration vers le langage React, permettant d’obtenir un résultat agréable à l’oeil aussi bien dans le visuel que dans le code.<br/>Cette nouvelle technologie, portée par Facebook, permet notamment la création d’un site internet modulaire mais également réutilisable.<br/><br/>Utilisé pour sa fiabilité pour beaucoup de projet notamment les boutiques en ligne, cette technologie est le futur du web.<br/><br/>',
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - Kasa",
        "image": kasaImg,
        "imagesRoller": [kasaImg,kasaImg2,kasaImg3,kasaImg4],
        "date": "Février 2024",
        "link": "https://github.com/HugEau/OCR-P8-Kasa/",
        "id": "kasa",
        "code": [Html5,Sass,ReactJS],
        "category": "Formation",
        "description": "Création de l'interface d'un site de réservation de restaurant<br/><br/><u><b>Travail réalisé :</b></u> Suivi des designs imposés, utilisation d'animations, création en HTML et Sass, création manuelle de page pour les restaurants",
        "fullDescription": "Kasa est le premier projet React que j’ai eu à coder pendant ma formation.<br/><br/>Ce site internet a nécessité la mise en place d’un environnement de travail particulier, aidé notamment de Create React App.<br/>C’est un site complètement modulaire grâce à ses différents composants créer pour faciliter la mise en place du site web mais aussi du développement.<br/>Il intègre notamment React Router et permet une navigation aisée sur le site et des pages dédiées à chaque articles proposés.<br/><br/>Ce site se rapproche beaucoup de ce qui peut être fait pour votre projet en terme de fonctionnalités et de finitions. Ces technologies ont d’ailleurs été utilisées pour créer le site de CwS et permet de donner un aspect professionnel et pratique à votre site web.<br/><br/>",
        "homePage": false,
        "isOnline": false
    },
    {
        "name": "OCR - OhMyFood",
        "image": ohMyFoodImg,
        "imagesRoller": [ohMyFoodImg,ohMyFoodImg2,ohMyFoodImg3],
        "date": "Novembre 2023",
        "link": "https://hugeau.github.io/OCR-P4-OhMyFood/index.html",
        "id": "ohMyFood",
        "code": [Html5,Sass],
        "category": "Formation",
        "description": "Création de l'interface d'un site de réservation de restaurant<br/><br/><u><b>Travail réalisé :</b></u> Suivi des designs imposés, utilisation d'animations, création en HTML et SASS, création manuelle de page pour les restaurants",
        "fullDescription": "OhMyFood est un projet conséquent permettant l’initiation au Sass, un préprocesseur CSS permettant une meilleure organisation des fichiers de style.<br/><br/>De l'intégration du responsive design (design pour tablette et mobile) à l'utilisation d'animations pour rendre plus intéractif la navigation, ce projet est avant tout un exercice de consolidation des compétences en HTML et dans les différentes techniques CSS en passant par le Sass.<br/><br/>Un site codé avec le préprocesseur Sass permet une meilleur maintenance sur le long terme ainsi qu’une meilleure compréhension à la relecture du code facilitant grandement la réutilisation de composants et surtout l’ajout de fonctionnalités. Couplé à l’utilisation de variables, ce langage permet la réduction des lignes de codes et par conséquent d’avoir un projet épuré et plus léger.<br/><br/>",
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "OCR - Nina Carducci",
        "image": ninaCarducciImg,
        "imagesRoller": [ninaCarducciImg,ninaCarducciImg2,ninaCarducciImg3],
        "date": "Février 2024",
        "link": "https://hugeau.github.io/OCR-P9-Nina-Carducci/",
        "id": "ninaCarducci",
        "code": [Html5,ArrowUpWideShort],
        "category": "Formation",
        "description": "Projet d'optimisation de performances, de référencement et d'accessibilité",
        "fullDescription": "Le portfolio de Nina Carducci est le projet de ma formation OpenClassrooms qui s’oriente vers l’optimisation de site web.<br/><br/>Le travail exécuté passe notamment par l’optimisation de l’accessibilité pour les personnes malvoyantes, l’optimisation des performances et du SEO pour permettre un meilleur référencement naturel.<br/>Les performances ont été améliorées par une diminution de la taille des fichiers, une optimisation du code pour permettre un premier rendu du site rapide et de laisser le temps aux divers scripts JavaScript de charger en temps voulu.<br/><br/><b>Nota Bene :</b> Ces modifications ont été apportées à un site web déjà terminé. Elles permettent aux moteurs de recherches comme google d’améliorer le positionnement du site web dans les recherches. Plus l’optimisation est poussée, meilleure sera le classement de votre site internet.<br/><br/>",
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - Sophie Bluel",
        "image": sophieBluelImg,
        "imagesRoller": [sophieBluelImg,sophieBluelImg2,sophieBluelImg3],
        "date": "Décembre 2023",
        "link": "https://github.com/HugEau/OCR-P6-Sophie-Bluel",
        "id": "sophieBluel",
        "code": [Html5,Sass,Js],
        "category": "Formation",
        "description": "Projet complet d'intégration HTML, CSS et JS, utilisation d'une API REST en NodeJS, intégration de modales administrateurs",
        "fullDescription": "Le portfolio de Sophie Bluel a surement été le projet le plus complexe et le plus intéressant.<br/><br/>Ce projet a nécessité l’intégration d’une API Rest Back-End en NodeJS par le biais de JavaScript pur.<br/>Les fonctionnalités de filtre de projet ou encore de connexion ont été intégrées.<br/><br/>Les efforts se sont concentrés au niveau de la sécurité permettant à l’entrepreneur seule de se connecter à son compte afin d’ajouter et supprimer ses travaux aux travers d’une modale (pop-up intégrée au site) protégée par des cookies périssables.<br/><br/>",
        "homePage": false,
        "isOnline": false
    },
    {
        "name": "CwS - Prototype",
        "image": CwSV1Img,
        "imagesRoller": [CwSV1Img,CwSV1Img2,CwSV1Img3],
        "date": "Janvier 2024",
        "link": "https://hugeau.github.io/CwS-website",
        "id": "CwSV1",
        "code": [Html5,Sass,Js,Palette,ArrowUpWideShort,PeopleGroup],
        "category": "Portfolio",
        "description": "Création d'un site prototype avant livraison du site final<br/><br/><u><b>Travail réalisé :</b></u> Création de la charte graphique, création en HTML, Sass, JavaScript, mise en ligne, hébergement, communication, référencement",
        "fullDescription": "Le site web de CwS a été le phare de la création de l’entreprise. <br/>D’un côté, il fallait un design marquant et propre à l’esprit de l’entreprise, d’un autre il fallait présenter au mieux et de manière concise mes compétences et mes projets.<br/><br/>Ainsi est né le site CwS. Cette première version était en fait une version test avant la transition vers un site plus complet et plus représentatif de mes capacités.<br/>Dans l’optique où ce site était voué à évoluer fréquemment, il a été pensé pour être complémentent optimisé pour la migration vers ReactJS, mais aussi comme étant un bon exemple de prototype avant la livraison du site final.<br/><br/>Ce site a été l’occasion de découvrir un nouveau pant du design de site internet, de la gestion de projet, d’optimisation, de communication, d'hébergement et de mise en ligne.<br/><br/>",
        "homePage": false,
        "isOnline": true
    },
    {
        "name": "OCR - Booki",
        "image": bookiImg,
        "imagesRoller": [bookiImg,bookiImg2],
        "date": "Octobre 2023",
        "link": "https://hugeau.github.io/OCR-Projet3-Booki/",
        "id": "booki",
        "code": [Html5,Css3],
        "category": "Formation",
        "description": "Projet HTML CSS chez OpenClassrooms, intégrations des designs imposés",
        "fullDescription": "Booki est le premier projet digne de ce nom en HTML et CSS que j’ai pu coder pendant ma formation chez OpenClassrooms.<br/><br/>Gestion de l’armature du site, expérimentation approfondie du CSS, gestion de keyframes, de media queries. <br/>En d’autres termes une création de A à Z du site internet afin de suivre les demandes graphiques avec un code CSS fonctionnel, suivi de sa structure HTML cohérente, mais également techniques au niveau des animations, de l’accessibilité sur téléphone et tablette.<br/><br/>",
        "homePage": true,
        "isOnline": true
    },
    {
        "name": "OCR - Menu Maker",
        "image": menuMakerImg,
        "imagesRoller": [menuMakerImg,menuMakerImg2,menuMakerImg3],
        "date": "Février 2024",
        "link": "https://www.notion.so/b904088877564da38983f81ccf23c155?v=3102f3a6a6d642838d3dd531b41341cb&pvs=4",
        "id": "menuMaker",
        "code": [PeopleGroup],
        "category": "Formation",
        "description": "Projet de gestion",
        "fullDescription": "Menu Maker est un projet de gestion.<br/><br/>La gestion de projet est une partie très importante du métier de développeur, notamment freelance, elle consiste notamment à la planification des sessions de code, la veille informationnelle, les choix technologiques et leurs présentation à l’entrepreneur.<br/>Cette partie du projet est surement la plus importante dans la vie de votre site internet car elle permet de fixer entre le développeur et le client les besoins et envies, mais surtout d’atteindre un objectif commun qu’est le rendu final du site web.<br/><br/>",
        "homePage": false,
        "isOnline": true
    }
]
