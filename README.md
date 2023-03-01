# Application démo Vue3 + router + spotify

L'objectif est d'avoir un exemple d'application un peu plus complexe que celles vues en TP.

L'application n'est pas completement fonctionnelle mais ce n'est pas son but.

*--> vous pouvez tester la recherche d'albums qui est fonctionnelle mais pour cela il vous faut mettre un nouveau token spotify dans le ficher 'appSpotify.js'*

Toutes les interfaces sont réalisées avec le framework UI [Vuetify](https://vuetifyjs.com/)

La gestion des menus et la navigation dans l'application est réalisée avec [Vue Router](https://router.vuejs.org/)

Dans les 2 cas, la configuation globale pour l'application se fait dans le fichier 'main.js'.

## Le router 

La configuration spécifique au router se fait dans le fichier 'index.js' du dossier 'router'

**Remarque importante :**
- la navigation doit se faire UNIQUEMENT entre des vues (définies comme des composants dans le dossier 'views')
  *[donc dans le ficher 'index.js' vous ne devez faire référence qu'à des vues]*
- les vues ne doivent pas comporter de code fonctionnel, mais uniquement le code des interfaces
- le code fonctionnel de l'application est lui dans les composants du dossier 'components'.
- les vues doivent donc faire références aux 'composants fonctionnels' autant que de besoin.
- un composant fonctionnel peut comporter des liens de navigations 'router-link' mais tjs uniquement vers des 'views' qui elles peuvent utiliser des 'components'.

## L'interface (UI) avec Vuetify

Le framework propose de très nombreux composants pour créer les interfaces sans avoir à écrire bcp de HTML ni de CSS.
*(mais il est bien sur possible d'utiliser le CSS pour afiner la mise en forme si besoin)*

La difficulté revient dans ce cas à savoir intégrer des composants existants dans notre application.

Dans cette application, j'ai essayé d'y intégrer un certain nombre d'élements utiles pour le projet tutoré :
 - une barre de navigation en haut (avec sous menu déroulants, un menu "burger" à gauche, un menu complémentaire à droite)
 - un footer
 - un formulaire simple
 - diverses mises en page, avec un affichage sur plusieurs colonnes, mais responsive (le nb de colonnes dépend de la largeur de l'écran)
 - une popup
 - un composant de gestion de la pagination
 - ...


## Pour tester le projet en local 

```sh
npm install
npm run dev
```

## Pour tester le projet dans CodeSandBox

```sh
create --> import from github 
```
