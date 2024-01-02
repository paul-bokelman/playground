// npm run ts -- ./archive/javascript/hmac-encryption.ts
import fs from "node:fs";
import crypto from "node:crypto";

const algorithm = "aes-192-cbc";

const hash = (password: string) => crypto.scryptSync(password, "salt", 24);

const hmac = (data: string, password: string) => {
  const hmac = crypto.createHmac("sha256", hash(password));
  hmac.update(password);
  hmac.update(data);
  return hmac.digest("hex");
};

const encrypt = (data: string, password: string): { encrypted: string; hmac: string } => {
  const key = hash(password);
  const iv = key.subarray(0, 16);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  const encrypted = cipher.update(data, "utf8", "hex") + cipher.final("hex");
  return { encrypted, hmac: hmac(data, key.toString("hex")) };
};

const decrypt = ([encrypted, receivedHmac]: [string, string], password: string) => {
  const key = hash(password);
  const iv = key.subarray(0, 16);
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  try {
    const decrypted = decipher.update(encrypted, "hex", "utf8") + decipher.final("utf8");
    if (hmac(decrypted, key.toString("hex")) !== receivedHmac) return Error("Integrity compromised");
    return decrypted;
  } catch (e) {
    // if data is tampered and block length is not valid then this will throw invalid password...
    return Error("Invalid Password");
  }
};

const file = "./out/hmac-enc/test.txt";
const password = "password124";

const writeTestFile = () => {
  const d = Object.values(encrypt(JSON.stringify([{ name: "valid", desc: "data" }]), password)).join(",");
  fs.writeFileSync(file, d, "utf-8");
};

const writeDifferentData = () => {
  const prevHMAC = fs.readFileSync(file, "utf-8").split(",")[1];
  const d = encrypt(JSON.stringify([{ name: "invalid", desc: "data!" }]), password).encrypted;
  fs.writeFileSync(file, [d, prevHMAC].join(","), "utf-8");
};

writeTestFile();
// writeDifferentData();

(() => {
  const tests = [decrypt(fs.readFileSync(file, "utf-8").split(",") as [string, string], password)];

  for (const [index, test] of tests.entries()) {
    if (test instanceof Error) {
      console.log("Error:", index, test.message);
    } else {
      console.log("Data:", index, test);
    }
  }
})();
