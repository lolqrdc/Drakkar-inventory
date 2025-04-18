"use client";

import { useState, useEffect } from 'react';
import { listProducts } from '../../api/catalog/listProducts';
import EditModal from './EditModal';

export default function StockTable() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Appel API pour récupérer les produits
    useEffect(() => {
        async function fetchProducts() 
        {
            try 
            {
                const data = await listProducts();
                setProducts(data.objects || []); // Adaptez selon la structure de la réponse API
            } catch (error) 
            {
                console.error('Erreur lors de la récupération des produits :', error);
            }
        }

        fetchProducts();
    }, []);

    const openEditModal = (product) => 
        {
            setSelectedProduct(product);
            setIsModalOpen(true);
        };

    const closeEditModal = () => 
        {
            setSelectedProduct(null);
            setIsModalOpen(false);
        };

    const handleProductUpdate = (updatedProduct) => 
        {
            setProducts((prevProducts) =>
                prevProducts.map((product) =>
                    product.id === updatedProduct.id ? updatedProduct : product
                )
            );
            closeEditModal();
        };

    return (
        <>
            <table className="stock-table">
                <thead>
                    <tr>
                        <th className="column-id">ID</th>
                        <th className="column-name">Produit</th>
                        <th className="column-stock">Stock</th>
                        <th className="column-price">Prix</th>
                        <th className="column-actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="column-id">{product.id}</td>
                            <td className="column-name">{product.name}</td>
                            <td className="column-stock">{product.stock}</td>
                            <td className="column-price">{product.price.toFixed(2)} €</td>
                            <td className="column-actions">
                                <button
                                    className="edit-button"
                                    onClick={() => openEditModal(product)}
                                >
                                    ✏️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <EditModal
                    product={selectedProduct}
                    onClose={closeEditModal}
                    onSave={handleProductUpdate}
                />
            )}
        </>
    );
}