export class Util {

    /* Détruit tous les noeuds du noeud parent racine */
    /* Racine est le conteneur initiale qui contient tous les noeuds */
    /* Racine n'est pas détruit à la fin du processus, il ne reste que le noeud racine vide */
    static detruireTousLesNoeud(noeud, racine) {
        while (noeud.hasChildNodes()) {
            this.detruireTousLesNoeud(noeud.firstChild, racine);
        }
        if (noeud != racine) {
            noeud.parentNode.removeChild(noeud);
            noeud = null
        }
    }
}