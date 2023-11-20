function Input({ config, label, onChange }) {
    const handleChange = event => onChange(event.target.value);
    return (
      <div>
        <label>{label}</label>
        <input value={config} onChange={handleChange} />
      </div>  
    );
}

export default Input;