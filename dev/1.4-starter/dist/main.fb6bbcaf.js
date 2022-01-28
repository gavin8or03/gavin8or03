// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/lessons/ES6arrayHelpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theReduceHelper = exports.theMapHelper = exports.theForLoop = exports.theForEachLoop = exports.theFilterHelper = void 0;

// const theForLoop = () => {
//     const moods = ['Ecstatic', 'Happy', 'meh', 'Upset'];
//     for (let i = 0; i < moods.length; i++){
//         console.log("I am: ", moods[i]);
//     }
// }
//1///////////////////////////////////////////////////////// 
var theForLoop = function theForLoop() {
  var moods = ['Ecstatic', 'Happy', 'meh', 'Upset'];

  for (var i = 0; i < moods.length; i++) {
    console.log("I am: ", moods[i]);
  }
};

exports.theForLoop = theForLoop;

var theForEachLoop = function theForEachLoop() {
  var moods = ['Ecstatic', 'Happy', 'meh', 'Upset'];
  moods.forEach(function (mood) {
    return console.log(mood);
  });
};

exports.theForEachLoop = theForEachLoop;

var theMapHelper = function theMapHelper() {
  var teams = [{
    name: 'Manchester United',
    coach: 'Ole Gunnar Soklsjear',
    country: "England",
    wins: 5,
    losses: 2,
    draws: 1
  }, {
    name: 'Bayern Munich',
    coach: 'Julian Nagelsmann',
    country: "Germany",
    wins: 6,
    losses: 1,
    draws: 1
  }, {
    name: 'Orlando City',
    coach: 'Oscar Pareja',
    country: "United States of America",
    wins: 4,
    losses: 2,
    draws: 2
  }];
  var matchWinners = teams.map(function (team) {
    return team.wins += 1;
  });
  console.log({
    teams: teams
  });
  console.log({
    matchWinners: matchWinners
  });
};

exports.theMapHelper = theMapHelper;

var theFilterHelper = function theFilterHelper() {
  var teams = [{
    name: 'Manchester United',
    coach: 'Ole Gunnar Soklsjear',
    country: "England",
    wins: 5,
    losses: 2,
    draws: 1
  }, {
    name: 'Bayern Munich',
    coach: 'Julian Nagelsmann',
    country: "Germany",
    wins: 6,
    losses: 1,
    draws: 1
  }, {
    name: 'Orlando City',
    coach: 'Oscar Pareja',
    country: "United States of America",
    wins: 4,
    losses: 2,
    draws: 2
  }];
  var notUSATeams = teams.filter(function (team) {
    return team.country !== 'United States of America';
  });
  console.log({
    teams: teams
  });
  console.log({
    notUSATeams: notUSATeams
  });
};

exports.theFilterHelper = theFilterHelper;

var theReduceHelper = function theReduceHelper() {
  var matchResults = ['win', 'win', 'win', 'draw', 'loss', 'win', 'win', 'win', 'draw', 'win'];
  var seasonResults = matchResults.reduce(function (match, result) {
    match[result] = (match[result] || 0) + 1;
    return match;
  }, {});
  console.log({
    seasonResults: seasonResults
  });
};

exports.theReduceHelper = theReduceHelper;
var array1 = [1, 2, 3, 4];

var reducer = function reducer(previousValue, currentValue) {
  return previousValue + currentValue;
}; // // 1 + 2 + 3 + 4


console.log(array1.reduce(reducer)); // //expected output: 10
// // 5 + 1 + 2 + 3 + 4

console.log(array1.reduce(reducer, 5)); // expected output: 15;
},{}],"js/lessons/lesson-one.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ternaries = exports.stringTemplates = exports.spreadAndRest = exports.objectLiterals = exports.destructureArray = exports.classicStringConcatenation = void 0;

var classicStringConcatenation = function classicStringConcatenation() {
  var stringBase = 'The answer to the problem is: ';
  var initialValue = 1;

  var addition = function addition(a, b) {
    return a + b;
  };

  var result = stringBase + addition(initialValue, 5);
  console.log(result);
};

exports.classicStringConcatenation = classicStringConcatenation;

var stringTemplates = function stringTemplates() {
  var stringBase = 'The answer to the problem is:';
  var initialValue = 1;

  var addition = function addition(a, b) {
    return a + b;
  };

  console.log("".concat(stringBase).concat(addition(1, "five")));
};

exports.stringTemplates = stringTemplates;

