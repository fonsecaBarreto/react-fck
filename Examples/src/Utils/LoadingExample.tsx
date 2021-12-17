import React from 'react'
import  { Utils }  from 'fck-components'
import HooksExamples from './HooksExamples'
export const LoadingExample = (): JSX.Element =>{
    return ( <div> 
        <h2> Exemplo do componente de Loading: </h2>
        <div className='b-container'>

            <Utils.LoadingComponent/>
        </div>
         <HooksExamples></HooksExamples>
    </div>
    )
}

export default LoadingExample