import React from 'react'
import  { Utils }  from 'fck-components'

export const HooksExamples = (): JSX.Element =>{
    const { height, width } = Utils.Hooks.useWindowSize()
    return ( <div> 
        <h2> Exemplo Hook de dimensão de tela: </h2>
      
            <label>Largura:
                <span> { width }</span>
            </label>
        
            <label>Largura:
                <span> { height }</span>
            </label>
      
    </div>
    )
}

export default HooksExamples