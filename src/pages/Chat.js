import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar, CreateAnimation, createGesture, useIonViewWillEnter, IonActionSheet, IonToast } from "@ionic/react";
import { addOutline, alertOutline, callOutline, cameraOutline, micOutline, send, shareOutline, starOutline, trashOutline, videocamOutline } from "ionicons/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ChatStore, ContactStore } from "../store";
import { getNotificationCount, markAllAsRead, sendChatMessage, starChatMessage } from "../store/ChatStore";
import { getChat, getChats, getContact } from "../store/Selectors";

import { useLongPress } from 'react-use';
import "./Chat.css"
import ReplyTo from "../components/ReplyTo";
import { ChatBottomDetails } from "../components/ChatBottomDetails";
import { ChatRepliedQuote } from "../components/ChatRepliedQuote";
import { useCamera } from "../hooks/useCamera";
import { useGallery } from "../hooks/useGallery";

const Chat = () => {

    const params = useParams();

    //  Global State
    const chat = ChatStore.useState(getChat(params.contact_id));
    const chats = ChatStore.useState(getChats);
    const contact = ContactStore.useState(getContact(params.contact_id));
    const notificationCount = getNotificationCount(chats);

    const { takePhoto } = useCamera();
    const { prompt } = useGallery();

    //  Local state
    const [ message, setMessage ] = useState("");
    const [ showSendButton, setShowSendButton ] = useState(false);
    const [ replyToMessage, setReplyToMessage ] = useState(false);
    const [ messageSent, setMessageSent ] = useState(false);

    const [ showActionSheet, setShowActionSheet ] = useState(false);
    const [ actionMessage, setActionMessage ] = useState(false);

    const [ showToast, setShowToast ] = useState(false);
    const [ toastMessage, setToastMessage ] = useState("");

    //  Refs
    const contentRef = useRef();
    const swiperRefs = useRef([]);
    const textareaRef = useRef();
    const sideRef = useRef();
    const sendRef = useRef();
    const replyToAnimationRef = useRef();

    const actionSheetButtons = [

        {
            text: (actionMessage && actionMessage.starred) ? "Unstar Message" : "Star Message",
            icon: starOutline,
            handler: () => starChatMessage(params.contact_id, actionMessage.id)
        },
        actionMessage && actionMessage.received ? 
        {
            text: "Reply To Message",
            icon: shareOutline,
            handler: () => showReplyToMessage(actionMessage)
        } 
        :
        {
            text: "Unsend Message",
            icon: alertOutline,
            handler: () => toaster("I haven't implemented unsend :) Simple store update though")
        },
        {
            text: "Delete Message",
            icon: trashOutline,
            handler: () => toaster("I haven't implemented delete :) Simple store update though"),
            role: "destructive"
        }
    ];

    useEffect(() => {

        !showActionSheet && setActionMessage(false);
    }, [ showActionSheet ]);

    //  Scroll to end of content
    //  Mark all chats as read if we come into a chat
    //  Set up our swipe events for animations and gestures
    useIonViewWillEnter(() => {

        scrollToBottom();
        setupObserver();
        markAllAsRead(params.contact_id);
        setSwipeEvents();
    });

    //  For displaying toast messages
    const toaster = message => {

        setToastMessage(message);
        setShowToast(true);
    }

    //  Scroll to end of content
    const scrollToBottom = async () => {
        
        contentRef.current.scrollToBottom();
    }

    //  Watch for DOM changes
    //  Then scroll to bottom
    //  This ensures that the new chat message has *actually* been rendered
    //  Check this:
    //  https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    const setupObserver = () => {

        //  Mutation Observers watch for DOM changes
        //  This will ensure that we scroll to bottom AFTER the new chat has rendered
        const observer = new MutationObserver(() => {

            scrollToBottom();
        });

        //  We observe the ion-content (or containing element of chats)
        observer.observe(contentRef.current, {
            
            childList: true
        });
    }

    //  Long press callback
    const onLongPress = (e) => {

        const elementID = e.target.id;
        const chatMessageID = elementID.includes("chatText") ? parseInt(elementID.replace("chatText_", "")) : elementID.includes("chatTime") ? parseInt(elementID.replace("chatTime_", "")) : parseInt(elementID.replace("chatBubble_", ""));

        const chatMessage = chat.filter(message => parseInt(message.id) === parseInt(chatMessageID))[0];
    
        setActionMessage(chatMessage);
        setShowActionSheet(true);
    };

    const longPressEvent = useLongPress(onLongPress, {
        
        isPreventDefault: true,
        delay: 2000,
    });

    const showReplyToMessage = async message => {

            //  Activate reply-to functionality
            setReplyToMessage(message);
            await replyToAnimationRef.current.animation.play();
            contentRef.current.scrollToBottom(300);
    }

    const checkBubble = async (bubble, message, event) => {

        if (event.deltaX >= 120) {

            //  Activate reply-to functionality
            bubble.style.transform = "none";
            showReplyToMessage(message);
        } else {

            //  Put chat bubble back to original position
            bubble.style.transform = "none";
        }
    }

    //  Function to move a bubble with the deltaX swipe
    const moveBubble = (bubble, event) => {

        if (event.velocityX > 0) {

            bubble.style.transform = `translateX(${ event.deltaX }px)`;
        }
    }

    const setSwipeEvents = () => {

        chat.forEach((message, index) => {

            if (!message.sent) {
                
                const chatBubble = swiperRefs.current[index];

                const swipeGesture = createGesture({
                    el: chatBubble,
                    onEnd: e => checkBubble(chatBubble, message, e),
                    onMove: e => moveBubble(chatBubble, e)
                });

                swipeGesture.enable();
            }
        });
    }

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

    const sideButtonsAnimation = {

        duration: 200,
        direction: showSendButton ? "normal" : "reverse",
        iterations: "1",
        fromTo: [ fadeAnimation ],
        easing: "ease-in-out"
    };

    const sendButtonAnimation = {

        duration: showSendButton ? 300 : 100,
        direction: !showSendButton ? "normal" : "reverse",
        iterations: "1",
        fromTo: [ fadeAnimation ],
        easing: "ease-in-out"
    };

    const textareaAnimation = {

        duration: 200,
        direction: !showSendButton ? "normal" : "reverse",
        iterations: "1",
        fromTo: [ widthAnimation ],
        easing: "ease-in-out"
    };

    //  Set the state value when message val changes
    useEffect(() => {
        
        setShowSendButton(message !== "");
    }, [ message ]);

    //  Play the animations when the state value changes
    useEffect(() => {

        textareaRef.current.animation.play();
        sideRef.current.animation.play();
        sendRef.current.animation.play();
    }, [ showSendButton ]);

    const sendMessage = (image = false, imagePath = false) => {

        if (message !== "" || image === true) {
            
            sendChatMessage(params.contact_id, message, replyToMessage, replyToMessage ? replyToMessage.id : false, image, imagePath);
            setMessage("");
        
            setMessageSent(true);
            setTimeout(() => setMessageSent(false), 10);
            image && setTimeout(() => scrollToBottom(), 100);
        }
    }

    const handlePhoto = async () => {

        const returnedFilePath = await takePhoto();
        sendMessage(true, returnedFilePath);
    }

    const handlePrompt = async () => {

        const returnedFilePath = await prompt();
        sendMessage(true, returnedFilePath);
    }

    const replyToProps = {

        replyToAnimationRef,
        replyToMessage,
        setReplyToMessage,
        contact: contact.name,
        messageSent
    };

    return (

        <IonPage className="chat-page">
            <IonHeader>
                <IonToolbar>
                    <IonBackButton slot="start" text={ (notificationCount > 0) ? notificationCount : "" } />
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
                        <IonButton fill="clear" onClick={ () => toaster("As this is a UI only, video calling wouldn't work here.")}>
                            <IonIcon icon={ videocamOutline } />
                        </IonButton>

                        <IonButton fill="clear" onClick={ () => toaster("As this is a UI only, calling wouldn't work here.")}>
                            <IonIcon icon={ callOutline } />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent id="main-chat-content" ref={ contentRef }>

                { chat.map((message, index) => {

                    const repliedMessage = chat.filter(subMessage => parseInt(subMessage.id) === parseInt(message.replyID))[0];

                    return (
                        <div ref={ ref => swiperRefs.current[index] = ref } id={ `chatBubble_${ message.id }`} key={ index } className={ `chat-bubble ${ message.sent ? "bubble-sent" : "bubble-received" }` } { ...longPressEvent }>
                            <div id={ `chatText_${ message.id }`}>

                                <ChatRepliedQuote message={ message } contact={ contact } repliedMessage={ repliedMessage } />

                                { message.preview }
                                { message.image && message.imagePath && <img src={ message.imagePath } alt="chat message" /> }
                                <ChatBottomDetails message={ message } />
                            </div>

                            <div className={ `bubble-arrow ${ message.sent && "alt" }` }></div>
                        </div>
                    );
                })}

                <IonActionSheet header="Message Actions" subHeader={ actionMessage && actionMessage.preview } isOpen={ showActionSheet } onDidDismiss={ () => setShowActionSheet(false) } buttons={ actionSheetButtons } />

                <IonToast color="primary" isOpen={ showToast } onDidDismiss={ () => setShowToast(false) } message={ toastMessage } position="bottom" duration="3000" />
            </IonContent>

            { replyToMessage && <ReplyTo { ...replyToProps } /> }

            <IonFooter className="chat-footer" id="chat-footer">
                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol size="1">
                            <IonIcon icon={ addOutline } color="primary" onClick={ handlePrompt } />
                        </IonCol>

                        <div className="chat-input-container">
                            <CreateAnimation ref={ textareaRef } { ...textareaAnimation }>
                                <IonTextarea rows="1" value={ message } onIonChange={ e => setMessage(e.target.value) } />
                            </CreateAnimation>
                        </div>

                        <CreateAnimation ref={ sideRef } { ...sideButtonsAnimation }>
                            <IonCol size="1">
                                <IonIcon icon={ cameraOutline } color="primary" onClick={ handlePhoto } />
                            </IonCol>

                            <IonCol size="1">
                                <IonIcon icon={ micOutline } color="primary" />
                            </IonCol>
                        </CreateAnimation>

                        <CreateAnimation ref={ sendRef } { ...sendButtonAnimation }>
                            <IonCol size="1" className="chat-send-button" onClick={ sendMessage }>
                                <IonIcon icon={ send } />
                            </IonCol>
                        </CreateAnimation>
                    </IonRow>
                </IonGrid>
            </IonFooter>
        </IonPage>
    );
}

export default Chat;