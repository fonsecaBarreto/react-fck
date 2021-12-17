
import React, { FC, useState } from 'react'
import { DialogConfig } from "../Dialog"
export type StackList = DialogConfig[]

export const DialogStack: FC<any>= ()=>{

    const [stack, setStack] = useState<DialogConfig[]>([])   
     
    return (

       <React.Fragment>
           asdsadsad

           Sadasdasd
            {
       /*          JSON.stringify(stack)
    */
               /*  stack.map((c,i)=>{
                    c.onAction = actionHandler(c.onAction)
                    return (
                        <Dialog show={true} config={c} key={i} offset={i}></Dialog>
                    )
                })  */
            } 
        </React.Fragment>
    )
}

export default DialogStack


/*     const [ stack, setStack ] = useState<StackList>([]) 

    const pop = () =>{
        push()
         setStack([])  */
    /*     var novo = [ ...stack ];
        novo.pop();
        setStack(novo); */
 

    /*   const push =(novo: DialogConfig) =>{
          setStack(prev=>[...prev, novo])
      } */
  
    /*   const actionHandler = (action: Function) => {
          return async (n: any) =>{
              n = action ? ( await action(n) ) || n : n;
              if(n === -1) return pop()
          }*/