import getEventEmitter, { EventName, EventListener } from './getEventEmitter';

/**
 * Return the listeners registered for a given event.
 *
 * @since 2.1.0
 * @category Event
 * @param {string | symbol} event The event to get.
 * @returns {Array} Returns the listeners.
 * @example
 *
 * _.listeners('event');
 * // => [function() {}]
 */
function listeners(event: EventName): Array<EventListener> {
  return getEventEmitter().listeners(event);
}

export default listeners;
