import getEventEmitter, { EventName } from './getEventEmitter';

/**
 * Return an array listing the events for which the emitter has registered listeners.
 *
 * @since 2.1.0
 * @category Event
 * @returns {Array} Returns an array listing the events.
 * @example
 *
 * _.eventNames();
 * // => ['event']
 *
 */
function eventNames(): Array<EventName> {
  return getEventEmitter().eventNames();
}

export default eventNames;
