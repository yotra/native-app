var helper = {};

helper.stringToNumber = function(str) {
  if (str === '') { return null; }
  var num = parseFloat(str);
  if (isNaN(num) || !isFinite(num)) {
    throw new TypeError('required_number: ' + str);
  }

  return num;
};

helper.numberToString = function(num) {
  if (num === null || num === undefined) { return ''; }

  if (isNaN(num) || !isFinite(num)) {
    throw new TypeError('required_number: ' + num);
  }

  return num + '';
};

helper.stringToBoolean = function(str) {
  switch (str) {
  case 'true': return true;
  case 'false': return false;
  default: return null;
  }
};

helper.booleanToString = function(val) {
  switch (val) {
  case true: return 'true';
  case false: return 'false';
  default: return '';
  }
};

helper.nullableToString = function(nullable) {
  return nullable || '';
};

helper.stringToNullable = function(str) {
  return str === '' ? null : str;
};

var gostRegexp = /^\d{2}\.\d{2}\.\d{4}$/;

helper.gostToString = function(gost) {
  if (gost === null) { return ''; }

  if (gostRegexp.test(gost) === false) {
    throw new TypeError('required_format: dd.mm.yyyy');
  }

  return gost;
};

helper.stringToGost = function(str) {
  if (str === '') { return null; }

  if (gostRegexp.test(str) === false) {
    throw new TypeError('required_format: dd.mm.yyyy');
  }

  return str;
};

module.exports = helper;
