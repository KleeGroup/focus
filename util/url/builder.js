var urlProcessor = require('./processor');
/*
* @module config/server/url-builder
* @param url - url with params such as http://url/entity/${id}
* @param method - HTTP verb {GET, POST, PUT, DELETE}
* @return {function}
*/
module.exports =  function(url, method){
  /**
   * Function returns by the module.
   * @param  {object} urlData - The JSON data to inject in the URL.
   * @param  {object} data - The JSON data to give to the request.
   * @return {function} returns a function which takes the URL as parameters.
   */
  return function generateUrl(urlData, data){
    return {
      url: urlProcessor(url, urlData),
      method: method,
      data: data
    };
  };
};
