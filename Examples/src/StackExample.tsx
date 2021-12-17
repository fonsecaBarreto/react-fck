import React, { useState, FC } from 'react'
import  Dialog, { DialogStack, MakeDialogConfig }  from '@fck-components/dialog'


export const DialogExample: FC<any> = () =>{


    /* const [ stackList, setStackList ] = useState([
        MakeDialogConfig(({ onAction }) =>{
            const submit = () =>{
                console.log("Executando uma ação aqui");
                return onAction(-1) // retornar -1 para que o Dialog seja fechado
            }
            return (<div>Aqui vai ter Um Exempo maneiro feito com o factory
    
                <button onClick={submit}> Testando</button>
            </div>)
        },(n:number)=>{ 
            if(n == -1) return alert("Fechando")
        },"Titulo Dialog", null, false)
    ]); 
 */

    return (
        
        <div className="app-examples" > 
            <h3> Stack Mode </h3>
            <span> Nesse Modelo, os modais são empilhados de forma ordenada </span><br/>

            <nav>
             
               {/*  <button onClick={()=>setShow(!show)}> Modal Simples </button>
                <button onClick={()=>setShowSuccess(!showSucess)}> Notificação de Sucesso </button> */}
            </nav>
             <DialogStack /> 
        </div>
    )
}

export default DialogExample