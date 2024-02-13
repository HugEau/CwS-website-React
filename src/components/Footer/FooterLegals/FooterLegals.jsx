import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './FooterLegals.scss'

library.add( faClose )

function FooterLegals() {
    function legalsClose() {
        let legalPage = document.getElementById("legalsDiv")
        if(legalPage) {
            legalPage.style.display = "none"
        }
    }

    return (
        <div className="footer__legals" id="legalsDiv">
            <div className="footer__legals--modal">
                <div className="footer__legals--modalClose">
                    <button className="footer__legals--modalCloseBtn" id="closeModalBtn" onClick={ legalsClose }>
                        <FontAwesomeIcon icon={faClose} size='xl'/>
                    </button>
                </div>
                <div className="footer__legals--modalTxtCtn">
                    <p>
                        <span><b>Mentions Légales</b></span> <br/>
                        <br/>
                        <br/>
                        <b>Éditeur du site :</b> <br/>
                        <br/>
                        ChesnelWebStudio <br/>
                        Numéro SIREN : 983815838 <br/>
                        Adresse : 20 rue Vauquelin, Apt 46, 14000 Caen <br/>
                        Directeur de la publication : Hugo Chesnel <br/>
                        <br/>
                        <br/>
                        <b>Hébergeur :</b> <br/>
                        <br/>
                        GitHub Pages <br/>
                        Adresse : 95 RUE LA BOETIE à PARIS 8 (75008) <br/>
                        <br/>
                        <br/>
                        <b>Aucune utilisation de cookies :</b> <br/>
                        <br/>
                        ChesnelWebStudio n'utilise pas de cookies pour collecter des informations personnelles sur les visiteurs du site. <br/>
                        <br/>
                        <br/>
                        <b>Collecte d'informations :</b> <br/>
                        <br/>
                        ChesnelWebStudio ne collecte aucune information personnelle des utilisateurs, sauf les données nécessaires à la gestion des demandes de contact. Ces informations ne sont en aucun cas partagées avec des tiers sans le consentement explicite de l’utilisateur. <br/>
                        <br/>
                        <br/>
                        <b>Propriété intellectuelle :</b> <br/>
                        <br/>
                        L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est la propriété exclusive de ChesnelWebStudio. Toute reproduction ou utilisation non autorisée est strictement interdite. <br/>
                        <br/>
                        <br/>
                        <b>Liens externes :</b> <br/>
                        <br/>
                        ChesnelWebStudio n'est pas responsable du contenu des sites externes liés depuis https://www.chesnelwebstudio.fr. <br/>
                        <br/>
                        <br/>
                        <b>Collecte de données personnelles via le formulaire de contact :</b><br/>
                        <br/>

                        Nous utilisons le service Formspree.io pour gérer notre formulaire de contact en ligne. Lorsque vous utilisez ce formulaire pour nous envoyer un message, les informations que vous fournissez, telles que votre nom, votre adresse e-mail et tout autre détail que vous choisissez de partager, sont collectées et transmises à notre équipe.
                        <br/>
                        Formspree.io agit en tant que tiers pour faciliter la transmission sécurisée des données du formulaire vers notre adresse e-mail. Veuillez noter que Formspree.io a sa propre politique de confidentialité, que vous pouvez consulter sur leur site web <a href="https://formspree.io/legal/privacy-policy/">https://formspree.io/legal/privacy-policy/</a>.
                        <br/>
                        Nous utilisons ces informations uniquement dans le but de répondre à votre demande ou de traiter votre commentaire. Vos données ne seront pas utilisées à des fins publicitaires ni partagées avec des tiers sans votre consentement explicite.
                        <br/>
                        En utilisant notre formulaire de contact, vous consentez à la collecte et au traitement de vos données personnelles comme décrit dans cette déclaration. Si vous avez des préoccupations concernant la confidentialité de vos données, veuillez nous contacter à l'email chesnelwebstudio@gmail.com .
                        <br/><br/>
                        Date de la dernière mise à jour : 31/01/2024<br/><br/>
                        

                        <b>Droit d'accès et de rectification :</b> <br/>
                        <br/>
                        Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l'adresse chesnelwebstudio@gmail.com. <br/>
                        <br/>
                        <br/>
                        <b>Coordonnées :</b> <br/>
                        <br/>
                        ChesnelWebStudio <br/>
                        20 rue Vauquelin, Apt 46, 14000 Caen <br/>
                        Téléphone : 06.95.03.58.56 <br/>
                        Email : chesnelwebstudio@gmail.com <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterLegals