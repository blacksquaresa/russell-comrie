/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

const target = "gareth@blacksquare.co.za";
const ESC_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#x27;",
  "/": "&#x2F;",
};
const ESC_REGEX = /[&<>"'/]/ig;
const EMAIL_REGEX = /^[-!#$%&'*+/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
const transporter = nodemailer.createTransport({
  host: "aspmx.l.google.com",
  port: 25,
  secure: false, // true for port 465, false for other ports
});

function isEmailValid(email) {
  if (!email) {
    return false;
  }

  if (email.length > 254) {
    return false;
  }

  const valid = EMAIL_REGEX.test(email);
  if (!valid) {
    return false;
  }

  // Further checking of some things regex can't handle
  const parts = email.split("@");
  if (parts[0].length > 64) {
    return false;
  }

  const domainParts = parts[1].split(".");
  if (domainParts.some((part) => {
    return part.length > 63;
  })) {
    return false;
  }

  return true;
}

function escapeHTML(source) {
  return source.replace(ESC_REGEX, (match) => (ESC_MAP[match]));
}

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.sendMesage = onRequest(async (request, response) => {
  const name = escapeHTML(request.body.name || "");
  const subject = escapeHTML(request.body.subject || "Query from Russell Comrie website");
  const message = escapeHTML(request.body.message || "No message was provided");
  const context = escapeHTML(request.body.context || "");
  const replyTo = request.body.email || "";

  if (!isEmailValid(replyTo)) {
    response.status(406).send("Invalid email address");
    return;
  }

  const from = name ? `${name}  <${replyTo}>` : replyTo;
  const text = generateMessage(name, message, context);

  let mailResult;
  try {
    mailResult = await transporter.sendMail({
      from: from,
      to: target,
      subject: subject,
      text: text,
    });
  } catch (error) {
    response.status(500).send("Failed to send email");
    logger.error("Failed to send email", error, {name, subject, message, context, replyTo, mailResult});
    return;
  }

  logger.info("New email sent successfully", {name, subject, message, context, replyTo, mailResult});
  response.status(200);
});

function generateMessage(name, message, context) {
  return `Dearest Russell
  
A message has been received from ${name} on your Russell Comrie website. ${context}

${message}

Thanks
Your website`;
}
