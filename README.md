# Chouette Maraîcher

Aujourd'hui tu vas devoir réaliser un site dynamique pour présenter les fruits et légumes de _Chouette Maraîcher_

Tu as à ta disposition :

- une intégration finalisée des 3 pages types
  - [Type A] `about.html` pour les pages de texte
  - [Type B] `list.html` pour les pages qui listent des produits
  - [Type C] `procuct.html` pour lees pages de détail d'un produit
- un fichier `data.js` avec les données de tous les produits. Chaque produit dispose
  - D'un identifiant numérique `id`
  - D'un titre `title`
  - D'un identifiant textuel `slug`
  - D'une brève description `description`
  - D'une note sur 5 `grade`
  - De l'identifiant textuel d'une catégorie `category`, soit `fruits`, soit `legumes`

Et c'est tout.

Organise-toi étape par étape pour

1. Initialiser un projet avec express, dotenv, node-dev, ejs
2. Mettre en place un serveur avec express
3. Mettre en place un moteur de template
4. Servir les assets statiques
5. Mettre en place un routeur et une première route, par exemple pour la page _à propos_ (page type A)
6. Renvoyer une première vue
7. Créer si possible des vues partielles
8. Mettre en place une deuxième route, par exemple pour l'accueil (page type B)
9. Renvoyer une deuxième vue
10. Passer les informations des produits à cette vue
11. Dynamiser la vue
12. Mettre en place une troisième route (paramétrée), par exemple le détail d'un produit (page type C)
13. Renvoyer une troisème vue
14. Passer les informations du produit demandé à cette vue
15. Dynamiser la vue
16. Faire de même pour une quatrième route correspondant aux catégories fruits et légumes (page type B)  
  Pour ces pages on indiquera en titre `Fruits` ou `Légumes` et on placera une liste des produits filtrés selon la catégorie demandée.
17. Gérer une page d'erreur 404

Une fois terminé, vérifie que tout est bien dynamique, que les liens sont bons et que tout fonctionne comme il faut.

## Bonus

Si tu es en avance, j'aimerais que tu rendes fonctionnel le champ `select` pour choisir le nombre de produits par ligne sur les pages de listing (visible uniquement sur grand écran).

## Bonus 2

Après ça prenons du recul. Regarde ton code et vois si tu peux séparer les concepts au niveau du routeur et mieux définir les types de données :

- Range les callback de tes routes dans des fichiers à part pour séparer les responsabilités (on fait ce qu'on appelle des controleurs)
- Prépare des classes pour définir la forme de tes objets produits et catégories (on fait ce qu'on appelle des modèles)

## Aller plus loin

Si tu as fini n'hésite pas à ajouter plus de pages ou toute fonctionnalité que tu imagines. Par exemple pourquoi pas ajouter une formulaire de tri par ordre alphabétique ou par note sur les pages de listing. A la validation du formulaire faire des recherches pour voir comment récupérer les infomrations du formulaire et s'en servir. 
