'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var qs = require('qs');
require('isomorphic-fetch');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }

  return target;
}

function _typeof(obj) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj && 'function' == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', {
    writable: false,
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true,
    },
  });
  Object.defineProperty(subClass, 'prototype', {
    writable: false,
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf('[native code]') !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === 'function' ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== 'function') {
      throw new TypeError('Super expression must either be null or a function');
    }

    if (typeof _cache !== 'undefined') {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null)
    return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

// 返回一个组合了所有插件的“插件”
function compose(middlewares) {
  if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!');
  var middlewaresLen = middlewares.length;

  for (var i = 0; i < middlewaresLen; i++) {
    if (typeof middlewares[i] !== 'function') {
      throw new TypeError('Middleware must be componsed of function');
    }
  }

  return function wrapMiddlewares(params, next) {
    var index = -1;

    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() should not be called multiple times in one middleware!'));
      }

      index = i;
      var fn = middlewares[i] || next;
      if (!fn) return Promise.resolve();

      try {
        return Promise.resolve(
          fn(params, function () {
            return dispatch(i + 1);
          })
        );
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return dispatch(0);
  };
}

var Onion = /*#__PURE__*/ (function () {
  function Onion(defaultMiddlewares) {
    _classCallCheck(this, Onion);

    if (!Array.isArray(defaultMiddlewares)) throw new TypeError('Default middlewares must be an array!');
    this.defaultMiddlewares = _toConsumableArray(defaultMiddlewares);
    this.middlewares = [];
  }

  _createClass(Onion, [
    {
      key: 'use',
      // 内置内核中间件长度
      value: function use(newMiddleware) {
        var opts =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {
                global: false,
                core: false,
                defaultInstance: false,
              };
        var core = false;
        var global = false;
        var defaultInstance = false;

        if (typeof opts === 'number') {
          if (process && process.env && process.env.NODE_ENV === 'development') {
            console.warn(
              'use() options should be object, number property would be deprecated in future，please update use() options to "{ core: true }".'
            );
          }

          core = true;
          global = false;
        } else if (_typeof(opts) === 'object' && opts) {
          global = opts.global || false;
          core = opts.core || false;
          defaultInstance = opts.defaultInstance || false;
        } // 全局中间件

        if (global) {
          Onion.globalMiddlewares.splice(
            Onion.globalMiddlewares.length - Onion.defaultGlobalMiddlewaresLength,
            0,
            newMiddleware
          );
          return;
        } // 内核中间件

        if (core) {
          Onion.coreMiddlewares.splice(
            Onion.coreMiddlewares.length - Onion.defaultCoreMiddlewaresLength,
            0,
            newMiddleware
          );
          return;
        } // 默认实例中间件，供开发者使用

        if (defaultInstance) {
          this.defaultMiddlewares.push(newMiddleware);
          return;
        } // 实例中间件

        this.middlewares.push(newMiddleware);
      },
    },
    {
      key: 'execute',
      value: function execute() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var fn = compose(
          [].concat(
            _toConsumableArray(this.middlewares),
            _toConsumableArray(this.defaultMiddlewares),
            _toConsumableArray(Onion.globalMiddlewares),
            _toConsumableArray(Onion.coreMiddlewares)
          )
        );
        return fn(params);
      },
    },
  ]);

  return Onion;
})();

Onion.globalMiddlewares = [];
Onion.defaultGlobalMiddlewaresLength = 0;
Onion.coreMiddlewares = [];
Onion.defaultCoreMiddlewaresLength = 0;

