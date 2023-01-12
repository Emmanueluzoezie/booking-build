import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { addDays } from 'date-fns';
import { Range } from "react-date-range";
import { format } from "date-fns";

// type rangeType = {
//     startDate: Date,
//     endDate: Date,
//     key: String,
// }

interface IstateContext {
    sidebar: boolean
    setSidebar: Dispatch<SetStateAction<boolean>>
    search: boolean
    setSearch: Dispatch<SetStateAction<boolean>>
    openDate: boolean
    setOpenDate: Dispatch<SetStateAction<boolean>>
    dateRange: Range[]
    setDateRange: Dispatch<SetStateAction<Range[]>>
}

const initialState = {
    sidebar: false,
    setSidebar: () => false,
    search: false,
    setSearch: () => false,
    openDate: false,
    setOpenDate: () => false,
    dateRange: [{
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
    }],
    setDateRange: () => void{}

}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [sidebar, setSidebar] = useState<boolean>(false)
    const [search, setSearch] = useState<boolean>(false)
    const [openDate, setOpenDate] = useState<boolean>(false)
    const [dateRange, setDateRange] = useState<Range[]>([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ])


    return (
        <StateContext.Provider value={{
            sidebar, setSidebar, dateRange, setDateRange, openDate, setOpenDate, search, setSearch
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)