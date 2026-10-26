# Observation of Occurrences and Repeated Values

## 1. Inventory of observed values

The table contains five occurrences (five authors).

| Data | Values observed |
|---|---|
| `nom_auteur` | Madani, Sara, Youssef, Amine, Nadia |
| `prenom_auteur` | Ali, Amrani, Karim, Idrissi, Alaoui |
| `email_auteur` | madani@mail.com, sara@mail.com, youssef@mail.com, amine@mail.com, nadia@mail.com |
| `nom_ville` | Tanger, Tanger, Rabat, Tanger, Rabat |
| `nom_categorie` | Développement, Développement, Actualité, Développement, Actualité |

## 2. Repeated values for each data item

- `nom_auteur`: no repeated values.
- `prenom_auteur`: no repeated values.
- `email_auteur`: no repeated values.
- `nom_ville`: **Tanger** appears 3 times and **Rabat** appears 2 times.
- `nom_categorie`: **Développement** appears 3 times and **Actualité** appears 2 times.

## 3. A problem caused by a repeated value

The value **Tanger** is repeated in the `nom_ville` data. If the city name needed to be corrected or updated later, we would have to change it in several rows. If one row were missed, the table could contain inconsistent information about the same city.

## Conclusion

A **data item** is the kind of information being recorded, such as `nom_ville`. A **value** is the actual content, such as `Tanger`. An **occurrence** is one complete row of related data. Comparing several occurrences helps us identify repeated values and understand why they may make future updates harder.

This exercise only observes the data and repeated values. It does **not** create new entities, identifiers, or tables.
