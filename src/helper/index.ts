import {CapacitorBarcodeScanner} from "@capacitor/barcode-scanner";
import {BarcodeScanner} from '@capacitor-community/barcode-scanner';
import {BarcodeFormat, BarcodeScanner as MLKitBarcodeScanner} from "@capacitor-mlkit/barcode-scanning";
import history from "./history";


export const getBarcodes = (type: string) => {

    switch (type) {
        case 'CapacitorBarcodeScanner':
            return capacitorBarcodeScanner();
        case 'CapacitorMLKit':
            return capacitorMLKitBarcodeScanner();
        case 'CapacitorMLKitCamera':
            return capacitorMLKitCamera();
        case 'CapacitorCommunityBarcodeScanner':
            return capacitorCommunityBarcodeScanner();
        default:
            return null;
    }
}


const capacitorBarcodeScanner = async () => {
    const res = await CapacitorBarcodeScanner.scanBarcode({
        hint: 0,
        scanText: "Scan Barcode",
    });

    if (res) {
        document.getElementById('result')!.textContent = JSON.stringify(res);
    }
}

const capacitorMLKitBarcodeScanner = async () => {
    const available = await isGoogleBarcodeScannerModuleAvailable();
    if (available) {
        const {barcodes} = await MLKitBarcodeScanner.scan({
            formats: [BarcodeFormat.QrCode],
        });
        if (barcodes.length > 0) {
            document.getElementById('result')!.textContent = JSON.stringify(barcodes);
        }
    } else {
        alert('Google Barcode Scanner is not available');
    }
}

const capacitorMLKitCamera = async () => {
    document.querySelector('body')?.classList.add('barcode-scanner-active');


    const listener = await MLKitBarcodeScanner.addListener(
        'barcodeScanned',
        async result => {
            if (result.barcode) {
                document.getElementById('result')!.textContent = JSON.stringify(result.barcode);
                stopScan();
            }
        },
    );

    await MLKitBarcodeScanner.startScan();

}

const isGoogleBarcodeScannerModuleAvailable = async () => {
    const {available} = await MLKitBarcodeScanner.isGoogleBarcodeScannerModuleAvailable()
    return available;
};


const capacitorCommunityBarcodeScanner = async () => {

    BarcodeScanner.prepare()
    BarcodeScanner.hideBackground()
    document.querySelector('body')?.classList.add('barcode-scanner-active');
    BarcodeScanner.startScan({}).then((barcodeData) => {
        console.log(barcodeData);
    });
}

export const stopScan = async () => {
    // Make all elements in the WebView visible again
    document.querySelector('body')?.classList.remove('barcode-scanner-active');

    // Remove all listeners
    // @ts-ignore
    await MLKitBarcodeScanner.removeAllListeners();

    // Stop the barcode scanner
    await MLKitBarcodeScanner.stopScan();

    history.goBack();
};



