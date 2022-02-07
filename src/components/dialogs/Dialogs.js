import React from 'react';
import c from './Dialogs.module.scss'
import DialogItem from "./dialogItem/DialogItem";
import Messages from "./messages/Messages";

const Dialogs = (props) => {

    let dialogsData = props.dialogsData.map( elem => <DialogItem name={elem.name} id={elem.translit}/> );
    let messagesData = props.messagesData.map( elem => <Messages message={elem.message} /> );

    return (
        <div className={c.dialogs}>

            <div className={c.dialogsList}>
                {dialogsData}
            </div>

            <div className={c.messages}>
                {messagesData}
            </div>

        </div>
    )
};

export default Dialogs;