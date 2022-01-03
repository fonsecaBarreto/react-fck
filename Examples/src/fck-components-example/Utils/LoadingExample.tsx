import React from 'react'
import  { Utils }  from 'fck-components'
export const LoadingExample = (): JSX.Element =>{
    return ( <div> 
        <h3> Loading: </h3>
        <div className='b-container'>
            <Utils.LoadingComponent/>
        </div>
    </div>
    )
}

export default LoadingExample