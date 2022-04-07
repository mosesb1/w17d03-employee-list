export default function SearchBar({searchText, setSearchText}) {
    const handleChange = (evt) => {
        setSearchText(evt.target.value)
    }
    return <input onChange={handleChange} value={searchText} type="text" className="search" placeholder="Search by employee name"/>;
}
  