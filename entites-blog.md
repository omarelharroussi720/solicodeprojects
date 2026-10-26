# Entités finales du Blog

À partir du dictionnaire de données présenté dans le tutoriel T.112.133, les données sont regroupées autour de leur identifiant. Les répétitions liées aux villes et aux catégories sont isolées dans des entités distinctes.

## ARTICLE

- `id_article`
- `titre_article`
- `contenu_article`
- `date_publication`
- `statut_article`
- `image_article`
- `id_auteur`
- `id_categorie`

## AUTEUR

- `id_auteur`
- `nom_auteur`
- `prenom_auteur`
- `email_auteur`
- `id_ville`

## VILLE

- `id_ville`
- `nom_ville`

## CATÉGORIE

- `id_categorie`
- `nom_categorie`
- `description_categorie`

## Remarque

- Les données de l’article sont regroupées dans l’entité `ARTICLE`.
- Les informations propres à l’auteur sont regroupées dans `AUTEUR`.
- La ville est isolée dans `VILLE` afin d’éviter de répéter le nom de la ville pour plusieurs auteurs.
- La catégorie est isolée dans `CATÉGORIE` afin d’éviter de répéter ses informations pour plusieurs articles.
- `id_auteur`, `id_ville` et `id_categorie` remplacent les données textuelles répétées dans les entités concernées.

Conformément à la consigne, ce document liste uniquement les entités et leurs données. Il ne présente pas les traits de relation ni les cardinalités.
