import React from 'react'
import  { Forming }  from '../../../lib'

export const FormingExamples = (): JSX.Element =>{
  
    return ( <div> 
        <h3> Formatação de formularios </h3>

        <Forming.FormGrid title="Titulo do formulario" columns={[5,7, 12]}>

            <Forming.InputWrapper label={"Um Valor Aqui"}>
                <input type="text" ></input>
            </Forming.InputWrapper>

            <Forming.InputWrapper label={"Um Texto aqui"}>
                <input type="text" ></input>
            </Forming.InputWrapper>

            <Forming.InputWrapper label={"Outro"}>
                <textarea></textarea>
            </Forming.InputWrapper>

        </Forming.FormGrid>

        <h3> Formatação de Dicionarios </h3>

        <Forming.FormGrid title="Titulo do formulario" columns={[{lg: 12, sm: 6}, {lg: 12, sm:6}, {lg:12, sm: 6},{ lg: 12, sm: 6}]}>

            <Forming.LabelWrapper label="Chave">
                Valor
            </Forming.LabelWrapper>

            <Forming.LabelWrapper label="Nome">
                Lucas Fonseca
            </Forming.LabelWrapper>

            <Forming.LabelWrapper label="Idade">
                25
            </Forming.LabelWrapper>

            <Forming.LabelWrapper label="Altura">
                2,88
            </Forming.LabelWrapper>

        </Forming.FormGrid>


    </div>
    )
}

export default FormingExamples