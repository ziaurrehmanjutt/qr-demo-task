export interface Message {
  name: string;
  id: number;
  type?: string;
}

const messages: Message[] = [
  {
    name: 'Capacitor Barcode Scanner',
    id: 0,
    type: 'CapacitorBarcodeScanner'
  },
  {
    name: 'Capacitor Community Barcode Scanner',
    id: 1,
    type: 'CapacitorCommunityBarcodeScanner'
  },
  {
    name : 'Capacitor ML Kit Barcode Scanner (ML Kit)',
    id: 2,
    type: 'CapacitorMLKit'
  },
  {
    name: 'Capacitor ML Kit Barcode Scanner (Camera)',
    id: 3,
    type: 'CapacitorMLKitCamera'
  }
];

export const getMessages = () => messages;

