import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [discount, setDiscount] = useState(0);

    const name = "Banana";
    const price = 2.99;


    // NOTE: This seems like it would work, but React has a delay that interferes with the value getting updated in time for the if statement to run.
    // const handlePlus = () => {
    //     setCount(count + 1);
    //     if (count >= 5) {
    //         setDiscount(20);
    //     }
    // };

    // Run a function inside setCount that performs all tasks before updating Count.  In other words, don't try to run anything immediately after updating the state that needs the new state value.
    const handlePlus = () => {
        setCount((prevCount) => {
            let count = prevCount + 1;
            if (count >= 5) {
                setDiscount(20);
            }
            return count;
        })
    }

    const handleMinus = () => {
        setCount(count - 1);
        if (count < 5) {
            setDiscount(0);
        }
    };

    return (
        <>
            <h2>{name}</h2>
            <button onClick={handleMinus}>-</button>
            <span>{count}</span>
            <button onClick={handlePlus}>+</button>
            <h2>{`$ ${price}`} each</h2>
            <h3>{`Discount: ${discount}%`}</h3>
        </>
    )
}

export default Counter;