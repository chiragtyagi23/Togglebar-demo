import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer"
import { useProductContext } from "./ProductContext";



const FilterContext = createContext();

const initialState = {
    filter_products: [], 
    all_products: [],
    grid_view: false,
    filters: {
        text: "",
        category: "all",
        company: "all",
    },
};



export const FilterContextProvider = ({children})=>{

const {products} = useProductContext();


const [state,dispatch] = useReducer(reducer,initialState);

// grid view ka function 

const setGridView = ()=> {
    return dispatch({type: "SET_GRID_VIEW"});
}
 
// list view ka liya
const setListView = ()=> {
    return dispatch({type: "SET_LIST_VIEW"});
}

// update filter value for search

const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  }

  useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"})
  },[products,state.filters]);

useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCTS", payload: products});
},[products]);





return(
    <FilterContext.Provider value={{...state, setGridView, setListView, updateFilterValue}}>
    {children}
    </FilterContext.Provider>
);

};

export const useFilterContext = ()=>{
    return useContext(FilterContext)
};

