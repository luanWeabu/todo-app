/**
 *
 * @param {String} prefix
 * @description generate new id for a data record by current time
 */
export function generateNewId(prefix) {
  return `${prefix}-${Date.now()}`;
}
