import getEventEmitter, { EventListener, EventName } from './getEventEmitter';
import EventEmitter from 'eventemitter3';

/**
 * Add a listener for a given event.
 *
 * @since 2.1.0
 * @category Event
 * @param {string | symbol} event The event name.
 * @param {Function} fn The event listener.
 * @param {*} [context] The event context.
 * @returns {EventEmitter} Returns the event emitter.
 * @example
 *
 * _.on('event', () => {});
 */
function on(event: EventName, fn: EventListener, context?: any): EventEmitter {
  return getEventEmitter().on(event, fn, context);
}

export default on;
