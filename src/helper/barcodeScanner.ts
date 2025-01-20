import { CapacitorBarcodeScanner, CapacitorBarcodeScannerTypeHintALLOption } from "@capacitor/barcode-scanner";

// helpers/barcodeScanner.ts
export const scanBarcode = async () => {
    try {
      const res = await CapacitorBarcodeScanner.scanBarcode({
        hint: CapacitorBarcodeScannerTypeHintALLOption.ALL,
        scanText: 'Scan Barcode',
        scanButton: true,
      });
      return res.ScanResult; // Return the scanned barcode
    } catch (error) {
      throw new Error('Failed to scan barcode'); // Handle errors
    }
  };
  