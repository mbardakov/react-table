export function SearchBar({ searchText, showInStockOnly, onSearchTextChange, onShowInStockOnlyChange }) {
    return (
        <>
            <form>
                <input className="block border rounded-xs px-3 py-2 mb-2 border-slate-200"
                    type="text"
                    value={searchText}
                    placeholder="Search..."
                    onChange={(e) => onSearchTextChange(e.target.value)}
                />
                <label className="block mb-2">
                    <input
                        type="checkbox"
                        checked={showInStockOnly}
                        onChange={(e) => onShowInStockOnlyChange(e.target.checked)}
                    />
                    { ' ' }
                    Show only in-stock items
                </label>
            </form>
        </>
    )
}