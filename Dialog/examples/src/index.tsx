import React from "react";
import ReactDOM from "react-dom";

import StackExample from './dialog-example/StackExample'

ReactDOM.render(
    <React.StrictMode>
        <div className='fck-examples'> 
            <h1> fck-componenets</h1>
            <h3> Autor: 
                <a href={"https://github.com/fonsecaBarreto"}> Lucas Fonseca </a>
            </h3>
            <h2> fck-dialog </h2>
           <StackExample></StackExample>
        </div>
</React.StrictMode>, document.getElementById("root") );





