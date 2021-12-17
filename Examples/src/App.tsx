import React, { useEffect, useState } from 'react'
import './style.css'

import StackExample from './StackExample'

export const MyApplication = (): JSX.Element =>{

    return (
        <div> 
            <h2> @fck-componenets/dialog</h2>
            <h3> Autor: 
                <a href={"https://github.com/fonsecaBarreto"}> Lucas Fonseca </a>
            </h3>
            <hr></hr>
            <StackExample/>
        </div>
    )
}

export default MyApplication