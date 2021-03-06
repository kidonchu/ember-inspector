import Ember from 'ember';
const { Handlebars: { makeBoundHelper } } = Ember;
/**
 * Escape a url component
 *
 * @method escapeUrl
 * @param {String} url
 * @return {String} encoded url
 */
export function escapeUrl(url) {
  return encodeURIComponent(url);
}

export default makeBoundHelper(escapeUrl);
