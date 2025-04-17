import StockTable from './components/StockTable';

export default function AdminPage()
{
    return (
        <div className="admin-dashboard">
            <h2> Dashboard </h2>
            <StockTable />
        </div>
    );
}
