import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
// import { useState } from 'react';

export function FilterableProductTable({ data }) {
	// const [searchText, setSearchText] = useState('');
	// const [showInStockOnly, setShowInStockOnly] = useState(false);

	console.log('FilterableProductData: ', data);
	return (
		<>
			<p>{data ? 'I have data!' : 'I have no data :('}</p>
			<SearchBar 
				// searchText={searchText}
				// showInStockOnly={showInStockOnly}
			/>
			<ProductTable
				// searchText={searchText}
				// showInStockOnly={showInStockOnly}
				data={data}
			/>
		</>

	)
}