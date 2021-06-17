import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { addOutline, callOutline, cameraOutline, chatbubblesOutline, discOutline, ellipse, settingsOutline, square, triangle } from 'ionicons/icons';

import Status from "./pages/Status";
import Calls from "./pages/Calls";
import Chats from "./pages/Chats";
import Settings from "./pages/Settings";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Chat from './pages/Chat';

const App = () => {

	const pages = [

		{
			name: "Status",
			icon: discOutline,
			path: "/status",
			component: Status,
			isTab: true
		},
		{
			name: "Calls",
			icon: callOutline,
			path: "/calls",
			component: Calls,
			isTab: true
		},
		{
			name: "Camera",
			icon: cameraOutline,
			path: "/camera",
			component: Calls,
			isTab: true
		},
		{
			name: "Chats",
			icon: chatbubblesOutline,
			path: "/chats",
			component: Chats,
			isTab: true
		},
		{
			name: "Settings",
			icon: settingsOutline,
			path: "/settings",
			component: Settings,
			isTab: true
		},
		{
			name: "Chat",
			icon: chatbubblesOutline,
			path: "/view-chat/:contact_id",
			component: Chat,
			isTab: false
		}
	]

	return (
		<IonApp>
			<IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>

					{ pages.map((page, index) => {

						return (
							<Route key={ index } exact path={ page.path }>
								<page.component />
							</Route>
						);
					})}
				</IonRouterOutlet>
				<IonTabBar slot="bottom">

					{ pages.map((page, index) => {

						if (page.isTab) {
							return (
								<IonTabButton key={ index } tab={ `tab${ index }` } href={ page.path }>
									<IonIcon icon={ page.icon } />
									<IonLabel>{ page.name }</IonLabel>
								</IonTabButton>
							);
						}
					})}
				</IonTabBar>
			</IonTabs>
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
