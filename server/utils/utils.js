const crypto = require("crypto");

const hashPassword = (password, salt = null) => {
  if (!salt) {
    salt = crypto.randomBytes(20).toString("hex");
  }
  const key = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
  return `${key.toString("hex")}?${salt}`;
};

const sendResponse = (code, data, message, resp) => {
  resp.status(code).json({
    code,
    message,
    data,
  });
};

module.exports = { hashPassword, sendResponse };
