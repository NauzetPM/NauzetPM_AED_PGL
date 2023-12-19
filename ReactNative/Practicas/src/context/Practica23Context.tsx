import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { TareaProps } from "../components/Tarea";
import React from 'react';

export interface AppContextType {
    tareas: TareaProps[];
    settareas: (pelicula:TareaProps[])=>void;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const Practica23Context = (props: {children:ReactNode}) => {
    const [peliculasfav, setpeliculasfav] = useState<TareaProps[]>([]);

    const contextValues: AppContextType = {
        tareas: peliculasfav,
        settareas: setpeliculasfav
    };
    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );

}
export const useAppContext = () => {
    return useContext(AppContext);
}