// const stringTemplates = () => {
//     const stringBase = 'The answer to the problem is: ';
//     const initialValue = 0;
//     const additionValues = [0, 1, 2, 3, 4, 5, 6, 7];
//     const addition = (a, b) => a + b;
//     console.log(`${stringBase}${additionalValues.reduce(addition, initialValue)}`);
// }
var ternaries = function ternaries() {
  var equipment = ['ball', 'net', 'net', 'water cooler', 'flag', 'flag', 'flag', 'flag'];
  var equipmentCheck = equipment.reduce[(function (item, result) {
    item[result] = [item[result] || 0] + 1;
    return item;
    console.log[equipmentCheck.ball >= 1 ? "We have a ball" : "We need a ball"], console.log[equipmentCheck.net >= 2 ? "We have enough nets" : "We need more nets"];
    console.log[equipmentCheck.net >= 2 ? "We have ".concat(equipmentCheck.nets, "nets") : "We need more nets"];
  }, // console.log[equipmentCheck.ball === 1 ? `We have ${equipmentCheck.ball}ball`: "We need a ball"],   
  {})];
}; // const ternaries = () => {
//     const equipment = ['ball', 'net', 'net', 'water cooler', 'flag', 'flag', 'flag', 'flag'];
//     console.log[equipmentCheck.ball >= 1 ? `We have ${equipmentCheck.ball}ball`: "We need a ball"];
//     console.log[equipmentCheck.net >= 2 ? `We have ${equipmentCheck.nets}nets` : "We need more nets"];
// }


exports.ternaries = ternaries;

var objectLiterals = function objectLiterals() {
  var createGreetingCard = function createGreetingCard(nameTo, nameFrom, opening, closing, massage) {
    {
      nameTo, nameFrom, opening, closing, massage;
    }
  };

  var newGreeting = createGreetingCard("Ember", "Woody", "Dear", "Love", "You're my favorite Deputy");
  console.log(newGreeting); // console.log(newGreeting.nameTo);
};

exports.objectLiterals = objectLiterals;

var spreadAndRest = function spreadAndRest() {
  var stringBase = 'The answer to the problem is: ';
  var initialValue = 0;

  var addition = function addition() {
    for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
      numbers[_key] = arguments[_key];
    }

    return numbers.reduce(reducer, initialValue);
  };

  var result = stringBase + addition(1, 2, 3, 4, 5, 6, 100, 200, 300, 500);
  console.log(result);
}; // export {
//     //     classicStringConcatenation,
//     //     stringTemplates,
//     //     ternaries,
//     objectLiterals,
//     // spreadAndRest
// }


exports.spreadAndRest = spreadAndRest;
var listOfNumbers = [1, 2, 3, 4, 5, 6, 100, 200, 300, 500];
var copyOfListOfNumbers = [].concat(listOfNumbers);
console.log({
  listOfNumbers: listOfNumbers
});
console.log({
  copyOfListOfNumbers: copyOfListOfNumbers
});

var destructureArray = function destructureArray() {
  var manufacturers = ['Ford', 'BMW', 'KIA', 'Dodge', 'Mercedes', 'Lincoln', 'Audi'];
  var manufacturer = manufacturers[0],
      more = manufacturers.slice(1);
  console.log(manufacturer);
  console.log(more);
  console.log("".concat(manufacturer, " and ").concat(more.length, " more manufacturers"));
};

exports.destructureArray = destructureArray;
},{}],"js/main.js":[function(require,module,exports) {
"use strict";

var _ES6arrayHelpers = require("./lessons/ES6arrayHelpers");

var _lessonOne = require("./lessons/lesson-one");

// import color from './modules/demo.js';
// import {
//     soda,
//     candy
// } from "./modules/demo2.js";
// console.log({ color });
// console.log({ candy });
(0, _ES6arrayHelpers.theForLoop)();
(0, _ES6arrayHelpers.theForEachLoop)();
(0, _ES6arrayHelpers.theMapHelper)();
(0, _ES6arrayHelpers.theFilterHelper)();
(0, _ES6arrayHelpers.theReduceHelper)();
(0, _lessonOne.classicStringConcatenation)();
(0, _lessonOne.stringTemplates)();
(0, _lessonOne.ternaries)();
(0, _lessonOne.objectLiterals)();
(0, _lessonOne.spreadAndRest)();
(0, _lessonOne.destructureArray)();
},{"./lessons/ES6arrayHelpers":"js/lessons/ES6arrayHelpers.js","./lessons/lesson-one":"js/lessons/lesson-one.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56332" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map