import { ProductCategoryHeader } from './ProductCategoryHeader';
import { ProductRow } from './ProductRow';

export function ProductTable({ searchText, showInStockOnly, data }) {
	const categories = data.reduce((acc, item) => 
		(acc && !acc.find(oldItem => oldItem.category === item.category)) ?
			acc.concat([{ category: item.category, id: item.id }]) : 
			acc, []);
	return (
		<div className='flex flex-wrap'>
			{categories.map(cat => 
				<div key={cat.id} className='min-w-2xs mb-2'>
					<ProductCategoryHeader name={cat.category}/>
					{data.map(item => 
						item &&
						item.category === cat.category &&
						(item.stocked || !showInStockOnly) &&
						item.name.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 &&
						<ProductRow item={item} key={item.id} />)}
				</div>
			)}
		</div>
	)
}
