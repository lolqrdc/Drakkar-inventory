import AdminHeader from './components/AdminHeader';
import AdminSidebar from './components/AdminSidebar';
import './admin.css';

export default function AdminLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                <div className="admin-layout">
                    <AdminHeader />
                    <div className="admin-content">
                        <AdminSidebar />
                        <main className="admin-main">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}