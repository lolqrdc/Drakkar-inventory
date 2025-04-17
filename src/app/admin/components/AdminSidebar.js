export default function AdminSidebar ()
{
    return (
        <aside className="admin-sidebar">
            <ul>
                <li><a href="/admin">Dashboard</a></li>
                <li><a href="/admin/productts"> Produits</a></li>
                <li><a href="/admin/settings"> Paramètres</a></li>
            </ul>
        </aside>
    );
}