var MapCache = /*#__PURE__*/ (function () {
  function MapCache(options) {
    _classCallCheck(this, MapCache);

    this.cache = new Map();
    this.timer = {};
    this.extendOptions(options);
  }

  _createClass(MapCache, [
    {
      key: 'extendOptions',
      value: function extendOptions(options) {
        this.maxCache = options.maxCache || 0;
      },
    },
    {
      key: 'get',
      value: function get(key) {
        return this.cache.get(JSON.stringify(key));
      },
    },
    {
      key: 'set',
      value: function set(key, value) {
        var _this = this;

        var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60000;

        // 如果超过最大缓存数, 删除头部的第一个缓存.
        if (this.maxCache > 0 && this.cache.size >= this.maxCache) {
          var deleteKey = _toConsumableArray(this.cache.keys())[0];

          this.cache.delete(deleteKey);

          if (this.timer[deleteKey]) {
            clearTimeout(this.timer[deleteKey]);
          }
        }

        var cacheKey = JSON.stringify(key);
        this.cache.set(cacheKey, value);

        if (ttl > 0) {
          this.timer[cacheKey] = setTimeout(function () {
            _this.cache.delete(cacheKey);

            delete _this.timer[cacheKey];
          }, ttl);
        }
      },
    },
    {
      key: 'delete',
      value: function _delete(key) {
        var cacheKey = JSON.stringify(key);
        delete this.timer[cacheKey];
        return this.cache.delete(cacheKey);
      },
    },
    {
      key: 'clear',
      value: function clear() {
        this.timer = {};
        return this.cache.clear();
      },
    },
  ]);

  return MapCache;
})();
/**
 * 请求异常
 */

var RequestError = /*#__PURE__*/ (function (_Error) {
  _inherits(RequestError, _Error);

  var _super = _createSuper(RequestError);

  function RequestError(text, request) {
    var _this2;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'RequestError';

    _classCallCheck(this, RequestError);

    _this2 = _super.call(this, text);
    _this2.name = 'RequestError';
    _this2.request = request;
    _this2.type = type;
    return _this2;
  }

  return _createClass(RequestError);
})(/*#__PURE__*/ _wrapNativeSuper(Error));
/**
 * 响应异常
 */

var ResponseError = /*#__PURE__*/ (function (_Error2) {
  _inherits(ResponseError, _Error2);

  var _super2 = _createSuper(ResponseError);

  function ResponseError(response, text, data, request) {
    var _this3;

    var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ResponseError';

    _classCallCheck(this, ResponseError);

    _this3 = _super2.call(this, text || response.statusText);
    _this3.name = 'ResponseError';
    _this3.data = data;
    _this3.response = response;
    _this3.request = request;
    _this3.type = type;
    return _this3;
  }

  return _createClass(ResponseError);
})(/*#__PURE__*/ _wrapNativeSuper(Error));
/**
 * http://gitlab.alipay-inc.com/KBSJ/gxt/blob/release_gxt_S8928905_20180531/src/util/request.js#L63
 * 支持gbk
 */

function readerGBK(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsText(file, 'GBK'); // setup GBK decoding
  });
}
/**
 * 安全的JSON.parse
 */

function safeJsonParse(data) {
  var throwErrIfParseFail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var response = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var request = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  try {
    return JSON.parse(data);
  } catch (e) {
    if (throwErrIfParseFail) {
      throw new ResponseError(response, 'JSON.parse fail', data, request, 'ParseError');
    }
  } // eslint-disable-line no-empty

  return data;
}
function timeout2Throw(msec, timeoutMessage, request) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new RequestError(timeoutMessage || 'timeout of '.concat(msec, 'ms exceeded'), request, 'Timeout'));
    }, msec);
  });
} // If request options contain 'cancelToken', reject request when token has been canceled

function cancel2Throw(opt) {
  return new Promise(function (_, reject) {
    if (opt.cancelToken) {
      opt.cancelToken.promise.then(function (cancel) {
        reject(cancel);
      });
    }
  });
}
var toString = Object.prototype.toString; // Check env is browser or node

