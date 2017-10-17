/*!
 * workplus-simple-storage.js v1.1.0
 * (c) 2017 Hejx <531601727@qq.com>
 * Released under the MIT License.
 * undefined
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.workplus = global.workplus || {})));
}(this, (function (exports) { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var Storage = function () {
  function Storage(type) {
    classCallCheck(this, Storage);

    if (typeof window !== 'undefined') {
      this.storage = window[type];
    }
  }

  createClass(Storage, [{
    key: 'add',
    value: function add(key, value, parse) {
      this.storage.setItem(key, parse ? JSON.stringify(value) : value);
    }
  }, {
    key: 'get',
    value: function get(key, parse) {
      var value = this.storage.getItem(key);
      if (value === null) return false;
      if (value && parse) return JSON.parse(value);
      if (value) return value;
    }
  }, {
    key: 'has',
    value: function has(key) {
      var value = this.storage.getItem(key);
      if (value === null || value == undefined) {
        return false;
      }
      return true;
    }
  }, {
    key: 'del',
    value: function del(key) {
      this.storage.removeItem(key);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.storage.clear();
    }
  }]);
  return Storage;
}();

var types = ['localStorage', 'sessionStorage'];
var localStorage = new Storage(types[0]);
var sessionStorage = new Storage(types[1]);

exports.localStorage = localStorage;
exports.sessionStorage = sessionStorage;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=workplus-simple-storage.js.map
