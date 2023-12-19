import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { PokemonCardProps } from "./PokemonCard";

export interface AppContextType {
    pokemonfav: PokemonCardProps;
    setpokemonfav: (pokemon: PokemonCardProps) => void;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppPokemonContext = (props: any) => {
    const [pokemonfav, setpokemonfav] = useState<PokemonCardProps>({} as PokemonCardProps);
    const contextValues: AppContextType = {
        pokemonfav: pokemonfav,
        setpokemonfav: setpokemonfav
    };
    return (
        <AppContext.Provider value={contextValues}>
            {props.children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => {
    return useContext(AppContext);
};