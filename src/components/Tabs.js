import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";

const Tabs = ({ pages }) => {

    return (

        <IonTabs>
            <IonRouterOutlet>

                { pages.map((page, index) => {

                    const TabComponent = page.component;

                    if (page.isTab) {
                        return (
                            <Route key={ index } exact={ true } path={ page.path }>
                                <TabComponent />
                            </Route>
                        );
                    }
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
    );
}

export default Tabs;