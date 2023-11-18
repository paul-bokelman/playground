// npm run ts -- ./archive/javascript/hmac-encryption.ts
import crypto from "node:crypto";

const algorithm = "aes-192-cbc";

const iv = crypto.randomBytes(16);

const to_key = (password: string) => crypto.scryptSync(password, "salt", 24);

const hmac = (data: string, password: string) => {
  const hmac = crypto.createHmac("sha256", to_key(password));
  hmac.update(password);
  hmac.update(data);
  return hmac.digest("hex");
};

const encrypt = (data: string, password: string): { encrypted: string; hmac: string } => {
  const key = to_key(password);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(data, "utf8", "hex") + cipher.final("hex");
  return { encrypted, hmac: hmac(data, key.toString("hex")) };
};

const decrypt = ({ encrypted, hmac: receivedHmac }: { encrypted: string; hmac: string }, password: string) => {
  const key = to_key(password);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  try {
    const decrypted = decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
    if (hmac(decrypted, key.toString("hex")) !== receivedHmac) {
      return console.log("integrity invalid");
    }
    return console.log(decrypted);
  } catch (e) {
    return console.log("invalid password");
  }
};

const real_data = JSON.stringify([
  { name: "test", desc: "random" },
  { name: "test2", desc: "random2" },
]);

const invalid_data = JSON.stringify([
  { name: "test", desc: "random" },
  { name: "test2", desc: "random1" },
]);

const enc_data = encrypt(real_data, "password123");
const invalid_enc_data = encrypt(invalid_data, "password123");

decrypt({ encrypted: enc_data.encrypted, hmac: invalid_enc_data.hmac }, "password123"); // -> integrity invalid
decrypt(enc_data, "password124"); // -> incorrect password
decrypt(enc_data, "password123"); // -> data
