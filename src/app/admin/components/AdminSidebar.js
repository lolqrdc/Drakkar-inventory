export default function AdminSidebar() {
    return (
        <aside className="admin-sidebar">
            <div className="sidebar-buttons">
                <a href="/" className="home-button">Accueil</a>
                <button className="logout-button">Déconnexion</button>
            </div>
        </aside>
    );
}