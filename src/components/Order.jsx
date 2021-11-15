const Order = () => {
    const onComplete = () => {
        window.location.assign('https://salesrobots.pl/');
    }
    return(
        <div className="container">
            <div className="buy">TO JUŻ OSTATNI KROK</div>
            <button onClick={onComplete} className="action">
                TO JUST OSTATNI KROK
            </button>
        </div>
    )
}
export default Order;