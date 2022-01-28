// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({20:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// const Tabbies = () => {
//     console.log("Tabbies file");
// }
// export default Tabbies;

const Tabbies = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabList = document.getElementById('tablist');
    const tabsPanels = document.getElementById('tabPanel');

    // Add a click event handler to each tab
    tabs.forEach(tab => {
      tab.addEventListener("click", changeTabs);
    });

    let tabFocus = 0;

    tabList.addEventListener("keydown", e => {
      // Watch for which keys are pressed
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        tabs[tabFocus].setAttribute("tabindex", -1);

        // Move Right
        if (e.key === 'ArrowRight') {
          tabFocus++;
          console.log("Right");

          if (tabFocus >= tabs.length) {
            tabFocus = 0;
          }

          // Move left
        } else if (e.key === 'ArrowLeft') {
          tabFocus--;
          console.log("Left");
          // If we're at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
          }
        }
      }
      tabsPanels.children[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    });
  });

  function changeTabs(e) {
    console.log("Change Tab");
    const target = e.target;
    const parent = target.parentNode;
    const tabsPanels = document.querySelector('[aria-label="Panels"]');

    // Remove all current selected tabs
    parent.querySelectorAll('[aria-selected="true"]').forEach(tabButton => tabButton.setAttribute("aria-selected", false));

    // Set this tab as selected
    target.setAttribute("aria-selected", true);

    // Hide all tab panels
    tabsPanels.querySelectorAll('[role="tabpanel"]').forEach(panel => panel.setAttribute("hidden", true));

    // Show the selected panel
    tabsPanels.querySelector(`#${target.getAttribute("aria-controls")}`).removeAttribute("hidden");
  }
};

exports.default = Tabbies;
},{}],21:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const NFT = () => {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("FROM NFT FILE");

    const bodyMain = document.querySelector(`body>div>main`);
    const newElementContainer = document.createElement(`ul`);

    const testObject = createNFT('name', 12, 'this collection', 'imgsrc', 'ownername', 1234, 5678, 910, 11, 12);

    console.log(testObject);

    // Create card from our template
    const newNFT = createDomNFT(testObject);

    // Create a <li> child of the <ul> we made above
    const newElement = document.createElement(`li`);

    // Add our card as the HTML within the newly created <li>
    newElement.innerHTML = newNFT;

    // Add the <li> to the DOM within the <ul>
    newElementContainer.appendChild(newElement);
  });

  const createNFT = (name, id, collection, img, owner, price, views, favorites, offers, history) => ({
    name,
    id,
    collection,
    img,
    owner,
    price,
    views,
    favorites,
    offers,
    history
  });

  //One way to do it
  // const createDomNFT = (nft) => {
  //     const newElement = createNFT(nft.name, nft.id, nft.collection, nft.img, nft.owner, nft.price, nft.views, nft.favorites, nft.offers, nft.offers, nft.history);

  //     return `<article data-nft-id="${newElement.id}">
  //         <header>
  //             <h4>${newElement.name}</h4>
  //             <h5>Collection: ${newElement.collection}</h5>
  //             <img src="${newElement.img}" alt="${newElement.name} from ${newElement.owner} in the ${newElement.collection} collection"/>
  //         </header>
  //         <ul>
  //             <li>Owner:${newElement}</li>
  //             <li>${newElement.owner}</li>
  //             <li>${newElement.price}</li>
  //             <li>${newElement.views}</li>
  //             <li>${newElement.favorites}</li>
  //             <li>${newElement.offers}</li>
  //             <li>${newElement.history}</li>
  //         </ul>
  //     </article>`
  // }

  // // Preferred way to do it
  const createDomNFT = nft => {
    const {
      name,
      id,
      collection,
      img,
      owner,
      price,
      views,
      favorites,
      offers,
      history } = createNFT(nft.name, nft.id, nft.collection, nft.img, nft.owner, nft.price, nft.views, nft.favorites, nft.offers, nft.history);

    return `<article data-nft-id="${id}">
        <header>
            <h4>${name}</h4>
            <h5>Collection:${collection}</h5>
            <img src="${img}" alt="${name} from ${owner} in the ${collection} collection"/>
        </header>
        <ul>
            <li>Owner:${owner}</li>
            <li>Price:${price}</li>
            <li>Views:${views}</li>
            <li>Favorites:${favorites}</li>
            <li>Offers:${offers}</li>
            <li>History:${history}</li>
        </ul>
    </article>`;
  };
};

exports.default = NFT;
},{}],9:[function(require,module,exports) {
"use strict";

var _tabbies = require("./lessons/tabbies");

var _tabbies2 = _interopRequireDefault(_tabbies);

var _nft = require("./lessons/nft");

var _nft2 = _interopRequireDefault(_nft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const assignment = document.querySelector('body').getAttribute('data-assignment');

switch (assignment) {

  case 'tabbies':
    (0, _tabbies2.default)();
    console.log("Tabbies Lesson");
    break;
  case 'nft':
    (0, _nft2.default)();
    console.log("NFT Lesson");
    break;
  case 'api':
    console.log("API Lesson");
    break;
  default:
    console.log("No Lesson");
}
},{"./lessons/tabbies":20,"./lessons/nft":21}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:59609/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
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
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,9])