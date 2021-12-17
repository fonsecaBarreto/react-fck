
import React, { FC, useState } from 'react'
import Dialog, { DialogConfig } from "../Dialog"


export const DialogStack = ():[ React.FunctionComponent, { stack: DialogConfig[], push: (n:DialogConfig)=>void} ] =>{

    const [ stack, setStack] = useState<DialogConfig[]>([]);
     
    const pop = () =>{
        var novo = [ ...stack ];
        novo.pop();
        setStack(novo); 
    }

    const push =(novo: DialogConfig) =>{
        setStack(prev=>[...prev, novo])
    } 
  
    const actionHandler = (action: Function) => {
        return async (n: any) =>{
            n = action ? ( await action(n) ) || n : n;
            if(n === -1) return pop()
        }
    }

    return (

       [ () => <React.Fragment>
            {
               stack.map((c,i)=>{
                    c.onAction = actionHandler(c.onAction)
                    return (
                        <Dialog show={true} config={c} key={i} offset={i}></Dialog>
                    )
                }) 
            } 
        </React.Fragment>,
        {  stack, push }
       ]
    )
}

export default DialogStack

