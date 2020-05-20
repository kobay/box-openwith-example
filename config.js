require("dotenv").config();

const clientID = process.env.clientID;
const clientSecret = process.env.clientSecret;
const publicKeyID = process.env.publicKeyID;
const privateKey = process.env.privateKey;
const passphrase = process.env.passphrase;
const enterpriseID = process.env.enterpriseID;

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
