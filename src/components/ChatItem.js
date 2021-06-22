import { IonIcon, IonItem } from "@ionic/react";
import { checkmarkDone } from "ionicons/icons";
import { ContactStore } from "../store";
import { getContacts } from "../store/Selectors";

const ChatItem = ({ chat }) => {

    const contacts = ContactStore.useState(getContacts);
    const { chats, contact_id } = chat;
    const { read, date, preview, received } = chats[chats.length - 1];
    const contact = contacts.filter(c => c.id === contact_id)[0];
    const notificationCount = chats.filter(chat => chat.read === false).length;

    return (

        <div className="chat-row" id="chat-row">
            <img src={ contact.avatar } alt="avatar" />

            <IonItem className="chat-content-containere" routerLink={ `/view-chat/${ contact.id }` } detail={ false }>

                <div className="chat-content">
                    <h2>{ contact.name }</h2>
                    <p className="ion-text-wrap">
                        { (read && received) && 
                            <IonIcon icon={ checkmarkDone } color="primary" /> 
                        }
                        { preview }
                    </p>
                </div>
                
                <div className="chat-details">
                    <p className={ `chat-date ${ (received && notificationCount > 0) && "chat-unread"}` }>{ date }</p>
                    { (received && notificationCount > 0) && <div className="chat-notification">{ notificationCount }</div> }
                </div>
            </IonItem>
        </div>
    );
}

export default ChatItem;