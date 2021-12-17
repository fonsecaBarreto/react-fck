import React, { useEffect, useState } from 'react'
import './style.css'
import DialogExample from './DialogExample'
import StackExample from './StackExample'

export const MyApplication = (): JSX.Element =>{

    
  /*   DialogStack.push(DialogStack.Dialog.MakeNotification( (n) =>{
        console.log(n)
        if(n == 0 ){
            console.log("CONFIRMADO");
        }else if(n == 1){
            console.log("CANCELADO");
        }
        return -1
    },["Primeira mesage", "segnsda", "asddasd"],"qualquer", "CONFIRMATION")) */


    return (
        <div> 
            <h2> @fck-componenets/dialog</h2>
            <h3> Autor: 
                <a href={"https://github.com/fonsecaBarreto"}> Lucas Fonseca </a>
            </h3>
            <hr></hr>
            maaano

           <DialogExample/> 

            <hr></hr>

            <StackExample/>
        </div>
    )
}

export default MyApplication