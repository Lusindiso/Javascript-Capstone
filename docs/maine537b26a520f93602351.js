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
              meal.innerHTML = "<div>\n        <img src=\"".concat(data[0].strMealThumb, "\" alt=\"\" class=\"card__img\" />\n        <h2>").concat(data[0].strMeal, "</h2>\n        <p class=\"category\">").concat(data[0].strCategory, "</p>\n        <p class=\"country\">").concat(data[0].strArea, "</p>\n      </div>");
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
    comments.innerHTML += "\n    <div>".concat(el.username, ": ").concat(el.comment, "</div>\n       ");
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
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n  border-bottom: 1px rgb(196, 193, 193) solid;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n  font-size: 23px;\n  background-color: #e2dbd0;\n}\n.header__container {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n.header__logo--img {\n  width: 65px;\n  z-index: 10;\n  padding-top: 5px;\n}\n.header .nav__list {\n  display: flex;\n  list-style: none;\n  justify-content: space-around;\n  flex-grow: 2;\n  max-width: 900px;\n}\n.header .nav__list .meals {\n  background-color: rgb(207, 174, 174);\n}\n.header .nav__list--link {\n  text-decoration: none;\n  color: black;\n  padding: 16px 20px;\n  margin-left: 2px;\n  transition: all 0.3s;\n}\n.header .nav__list--link:hover {\n  background-color: rgb(207, 174, 174);\n}\n\n.main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 50px;\n  max-width: 1100px;\n  margin: 0 auto;\n  justify-items: center;\n  padding: 50px 20px;\n  margin-bottom: 80px;\n}\n\n.card {\n  border-radius: 10px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  background-color: rgb(207, 174, 174);\n  max-width: 280px;\n}\n.card__img {\n  max-width: 280px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.card__top {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 12px;\n  margin-top: 5px;\n  align-items: center;\n}\n.card__top--name {\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: 0.5px;\n}\n.card__top--like {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.card__top--like i {\n  margin-right: 5px;\n}\n.card__top--like .liked {\n  color: red;\n}\n.card__bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 12px;\n}\n\n.btn {\n  background-color: white;\n  padding: 10px 20px;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n}\n.btn:hover {\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\n  transform: scale(1.05);\n}\n.btn:active {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n}\n\nfooter {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0%;\n  color: black;\n  background-color: #e2dbd0;\n  border: solid 1px #000;\n}\n\nfooter p {\n  width: 100%;\n  color: black;\n  margin-left: 6%;\n  margin-bottom: 3%;\n  margin-top: 2%;\n}\n\nfooter div {\n  background-color: rgba(91, 79, 79, 0.4705882353);\n  height: 20px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: solid 1px #000;\n}\n\n.pop-up {\n  position: fixed;\n  top: 10%;\n  left: 13%;\n  bottom: 10%;\n  width: 72%;\n  height: 68%;\n  background-color: rgb(207, 174, 174);\n  z-index: 9999;\n  justify-content: center;\n  align-items: center;\n  display: none;\n  border-radius: 10px;\n}\n\nh1 {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 5px;\n  font-family: \"Lucida Sans\", sans-serif;\n}\n\ninput {\n  width: 60%;\n  height: 40px;\n  border-radius: 5px;\n  padding: 0 10px;\n  margin-bottom: 20px;\n  margin-left: 15%;\n  display: flex;\n  border: 1px solid black;\n}\n\ntextarea {\n  width: 60%;\n  height: 200px;\n  border-radius: 5px;\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  margin-left: 15%;\n  display: flex;\n  border: 1px solid black;\n  font-size: 16px;\n}\n\nbutton {\n  width: 24%;\n  height: 40px;\n  border-radius: 10px;\n  padding: 0 10px;\n  margin-bottom: 20px;\n  margin-left: 15%;\n  border: 1px solid black;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n}", "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/styles/main.scss","webpack://./src/styles/main-content.scss","webpack://./src/styles/footer.scss","webpack://./src/styles/popup.scss"],"names":[],"mappings":"AAAA;EACE,2CAAA;EACA,0CAAA;EACA,eAAA;EACA,yBAAA;ACCF;ADCE;EACE,iBAAA;EACA,cAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,eAAA;ACCJ;ADEE;EACE,WAAA;EACA,WAAA;EACA,gBAAA;ACAJ;ADGE;EACE,aAAA;EACA,gBAAA;EACA,6BAAA;EACA,YAAA;EACA,gBAAA;ACDJ;ADGI;EACE,oCAAA;ACDN;ADII;EACE,qBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;ACFN;ADIM;EACE,oCAAA;ACFR;;ACtCA;EACE,aAAA;EACA,kCAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,qBAAA;EACA,kBAAA;EACA,mBAAA;ADyCF;;ACtCA;EACE,mBAAA;EACA,0CAAA;EACA,oCAAA;EACA,gBAAA;ADyCF;ACvCE;EACE,gBAAA;EACA,4BAAA;EACA,6BAAA;ADyCJ;ACtCE;EACE,aAAA;EACA,8BAAA;EACA,iBAAA;EACA,eAAA;EACA,mBAAA;ADwCJ;ACtCI;EACE,gBAAA;EACA,eAAA;EACA,qBAAA;ADwCN;ACrCI;EACE,aAAA;EACA,mBAAA;EACA,eAAA;ADuCN;ACrCM;EACE,iBAAA;ADuCR;ACpCM;EACE,UAAA;ADsCR;ACjCE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;ADmCJ;;AC/BA;EACE,uBAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,0CAAA;EACA,oBAAA;ADkCF;AChCE;EACE,0CAAA;EACA,sBAAA;ADkCJ;AC/BE;EACE,0CAAA;ADiCJ;;AE3GA;EACE,eAAA;EACA,WAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,yBAAA;EACA,sBAAA;AF8GF;;AE3GA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AF8GF;;AE3GA;EACE,gDAAA;EACA,YAAA;EACA,eAAA;EACA,SAAA;EACA,WAAA;EACA,0BAAA;AF8GF;;AGtIA;EACE,eAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,UAAA;EACA,WAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AHyIF;;AGtIA;EACE,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;EACA,sCAAA;AHyIF;;AGtIA;EACE,UAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;AHyIF;;AGtIA;EACE,UAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,eAAA;AHyIF;;AGtIA;EACE,UAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AHyIF;;AAzLA;;;EAGE,UAAA;EACA,SAAA;AA4LF","sourcesContent":[".header {\n  border-bottom: 1px rgb(196, 193, 193) solid;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);\n  font-size: 23px;\n  background-color: #e2dbd0;\n\n  &__container {\n    max-width: 1100px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 20px;\n  }\n\n  &__logo--img {\n    width: 65px;\n    z-index: 10;\n    padding-top: 5px;\n  }\n\n  .nav__list {\n    display: flex;\n    list-style: none;\n    justify-content: space-around;\n    flex-grow: 2;\n    max-width: 900px;\n\n    .meals {\n      background-color: rgb(207, 174, 174);\n    }\n\n    &--link {\n      text-decoration: none;\n      color: black;\n      padding: 16px 20px;\n      margin-left: 2px;\n      transition: all 0.3s;\n\n      &:hover {\n        background-color: rgb(207, 174, 174);\n      }\n    }\n  }\n}\n","@import './header.scss';\n@import './main-content.scss';\n@import './footer.scss';\n@import './popup.scss';\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n}\n",".main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-row-gap: 50px;\n  max-width: 1100px;\n  margin: 0 auto;\n  justify-items: center;\n  padding: 50px 20px;\n  margin-bottom: 80px;\n}\n\n.card {\n  border-radius: 10px;\n  box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.3);\n  background-color: rgb(207, 174, 174);\n  max-width: 280px;\n\n  &__img {\n    max-width: 280px;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n\n  &__top {\n    display: flex;\n    justify-content: space-between;\n    padding: 5px 12px;\n    margin-top: 5px;\n    align-items: center;\n\n    &--name {\n      font-weight: 500;\n      font-size: 18px;\n      letter-spacing: 0.5px;\n    }\n\n    &--like {\n      display: flex;\n      align-items: center;\n      cursor: pointer;\n\n      i {\n        margin-right: 5px;\n      }\n\n      .liked {\n        color: red;\n      }\n    }\n  }\n\n  &__bottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 12px;\n  }\n}\n\n.btn {\n  background-color: white;\n  padding: 10px 20px;\n  border-radius: 20px;\n  text-decoration: none;\n  color: black;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);\n  transition: all 0.3s;\n\n  &:hover {\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);\n    transform: scale(1.05);\n  }\n\n  &:active {\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  }\n}\n","footer {\n  position: fixed;\n  width: 100%;\n  left: 0;\n  bottom: 0%;\n  color: black;\n  background-color: #e2dbd0;\n  border: solid 1px #000;\n}\n\nfooter p {\n  width: 100%;\n  color: black;\n  margin-left: 6%;\n  margin-bottom: 3%;\n  margin-top: 2%;\n}\n\nfooter div {\n  background-color: #5b4f4f78;\n  height: 20px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  border-top: solid 1px #000;\n}\n",".pop-up {\n  position: fixed;\n  top: 10%;\n  left: 13%;\n  bottom: 10%;\n  width: 72%;\n  height: 68%;\n  background-color: rgb(207, 174, 174);\n  z-index: 9999;\n  justify-content: center;\n  align-items: center;\n  display: none;\n  border-radius: 10px;\n}\n\nh1 {\n  font-size: 30px;\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 5px;\n  font-family: 'Lucida Sans', sans-serif;\n}\n\ninput {\n  width: 60%;\n  height: 40px;\n  border-radius: 5px;\n  padding: 0 10px;\n  margin-bottom: 20px;\n  margin-left: 15%;\n  display: flex;\n  border: 1px solid black;\n}\n\ntextarea {\n  width: 60%;\n  height: 200px;\n  border-radius: 5px;\n  padding: 10px 10px;\n  margin-bottom: 20px;\n  margin-left: 15%;\n  display: flex;\n  border: 1px solid black;\n  font-size: 16px;\n}\n\nbutton {\n  width: 24%;\n  height: 40px;\n  border-radius: 10px;\n  padding: 0 10px;\n  margin-bottom: 20px;\n  margin-left: 15%;\n  border: 1px solid black;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUVBLElBQU15QixLQUFLLEdBQUd6RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBd0QsS0FBSyxDQUFDbkMsU0FBTix3QkFBK0JrQyw2Q0FBL0I7QUFDQSxJQUFNakIsS0FBSyxHQUFHdkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWQ7O0FBRUEsSUFBTXlELE9BQU87QUFBQSxxRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNJbEMsS0FBSyxDQUFDLDJEQUFELENBRFQ7O0FBQUE7QUFDUkMsWUFBQUEsR0FEUTtBQUFBO0FBQUEsbUJBRUtBLEdBQUcsQ0FBQ0MsSUFBSixFQUZMOztBQUFBO0FBRVJoTCxZQUFBQSxJQUZRO0FBR2Q2TCxZQUFBQSxLQUFLLENBQUNqQixTQUFOLG9CQUE0QlEsbUVBQVksQ0FBQ3BMLElBQUksQ0FBQzZMLEtBQU4sQ0FBeEM7QUFIYztBQUFBLG1CQUlNWiwrREFBUSxFQUpkOztBQUFBO0FBSVI0QixZQUFBQSxLQUpRO0FBS2RKLFlBQUFBLDZEQUFNLENBQUN6TSxJQUFJLENBQUM2TCxLQUFOLEVBQWFnQixLQUFiLENBQU47QUFDQXJELFlBQUFBLG1FQUFZLENBQUN4SixJQUFJLENBQUM2TCxLQUFOLENBQVo7O0FBTmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUG1CLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjs7QUFTQUEsT0FBTztBQUNQeEIsNERBQUs7QUFDTGhCLGlFQUFVO0FBRVYsaUVBQWV3QyxPQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL2V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZS9mb3JtU3VibWl0LmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL2dldENvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL2dldExpa2VzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL2dldE1lYWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL21vZGFsLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL3Bvc3RDb21tZW50cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL21vZHVsZS9wb3N0TGlrZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9tb2R1bGUvcmVuZGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbW9kdWxlL3JlbmRlckNvbW1lbnRzLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stYm9pbGVycGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImNvbnN0IGNvbW1lbnRzQ291bnRlciA9IChkYXRhKSA9PiBkYXRhLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudHNDb3VudGVyOyIsImltcG9ydCBwb3N0TGlrZXMgZnJvbSAnLi9wb3N0TGlrZXMuanMnO1xuXG5jb25zdCBsaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuY29uc3QgZXZlbnRIYW5kbGVyID0gKCkgPT4ge1xuICBsaWtlLm9uY2xpY2sgPSBhc3luYyAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2xpa2UnKSB7XG4gICAgICBjb25zdCBtZWFsSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcbiAgICAgIGF3YWl0IHBvc3RMaWtlcyhtZWFsSWQpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0Kys7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdsaWtlZCcpO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50SGFuZGxlcjtcbiIsImltcG9ydCBwb3N0Q29tbWVudHMgZnJvbSAnLi9wb3N0Q29tbWVudHMuanMnO1xuXG5jb25zdCBjb21tZW50czEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudENvbnRhaW5lcicpO1xuY29uc3QgY29tbWVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWhlYWRlcicpO1xuXG5jb25zdCB1bmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG5jb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50Jyk7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKTtcblxuY29uc3QgZm9ybXN1Ym1pdCA9ICgpID0+IHtcbiAgZm9ybS5vbnN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgaWQgfSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgcG9zdENvbW1lbnRzKGlkLCB1bmFtZS52YWx1ZSwgY29tbWVudHMudmFsdWUpO1xuICAgIGNvbW1lbnRzMS5pbm5lckhUTUwgKz0gYDxkaXY+JHt1bmFtZS52YWx1ZX06ICR7Y29tbWVudHMudmFsdWV9PC9kaXY+YDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGx1c3BsdXNcbiAgICBjb21tZW50SGVhZGVyLmlubmVyVGV4dCsrO1xuICAgIHVuYW1lLnZhbHVlID0gJyc7XG4gICAgY29tbWVudHMudmFsdWUgPSAnJztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zdWJtaXQ7IiwiY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzdvY3BEWHhwMlIySThxbHFVVkp4L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gLFxuICApO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzOyIsImNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvN29jcERYeHAyUjJJOHFscVVWSngvbGlrZXMnLFxuICApO1xuICByZXR1cm4gcmVzLmpzb24oKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExpa2VzOyIsImNvbnN0IGdldE1lYWwgPSBhc3luYyAobWVhbElEKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSR7bWVhbElEfWAsXG4gICk7XG4gIHJldHVybiByZXMuanNvbigpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldE1lYWw7IiwiY29uc3QgaXRlbXNDb3VudGVyID0gKGRhdGEpID0+IGRhdGEubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtc0NvdW50ZXI7IiwiaW1wb3J0IHsgbWFpbiB9IGZyb20gJy4vcmVuZGVyLmpzJztcbmltcG9ydCBnZXRDb21tZW50cyBmcm9tICcuL2dldENvbW1lbnRzLmpzJztcbmltcG9ydCBnZXRNZWFsIGZyb20gJy4vZ2V0TWVhbC5qcyc7XG5pbXBvcnQgcmVuZGVyQ29tbWVudHMgZnJvbSAnLi9yZW5kZXJDb21tZW50cy5qcyc7XG5pbXBvcnQgY29tbWVudHNDb3VudGVyIGZyb20gJy4vY29tbWVudHNDb3VudGVyLmpzJztcblxuY29uc3QgY29tbWVudEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWhlYWRlcicpO1xuY29uc3QgcG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcC11cCcpO1xuY29uc3QgbWVhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFsJyk7XG5cbmNvbnN0IG1vZGFsID0gKCkgPT4ge1xuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnY29tbWVudHMnKSB7XG4gICAgICBjb25zdCBjb21tZW50aWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQ7XG4gICAgICBnZXRDb21tZW50cyhjb21tZW50aWQpO1xuICAgICAgcG9wLmlkID0gY29tbWVudGlkO1xuICAgICAgcG9wLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGdldE1lYWwoY29tbWVudGlkKTtcbiAgICAgIGRhdGEgPSBkYXRhLm1lYWxzO1xuICAgICAgbWVhbC5pbm5lckhUTUwgPSBgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke2RhdGFbMF0uc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1nXCIgLz5cbiAgICAgICAgPGgyPiR7ZGF0YVswXS5zdHJNZWFsfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzPVwiY2F0ZWdvcnlcIj4ke2RhdGFbMF0uc3RyQ2F0ZWdvcnl9PC9wPlxuICAgICAgICA8cCBjbGFzcz1cImNvdW50cnlcIj4ke2RhdGFbMF0uc3RyQXJlYX08L3A+XG4gICAgICA8L2Rpdj5gO1xuICAgICAgY29uc3QgY29tbWVudExpc3QgPSBhd2FpdCBnZXRDb21tZW50cyhjb21tZW50aWQpO1xuICAgICAgcmVuZGVyQ29tbWVudHMoY29tbWVudExpc3QpO1xuICAgICAgY29tbWVudEhlYWRlci5pbm5lclRleHQgPSBgJHtjb21tZW50c0NvdW50ZXIoY29tbWVudExpc3QpfWA7XG4gICAgfVxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcG9wLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IG1vZGFsOyIsImNvbnN0IHBvc3RDb21tZW50cyA9IChpZCwgbmFtZSwgY29tbWVudHMpID0+IHtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzdvY3BEWHhwMlIySThxbHFVVkp4L2NvbW1lbnRzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudDogY29tbWVudHMsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RDb21tZW50czsiLCJjb25zdCBwb3N0TGlrZXMgPSAoaWQpID0+IHtcbiAgZmV0Y2goXG4gICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzdvY3BEWHhwMlIySThxbHFVVkp4L2xpa2VzJyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RMaWtlczsiLCJleHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbmNvbnN0IHJlbmRlciA9IChkYXRhLCBsaWtlc0xpc3QpID0+IHtcbiAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgZGF0YS5zbGljZSgzLCA5KS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGxpa2VzTGlzdC5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgICBpZiAobGlrZS5pdGVtX2lkID09PSBlbC5pZE1lYWwpIHtcbiAgICAgICAgZWwubGlrZXMgPSBsaWtlLmxpa2VzO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG1haW4uaW5uZXJIVE1MICs9IChcbiAgICAgIGA8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiJHtlbC5pZE1lYWx9XCI+XG48aW1nIHNyYz1cIiR7ZWwuc3RyTWVhbFRodW1ifVwiIGFsdD1cIlwiIGNsYXNzPVwiY2FyZF9faW1nXCIgLz5cbjxkaXYgY2xhc3M9XCJjYXJkX190b3BcIj5cbjxwIGNsYXNzPVwiY2FyZF9fdG9wLS1uYW1lXCI+JHtlbC5zdHJNZWFsfTwvcD5cbjxkaXYgY2xhc3M9XCJjYXJkX190b3AtLWxpa2VcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLWhlYXJ0XCIgaWQ9J2xpa2UnPjwvaT48cD4gJHtlbC5saWtlcyB8fCAnJ30gPC9wPmxpa2VzPC9kaXY+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjYXJkX19ib3R0b21cIj5cbjxhIGhyZWY9XCJcIiBpZD1cImNvbW1lbnRzXCIgY2xhc3M9XCJidG5cIj5Db21tZW50PC9hPlxuPGEgaHJlZj1cIlwiIGlkPVwicmVzZXJ2YXRpb25zXCIgY2xhc3M9XCJidG5cIj5SZXNldmF0aW9uPC9hPlxuPC9kaXY+XG48L2Rpdj5gKTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgcmVuZGVyOyIsImNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnRDb250YWluZXInKTtcbmNvbnN0IHJlbmRlckNvbW1lbnRzID0gKGxpc3QpID0+IHtcbiAgY29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gIGxpc3QuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb21tZW50cy5pbm5lckhUTUwgKz0gYFxuICAgIDxkaXY+JHtlbC51c2VybmFtZX06ICR7ZWwuY29tbWVudH08L2Rpdj5cbiAgICAgICBgO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb21tZW50czsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFkZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYigxOTYsIDE5MywgMTkzKSBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGZvbnQtc2l6ZTogMjNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmRiZDA7XFxufVxcbi5oZWFkZXJfX2NvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxufVxcbi5oZWFkZXJfX2xvZ28tLWltZyB7XFxuICB3aWR0aDogNjVweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuLmhlYWRlciAubmF2X19saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWdyb3c6IDI7XFxuICBtYXgtd2lkdGg6IDkwMHB4O1xcbn1cXG4uaGVhZGVyIC5uYXZfX2xpc3QgLm1lYWxzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG59XFxuLmhlYWRlciAubmF2X19saXN0LS1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAycHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmhlYWRlciAubmF2X19saXN0LS1saW5rOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG59XFxuXFxuLm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXJvdy1nYXA6IDUwcHg7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNTBweCAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG4gIG1heC13aWR0aDogMjgwcHg7XFxufVxcbi5jYXJkX19pbWcge1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuLmNhcmRfX3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZF9fdG9wLS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcbi5jYXJkX190b3AtLWxpa2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkX190b3AtLWxpa2UgaSB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmNhcmRfX3RvcC0tbGlrZSAubGlrZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmNhcmRfX2JvdHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHggMTJweDtcXG59XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmJ0bjpob3ZlciB7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG4uYnRuOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGJkMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDA7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLWxlZnQ6IDYlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG59XFxuXFxuZm9vdGVyIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkxLCA3OSwgNzksIDAuNDcwNTg4MjM1Myk7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjMDAwO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTAlO1xcbiAgbGVmdDogMTMlO1xcbiAgYm90dG9tOiAxMCU7XFxuICB3aWR0aDogNzIlO1xcbiAgaGVpZ2h0OiA2OCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA3LCAxNzQsIDE3NCk7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBmb250LWZhbWlseTogXFxcIkx1Y2lkYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXQge1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgd2lkdGg6IDI0JTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLWNvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9wb3B1cC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsMkNBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0k7RUFDRSxvQ0FBQTtBQ0ROO0FESUk7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNGTjtBRElNO0VBQ0Usb0NBQUE7QUNGUjs7QUN0Q0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRHlDRjs7QUN0Q0E7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBRHlDRjtBQ3ZDRTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRHlDSjtBQ3RDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEd0NKO0FDdENJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUR3Q047QUNyQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEdUNOO0FDckNNO0VBQ0UsaUJBQUE7QUR1Q1I7QUNwQ007RUFDRSxVQUFBO0FEc0NSO0FDakNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRG1DSjs7QUMvQkE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLG9CQUFBO0FEa0NGO0FDaENFO0VBQ0UsMENBQUE7RUFDQSxzQkFBQTtBRGtDSjtBQy9CRTtFQUNFLDBDQUFBO0FEaUNKOztBRTNHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBRjhHRjs7QUUzR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUY4R0Y7O0FFM0dBO0VBQ0UsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUY4R0Y7O0FHdElBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBSHlJRjs7QUd0SUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQ0FBQTtBSHlJRjs7QUd0SUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUh5SUY7O0FHdElBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUh5SUY7O0FHdElBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUh5SUY7O0FBekxBOzs7RUFHRSxVQUFBO0VBQ0EsU0FBQTtBQTRMRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCByZ2IoMTk2LCAxOTMsIDE5Mykgc29saWQ7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBmb250LXNpemU6IDIzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkYmQwO1xcblxcbiAgJl9fY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gIH1cXG5cXG4gICZfX2xvZ28tLWltZyB7XFxuICAgIHdpZHRoOiA2NXB4O1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gIH1cXG5cXG4gIC5uYXZfX2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC1ncm93OiAyO1xcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xcblxcbiAgICAubWVhbHMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG4gICAgfVxcblxcbiAgICAmLS1saW5rIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTc0LCAxNzQpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgJy4vaGVhZGVyLnNjc3MnO1xcbkBpbXBvcnQgJy4vbWFpbi1jb250ZW50LnNjc3MnO1xcbkBpbXBvcnQgJy4vZm9vdGVyLnNjc3MnO1xcbkBpbXBvcnQgJy4vcG9wdXAuc2Nzcyc7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXCIsXCIubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtcm93LWdhcDogNTBweDtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNywgMTc0LCAxNzQpO1xcbiAgbWF4LXdpZHRoOiAyODBweDtcXG5cXG4gICZfX2ltZyB7XFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbiAgfVxcblxcbiAgJl9fdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAmLS1uYW1lIHtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIH1cXG5cXG4gICAgJi0tbGlrZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICBpIHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAubGlrZWQge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gICZfX2JvdHRvbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweCAxMnB4O1xcbiAgfVxcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIH1cXG5cXG4gICY6YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgfVxcbn1cXG5cIixcImZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGJkMDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMwMDA7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLWxlZnQ6IDYlO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxuICBtYXJnaW4tdG9wOiAyJTtcXG59XFxuXFxuZm9vdGVyIGRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI0ZjRmNzg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjMDAwO1xcbn1cXG5cIixcIi5wb3AtdXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAxMCU7XFxuICBsZWZ0OiAxMyU7XFxuICBib3R0b206IDEwJTtcXG4gIHdpZHRoOiA3MiU7XFxuICBoZWlnaHQ6IDY4JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDcsIDE3NCwgMTc0KTtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNSU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICB3aWR0aDogMjQlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuaW1wb3J0IGV2ZW50SGFuZGxlciBmcm9tICcuL21vZHVsZS9ldmVudEhhbmRsZXIuanMnO1xuXG5pbXBvcnQgbG9nbyBmcm9tICcuL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgZ2V0TGlrZXMgZnJvbSAnLi9tb2R1bGUvZ2V0TGlrZXMuanMnO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kdWxlL21vZGFsLmpzJztcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9tb2R1bGUvcmVuZGVyLmpzJztcbmltcG9ydCBmb3Jtc3VibWl0IGZyb20gJy4vbW9kdWxlL2Zvcm1TdWJtaXQuanMnO1xuaW1wb3J0IGl0ZW1zQ291bnRlciBmcm9tICcuL21vZHVsZS9pdGVtc0NvdW50ZXIuanMnO1xuXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2xvZ28nKTtcbmltYWdlLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7bG9nb31cIiBhbHQ9XCJcIiBjbGFzcz1cImhlYWRlcl9fbG9nby0taW1nXCI+PC9pbWc+YDtcbmNvbnN0IG1lYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzJyk7XG5cbmNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvZmlsdGVyLnBocD9jPWJlZWYnKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIG1lYWxzLmlubmVySFRNTCA9IGBNZWFscyAoJHtpdGVtc0NvdW50ZXIoZGF0YS5tZWFscyl9KWA7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgcmVuZGVyKGRhdGEubWVhbHMsIGxpa2VzKTtcbiAgZXZlbnRIYW5kbGVyKGRhdGEubWVhbHMpO1xufTtcblxuZ2V0RGF0YSgpO1xubW9kYWwoKTtcbmZvcm1zdWJtaXQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF0YTsiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsIm5lZWRMYXllciIsImNvbmNhdCIsImxlbmd0aCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhIiwiZGVkdXBlIiwic3VwcG9ydHMiLCJsYXllciIsInVuZGVmaW5lZCIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJrIiwiaWQiLCJfayIsInB1c2giLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwicnVudGltZSIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsIm9iaiIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiX2ludm9rZSIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwibmV4dCIsImRvbmUiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RFbnRyeSIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiYWNjaWRlbnRhbFN0cmljdE1vZGUiLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJjb21tZW50c0NvdW50ZXIiLCJwb3N0TGlrZXMiLCJsaWtlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnRIYW5kbGVyIiwib25jbGljayIsImUiLCJ0YXJnZXQiLCJtZWFsSWQiLCJwYXJlbnROb2RlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwicG9zdENvbW1lbnRzIiwiY29tbWVudHMxIiwiY29tbWVudEhlYWRlciIsInVuYW1lIiwiY29tbWVudHMiLCJmb3JtIiwiZm9ybXN1Ym1pdCIsIm9uc3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJIVE1MIiwiZ2V0Q29tbWVudHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJnZXRMaWtlcyIsImdldE1lYWwiLCJtZWFsSUQiLCJpdGVtc0NvdW50ZXIiLCJtYWluIiwicmVuZGVyQ29tbWVudHMiLCJtZWFsIiwibW9kYWwiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tbWVudGlkIiwic3R5bGUiLCJkaXNwbGF5IiwibWVhbHMiLCJzdHJNZWFsVGh1bWIiLCJzdHJNZWFsIiwic3RyQ2F0ZWdvcnkiLCJzdHJBcmVhIiwiY29tbWVudExpc3QiLCJjbG9zZSIsImJvZHkiLCJpdGVtX2lkIiwidXNlcm5hbWUiLCJjb21tZW50IiwiaGVhZGVycyIsInJlbmRlciIsImxpa2VzTGlzdCIsImVsIiwiaWRNZWFsIiwibGlrZXMiLCJsb2dvIiwiaW1hZ2UiLCJnZXREYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==