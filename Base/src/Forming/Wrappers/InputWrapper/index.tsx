import React from 'react'
import './style.css'

export namespace InputWrapper {
    export type Params = {
        children: React.ReactNode, 
        label:string, 
        error?:string, 
        className?:string,
        w100?: boolean
    }
}

export const InputWrapper: React.FunctionComponent<InputWrapper.Params> = ({children, label, error, className, w100=true })=> {
    return (
    <div className={`input-wrapper ${error ? "warning" : ''} ${w100 ? "w100": ""} ${className} `}>
        <label>{label}</label>
        {children}
        {error && <span className="form-error">
            {error}
        </span>
        }
    </div>)
}

export default InputWrapper