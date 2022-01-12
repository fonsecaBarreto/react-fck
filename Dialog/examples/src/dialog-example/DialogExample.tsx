import React, { useState } from 'react'
import  Dialog, { MakeDialogConfig, MakeNotification, NotificationType, MakeOptions }  from '../../../lib'

export const DialogExample = (): JSX.Element =>{
    const [ show, setShow ]= useState(false)
    const [ showSucess, setShowSuccess ]= useState(false);
    const [ showOptions, setShowOptions ]= useState(false);

    const SucessConfig = MakeNotification(()=>{ 
        console.log("Foi Confirmado");
        return setShowSuccess(false);
    },
     ["Muito bem", "ta maneiro", "certo"], "Titulo da parada", NotificationType.SUCCESS)
    
     const OptionsConfig = MakeOptions((n:any)=>{
         if(n === -1) return setShowOptions(false);
        console.log("Opção selecionada com sucesso!", n);
        //
    },
     [ { label: "Muito bem"}, { label: "ta maneiro"},{ label: "certo"}], "Titulo da parada")
    
    const TestConfig = MakeDialogConfig(({ onAction }) =>{
        const submit = () =>{
            console.log("Executando uma ação aqui");
            return onAction(-1) // retornar -1 para que o Dialog seja fechado
        }
        return (<div>
            Exemplo da factory padrão
            <button onClick={submit}> Fechar Aqui</button>
        </div>)
    },(n:number)=>{ 
        if(n == -1) return setShow(false);
    },"Titulo Dialog", null, false)

    return ( <div className="app-examples" > 
        <h3> Custom </h3>
        <nav>
             <button onClick={()=>setShow(!show)}> Custom </button>
        </nav>
 
        <h3>  Apresentações  </h3>
        <nav>
            <button onClick={()=>setShowSuccess(!showSucess)}>  Sucesso </button>
            <button onClick={()=>setShowOptions(!showOptions)}> opções </button>
        </nav>

        <Dialog config={TestConfig} show={show} offset={1} /> 
        <Dialog config={SucessConfig} show={showSucess} offset={2} /> 
        <Dialog config={OptionsConfig} show={showOptions} offset={3} />

        </div>

        
    )
}

export default DialogExample