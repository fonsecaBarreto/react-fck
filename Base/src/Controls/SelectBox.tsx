import React from "react";
import { ChangeEvent, useEffect, useState } from "react"
import InputWrapper from '../Forming/Wrappers/InputWrapper'
import { FCKControls } from './protocols'

export type LabelView = {
    label: string,
    value: string
}

export namespace SelectBox {
    export interface Params extends FCKControls.Params {
        list: string[] | LabelView[]
    }
}

export const SelectBox: React.FunctionComponent<SelectBox.Params> = ({ name, label, state, list, placeHolder, className }) =>{

    const [ workList, setWorkList] = useState<LabelView[]>([])

    useEffect(()=>{
        if(!list) throw new Error("Nenhuma Lista foi fornecida");
        const novo: LabelView[] = list.map((l,i)=>{
            if( typeof l == "string"){
                return ({ value: i+"", label: l })
            }
            return l;
        });
        setWorkList([{ value: "", label: placeHolder ??  "Nenhum Item Selecionado " }, ...novo]);
    },[list])


    const handleInput = ( e:ChangeEvent<HTMLSelectElement> ) =>{
        state.data.onInput(name, { value: e.target.value, label: workList[e.target.options.selectedIndex].label }) 
    }

    return (
        <InputWrapper label={label ?? name} error={state.errors.get[name]} className={className}>  
            <select 
                disabled={list.length === 0} 
                value={ state.data.get[name]?.value ?? ""} 
                onChange={handleInput}>
                { workList.map((u,i)=><option value={u.value} key={i}>{u.label}</option>) }
            </select>
        </InputWrapper>
    )
}

