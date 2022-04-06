export default function SearchBar({searchText, setSearchText}) {
    return <input onChange={(evt) => {
        setSearchText(evt.target.value)
    }}type="text" className="search" />;
}
  