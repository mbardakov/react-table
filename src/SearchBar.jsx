export function SearchBar({ searchText, showInStockOnly, onSearchTextChange, onShowInStockOnlyChange }) {
    return (
        <>
            <form>
                <input
                    type="text"
                    value={searchText}
                    placeholder="Search..."
                    onChange={(e) => onSearchTextChange(e.target.value)}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={showInStockOnly}
                        onChange={(e) => onShowInStockOnlyChange(e.target.checked)}
                    />
                </label>
            </form>
        </>
    )
}