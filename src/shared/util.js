/* @flow */

export function isString(y): %checks {
  return typeof y === 'string';
}

export function isNumber(y): %checks {
  return typeof y === 'number';
}


/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
export function isObject (obj: mixed): boolean %checks {
  return obj !== null && typeof obj === 'object'
}
