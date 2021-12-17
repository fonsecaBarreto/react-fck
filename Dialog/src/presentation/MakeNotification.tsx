import React, { ReactNode } from 'react'
import './style.css'
import { MakeDialogConfig, OnActionFunction } from '../Dialog'
import { FiAlertCircle, FiUserCheck } from 'react-icons/fi'
import { GrStatusGood } from 'react-icons/gr'
import { BsQuestionOctagon } from 'react-icons/bs'

export enum NotificationType {
    SUCCESS,
    FAILURE,
    INFO,
    CONFIRMATION
}

export function MakeNotification(onAction: OnActionFunction, messages: string[] = [], title: string="", type: NotificationType) {

    var icon: ReactNode;
    var buttons: string[] = [];

    switch(type) {
        case NotificationType.SUCCESS: 
            icon= <GrStatusGood>,</GrStatusGood>;
            messages = messages || ["Operação Relizada com sucesso"];
            buttons= ["Ok"];
        break;
        case NotificationType.FAILURE: 
            icon= <FiAlertCircle></FiAlertCircle>,
            messages = messages || ["Não foi possivel realizar essa ação."]
            buttons= ["Ok"];
        break;
        case NotificationType.INFO: 
            icon= <FiUserCheck></FiUserCheck>;
            messages= messages || [""],
            buttons= [];
        break;
        case NotificationType.CONFIRMATION: 
            icon= <BsQuestionOctagon></BsQuestionOctagon>;
            messages= messages || ["Confirme!"],
            buttons= [ "Continuar", "Cancelar" ];
        break;
    }

    return MakeDialogConfig( ({onAction}) => ( 
        <div className="notify-dialog"> 
            { icon && <span className="notify-d-icon"> {icon} </span>}
            <section className="notify-d-content-body">
                { messages.length > 0 && messages.map((m, i)=>(<span key={i}>{m}</span>)) }
            </section>
            <section className="notify-d-btns">
                { buttons.map((b,i)=>( <button onClick={()=> onAction(i)} key={i}> {b} </button>)) }
            </section>
        </div>
    ),onAction, title )
}

export default MakeNotification