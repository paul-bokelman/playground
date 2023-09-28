import crypto from "crypto";

const algorithm = "aes-256-ctr";

const hash = ({ password }) => {
  return crypto.createHash("sha256").update(password).digest("hex").slice(0, 32);
};

const key = hash({ password: "password" });

const encrypt = (text) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const result = Buffer.concat([iv, cipher.update(text), cipher.final()]);
  return result.toString("hex");
};

const decrypt = (text) => {
  const [iv, encrypted] = [text.slice(0, 32), text.slice(32)];
  console.log(iv, encrypted);
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, "hex"));
  const res = Buffer.concat([decipher.update(Buffer.from(encrypted, "hex")), decipher.final()]);
  return res.toString();
};

const data = encrypt("Hello World");

const decrypted = decrypt(data);

console.log(decrypted);
