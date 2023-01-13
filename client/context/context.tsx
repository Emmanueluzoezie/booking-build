import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";
import { addDays } from 'date-fns';
import { Range } from "react-date-range";
import { format } from "date-fns";

type rangeType = {
    startDate: Date | undefined,
    endDate: Date | undefined,
}

interface IstateContext {
    sidebar: boolean
    setSidebar: Dispatch<SetStateAction<boolean>>
    search: boolean
    setSearch: Dispatch<SetStateAction<boolean>>
    endDate: Date | null
    setEndDate: Dispatch<SetStateAction<Date | null>>
    startDate: Date | null
    setStartDate: Dispatch<SetStateAction<Date | null>>
}

const initialState = {
    sidebar: false,
    setSidebar: () => false,
    search: false,
    setSearch: () => false,
    endDate: null,
    setEndDate: () => void {},
    startDate: null ,
    setStartDate: () => void{}

}

const StateContext = createContext<IstateContext>(initialState)

interface Childern {
    children: React.ReactNode
}

export const ContextProvider: React.FC<Childern> = ({ children }) => {
    const [sidebar, setSidebar] = useState<boolean>(false)
    const [search, setSearch] = useState<boolean>(false)
    const [endDate, setEndDate] = useState<Date|null>(null)
    const [startDate, setStartDate] = useState<Date|null>(null)


    return (
        <StateContext.Provider value={{
            sidebar, setSidebar, startDate, setStartDate, endDate, setEndDate, search, setSearch
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useContextState = () => useContext(StateContext)