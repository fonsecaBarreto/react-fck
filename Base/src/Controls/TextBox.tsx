import React from "react";
import { ChangeEvent, useEffect, useState } from "react"
import InputWrapper from '../Forming/Wrappers/InputWrapper'
import { FCKControls } from './protocols'
import InputMask from 'react-input-mask';

export enum TextBoxTypes { TEXT="text", VIEW="view", TEXTAREA="textarea",  NUMBER="number", PASSWORD="password" } 
export namespace TextBox {
    export interface Params extends FCKControls.Params {
        type: TextBoxTypes,
        mask?: string
    }
}

export const TextBox: React.FunctionComponent<TextBox.Params> = ({ name, label, type, placeHolder, state, className, mask }) =>{
    return (
        <InputWrapper label={label ?? name} error={state.errors.get[name]} className={className}>
            
            { type == TextBoxTypes.TEXTAREA ?
            <textarea 
                rows={4} cols={50}
                placeholder={placeHolder ?? ''} value={state.data.get?.[name] ?? ""}  
                onInput={ ( e:ChangeEvent<HTMLTextAreaElement> ) => state.data.onInput(name, e.target.value) } >

            </textarea>
            : type == TextBoxTypes.VIEW ?
                <input disabled={true} type={'text'} value={ state.data.get?.[name] ?? "" } ></input>
            :
                mask ? 
                <InputMask className="custom-input" type={'text'} placeholder={placeHolder ?? ''} mask={mask} value={state.data.get?.[name] ?? ""} 
                    onInput={ ( e:ChangeEvent<HTMLInputElement> ) => state.data.onInput(name, e.target.value) }/>
                :
                <input type={type} placeholder={placeHolder ?? ''} value={state.data.get?.[name] ?? ""}  
                onInput={ ( e:ChangeEvent<HTMLInputElement> ) => state.data.onInput(name, e.target.value) }></input>
            }
        </InputWrapper>
    )
}