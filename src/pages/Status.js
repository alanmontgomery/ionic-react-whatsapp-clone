import { IonContent, IonCardTitle, IonIcon, IonCol, IonItem, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonText, IonRow } from '@ionic/react';
import { add, camera, pencil } from 'ionicons/icons';
import styles from './Status.module.scss';

const Status = () => {
	return (
		<IonPage className={ styles.statusPage }>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonButton fill="clear">Privacy</IonButton>
					</IonButtons>
					<IonTitle>Status</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Status</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonItem lines="none" className={ `${ styles.statusAvatar } ion-margin-top` }>
					<img src="https://pbs.twimg.com/profile_images/1383061489469292548/5dhsPd4j_400x400.jpg" alt="avatar" />
					<div className={ styles.imageUpload }>
						<IonIcon icon={ add } color="white" />
					</div>
					<IonCol className="ion-padding-start">
						<IonText color="white">
							<strong>My Status</strong>
						</IonText>
						<br />
						<IonText color="medium" className={ styles.smallText }>Add to my status</IonText>
					</IonCol>

					<IonRow className={ styles.statusActions }>
						<IonCol size="6">
							<IonIcon color="primary" icon={ camera } />
						</IonCol>

						<IonCol size="6">
							<IonIcon color="primary" icon={ pencil } />
						</IonCol>
					</IonRow>
				</IonItem>

				<p color="medium" className={ `ion-text-center ${ styles.updates }` }>No recent updates to show right now.</p>
			</IonContent>
		</IonPage>
	);
};

export default Status;
