import React from 'react'
import HooksExamples from './HooksExamples'
import LoadingExample from './LoadingExample'
export const UtilsExamples = (): JSX.Element =>{
    return ( <div> 
        <h2> Utils </h2>
        <LoadingExample></LoadingExample>
        <HooksExamples></HooksExamples>
    </div>
    )
}

export default UtilsExamples