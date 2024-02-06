const generatePayload = require('promptpay-qr');
const qrcode = require('qrcode');
const fs = require('fs');

const mobileNumber = '0962287586';
const IDCardNumber = '0-0000-00000-00-0';
const amount = 20;
const payload = generatePayload(mobileNumber, { amount }); //First parameter : mobileNumber || IDCardNumber

// Generate QR Code directly to PNG file
const options = { errorCorrectionLevel: 'H' }; // Error correction level set to high
qrcode.toFile('./qr.png', payload, options, (err) => { // Change the file extension to .png
    if (err) throw err;
    console.log('QR Code generated successfully as qr.png');
});
