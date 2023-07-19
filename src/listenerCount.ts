import getEventEmitter, { EventName } from './getEventEmitter';

/**
 * Get the number of all listeners for `event`.
 *
 * @since 2.1.0
 * @category Event
 * @param {string | symbol} event The event to get.
 * @returns {number} Returns the number.
 * @example
 *
 * _.listenerCount('event');
 * // => 5
 */
function listenerCount(event: EventName): number {
  return getEventEmitter().listenerCount(event);
}

export default listenerCount;
