import React, { useState, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import data from "../data";
import CardSorting from "./CardSorting";

const Hero = () => {
    /* Pagination */
    const itemsPerPage = 10;
    const [content, setContent] = useState(data)
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(content.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(content.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % content.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const [searchText, setSearchText] = useState("");

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const searchData = data.filter((item) => {
        if(searchText === ""){
            return item;
        } else if(item.plainText.toLowerCase().includes(searchText.toLowerCase())){
            return item;
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    console.log(searchText)

    return (
        <section className="hero">
            <h1>no context</h1>
            <p>a collection of no context <span className="highlight">unhinged</span> FIlipino texts.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Search for text here..." 
                name="search" 
                autoComplete="off" 
                value={searchText}
                onChange={handleChange} />
                <button><SearchIcon /></button>
            </form>
            <CardSorting filteredSearch={searchData} handlePageClick={handlePageClick} pageCount={pageCount} />
        </section>
    )
}

export default Hero;