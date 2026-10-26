# Entités finales du système e-commerce

## CLIENT

- `id_client`
- `nom_client`

## COMMANDE

- `id_commande`
- `date_commande`
- `id_client`

## PRODUIT

- `id_produit`
- `nom_produit`

## LIGNE_COMMANDE

- `id_commande, id_produit` *(identifiant composé)*
- `quantite_commandee`

## Vérification

- `CLIENT` est identifié par `id_client`.
- `COMMANDE` est identifiée par `id_commande` et contient `id_client` pour indiquer le client associé à la commande.
- `PRODUIT` est identifié par `id_produit`.
- `LIGNE_COMMANDE` utilise l'identifiant composé `id_commande, id_produit`.
- `quantite_commandee` apparaît uniquement dans `LIGNE_COMMANDE`.

Ce document liste les entités et leurs données, conformément à la consigne. Il ne présente pas de traits de relation ni de cardinalités.
