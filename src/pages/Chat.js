import { IonBackButton, IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar, CreateAnimation } from "@ionic/react";
import { addOutline, callOutline, cameraOutline, micOutline, send, sendOutline, videocamOutline } from "ionicons/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
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

    //  Local state
    const [ message, setMessage ] = useState("");
    const [ showSendButton, setShowSendButton ] = useState(false);

    const textareaRef = useRef();
    const sideRef = useRef();
    const sendRef = useRef();

    const widthAnimation = {

        property: "width",
        fromValue: "110%",
        toValue: "100%"
    };

    const fadeAnimation = {

        property: "opacity",
        fromValue: "100%",
        toValue: "0%"
    };

    const mainFadeAnimation = {

        duration: 200,
        direction: showSendButton ? "normal" : "reverse",
        iterations: "1",
        fromTo: [ fadeAnimation ],
        easing: "ease-in-out"
    };

    const mainFadeAnimation2 = {

        duration: showSendButton ? 300 : 100,
        direction: !showSendButton ? "normal" : "reverse",
        iterations: "1",
        fromTo: [ fadeAnimation ],
        easing: "ease-in-out"
    };

    const mainAnimation = {

        duration: 200,
        direction: !showSendButton ? "normal" : "reverse",
        iterations: "1",
        fromTo: [ widthAnimation ],
        easing: "ease-in-out"
    };

    useEffect(() => {
        setShowSendButton(message !== "");
    }, [ message ]);

    useEffect(() => {

        textareaRef.current.animation.play();
        sideRef.current.animation.play();
        sendRef.current.animation.play();
    }, [ showSendButton ]);

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

                        // <IonRow key={ index }>
                            
                            <div className={ `chat-bubble ${ message.sent ? "bubble-sent" : "bubble-received" }` }>
                                <p>{ message.preview }</p>
                                {/* <p className="chat-time">{ message.date }</p> */}
                            </div>
                        // </IonRow>
                    )
                })}
            </IonContent>

            <IonFooter className="chat-footer">

                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol size="1">
                            <IonIcon icon={ addOutline } color="primary" />
                        </IonCol>

                        <div className="chat-input-container">

                            <CreateAnimation ref={ textareaRef } { ...mainAnimation }>
                                <IonTextarea rows="1" value={ message } onIonChange={ e => setMessage(e.target.value) } />
                            </CreateAnimation>
                        </div>

                        {/* { !showSendButton && */}
                            <CreateAnimation ref={ sideRef } { ...mainFadeAnimation }>
                                <IonCol size="1">
                                    <IonIcon icon={ cameraOutline } color="primary" />
                                </IonCol>

                                <IonCol size="1">
                                    <IonIcon icon={ micOutline } color="primary" />
                                </IonCol>
                            </CreateAnimation>
                        {/* } */}

                        {/* { showSendButton && */}
                        <CreateAnimation ref={ sendRef } { ...mainFadeAnimation2 }>
                            <IonCol size="1" className="chat-send-button">
                                <IonIcon icon={ send } />
                            </IonCol>
                        </CreateAnimation>
                        {/* } */}
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
}

export default Chat;