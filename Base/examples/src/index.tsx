import React from "react";
import ReactDOM from "react-dom";

import FormingExamples from './Forming/FormingExamples'
import ControlsExamples from './Forming/ControlsExamples'
 
ReactDOM.render(
    <React.StrictMode>
        <div className='fck-examples'> 
            <h1> fck-componenets</h1>
            <h3> Autor: 
                <a href={"https://github.com/fonsecaBarreto"}> Lucas Fonseca </a>
            </h3>
            <h2> fck-componenets/Base </h2>
           <ControlsExamples></ControlsExamples>
            <FormingExamples></FormingExamples>
        </div>
</React.StrictMode>, document.getElementById("root") );





