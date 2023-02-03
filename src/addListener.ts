import EventEmitter from 'eventemitter3';
import getEventEmitter, { EventName } from './getEventEmitter';

/**
 * Add a listener for a given event.
 *
 * @since 3.0.0
 * @category Event
 * @param {string | symbol} event The event name.
 * @param {Function} fn The event listener.
 * @param {*} [context] The event context.
 * @returns {EventEmitter} Returns the event emitter.
 * @example
 *
 * _.addListener('event', () => {});
 *
 */
function addListener(event: EventName, fn: EventListener, context?: any): EventEmitter {
  return getEventEmitter().addListener(event, fn, context);
}

export default addListener;
