import EventEmitter from 'eventemitter3';

let eventEmitter: EventEmitter;

/**
 * Gets a event emitter. (only one)
 *
 * @since 3.0.0
 * @category Event
 * @returns {EventEmitter} Returns the event emitter.
 * @example
 *
 * _.getEventEmitter();
 * // EventEmitter {_events: Events, _eventsCount: 0}
 *
 */
function getEventEmitter() {
  if (eventEmitter) {
    return eventEmitter;
  }

  eventEmitter = new EventEmitter();
  return eventEmitter;
}

export type EventName = string | symbol;
export type EventListener = (...args: any[]) => void;

export default getEventEmitter;
