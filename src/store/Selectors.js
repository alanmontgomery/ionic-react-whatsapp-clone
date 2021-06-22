import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getContacts = createSelector(getState, state => state.contacts);
export const getChats = createSelector(getState, state => state.chats);

//  More specific getters
export const getChat = contactId => createSelector(getState, state => state.chats.filter(c => parseInt(c.contact_id) === parseInt(contactId))[0].chats);
export const getContact = contactId => createSelector(getState, state => state.contacts.filter(c => parseInt(c.id) === parseInt(contactId))[0]);

export const getChatNotificationCount = contactId => createSelector(getState, state => (state.chats.filter(c => parseInt(c.contact_id) === parseInt(contactId))[0].chats).filter(chat => chat.read === false));