<p align="center">
  <img src="src/app/favicon.ico" alt="Drakkar Logo" width="100">
</p>

# Drakkar Inventory

Drakkar Inventory a été conçue pour gérer l'inventaire de l'association étudiante **DRAKKAR** de 42 Le Havre. Ce projet vise à simplifier la gestion des stocks et à offrir une interface intuitive pour les membres de l'association ainsi que pour les étudiant(e)s.

---

## 🎯 Objectif du projet

L'objectif principal de Drakkar Inventory est de fournir une solution efficace pour deux types d'utilisateurs :

- **Administrateurs (membres de l'association)** :
  - Gérer le stock des produits (ajout, modification, suppression).
  - Synchroniser les données avec l'API de Square pour maintenir un inventaire à jour.

- **Etudiant(e)s** :
  - Consulter les produits disponibles en stock.
  - Voir les prix des produits avant de passer commande.

---

## Fonctionnalités principales

### 🔑 Vue Administrateur
- Accès sécurisé réservé aux membres de l'association.
- Gestion complète du stock.
- Intégration avec l'API de Square pour synchroniser les données en temps réel.

### 🛒 Vue Etudiant(e)s
- Consultation des produits disponibles.
- Affichage des prix des articles.
- Interface simple et intuitive pour pouvoir naviguer et passer commande.

---

## 🛠️ Technologies utilisées

- **Frontend** : Next.js et React.js.
- **API externe** : Intégration avec l'API de Square.
- **Styles** : Tailwind CSS pour le design.

---

## 🚀 Installation et démarrage

1. **Clonez le dépôt** :
   ```bash
   git clone <url-du-repo>
   cd drakkar-inventory
   ```

2. **Installez les dépendances** :
   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement** :
   Créez un fichier `.env` à la racine du projet et ajoutez les clés nécessaires :
   ```env
   SQUARE_API_KEY=<votre-clé-api-square>
   ```

4. **Lancez l'application en mode développement** :
   ```bash
   npm run dev
   ```

5. **Accédez à l'application** :
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

---
