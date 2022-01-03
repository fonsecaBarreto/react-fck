import React, { useEffect, useState } from "react";
import './style.css'
import { SiPlatformdotsh } from 'react-icons/si'


export type ColumnConfig = { sm: number, lg: number };
export namespace FormGrid {
    export type Params = {
        title?: string, 
        children: React.ReactNode,
        columns: { sm: number, lg: number }[] | number[],
        freeze?: boolean,
        icon?:React.ReactNode
    }
}

export const FormGrid: React.FunctionComponent<FormGrid.Params> = ({ title, children, columns, freeze = false, icon}) => {
  
    const [ cols, setCols ] = useState<ColumnConfig[]>([]);

    useEffect(()=>{
        if(!columns) return;
        const novo = columns.map((c,i)=>{
            if( typeof c == "number"){
                return { sm: 12, lg: c }
            }
            return c;
        })
        setCols(novo);
    },[columns])
    return (
  
        <div className={`form-panel ${freeze ? 'freeze' : ''}`}>
            <section>
                { 
                    title && <React.Fragment>
                       { icon ? { icon } :<SiPlatformdotsh/>}
                        <span className="cf-title">  {title || ""}</span>
                    </React.Fragment>
                }
            </section>

            <section className="form-panel-content">
                <div className="form-panel-grid">
                    { React.Children.map(children, (x,i) =>(<div className={`grid-row r-lg${ cols[i]?.lg ?? 12 } r-sm${cols[i]?.sm ?? 12}` }> {x} </div> ))}
                </div>
            </section>
        </div>
  
    )
}

export default FormGrid