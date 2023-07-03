import { createContext, ReactNode, useState } from 'react';

type props = {
    lang : "en" | "fr"
    setLang :  React.Dispatch<React.SetStateAction<"en" | "fr">>
}
export const GlobalContext = createContext<props>({lang : "en", setLang : () => {}})
export default function GlobalContextProvider({children} : {children : ReactNode}) {
    const [lang, setLang] = useState<"en" | "fr">("en")
    
    return (
        <GlobalContext.Provider value={{lang, setLang}}>
            {children}
        </GlobalContext.Provider>
    )
};
