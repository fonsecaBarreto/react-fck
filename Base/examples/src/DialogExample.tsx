import React, { useState } from 'react'
import  { Utils }  from 'fck-components'


export const ContentExample: Utils.DialogContent = ({onAction}) =>{
    console.log("Aqui o Exemplo")
    const submit = () =>{
        console.log("sumitting");
        onAction()
    }
    return (
        <div>Aqui vai ter Um Exempo maneiro</div> 
    )
}

export const config: Utils.DialogConfig = {
    content: ContentExample,
    loading: false,
    onAction: () => console.log('asdasd'),
    title: "Titulo aqui",
    icon: null
}

export const DialogExample = (): JSX.Element =>{

    const [ show, setShow ]= useState(false)
    return ( <div> 
        <h2> Exemplo do componente de Dialog ( Modal ) </h2>
        <button onClick={()=>setShow(!show)}> Modal Simples </button>
        <Utils.Dialog config={config} show={show} offset={1} />
    </div>
    )
}

export default DialogExample