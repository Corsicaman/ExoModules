import {
    Util
} from "./Util.js"



export class AnimLettre {

    /**
     * Classe permettant d'animer les lettres'
         String / Parent / Fonction à appeler
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = lesLettres;
        this.elmParent = elementParent
        this.animerLettres()
        this.fonction = fonction
    }






    animerLettres() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction')

        let phraseLen = this.lesLettres.length;
           let elmConteneur = this.creerElement(this.elmParent,
                'div',
                '',
                'mot')
        for (let i = 0; i < phraseLen; i++) {
            let elmLettre = this.creerElement(elmConteneur,
                'div',
                this.lesLettres.charAt(i),
                '')
			elmLettre.style.animationDelay = (i * 0.5) + "s";

        }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this)
        // elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this))
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if (classCSS != '') {
        	noeud.classList.add(classCSS)
        }
        elmParent.appendChild(noeud)
        return noeud
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro')
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this))
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent)
        this.fonction()
    }

}