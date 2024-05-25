import { useEffect, useState, useRef } from "react"
import axios from 'axios';
import './search.scss';

const SearchList = () => {
    const list = useRef([]);
    const [filteredlist, setFilteredList] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(response.data);
            list.current = response.data;
            setFilteredList(response.data);
        }
        getPosts();
    }, [])

    const filterList = (e) => {
        const searchTerm = e.target.value;
        console.log(list);
        setFilteredList(list.current.filter((item) => item.title.includes(searchTerm)));
    }

    return (
        <div className="search-list">
            <input type="text" onChange={(e)=> filterList(e)} />
            <hr />
            <div className="list-items">
                {filteredlist && filteredlist.map((item) => (
                     <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    )
}

export default SearchList