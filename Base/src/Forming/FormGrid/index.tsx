import React from "react";
import './style.css'
import { SiPlatformdotsh } from 'react-icons/si'

export namespace FormGrid {
    export type Params = {
        title?: string, 
        children: React.ReactNode,
        freeze: boolean,
        columns: number[],
    }
}
export const FormPanel: React.FunctionComponent<FormGrid.Params> = ({ title, children, columns = [], freeze}) => {

    const classNames = [ "one", "two", "three", "four", "five", "six" ]

    return (
  
        <div className={`form-panel ${freeze ? 'freeze' : ''}`}>
            <section>
                { 
                    title && <React.Fragment>
                        <SiPlatformdotsh/>
                        <span className="cf-title">  {title || ""}</span>
                    </React.Fragment>
                }
            </section>

            <section className="form-panel-content">
                <div className="form-panel-grid">
                    { React.Children.map(children, (x,i) =>(<div className={`grid-row ${classNames[columns[i]-1]}`}> {x} </div> ))}
                </div>
            </section>
        </div>
  
    )
}

export default FormPanel