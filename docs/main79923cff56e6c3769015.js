/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? 0 : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./src/module/commentsCounter.js":
/*!***************************************!*\
  !*** ./src/module/commentsCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var commentsCounter = function commentsCounter(data) {
  return data.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsCounter);

/***/ }),

/***/ "./src/module/eventHandler.js":
/*!************************************!*\
  !*** ./src/module/eventHandler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ "./src/module/postLikes.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var like = document.querySelector('.main');

var eventHandler = function eventHandler() {
  like.onclick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var mealId;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(e.target.id === 'like')) {
                _context.next = 6;
                break;
              }

              mealId = e.target.parentNode.parentNode.parentNode.id;
              _context.next = 4;
              return (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mealId);

            case 4:
              // eslint-disable-next-line no-plusplus
              e.target.nextElementSibling.innerText++;
              e.target.classList.add('liked');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventHandler);

/***/ }),

/***/ "./src/module/formSubmit.js":
/*!**********************************!*\
  !*** ./src/module/formSubmit.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _postComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComments.js */ "./src/module/postComments.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var comments1 = document.querySelector('.commentContainer');
var commentHeader = document.querySelector('.comment-header');
var uname = document.querySelector('.name');
var comments = document.querySelector('.comment');
var form = document.querySelector('.form');

var formsubmit = function formsubmit() {
  form.onsubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var id;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              id = e.target.parentElement.id;
              (0,_postComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, uname.value, comments.value);
              comments1.innerHTML += "<div>".concat(uname.value, ": ").concat(comments.value, "</div>"); // eslint-disable-next-line no-plusplus

              commentHeader.innerText++;
              uname.value = '';
              comments.value = '';

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsubmit);

/***/ }),

/***/ "./src/module/getComments.js":
/*!***********************************!*\
  !*** ./src/module/getComments.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getComments = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/comments?item_id=".concat(id));

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getComments(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);

/***/ }),

/***/ "./src/module/getLikes.js":
/*!********************************!*\
  !*** ./src/module/getLikes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getLikes = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/likes');

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getLikes() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/module/getMeal.js":
/*!*******************************!*\
  !*** ./src/module/getMeal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getMeal = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(mealID) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(mealID));

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMeal(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeal);

/***/ }),

/***/ "./src/module/itemsCounter.js":
/*!************************************!*\
  !*** ./src/module/itemsCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var itemsCounter = function itemsCounter(data) {
  return data.length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);

/***/ }),

/***/ "./src/module/modal.js":
/*!*****************************!*\
  !*** ./src/module/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/module/render.js");
/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ "./src/module/getComments.js");
/* harmony import */ var _getMeal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMeal.js */ "./src/module/getMeal.js");
/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderComments.js */ "./src/module/renderComments.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/module/commentsCounter.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var commentHeader = document.querySelector('.comment-header');
var pop = document.querySelector('.pop-up');
var meal = document.querySelector('.meal');

var modal = function modal() {
  _render_js__WEBPACK_IMPORTED_MODULE_0__.main.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
      var commentid, data, commentList, close;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(e.target.id === 'comments')) {
                _context.next = 16;
                break;
              }

              commentid = e.target.parentElement.parentElement.id;
              (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentid);
              pop.id = commentid;
              pop.style.display = 'flex';
              _context.next = 8;
              return (0,_getMeal_js__WEBPACK_IMPORTED_MODULE_2__["default"])(commentid);

            case 8:
              data = _context.sent;
              data = data.meals;
              meal.innerHTML = "<div>\n        <img src=\"".concat(data[0].strMealThumb, "\" alt=\"\" class=\"card__img\" />\n        <h2 class=\"title\">").concat(data[0].strMeal, "</h2>\n        <p class=\"category\"><span>Category:</span> <span>").concat(data[0].strCategory, "</span></p>\n        <p class=\"country\"><span>Country:</span> <span>").concat(data[0].strArea, "</span></p>\n      </div>");
              _context.next = 13;
              return (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(commentid);

            case 13:
              commentList = _context.sent;
              (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])(commentList);
              commentHeader.innerText = "".concat((0,_commentsCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(commentList));

            case 16:
              close = document.querySelector('.close');
              close.addEventListener('click', function (e) {
                e.preventDefault();
                pop.style.display = 'none';
                commentHeader.innerText = '';
                (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])([]);
              });

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/module/postComments.js":
/*!************************************!*\
  !*** ./src/module/postComments.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var postComments = function postComments(id, name, comments) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: name,
      comment: comments
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComments);

/***/ }),

/***/ "./src/module/postLikes.js":
/*!*********************************!*\
  !*** ./src/module/postLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var postLikes = function postLikes(id) {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7ocpDXxp2R2I8qlqUVJx/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);

/***/ }),

/***/ "./src/module/render.js":
/*!******************************!*\
  !*** ./src/module/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
var main = document.querySelector('.main');

var render = function render(data, likesList) {
  main.innerHTML = '';
  data.slice(3, 9).forEach(function (el) {
    likesList.forEach(function (like) {
      if (like.item_id === el.idMeal) {
        el.likes = like.likes;
      }
    });
    main.innerHTML += "<div class=\"card\" id=\"".concat(el.idMeal, "\">\n<img src=\"").concat(el.strMealThumb, "\" alt=\"\" class=\"card__img\" />\n<div class=\"card__top\">\n<p class=\"card__top--name\">").concat(el.strMeal, "</p>\n<div class=\"card__top--like\"><i class=\"fa-solid fa-heart\" id='like'></i><p> ").concat(el.likes || '', " </p>likes</div>\n</div>\n<div class=\"card__bottom\">\n<a href=\"\" id=\"comments\" class=\"btn\">Comment</a>\n<a href=\"\" id=\"reservations\" class=\"btn\">Resevation</a>\n</div>\n</div>");
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/module/renderComments.js":
/*!**************************************!*\
  !*** ./src/module/renderComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var comments = document.querySelector('.commentContainer');

var renderComments = function renderComments(list) {
  comments.innerHTML = '';
  list.forEach(function (el) {
    comments.innerHTML += "\n    <div class=\"comment-item\"><span class='user'>".concat(el.username, "</span>: <span>").concat(el.comment, "</span></div>\n       ");
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  border-bottom: 1px rgb(196, 193, 193) solid;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n  font-size: 23px;\n  background-color: #e2dbd0;\n}\n.header__container {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n.header__logo--img {\n  width: 65px;\n  z-index: 10;\n  padding-top: 5px;\n}\n.header .nav__list {\n  display: flex;\n  list-style: none;\n  justify-content: space-around;\n  flex-grow: 2;\n  max-width: 900px;\n}\n.header .nav__list .meals {\n  background-color: rgb(207, 174, 174);\n}\n.header .nav__list--link {\n  text-decoration: none;\n  color: black;\n  padding: 16px 20px;\n  margin-left: 2px;\n  transition: all 0.3s;\n}\n.header .nav__list--link:hover {\n  background-color: rgb(207, 174, 174);\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 50px;\n  max-width: 1100px;\n  margin: 0 auto;\n  justify-items: center;\n  padding: 50px 20px;\n  margin-bottom: 80px;\n}\n\n.card {\n  border-radius: 10px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  background-color: rgb(207, 174, 174);\n  max-width: 280px;\n}\n.card__img {\n  max-width: 280px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.card__top {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 12px;\n  margin-top: 5px;\n  align-items: center;\n}\n.card__top--name {\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n.card__top--like {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.card__top--like i {\n  margin-right: 5px;\n}\n.card__top--like .liked {\n  color: red;\n}\n.card__bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 12px;\n}\n\n.btn {\n  background-color: white;\n  padding: 10px 20px;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n}\n.btn:hover {\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\n  transform: scale(1.05);\n}\n.btn:active {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n\nfooter {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0%;\n  color: black;\n  background-color: #e2dbd0;\n  border: solid 1px #000;\n}\n\nfooter p {\n  width: 100%;\n  color: black;\n  margin-left: 6%;\n  margin-bottom: 3%;\n  margin-top: 2%;\n}\n\nfooter div {\n  background-color: rgba(91, 79, 79, 0.4705882353);\n  height: 20px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: solid 1px #000;\n}\n\n.pop-up {\n  position: fixed;\n  top: 10%;\n  left: 13%;\n  bottom: 10%;\n  width: 72%;\n  height: 68%;\n  background-color: rgb(207, 174, 174);\n  z-index: 9999;\n  justify-content: space-between;\n  padding: 30px 50px;\n  display: none;\n  border-radius: 10px;\n}\n\nh1 {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 5px;\n  font-family: \"Lucida Sans\", sans-serif;\n}\n\n.form {\n  width: 250px;\n  text-align: center;\n}\n.form-button {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\ninput {\n  margin-top: 20px;\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  padding: 0 10px;\n  margin-bottom: 20px;\n  margin-left: 0;\n  display: flex;\n  border: 1px solid black;\n}\n\ntextarea {\n  width: 100%;\n  height: 200px;\n  border-radius: 5px;\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  margin-left: 0;\n  display: flex;\n  border: 1px solid black;\n  font-size: 16px;\n}\n\nbutton {\n  padding: 10px 30px;\n  border-radius: 20px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n  border: none;\n}\nbutton:hover {\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\n  transform: scale(1.05);\n}\n\n.category {\n  text-align: center;\n  margin: 10px 0;\n  padding: 10px 5px;\n  border: 1px solid rgba(220, 220, 220, 0.486);\n  border-radius: 10px;\n}\n.category span {\n  padding-right: 20px;\n}\n\n.country {\n  text-align: center;\n  padding: 10px 5px;\n  border: 1px solid rgba(220, 220, 220, 0.486);\n  border-radius: 10px;\n}\n.country span {\n  padding-right: 20px;\n}\n\n.title {\n  text-align: center;\n  padding: 10px;\n}\n\n.commentContainer {\n  overflow-y: scroll;\n  height: 95%;\n  width: 300px;\n  margin-top: 10px;\n}\n\n.comment-item {\n  padding: 10px 5px;\n  border: 1px solid rgba(220, 220, 220, 0.486);\n  border-radius: 10px;\n  width: 95%;\n  margin-top: 5px;\n}\n.comment-item .user {\n  display: inline-block;\n  min-width: 70px;\n  text-align: left;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/main-content.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/popup.scss"],"names":[],"mappings":"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","sourcesContent":[".header {\n  border-bottom: 1px rgb(196, 193, 193) solid;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n  font-size: 23px;\n  background-color: #e2dbd0;\n\n  &__container {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n\n  &__logo--img {\n    width: 65px;\n    z-index: 10;\n    padding-top: 5px;\n  }\n\n  .nav__list {\n    display: flex;\n    list-style: none;\n    justify-content: space-around;\n    flex-grow: 2;\n    max-width: 900px;\n\n    .meals {\n      background-color: rgb(207, 174, 174);\n    }\n\n    &--link {\n      text-decoration: none;\n      color: black;\n      padding: 16px 20px;\n      margin-left: 2px;\n      transition: all 0.3s;\n\n      &:hover {\n        background-color: rgb(207, 174, 174);\n      }\n    }\n  }\n}\n","@import './header.scss';\n@import './main-content.scss';\n@import './footer.scss';\n@import './popup.scss';\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n}\n",".main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 50px;\n  max-width: 1100px;\n  margin: 0 auto;\n  justify-items: center;\n  padding: 50px 20px;\n  margin-bottom: 80px;\n}\n\n.card {\n  border-radius: 10px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  background-color: rgb(207, 174, 174);\n  max-width: 280px;\n\n  &__img {\n    max-width: 280px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n\n  &__top {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 12px;\n    margin-top: 5px;\n    align-items: center;\n\n    &--name {\n      font-weight: 500;\n      font-size: 18px;\n      letter-spacing: 0.5px;\n    }\n\n    &--like {\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n\n      i {\n        margin-right: 5px;\n      }\n\n      .liked {\n        color: red;\n      }\n    }\n  }\n\n  &__bottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 12px;\n  }\n}\n\n.btn {\n  background-color: white;\n  padding: 10px 20px;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n\n  &:hover {\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\n    transform: scale(1.05);\n  }\n\n  &:active {\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  }\n}\n","footer {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0%;\n  color: black;\n  background-color: #e2dbd0;\n  border: solid 1px #000;\n}\n\nfooter p {\n  width: 100%;\n  color: black;\n  margin-left: 6%;\n  margin-bottom: 3%;\n  margin-top: 2%;\n}\n\nfooter div {\n  background-color: #5b4f4f78;\n  height: 20px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: solid 1px #000;\n}\n",".pop-up {\n  position: fixed;\n  top: 10%;\n  left: 13%;\n  bottom: 10%;\n  width: 72%;\n  height: 68%;\n  background-color: rgb(207, 174, 174);\n  z-index: 9999;\n  justify-content: space-between;\n  padding: 30px 50px;\n  display: none;\n  border-radius: 10px;\n}\n\nh1 {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 5px;\n  font-family: 'Lucida Sans', sans-serif;\n}\n\n.form {\n  width: 250px;\n  text-align: center;\n\n  &-button {\n    margin-top: 20px;\n    display: flex;\n    justify-content: space-between;\n  }\n}\n\ninput {\n  margin-top: 20px;\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  padding: 0 10px;\n  margin-bottom: 20px;\n  margin-left: 0;\n  display: flex;\n  border: 1px solid black;\n}\n\ntextarea {\n  width: 100%;\n  height: 200px;\n  border-radius: 5px;\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  margin-left: 0;\n  display: flex;\n  border: 1px solid black;\n  font-size: 16px;\n}\n\nbutton {\n  padding: 10px 30px;\n  border-radius: 20px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n  border: none;\n  &:hover {\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\n    transform: scale(1.05);\n  }\n}\n\n.category {\n  text-align: center;\n  margin: 10px 0;\n  padding: 10px 5px;\n  border: 1px solid rgba(220, 220, 220, 0.486);\n  border-radius: 10px;\n  span {\n    padding-right: 20px;\n  }\n}\n\n.country {\n  text-align: center;\n  padding: 10px 5px;\n  border: 1px solid rgba(220, 220, 220, 0.486);\n  border-radius: 10px;\n\n  span {\n    padding-right: 20px;\n  }\n}\n\n.title {\n  text-align: center;\n  padding: 10px;\n}\n\n.commentContainer {\n  overflow-y: scroll;\n  height: 95%;\n  width: 300px;\n  margin-top: 10px;\n}\n\n.comment-item{\n  padding: 10px 5px;\n  border: 1px solid rgba(220, 220, 220, 0.486);\n  border-radius: 10px;\n  width: 95%;\n  margin-top: 5px;\n  .user {\n    display: inline-block;\n    min-width: 70px;\n    text-align: left;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _module_eventHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/eventHandler.js */ "./src/module/eventHandler.js");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _module_getLikes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/getLikes.js */ "./src/module/getLikes.js");
/* harmony import */ var _module_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/modal.js */ "./src/module/modal.js");
/* harmony import */ var _module_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/render.js */ "./src/module/render.js");
/* harmony import */ var _module_formSubmit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/formSubmit.js */ "./src/module/formSubmit.js");
/* harmony import */ var _module_itemsCounter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/itemsCounter.js */ "./src/module/itemsCounter.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }










