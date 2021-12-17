import React, { useEffect, useState } from 'react'
import './style.css'
import LoadingExample from './LoadingExample'
import DialogExample from './DialogExample'
export const MyApplication = (): JSX.Element =>{

    return ( <div> 
        <h1> A Baixo Todos os examplos da Biblioteca</h1>

        <hr></hr>
        <LoadingExample></LoadingExample>
        <hr></hr>
        <DialogExample/>

        <hr></hr>

    </div>
    )
}

export default MyApplication