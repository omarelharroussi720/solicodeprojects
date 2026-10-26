# Découvrir une entité à partir d’un identifiant ou d’une répétition

## Tableau complété

| Donnée observée | Valeur répétée | Réalité représentée | Identifiant proposé | Dépendance |
|---|---|---|---|---|
| `nom_auteur` | Madani (3 articles) | Auteur | `email_auteur` | `email_auteur -> nom_auteur` |
| `nom_ville` | Tanger (3 fois), Rabat (2 fois) | Ville | `id_ville` | `id_ville -> nom_ville` |
| `nom_categorie` | Développement (4 articles), Actualité (1 article) | Catégorie | `id_categorie` | `id_categorie -> nom_categorie` |

## Explication courte

- **Auteur :** l’adresse `email_auteur` est unique pour chaque auteur dans les données de départ. Elle permet donc d’identifier l’auteur.
- **Ville :** les noms de ville se répètent. La ville est une réalité distincte ; on propose donc l’identifiant `id_ville`.
- **Catégorie :** les catégories se répètent aussi. On propose donc l’identifiant `id_categorie`.

**Remarque :** ce document porte uniquement sur la découverte des réalités et des identifiants. Il ne construit pas encore les relations entre les entités ni le schéma complet.
