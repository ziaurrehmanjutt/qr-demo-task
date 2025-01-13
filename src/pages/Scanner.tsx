import React, {useEffect} from 'react';
import {IonContent, IonPage} from "@ionic/react";
import {getBarcodes} from "../helper";
import {useHistory} from "react-router";

const Scanner = () => {
    const history = useHistory();
    // @ts-ignore
    const type = history.location.state?.type;

    useEffect(() => {
        getBarcodes(type);
    }, []);

    return (
        <IonPage className={"ScannerPage"}>
            <IonContent>
                <div className='scanner-ui'>
                    <div className="outline">
                        <span className="frame-left-bottom"/>
                        <span className="frame-right-bottom"/>
                        <span className="frame-left-top"/>
                        <span className="frame-right-top"/>
                        <span className="scan-animated"/>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Scanner;