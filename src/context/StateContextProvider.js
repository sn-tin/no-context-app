import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import Cards from '../components/Cards';
import data from '../data';

export const StateContext = createContext()

export default function StateContextProvider({children}) {
  /* When scrolling, scroll-to-top button will appear */
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setIsScrolling(true)
      );
    }
  }, []);
  /* Add (former: request) form */
  const [form, setForm] = useState(false)
  const displayRequestForm = () => {
    setForm(!form)
  }
  const closeForm = () => {
    setForm(false)
  }
  /* Searchbar input */
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
      setSearchText(e.target.value)
  }
  const handleSubmit = (e) => {
      e.preventDefault()
  }
  /* When all and favorite button is clicked */
  const [isAllActive, setAllIsActive] = useState(true);
  const [isFaveActive, setFaveIsActive] = useState(false);
  const handleAllButton = () => {
      setAllIsActive(true)
      setFaveIsActive(false)
  }
  const handleFaveButton = () => {
      setFaveIsActive(true)
      setAllIsActive(false)
  }
  /* When favorite (heart icon) is clicked */
  const [dataSource, setDataSource] = useState(JSON.parse(localStorage.getItem('allItems')) || data);
  /* Save to local storage */ 
  useEffect(() => {
      localStorage.setItem("allItems", JSON.stringify(dataSource))
  })
  /* If favorite and unfavorite, change isFavorite to true or false */ 
  const onFavorite = (cardId) => {
    const newDataSource = [...dataSource];
    const foundCardData = newDataSource.find(card => card.id === cardId);
    if(!foundCardData) {
        return;
    }
    foundCardData.isFavorite = !foundCardData.isFavorite;
    setDataSource(newDataSource);
  }
  /* When user searches on all or favorite category */ 
    // Filter when user input on the searchbar matches the texts on cards
    const filteredSearch = (source) => {
        return (
            source.filter((item) => {
                if(searchText === ""){
                    return item;
                } else if(item.origText.toLowerCase().includes(searchText.toLowerCase())){
                    return item;
                }
            })
        )
    }
    const searchAll = filteredSearch(dataSource); 
    const searchFavorite = filteredSearch(dataSource);
    const showAllCards = (
            searchAll.map(item => (
                <Cards key={item.id} 
                cardId={item.id} 
                text={item.origText} 
                isFavorite={item.isFavorite} 
                onFavorite={() => onFavorite(item.id) }
                />
            ))
    )
    const showFavorites = (
        searchFavorite.filter(item => item.isFavorite === true).map(filtered => (
            <Cards key={filtered.id} 
            cardId={filtered.id} 
            text={filtered.origText} 
            isFavorite={filtered.isFavorite} 
            onFavorite={() => onFavorite(filtered.id) }
            />
        )) 
  )
  return (
    <StateContext.Provider value={{
        isScrolling,
        form,
        displayRequestForm,
        closeForm,
        searchText,
        handleChange,
        handleSubmit,
        isAllActive,
        isFaveActive,
        handleAllButton,
        handleFaveButton,
        onFavorite,
        showAllCards,
        showFavorites,
    }}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)