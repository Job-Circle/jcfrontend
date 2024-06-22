import CryptoJS from 'crypto-js';
const SEKY = 1// $$ process.env.VUE_APP_SEKY;

const SECRET_KEY =  `${SEKY}`

/**
 * Encrypts the provided data.
 * 
 * The function generates a new random Initialization Vector (IV) each time it encrypts data.
 * This ensures that the same data encrypted multiple times will produce different ciphertexts.
 * The IV is then prepended to the actual encrypted data (ciphertext).
 */
export function encrypt(data) {
    const iv = CryptoJS.lib.WordArray.random(128 / 8);
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY, { iv: iv });
    return iv.toString(CryptoJS.enc.Hex) + ciphertext.toString();
}

/**
 * Decrypts the provided ciphertext.
 * 
 * The function first extracts the IV that was prepended to the ciphertext. 
 * It then decrypts the remaining ciphertext using both the extracted IV and SECRET_KEY.
 * If decryption fails, it returns null.
 */
export function decrypt(ciphertext) {
    try {
        const iv = CryptoJS.enc.Hex.parse(ciphertext.substr(0, 32));
        const encrypted = ciphertext.substr(32);
        const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY, { iv: iv });
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
      
    } catch (err) {
        return null;
      
    }
}
