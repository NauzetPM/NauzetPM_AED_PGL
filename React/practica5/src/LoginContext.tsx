import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

export interface AppContextType {
    stateNombre: string;
    setstateNombre: (nombre: string) => void;
}
export const AppContext = createContext<AppContextType>({} as AppContextType);

export const LoginContext = (props: any) => {
    const [stateNombre, setstateNombre] = useState<string>("");
    const contextValues: AppContextType = {
        stateNombre: stateNombre,
        setstateNombre: setstateNombre
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