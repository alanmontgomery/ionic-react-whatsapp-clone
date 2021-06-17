import { IonBackButton, IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
import { callOutline, videocamOutline } from "ionicons/icons";
import { useParams } from "react-router";
import { ChatStore, ContactStore } from "../store";
import { getNotificationCount } from "../store/ChatStore";
import { getChat, getChats, getContact } from "../store/Selectors";

import "./Chat.css"

const Chat = () => {

    const params = useParams();
    const chat = ChatStore.useState(getChat(params.contact_id));
    const chats = ChatStore.useState(getChats);
    const contact = ContactStore.useState(getContact(params.contact_id));
    const notificationCount = getNotificationCount(chats);

    console.log(contact);
    console.log(chat);

    return (

        <IonPage className="chat-page">
            <IonHeader>
                <IonToolbar>
                    <IonBackButton slot="start" text={ notificationCount } />
                    <IonTitle>

                        <div className="chat-contact">
                            <img src={ contact.avatar } alt="avatar" />
                            <div className="chat-contact-details">
                                <p>{ contact.name }</p>
                                <IonText color="medium">last seen today at 22:10</IonText>
                            </div>
                        </div>
                    </IonTitle>

                    <IonButtons slot="end">
                        <IonButton fill="clear">
                            <IonIcon icon={ videocamOutline } />
                        </IonButton>

                        <IonButton fill="clear">
                            <IonIcon icon={ callOutline } />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                { chat.map((message, index) => {

                    return (

                        <IonRow>
                            <IonCardSubtitle className="ion-text-center">{ message.date }</IonCardSubtitle>
                            <IonCol size="10" className="chat-bubble">
                                <p>{ message.preview }</p>
                            </IonCol>
                        </IonRow>
                    )
                })}
            </IonContent>
        </IonPage>
    );
}

export default Chat;