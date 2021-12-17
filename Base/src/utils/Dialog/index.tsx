import React, { ReactNode } from 'react'
import './style.css'
import { FaTimes } from 'react-icons/fa'


export type DialogContent = React.FunctionComponent<{onAction: Function}>
export type DialogConfig = {
    content: DialogContent
    title: string,
    icon:  ReactNode
    loading: boolean,
    onAction: Function
}

export type DialogProps = {
    config: DialogConfig,
    offset: number,
    show: boolean
}

export function Dialog({ config, offset=0, show= true }: DialogProps): JSX.Element{
    const { content: Content , title, loading, onAction, icon } = config
    return (
        <React.Fragment>
        { !show? undefined
            :<div className={"app-dialog"}>
                <div className="app-dialog-content" style={{ marginTop: 64 + (offset)*16 }}>
                    <div className="app-dialog-header">
                        { icon && <span> {icon}</span>} 
                        { title && <span>{title}</span>}
                            <button onClick={() => onAction(-1)} className="adc-close"> 
                                <FaTimes> </FaTimes>
                            </button>
                    </div>
                    <div className={`app-dialog-body ${loading ?' div-loading' : ''}`}>
                       <Content onAction={onAction} ></Content>
                    </div> 
                </div>
            </div>
            }
        </React.Fragment>
    )
}

export default Dialog