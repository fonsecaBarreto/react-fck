import React from 'react'
import './style.css'

export namespace LabelWrapper {
    export type Params = {
        children: React.ReactNode, 
        label:string
    }
}

export const LabelWrapper: React.FunctionComponent<LabelWrapper.Params> = ({label, children}) =>{
     return (
          <div className="label-wrapper">
               <span>{label}:</span> {children}
          </div>
     )
}

export default LabelWrapper