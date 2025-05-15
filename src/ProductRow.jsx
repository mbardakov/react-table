export function ProductRow({item}) {
    const styleStrikeIfOutOfStock = { textDecoration: item.stocked? 'none' : 'line-through' }
    return (
        <>
            <div className='text-black dark:text-white flex justify-between p-1'>
                <span className='inline-block' style={styleStrikeIfOutOfStock}>
                    {item.name}
                </span>
                <span className='inline-block'>
                    {item.price}
                </span>
            </div>
            <br />
        </>
    )
}
