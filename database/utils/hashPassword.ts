import { AES, enc } from "crypto-js";

export function encryptPassword(password: string): string {
  const secret = process.env.PASSWORD_SECRET!;
  return AES.encrypt(password, secret).toString();
}

export function decryptPassword(hashedPassword: string): string {
  const secret = process.env.PASSWORD_SECRET!;
  var bytes = AES.decrypt(hashedPassword, secret);
  return bytes.toString(enc.Utf8);
}
