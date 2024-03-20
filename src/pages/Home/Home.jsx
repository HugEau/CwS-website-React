import './Home.scss'
import { works } from '../../assets/datas/works'

import BigWave from '../../components/BigWave/BigWave';
import PortfolioWork from '../../components/PortfolioWork/PortfolioWork';

import next from '../../assets/images/nextjs.svg'

import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faLinkedin, faGithub, faHtml5, faCss3, faReact, faSass, faJs } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HugoChesnel from '../../assets/images/hugochesnel.png'
import Github from '../../assets/images/github.png'

library.add( faInstagram, faLinkedin, faGithub, faHtml5, faCss3, faReact, faSass, faJs, faEnvelope, faPalette )

function Home() {
  return (
    <div className="HomePage">

      <BigWave />
      <div className='presentation'>
        <div className="presentation__content">
            <div className="presentation__content--about" id="presentation">
                <p>Présentation</p>
                <div className="presentation__content--aboutContents">
                    <div className="presentation__content--aboutContentsPicture">
                        <img src={HugoChesnel} alt="Hugo Chesnel" />
                        <p><b>Hugo Chesnel, 19 ans</b></p>
                    </div>
                    <p>
                        <span>À l'âge de <b>19 ans</b></span>, j'ai décidé de lancer <i>mon entreprise</i> de services de développement web. 
                    
                        <br/>
                        <br/>
                    
                        Ayant toujours été intéressé par la technologie, j'ai décidé de m'orienter vers le <abbr title="Développement visuel d'un site"><b>développement Front-End</b></abbr> afin de lier loisir et travail : <span>la <b>création de sites web</b></span>.
                    
                        <br/>
                        <br/>
                    
                        Actuellement en formation chez <span><b><u><a href="https://openclassrooms.com/fr/paths/900-integrateur-web" alt="openclassrooms courses link">OpenClassRooms</a></u></b></span> (bac +2), j'offre mes services en terme de développement Front-End pour les entrepreneurs et les particuliers.
                    
                        <br/>
                        <br/>
                
                        Polyvalent, je suis ouvert à tout type de projet (<span><b>vitrine</b></span> pour votre commerce ou <span><b>portfolio</b></span> pour exposer vos créations...) <u><a href="mailto:chesnelwebstudio@gmail.com" alt="mailing Hugo Chesnel">contactez-moi</a></u> !
                    </p>
                </div>
            </div>
            
            
            
            <div className="presentation__content--interDiv"></div>
            
            
            
            <div className="presentation__content--skills" id="skills">
                <p className="presentation__content--skillsTitle">  <span>hardskills<br/></span>Compétences</p>
                <div className="presentation__content--skillsCtn">
                    <div className="presentation__content--skillsCtnIcons">
                        <div className="presentation__content--skillsCtnImg">
                            <FontAwesomeIcon icon={faHtml5} size='2xl'/>
                            <p>HTML</p>
                        </div>
                        <div className="presentation__content--skillsCtnImg">
                            <FontAwesomeIcon icon={faSass} size='2xl'/>
                            <p>Sass</p>
                        </div>
                    </div>
                    <div className="presentation__content--skillsCtnIcons">
                        <div className="presentation__content--skillsCtnImg">
                          <FontAwesomeIcon icon={faJs} size='2xl'/>
                            <p>JS</p>
                        </div>
                        <div className="presentation__content--skillsCtnImg">
                          <FontAwesomeIcon icon={faPalette} size='2xl'/>
                            <p>Design</p>
                        </div>
                    </div>
                    <div className="presentation__content--skillsCtnIcons">
                        <div className="presentation__content--skillsCtnImg">
                            <FontAwesomeIcon icon={faReact} size='2xl'/>
                            <p>React</p>
                        </div>
                        <div className="presentation__content--skillsCtnImg">
                            <img src={next} alt='nextIcon'/> 
                            <p>NextJS</p>
                    </div>
                </div>
            </div>
            
            
            
            <div className="presentation__content--interDiv"></div>
            
            
            
            <div className="presentation__content--portfolio" id="portfolio">
                <p className="presentation__content--portfolioTitle">   <span>réalisations<br/></span>Portfolio</p>
                <Link to='/projets/' onClick={() => {window.scroll(0,0)}}><span>Voir tous les projets</span></Link>
                {// eslint-disable-next-line
                 works.map((work) => {
                    if(work.homePage){
                      return (
                        <PortfolioWork item={work} key={work.id} />
                      )
                    }
                  })
                }
                
                <div className="presentation__content--portfolioWork">
                    <div className="presentation__content--portfolioWorkImg" id="github">
                        <img src={Github} alt="github website" />
                    </div>
                    <div className="presentation__content--portfolioWorkText">
                        <h2>Projets OCR</h2>
                        <p> Différents types de projets, pour l'apprentissage du HTML, CSS, JavaScript, Sass, React ou encore la gestion de projets.
                            
                            <br/>
                            <br/>
                        
                            <u><b>Projets visibles sur mon GitHub :</b></u> 
                        </p>
                        <a href="https://github.com/HugEau" alt="github link"><FontAwesomeIcon icon={faGithub} size="xl"/></a>
                    </div>
                </div>
            </div>
            
            
            
            <div className="presentation__content--interDiv"></div>
            
            
            
            <div className="presentation__content--guide" id="guide">
                <p className="presentation__content--guideTitle">   <span>Guide<br/></span>Suivi de conception</p>
                <div className="presentation__content--guideContent">
                    <div className="presentation__content--guideContentLeft">
                    
                        <div className="presentation__content--guideContentLeftCtn">   
                            <div className="presentation__content--guideContentLeftCtnLine">
                                <div className="presentation__content--guideContentLeftCtnLineNumber">
                                    <p>1.</p>
                                </div>
                                <div className="presentation__content--guideContentLeftCtnLineDots">
                                </div>
                            </div>
                            <div className="presentation__content--guideContentLeftCtnText1">
                                <p id="GuideTextLeft1">
                                Réception du projet
                                    <br/><br/>
                                </p>
                                <span className="presentation__content--guideContentLeftCtnText1Span">Étude des besoins techniques.</span>
                            </div>
                        </div>
                    
                        <div className="presentation__content--guideContentLeftCtn">
                            <div className="presentation__content--guideContentLeftCtnLine">
                                <div className="presentation__content--guideContentLeftCtnLineNumber">
                                    <p>2.</p>
                                </div>
                                <div className="presentation__content--guideContentLeftCtnLineDots">
                                </div>
                            </div>
                            <div className="presentation__content--guideContentLeftCtnText">
                                <p className="presentation__content--guideContentLeftCtnTextP">
                                    Mise en contact
                                    <br/><br/>
                                </p>
                                <span className="presentation__content--guideContentLeftCtnTextSpan">Discussion des besoins et du design.</span>
                            </div>
                        </div>
                    
                        <div className="presentation__content--guideContentLeftCtn">
                            <div className="presentation__content--guideContentLeftCtnLine">
                                <div className="presentation__content--guideContentLeftCtnLineNumber">
                                    <p>3.</p>
                                </div>
                                <div className="presentation__content--guideContentLeftCtnLineDots">
                                </div>
                            </div>
                            <div className="presentation__content--guideContentLeftCtnText">
                                <p className="presentation__content--guideContentLeftCtnTextP">
                                    Création du design
                                    <br/><br/>
                                </p>
                                <span className="presentation__content--guideContentLeftCtnTextSpan">Création et présentation d'un ou plusieurs design(s).</span>
                            </div>
                        </div>
                    
                        <div className="presentation__content--guideContentLeftCtn">
                            <div className="presentation__content--guideContentLeftCtnLine">
                                <div className="presentation__content--guideContentLeftCtnLineNumber">
                                    <p>4.</p>
                                </div>
                                <div className="presentation__content--guideContentLeftCtnLineDots">
                                </div>
                            </div>
                            <div className="presentation__content--guideContentLeftCtnText">
                                <p className="presentation__content--guideContentLeftCtnTextP">
                                    Conception
                                    <br/><br/>
                                </p>
                                <span className="presentation__content--guideContentLeftCtnTextSpan">Création du site web, notification régulière des avancements.</span>
                            </div>
                        </div>
                    
                        <div className="presentation__content--guideContentLeftCtn">
                            <div className="presentation__content--guideContentLeftCtnLine">
                                <div className="presentation__content--guideContentLeftCtnLineNumber">
                                    <p>5.</p>
                                </div>
                                <div className="presentation__content--guideContentLeftCtnLineDots">
                                </div>
                            </div>
                            <div className="presentation__content--guideContentLeftCtnText">
                                <p className="presentation__content--guideContentLeftCtnTextP">
                                    Présentation
                                    <br/><br/>
                                </p>
                                <span className="presentation__content--guideContentLeftCtnTextSpan">Présentation fonctionnelle du site web jusqu'à validation.</span>
                            </div>
                        </div>
                    
                        <div className="presentation__content--guideContentLeftCtn">
                            <div className="presentation__content--guideContentLeftCtnLine">
                                <div className="presentation__content--guideContentLeftCtnLineNumber">
                                    <p>6.</p>
                                </div>
                                <div className="presentation__content--guideContentLeftCtnLineDots">
                                </div>
                            </div>
                            <div className="presentation__content--guideContentLeftCtnText">
                                <p className="presentation__content--guideContentLeftCtnTextP">
                                    Mise en ligne du site web
                                    <br/><br/>
                                </p>
                                <span className="presentation__content--guideContentLeftCtnTextSpan">Le site est désormais accessible sur internet.</span>
                            </div>
                        </div>
                    
                    </div>
                    <div className="presentation__content--guideContentRight">
                        <p className="presentation__content--guideContentRightTitle">Et après ?</p>
                        
                        
                        <p className="presentation__content--guideContentRightText">
                            <br/>
                            Un site sans entretien est un site qui risque de ne plus fonctionner, ainsi, après la conception, je propose plusieurs services afin que votre site reste opérationnel :
                            <br/><br/>
                        </p>
                        
                        
                        <p className="presentation__content--guideContentRightSubtitle">
                            <b>• Gestion technique </b>
                        </p>
                        
                        
                        <p className="presentation__content--guideContentRightText">
                            <br/>
                            • Mise à jour du contenu
                            <br/><br/>
                            • Mise à jour des technologies
                            <br/><br/>
                            • Réparation des bugs
                            <br/><br/>
                        </p>
                        
                        
                        <p className="presentation__content--guideContentRightSubtitle">
                            <b>• Gestion de la mise en ligne</b>
                        </p>
                        
                        <p className="presentation__content--guideContentRightText">
                            <br/>
                            • <b>Offert :</b> Nom de domaine en .fr pendant 1 an
                            <br/><br/>
                            • Hébergement performant et adapté
                            <br/><br/>
                            • Optimisation du référencement 
                            <br/>
                            (Keywords, adaptation des technologies, liens hypertextes sur CwS...)
                            <br/><br/>
                        </p>
                        
                        
                    </div>
                </div>
            </div>
            
            
            <div className="presentation__content--interDiv"></div>
            
            <div className="presentation__content--packages" id="packages">
                <p className="presentation__content--packagesTitle">   <span>Quelles possibilités ?<br/></span>Forfaits et Abonnement</p>
                
                <div className="presentation__content--packagesCtn">
                    <div className="presentation__content--packagesCtnPackage">
                        <div className="presentation__content--packagesCtnPackageHeader">
                            <p className="presentation__content--packagesCtnPackageHeaderLogo">CwS</p>
                            <p className="presentation__content--packagesCtnPackageHeaderText">Chesnel Web Studio</p>
                        </div>
                        
                        <div className="presentation__content--packagesCtnPackageTitle presentation__content--packagesCtnPackageTitle1">
                            <p>Forfait Création</p>
                        </div>
                        <p>Design</p>
                        <p>Conseils</p>
                        <p>Conception / Programmation</p>
                        <p>Présentation</p>
                        
                        
                    </div>
                    
                    <div className="presentation__content--packagesCtnPackage">
                        <div className="presentation__content--packagesCtnPackageHeader">
                            <p className="presentation__content--packagesCtnPackageHeaderLogo">CwS</p>
                            <p className="presentation__content--packagesCtnPackageHeaderText">Chesnel Web Studio</p>
                        </div>
                        
                        <div className="presentation__content--packagesCtnPackageTitle presentation__content--packagesCtnPackageTitle2">
                            <p>Forfait Création + Abonnement</p>
                        </div>
                        <p>Forfait création</p>
                        <p>Abonnement WebMaster</p>
                        <p><b>Offert :</b> nom de domaine .fr (1an)</p>
                        <p><b>Tarif préférentiel</b></p>
                        
                    </div>
                    
                    <div className="presentation__content--packagesCtnPackage">
                        <div className="presentation__content--packagesCtnPackageHeader">
                            <p className="presentation__content--packagesCtnPackageHeaderLogo">CwS</p>
                            <p className="presentation__content--packagesCtnPackageHeaderText">Chesnel Web Studio</p>
                        </div>
                        
                        <div className="presentation__content--packagesCtnPackageTitle presentation__content--packagesCtnPackageTitle3">
                            <p>Abonnement WebMaster</p>
                        </div>
                        <p>Mise à jour du contenu</p>
                        <p>Maintenance du code</p>
                        <p>Mise en ligne</p>
                        <p>Accessibilité</p>
                        <p>Sécurisation</p>
                    </div>
                </div>
                <div className="presentation__content--packagesFooter">
                    <p><b>Demande de devis par mail</b></p>
                    <p>chesnelwebstudio@gmail.com</p>
                </div>
            </div>
            
            <div className="presentation__content--interDiv"></div>

            
            <div className="presentation__content--contact" id="contact">
                <p className="presentation__content--contactTitle">   <span>un projet ?<br/></span>Contactez-moi</p>
                <div className="presentation__content--contactContents">
                    <p>
                        <i>Une simple idée ou un projet abouti ?</i> <br/>
                        Contactez-moi par mail ou par les réseaux sociaux afin de me soumettre vos projets. 
                    </p>
                    <div className="presentation__content--contactContentsLinks">
                        <a href="mailto:chesnelwebstudio@gmail.com" alt="mailing Hugo Chesnel">
                          <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <a href="https://ig.me/m/chesnelwebstudio" alt="message Hugo Chesnel on instagram link">
                          <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>
                <div className="presentation__content--contactContentsEmailing">
                    <form action="https://formspree.io/f/xyyregka" method="POST">
                        <label> <b>Votre adresse email :</b>
                            <input type="email" name="email" required />
                        </label>
                        <label> <b>Votre message :</b>
                            <textarea name="message" required></textarea>
                        </label>
                        <label className="emailingFormAccept">  
                            <input type="checkbox" required />
                            <p>En envoyant votre message, vous acceptez les <a href="#legals" alt="legals link">mentions légales</a>, <br/>vous serez redirigé vers une page indépendante de CWS</p>
                        </label>  
                        <button type="submit">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;