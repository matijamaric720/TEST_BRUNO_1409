function PlaceFinderBlank({ value, onChange, onSelect }) {
  const handleChange = (e) => {
    onChange(e.target.value); // update parent state
  };

  return (
    <input
      type="text"
      value={value}           // controlled input
      onChange={handleChange}
      placeholder="Enter destination"
      // optionally: onBlur or onSelect to trigger onSelect callback
    />
  );
}
