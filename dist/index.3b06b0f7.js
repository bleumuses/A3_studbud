// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2xDT7":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4d0423473b06b0f7";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2OD7o":[function(require,module,exports) {
//import './components/acronyms-column';
var _tasklist = require("./components/tasklist");
var _kanbanColumn = require("./components/kanban-column");
var _watch = require("./components/watch");

},{"./components/tasklist":"5i9SJ","./components/kanban-column":"99hOK","./components/watch":"2sNIP"}],"5i9SJ":[function(require,module,exports) {
// Task list and task form
// Adapted from 
// Dongas, R. (2022). Modular-WebApp-Demo [Source Code]. Replit. https://replit.com/@robdongas/Modular-WebApp-Demo
//Basic task form DOM elements
const taskModal = document.getElementById('taskform-modal-container');
const taskform = document.getElementById('taskform');
const addTaskButton = document.getElementById('addNewTask');
const closeTaskButton = document.getElementById('closeTaskForm');
const tasklist = document.querySelector('.container');
// DOM elements for the task input fields
var taskInput = document.getElementById('taskInput');
var taskDescriptionInput = document.getElementById('taskDescriptionInput');
var dueDateInput = document.getElementById('dueDateInput');
var estimatedTimeInput = document.getElementById('estimatedTimeInput');
var priorityInput = document.getElementById('priorityInput');
var subjectInput = document.getElementById('subjectInput');
// Task form opening event listener
addTaskButton.addEventListener('click', ()=>{
    taskModal.classList.add('show');
});
// Task form closing event listener
closeTaskButton.addEventListener('click', ()=>{
    taskModal.classList.remove('show');
});
// Task form submission event listener
taskform.addEventListener("submit", function(event) {
    event.preventDefault();
    let task = taskInput.value;
    let taskDescription = taskDescriptionInput.value;
    let dueDate = dueDateInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityInput.options[priorityInput.selectedIndex].value;
    let subjectName = subjectInput.value;
    if (task) addTask(task, taskDescription, dueDate, estimatedTime, priorityRating, false, subjectName);
    taskModal.classList.remove('show');
});
// Attempt to record the colour user has selected to set the task header's colour (inspired by Wetton, K. (2019). Dynamic Colour Picking - Part 3 [Source Code]. Codepen. https://codepen.io/kylewetton/pen/bGbobMa?editors=1111)
// Able to get the colour but failed to set the colour (see more below)
// const colorButton = document.querySelectorAll('.color');
// colorButton.forEach(color => {
//     color.addEventListener('click', () => {
//         let colorNameClass = color.className;
//         console.log(colorNameClass);
//         resetActiveButton();
//         color.classList.add('active-color');
//     })
// })
// Create global array to track tasks
var taskListArray = [];
// Function to add task with user inputs as parameters
function addTask(taskTitle, taskDescription, dueDate, estimatedTime, priorityRating, completionStatus, subjectName) {
    let dateCreated = new Date().toLocaleDateString('en-US');
    let task = {
        id: Date.now(),
        taskTitle,
        taskDescription,
        dueDate,
        dateCreated,
        estimatedTime,
        priorityRating,
        estimatedTime,
        completionStatus,
        subjectName
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}
// Function to display task on screen
function renderTask(task1) {
    // Task card container
    let card = document.createElement('div');
    card.classList.add('draggable');
    card.setAttribute('id', task1.id);
    card.setAttribute('draggable', 'true');
    // Card header
    let heading = document.createElement('div');
    heading.setAttribute('id', 'card-header');
    let subject = document.createElement('div');
    subject.innerHTML = "<p><b>Subject: </b>" + task1.subjectName + '</p>';
    subject.setAttribute('contenteditable', 'true');
    let taskTitle = document.createElement('h2');
    taskTitle.textContent = task1.taskTitle;
    taskTitle.setAttribute('contenteditable', 'true');
    let priority = document.createElement('p');
    priority.textContent = task1.priorityRating;
    priority.setAttribute('contenteditable', 'true');
    priority.setAttribute('id', 'priority');
    let delCard = document.createElement('span');
    let delCardText = document.createTextNode('\u00d7');
    delCard.classList.add('deleteCard');
    delCard.appendChild(delCardText);
    let description = document.createElement('div');
    description.innerHTML = "<p><b>Description: </b>" + task1.taskDescription + '</p>';
    description.setAttribute('contenteditable', 'true');
    // Append card's heading elements to card header
    heading.appendChild(priority);
    heading.appendChild(delCard);
    heading.appendChild(taskTitle);
    heading.appendChild(subject);
    heading.appendChild(description);
    // Card content
    let content = document.createElement('div');
    content.setAttribute('id', 'card-content');
    let due = document.createElement('div');
    due.innerHTML = "<p><b>Due: </b>" + task1.dueDate + '</p>';
    due.setAttribute('contenteditable', 'true');
    let time = document.createElement('p');
    time.textContent = task1.estimatedTime;
    due.setAttribute('contenteditable', 'true');
    let min = document.createTextNode(' mins');
    time.appendChild(min);
    // Append card's content elements to card content
    content.appendChild(due);
    content.appendChild(time);
    // Append heading and content to card
    card.appendChild(heading);
    card.appendChild(content);
    // Add card to task list
    tasklist.appendChild(card);
    // Delete task card when user clicks delete button 
    delCard.addEventListener('click', ()=>{
        const check = confirm('Are you sure you want to delete this card?');
        let id = event.target.parentElement.getAttribute('data-id');
        let index = taskListArray.findIndex((task)=>task.id === Number(id)
        );
        if (check) {
            removeItemFromArray(taskListArray, index);
            console.log(taskListArray);
            card.remove();
        }
    });
    // Function to allow cards to be dragged and dropped between columns
    // Adapted from 
    // WebDevSimplified. (n.d.). Drag and Drop [Source Code]. Codepen. https://codepen.io/WebDevSimplified/pen/JjdveeV
    const draggables = document.querySelectorAll('.draggable');
    // Add 'dragging' class to provide feedback when the user starts dragging card
    draggables.forEach((draggable)=>{
        draggable.addEventListener('dragstart', ()=>{
            draggable.classList.add('dragging');
        });
        // Remove 'dragging' class to provide feedback when the user stops dragging card
        draggable.addEventListener('dragend', ()=>{
            draggable.classList.remove('dragging');
        });
    });
    // Attempt to set task heading colour when user chooses a colour from the 'add new task' form but failed
    // let headerColor = document.querySelector('.active-color')
    // setNewColor(headerColor);
    // Clear the input form
    taskform.reset();
}
// Function to remove item from array
function removeItemFromArray(arr, index) {
    if (index > -1) arr.splice(index, 1);
    return arr;
} // Attempt to set task heading colour when user chooses a colour from the 'add new task' form
 // function resetActiveButton() {
 //     colorButton.forEach(color => {
 //         color.classList.remove('active-color');
 //     })
 // }
 // function setNewColor (color) {
 //     document.getElementById('card-header').style.backgroundColor = color;
 // }

},{}],"99hOK":[function(require,module,exports) {
// Basic column form DOM elements
const columnModal = document.getElementById('columnform-modal-container');
const columnform = document.getElementById('columnform');
const addColumnButton = document.getElementById('addNewColumn');
const closeColumnButton = document.getElementById('closeColumnForm');
const columnList = document.querySelector('#kanban');
// DOM elements for the column input fields
var columnTitle = document.getElementById('columnTitleInput');
// Column form opening event listener
addColumnButton.addEventListener('click', ()=>{
    columnModal.classList.add('show');
});
// Column form closing event listener
closeColumnButton.addEventListener('click', ()=>{
    columnModal.classList.remove('show');
});
// Column form submission event listener
columnform.addEventListener("submit", function(event) {
    event.preventDefault();
    let column = columnTitle.value;
    if (column) addColumn(column);
    columnModal.classList.remove('show');
});
// Create global array to track columns
var columnListArray = [];
// Function to add column with user inputs as parameters
function addColumn(columnName) {
    let dateCreated = new Date().toLocaleDateString('en-US');
    let column = {
        id: Date.now(),
        columnName,
        dateCreated
    };
    columnListArray.push(column);
    console.log(columnListArray);
    renderColumn(column);
}
// Function to display column on screen
function renderColumn(column) {
    // Create Kanban column with editable title
    let kColumn = document.createElement('div');
    kColumn.setAttribute('id', 'kanban-column');
    let kColumnTitle = document.createElement('h2');
    kColumnTitle.setAttribute('contenteditable', 'true');
    kColumnTitle.textContent = column.columnName;
    let dash = document.createElement('hr');
    // Append user input into column
    kColumn.appendChild(kColumnTitle);
    kColumn.append(dash);
    // Create container to store task card
    let kColumnItem = document.createElement('div');
    kColumnItem.setAttribute('class', 'container');
    // Add container to column
    kColumn.appendChild(kColumnItem);
    // Add column to list of columns
    columnList.appendChild(kColumn);
    // Allow new Kanban column to contain draggable cards when dragged over         
    // Adapted from
    //WebDevSimplified. (n.d.). Drag and Drop [Source Code]. Codepen. https://codepen.io/WebDevSimplified/pen/JjdveeV
    const containers1 = document.querySelectorAll('.container');
    containers1.forEach((container)=>{
        container.addEventListener('dragover', (e)=>{
            e.preventDefault();
            // Call getDragAfterElement function to pass in the current container that the user is in and their mouse y-position
            const afterElement = getDragAfterElement(container, e.clientY);
            // Select the only card that is currently being dragged
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) // Append card to end of container if there is nothing above
            container.appendChild(draggable);
            else // Determine which card the dragging card would be inserted before
            container.insertBefore(draggable, afterElement);
        });
    });
    columnform.reset();
}
// Allow existing Kanban column to contain draggable cards when dragged over
// Adapted from 
// WebDevSimplified. (n.d.). Drag and Drop [Source Code]. Codepen. https://codepen.io/WebDevSimplified/pen/JjdveeV
const containers = document.querySelectorAll('.container');
containers.forEach((container)=>{
    container.addEventListener('dragover', (e)=>{
        e.preventDefault();
        // Call getDragAfterElement function to pass in the current container that the user is in and their mouse y-position
        const afterElement = getDragAfterElement(container, e.clientY);
        // Select the only card that is currently being dragged
        const draggable = document.querySelector('.dragging');
        if (afterElement == null) // Append card to end of container if there is nothing above
        container.appendChild(draggable);
        else // Determine which card the dragging card would be inserted before
        container.insertBefore(draggable, afterElement);
    });
});
// Function to determine the user's mouse y-position to return whichever card the mouse is directly after  
function getDragAfterElement(container, y) {
    // Array of all cards within the container, excluding the card that the user is currently dragging
    const draggableElements = [
        ...container.querySelectorAll('.draggable:not(.dragging)')
    ];
    // Loop through the array of cards within the container to return the closest card child that is directly after the user's mouse y-position which was passed in through the function
    return draggableElements.reduce((closest, child)=>{
        // Create bounding box around the children inside the array
        const box = child.getBoundingClientRect();
        // Find distance between the centre of the bounding box and the user's cursor
        const offset = y - (box.top + box.height / 2);
        // If offset is negative, cursor is above the card. If offset is positive, cursor is below the card.
        // Get card that has negative offset but closest to 0 
        if (offset < 0 && offset > closest.offset) // Return an object with the new closest element and its child
        return {
            offset: offset,
            element: child
        };
        else return closest;
    // Initial offset is smallest number so any new offset is greater than the initial one
    }, {
        offset: Number.NEGATIVE_INFINITY
    }).element;
}

},{}]},["2xDT7","2OD7o"], "2OD7o", "parcelRequire60da")

//# sourceMappingURL=index.3b06b0f7.js.map
