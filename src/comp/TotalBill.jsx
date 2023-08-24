function TotalBill({ bill, total, tip, tip2 }) {
    return (
        <h2>{`You pay $${total} ($${bill} + $${tip} tip + $${tip2} tip2)`}</h2>
    );
}

export default TotalBill;
