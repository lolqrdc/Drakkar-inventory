/* fonction de type utilitqire pour gérer les appels API. Elle centralise la logique
des requêtes HTTP. */
const BASE_URL = 'https://connect.squareupsandbox.com';
const API_KEY = process.env.SQUARE_API_KEY;

export default async function fetchSquare(endpoint, options = {}) 
{
    // Construit l'URL complète en combinant l'URL de base et l'endpoint fourni.
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        mode: 'no-cors',
        headers: 
        {
            // Définit les en-têtes par défaut pour les requêtes API
            'Content-Type': 'application/json', // Indique que le corps de la requête est au format JSON
            'Authorization': `Bearer ${API_KEY}`, // Ajout de la clé API pour authentifier la requête
            ...options.headers, // Permet d'ajouter des en-têtes personnalisé
        },
    });

    // Vérifie si la réponse est valide, sinon lance une erreur.
    if (!response.ok) 
        {
            throw new Error(`Erreur API Square : ${response.statusText}`);
        }
    // Return les données JSON extraites de la réponse
    return response.json();
}
