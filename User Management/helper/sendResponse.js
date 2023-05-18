module.exports = (response, data, message) => {
  response.status(200).json({ success: true, data, message });
};