function getEnv() {
  var env; // Only Node.JS has a process variable that is of [[Class]] process

  if (typeof process !== 'undefined' && toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    env = 'NODE';
  }

  if (typeof XMLHttpRequest !== 'undefined') {
    env = 'BROWSER';
  }

  return env;
}
function isArray(val) {
  return _typeof(val) === 'object' && Object.prototype.toString.call(val) === '[object Array]';
}
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
function isDate(val) {
  return _typeof(val) === 'object' && Object.prototype.toString.call(val) === '[object Date]';
}
function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
function forEach2ObjArr(target, callback) {
  if (!target) return;

  if (_typeof(target) !== 'object') {
    target = [target];
  }

  if (isArray(target)) {
    for (var i = 0; i < target.length; i++) {
      callback.call(null, target[i], i, target);
    }
  } else {
    for (var key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        callback.call(null, target[key], key, target);
      }
    }
  }
}
function getParamObject(val) {
  if (isURLSearchParams(val)) {
    return qs.parse(val.toString(), {
      strictNullHandling: true,
    });
  }

  if (typeof val === 'string') {
    return [val];
  }

  return val;
}
function reqStringify(val) {
  return qs.stringify(val, {
    arrayFormat: 'repeat',
    strictNullHandling: true,
  });
}
function mergeRequestOptions(options, options2Merge) {
  return _objectSpread2(
    _objectSpread2(_objectSpread2({}, options), options2Merge),
    {},
    {
      headers: _objectSpread2(_objectSpread2({}, options.headers), options2Merge.headers),
      params: _objectSpread2(_objectSpread2({}, getParamObject(options.params)), getParamObject(options2Merge.params)),
      method: (options2Merge.method || options.method || 'get').toLowerCase(),
    }
  );
}

// 前后缀拦截
var addfix = function addfix(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var prefix = options.prefix,
    suffix = options.suffix;

  if (prefix) {
    url = ''.concat(prefix).concat(url);
  }

  if (suffix) {
    url = ''.concat(url).concat(suffix);
  }

  return {
    url: url,
    options: options,
  };
};

var warnedCoreType = false; // 默认缓存判断，开放缓存判断给非 get 请求使用

function __defaultValidateCache(url, options) {
  var _options$method = options.method,
    method = _options$method === void 0 ? 'get' : _options$method;
  return method.toLowerCase() === 'get';
}

function fetchMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
    options = _ctx$req$options === void 0 ? {} : _ctx$req$options,
    _ctx$req$url = _ctx$req.url,
    url = _ctx$req$url === void 0 ? '' : _ctx$req$url,
    cache = ctx.cache,
    responseInterceptors = ctx.responseInterceptors;

  var _options$timeout = options.timeout,
    timeout = _options$timeout === void 0 ? 0 : _options$timeout,
    timeoutMessage = options.timeoutMessage,
    _options$__umiRequest = options.__umiRequestCoreType__,
    __umiRequestCoreType__ = _options$__umiRequest === void 0 ? 'normal' : _options$__umiRequest,
    _options$useCache = options.useCache,
    useCache = _options$useCache === void 0 ? false : _options$useCache,
    _options$method2 = options.method,
    method = _options$method2 === void 0 ? 'get' : _options$method2,
    params = options.params,
    ttl = options.ttl,
    _options$validateCach = options.validateCache,
    validateCache = _options$validateCach === void 0 ? __defaultValidateCache : _options$validateCach;

  if (__umiRequestCoreType__ !== 'normal') {
    if (process && process.env && process.env.NODE_ENV === 'development' && warnedCoreType === false) {
      warnedCoreType = true;
      console.warn(
        '__umiRequestCoreType__ is a internal property that use in umi-request, change its value would affect the behavior of request! It only use when you want to extend or use request core.'
      );
    }

    return next();
  }

  var adapter = fetch;

  if (!adapter) {
    throw new Error('Global fetch not exist!');
  } // 从缓存池检查是否有缓存数据

  var isBrowser = getEnv() === 'BROWSER';
  var needCache = validateCache(url, options) && useCache && isBrowser;

  if (needCache) {
    var responseCache = cache.get({
      url: url,
      params: params,
      method: method,
    });

    if (responseCache) {
      responseCache = responseCache.clone();
      responseCache.useCache = true;
      ctx.res = responseCache;
      return next();
    }
  }

  var response; // 超时处理、取消请求处理

  if (timeout > 0) {
    response = Promise.race([
      cancel2Throw(options),
      adapter(url, options),
      timeout2Throw(timeout, timeoutMessage, ctx.req),
    ]);
  } else {
    response = Promise.race([cancel2Throw(options), adapter(url, options)]);
  } // 兼容老版本 response.interceptor

  responseInterceptors.forEach(function (handler) {
    response = response.then(function (res) {
      // Fix multiple clones not working, issue: https://github.com/github/fetch/issues/504
      var clonedRes = typeof res.clone === 'function' ? res.clone() : res;
      return handler(clonedRes, options);
    });
  });
  return response.then(function (res) {
    // 是否存入缓存池
    if (needCache) {
      if (res.status === 200) {
        var copy = res.clone();
        copy.useCache = true;
        cache.set(
          {
            url: url,
            params: params,
            method: method,
          },
          copy,
          ttl
        );
      }
    }

    ctx.res = res;
    return next();
  });
}

