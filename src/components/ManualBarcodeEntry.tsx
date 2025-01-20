// components/ManualBarcodeEntry.tsx
import React from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton } from '@ionic/react';

interface ManualBarcodeEntryProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (barcode: string) => void;
  defaultValue?: string;
}

const ManualBarcodeEntry: React.FC<ManualBarcodeEntryProps> = ({ isOpen, onClose, onSave, defaultValue }) => {
  const [inputValue, setInputValue] = React.useState(defaultValue || '');

  const handleSave = () => {
    onSave(inputValue);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Enter Barcode</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Enter Barcode"
          value={inputValue}
          onIonChange={(e) => setInputValue(e.detail.value!)}
        />
        <IonButton onClick={handleSave}>Save</IonButton>
      </IonContent>
    </IonModal>
  );
};

export default ManualBarcodeEntry;
