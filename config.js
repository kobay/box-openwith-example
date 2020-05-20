require("dotenv").config();

const clientID = process.env.clientID;
const clientSecret = process.env.clientSecret;
const publicKeyID = process.env.publicKeyID;
const passphrase = process.env.passphrase;
const enterpriseID = process.env.enterpriseID;

// privateKeyには\nが含まれているので、これを改行に変換する
const privateKey = process.env.privateKey.replace(/\\n/gm, "\n");

module.exports = {
  boxAppSettings: {
    clientID,
    clientSecret,
    appAuth: {
      publicKeyID,
      privateKey,
      passphrase,
    },
  },
  enterpriseID,
};
