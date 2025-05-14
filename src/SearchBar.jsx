export function SearchBar({ filterText, showInStockOnly }) {
    return (
        <>
            <form>
                <input
                    type="text"
                    value={filterText}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={showInStockOnly}
                    />
                </label>
            </form>
        </>
    )
}