function parseResponseMiddleware(ctx, next) {
  var copy;
  return next()
    .then(function () {
      if (!ctx) return;
      var _ctx$res = ctx.res,
        res = _ctx$res === void 0 ? {} : _ctx$res,
        _ctx$req = ctx.req,
        req = _ctx$req === void 0 ? {} : _ctx$req;

      var _ref = req || {},
        _ref$options = _ref.options;

      _ref$options = _ref$options === void 0 ? {} : _ref$options;
      var _ref$options$response = _ref$options.responseType,
        responseType = _ref$options$response === void 0 ? 'json' : _ref$options$response,
        _ref$options$charset = _ref$options.charset,
        charset = _ref$options$charset === void 0 ? 'utf8' : _ref$options$charset,
        _ref$options$getRespo = _ref$options.getResponse,
        _ref$options$throwErr = _ref$options.throwErrIfParseFail,
        throwErrIfParseFail = _ref$options$throwErr === void 0 ? false : _ref$options$throwErr,
        _ref$options$parseRes = _ref$options.parseResponse,
        parseResponse = _ref$options$parseRes === void 0 ? true : _ref$options$parseRes;

      if (!parseResponse) {
        return;
      }

      if (!res || !res.clone) {
        return;
      } // 只在浏览器环境对 response 做克隆， node 环境如果对 response 克隆会有问题：https://github.com/bitinn/node-fetch/issues/553

      copy = getEnv() === 'BROWSER' ? res.clone() : res;
      copy.useCache = res.useCache || false; // 解析数据

      if (charset === 'gbk') {
        try {
          return res
            .blob()
            .then(readerGBK)
            .then(function (d) {
              return safeJsonParse(d, false, copy, req);
            });
        } catch (e) {
          throw new ResponseError(copy, e.message, null, req, 'ParseError');
        }
      } else if (responseType === 'json') {
        return res.text().then(function (d) {
          return safeJsonParse(d, throwErrIfParseFail, copy, req);
        });
      }

      try {
        // 其他如text, blob, arrayBuffer, formData
        return res[responseType]();
      } catch (e) {
        throw new ResponseError(copy, 'responseType not support', null, req, 'ParseError');
      }
    })
    .then(function (body) {
      if (!ctx) return;
      var _ctx$res2 = ctx.res,
        _ctx$req2 = ctx.req,
        req = _ctx$req2 === void 0 ? {} : _ctx$req2;

      var _ref2 = req || {},
        _ref2$options = _ref2.options;

      _ref2$options = _ref2$options === void 0 ? {} : _ref2$options;
      var _ref2$options$getResp = _ref2$options.getResponse,
        getResponse = _ref2$options$getResp === void 0 ? false : _ref2$options$getResp;

      if (!copy) {
        return;
      }

      if (copy.status >= 200 && copy.status < 300) {
        // 提供源response, 以便自定义处理
        if (getResponse) {
          ctx.res = {
            data: body,
            response: copy,
          };
          return;
        }

        ctx.res = body;
        return;
      }

      throw new ResponseError(copy, 'http error', body, req, 'HttpError');
    })
    .catch(function (e) {
      if (e instanceof RequestError || e instanceof ResponseError) {
        throw e;
      } // 对未知错误进行处理

      var req = ctx.req,
        res = ctx.res;
      e.request = e.request || req;
      e.response = e.response || res;
      e.type = e.type || e.name;
      e.data = e.data || undefined;
      throw e;
    });
}

function simplePostMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
    options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
  var _options$method = options.method,
    method = _options$method === void 0 ? 'get' : _options$method;

  if (['post', 'put', 'patch', 'delete'].indexOf(method.toLowerCase()) === -1) {
    return next();
  }

  var _options$requestType = options.requestType,
    requestType = _options$requestType === void 0 ? 'json' : _options$requestType,
    data = options.data; // 数据使用类axios的新字段data, 避免引用后影响旧代码, 如将body stringify多次

  if (data) {
    var dataType = Object.prototype.toString.call(data);

    if (dataType === '[object Object]' || dataType === '[object Array]') {
      if (requestType === 'json') {
        options.headers = _objectSpread2(
          {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
          },
          options.headers
        );
        options.body = JSON.stringify(data);
      } else if (requestType === 'form') {
        options.headers = _objectSpread2(
          {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          options.headers
        );
        options.body = reqStringify(data);
      }
    } else {
      // 其他 requestType 自定义header
      options.headers = _objectSpread2(
        {
          Accept: 'application/json',
        },
        options.headers
      );
      options.body = data;
    }
  }

  ctx.req.options = options;
  return next();
}

function paramsSerialize(params, paramsSerializer) {
  var serializedParams;
  var jsonStringifiedParams; // 支持参数自动拼装，其他 method 也可用，不冲突

  if (params) {
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      if (isArray(params)) {
        jsonStringifiedParams = [];
        forEach2ObjArr(params, function (item) {
          if (item === null || typeof item === 'undefined') {
            jsonStringifiedParams.push(item);
          } else {
            jsonStringifiedParams.push(isObject(item) ? JSON.stringify(item) : item);
          }
        }); // a: [1,2,3] => a=1&a=2&a=3

        serializedParams = reqStringify(jsonStringifiedParams);
      } else {
        jsonStringifiedParams = {};
        forEach2ObjArr(params, function (value, key) {
          var jsonStringifiedValue = value;

          if (value === null || typeof value === 'undefined') {
            jsonStringifiedParams[key] = value;
          } else if (isDate(value)) {
            jsonStringifiedValue = value.toISOString();
          } else if (isArray(value)) {
            jsonStringifiedValue = value;
          } else if (isObject(value)) {
            jsonStringifiedValue = JSON.stringify(value);
          }

          jsonStringifiedParams[key] = jsonStringifiedValue;
        });
        var tmp = reqStringify(jsonStringifiedParams);
        serializedParams = tmp;
      }
    }
  }

  return serializedParams;
} // 对请求参数做处理，实现 query 简化、 post 简化

