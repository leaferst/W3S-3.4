import { useState } from "react";
import Button from './Button';
import Input from './Input';
import PriceInput from './PriceInput';

function Counter() {
    const [count, setCount] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [name, setName] = useState('Banana');
    const [price, setPrice] = useState('2.99');

    // const price = 2.99;


    // NOTE: This seems like it would work, but React has a delay that interferes with the value getting updated in time for the if statement to run.
    // const handlePlus = () => {
    //     setCount(count + 1);
    //     if (count >= 5) {
    //         setDiscount(20);
    //     }
    // };

    // Run a function inside setCount that performs all tasks before updating Count.  In other words, don't try to run anything immediately after updating the state that needs the new state value.

    // This is an example of a higher order function.  Other examples include map, filter, and reduce.
    const handlePlus = () => {
        setCount((prevCount) => {
            let count = prevCount + 1;
            if (count >= 5) {
                setDiscount(20);
            }
            return count;
        })
    }

    // const handleMinus = () => {
    //     setCount(count - 1);
    //     if (count < 5) {
    //         setDiscount(0);
    //     }
    // };
    
    const handleMinus = () => {
        setCount(prevCount => {
            let count = prevCount - 1;
            if (count < 5) {
                setDiscount(0);
            }
            if (count < 0) return 0;
            return count;
        });
    }

    const handleChange = value => setName(value);
    const handlePrice = cost => setPrice(cost);

    return (
        <>
            <h2>{name}</h2>
            <Button label="-" onClick={handleMinus} />
            <span>{count}</span>
            <Button label="+" onClick={handlePlus} />
            <h2>{`$ ${price}`} each</h2>
            <h3>{`Discount: ${discount}%`}</h3>
            <Input value={name} label="Product Name" onChange={handleChange}/>
            <PriceInput value={price} label="Price" discount={discount} onChange={handlePrice} />
        </>
    )
}

export default Counter;