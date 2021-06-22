import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonIcon, IonItem } from '@ionic/react';
import { checkmarkDone, createOutline } from 'ionicons/icons';
import './Chats.css';

import { ChatStore, ContactStore } from '../store';
import { getContacts, getChats } from '../store/Selectors';
import { useEffect, useState } from 'react';
import ChatItem from '../components/ChatItem';

const Chats = () => {

	const contacts = ContactStore.useState(getContacts);
	const latestChats = ChatStore.useState(getChats);

	const [ results, setResults ] = useState(latestChats);

	useEffect(() => {

		setResults(latestChats);
	}, [ latestChats ]);

	const search = e => {

		const searchTerm = e.target.value;

		if (searchTerm !== "") {

			const searchTermLower = searchTerm.toLowerCase();

			const newResults = latestChats.filter(chat => contacts.filter(c => c.id === chat.contact_id)[0].name.toLowerCase().includes(searchTermLower));
			setResults(newResults);
		} else {

			setResults(latestChats);
		}
	}

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton fill="clear">Edit</IonButton>
					</IonButtons>
					<IonButtons slot="end">
						<IonButton fill="clear">
							<IonIcon icon={ createOutline } />
						</IonButton>
					</IonButtons>
					<IonTitle>Chats</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Chats</IonTitle>
					</IonToolbar>
					<IonSearchbar onIonChange={ e => search(e) } />
				</IonHeader>


				{ results.map((chat, index) => {

					return <ChatItem chat={ chat } key={ index } />;
				})}
			</IonContent>
		</IonPage>
	);
};

export default Chats;