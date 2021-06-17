import { Store } from 'pullstate';

const ChatStore = new Store({

	chats: [
		{
			id: 1,
			contact_id: 1,
			chats: [

				{
					id: 1,
					preview: "Al!! The black deer festival is cancelled, so I'm gonna do a wee hol",
					date: "20:05",
					read: false	
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
					date: "Yesterday",
					read: true
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
					date: "Saturday",
					read: true
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
					date: "Friday",
					read: false
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
					date: "Thursday",
					read: false
				}
			]
		},
		{
			id: 6,
			contact_id: 6,
			chats: [

				{
					id: 1,
					preview: "Hey Alan, this is a test whatsapp message",
					date: "Wednesday",
					read: false
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
					date: "08/06/2021",
					read: true
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
					date: "05/06/2021",
					read: true
				}
			]
		}
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

export default ChatStore;