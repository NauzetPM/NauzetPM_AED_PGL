import React, { useState } from 'react'

export type FormData = {
    jubilado:boolean,
    casado: boolean,
    edad:number,
    nombre:string
}

const usePractica15 = () => {
    const [formdata,setformdata]=useState<FormData>({}as FormData);
    function fillFormData(value:boolean|number|string,field:keyof FormData){
        setformdata({
            ...formdata,
            [field]:value
        }
        );
    }
    return{
        formdata,
        fillFormData
    }
}

export default usePractica15