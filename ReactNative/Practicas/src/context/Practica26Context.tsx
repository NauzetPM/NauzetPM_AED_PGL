import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { TareaProps } from "../components/Tarea";
import React from 'react';

export type animalProps = {
    foto:string,
    nombre:string,
    id:number,
    especie:string,
  };
export interface AppContextType {
    animal: animalProps[];
    setanimal: (pelicula:animalProps[])=>void;
}
export const AppContext26 = createContext<AppContextType>({} as AppContextType);

export const Practica26Context = (props: {children:ReactNode}) => {
    const [peliculasfav, setpeliculasfav] = useState<animalProps[]>([{
    foto:"https://www.elmueble.com/medio/2023/10/17/perro-de-raza-doberman_22d1acaa_231017170613_1000x612.jpg",
    nombre:"Dóberman",id:1,especie:"Perro"},
    {foto:"https://images.hola.com/imagenes/mascotas/20201126180035/gato-persa-caracteristicas-razas-gatos/0-894-476/gato-persa-m.jpg?tx=w_680",
    nombre:"Persa",id:2,especie:"Gato"}]);

    const contextValues: AppContextType = {
        animal: peliculasfav,
        setanimal: setpeliculasfav
    };
    return (
        <AppContext26.Provider value={contextValues}>
            {props.children}
        </AppContext26.Provider>
    );

}
export const useAppContext = () => {
    return useContext(AppContext26);
}

