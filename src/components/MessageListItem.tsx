import {
  IonItem,
  IonLabel,
} from '@ionic/react';
import { Message } from '../data/messages';
import './MessageListItem.css';
import {getBarcodes} from "../helper";
import {useHistory} from "react-router";

interface MessageListItemProps {
  message: Message;
}

const MessageListItem: React.FC<MessageListItemProps> = ({ message }) => {
    const history = useHistory();
    const onClickHandler = () => {
        if (message.type === 'CapacitorCommunityBarcodeScanner' || message.type === 'CapacitorMLKitCamera') {
            history.push('/scanner',{type: message.type});
            return
        }
        getBarcodes(message.type?? '');
    }

  return (
        <IonItem id="message-list-item" onClick={onClickHandler} detail={false}>
          <div slot="start" className="dot dot-unread"></div>
          <IonLabel className="ion-text-wrap">
            <h3>{message.name}</h3>
          </IonLabel>
        </IonItem>
  );
};

export default MessageListItem;
