import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
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
import Tabs from './components/Tabs';
import SubPages from './components/SubPages';

const App = () => {

	const pages = [

		{
			name: "Status",
			subPage: false,
			icon: discOutline,
			path: "/pages/status",
			component: Status,
			isTab: true
		},
		{
			name: "Calls",
			subPage: false,
			icon: callOutline,
			path: "/pages/calls",
			component: Calls,
			isTab: true
		},
		{
			name: "Camera",
			subPage: false,
			icon: cameraOutline,
			path: "/pages/camera",
			component: Calls,
			isTab: true
		},
		{
			name: "Chats",
			default: true,
			subPage: false,
			icon: chatbubblesOutline,
			path: "/pages/chats",
			component: Chats,
			isTab: true
		},
		{
			name: "Settings",
			subPage: false,
			icon: settingsOutline,
			path: "/pages/settings",
			component: Settings,
			isTab: true
		},
		{
			name: "Chat",
			subPage: true,
			icon: chatbubblesOutline,
			path: "/view-chat/:contact_id",
			component: Chat,
			isTab: false
		}
	]

	return (
		<IonApp>
			<IonReactRouter>

				<IonSplitPane contentId="main">

					<IonRouterOutlet id="main">

						<Route path="/pages">
							<Tabs pages={ pages } />
						</Route>
						<SubPages pages={ pages } />
						
						<Route path="/" component={ Chats } exact={ true } />
						<Redirect exact from="/" to="/pages/chats" />
					</IonRouterOutlet>
				</IonSplitPane>
				
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
