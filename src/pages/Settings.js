import { IonCardSubtitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { camera, cloudUpload, cloudUploadOutline, heart, helpOutline, informationOutline, key, laptop, laptopOutline, logoWhatsapp, mailUnreadOutline, notificationsOutline, pencil, qrCodeOutline, star } from 'ionicons/icons';
import styles from './Settings.module.scss';

const Settings = () => {

	const settings = [

		[
			{
				title: "Starred Messages",
				url: "/starred-messages",
				icon: star,
				color: "rgb(255, 208, 0)"
			},
			{
				title: "WhatsApp Web/Desktop",
				icon: laptopOutline,
				color: "rgb(33, 165, 114)"
			}
		],
		[
			{
				title: "Account",
				icon: key,
				color: "rgb(0, 81, 255)"
			},
			{
				title: "Chats",
				icon: logoWhatsapp,
				color: "rgb(79, 182, 96)"
			},
			{
				title: "Notifications",
				icon: mailUnreadOutline,
				color: "rgb(233, 46, 46)"
			},
			{
				title: "Storage and Data",
				icon: cloudUploadOutline,
				color: "rgb(79, 182, 96)"
			}
		],
		[
			{
				title: "Help",
				icon: informationOutline,
				color: "rgb(0, 81, 255)"
			},
			{
				title: "Tell a Friend",
				icon: heart,
				color: "rgb(228, 70, 70)"
			}
		]
	];

	return (
		<IonPage className={ styles.settingsPage }>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Settings</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Settings</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonItem lines="none" className={ `${ styles.statusAvatar }` }>
					<img src="https://pbs.twimg.com/profile_images/1383061489469292548/5dhsPd4j_400x400.jpg" alt="avatar" />
					<IonCol className="ion-padding-start">
						<IonText color="white">
							<strong>Alan Montgomery</strong>
						</IonText>
						<br />
						<IonText color="medium" className={ styles.smallText }>This is my status!</IonText>
					</IonCol>

					<IonRow className={ styles.statusActions }>
						<IonCol size="6">
							<IonIcon color="primary" icon={ qrCodeOutline } />
						</IonCol>
					</IonRow>
				</IonItem>

				{ settings.map((setting, index) => {

					return (

						<IonList key={ `setting_${ index }` } className={ `${ styles.settingsList } ion-margin-top ion-padding-top` }>

							{ setting.map((option, index) => {

								var itemStyle = { "--setting-item-color": option.color };

								return (

									<IonItem routerLink={ option.url ? option.url : "" } key={ `settingOption_${ index }` } lines="none" detail={ true }>
										<IonIcon icon={ option.icon } color="white" style={ itemStyle } />
										<p>{ option.title }</p>
									</IonItem>
								);
							})}
						</IonList>
					);
				})}

				<div className="ion-text-center ion-justify-content-center ion-margin-top ion-padding-top">
					<IonText>from</IonText>
					<IonCardSubtitle className="ion-no-padding ion-no-margin">IONIC React HUB</IonCardSubtitle>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Settings;