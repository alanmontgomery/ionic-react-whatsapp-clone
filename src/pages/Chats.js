import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonButtons, IonButton, IonIcon, IonItem } from '@ionic/react';
import { checkmarkDone, createOutline } from 'ionicons/icons';
import './Chats.css';

import { ChatStore, ContactStore } from '../store';
import { getContacts, getChats, getLatestChats } from '../store/Selectors';

const Chats = () => {

	const contacts = ContactStore.useState(getContacts);
	const latestChats = ChatStore.useState(getChats);

	console.log(latestChats);

	const chats = [

		{
			name: "Amy Sister",
			preview: "Al!! The black deer festival is cancelled, so I'm gonna do a wee hol",
			avatar: "https://photos.bandsintown.com/large/9519779.jpeg",
			date: "20:05",
			read: false	
		},
		{
			name: "Max Lynch",
			preview: "Excited for the Ioniconf 2021! The 23rd can't come quick enough",
			avatar: "https://pbs.twimg.com/profile_images/1318970727173885953/bln98FNj_400x400.jpg",
			date: "Yesterday",
			read: true
		},
		{
			name: "Mike Hartington",
			preview: "Hey Alan, can I schedule a call with you tomorrow please",
			avatar: "https://pbs.twimg.com/profile_images/1084993841898446849/DJ8XtR6L_400x400.jpg",
			date: "Saturday",
			read: true
		}
	];

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
