// pages/Home.tsx
import React, { useState } from 'react';
import { IonContent, IonButton } from '@ionic/react';
import { scanBarcode } from '../helper/barcodeScanner';
import BarcodeActionSheet from '../components/BarcodeActionSheet';

const Home: React.FC = () => {
  const [barcode, setBarcode] = useState('');
  const [showActionSheet, setShowActionSheet] = useState(false);

  const handleScan = async () => {
    try {
      const result = await scanBarcode();
      setBarcode(result);
      alert(`Scanned Barcode: ${result}`);
      setShowActionSheet(false); // Close modal after scanning
    } catch (error:any) {
      console.error(error.message);
      alert('Barcode scanning failed.');
    }
  };

  const handleManualSave = (manualBarcode: string) => {
    setBarcode(manualBarcode);
    alert(`Manually Entered Barcode: ${manualBarcode}`);
  };

  return (
    <IonContent class='ion-padding'>
      {/* Open Action Sheet */}
      <IonButton onClick={() => setShowActionSheet(true)}>Open Barcode Options</IonButton>

      {/* Display Scanned/Entered Barcode */}
      <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '16px' }}>
        {barcode ? `Barcode: ${barcode}` : 'No Barcode Scanned or Entered'}
      </div>

      {/* Barcode Action Sheet */}
      <BarcodeActionSheet
        isOpen={showActionSheet}
        onClose={() => setShowActionSheet(false)}
        onSave={handleManualSave}
        onScan={handleScan}
      />
    </IonContent>
  );
};

export default Home;
