/**
 * Template function for response.
 *
 * @param {Object[]} data Response data.
 * @param {number}   code HTTP response status code.
 * @param {number}   message Feedback on how data is exchanged between a server and a client.
 * @param {string}   status Related to status code, feedback on request.
 *
 * @return {Object} United template for the response of the server.
 */
const formatResponse = (
  data,
  code = 200,
  message = 'success',
  status = 'OK'
) => {
  const response = { code, message, status };
  if (data) response.data = data;
  return response;
};

module.exports = {
  formatResponse,
};
