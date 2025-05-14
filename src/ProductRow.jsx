export function ProductRow({item}) {
    return (
        <>
            <span style={{ textDecoration: item.stocked? 'none' : 'line-through' }}>{item.name} {item.price}</span>
            <br />
        </>
    )
}
