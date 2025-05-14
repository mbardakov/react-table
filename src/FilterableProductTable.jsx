import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
import { useState } from 'react';

export function FilterableProductTable({ data }) {
	const [searchText, setSearchText] = useState('');
	const [showInStockOnly, setShowInStockOnly] = useState(false);

	return (
		<>
			<SearchBar 
				searchText={searchText}
				showInStockOnly={showInStockOnly}
				onSearchTextChange={setSearchText}
				onShowInStockOnlyChange={setShowInStockOnly}
			/>
			<ProductTable
				searchText={searchText}
				showInStockOnly={showInStockOnly}
				data={data}
			/>
		</>

	)
}