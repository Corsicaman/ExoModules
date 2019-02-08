import {
    Util
} from './Util.js'


export class Introduction {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} o - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(o, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.titrePrincipal = o.titrePrincipal;
        this.titreSecondaire = o.titreSecondaire
        this.titreTernaire = o.titreTernaire
        this.description = o.description
        this.elmParent = elementParent
        this.integrerIntro()
        this.fonction = fonction
    }


    integrerIntro() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction')
        let elmConteneur = this.creerElement(this.elmParent,
            'section',
            '',
            'introduction')

        let elmPrincipale = this.creerElement(elmConteneur,
            'div',
            this.titrePrincipal,
            'rectangle')

        let elmSecondaire = this.creerElement(elmConteneur,
            'div',
            this.titreSecondaire,
            'rectangle')


        let elmTernaire = this.creerElement(elmConteneur,
            'div',
            this.titreTernaire,
            'rectangle')

        let elmDescription = this.creerElement(elmConteneur,
            'div',
            this.description,
            'rectangle')

        let elmBouton = this.creerElement(elmConteneur,
            'button',
            'Commencer',
            'bouton')
        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
        elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        noeud.classList.add(classCSS)
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.lastChild.classList.add('deplacementContenuIntro')
        this.elmParent.lastChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}