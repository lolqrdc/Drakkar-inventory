import { useState } from 'react';

export default function EditModal({ product, onClose, onSave }) {
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        onSave(updatedProduct); // Appelle la fonction onSave avec le produit mis à jour
    };

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Modifier le produit</h2>
                <form>
                    <label>
                        Nom :
                        <input
                            type="text"
                            name="name"
                            value={updatedProduct.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Stock :
                        <input
                            type="number"
                            name="stock"
                            value={updatedProduct.stock}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Prix :
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            value={updatedProduct.price}
                            onChange={handleChange}
                        />
                    </label>
                </form>
                <div className="modal-actions">
                    <button onClick={handleSave}>Sauvegarder</button>
                    <button onClick={onClose}>Annuler</button>
                </div>
            </div>
        </div>
    );
}