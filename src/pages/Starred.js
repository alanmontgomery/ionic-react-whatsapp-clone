import { IonBackButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import { chevronForward } from 'ionicons/icons';
import { useState } from 'react';
import { ChatStore, ContactStore } from '../store';
import { getChats, getContacts } from '../store/Selectors';

import "./Starred.scss";

const Starred = () => {

    const contacts = ContactStore.useState(getContacts);
	const chats = ChatStore.useState(getChats);

    const [ starredMessages, setStarredMessages ] = useState(false);

    useIonViewWillEnter(() => {

        var tempChats = [ ...chats ];
        var starred = [];

        tempChats.forEach(tempChat => {

            tempChat.chats.forEach(chat => {

                if (chat.starred) {

                    starred.push({
                        
                        contact_id: tempChat.contact_id,
                        ...chat
                    });
                }
            });
        });

        setStarredMessages(starred);
    });

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
                    <IonBackButton slot="start" text="Settings" />
					<IonTitle>Starred Messages</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>

                { starredMessages && starredMessages.map(starredMessage => {

                    const { id, contact_id, date, preview, received } = starredMessage;
                    const contact = contacts.filter(c => c.id === contact_id)[0];

                    return (
                        <div key={ `${ contact_id }_${ id }` } className="starred-message">
                            <div className="starred-header">
                                
                                <div className="starred-contact">
                                    <img src={ contact.avatar } alt="starred avatar" />
                                    <p>{ contact.name }</p>
                                </div>

                                <p className="starred-date">{ date }</p>

                            </div>
                            <div className={ `starred-content ${ received ? "received-starred-content" : "sent-starred-content" }` }>
                                <p>{ preview }</p>
                                <IonIcon icon={ chevronForward } />
                            </div>
                        </div>
                    );
                })}
				
                { starredMessages.length < 1 && 
                
                    <div className="no-starred">
                        <img src="/assets/nostarred.png" alt="no starred" />
                        <h1>No Starred Messages</h1>
                        <p>Tap and hold on any message to star it, so you can easily find it later.</p>
                    </div>
                }
			</IonContent>
		</IonPage>
	);
};

export default Starred;