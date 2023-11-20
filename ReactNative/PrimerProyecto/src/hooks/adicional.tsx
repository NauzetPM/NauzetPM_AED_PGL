import React, { useState } from 'react'

export type FormData = {
    jubilado:boolean,
    casado: boolean,
    edad:number,
    nombre:string
}

const adicional = () => {
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

export default adicional