function simpleGetMiddleware(ctx, next) {
  if (!ctx) return next();
  var _ctx$req = ctx.req;
  _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
  var _ctx$req$options = _ctx$req.options,
    options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
  var paramsSerializer = options.paramsSerializer,
    params = options.params;
  var _ctx$req2 = ctx.req;
  _ctx$req2 = _ctx$req2 === void 0 ? {} : _ctx$req2;
  var _ctx$req2$url = _ctx$req2.url,
    url = _ctx$req2$url === void 0 ? '' : _ctx$req2$url; // 将 method 改为大写

  options.method = options.method ? options.method.toUpperCase() : 'GET'; // 设置 credentials 默认值为 same-origin，确保当开发者没有设置时，各浏览器对请求是否发送 cookies 保持一致的行为
  // - omit: 从不发送cookies.
  // - same-origin: 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息.(浏览器默认值,在旧版本浏览器，例如safari 11依旧是omit，safari 12已更改)
  // - include: 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息.

  options.credentials = options.credentials || 'same-origin'; // 支持类似axios 参数自动拼装, 其他method也可用, 不冲突.

  var serializedParams = paramsSerialize(params, paramsSerializer);
  ctx.req.originUrl = url;

  if (serializedParams) {
    var urlSign = url.indexOf('?') !== -1 ? '&' : '?';
    ctx.req.url = ''.concat(url).concat(urlSign).concat(serializedParams);
  }

  ctx.req.options = options;
  return next();
}

var globalMiddlewares = [simplePostMiddleware, simpleGetMiddleware, parseResponseMiddleware];
var coreMiddlewares = [fetchMiddleware];
Onion.globalMiddlewares = globalMiddlewares;
Onion.defaultGlobalMiddlewaresLength = globalMiddlewares.length;
Onion.coreMiddlewares = coreMiddlewares;
Onion.defaultCoreMiddlewaresLength = coreMiddlewares.length;

var Core = /*#__PURE__*/ (function () {
  function Core(initOptions) {
    _classCallCheck(this, Core);

    this.onion = new Onion([]);
    this.fetchIndex = 0; // 【即将废弃】请求中间件位置

    this.mapCache = new MapCache(initOptions);
    this.initOptions = initOptions;
    this.instanceRequestInterceptors = [];
    this.instanceResponseInterceptors = [];
  } // 旧版拦截器为共享

  _createClass(
    Core,
    [
      {
        key: 'use',
        value: function use(newMiddleware) {
          var opt =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  global: false,
                  core: false,
                };
          this.onion.use(newMiddleware, opt);
          return this;
        },
      },
      {
        key: 'extendOptions',
        value: function extendOptions(options) {
          this.initOptions = mergeRequestOptions(this.initOptions, options);
          this.mapCache.extendOptions(options);
        }, // 执行请求前拦截器
      },
      {
        key: 'dealRequestInterceptors',
        value: function dealRequestInterceptors(ctx) {
          var reducer = function reducer(p1, p2) {
            return p1.then(function () {
              var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              ctx.req.url = ret.url || ctx.req.url;
              ctx.req.options = ret.options || ctx.req.options;
              return p2(ctx.req.url, ctx.req.options);
            });
          };

          var allInterceptors = [].concat(
            _toConsumableArray(Core.requestInterceptors),
            _toConsumableArray(this.instanceRequestInterceptors)
          );
          return allInterceptors.reduce(reducer, Promise.resolve()).then(function () {
            var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            ctx.req.url = ret.url || ctx.req.url;
            ctx.req.options = ret.options || ctx.req.options;
            return Promise.resolve();
          });
        },
      },
      {
        key: 'request',
        value: function request(url, options) {
          var _this = this;

          var onion = this.onion;
          var obj = {
            req: {
              url: url,
              options: _objectSpread2(
                _objectSpread2({}, options),
                {},
                {
                  url: url,
                }
              ),
            },
            res: null,
            cache: this.mapCache,
            responseInterceptors: [].concat(
              _toConsumableArray(Core.responseInterceptors),
              _toConsumableArray(this.instanceResponseInterceptors)
            ),
          };

          if (typeof url !== 'string') {
            throw new Error('url MUST be a string');
          }

          return new Promise(function (resolve, reject) {
            _this
              .dealRequestInterceptors(obj)
              .then(function () {
                return onion.execute(obj);
              })
              .then(function () {
                resolve(obj.res);
              })
              .catch(function (error) {
                var errorHandler = obj.req.options.errorHandler;

                if (errorHandler) {
                  try {
                    var data = errorHandler(error);
                    resolve(data);
                  } catch (e) {
                    reject(e);
                  }
                } else {
                  reject(error);
                }
              });
          });
        },
      },
    ],
    [
      {
        key: 'requestUse',
        // 请求拦截器 默认 { global: true } 兼容旧版本拦截器
        value: function requestUse(handler) {
          var opt =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  global: true,
                };
          if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

          if (opt.global) {
            Core.requestInterceptors.push(handler);
          } else {
            this.instanceRequestInterceptors.push(handler);
          }
        }, // 响应拦截器 默认 { global: true } 兼容旧版本拦截器
      },
      {
        key: 'responseUse',
        value: function responseUse(handler) {
          var opt =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {
                  global: true,
                };
          if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

          if (opt.global) {
            Core.responseInterceptors.push(handler);
          } else {
            this.instanceResponseInterceptors.push(handler);
          }
        },
      },
    ]
  );

  return Core;
})();

