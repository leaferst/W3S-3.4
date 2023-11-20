function PriceInput({ label, value, discount, onChange }) {
    const handleChange = event => onChange(() => {
        let cost = event.target.value;
        if (cost <= 0) return 0;
        // cost = cost * (1 - (discount/100));
        return cost;
    });

    return (
        <div>
          <label>{label}</label>
          <input
            value={value}
            onChange={handleChange}
            />
        </div>  
    );
}

export default PriceInput;