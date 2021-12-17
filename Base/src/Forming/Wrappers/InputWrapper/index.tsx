import React from 'react'
import './style.css'

export namespace InputWrapper {
    export type Params = {
        children: React.ReactNode, 
        label:string, 
        error?:string, 
        className?:string
    }
}

const InputWrapper: React.FunctionComponent<InputWrapper.Params> = ({children, label, error, className})=> {
    return (
    <div className={`input-wrapper ${className} ${error ? "warning" : ''}`}>
        <label>{label}</label>
        {children}
        {error && <span className="form-error">
            {error}
        </span>
        }
    </div>)
}

export default InputWrapper