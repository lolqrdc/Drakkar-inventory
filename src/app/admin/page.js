import StockTable from './components/StockTable';
import './admin.css'; // Import des styles

export default function AdminPage()
{
    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <h2>Tableau de Bord</h2>
                <p>Bienvenue sur le tableau de bord administrateur. Vous pouvez gérer les produits ici.</p>
            </header>
            <section className="dashboard-content">
                <StockTable />
            </section>
        </div>
    );
}
