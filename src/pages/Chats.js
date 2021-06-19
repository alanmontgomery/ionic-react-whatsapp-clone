import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonIcon, IonItem } from '@ionic/react';
import { checkmarkDone, createOutline } from 'ionicons/icons';
import './Chats.css';

import { ChatStore, ContactStore } from '../store';
import { getContacts, getChats, getLatestChats } from '../store/Selectors';

const Chats = () => {

	const contacts = ContactStore.useState(getContacts);
	const latestChats = ChatStore.useState(getChats);

	console.log(latestChats);

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
					<IonSearchbar></IonSearchbar>
				</IonHeader>


				{ latestChats.map((chat, index) => {

					const { chats, contact_id } = chat;
					const { read, date, preview } = chats[0];
					const contact = contacts.filter(c => c.id === contact_id)[0];

					return (
							
						<div key={ index } className="chat-row">
							<img src={ contact.avatar } alt="avatar" />

							<IonItem routerLink={ `/view-chat/${ contact.id }` } detail={ false }>

								<div className="chat-content">
									<h2>{ contact.name }</h2>
									<p>
										{ read && 
											<IonIcon icon={ checkmarkDone } color="primary" /> 
										}
										{ preview }
									</p>
								</div>
								
								<div className="chat-details">
									<p className={ `chat-date ${ !read && "chat-unread"}` }>{ date }</p>
									{ !read && <div className="chat-notification">1</div> }
								</div>
							</IonItem>
						</div>
					);
				})}
			</IonContent>
		</IonPage>
	);
};

export default Chats;
