import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    city:undefined,
    dates:[],
    options:{
        adult:undefined,
        children:undefined,
        room:undefined,
    },
}

export const NewSearchContext = createContext(INITIAL_STATE)

const SearchReducer = (state, action) => {
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state
    }
}

export const NewSearchContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE)


    return(
        <NewSearchContext.Provider value={
            {
                city:state.city, 
                dates:state.dates, 
                options:state.options,
                dispatch
            }
            
            }>
            {children}
        </NewSearchContext.Provider>
    )
}