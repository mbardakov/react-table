import { ProductCategoryHeader } from './ProductCategoryHeader';
import { ProductRow } from './ProductRow';

export function ProductTable({ data }) {
	const categories = data.reduce((acc, item) => 
		(acc && !acc.find(oldItem => oldItem.category === item.category)) ?
			acc.concat([{ category: item.category, id: item.id }]) : 
			acc, []);
	return (
		<>
			{categories.map(cat => 
				<div key={cat.id}>
					<ProductCategoryHeader name={cat.category}/>
					{data.map(item => item.category === cat.category && <ProductRow item={item} key={item.id} />)}
				</div>
			)}
		</>
	)
}
