import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { PeliculaCardProps } from "./PeliculasCard";

export interface AppContextType {
    peliculasfav: PeliculaCardProps[];
    marcarfav: (pelicula:PeliculaCardProps[])=>void;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const PeliculaContext = (props: {children:ReactNode}) => {
    const [peliculasfav, setpeliculasfav] = useState<PeliculaCardProps[]>([]);
    /*const marcarfav=(pelicula:PeliculaCardProps[])=>{
        setpeliculasfav(pelicula);
    };*/
    const contextValues: AppContextType = {
        peliculasfav: peliculasfav,
        marcarfav: setpeliculasfav
    };
    //{peliculasfav,marcarfav}
    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );

}
export const useAppContext = () => {
    return useContext(AppContext);
}
