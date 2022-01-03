import React from 'react'
import  { Utils }  from 'fck-components'

export const HooksExamples = (): JSX.Element =>{
    const { height, width } = Utils.Hooks.useWindowSize()
    return ( <div> 
        <h3> Capturar Dimensões da tela: </h3>
      
            <label>Largura:
                <span> { width }</span>
            </label>
            <br></br>
            <label>Largura:
                <span> { height }</span>
            </label>
      
    </div>
    )
}

export default HooksExamples