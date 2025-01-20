// components/BarcodeActionSheet.tsx
import React, { useState } from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput } from '@ionic/react';

interface BarcodeActionSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (barcode: string) => void;
  onScan: () => Promise<void>;
}

const BarcodeActionSheet: React.FC<BarcodeActionSheetProps> = ({ isOpen, onClose, onSave, onScan }) => {
  const [inputValue, setInputValue] = useState('');

  const handleManualSave = () => {
    if (inputValue) {
      onSave(inputValue);
      setInputValue('');
      onClose();
    } else {
      alert('Please enter a barcode!');
    }
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="sheet-modal" initialBreakpoint={0.5} breakpoints={[0.25, 0.5, 0.75]}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Barcode Actions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          placeholder="Enter Barcode Manually"
          value={inputValue}
          onIonChange={(e) => setInputValue(e.detail.value!)}
        />
        <IonButton expand="block" onClick={handleManualSave}>
          Save Manually Entered Barcode
        </IonButton>
        <IonButton expand="block" color="secondary" onClick={onScan}>
          Scan Barcode
        </IonButton>
        <IonButton expand="block" color="light" onClick={onClose}>
          Cancel
        </IonButton>
      </IonContent>
    </IonModal>
  );
};

export default BarcodeActionSheet;
