export function ProductRow({item}) {
    return (
        <>
            <span>{item.name} {item.price} {!item.stocked && '(Out of stock)'}</span>
            <br />
        </>
    )
}