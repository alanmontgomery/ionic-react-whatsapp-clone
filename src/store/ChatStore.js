import { Store } from 'pullstate';

const ChatStore = new Store({

	chats: [
		{
			id: 1,
			contact_id: 1,
			chats: [

				{
					id: 1,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 2,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: false,
					sent: true,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 3,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 4,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: false,
					sent: true,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 5,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 6,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: false,
					sent: true,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 7,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 8,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: false,
					sent: true,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 9,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 10,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: false,
					sent: true,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 11,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 12,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna go on hol",
					received: false,
					sent: true,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 13,
					preview: "Hey Alan, thanks for getting in contact! I will send you an email confirming our discussion soon.",
					received: true,
					sent: false,
					date: "20:05",
					read: false,
					starred: false
				},
				{
					id: 14,
					preview: "Thanks so much! Look forward to it.",
					received: false,
					sent: true,
					date: "20:10",
					read: false,
					starred: false
				}
			]
		},
		{
			id: 2,
			contact_id: 2,
			chats: [
				
				{
					id: 1,
					preview: "Excited for the Ioniconf 2021! The 23rd can't come quick enough",
					received: false,
					sent: true,
					date: "Yesterday",
					read: true,
					starred: false
				}
			]
		},
		{
			id: 3,
			contact_id: 3,
			chats: [

				{
					id: 1,
					preview: "Excited for the Ioniconf 2021! The 23rd can't come quick enough",
					received: false,
					sent: true,
					date: "Saturday",
					read: true,
					starred: false
				}
			]
		},
		{
			id: 4,
			contact_id: 4,
			chats: [

				{
					id: 1,
					preview: "Hey Alan, this is a test whatsapp message",
					received: true,
					sent: false,
					date: "Friday",
					read: false,
					starred: true
				}
			]
		},
		{
			id: 5,
			contact_id: 5,
			chats: [

				{
					id: 1,
					preview: "Hey Alan, this is a test whatsapp message",
					received: true,
					sent: false,
					date: "Thursday",
					read: false,
					starred: false
				}
			]
		},
		{
			id: 6,
			contact_id: 6,
			chats: [

				{
					id: 1,
					preview: "Hey Alan, this is a test received whatsapp message",
					received: true,
					sent: false,
					date: "Wednesday",
					read: false,
					starred: false
				},
				{
					id: 2,
					preview: "Hey Josh, this is a test sent whatsapp message",
					received: true,
					sent: true,
					date: "Wednesday",
					read: true,
					starred: false
				},
				{
					id: 3,
					preview: "Awesome man! This seems to be coming together OK!",
					received: true,
					sent: false,
					date: "Wednesday",
					read: true,
					starred: false
				}
			]
		},
		{
			id: 7,
			contact_id: 7,
			chats: [

				{
					id: 1,
					preview: "Goodluck on the quest to space, the moon and mars!",
					received: true,
					sent: false,
					date: "08/06/2021",
					read: true,
					starred: false
				}
			]
		},
		{
			id: 8,
			contact_id: 8,
			chats: [

				{
					id: 1,
					preview: "Hey Bill, This is a test sent message to your whatsapp",
					received: true,
					sent: false,
					date: "05/06/2021",
					read: true,
					starred: false
				}
			]
		},
		{
			id: 9,
			contact_id: 10,
			chats: [

				{
					id: 1,
					preview: "This is Alans WhatsApp clone using the Ionic Framework and CapacitorJS for some native functionality.",
					received: true,
					sent: false,
					date: "Wednesday",
					read: false,
					starred: false
				},
				{
					id: 2,
					preview: "Yep, and don't forget the Ionic Animations for the slick UI transitions you see, and some Ionic Gestures for sliding etc, as well as some other things!",
					received: true,
					sent: true,
					date: "Wednesday",
					read: true,
					starred: false
				},
				{
					id: 3,
					preview: "Cool! It looks good, can we get another teaser?",
					received: true,
					sent: false,
					date: "Wednesday",
					read: true,
					starred: false
				},
				{
					id: 4,
					preview: "Sure... I'll post one on Twitter now!",
					received: false,
					sent: true,
					date: "Wednesday",
					read: true,
					starred: false
				}
			]
		},
	]
});

export const getNotificationCount = (allChats) => {

	let notificationCount = 0;

	allChats.forEach(chats => {

		chats.chats.forEach(chat => {

			if (!chat.read) {

				notificationCount++;
			}
		})
	});

	return notificationCount;
}

export const markAllAsRead = contactId => {

	ChatStore.update(s => {

		const chatIndex = s.chats.findIndex(chat => chat.contact_id === parseInt(contactId));

		s.chats[chatIndex].chats.forEach(chat => {

			chat.read = true;
		});
	});
}

export const sendChatMessage = (contactId, message, reply = false, replyID = false) => {

	const today = new Date();
	const currentTime = `${ today.getHours() }:${ today.getMinutes() }`;

	ChatStore.update(s => {

		const chatIndex = s.chats.findIndex(chat => chat.contact_id === parseInt(contactId));
		const newChat = {

			id: s.chats[chatIndex].length + 1,
			preview: message,
			received: false,
			sent: true,
			date: currentTime,
			read: true,
			starred: false,
			reply,
			replyID
		};

		s.chats[chatIndex].chats.push(newChat);
	});
}

export const starChatMessage = (contactId, messageId) => {

	ChatStore.update(s => {

		const chatIndex = s.chats.findIndex(chat => chat.contact_id === parseInt(contactId));
		const messageIndex = s.chats[chatIndex].chats.findIndex(message => message.id === parseInt(messageId));

		s.chats[chatIndex].chats[messageIndex].starred = !s.chats[chatIndex].chats[messageIndex].starred;
	});
}

export default ChatStore;