var image = document.querySelector('.header__logo');
image.innerHTML = "<img src=\"".concat(_assets_logo_png__WEBPACK_IMPORTED_MODULE_3__, "\" alt=\"\" class=\"header__logo--img\"></img>");
var meals = document.querySelector('.meals');

var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, data, likes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            data = _context.sent;
            meals.innerHTML = "Meals (".concat((0,_module_itemsCounter_js__WEBPACK_IMPORTED_MODULE_8__["default"])(data.meals), ")");
            _context.next = 9;
            return (0,_module_getLikes_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

          case 9:
            likes = _context.sent;
            (0,_module_render_js__WEBPACK_IMPORTED_MODULE_6__["default"])(data.meals, likes);
            (0,_module_eventHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(data.meals);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData() {
    return _ref.apply(this, arguments);
  };
}();

getData();
(0,_module_modal_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
(0,_module_formSubmit_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbjc5OTIzY2ZmNTZlNmMzNzY5MDE1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUNBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsc0JBQVYsRUFBa0M7QUFDakQsTUFBSUMsSUFBSSxHQUFHLEVBQVgsQ0FEaUQsQ0FDbEM7O0FBRWZBLEVBQUFBLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixTQUFTQSxRQUFULEdBQW9CO0FBQ2xDLFdBQU8sS0FBS0MsR0FBTCxDQUFTLFVBQVVDLElBQVYsRUFBZ0I7QUFDOUIsVUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFDQSxVQUFJQyxTQUFTLEdBQUcsT0FBT0YsSUFBSSxDQUFDLENBQUQsQ0FBWCxLQUFtQixXQUFuQzs7QUFFQSxVQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7QUFDWEMsUUFBQUEsT0FBTyxJQUFJLGNBQWNFLE1BQWQsQ0FBcUJILElBQUksQ0FBQyxDQUFELENBQXpCLEVBQThCLEtBQTlCLENBQVg7QUFDRDs7QUFFRCxVQUFJQSxJQUFJLENBQUMsQ0FBRCxDQUFSLEVBQWE7QUFDWEMsUUFBQUEsT0FBTyxJQUFJLFVBQVVFLE1BQVYsQ0FBaUJILElBQUksQ0FBQyxDQUFELENBQXJCLEVBQTBCLElBQTFCLENBQVg7QUFDRDs7QUFFRCxVQUFJRSxTQUFKLEVBQWU7QUFDYkQsUUFBQUEsT0FBTyxJQUFJLFNBQVNFLE1BQVQsQ0FBZ0JILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksTUFBUixHQUFpQixDQUFqQixHQUFxQixJQUFJRCxNQUFKLENBQVdILElBQUksQ0FBQyxDQUFELENBQWYsQ0FBckIsR0FBMkMsRUFBM0QsRUFBK0QsSUFBL0QsQ0FBWDtBQUNEOztBQUVEQyxNQUFBQSxPQUFPLElBQUlMLHNCQUFzQixDQUFDSSxJQUFELENBQWpDOztBQUVBLFVBQUlFLFNBQUosRUFBZTtBQUNiRCxRQUFBQSxPQUFPLElBQUksR0FBWDtBQUNEOztBQUVELFVBQUlELElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYQyxRQUFBQSxPQUFPLElBQUksR0FBWDtBQUNEOztBQUVELFVBQUlELElBQUksQ0FBQyxDQUFELENBQVIsRUFBYTtBQUNYQyxRQUFBQSxPQUFPLElBQUksR0FBWDtBQUNEOztBQUVELGFBQU9BLE9BQVA7QUFDRCxLQS9CTSxFQStCSkksSUEvQkksQ0ErQkMsRUEvQkQsQ0FBUDtBQWdDRCxHQWpDRCxDQUhpRCxDQW9DOUM7OztBQUdIUixFQUFBQSxJQUFJLENBQUNTLENBQUwsR0FBUyxTQUFTQSxDQUFULENBQVdDLE9BQVgsRUFBb0JDLEtBQXBCLEVBQTJCQyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkNDLEtBQTdDLEVBQW9EO0FBQzNELFFBQUksT0FBT0osT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQkEsTUFBQUEsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELEVBQU9BLE9BQVAsRUFBZ0JLLFNBQWhCLENBQUQsQ0FBVjtBQUNEOztBQUVELFFBQUlDLHNCQUFzQixHQUFHLEVBQTdCOztBQUVBLFFBQUlKLE1BQUosRUFBWTtBQUNWLFdBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLVixNQUF6QixFQUFpQ1UsQ0FBQyxFQUFsQyxFQUFzQztBQUNwQyxZQUFJQyxFQUFFLEdBQUcsS0FBS0QsQ0FBTCxFQUFRLENBQVIsQ0FBVDs7QUFFQSxZQUFJQyxFQUFFLElBQUksSUFBVixFQUFnQjtBQUNkRixVQUFBQSxzQkFBc0IsQ0FBQ0UsRUFBRCxDQUF0QixHQUE2QixJQUE3QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdULE9BQU8sQ0FBQ0gsTUFBOUIsRUFBc0NZLEVBQUUsRUFBeEMsRUFBNEM7QUFDMUMsVUFBSWhCLElBQUksR0FBRyxHQUFHRyxNQUFILENBQVVJLE9BQU8sQ0FBQ1MsRUFBRCxDQUFqQixDQUFYOztBQUVBLFVBQUlQLE1BQU0sSUFBSUksc0JBQXNCLENBQUNiLElBQUksQ0FBQyxDQUFELENBQUwsQ0FBcEMsRUFBK0M7QUFDN0M7QUFDRDs7QUFFRCxVQUFJLE9BQU9XLEtBQVAsS0FBaUIsV0FBckIsRUFBa0M7QUFDaEMsWUFBSSxPQUFPWCxJQUFJLENBQUMsQ0FBRCxDQUFYLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVXLEtBQVY7QUFDRCxTQUZELE1BRU87QUFDTFgsVUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLFNBQVNHLE1BQVQsQ0FBZ0JILElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUksTUFBUixHQUFpQixDQUFqQixHQUFxQixJQUFJRCxNQUFKLENBQVdILElBQUksQ0FBQyxDQUFELENBQWYsQ0FBckIsR0FBMkMsRUFBM0QsRUFBK0QsSUFBL0QsRUFBcUVHLE1BQXJFLENBQTRFSCxJQUFJLENBQUMsQ0FBRCxDQUFoRixFQUFxRixHQUFyRixDQUFWO0FBQ0FBLFVBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVVcsS0FBVjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUgsS0FBSixFQUFXO0FBQ1QsWUFBSSxDQUFDUixJQUFJLENBQUMsQ0FBRCxDQUFULEVBQWM7QUFDWkEsVUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVUSxLQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0xSLFVBQUFBLElBQUksQ0FBQyxDQUFELENBQUosR0FBVSxVQUFVRyxNQUFWLENBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixJQUExQixFQUFnQ0csTUFBaEMsQ0FBdUNILElBQUksQ0FBQyxDQUFELENBQTNDLEVBQWdELEdBQWhELENBQVY7QUFDQUEsVUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVUSxLQUFWO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJRSxRQUFKLEVBQWM7QUFDWixZQUFJLENBQUNWLElBQUksQ0FBQyxDQUFELENBQVQsRUFBYztBQUNaQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsR0FBR0csTUFBSCxDQUFVTyxRQUFWLENBQVY7QUFDRCxTQUZELE1BRU87QUFDTFYsVUFBQUEsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLGNBQWNHLE1BQWQsQ0FBcUJILElBQUksQ0FBQyxDQUFELENBQXpCLEVBQThCLEtBQTlCLEVBQXFDRyxNQUFyQyxDQUE0Q0gsSUFBSSxDQUFDLENBQUQsQ0FBaEQsRUFBcUQsR0FBckQsQ0FBVjtBQUNBQSxVQUFBQSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVVLFFBQVY7QUFDRDtBQUNGOztBQUVEYixNQUFBQSxJQUFJLENBQUNvQixJQUFMLENBQVVqQixJQUFWO0FBQ0Q7QUFDRixHQXJERDs7QUF1REEsU0FBT0gsSUFBUDtBQUNELENBL0ZEOzs7Ozs7Ozs7OztBQ05hOztBQUViSCxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUssSUFBVixFQUFnQjtBQUMvQixNQUFJQyxPQUFPLEdBQUdELElBQUksQ0FBQyxDQUFELENBQWxCO0FBQ0EsTUFBSWtCLFVBQVUsR0FBR2xCLElBQUksQ0FBQyxDQUFELENBQXJCOztBQUVBLE1BQUksQ0FBQ2tCLFVBQUwsRUFBaUI7QUFDZixXQUFPakIsT0FBUDtBQUNEOztBQUVELE1BQUksT0FBT2tCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDOUIsUUFBSUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLFFBQVEsQ0FBQ0Msa0JBQWtCLENBQUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixVQUFmLENBQUQsQ0FBbkIsQ0FBVCxDQUFqQjtBQUNBLFFBQUlPLElBQUksR0FBRywrREFBK0R0QixNQUEvRCxDQUFzRWlCLE1BQXRFLENBQVg7QUFDQSxRQUFJTSxhQUFhLEdBQUcsT0FBT3ZCLE1BQVAsQ0FBY3NCLElBQWQsRUFBb0IsS0FBcEIsQ0FBcEI7QUFDQSxRQUFJRSxVQUFVLEdBQUdULFVBQVUsQ0FBQ1UsT0FBWCxDQUFtQjdCLEdBQW5CLENBQXVCLFVBQVU4QixNQUFWLEVBQWtCO0FBQ3hELGFBQU8saUJBQWlCMUIsTUFBakIsQ0FBd0JlLFVBQVUsQ0FBQ1ksVUFBWCxJQUF5QixFQUFqRCxFQUFxRDNCLE1BQXJELENBQTREMEIsTUFBNUQsRUFBb0UsS0FBcEUsQ0FBUDtBQUNELEtBRmdCLENBQWpCO0FBR0EsV0FBTyxDQUFDNUIsT0FBRCxFQUFVRSxNQUFWLENBQWlCd0IsVUFBakIsRUFBNkJ4QixNQUE3QixDQUFvQyxDQUFDdUIsYUFBRCxDQUFwQyxFQUFxRHJCLElBQXJELENBQTBELElBQTFELENBQVA7QUFDRDs7QUFFRCxTQUFPLENBQUNKLE9BQUQsRUFBVUksSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNELENBbkJEOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSTBCLE9BQU8sR0FBSSxVQUFVcEMsT0FBVixFQUFtQjtBQUNoQzs7QUFFQSxNQUFJcUMsRUFBRSxHQUFHQyxNQUFNLENBQUNDLFNBQWhCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxFQUFFLENBQUNJLGNBQWhCO0FBQ0EsTUFBSXhCLFNBQUosQ0FMZ0MsQ0FLakI7O0FBQ2YsTUFBSXlCLE9BQU8sR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLEdBQStCQSxNQUEvQixHQUF3QyxFQUF0RDtBQUNBLE1BQUlDLGNBQWMsR0FBR0YsT0FBTyxDQUFDRyxRQUFSLElBQW9CLFlBQXpDO0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUdKLE9BQU8sQ0FBQ0ssYUFBUixJQUF5QixpQkFBbkQ7QUFDQSxNQUFJQyxpQkFBaUIsR0FBR04sT0FBTyxDQUFDTyxXQUFSLElBQXVCLGVBQS9DOztBQUVBLFdBQVNDLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQkMsS0FBMUIsRUFBaUM7QUFDL0JmLElBQUFBLE1BQU0sQ0FBQ2dCLGNBQVAsQ0FBc0JILEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QkMsTUFBQUEsS0FBSyxFQUFFQSxLQUR1QjtBQUU5QkUsTUFBQUEsVUFBVSxFQUFFLElBRmtCO0FBRzlCQyxNQUFBQSxZQUFZLEVBQUUsSUFIZ0I7QUFJOUJDLE1BQUFBLFFBQVEsRUFBRTtBQUpvQixLQUFoQztBQU1BLFdBQU9OLEdBQUcsQ0FBQ0MsR0FBRCxDQUFWO0FBQ0Q7O0FBQ0QsTUFBSTtBQUNGO0FBQ0FGLElBQUFBLE1BQU0sQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFOO0FBQ0QsR0FIRCxDQUdFLE9BQU9RLEdBQVAsRUFBWTtBQUNaUixJQUFBQSxNQUFNLEdBQUcsZ0JBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFtQkMsS0FBbkIsRUFBMEI7QUFDakMsYUFBT0YsR0FBRyxDQUFDQyxHQUFELENBQUgsR0FBV0MsS0FBbEI7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsV0FBU00sSUFBVCxDQUFjQyxPQUFkLEVBQXVCQyxPQUF2QixFQUFnQ0MsSUFBaEMsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQ2pEO0FBQ0EsUUFBSUMsY0FBYyxHQUFHSCxPQUFPLElBQUlBLE9BQU8sQ0FBQ3RCLFNBQVIsWUFBNkIwQixTQUF4QyxHQUFvREosT0FBcEQsR0FBOERJLFNBQW5GO0FBQ0EsUUFBSUMsU0FBUyxHQUFHNUIsTUFBTSxDQUFDNkIsTUFBUCxDQUFjSCxjQUFjLENBQUN6QixTQUE3QixDQUFoQjtBQUNBLFFBQUk2QixPQUFPLEdBQUcsSUFBSUMsT0FBSixDQUFZTixXQUFXLElBQUksRUFBM0IsQ0FBZCxDQUppRCxDQU1qRDtBQUNBOztBQUNBRyxJQUFBQSxTQUFTLENBQUNJLE9BQVYsR0FBb0JDLGdCQUFnQixDQUFDWCxPQUFELEVBQVVFLElBQVYsRUFBZ0JNLE9BQWhCLENBQXBDO0FBRUEsV0FBT0YsU0FBUDtBQUNEOztBQUNEbEUsRUFBQUEsT0FBTyxDQUFDMkQsSUFBUixHQUFlQSxJQUFmLENBekNnQyxDQTJDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBU2EsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0J0QixHQUF0QixFQUEyQnVCLEdBQTNCLEVBQWdDO0FBQzlCLFFBQUk7QUFDRixhQUFPO0FBQUVDLFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCRCxRQUFBQSxHQUFHLEVBQUVELEVBQUUsQ0FBQ0csSUFBSCxDQUFRekIsR0FBUixFQUFhdUIsR0FBYjtBQUF2QixPQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU9oQixHQUFQLEVBQVk7QUFDWixhQUFPO0FBQUVpQixRQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkQsUUFBQUEsR0FBRyxFQUFFaEI7QUFBdEIsT0FBUDtBQUNEO0FBQ0Y7O0FBRUQsTUFBSW1CLHNCQUFzQixHQUFHLGdCQUE3QjtBQUNBLE1BQUlDLHNCQUFzQixHQUFHLGdCQUE3QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLFdBQXhCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsV0FBeEIsQ0FoRWdDLENBa0VoQztBQUNBOztBQUNBLE1BQUlDLGdCQUFnQixHQUFHLEVBQXZCLENBcEVnQyxDQXNFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBU2hCLFNBQVQsR0FBcUIsQ0FBRTs7QUFDdkIsV0FBU2lCLGlCQUFULEdBQTZCLENBQUU7O0FBQy9CLFdBQVNDLDBCQUFULEdBQXNDLENBQUUsQ0E1RVIsQ0E4RWhDO0FBQ0E7OztBQUNBLE1BQUlDLGlCQUFpQixHQUFHLEVBQXhCO0FBQ0FsQyxFQUFBQSxNQUFNLENBQUNrQyxpQkFBRCxFQUFvQnhDLGNBQXBCLEVBQW9DLFlBQVk7QUFDcEQsV0FBTyxJQUFQO0FBQ0QsR0FGSyxDQUFOO0FBSUEsTUFBSXlDLFFBQVEsR0FBRy9DLE1BQU0sQ0FBQ2dELGNBQXRCO0FBQ0EsTUFBSUMsdUJBQXVCLEdBQUdGLFFBQVEsSUFBSUEsUUFBUSxDQUFDQSxRQUFRLENBQUNHLE1BQU0sQ0FBQyxFQUFELENBQVAsQ0FBVCxDQUFsRDs7QUFDQSxNQUFJRCx1QkFBdUIsSUFDdkJBLHVCQUF1QixLQUFLbEQsRUFENUIsSUFFQUcsTUFBTSxDQUFDb0MsSUFBUCxDQUFZVyx1QkFBWixFQUFxQzNDLGNBQXJDLENBRkosRUFFMEQ7QUFDeEQ7QUFDQTtBQUNBd0MsSUFBQUEsaUJBQWlCLEdBQUdHLHVCQUFwQjtBQUNEOztBQUVELE1BQUlFLEVBQUUsR0FBR04sMEJBQTBCLENBQUM1QyxTQUEzQixHQUNQMEIsU0FBUyxDQUFDMUIsU0FBVixHQUFzQkQsTUFBTSxDQUFDNkIsTUFBUCxDQUFjaUIsaUJBQWQsQ0FEeEI7QUFFQUYsRUFBQUEsaUJBQWlCLENBQUMzQyxTQUFsQixHQUE4QjRDLDBCQUE5QjtBQUNBakMsRUFBQUEsTUFBTSxDQUFDdUMsRUFBRCxFQUFLLGFBQUwsRUFBb0JOLDBCQUFwQixDQUFOO0FBQ0FqQyxFQUFBQSxNQUFNLENBQUNpQywwQkFBRCxFQUE2QixhQUE3QixFQUE0Q0QsaUJBQTVDLENBQU47QUFDQUEsRUFBQUEsaUJBQWlCLENBQUNRLFdBQWxCLEdBQWdDeEMsTUFBTSxDQUNwQ2lDLDBCQURvQyxFQUVwQ25DLGlCQUZvQyxFQUdwQyxtQkFIb0MsQ0FBdEMsQ0FwR2dDLENBMEdoQztBQUNBOztBQUNBLFdBQVMyQyxxQkFBVCxDQUErQnBELFNBQS9CLEVBQTBDO0FBQ3hDLEtBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEJxRCxPQUE1QixDQUFvQyxVQUFTQyxNQUFULEVBQWlCO0FBQ25EM0MsTUFBQUEsTUFBTSxDQUFDWCxTQUFELEVBQVlzRCxNQUFaLEVBQW9CLFVBQVNuQixHQUFULEVBQWM7QUFDdEMsZUFBTyxLQUFLSixPQUFMLENBQWF1QixNQUFiLEVBQXFCbkIsR0FBckIsQ0FBUDtBQUNELE9BRkssQ0FBTjtBQUdELEtBSkQ7QUFLRDs7QUFFRDFFLEVBQUFBLE9BQU8sQ0FBQzhGLG1CQUFSLEdBQThCLFVBQVNDLE1BQVQsRUFBaUI7QUFDN0MsUUFBSUMsSUFBSSxHQUFHLE9BQU9ELE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0UsV0FBbEQ7QUFDQSxXQUFPRCxJQUFJLEdBQ1BBLElBQUksS0FBS2QsaUJBQVQsSUFDQTtBQUNBO0FBQ0EsS0FBQ2MsSUFBSSxDQUFDTixXQUFMLElBQW9CTSxJQUFJLENBQUNFLElBQTFCLE1BQW9DLG1CQUo3QixHQUtQLEtBTEo7QUFNRCxHQVJEOztBQVVBbEcsRUFBQUEsT0FBTyxDQUFDbUcsSUFBUixHQUFlLFVBQVNKLE1BQVQsRUFBaUI7QUFDOUIsUUFBSXpELE1BQU0sQ0FBQzhELGNBQVgsRUFBMkI7QUFDekI5RCxNQUFBQSxNQUFNLENBQUM4RCxjQUFQLENBQXNCTCxNQUF0QixFQUE4QlosMEJBQTlCO0FBQ0QsS0FGRCxNQUVPO0FBQ0xZLE1BQUFBLE1BQU0sQ0FBQ00sU0FBUCxHQUFtQmxCLDBCQUFuQjtBQUNBakMsTUFBQUEsTUFBTSxDQUFDNkMsTUFBRCxFQUFTL0MsaUJBQVQsRUFBNEIsbUJBQTVCLENBQU47QUFDRDs7QUFDRCtDLElBQUFBLE1BQU0sQ0FBQ3hELFNBQVAsR0FBbUJELE1BQU0sQ0FBQzZCLE1BQVAsQ0FBY3NCLEVBQWQsQ0FBbkI7QUFDQSxXQUFPTSxNQUFQO0FBQ0QsR0FURCxDQTlIZ0MsQ0F5SWhDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQS9GLEVBQUFBLE9BQU8sQ0FBQ3NHLEtBQVIsR0FBZ0IsVUFBUzVCLEdBQVQsRUFBYztBQUM1QixXQUFPO0FBQUU2QixNQUFBQSxPQUFPLEVBQUU3QjtBQUFYLEtBQVA7QUFDRCxHQUZEOztBQUlBLFdBQVM4QixhQUFULENBQXVCdEMsU0FBdkIsRUFBa0N1QyxXQUFsQyxFQUErQztBQUM3QyxhQUFTQyxNQUFULENBQWdCYixNQUFoQixFQUF3Qm5CLEdBQXhCLEVBQTZCaUMsT0FBN0IsRUFBc0NDLE1BQXRDLEVBQThDO0FBQzVDLFVBQUlDLE1BQU0sR0FBR3JDLFFBQVEsQ0FBQ04sU0FBUyxDQUFDMkIsTUFBRCxDQUFWLEVBQW9CM0IsU0FBcEIsRUFBK0JRLEdBQS9CLENBQXJCOztBQUNBLFVBQUltQyxNQUFNLENBQUNsQyxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQzNCaUMsUUFBQUEsTUFBTSxDQUFDQyxNQUFNLENBQUNuQyxHQUFSLENBQU47QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJb0MsTUFBTSxHQUFHRCxNQUFNLENBQUNuQyxHQUFwQjtBQUNBLFlBQUlyQixLQUFLLEdBQUd5RCxNQUFNLENBQUN6RCxLQUFuQjs7QUFDQSxZQUFJQSxLQUFLLElBQ0wsUUFBT0EsS0FBUCxNQUFpQixRQURqQixJQUVBYixNQUFNLENBQUNvQyxJQUFQLENBQVl2QixLQUFaLEVBQW1CLFNBQW5CLENBRkosRUFFbUM7QUFDakMsaUJBQU9vRCxXQUFXLENBQUNFLE9BQVosQ0FBb0J0RCxLQUFLLENBQUNrRCxPQUExQixFQUFtQ1EsSUFBbkMsQ0FBd0MsVUFBUzFELEtBQVQsRUFBZ0I7QUFDN0RxRCxZQUFBQSxNQUFNLENBQUMsTUFBRCxFQUFTckQsS0FBVCxFQUFnQnNELE9BQWhCLEVBQXlCQyxNQUF6QixDQUFOO0FBQ0QsV0FGTSxFQUVKLFVBQVNsRCxHQUFULEVBQWM7QUFDZmdELFlBQUFBLE1BQU0sQ0FBQyxPQUFELEVBQVVoRCxHQUFWLEVBQWVpRCxPQUFmLEVBQXdCQyxNQUF4QixDQUFOO0FBQ0QsV0FKTSxDQUFQO0FBS0Q7O0FBRUQsZUFBT0gsV0FBVyxDQUFDRSxPQUFaLENBQW9CdEQsS0FBcEIsRUFBMkIwRCxJQUEzQixDQUFnQyxVQUFTQyxTQUFULEVBQW9CO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBRixVQUFBQSxNQUFNLENBQUN6RCxLQUFQLEdBQWUyRCxTQUFmO0FBQ0FMLFVBQUFBLE9BQU8sQ0FBQ0csTUFBRCxDQUFQO0FBQ0QsU0FOTSxFQU1KLFVBQVNHLEtBQVQsRUFBZ0I7QUFDakI7QUFDQTtBQUNBLGlCQUFPUCxNQUFNLENBQUMsT0FBRCxFQUFVTyxLQUFWLEVBQWlCTixPQUFqQixFQUEwQkMsTUFBMUIsQ0FBYjtBQUNELFNBVk0sQ0FBUDtBQVdEO0FBQ0Y7O0FBRUQsUUFBSU0sZUFBSjs7QUFFQSxhQUFTQyxPQUFULENBQWlCdEIsTUFBakIsRUFBeUJuQixHQUF6QixFQUE4QjtBQUM1QixlQUFTMEMsMEJBQVQsR0FBc0M7QUFDcEMsZUFBTyxJQUFJWCxXQUFKLENBQWdCLFVBQVNFLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQy9DRixVQUFBQSxNQUFNLENBQUNiLE1BQUQsRUFBU25CLEdBQVQsRUFBY2lDLE9BQWQsRUFBdUJDLE1BQXZCLENBQU47QUFDRCxTQUZNLENBQVA7QUFHRDs7QUFFRCxhQUFPTSxlQUFlLEdBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFBQSxlQUFlLEdBQUdBLGVBQWUsQ0FBQ0gsSUFBaEIsQ0FDaEJLLDBCQURnQixFQUVoQjtBQUNBO0FBQ0FBLE1BQUFBLDBCQUpnQixDQUFILEdBS1hBLDBCQUEwQixFQWxCaEM7QUFtQkQsS0E1RDRDLENBOEQ3QztBQUNBOzs7QUFDQSxTQUFLOUMsT0FBTCxHQUFlNkMsT0FBZjtBQUNEOztBQUVEeEIsRUFBQUEscUJBQXFCLENBQUNhLGFBQWEsQ0FBQ2pFLFNBQWYsQ0FBckI7QUFDQVcsRUFBQUEsTUFBTSxDQUFDc0QsYUFBYSxDQUFDakUsU0FBZixFQUEwQk8sbUJBQTFCLEVBQStDLFlBQVk7QUFDL0QsV0FBTyxJQUFQO0FBQ0QsR0FGSyxDQUFOO0FBR0E5QyxFQUFBQSxPQUFPLENBQUN3RyxhQUFSLEdBQXdCQSxhQUF4QixDQXhOZ0MsQ0EwTmhDO0FBQ0E7QUFDQTs7QUFDQXhHLEVBQUFBLE9BQU8sQ0FBQ3FILEtBQVIsR0FBZ0IsVUFBU3pELE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCQyxJQUEzQixFQUFpQ0MsV0FBakMsRUFBOEMwQyxXQUE5QyxFQUEyRDtBQUN6RSxRQUFJQSxXQUFXLEtBQUssS0FBSyxDQUF6QixFQUE0QkEsV0FBVyxHQUFHYSxPQUFkO0FBRTVCLFFBQUlDLElBQUksR0FBRyxJQUFJZixhQUFKLENBQ1Q3QyxJQUFJLENBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFtQkMsSUFBbkIsRUFBeUJDLFdBQXpCLENBREssRUFFVDBDLFdBRlMsQ0FBWDtBQUtBLFdBQU96RyxPQUFPLENBQUM4RixtQkFBUixDQUE0QmpDLE9BQTVCLElBQ0gwRCxJQURHLENBQ0U7QUFERixNQUVIQSxJQUFJLENBQUNDLElBQUwsR0FBWVQsSUFBWixDQUFpQixVQUFTRCxNQUFULEVBQWlCO0FBQ2hDLGFBQU9BLE1BQU0sQ0FBQ1csSUFBUCxHQUFjWCxNQUFNLENBQUN6RCxLQUFyQixHQUE2QmtFLElBQUksQ0FBQ0MsSUFBTCxFQUFwQztBQUNELEtBRkQsQ0FGSjtBQUtELEdBYkQ7O0FBZUEsV0FBU2pELGdCQUFULENBQTBCWCxPQUExQixFQUFtQ0UsSUFBbkMsRUFBeUNNLE9BQXpDLEVBQWtEO0FBQ2hELFFBQUlzRCxLQUFLLEdBQUc3QyxzQkFBWjtBQUVBLFdBQU8sU0FBUzZCLE1BQVQsQ0FBZ0JiLE1BQWhCLEVBQXdCbkIsR0FBeEIsRUFBNkI7QUFDbEMsVUFBSWdELEtBQUssS0FBSzNDLGlCQUFkLEVBQWlDO0FBQy9CLGNBQU0sSUFBSTRDLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBQ0Q7O0FBRUQsVUFBSUQsS0FBSyxLQUFLMUMsaUJBQWQsRUFBaUM7QUFDL0IsWUFBSWEsTUFBTSxLQUFLLE9BQWYsRUFBd0I7QUFDdEIsZ0JBQU1uQixHQUFOO0FBQ0QsU0FIOEIsQ0FLL0I7QUFDQTs7O0FBQ0EsZUFBT2tELFVBQVUsRUFBakI7QUFDRDs7QUFFRHhELE1BQUFBLE9BQU8sQ0FBQ3lCLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0F6QixNQUFBQSxPQUFPLENBQUNNLEdBQVIsR0FBY0EsR0FBZDs7QUFFQSxhQUFPLElBQVAsRUFBYTtBQUNYLFlBQUltRCxRQUFRLEdBQUd6RCxPQUFPLENBQUN5RCxRQUF2Qjs7QUFDQSxZQUFJQSxRQUFKLEVBQWM7QUFDWixjQUFJQyxjQUFjLEdBQUdDLG1CQUFtQixDQUFDRixRQUFELEVBQVd6RCxPQUFYLENBQXhDOztBQUNBLGNBQUkwRCxjQUFKLEVBQW9CO0FBQ2xCLGdCQUFJQSxjQUFjLEtBQUs3QyxnQkFBdkIsRUFBeUM7QUFDekMsbUJBQU82QyxjQUFQO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJMUQsT0FBTyxDQUFDeUIsTUFBUixLQUFtQixNQUF2QixFQUErQjtBQUM3QjtBQUNBO0FBQ0F6QixVQUFBQSxPQUFPLENBQUM0RCxJQUFSLEdBQWU1RCxPQUFPLENBQUM2RCxLQUFSLEdBQWdCN0QsT0FBTyxDQUFDTSxHQUF2QztBQUVELFNBTEQsTUFLTyxJQUFJTixPQUFPLENBQUN5QixNQUFSLEtBQW1CLE9BQXZCLEVBQWdDO0FBQ3JDLGNBQUk2QixLQUFLLEtBQUs3QyxzQkFBZCxFQUFzQztBQUNwQzZDLFlBQUFBLEtBQUssR0FBRzFDLGlCQUFSO0FBQ0Esa0JBQU1aLE9BQU8sQ0FBQ00sR0FBZDtBQUNEOztBQUVETixVQUFBQSxPQUFPLENBQUM4RCxpQkFBUixDQUEwQjlELE9BQU8sQ0FBQ00sR0FBbEM7QUFFRCxTQVJNLE1BUUEsSUFBSU4sT0FBTyxDQUFDeUIsTUFBUixLQUFtQixRQUF2QixFQUFpQztBQUN0Q3pCLFVBQUFBLE9BQU8sQ0FBQytELE1BQVIsQ0FBZSxRQUFmLEVBQXlCL0QsT0FBTyxDQUFDTSxHQUFqQztBQUNEOztBQUVEZ0QsUUFBQUEsS0FBSyxHQUFHM0MsaUJBQVI7QUFFQSxZQUFJOEIsTUFBTSxHQUFHckMsUUFBUSxDQUFDWixPQUFELEVBQVVFLElBQVYsRUFBZ0JNLE9BQWhCLENBQXJCOztBQUNBLFlBQUl5QyxNQUFNLENBQUNsQyxJQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQStDLFVBQUFBLEtBQUssR0FBR3RELE9BQU8sQ0FBQ3FELElBQVIsR0FDSnpDLGlCQURJLEdBRUpGLHNCQUZKOztBQUlBLGNBQUkrQixNQUFNLENBQUNuQyxHQUFQLEtBQWVPLGdCQUFuQixFQUFxQztBQUNuQztBQUNEOztBQUVELGlCQUFPO0FBQ0w1QixZQUFBQSxLQUFLLEVBQUV3RCxNQUFNLENBQUNuQyxHQURUO0FBRUwrQyxZQUFBQSxJQUFJLEVBQUVyRCxPQUFPLENBQUNxRDtBQUZULFdBQVA7QUFLRCxTQWhCRCxNQWdCTyxJQUFJWixNQUFNLENBQUNsQyxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQ2xDK0MsVUFBQUEsS0FBSyxHQUFHMUMsaUJBQVIsQ0FEa0MsQ0FFbEM7QUFDQTs7QUFDQVosVUFBQUEsT0FBTyxDQUFDeUIsTUFBUixHQUFpQixPQUFqQjtBQUNBekIsVUFBQUEsT0FBTyxDQUFDTSxHQUFSLEdBQWNtQyxNQUFNLENBQUNuQyxHQUFyQjtBQUNEO0FBQ0Y7QUFDRixLQXhFRDtBQXlFRCxHQXhUK0IsQ0EwVGhDO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxXQUFTcUQsbUJBQVQsQ0FBNkJGLFFBQTdCLEVBQXVDekQsT0FBdkMsRUFBZ0Q7QUFDOUMsUUFBSXlCLE1BQU0sR0FBR2dDLFFBQVEsQ0FBQ2hGLFFBQVQsQ0FBa0J1QixPQUFPLENBQUN5QixNQUExQixDQUFiOztBQUNBLFFBQUlBLE1BQU0sS0FBSzVFLFNBQWYsRUFBMEI7QUFDeEI7QUFDQTtBQUNBbUQsTUFBQUEsT0FBTyxDQUFDeUQsUUFBUixHQUFtQixJQUFuQjs7QUFFQSxVQUFJekQsT0FBTyxDQUFDeUIsTUFBUixLQUFtQixPQUF2QixFQUFnQztBQUM5QjtBQUNBLFlBQUlnQyxRQUFRLENBQUNoRixRQUFULENBQWtCLFFBQWxCLENBQUosRUFBaUM7QUFDL0I7QUFDQTtBQUNBdUIsVUFBQUEsT0FBTyxDQUFDeUIsTUFBUixHQUFpQixRQUFqQjtBQUNBekIsVUFBQUEsT0FBTyxDQUFDTSxHQUFSLEdBQWN6RCxTQUFkO0FBQ0E4RyxVQUFBQSxtQkFBbUIsQ0FBQ0YsUUFBRCxFQUFXekQsT0FBWCxDQUFuQjs7QUFFQSxjQUFJQSxPQUFPLENBQUN5QixNQUFSLEtBQW1CLE9BQXZCLEVBQWdDO0FBQzlCO0FBQ0E7QUFDQSxtQkFBT1osZ0JBQVA7QUFDRDtBQUNGOztBQUVEYixRQUFBQSxPQUFPLENBQUN5QixNQUFSLEdBQWlCLE9BQWpCO0FBQ0F6QixRQUFBQSxPQUFPLENBQUNNLEdBQVIsR0FBYyxJQUFJMEQsU0FBSixDQUNaLGdEQURZLENBQWQ7QUFFRDs7QUFFRCxhQUFPbkQsZ0JBQVA7QUFDRDs7QUFFRCxRQUFJNEIsTUFBTSxHQUFHckMsUUFBUSxDQUFDcUIsTUFBRCxFQUFTZ0MsUUFBUSxDQUFDaEYsUUFBbEIsRUFBNEJ1QixPQUFPLENBQUNNLEdBQXBDLENBQXJCOztBQUVBLFFBQUltQyxNQUFNLENBQUNsQyxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQzNCUCxNQUFBQSxPQUFPLENBQUN5QixNQUFSLEdBQWlCLE9BQWpCO0FBQ0F6QixNQUFBQSxPQUFPLENBQUNNLEdBQVIsR0FBY21DLE1BQU0sQ0FBQ25DLEdBQXJCO0FBQ0FOLE1BQUFBLE9BQU8sQ0FBQ3lELFFBQVIsR0FBbUIsSUFBbkI7QUFDQSxhQUFPNUMsZ0JBQVA7QUFDRDs7QUFFRCxRQUFJb0QsSUFBSSxHQUFHeEIsTUFBTSxDQUFDbkMsR0FBbEI7O0FBRUEsUUFBSSxDQUFFMkQsSUFBTixFQUFZO0FBQ1ZqRSxNQUFBQSxPQUFPLENBQUN5QixNQUFSLEdBQWlCLE9BQWpCO0FBQ0F6QixNQUFBQSxPQUFPLENBQUNNLEdBQVIsR0FBYyxJQUFJMEQsU0FBSixDQUFjLGtDQUFkLENBQWQ7QUFDQWhFLE1BQUFBLE9BQU8sQ0FBQ3lELFFBQVIsR0FBbUIsSUFBbkI7QUFDQSxhQUFPNUMsZ0JBQVA7QUFDRDs7QUFFRCxRQUFJb0QsSUFBSSxDQUFDWixJQUFULEVBQWU7QUFDYjtBQUNBO0FBQ0FyRCxNQUFBQSxPQUFPLENBQUN5RCxRQUFRLENBQUNTLFVBQVYsQ0FBUCxHQUErQkQsSUFBSSxDQUFDaEYsS0FBcEMsQ0FIYSxDQUtiOztBQUNBZSxNQUFBQSxPQUFPLENBQUNvRCxJQUFSLEdBQWVLLFFBQVEsQ0FBQ1UsT0FBeEIsQ0FOYSxDQVFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJbkUsT0FBTyxDQUFDeUIsTUFBUixLQUFtQixRQUF2QixFQUFpQztBQUMvQnpCLFFBQUFBLE9BQU8sQ0FBQ3lCLE1BQVIsR0FBaUIsTUFBakI7QUFDQXpCLFFBQUFBLE9BQU8sQ0FBQ00sR0FBUixHQUFjekQsU0FBZDtBQUNEO0FBRUYsS0FuQkQsTUFtQk87QUFDTDtBQUNBLGFBQU9vSCxJQUFQO0FBQ0QsS0F2RTZDLENBeUU5QztBQUNBOzs7QUFDQWpFLElBQUFBLE9BQU8sQ0FBQ3lELFFBQVIsR0FBbUIsSUFBbkI7QUFDQSxXQUFPNUMsZ0JBQVA7QUFDRCxHQTNZK0IsQ0E2WWhDO0FBQ0E7OztBQUNBVSxFQUFBQSxxQkFBcUIsQ0FBQ0YsRUFBRCxDQUFyQjtBQUVBdkMsRUFBQUEsTUFBTSxDQUFDdUMsRUFBRCxFQUFLekMsaUJBQUwsRUFBd0IsV0FBeEIsQ0FBTixDQWpaZ0MsQ0FtWmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FFLEVBQUFBLE1BQU0sQ0FBQ3VDLEVBQUQsRUFBSzdDLGNBQUwsRUFBcUIsWUFBVztBQUNwQyxXQUFPLElBQVA7QUFDRCxHQUZLLENBQU47QUFJQU0sRUFBQUEsTUFBTSxDQUFDdUMsRUFBRCxFQUFLLFVBQUwsRUFBaUIsWUFBVztBQUNoQyxXQUFPLG9CQUFQO0FBQ0QsR0FGSyxDQUFOOztBQUlBLFdBQVMrQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixRQUFJQyxLQUFLLEdBQUc7QUFBRUMsTUFBQUEsTUFBTSxFQUFFRixJQUFJLENBQUMsQ0FBRDtBQUFkLEtBQVo7O0FBRUEsUUFBSSxLQUFLQSxJQUFULEVBQWU7QUFDYkMsTUFBQUEsS0FBSyxDQUFDRSxRQUFOLEdBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQjtBQUNEOztBQUVELFFBQUksS0FBS0EsSUFBVCxFQUFlO0FBQ2JDLE1BQUFBLEtBQUssQ0FBQ0csVUFBTixHQUFtQkosSUFBSSxDQUFDLENBQUQsQ0FBdkI7QUFDQUMsTUFBQUEsS0FBSyxDQUFDSSxRQUFOLEdBQWlCTCxJQUFJLENBQUMsQ0FBRCxDQUFyQjtBQUNEOztBQUVELFNBQUtNLFVBQUwsQ0FBZ0J6SCxJQUFoQixDQUFxQm9ILEtBQXJCO0FBQ0Q7O0FBRUQsV0FBU00sYUFBVCxDQUF1Qk4sS0FBdkIsRUFBOEI7QUFDNUIsUUFBSTdCLE1BQU0sR0FBRzZCLEtBQUssQ0FBQ08sVUFBTixJQUFvQixFQUFqQztBQUNBcEMsSUFBQUEsTUFBTSxDQUFDbEMsSUFBUCxHQUFjLFFBQWQ7QUFDQSxXQUFPa0MsTUFBTSxDQUFDbkMsR0FBZDtBQUNBZ0UsSUFBQUEsS0FBSyxDQUFDTyxVQUFOLEdBQW1CcEMsTUFBbkI7QUFDRDs7QUFFRCxXQUFTeEMsT0FBVCxDQUFpQk4sV0FBakIsRUFBOEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBS2dGLFVBQUwsR0FBa0IsQ0FBQztBQUFFSixNQUFBQSxNQUFNLEVBQUU7QUFBVixLQUFELENBQWxCO0FBQ0E1RSxJQUFBQSxXQUFXLENBQUM2QixPQUFaLENBQW9CNEMsWUFBcEIsRUFBa0MsSUFBbEM7QUFDQSxTQUFLVSxLQUFMLENBQVcsSUFBWDtBQUNEOztBQUVEbEosRUFBQUEsT0FBTyxDQUFDbUosSUFBUixHQUFlLFVBQVNDLE1BQVQsRUFBaUI7QUFDOUIsUUFBSUQsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsU0FBSyxJQUFJL0YsR0FBVCxJQUFnQmdHLE1BQWhCLEVBQXdCO0FBQ3RCRCxNQUFBQSxJQUFJLENBQUM3SCxJQUFMLENBQVU4QixHQUFWO0FBQ0Q7O0FBQ0QrRixJQUFBQSxJQUFJLENBQUNFLE9BQUwsR0FMOEIsQ0FPOUI7QUFDQTs7QUFDQSxXQUFPLFNBQVM3QixJQUFULEdBQWdCO0FBQ3JCLGFBQU8yQixJQUFJLENBQUMxSSxNQUFaLEVBQW9CO0FBQ2xCLFlBQUkyQyxHQUFHLEdBQUcrRixJQUFJLENBQUNHLEdBQUwsRUFBVjs7QUFDQSxZQUFJbEcsR0FBRyxJQUFJZ0csTUFBWCxFQUFtQjtBQUNqQjVCLFVBQUFBLElBQUksQ0FBQ25FLEtBQUwsR0FBYUQsR0FBYjtBQUNBb0UsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVksS0FBWjtBQUNBLGlCQUFPRCxJQUFQO0FBQ0Q7QUFDRixPQVJvQixDQVVyQjtBQUNBO0FBQ0E7OztBQUNBQSxNQUFBQSxJQUFJLENBQUNDLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBT0QsSUFBUDtBQUNELEtBZkQ7QUFnQkQsR0F6QkQ7O0FBMkJBLFdBQVNoQyxNQUFULENBQWdCK0QsUUFBaEIsRUFBMEI7QUFDeEIsUUFBSUEsUUFBSixFQUFjO0FBQ1osVUFBSUMsY0FBYyxHQUFHRCxRQUFRLENBQUMzRyxjQUFELENBQTdCOztBQUNBLFVBQUk0RyxjQUFKLEVBQW9CO0FBQ2xCLGVBQU9BLGNBQWMsQ0FBQzVFLElBQWYsQ0FBb0IyRSxRQUFwQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPQSxRQUFRLENBQUMvQixJQUFoQixLQUF5QixVQUE3QixFQUF5QztBQUN2QyxlQUFPK0IsUUFBUDtBQUNEOztBQUVELFVBQUksQ0FBQ0UsS0FBSyxDQUFDRixRQUFRLENBQUM5SSxNQUFWLENBQVYsRUFBNkI7QUFDM0IsWUFBSUUsQ0FBQyxHQUFHLENBQUMsQ0FBVDtBQUFBLFlBQVk2RyxJQUFJLEdBQUcsU0FBU0EsSUFBVCxHQUFnQjtBQUNqQyxpQkFBTyxFQUFFN0csQ0FBRixHQUFNNEksUUFBUSxDQUFDOUksTUFBdEIsRUFBOEI7QUFDNUIsZ0JBQUkrQixNQUFNLENBQUNvQyxJQUFQLENBQVkyRSxRQUFaLEVBQXNCNUksQ0FBdEIsQ0FBSixFQUE4QjtBQUM1QjZHLGNBQUFBLElBQUksQ0FBQ25FLEtBQUwsR0FBYWtHLFFBQVEsQ0FBQzVJLENBQUQsQ0FBckI7QUFDQTZHLGNBQUFBLElBQUksQ0FBQ0MsSUFBTCxHQUFZLEtBQVo7QUFDQSxxQkFBT0QsSUFBUDtBQUNEO0FBQ0Y7O0FBRURBLFVBQUFBLElBQUksQ0FBQ25FLEtBQUwsR0FBYXBDLFNBQWI7QUFDQXVHLFVBQUFBLElBQUksQ0FBQ0MsSUFBTCxHQUFZLElBQVo7QUFFQSxpQkFBT0QsSUFBUDtBQUNELFNBYkQ7O0FBZUEsZUFBT0EsSUFBSSxDQUFDQSxJQUFMLEdBQVlBLElBQW5CO0FBQ0Q7QUFDRixLQTdCdUIsQ0ErQnhCOzs7QUFDQSxXQUFPO0FBQUVBLE1BQUFBLElBQUksRUFBRUk7QUFBUixLQUFQO0FBQ0Q7O0FBQ0Q1SCxFQUFBQSxPQUFPLENBQUN3RixNQUFSLEdBQWlCQSxNQUFqQjs7QUFFQSxXQUFTb0MsVUFBVCxHQUFzQjtBQUNwQixXQUFPO0FBQUV2RSxNQUFBQSxLQUFLLEVBQUVwQyxTQUFUO0FBQW9Cd0csTUFBQUEsSUFBSSxFQUFFO0FBQTFCLEtBQVA7QUFDRDs7QUFFRHBELEVBQUFBLE9BQU8sQ0FBQzlCLFNBQVIsR0FBb0I7QUFDbEIwRCxJQUFBQSxXQUFXLEVBQUU1QixPQURLO0FBR2xCNkUsSUFBQUEsS0FBSyxFQUFFLGVBQVNRLGFBQVQsRUFBd0I7QUFDN0IsV0FBS0MsSUFBTCxHQUFZLENBQVo7QUFDQSxXQUFLbkMsSUFBTCxHQUFZLENBQVosQ0FGNkIsQ0FHN0I7QUFDQTs7QUFDQSxXQUFLUSxJQUFMLEdBQVksS0FBS0MsS0FBTCxHQUFhaEgsU0FBekI7QUFDQSxXQUFLd0csSUFBTCxHQUFZLEtBQVo7QUFDQSxXQUFLSSxRQUFMLEdBQWdCLElBQWhCO0FBRUEsV0FBS2hDLE1BQUwsR0FBYyxNQUFkO0FBQ0EsV0FBS25CLEdBQUwsR0FBV3pELFNBQVg7QUFFQSxXQUFLOEgsVUFBTCxDQUFnQm5ELE9BQWhCLENBQXdCb0QsYUFBeEI7O0FBRUEsVUFBSSxDQUFDVSxhQUFMLEVBQW9CO0FBQ2xCLGFBQUssSUFBSXhELElBQVQsSUFBaUIsSUFBakIsRUFBdUI7QUFDckI7QUFDQSxjQUFJQSxJQUFJLENBQUMwRCxNQUFMLENBQVksQ0FBWixNQUFtQixHQUFuQixJQUNBcEgsTUFBTSxDQUFDb0MsSUFBUCxDQUFZLElBQVosRUFBa0JzQixJQUFsQixDQURBLElBRUEsQ0FBQ3VELEtBQUssQ0FBQyxDQUFDdkQsSUFBSSxDQUFDMkQsS0FBTCxDQUFXLENBQVgsQ0FBRixDQUZWLEVBRTRCO0FBQzFCLGlCQUFLM0QsSUFBTCxJQUFhakYsU0FBYjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBM0JpQjtBQTZCbEI2SSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDZixXQUFLckMsSUFBTCxHQUFZLElBQVo7QUFFQSxVQUFJc0MsU0FBUyxHQUFHLEtBQUtoQixVQUFMLENBQWdCLENBQWhCLENBQWhCO0FBQ0EsVUFBSWlCLFVBQVUsR0FBR0QsU0FBUyxDQUFDZCxVQUEzQjs7QUFDQSxVQUFJZSxVQUFVLENBQUNyRixJQUFYLEtBQW9CLE9BQXhCLEVBQWlDO0FBQy9CLGNBQU1xRixVQUFVLENBQUN0RixHQUFqQjtBQUNEOztBQUVELGFBQU8sS0FBS3VGLElBQVo7QUFDRCxLQXZDaUI7QUF5Q2xCL0IsSUFBQUEsaUJBQWlCLEVBQUUsMkJBQVNnQyxTQUFULEVBQW9CO0FBQ3JDLFVBQUksS0FBS3pDLElBQVQsRUFBZTtBQUNiLGNBQU15QyxTQUFOO0FBQ0Q7O0FBRUQsVUFBSTlGLE9BQU8sR0FBRyxJQUFkOztBQUNBLGVBQVMrRixNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsTUFBckIsRUFBNkI7QUFDM0J4RCxRQUFBQSxNQUFNLENBQUNsQyxJQUFQLEdBQWMsT0FBZDtBQUNBa0MsUUFBQUEsTUFBTSxDQUFDbkMsR0FBUCxHQUFhd0YsU0FBYjtBQUNBOUYsUUFBQUEsT0FBTyxDQUFDb0QsSUFBUixHQUFlNEMsR0FBZjs7QUFFQSxZQUFJQyxNQUFKLEVBQVk7QUFDVjtBQUNBO0FBQ0FqRyxVQUFBQSxPQUFPLENBQUN5QixNQUFSLEdBQWlCLE1BQWpCO0FBQ0F6QixVQUFBQSxPQUFPLENBQUNNLEdBQVIsR0FBY3pELFNBQWQ7QUFDRDs7QUFFRCxlQUFPLENBQUMsQ0FBRW9KLE1BQVY7QUFDRDs7QUFFRCxXQUFLLElBQUkxSixDQUFDLEdBQUcsS0FBS29JLFVBQUwsQ0FBZ0J0SSxNQUFoQixHQUF5QixDQUF0QyxFQUF5Q0UsQ0FBQyxJQUFJLENBQTlDLEVBQWlELEVBQUVBLENBQW5ELEVBQXNEO0FBQ3BELFlBQUkrSCxLQUFLLEdBQUcsS0FBS0ssVUFBTCxDQUFnQnBJLENBQWhCLENBQVo7QUFDQSxZQUFJa0csTUFBTSxHQUFHNkIsS0FBSyxDQUFDTyxVQUFuQjs7QUFFQSxZQUFJUCxLQUFLLENBQUNDLE1BQU4sS0FBaUIsTUFBckIsRUFBNkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsaUJBQU93QixNQUFNLENBQUMsS0FBRCxDQUFiO0FBQ0Q7O0FBRUQsWUFBSXpCLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixLQUFLZ0IsSUFBekIsRUFBK0I7QUFDN0IsY0FBSVcsUUFBUSxHQUFHOUgsTUFBTSxDQUFDb0MsSUFBUCxDQUFZOEQsS0FBWixFQUFtQixVQUFuQixDQUFmO0FBQ0EsY0FBSTZCLFVBQVUsR0FBRy9ILE1BQU0sQ0FBQ29DLElBQVAsQ0FBWThELEtBQVosRUFBbUIsWUFBbkIsQ0FBakI7O0FBRUEsY0FBSTRCLFFBQVEsSUFBSUMsVUFBaEIsRUFBNEI7QUFDMUIsZ0JBQUksS0FBS1osSUFBTCxHQUFZakIsS0FBSyxDQUFDRSxRQUF0QixFQUFnQztBQUM5QixxQkFBT3VCLE1BQU0sQ0FBQ3pCLEtBQUssQ0FBQ0UsUUFBUCxFQUFpQixJQUFqQixDQUFiO0FBQ0QsYUFGRCxNQUVPLElBQUksS0FBS2UsSUFBTCxHQUFZakIsS0FBSyxDQUFDRyxVQUF0QixFQUFrQztBQUN2QyxxQkFBT3NCLE1BQU0sQ0FBQ3pCLEtBQUssQ0FBQ0csVUFBUCxDQUFiO0FBQ0Q7QUFFRixXQVBELE1BT08sSUFBSXlCLFFBQUosRUFBYztBQUNuQixnQkFBSSxLQUFLWCxJQUFMLEdBQVlqQixLQUFLLENBQUNFLFFBQXRCLEVBQWdDO0FBQzlCLHFCQUFPdUIsTUFBTSxDQUFDekIsS0FBSyxDQUFDRSxRQUFQLEVBQWlCLElBQWpCLENBQWI7QUFDRDtBQUVGLFdBTE0sTUFLQSxJQUFJMkIsVUFBSixFQUFnQjtBQUNyQixnQkFBSSxLQUFLWixJQUFMLEdBQVlqQixLQUFLLENBQUNHLFVBQXRCLEVBQWtDO0FBQ2hDLHFCQUFPc0IsTUFBTSxDQUFDekIsS0FBSyxDQUFDRyxVQUFQLENBQWI7QUFDRDtBQUVGLFdBTE0sTUFLQTtBQUNMLGtCQUFNLElBQUlsQixLQUFKLENBQVUsd0NBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBbkdpQjtBQXFHbEJRLElBQUFBLE1BQU0sRUFBRSxnQkFBU3hELElBQVQsRUFBZUQsR0FBZixFQUFvQjtBQUMxQixXQUFLLElBQUkvRCxDQUFDLEdBQUcsS0FBS29JLFVBQUwsQ0FBZ0J0SSxNQUFoQixHQUF5QixDQUF0QyxFQUF5Q0UsQ0FBQyxJQUFJLENBQTlDLEVBQWlELEVBQUVBLENBQW5ELEVBQXNEO0FBQ3BELFlBQUkrSCxLQUFLLEdBQUcsS0FBS0ssVUFBTCxDQUFnQnBJLENBQWhCLENBQVo7O0FBQ0EsWUFBSStILEtBQUssQ0FBQ0MsTUFBTixJQUFnQixLQUFLZ0IsSUFBckIsSUFDQW5ILE1BQU0sQ0FBQ29DLElBQVAsQ0FBWThELEtBQVosRUFBbUIsWUFBbkIsQ0FEQSxJQUVBLEtBQUtpQixJQUFMLEdBQVlqQixLQUFLLENBQUNHLFVBRnRCLEVBRWtDO0FBQ2hDLGNBQUkyQixZQUFZLEdBQUc5QixLQUFuQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJOEIsWUFBWSxLQUNYN0YsSUFBSSxLQUFLLE9BQVQsSUFDQUEsSUFBSSxLQUFLLFVBRkUsQ0FBWixJQUdBNkYsWUFBWSxDQUFDN0IsTUFBYixJQUF1QmpFLEdBSHZCLElBSUFBLEdBQUcsSUFBSThGLFlBQVksQ0FBQzNCLFVBSnhCLEVBSW9DO0FBQ2xDO0FBQ0E7QUFDQTJCLFFBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0Q7O0FBRUQsVUFBSTNELE1BQU0sR0FBRzJELFlBQVksR0FBR0EsWUFBWSxDQUFDdkIsVUFBaEIsR0FBNkIsRUFBdEQ7QUFDQXBDLE1BQUFBLE1BQU0sQ0FBQ2xDLElBQVAsR0FBY0EsSUFBZDtBQUNBa0MsTUFBQUEsTUFBTSxDQUFDbkMsR0FBUCxHQUFhQSxHQUFiOztBQUVBLFVBQUk4RixZQUFKLEVBQWtCO0FBQ2hCLGFBQUszRSxNQUFMLEdBQWMsTUFBZDtBQUNBLGFBQUsyQixJQUFMLEdBQVlnRCxZQUFZLENBQUMzQixVQUF6QjtBQUNBLGVBQU81RCxnQkFBUDtBQUNEOztBQUVELGFBQU8sS0FBS3dGLFFBQUwsQ0FBYzVELE1BQWQsQ0FBUDtBQUNELEtBcklpQjtBQXVJbEI0RCxJQUFBQSxRQUFRLEVBQUUsa0JBQVM1RCxNQUFULEVBQWlCaUMsUUFBakIsRUFBMkI7QUFDbkMsVUFBSWpDLE1BQU0sQ0FBQ2xDLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0IsY0FBTWtDLE1BQU0sQ0FBQ25DLEdBQWI7QUFDRDs7QUFFRCxVQUFJbUMsTUFBTSxDQUFDbEMsSUFBUCxLQUFnQixPQUFoQixJQUNBa0MsTUFBTSxDQUFDbEMsSUFBUCxLQUFnQixVQURwQixFQUNnQztBQUM5QixhQUFLNkMsSUFBTCxHQUFZWCxNQUFNLENBQUNuQyxHQUFuQjtBQUNELE9BSEQsTUFHTyxJQUFJbUMsTUFBTSxDQUFDbEMsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUNuQyxhQUFLc0YsSUFBTCxHQUFZLEtBQUt2RixHQUFMLEdBQVdtQyxNQUFNLENBQUNuQyxHQUE5QjtBQUNBLGFBQUttQixNQUFMLEdBQWMsUUFBZDtBQUNBLGFBQUsyQixJQUFMLEdBQVksS0FBWjtBQUNELE9BSk0sTUFJQSxJQUFJWCxNQUFNLENBQUNsQyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCbUUsUUFBaEMsRUFBMEM7QUFDL0MsYUFBS3RCLElBQUwsR0FBWXNCLFFBQVo7QUFDRDs7QUFFRCxhQUFPN0QsZ0JBQVA7QUFDRCxLQXhKaUI7QUEwSmxCeUYsSUFBQUEsTUFBTSxFQUFFLGdCQUFTN0IsVUFBVCxFQUFxQjtBQUMzQixXQUFLLElBQUlsSSxDQUFDLEdBQUcsS0FBS29JLFVBQUwsQ0FBZ0J0SSxNQUFoQixHQUF5QixDQUF0QyxFQUF5Q0UsQ0FBQyxJQUFJLENBQTlDLEVBQWlELEVBQUVBLENBQW5ELEVBQXNEO0FBQ3BELFlBQUkrSCxLQUFLLEdBQUcsS0FBS0ssVUFBTCxDQUFnQnBJLENBQWhCLENBQVo7O0FBQ0EsWUFBSStILEtBQUssQ0FBQ0csVUFBTixLQUFxQkEsVUFBekIsRUFBcUM7QUFDbkMsZUFBSzRCLFFBQUwsQ0FBYy9CLEtBQUssQ0FBQ08sVUFBcEIsRUFBZ0NQLEtBQUssQ0FBQ0ksUUFBdEM7QUFDQUUsVUFBQUEsYUFBYSxDQUFDTixLQUFELENBQWI7QUFDQSxpQkFBT3pELGdCQUFQO0FBQ0Q7QUFDRjtBQUNGLEtBbktpQjtBQXFLbEIsYUFBUyxnQkFBUzBELE1BQVQsRUFBaUI7QUFDeEIsV0FBSyxJQUFJaEksQ0FBQyxHQUFHLEtBQUtvSSxVQUFMLENBQWdCdEksTUFBaEIsR0FBeUIsQ0FBdEMsRUFBeUNFLENBQUMsSUFBSSxDQUE5QyxFQUFpRCxFQUFFQSxDQUFuRCxFQUFzRDtBQUNwRCxZQUFJK0gsS0FBSyxHQUFHLEtBQUtLLFVBQUwsQ0FBZ0JwSSxDQUFoQixDQUFaOztBQUNBLFlBQUkrSCxLQUFLLENBQUNDLE1BQU4sS0FBaUJBLE1BQXJCLEVBQTZCO0FBQzNCLGNBQUk5QixNQUFNLEdBQUc2QixLQUFLLENBQUNPLFVBQW5COztBQUNBLGNBQUlwQyxNQUFNLENBQUNsQyxJQUFQLEtBQWdCLE9BQXBCLEVBQTZCO0FBQzNCLGdCQUFJZ0csTUFBTSxHQUFHOUQsTUFBTSxDQUFDbkMsR0FBcEI7QUFDQXNFLFlBQUFBLGFBQWEsQ0FBQ04sS0FBRCxDQUFiO0FBQ0Q7O0FBQ0QsaUJBQU9pQyxNQUFQO0FBQ0Q7QUFDRixPQVh1QixDQWF4QjtBQUNBOzs7QUFDQSxZQUFNLElBQUloRCxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNELEtBckxpQjtBQXVMbEJpRCxJQUFBQSxhQUFhLEVBQUUsdUJBQVNyQixRQUFULEVBQW1CakIsVUFBbkIsRUFBK0JDLE9BQS9CLEVBQXdDO0FBQ3JELFdBQUtWLFFBQUwsR0FBZ0I7QUFDZGhGLFFBQUFBLFFBQVEsRUFBRTJDLE1BQU0sQ0FBQytELFFBQUQsQ0FERjtBQUVkakIsUUFBQUEsVUFBVSxFQUFFQSxVQUZFO0FBR2RDLFFBQUFBLE9BQU8sRUFBRUE7QUFISyxPQUFoQjs7QUFNQSxVQUFJLEtBQUsxQyxNQUFMLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQSxhQUFLbkIsR0FBTCxHQUFXekQsU0FBWDtBQUNEOztBQUVELGFBQU9nRSxnQkFBUDtBQUNEO0FBck1pQixHQUFwQixDQWxnQmdDLENBMHNCaEM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBT2pGLE9BQVA7QUFFRCxDQWh0QmMsRUFpdEJiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQU9ELE1BQVAsT0FBa0IsUUFBbEIsR0FBNkJBLE1BQU0sQ0FBQ0MsT0FBcEMsR0FBOEMsRUFydEJqQyxDQUFmOztBQXd0QkEsSUFBSTtBQUNGNkssRUFBQUEsa0JBQWtCLEdBQUd6SSxPQUFyQjtBQUNELENBRkQsQ0FFRSxPQUFPMEksb0JBQVAsRUFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJLFFBQU9DLFVBQVAseUNBQU9BLFVBQVAsT0FBc0IsUUFBMUIsRUFBb0M7QUFDbENBLElBQUFBLFVBQVUsQ0FBQ0Ysa0JBQVgsR0FBZ0N6SSxPQUFoQztBQUNELEdBRkQsTUFFTztBQUNMNEksSUFBQUEsUUFBUSxDQUFDLEdBQUQsRUFBTSx3QkFBTixDQUFSLENBQXdDNUksT0FBeEM7QUFDRDtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7QUNqdkJELElBQU02SSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNuSixJQUFEO0FBQUEsU0FBVUEsSUFBSSxDQUFDckIsTUFBZjtBQUFBLENBQXhCOztBQUVBLGlFQUFld0ssZUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVBLElBQU1FLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWI7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkgsRUFBQUEsSUFBSSxDQUFDSSxPQUFMO0FBQUEsdUVBQWUsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ1RBLENBQUMsQ0FBQ0MsTUFBRixDQUFTckssRUFBVCxLQUFnQixNQURQO0FBQUE7QUFBQTtBQUFBOztBQUVMc0ssY0FBQUEsTUFGSyxHQUVJRixDQUFDLENBQUNDLE1BQUYsQ0FBU0UsVUFBVCxDQUFvQkEsVUFBcEIsQ0FBK0JBLFVBQS9CLENBQTBDdkssRUFGOUM7QUFBQTtBQUFBLHFCQUdMOEoseURBQVMsQ0FBQ1EsTUFBRCxDQUhKOztBQUFBO0FBSVg7QUFDQUYsY0FBQUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNHLGtCQUFULENBQTRCQyxTQUE1QjtBQUNBTCxjQUFBQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0ssU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsT0FBdkI7O0FBTlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNELENBVkQ7O0FBWUEsaUVBQWVULFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBRUEsSUFBTVcsU0FBUyxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO0FBQ0EsSUFBTWEsYUFBYSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBRUEsSUFBTWMsS0FBSyxHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBLElBQU1lLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFqQjtBQUNBLElBQU1nQixJQUFJLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjs7QUFFQSxJQUFNaUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkQsRUFBQUEsSUFBSSxDQUFDRSxRQUFMO0FBQUEsdUVBQWdCLGlCQUFPZixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxjQUFBQSxDQUFDLENBQUNnQixjQUFGO0FBQ1FwTCxjQUFBQSxFQUZNLEdBRUNvSyxDQUFDLENBQUNDLE1BQUYsQ0FBU2dCLGFBRlYsQ0FFTnJMLEVBRk07QUFHZDRLLGNBQUFBLDREQUFZLENBQUM1SyxFQUFELEVBQUsrSyxLQUFLLENBQUM5SSxLQUFYLEVBQWtCK0ksUUFBUSxDQUFDL0ksS0FBM0IsQ0FBWjtBQUNBNEksY0FBQUEsU0FBUyxDQUFDUyxTQUFWLG1CQUErQlAsS0FBSyxDQUFDOUksS0FBckMsZUFBK0MrSSxRQUFRLENBQUMvSSxLQUF4RCxZQUpjLENBS2Q7O0FBQ0E2SSxjQUFBQSxhQUFhLENBQUNMLFNBQWQ7QUFDQU0sY0FBQUEsS0FBSyxDQUFDOUksS0FBTixHQUFjLEVBQWQ7QUFDQStJLGNBQUFBLFFBQVEsQ0FBQy9JLEtBQVQsR0FBaUIsRUFBakI7O0FBUmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVRCxDQVhEOztBQWFBLGlFQUFlaUosVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQSxJQUFNSyxXQUFXO0FBQUEscUVBQUcsaUJBQU92TCxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0F3TCxLQUFLLHlIQUM0RnhMLEVBRDVGLEVBREw7O0FBQUE7QUFDWnlMLFlBQUFBLEdBRFk7QUFBQSw2Q0FJWEEsR0FBRyxDQUFDQyxJQUFKLEVBSlc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBWEgsV0FBVztBQUFBO0FBQUE7QUFBQSxHQUFqQjs7QUFPQSxpRUFBZUEsV0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBLElBQU1JLFFBQVE7QUFBQSxxRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNHSCxLQUFLLENBQ3JCLG9HQURxQixDQURSOztBQUFBO0FBQ1RDLFlBQUFBLEdBRFM7QUFBQSw2Q0FJUkEsR0FBRyxDQUFDQyxJQUFKLEVBSlE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUkMsUUFBUTtBQUFBO0FBQUE7QUFBQSxHQUFkOztBQU9BLGlFQUFlQSxRQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEEsSUFBTUMsT0FBTztBQUFBLHFFQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0lMLEtBQUssZ0VBQ21DSyxNQURuQyxFQURUOztBQUFBO0FBQ1JKLFlBQUFBLEdBRFE7QUFBQSw2Q0FJUEEsR0FBRyxDQUFDQyxJQUFKLEVBSk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEUsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQU1BLGlFQUFlQSxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNOQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDcEwsSUFBRDtBQUFBLFNBQVVBLElBQUksQ0FBQ3JCLE1BQWY7QUFBQSxDQUFyQjs7QUFFQSxpRUFBZXlNLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNaEIsYUFBYSxHQUFHZCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQ0EsSUFBTS9CLEdBQUcsR0FBRzhCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFaO0FBQ0EsSUFBTWdDLElBQUksR0FBR2pDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiOztBQUVBLElBQU1pQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCSCxFQUFBQSw2REFBQSxDQUFzQixPQUF0QjtBQUFBLHVFQUErQixpQkFBTzNCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzdCQSxjQUFBQSxDQUFDLENBQUNnQixjQUFGOztBQUQ2QixvQkFFekJoQixDQUFDLENBQUNDLE1BQUYsQ0FBU3JLLEVBQVQsS0FBZ0IsVUFGUztBQUFBO0FBQUE7QUFBQTs7QUFHckJvTSxjQUFBQSxTQUhxQixHQUdUaEMsQ0FBQyxDQUFDQyxNQUFGLENBQVNnQixhQUFULENBQXVCQSxhQUF2QixDQUFxQ3JMLEVBSDVCO0FBSTNCdUwsY0FBQUEsMkRBQVcsQ0FBQ2EsU0FBRCxDQUFYO0FBQ0FsRSxjQUFBQSxHQUFHLENBQUNsSSxFQUFKLEdBQVNvTSxTQUFUO0FBQ0FsRSxjQUFBQSxHQUFHLENBQUNtRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFOMkI7QUFBQSxxQkFPVlYsdURBQU8sQ0FBQ1EsU0FBRCxDQVBHOztBQUFBO0FBT3ZCMUwsY0FBQUEsSUFQdUI7QUFRM0JBLGNBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDNkwsS0FBWjtBQUNBTixjQUFBQSxJQUFJLENBQUNYLFNBQUwsdUNBQ2M1SyxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVE4TCxZQUR0Qiw2RUFFc0I5TCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVErTCxPQUY5QiwrRUFHcUQvTCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFnTSxXQUg3RCxtRkFJbURoTSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFpTSxPQUozRDtBQVQyQjtBQUFBLHFCQWVEcEIsMkRBQVcsQ0FBQ2EsU0FBRCxDQWZWOztBQUFBO0FBZXJCUSxjQUFBQSxXQWZxQjtBQWdCM0JaLGNBQUFBLDhEQUFjLENBQUNZLFdBQUQsQ0FBZDtBQUNBOUIsY0FBQUEsYUFBYSxDQUFDTCxTQUFkLGFBQTZCWiwrREFBZSxDQUFDK0MsV0FBRCxDQUE1Qzs7QUFqQjJCO0FBbUJ2QkMsY0FBQUEsS0FuQnVCLEdBbUJmN0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBbkJlO0FBb0I3QjRDLGNBQUFBLEtBQUssQ0FBQ1YsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBQy9CLENBQUQsRUFBTztBQUNyQ0EsZ0JBQUFBLENBQUMsQ0FBQ2dCLGNBQUY7QUFDQWxELGdCQUFBQSxHQUFHLENBQUNtRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQXhCLGdCQUFBQSxhQUFhLENBQUNMLFNBQWQsR0FBMEIsRUFBMUI7QUFDQXVCLGdCQUFBQSw4REFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNELGVBTEQ7O0FBcEI2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEvQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJCRCxDQTVCRDs7QUE2QkEsaUVBQWVFLEtBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQSxJQUFNdEIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQzVLLEVBQUQsRUFBSzhFLElBQUwsRUFBV2tHLFFBQVgsRUFBd0I7QUFDM0NRLEVBQUFBLEtBQUssQ0FDSCx1R0FERyxFQUNzRztBQUN2Ry9HLElBQUFBLE1BQU0sRUFBRSxNQUQrRjtBQUV2R3FJLElBQUFBLElBQUksRUFBRXRNLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25Cc00sTUFBQUEsT0FBTyxFQUFFL00sRUFEVTtBQUVuQmdOLE1BQUFBLFFBQVEsRUFBRWxJLElBRlM7QUFHbkJtSSxNQUFBQSxPQUFPLEVBQUVqQztBQUhVLEtBQWYsQ0FGaUc7QUFPdkdrQyxJQUFBQSxPQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVDtBQVA4RixHQUR0RyxDQUFMO0FBYUQsQ0FkRDs7QUFnQkEsaUVBQWV0QyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkEsSUFBTWQsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzlKLEVBQUQsRUFBUTtBQUN4QndMLEVBQUFBLEtBQUssQ0FDSCxvR0FERyxFQUVIO0FBQ0UvRyxJQUFBQSxNQUFNLEVBQUUsTUFEVjtBQUVFcUksSUFBQUEsSUFBSSxFQUFFdE0sSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJzTSxNQUFBQSxPQUFPLEVBQUUvTTtBQURVLEtBQWYsQ0FGUjtBQUtFa04sSUFBQUEsT0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFMWCxHQUZHLENBQUw7QUFZRCxDQWJEOztBQWVBLGlFQUFlcEQsU0FBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZPLElBQU1pQyxJQUFJLEdBQUcvQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBYjs7QUFFUCxJQUFNa0QsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ3pNLElBQUQsRUFBTzBNLFNBQVAsRUFBcUI7QUFDbENyQixFQUFBQSxJQUFJLENBQUNULFNBQUwsR0FBaUIsRUFBakI7QUFDQTVLLEVBQUFBLElBQUksQ0FBQytILEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQmpFLE9BQWpCLENBQXlCLFVBQUM2SSxFQUFELEVBQVE7QUFDL0JELElBQUFBLFNBQVMsQ0FBQzVJLE9BQVYsQ0FBa0IsVUFBQ3VGLElBQUQsRUFBVTtBQUMxQixVQUFJQSxJQUFJLENBQUNnRCxPQUFMLEtBQWlCTSxFQUFFLENBQUNDLE1BQXhCLEVBQWdDO0FBQzlCRCxRQUFBQSxFQUFFLENBQUNFLEtBQUgsR0FBV3hELElBQUksQ0FBQ3dELEtBQWhCO0FBQ0Q7QUFDRixLQUpEO0FBS0F4QixJQUFBQSxJQUFJLENBQUNULFNBQUwsdUNBQzJCK0IsRUFBRSxDQUFDQyxNQUQ5Qiw2QkFFUUQsRUFBRSxDQUFDYixZQUZYLHlHQUl5QmEsRUFBRSxDQUFDWixPQUo1QixtR0FLMEVZLEVBQUUsQ0FBQ0UsS0FBSCxJQUFZLEVBTHRGO0FBWUQsR0FsQkQ7QUFtQkQsQ0FyQkQ7O0FBc0JBLGlFQUFlSixNQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsSUFBTW5DLFFBQVEsR0FBR2hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBakI7O0FBQ0EsSUFBTStCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2xOLElBQUQsRUFBVTtBQUMvQmtNLEVBQUFBLFFBQVEsQ0FBQ00sU0FBVCxHQUFxQixFQUFyQjtBQUNBeE0sRUFBQUEsSUFBSSxDQUFDMEYsT0FBTCxDQUFhLFVBQUM2SSxFQUFELEVBQVE7QUFDbkJyQyxJQUFBQSxRQUFRLENBQUNNLFNBQVQsbUVBQytDK0IsRUFBRSxDQUFDTCxRQURsRCw0QkFDNEVLLEVBQUUsQ0FBQ0osT0FEL0U7QUFHRCxHQUpEO0FBS0QsQ0FQRDs7QUFRQSxpRUFBZWpCLGNBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsbURBQW1ELGdEQUFnRCwrQ0FBK0Msb0JBQW9CLDhCQUE4QixHQUFHLHNCQUFzQixzQkFBc0IsbUJBQW1CLGtCQUFrQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixHQUFHLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLHFCQUFxQixHQUFHLHNCQUFzQixrQkFBa0IscUJBQXFCLGtDQUFrQyxpQkFBaUIscUJBQXFCLEdBQUcsNkJBQTZCLHlDQUF5QyxHQUFHLDRCQUE0QiwwQkFBMEIsaUJBQWlCLHVCQUF1QixxQkFBcUIseUJBQXlCLEdBQUcsa0NBQWtDLHlDQUF5QyxHQUFHLFdBQVcsa0JBQWtCLHVDQUF1Qyx1QkFBdUIsc0JBQXNCLG1CQUFtQiwwQkFBMEIsdUJBQXVCLHdCQUF3QixHQUFHLFdBQVcsd0JBQXdCLCtDQUErQyx5Q0FBeUMscUJBQXFCLEdBQUcsY0FBYyxxQkFBcUIsaUNBQWlDLGtDQUFrQyxHQUFHLGNBQWMsa0JBQWtCLG1DQUFtQyxzQkFBc0Isb0JBQW9CLHdCQUF3QixHQUFHLG9CQUFvQixxQkFBcUIsb0JBQW9CLDBCQUEwQixHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLG9CQUFvQixHQUFHLHNCQUFzQixzQkFBc0IsR0FBRywyQkFBMkIsZUFBZSxHQUFHLGlCQUFpQixrQkFBa0IsbUNBQW1DLHdCQUF3Qix1QkFBdUIsR0FBRyxVQUFVLDRCQUE0Qix1QkFBdUIsd0JBQXdCLDBCQUEwQixpQkFBaUIsK0NBQStDLHlCQUF5QixHQUFHLGNBQWMsK0NBQStDLDJCQUEyQixHQUFHLGVBQWUsK0NBQStDLEdBQUcsWUFBWSxvQkFBb0IsZ0JBQWdCLFlBQVksZUFBZSxpQkFBaUIsOEJBQThCLDJCQUEyQixHQUFHLGNBQWMsZ0JBQWdCLGlCQUFpQixvQkFBb0Isc0JBQXNCLG1CQUFtQixHQUFHLGdCQUFnQixxREFBcUQsaUJBQWlCLG9CQUFvQixjQUFjLGdCQUFnQiwrQkFBK0IsR0FBRyxhQUFhLG9CQUFvQixhQUFhLGNBQWMsZ0JBQWdCLGVBQWUsZ0JBQWdCLHlDQUF5QyxrQkFBa0IsbUNBQW1DLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcsUUFBUSxvQkFBb0IsdUJBQXVCLHdCQUF3QixvQkFBb0IsNkNBQTZDLEdBQUcsV0FBVyxpQkFBaUIsdUJBQXVCLEdBQUcsZ0JBQWdCLHFCQUFxQixrQkFBa0IsbUNBQW1DLEdBQUcsV0FBVyxxQkFBcUIsZ0JBQWdCLGlCQUFpQix3QkFBd0Isb0JBQW9CLHdCQUF3QixtQkFBbUIsa0JBQWtCLDRCQUE0QixHQUFHLGNBQWMsZ0JBQWdCLGtCQUFrQix1QkFBdUIsdUJBQXVCLHdCQUF3QixtQkFBbUIsa0JBQWtCLDRCQUE0QixvQkFBb0IsR0FBRyxZQUFZLHVCQUF1Qix3QkFBd0IsK0NBQStDLHlCQUF5QixpQkFBaUIsR0FBRyxnQkFBZ0IsK0NBQStDLDJCQUEyQixHQUFHLGVBQWUsdUJBQXVCLG1CQUFtQixzQkFBc0IsaURBQWlELHdCQUF3QixHQUFHLGtCQUFrQix3QkFBd0IsR0FBRyxjQUFjLHVCQUF1QixzQkFBc0IsaURBQWlELHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixrQkFBa0IsR0FBRyx1QkFBdUIsdUJBQXVCLGdCQUFnQixpQkFBaUIscUJBQXFCLEdBQUcsbUJBQW1CLHNCQUFzQixpREFBaUQsd0JBQXdCLGVBQWUsb0JBQW9CLEdBQUcsdUJBQXVCLDBCQUEwQixvQkFBb0IscUJBQXFCLEdBQUcsOEJBQThCLGVBQWUsY0FBYyxHQUFHLE9BQU8sZ1BBQWdQLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE9BQU8sUUFBUSxVQUFVLFVBQVUsbUNBQW1DLGdE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ZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZS9jb21tZW50c0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvZXZlbnRIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL2Zvcm1TdWJtaXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvZ2V0Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvZ2V0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvZ2V0TWVhbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZS9pdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvcG9zdENvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL3Bvc3RMaWtlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvcmVuZGVyQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBkZWZpbmUoR3AsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwgR2VuZXJhdG9yRnVuY3Rpb24pO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCBpbiBtb2Rlcm4gZW5naW5lc1xuICAvLyB3ZSBjYW4gZXhwbGljaXRseSBhY2Nlc3MgZ2xvYmFsVGhpcy4gSW4gb2xkZXIgZW5naW5lcyB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKGRhdGEpID0+IGRhdGEubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBjb21tZW50c0NvdW50ZXI7IiwiaW1wb3J0IHBvc3RMaWtlcyBmcm9tICcuL3Bvc3RMaWtlcy5qcyc7XG5cbmNvbnN0IGxpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG5jb25zdCBldmVudEhhbmRsZXIgPSAoKSA9PiB7XG4gIGxpa2Uub25jbGljayA9IGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnbGlrZScpIHtcbiAgICAgIGNvbnN0IG1lYWxJZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgICAgYXdhaXQgcG9zdExpa2VzKG1lYWxJZCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5pbm5lclRleHQrKztcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2xpa2VkJyk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRIYW5kbGVyO1xuIiwiaW1wb3J0IHBvc3RDb21tZW50cyBmcm9tICcuL3Bvc3RDb21tZW50cy5qcyc7XG5cbmNvbnN0IGNvbW1lbnRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50Q29udGFpbmVyJyk7XG5jb25zdCBjb21tZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaGVhZGVyJyk7XG5cbmNvbnN0IHVuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcbmNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuXG5jb25zdCBmb3Jtc3VibWl0ID0gKCkgPT4ge1xuICBmb3JtLm9uc3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBpZCB9ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBwb3N0Q29tbWVudHMoaWQsIHVuYW1lLnZhbHVlLCBjb21tZW50cy52YWx1ZSk7XG4gICAgY29tbWVudHMxLmlubmVySFRNTCArPSBgPGRpdj4ke3VuYW1lLnZhbHVlfTogJHtjb21tZW50cy52YWx1ZX08L2Rpdj5gO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgIGNvbW1lbnRIZWFkZXIuaW5uZXJUZXh0Kys7XG4gICAgdW5hbWUudmFsdWUgPSAnJztcbiAgICBjb21tZW50cy52YWx1ZSA9ICcnO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXN1Ym1pdDsiLCJjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvN29jcERYeHAyUjJJOHFscVVWSngvY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsXG4gICk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q29tbWVudHM7IiwiY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy83b2NwRFh4cDJSMkk4cWxxVVZKeC9saWtlcycsXG4gICk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TGlrZXM7IiwiY29uc3QgZ2V0TWVhbCA9IGFzeW5jIChtZWFsSUQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHttZWFsSUR9YCxcbiAgKTtcbiAgcmV0dXJuIHJlcy5qc29uKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TWVhbDsiLCJjb25zdCBpdGVtc0NvdW50ZXIgPSAoZGF0YSkgPT4gZGF0YS5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1zQ291bnRlcjsiLCJpbXBvcnQgeyBtYWluIH0gZnJvbSAnLi9yZW5kZXIuanMnO1xuaW1wb3J0IGdldENvbW1lbnRzIGZyb20gJy4vZ2V0Q29tbWVudHMuanMnO1xuaW1wb3J0IGdldE1lYWwgZnJvbSAnLi9nZXRNZWFsLmpzJztcbmltcG9ydCByZW5kZXJDb21tZW50cyBmcm9tICcuL3JlbmRlckNvbW1lbnRzLmpzJztcbmltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xuXG5jb25zdCBjb21tZW50SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtaGVhZGVyJyk7XG5jb25zdCBwb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wLXVwJyk7XG5jb25zdCBtZWFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWwnKTtcblxuY29uc3QgbW9kYWwgPSAoKSA9PiB7XG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdjb21tZW50cycpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnRpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZDtcbiAgICAgIGdldENvbW1lbnRzKGNvbW1lbnRpZCk7XG4gICAgICBwb3AuaWQgPSBjb21tZW50aWQ7XG4gICAgICBwb3Auc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0TWVhbChjb21tZW50aWQpO1xuICAgICAgZGF0YSA9IGRhdGEubWVhbHM7XG4gICAgICBtZWFsLmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIiR7ZGF0YVswXS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJkX19pbWdcIiAvPlxuICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPiR7ZGF0YVswXS5zdHJNZWFsfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnlcIj48c3Bhbj5DYXRlZ29yeTo8L3NwYW4+IDxzcGFuPiR7ZGF0YVswXS5zdHJDYXRlZ29yeX08L3NwYW4+PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlcIj48c3Bhbj5Db3VudHJ5Ojwvc3Bhbj4gPHNwYW4+JHtkYXRhWzBdLnN0ckFyZWF9PC9zcGFuPjwvcD5cbiAgICAgIDwvZGl2PmA7XG4gICAgICBjb25zdCBjb21tZW50TGlzdCA9IGF3YWl0IGdldENvbW1lbnRzKGNvbW1lbnRpZCk7XG4gICAgICByZW5kZXJDb21tZW50cyhjb21tZW50TGlzdCk7XG4gICAgICBjb21tZW50SGVhZGVyLmlubmVyVGV4dCA9IGAke2NvbW1lbnRzQ291bnRlcihjb21tZW50TGlzdCl9YDtcbiAgICB9XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNvbW1lbnRIZWFkZXIuaW5uZXJUZXh0ID0gJyc7XG4gICAgICByZW5kZXJDb21tZW50cyhbXSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1vZGFsOyIsImNvbnN0IHBvc3RDb21tZW50cyA9IChpZCwgbmFtZSwgY29tbWVudHMpID0+IHtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzdvY3BEWHhwMlIySThxbHFVVkp4L2NvbW1lbnRzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudDogY29tbWVudHMsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50czsiLCJjb25zdCBwb3N0TGlrZXMgPSAoaWQpID0+IHtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzdvY3BEWHhwMlIySThxbHFVVkp4L2xpa2VzJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlczsiLCJleHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbmNvbnN0IHJlbmRlciA9IChkYXRhLCBsaWtlc0xpc3QpID0+IHtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgZGF0YS5zbGljZSgzLCA5KS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGxpa2VzTGlzdC5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBlbC5pZE1lYWwpIHtcbiAgICAgICAgZWwubGlrZXMgPSBsaWtlLmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1haW4uaW5uZXJIVE1MICs9IChcbiAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHtlbC5pZE1lYWx9XCI+XG48aW1nIHNyYz1cIiR7ZWwuc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1nXCIgLz5cbjxkaXYgY2xhc3M9XCJjYXJkX190b3BcIj5cbjxwIGNsYXNzPVwiY2FyZF9fdG9wLS1uYW1lXCI+JHtlbC5zdHJNZWFsfTwvcD5cbjxkaXYgY2xhc3M9XCJjYXJkX190b3AtLWxpa2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhlYXJ0XCIgaWQ9J2xpa2UnPjwvaT48cD4gJHtlbC5saWtlcyB8fCAnJ30gPC9wPmxpa2VzPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjYXJkX19ib3R0b21cIj5cbjxhIGhyZWY9XCJcIiBpZD1cImNvbW1lbnRzXCIgY2xhc3M9XCJidG5cIj5Db21tZW50PC9hPlxuPGEgaHJlZj1cIlwiIGlkPVwicmVzZXJ2YXRpb25zXCIgY2xhc3M9XCJidG5cIj5SZXNldmF0aW9uPC9hPlxuPC9kaXY+XG48L2Rpdj5gKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsImNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRDb250YWluZXInKTtcbmNvbnN0IHJlbmRlckNvbW1lbnRzID0gKGxpc3QpID0+IHtcbiAgY29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gIGxpc3QuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb21tZW50cy5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWl0ZW1cIj48c3BhbiBjbGFzcz0ndXNlcic+JHtlbC51c2VybmFtZX08L3NwYW4+OiA8c3Bhbj4ke2VsLmNvbW1lbnR9PC9zcGFuPjwvZGl2PlxuICAgICAgIGA7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbW1lbnRzOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiKDE5NiwgMTkzLCAxOTMpIHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGJkMDtcXG59XFxuLmhlYWRlcl9fY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuLmhlYWRlcl9fbG9nby0taW1nIHtcXG4gIHdpZHRoOiA2NXB4O1xcbiAgei1pbmRleDogMTA7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4uaGVhZGVyIC5uYXZfX2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIG1heC13aWR0aDogOTAwcHg7XFxufVxcbi5oZWFkZXIgLm5hdl9fbGlzdCAubWVhbHMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTc0LCAxNzQpO1xcbn1cXG4uaGVhZGVyIC5uYXZfX2xpc3QtLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uaGVhZGVyIC5uYXZfX2xpc3QtLWxpbms6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTc0LCAxNzQpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtcm93LWdhcDogNTBweDtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTc0LCAxNzQpO1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG59XFxuLmNhcmRfX2ltZyB7XFxuICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZF9fdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkX190b3AtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuLmNhcmRfX3RvcC0tbGlrZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmRfX3RvcC0tbGlrZSBpIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uY2FyZF9fdG9wLS1saWtlIC5saWtlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uY2FyZF9fYm90dG9tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweCAxMnB4O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5idG46YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkYmQwO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwMDtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tbGVmdDogNiU7XFxuICBtYXJnaW4tYm90dG9tOiAzJTtcXG4gIG1hcmdpbi10b3A6IDIlO1xcbn1cXG5cXG5mb290ZXIgZGl2IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsIDc5LCA3OSwgMC40NzA1ODgyMzUzKTtcXG4gIGhlaWdodDogMjBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICMwMDA7XFxufVxcblxcbi5wb3AtdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMCU7XFxuICBsZWZ0OiAxMyU7XFxuICBib3R0b206IDEwJTtcXG4gIHdpZHRoOiA3MiU7XFxuICBoZWlnaHQ6IDY4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAzMHB4IDUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTHVjaWRhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZm9ybSB7XFxuICB3aWR0aDogMjUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb3JtLWJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW5wdXQge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLmNhdGVnb3J5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDAuNDg2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5jYXRlZ29yeSBzcGFuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5jb3VudHJ5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjQ4Nik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY291bnRyeSBzcGFuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudENvbnRhaW5lciB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWl0ZW0ge1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyMCwgMjIwLCAyMjAsIDAuNDg2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogOTUlO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG4uY29tbWVudC1pdGVtIC51c2VyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1pbi13aWR0aDogNzBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4tY29udGVudC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNr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LHNCQUFBO0FIeUlKOztBR3JJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBSHdJRjtBR3ZJRTtFQUNFLG1CQUFBO0FIeUlKOztBR3JJQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FId0lGO0FHdElFO0VBQ0UsbUJBQUE7QUh3SUo7O0FHcElBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FIdUlGOztBR3BJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBSHVJRjs7QUdwSUE7RUFDRSxpQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBSHVJRjtBR3RJRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FId0lKOztBQXBQQTs7O0VBR0UsVUFBQTtFQUNBLFNBQUE7QUF1UEZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggcmdiKDE5NiwgMTkzLCAxOTMpIHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgZm9udC1zaXplOiAyM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGJkMDtcXG5cXG4gICZfX2NvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICB9XFxuXFxuICAmX19sb2dvLS1pbWcge1xcbiAgICB3aWR0aDogNjVweDtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICB9XFxuXFxuICAubmF2X19saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcXG5cXG4gICAgLm1lYWxzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxNzQsIDE3NCk7XFxuICAgIH1cXG5cXG4gICAgJi0tbGluayB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0ICcuL2hlYWRlci5zY3NzJztcXG5AaW1wb3J0ICcuL21haW4tY29udGVudC5zY3NzJztcXG5AaW1wb3J0ICcuL2Zvb3Rlci5zY3NzJztcXG5AaW1wb3J0ICcuL3BvcHVwLnNjc3MnO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblwiLFwiLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXJvdy1nYXA6IDUwcHg7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNTBweCAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG4gIG1heC13aWR0aDogMjgwcHg7XFxuXFxuICAmX19pbWcge1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICZfX3RvcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDEycHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgJi0tbmFtZSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgICB9XFxuXFxuICAgICYtLWxpa2Uge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgaSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmxpa2VkIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAmX19ib3R0b20ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHggMTJweDtcXG4gIH1cXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG5cXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB9XFxuXFxuICAmOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIH1cXG59XFxuXCIsXCJmb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmRiZDA7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjMDAwO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi1sZWZ0OiA2JTtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbiAgbWFyZ2luLXRvcDogMiU7XFxufVxcblxcbmZvb3RlciBkaXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViNGY0Zjc4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiBzb2xpZCAxcHggIzAwMDtcXG59XFxuXCIsXCIucG9wLXVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAlO1xcbiAgbGVmdDogMTMlO1xcbiAgYm90dG9tOiAxMCU7XFxuICB3aWR0aDogNzIlO1xcbiAgaGVpZ2h0OiA2OCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxNzQsIDE3NCk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMzBweCA1MHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgJi1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxufVxcblxcbmlucHV0IHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG4gIGJvcmRlcjogbm9uZTtcXG4gICY6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB9XFxufVxcblxcbi5jYXRlZ29yeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjQ4Nik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgc3BhbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxufVxcblxcbi5jb3VudHJ5IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjQ4Nik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbiAgc3BhbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB9XFxufVxcblxcbi50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudENvbnRhaW5lciB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWl0ZW17XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMC40ODYpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiA5NSU7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICAudXNlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWluLXdpZHRoOiA3MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbmltcG9ydCBldmVudEhhbmRsZXIgZnJvbSAnLi9tb2R1bGUvZXZlbnRIYW5kbGVyLmpzJztcblxuaW1wb3J0IGxvZ28gZnJvbSAnLi9hc3NldHMvbG9nby5wbmcnO1xuaW1wb3J0IGdldExpa2VzIGZyb20gJy4vbW9kdWxlL2dldExpa2VzLmpzJztcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZHVsZS9tb2RhbC5qcyc7XG5pbXBvcnQgcmVuZGVyIGZyb20gJy4vbW9kdWxlL3JlbmRlci5qcyc7XG5pbXBvcnQgZm9ybXN1Ym1pdCBmcm9tICcuL21vZHVsZS9mb3JtU3VibWl0LmpzJztcbmltcG9ydCBpdGVtc0NvdW50ZXIgZnJvbSAnLi9tb2R1bGUvaXRlbXNDb3VudGVyLmpzJztcblxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvJyk7XG5pbWFnZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2xvZ299XCIgYWx0PVwiXCIgY2xhc3M9XCJoZWFkZXJfX2xvZ28tLWltZ1wiPjwvaW1nPmA7XG5jb25zdCBtZWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscycpO1xuXG5jb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz1iZWVmJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICBtZWFscy5pbm5lckhUTUwgPSBgTWVhbHMgKCR7aXRlbXNDb3VudGVyKGRhdGEubWVhbHMpfSlgO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IGdldExpa2VzKCk7XG4gIHJlbmRlcihkYXRhLm1lYWxzLCBsaWtlcyk7XG4gIGV2ZW50SGFuZGxlcihkYXRhLm1lYWxzKTtcbn07XG5cbmdldERhdGEoKTtcbm1vZGFsKCk7XG5mb3Jtc3VibWl0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInJ1bnRpbWUiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGlzcGxheU5hbWUiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsIm5leHQiLCJkb25lIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZ2xvYmFsVGhpcyIsIkZ1bmN0aW9uIiwiY29tbWVudHNDb3VudGVyIiwicG9zdExpa2VzIiwibGlrZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImV2ZW50SGFuZGxlciIsIm9uY2xpY2siLCJlIiwidGFyZ2V0IiwibWVhbElkIiwicGFyZW50Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsInBvc3RDb21tZW50cyIsImNvbW1lbnRzMSIsImNvbW1lbnRIZWFkZXIiLCJ1bmFtZSIsImNvbW1lbnRzIiwiZm9ybSIsImZvcm1zdWJtaXQiLCJvbnN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50RWxlbWVudCIsImlubmVySFRNTCIsImdldENvbW1lbnRzIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZ2V0TGlrZXMiLCJnZXRNZWFsIiwibWVhbElEIiwiaXRlbXNDb3VudGVyIiwibWFpbiIsInJlbmRlckNvbW1lbnRzIiwibWVhbCIsIm1vZGFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbW1lbnRpZCIsInN0eWxlIiwiZGlzcGxheSIsIm1lYWxzIiwic3RyTWVhbFRodW1iIiwic3RyTWVhbCIsInN0ckNhdGVnb3J5Iiwic3RyQXJlYSIsImNvbW1lbnRMaXN0IiwiY2xvc2UiLCJib2R5IiwiaXRlbV9pZCIsInVzZXJuYW1lIiwiY29tbWVudCIsImhlYWRlcnMiLCJyZW5kZXIiLCJsaWtlc0xpc3QiLCJlbCIsImlkTWVhbCIsImxpa2VzIiwibG9nbyIsImltYWdlIiwiZ2V0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=