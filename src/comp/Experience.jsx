function Experience({ getBill }) {
    const getBillValue = (event) => {
        event.preventDefault();
        const bill = event.target.value;
        getBill(bill);
    };

    return (
        <div>
            <p>How much was the bill?</p>
            <input placeholder="Enter the bill" onChange={getBillValue}></input>
        </div>
    );
}

export default Experience;
