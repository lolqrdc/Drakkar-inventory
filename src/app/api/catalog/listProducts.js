import fetchSquare from '../utils/fetchSquare';

export async function listProducts() 
{
    return fetchSquare('/v2/catalog/search', 
        {
        method: 'POST',
        body: JSON.stringify({}), // Corps vide pour récupérer tous les objets
        });
}

