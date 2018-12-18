import toDate from './toDate';

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  var comparison = toDate(date);
  var original = toDate(str);
  return !!(original && comparison && original < comparison);
}

export default isBefore;
