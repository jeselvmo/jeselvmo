import getEventEmitter, { EventName } from './getEventEmitter';

/**
 * Calls each of the listeners registered for a given event.
 *
 * @since 2.1.0
 * @category Event
 * @param {number} number The event name to emit.
 * @param {...*} [args] The arguments to emit.
 * @returns {boolean} Returns if the call was successful.
 * @example
 *
 * _.emit('event');
 *
 */
function emit(event: EventName, ...args: any[]): boolean {
  return getEventEmitter().emit(event, ...args);
}

export default emit;
