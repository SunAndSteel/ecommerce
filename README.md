# Projet Frontend avancé Q2
***Étudiant*** : Florent Urbain

***Objectif*** : Réaliser un site d'e-commerce en utilisant React, MongoDB, NodeJS(express) et Bootstrap.

***Explications/Notes/Brouillons*** : (Markdown et CVS) : https://drive.google.com/file/d/1fL2JmXvXyAPMnVcwPL3zTielTM_sVQGf/view?usp=sharing

## Installation 
1. Exécuter la commande `npm install` dans les dossiers ***front et back***.
2. Exécuter la commande `docker-compose up` dans le dossier back.

## Démarrage 
1. Exécuter le script `start.ps1` pour démarrer la base de donnée MongoDB et l'API NodeJS.
   - Vous pouvez aussi les démarrer manuellement avec docker desktop ou la commande `docker-compose up`.
2. Exécuter la commande `npm run vite` dans le dossier **front**.
3. Se rendre sur le lien affiché sur le terminal.


[![ET JE LÈVE MON VERRE À TOUT CEUX QUI CODENT PAS](https://img.youtube.com/vi/h4T2X2x7RFU/0.jpg)](https://www.youtube.com/watch?v=h4T2X2x7RFU)

---
### ***Bug avec Docker/yarn sous Windows***
#### La commande docker-compose up peut ne pas fonctionner à l'étape "yarn install".
1. Supprimer ce dossier dans l’éditeur de registre (***FAIRE UNE BACKUP AVANT***)
  - Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Interfaces
2. Fermer complètement tous les services docker dans le gestionnaire de tâche.
3. Refaire la commande `docker-compose up` dans le dossier ***back***.


## Front-end 
### Tâches 

- [x] Utiliser map() pour afficher les items dans le composants <Products />
- [x] Ajouter un produit dans le panier - définition et utilisation d’un contexte, utilisation du hook _useContext()_, définition d’une fonction réductrice et utilisation du hook _useReducer()_.
- [x]  Gestion dynamique du nombre d’item dans le panier -  utilisation de la fonction reduce().

- [x] Amélioration du panier avec _findIndex()_
- [X] Chaque article du panier peut être supprimé via un bouton (utiliser filter())
- [ ] <span style="color:orange">Page détails de produit !</span>
- [ ] <span style="color:orange">Personnaliser le css et ajouter des assets dans la DB </span>

## Backend
### Tâches 
- [x]  Utilisation de la bibliothèque Axios, interaction avec une API Rest et utilisation du hook _useEffect()_.
- [x]  Afficher l’état de chargement des données : Utiliser une icône de chargement animée (spinner)
- [x]  Serveur du back-end ne répond plus : Afficher une alerte avec un message d’erreur
---
