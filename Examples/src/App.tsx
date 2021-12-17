import React from 'react'
import './style.css'

import StackExample from './Dialog/StackExample'
import LoadingExample from './Utils/LoadingExample'

export const MyApplication = (): JSX.Element =>{

    return (
        <div> 
            <h2> fck-componenets</h2>
            <h3> Autor: 
                <a href={"https://github.com/fonsecaBarreto"}> Lucas Fonseca </a>
            </h3>
            <hr></hr>
            <LoadingExample></LoadingExample>
            <hr></hr>
            <h2> @fck-componenets/dialog</h2>
            <StackExample/>
            <hr></hr>
        </div>
    )
}

export default MyApplication