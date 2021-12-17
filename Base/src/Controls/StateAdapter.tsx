import React, { useState } from "react"

export const StateAdapter = ( initial_data: Record<string, any> ) =>{
 
    const [ data, setData ] = useState<Record<string, any>>({ ...initial_data })
    const [ errors, setErrors ]= useState<Record<string, any>>({ })
    const [ loading, setLoading ] = useState(false)

    const onInput = (key: string, value: string, capital:boolean = false) => {
        if(capital){
            value = value.replace(/\b\w/g, c => c.toUpperCase());
        }
        setData(prev => ({  ...prev,  [key]:value  }))
    }

    return {
        data: {
            get: data, set: setData, onInput, 
            clear: () => setData({ ...initial_data })
        },
        errors: { 
            get: errors, set: setErrors , clear: () => {setErrors({ })},
        },
        loading: { 
            get:loading, set: setLoading 
        },
    }
 
}

export default StateAdapter