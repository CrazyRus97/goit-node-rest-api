import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "fedorenko.ruslan97@gmail.com",
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

export const sendEmail = (data) => {
  const email = { ...data, from: "fedorenko.ruslan97@gmail.com" };
  return transport.sendMail(email);
};