/**
 * Get an item from localStorage
 *
 * @param {String} key
 * @returns {Object|Array|String}
 */
export const get = key => {
  const raw = localStorage.getItem(key)

  try {
    return JSON.parse(raw)
  } catch (err) {
    return raw
  }
}

/**
 * Saves an item in localStorage
 *
 * @param {String} key
 * @param {Object|Array|String} value
 */
export const save = (key, value = {}) => {
  if (typeof value !== 'string' || typeof value !== 'number') {
    value = JSON.stringify(value)
  }

  localStorage.setItem(key, value)
}

/**
 * Clears localStorage
 */
export const clear = () => localStorage.clear()

/**
 * Remove an item from localStorage
 */
export const remove = key => localStorage.removeItem(key)
