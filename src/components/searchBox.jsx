const SearchBox = ({ value, onChange }) => {
    return ( 
        <input 
            type="text"
            name="query"
            className="form-control my-3"
            placeholder="search..."
            val={value}
            onChange={e => onChange(e.currentTarget.value)}
        />
     );
}
 
export default SearchBox;