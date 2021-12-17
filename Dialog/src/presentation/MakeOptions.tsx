import React from 'react'
import './style.css'
import { MakeDialogConfig, OnActionFunction } from '../Dialog'

export interface Options {
    label: string,
}

export function MakeOptions (onAction: OnActionFunction, options:Options[] =[], title:string ="Opções"){
    return MakeDialogConfig( ({onAction}) => ( 
        <div className="options-dialog"> 
            { options.map((o: Options, i)=>{
                return ( <button onClick={ ()=> onAction(i) } key={i}> {o.label} </button>)
            }) }
        </div>
    ),onAction, title)
}

export default MakeOptions