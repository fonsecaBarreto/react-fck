import React, { useState, FC } from 'react'
import  Dialog, { DialogStack, MakeDialogConfig, MakeNotification, MakeOptions, NotificationType }  from 'fck-react-dialog'


export const DialogExample: FC<any> = () =>{

    const [ StackComponent, StackState ] = DialogStack()

    /*  Custom Modal */
    const pushCustom = () =>{
        StackState.push(
            MakeDialogConfig(({ onAction }) =>(
                <div>Aqui um exemplo  <button onClick={pushCustom}> Abrir Outro!</button> </div>)
            ,() =>console.log("Fechando"),"Titulo Dialog", null, false)
        )
    }

    /* SUCESSO  */
    const pushSucess = () => StackState.push( MakeNotification((n)=>{console.log(n); return -1;},  ["Muito bem", "ta maneiro", "certo"], "Titulo", NotificationType.SUCCESS))
    const pushFailure = () => StackState.push(  MakeNotification((n)=>console.log(n),  ["Não foi dessa Vez", "ta maneiro", "Mal"], "Titulo", NotificationType.FAILURE))
    const pushInfo = () => StackState.push(  MakeNotification((n)=>console.log(n),  ["Informações", "ta maneiro", "certo"], "Titulo", NotificationType.INFO))
    const pushConfirmation = () => StackState.push(  MakeNotification((n)=>{
        console.log("Tomar Ações de acordo com a decisão: ",n)
    },  ["Tem Certeza disso?"], "Titulo", NotificationType.CONFIRMATION))
    
    
    const pushOptionsConfig = () => StackState.push(MakeOptions((n:any)=>{
        switch(n){
            case 0:
                console.log("*Abrindo*")
            break;
            case 1:
                console.log("*Editando*")
                return -1; // Para Fechar o Modal
            case 2: 
                console.log("*Deletando*")
            break;
            default:
                return -1
        }
        console.log("Opção selecionada com sucesso!", n);
    }, [ { label: "Abrir"}, { label: "Editar"},{ label: "Deletar"}], "Titulo da parada"))

 
    return (
        
        <div className="app-examples" > 
            <h2> Exemplo Componentes Dialogs:</h2>
            <h3> Custom </h3>
            <span> Nesse Modelo, os modais são empilhados de forma ordenada </span><br/>
            <br></br>
            <nav>  
              <button onClick={pushCustom}> Custom </button>
            </nav>
            <h3> Notifications </h3>
            <nav>  
              <button onClick={pushSucess}> Success </button>
              <button onClick={pushFailure}> Failure </button>
              <button onClick={pushInfo}> Info </button>
              <button onClick={pushConfirmation}> Confimation </button>
            </nav>
            <h3> Options </h3>
            <nav> 
              <button onClick={pushOptionsConfig}> Opções </button>
            </nav>
            <StackComponent /> 
        </div>
    )
}

export default DialogExample