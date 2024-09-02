# Tic_Tac_Toe
Documentation du Jeu Tic-Tac-Toe 20x20
1. Introduction
Ce projet implémente un jeu Tic-Tac-Toe 20x20, où deux joueurs (X et O) s'affrontent pour aligner cinq de leurs symboles consécutifs en ligne, en colonne, ou en diagonale. Le jeu est développé en HTML, CSS, et JavaScript, avec une gestion de l'état du jeu et des scores via le localStorage.

2. Structure du Code
2.1 HTML
Tableau de jeu (<table id="gridTable">) : Affiche une grille 20x20 où les joueurs peuvent placer leurs symboles.
Formulaire des joueurs (<div id="playerform">) : Permet aux joueurs d'entrer leurs noms avant de commencer la partie.
Affichage du score (<div class="score">) : Montre les scores des joueurs X et O.
Bouton de redémarrage (<button id="restart">Restart</button>) : Permet de recommencer une nouvelle partie.
2.2 CSS
Le CSS gère la mise en forme de la grille, les zones d'information, et assure la réactivité du jeu sur différents appareils.

2.3 JavaScript
Le script gère la logique du jeu :

Création de la grille (createTable) : Génère la grille 20x20 et attache des gestionnaires d'événements aux cellules pour capturer les clics des joueurs.
Gestion des tours : La fonction handleClick permet de gérer le tour des joueurs, d'afficher le symbole du joueur actuel, et de vérifier si un joueur a gagné.
Vérification du gagnant (checkWin) : Vérifie si un joueur a aligné cinq symboles consécutifs.
Mise à jour des scores (scoreCount) : Incrémente et affiche le score du joueur gagnant, en utilisant localStorage pour conserver les scores entre les parties.
Redémarrage du jeu (restartBtn.addEventListener) : Réinitialise la grille et l'état du jeu, tout en conservant les scores.
3. Fonctionnalités
Jouabilité : Deux joueurs jouent en alternance jusqu'à ce que l'un d'eux aligne cinq symboles ou que la grille soit remplie.
Score : Les scores des joueurs sont persistés dans le localStorage et affichés à côté du plateau.
Redémarrage : Les joueurs peuvent redémarrer une partie sans perdre les scores accumulés.
4. Utilisation
Début du jeu : Les joueurs entrent leurs noms et cliquent sur "Start Game" pour commencer.
Gameplay : Chaque joueur clique sur une case vide pour y placer son symbole.
Fin de partie : Le jeu annonce le gagnant ou un match nul et affiche les scores mis à jour.
Redémarrer : Cliquez sur le bouton "Restart" pour recommencer une partie.