Core.requestInterceptors = [addfix];
Core.responseInterceptors = [];

/**
 * 当执行 “取消请求” 操作时会抛出 Cancel 对象作为异常
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return this.message ? 'Cancel: '.concat(this.message) : 'Cancel';
};

Cancel.prototype.__CANCEL__ = true;

/**
 * 通过 CancelToken 来取消请求操作
 *
 * @class
 * @param {Function} executor The executor function.
 */

function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // 取消操作已被调用过
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * 如果请求已经取消，抛出 Cancel 异常
 */

CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * 通过 source 来返回 CancelToken 实例和取消 CancelToken 的函数
 */

CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel,
  };
};

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

var request = function request() {
  var initOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var coreInstance = new Core(initOptions);

  var umiInstance = function umiInstance(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var mergeOptions = mergeRequestOptions(coreInstance.initOptions, options);
    return coreInstance.request(url, mergeOptions);
  }; // 中间件

  umiInstance.use = coreInstance.use.bind(coreInstance);
  umiInstance.fetchIndex = coreInstance.fetchIndex; // 拦截器

  umiInstance.interceptors = {
    request: {
      use: Core.requestUse.bind(coreInstance),
    },
    response: {
      use: Core.responseUse.bind(coreInstance),
    },
  }; // 请求语法糖： reguest.get request.post ……

  var METHODS = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];
  METHODS.forEach(function (method) {
    umiInstance[method] = function (url, options) {
      return umiInstance(
        url,
        _objectSpread2(
          _objectSpread2({}, options),
          {},
          {
            method: method,
          }
        )
      );
    };
  });
  umiInstance.Cancel = Cancel;
  umiInstance.CancelToken = CancelToken;
  umiInstance.isCancel = isCancel;
  umiInstance.extendOptions = coreInstance.extendOptions.bind(coreInstance); // 暴露各个实例的中间件，供开发者自由组合

  umiInstance.middlewares = {
    instance: coreInstance.onion.middlewares,
    defaultInstance: coreInstance.onion.defaultMiddlewares,
    global: Onion.globalMiddlewares,
    core: Onion.coreMiddlewares,
  };
  return umiInstance;
};
/**
 * extend 方法参考了ky, 让用户可以定制配置.
 * initOpions 初始化参数
 * @param {number} maxCache 最大缓存数
 * @param {string} prefix url前缀
 * @param {function} errorHandler 统一错误处理方法
 * @param {object} headers 统一的headers
 */

var extend = function extend(initOptions) {
  return request(initOptions);
};
/**
 * 暴露 fetch 中间件，保障依旧可以使用
 */

var fetch$1 = request({
  parseResponse: false,
});
var request$1 = request({});

exports.Onion = Onion;
exports.RequestError = RequestError;
exports.ResponseError = ResponseError;
exports.default = request$1;
exports.extend = extend;
exports.fetch = fetch$1;
