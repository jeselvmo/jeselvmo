import EventEmitter from 'eventemitter3';
import getEventEmitter, { EventListener, EventName } from './getEventEmitter';

/**
 * Remove the listeners of a given event.
 *
 * @since 2.1.0
 * @category Event
 * @param {string | symbol} event The event name.
 * @param {Function} fn The event listener.
 * @param {*} [context] The event context.
 * @returns {EventEmitter} Returns the event emitter.
 * @example
 *
 * _.off('event', () => {});
 *
 */
function off(event: EventName, fn?: EventListener, context?: any): EventEmitter {
  return getEventEmitter().off(event, fn, context);
}

export default off;
