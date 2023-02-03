import EventEmitter from 'eventemitter3';
import getEventEmitter, { EventName } from './getEventEmitter';

/**
 * Remove all listeners, or those of the specified event.
 *
 * @since 3.0.0
 * @category Event
 * @param {string | symbol} [event] The event name.
 * @returns {EventEmitter} Returns the event emitter.
 * @example
 *
 * _.removeAllListeners('event');
 *
 */
function removeAllListeners(event?: EventName): EventEmitter {
  return getEventEmitter().removeAllListeners(event);
}

export default removeAllListeners;
