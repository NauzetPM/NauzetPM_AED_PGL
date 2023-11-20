import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { TareaProps } from "../components/Tarea";


export interface AppContextType {
    tareas: TareaProps[];
    settareas: (pelicula:TareaProps[])=>void;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const PeliculaContext = (props: {children:ReactNode}) => {
    const [peliculasfav, setpeliculasfav] = useState<TareaProps[]>([]);
    /*const marcarfav=(pelicula:PeliculaCardProps[])=>{
        setpeliculasfav(pelicula);
    };*/
    const contextValues: AppContextType = {
        tareas: peliculasfav,
        settareas: setpeliculasfav
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
