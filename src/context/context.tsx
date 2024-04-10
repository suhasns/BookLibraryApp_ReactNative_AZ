import React, {
    createContext,
    useState
} from "react";


export interface CommonContextType {   
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    
}

const CommonContext = createContext<CommonContextType | undefined>(undefined);

const CommonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");   
    return (<CommonContext.Provider value={{ searchQuery, setSearchQuery }}>
        {children}
    </CommonContext.Provider>)
};

export { CommonProvider, CommonContext };