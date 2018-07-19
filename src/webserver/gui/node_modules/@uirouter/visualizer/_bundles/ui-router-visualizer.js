(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@uirouter/visualizer", [], factory);
	else if(typeof exports === 'object')
		exports["@uirouter/visualizer"] = factory();
	else
		root["@uirouter/visualizer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_bundles/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/** Virtual DOM Node */
function VNode() {}

/** Global options
 *	@public
 *	@namespace options {Object}
 */
var options = {

	/** If `true`, `prop` changes trigger synchronous component updates.
  *	@name syncComponentUpdates
  *	@type Boolean
  *	@default true
  */
	//syncComponentUpdates: true,

	/** Processes all created VNodes.
  *	@param {VNode} vnode	A newly-created VNode to normalize/process
  */
	//vnode(vnode) { }

	/** Hook invoked after a component is mounted. */
	// afterMount(component) { }

	/** Hook invoked after the DOM is updated with a component's latest render. */
	// afterUpdate(component) { }

	/** Hook invoked immediately before a component is unmounted. */
	// beforeUnmount(component) { }
};

var stack = [];

var EMPTY_CHILDREN = [];

/** JSX/hyperscript reviver
*	Benchmarks: https://esbench.com/bench/57ee8f8e330ab09900a1a1a0
 *	@see http://jasonformat.com/wtf-is-jsx
 *	@public
 */
function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	// if a "vnode hook" is defined, pass every created VNode to it
	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */
function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

/** Call a function asynchronously, as soon as possible.
 *	@param {Function} callback
 */
var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
	return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

// DOM properties that should NOT have "px" added when numeric
var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

/** Managed queue of dirty components to be re-rendered */

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

/** Check if two nodes are equivalent.
 *	@param {Element} node
 *	@param {VNode} vnode
 *	@private
 */
function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

/** Check if an Element has a given normalized name.
*	@param {Element} node
*	@param {String} nodeName
 */
function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 * @param {VNode} vnode
 * @returns {Object} props
 */
function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

/** Create an element with the given nodeName.
 *	@param {String} nodeName
 *	@param {Boolean} [isSvg=false]	If `true`, creates an element within the SVG namespace.
 *	@returns {Element} node
 */
function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

/** Remove a child node from its parent if attached.
 *	@param {Element} node		The node to remove
 */
function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

/** Set a named attribute on the given Node, with special behavior for some names and event handlers.
 *	If `value` is `null`, the attribute/handler will be removed.
 *	@param {Element} node	An element to mutate
 *	@param {string} name	The name/key to set, such as an event or attribute name
 *	@param {any} old	The last value that was set for this name/node pair
 *	@param {any} value	An attribute value, such as a function to be used as an event handler
 *	@param {Boolean} isSvg	Are we currently diffing inside an svg?
 *	@private
 */
function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {
		// ignore
	} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		setProperty(node, name, value == null ? '' : value);
		if (value == null || value === false) node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink\:?/, ''));
		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

/** Attempt to set a DOM property to the given value.
 *	IE & FF throw for certain property-value combinations.
 */
function setProperty(node, name, value) {
	try {
		node[name] = value;
	} catch (e) {}
}

/** Proxy an event to hooked event handlers
 *	@private
 */
function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

/** Queue of components that have been mounted and are awaiting componentDidMount */
var mounts = [];

/** Diff recursion count, used to track the end of the diff cycle. */
var diffLevel = 0;

/** Global flag indicating if the diff is currently within an SVG */
var isSvgMode = false;

/** Global flag indicating if the diff is performing hydration */
var hydrating = false;

/** Invoke queued componentDidMount lifecycle methods */
function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

/** Apply differences in a given vnode (and it's deep children) to a real DOM Node.
 *	@param {Element} [dom=null]		A DOM node to mutate into the shape of the `vnode`
 *	@param {VNode} vnode			A VNode (with descendants forming a tree) representing the desired DOM structure
 *	@returns {Element} dom			The created/mutated element
 *	@private
 */
function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	// diffLevel having been 0 here indicates initial entry into the diff (not a subdiff)
	if (!diffLevel++) {
		// when first starting the diff, check if we're diffing an SVG or within an SVG
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		// hydration is indicated by the existing element to be diffed not having a prop cache
		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	// append the element if its a new parent
	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	// diffLevel being reduced to 0 means we're exiting the diff
	if (! --diffLevel) {
		hydrating = false;
		// invoke queued componentDidMount lifecycle methods
		if (!componentRoot) flushMounts();
	}

	return ret;
}

/** Internals of `diff()`, separated to allow bypassing diffLevel / mount flushing. */
function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	// empty values (null, undefined, booleans) render as empty Text nodes
	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	// Fast case: Strings & Numbers create/update Text nodes.
	if (typeof vnode === 'string' || typeof vnode === 'number') {

		// update if it's already a Text node:
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			/* istanbul ignore if */ /* Browser quirk that can't be covered: https://github.com/developit/preact/commit/fd4f21f5c45dfd75151bd27b4c217d8003aa5eb9 */
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			// it wasn't a Text node: replace it with one and recycle the old Element
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	// If the VNode represents a Component, perform a component diff:
	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	// Tracks entering and exiting SVG namespace when descending through the tree.
	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	// If there's no existing element or it's the wrong type, create a new one:
	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			// move children into the replacement node
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			} // if the previous Element was mounted into the DOM, replace it inline
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			// recycle the old element (skips non-Element node types)
			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	// Optimization: fast-path for elements containing a single TextNode:
	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	}
	// otherwise, if there are existing or new children, diff them:
	else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	// Apply attributes/props from VNode to the DOM Element:
	diffAttributes(out, vnode.attributes, props);

	// restore previous SVG mode: (in case we're exiting an SVG namespace)
	isSvgMode = prevSvgMode;

	return out;
}

/** Apply child and attribute changes between a VNode and a DOM Node to the DOM.
 *	@param {Element} dom			Element whose children should be compared & mutated
 *	@param {Array} vchildren		Array of VNodes to compare to `dom.childNodes`
 *	@param {Object} context			Implicitly descendant context object (from most recent `getChildContext()`)
 *	@param {Boolean} mountAll
 *	@param {Boolean} isHydrating	If `true`, consumes externally created elements similar to hydration
 */
function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	// Build up a map of keyed children and an Array of unkeyed children:
	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			// attempt to find a node based on key matching
			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			}
			// attempt to pluck a node of the same type from the existing children
			else if (!child && min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			// morph the matched/found/created DOM child to match vchild (deep)
			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	// remove unused keyed children:
	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	// remove orphaned unkeyed children:
	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

/** Recursively recycle (or just unmount) a node and its descendants.
 *	@param {Node} node						DOM node to start unmount/removal from
 *	@param {Boolean} [unmountOnly=false]	If `true`, only triggers unmount lifecycle, skips removal
 */
function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		// if node is owned by a Component, unmount that component (ends up recursing back here)
		unmountComponent(component);
	} else {
		// If the node's VNode had a ref function, invoke it with null here.
		// (this is part of the React spec, and smart for unsetting references)
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

/** Recollect/unmount all children.
 *	- we use .lastChild here because it causes less reflow than .firstChild
 *	- it's also cheaper than accessing the .childNodes Live NodeList
 */
function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

/** Apply differences in attributes from a VNode to the given DOM Element.
 *	@param {Element} dom		Element with attributes to diff `attrs` against
 *	@param {Object} attrs		The desired end-state key-value attribute pairs
 *	@param {Object} old			Current/previous attributes (from previous VNode or element's prop cache)
 */
function diffAttributes(dom, attrs, old) {
	var name;

	// remove attributes no longer present on the vnode by setting them to undefined
	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	// add new & update changed attributes
	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

/** Retains a pool of Components for re-use, keyed on component name.
 *	Note: since component names are not unique or even necessarily available, these are primarily a form of sharding.
 *	@private
 */
var components = {};

/** Reclaim a component for later re-use by the recycler. */
function collectComponent(component) {
	var name = component.constructor.name;
	(components[name] || (components[name] = [])).push(component);
}

/** Create a component. Normalizes differences between PFC's and classful Components. */
function createComponent(Ctor, props, context) {
	var list = components[Ctor.name],
	    inst;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	if (list) {
		for (var i = list.length; i--;) {
			if (list[i].constructor === Ctor) {
				inst.nextBase = list[i].nextBase;
				list.splice(i, 1);
				break;
			}
		}
	}
	return inst;
}

/** The `.render()` method for a PFC backing instance. */
function doRender(props, state, context) {
	return this.constructor(props, context);
}

/** Set a component's `props` (generally derived from JSX attributes).
 *	@param {Object} props
 *	@param {Object} [opts]
 *	@param {boolean} [opts.renderSync=false]	If `true` and {@link options.syncComponentUpdates} is `true`, triggers synchronous rendering.
 *	@param {boolean} [opts.render=true]			If `false`, no render will be triggered.
 */
function setComponentProps(component, props, opts, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	if (component.__ref = props.ref) delete props.ref;
	if (component.__key = props.key) delete props.key;

	if (!component.base || mountAll) {
		if (component.componentWillMount) component.componentWillMount();
	} else if (component.componentWillReceiveProps) {
		component.componentWillReceiveProps(props, context);
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (opts !== 0) {
		if (opts === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

/** Render a Component, triggering necessary lifecycle events and taking High-Order Components into account.
 *	@param {Component} component
 *	@param {Object} [opts]
 *	@param {boolean} [opts.build=false]		If `true`, component will build and store a DOM node if not already associated with one.
 *	@private
 */
function renderComponent(component, opts, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    rendered,
	    inst,
	    cbase;

	// if updating
	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (opts !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		// context to pass to the child, can be updated via (grand-)parent component
		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {
			// set up high order component link

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			// destroy high order component link
			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || opts === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {
		// Ensure that pending componentDidMount() hooks of child components
		// are called before the componentDidUpdate() hook in the parent.
		// Note: disabled as it causes duplicate hooks, see https://github.com/developit/preact/issues/750
		// flushMounts();

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, previousContext);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	if (component._renderCallbacks != null) {
		while (component._renderCallbacks.length) {
			component._renderCallbacks.pop().call(component);
		}
	}

	if (!diffLevel && !isChild) flushMounts();
}

/** Apply the Component referenced by a VNode to the DOM.
 *	@param {Element} dom	The DOM node to mutate
 *	@param {VNode} vnode	A Component-referencing VNode
 *	@returns {Element} dom	The created/mutated element
 *	@private
 */
function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;
			// passing dom/oldDom as nextBase will recycle it if unused, so bypass recycling on L229:
			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

/** Remove a component from the DOM and recycle it.
 *	@param {Component} component	The Component instance to unmount
 *	@private
 */
function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	// recursively tear down & recollect high-order component children:
	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		collectComponent(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

/** Base Component class.
 *	Provides `setState()` and `forceUpdate()`, which trigger rendering.
 *	@public
 *
 *	@example
 *	class MyFoo extends Component {
 *		render(props, state) {
 *			return <div />;
 *		}
 *	}
 */
function Component(props, context) {
	this._dirty = true;

	/** @public
  *	@type {object}
  */
	this.context = context;

	/** @public
  *	@type {object}
  */
	this.props = props;

	/** @public
  *	@type {object}
  */
	this.state = this.state || {};
}

extend(Component.prototype, {

	/** Returns a `boolean` indicating if the component should re-render when receiving the given `props` and `state`.
  *	@param {object} nextProps
  *	@param {object} nextState
  *	@param {object} nextContext
  *	@returns {Boolean} should the component re-render
  *	@name shouldComponentUpdate
  *	@function
  */

	/** Update component state by copying properties from `state` to `this.state`.
  *	@param {object} state		A hash of state properties to update with new values
  *	@param {function} callback	A function to be called once component state is updated
  */
	setState: function setState(state, callback) {
		var s = this.state;
		if (!this.prevState) this.prevState = extend({}, s);
		extend(s, typeof state === 'function' ? state(s, this.props) : state);
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		enqueueRender(this);
	},


	/** Immediately perform a synchronous re-render of the component.
  *	@param {function} callback		A function to be called after component is re-rendered.
  *	@private
  */
	forceUpdate: function forceUpdate(callback) {
		if (callback) (this._renderCallbacks = this._renderCallbacks || []).push(callback);
		renderComponent(this, 2);
	},


	/** Accepts `props` and `state`, and returns a new Virtual DOM tree to build.
  *	Virtual DOM is generally constructed via [JSX](http://jasonformat.com/wtf-is-jsx).
  *	@param {object} props		Props (eg: JSX attributes) received from parent element/component
  *	@param {object} state		The component's current state
  *	@param {object} context		Context object (if a parent component has provided context)
  *	@returns VNode
  */
	render: function render() {}
});

/** Render JSX into a `parent` Element.
 *	@param {VNode} vnode		A (JSX) VNode to render
 *	@param {Element} parent		DOM element to render into
 *	@param {Element} [merge]	Attempt to re-use an existing DOM tree rooted at `merge`
 *	@public
 *
 *	@example
 *	// render a div into <body>:
 *	render(<div id="hello">hello!</div>, document.body);
 *
 *	@example
 *	// render a "Thing" component into #foo:
 *	const Thing = ({ name }) => <span>{ name }</span>;
 *	render(<Thing name="one" />, document.querySelector('#foo'));
 */
function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};


/* harmony default export */ __webpack_exports__["default"] = (preact);
//# sourceMappingURL=preact.esm.js.map


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(42);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(43);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(23);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */
exports.easing = {
    // time, begin, change, duration
    easeInOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInOutCubic: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInOutQuart: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInOutQuint: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInOutSine: function (t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInOutExpo: function (t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInOutCirc: function (t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInOutBack: function (t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(23);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(9);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var d3_hierarchy_1 = __webpack_require__(54);
exports.RENDERER_PRESETS = {
    "Tree": { layoutFn: TREE_LAYOUT, sortNodesFn: TOP_TO_BOTTOM_SORT, labelRenderFn: SLANTED_TEXT, edgeRenderFn: TREE_EDGE },
    "Cluster": { layoutFn: CLUSTER_LAYOUT, sortNodesFn: TOP_TO_BOTTOM_SORT, labelRenderFn: SLANTED_TEXT, edgeRenderFn: TREE_EDGE },
    "Radial": { layoutFn: RADIAL_LAYOUT, sortNodesFn: BOTTOM_TO_TOP_SORT, labelRenderFn: RADIAL_TEXT, edgeRenderFn: RADIAL_EDGE },
};
var tree = exports.RENDERER_PRESETS.Tree;
exports.DEFAULT_RENDERER = {
    baseRadius: 10,
    baseFontSize: 12,
    baseStrokeWidth: 2,
    baseNodeStrokeWidth: 2,
    zoom: 1.0,
    layoutFn: tree.layoutFn,
    sortNodesFn: tree.sortNodesFn,
    labelRenderFn: tree.labelRenderFn,
    edgeRenderFn: tree.edgeRenderFn,
};
///////////////////////////////////////////
// NODE RENDER ORDER
///////////////////////////////////////////
function BOTTOM_TO_TOP_SORT(a, b) {
    var b2t = b.layoutY - a.layoutY; // bottom to top
    if (b2t !== 0)
        return b2t;
    var l2r = a.layoutX - b.layoutX; // left to right
    return l2r;
}
exports.BOTTOM_TO_TOP_SORT = BOTTOM_TO_TOP_SORT;
function TOP_TO_BOTTOM_SORT(a, b) {
    var t2b = a.layoutY - b.layoutY; // top to bottom
    if (t2b !== 0)
        return t2b;
    var l2r = a.layoutX - b.layoutX; // left to right
    return l2r;
}
exports.TOP_TO_BOTTOM_SORT = TOP_TO_BOTTOM_SORT;
///////////////////////////////////////////
// LAYOUTS
///////////////////////////////////////////
function TREE_LAYOUT(rootNode) {
    var root = d3_hierarchy_1.hierarchy(rootNode);
    var tree = d3_hierarchy_1.tree();
    return updateNodes(tree(root));
}
exports.TREE_LAYOUT = TREE_LAYOUT;
function CLUSTER_LAYOUT(rootNode) {
    var root = d3_hierarchy_1.hierarchy(rootNode);
    var tree = d3_hierarchy_1.cluster();
    return updateNodes(tree(root));
}
exports.CLUSTER_LAYOUT = CLUSTER_LAYOUT;
/** For RADIAL_LAYOUT: projects x/y coords from a cluster layout to circular layout */
function project(x, y) {
    var angle = (x - 90) / 180 * Math.PI, radius = y;
    var CENTER = 0.5;
    return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
}
function RADIAL_LAYOUT(rootNode) {
    var root = d3_hierarchy_1.hierarchy(rootNode);
    var layout = d3_hierarchy_1.cluster()
        .size([360, 0.4])
        .separation(function (a, b) {
        return (a.parent == b.parent ? 1 : 2) / a.depth;
    });
    var nodes = layout(root);
    nodes.each(function (node) {
        var projected = project(node.x, node.y);
        var visNode = node.data;
        visNode.layoutX = node.x;
        visNode.layoutY = node.y;
        visNode.x = projected.x;
        visNode.y = projected.y;
    });
}
exports.RADIAL_LAYOUT = RADIAL_LAYOUT;
/** Mutates each StateVisNode by copying the new x/y values from the d3 HierarchyPointNode structure */
function updateNodes(nodes) {
    nodes.each(function (node) {
        node.data.layoutX = node.data.x = node.x;
        node.data.layoutY = node.data.y = node.y;
    });
    return nodes;
}
///////////////////////////////////////////
// STATE NAME LABEL
///////////////////////////////////////////
function RADIAL_TEXT(x, y, node, renderer) {
    var baseFontSize = renderer.baseFontSize, zoom = renderer.zoom;
    var fontSize = baseFontSize * zoom;
    var segments = node.name.split(".");
    var name = segments.pop();
    if (name == '**')
        name = segments.pop() + ".**";
    var angle = node.layoutX || 0;
    var textAnchor = (angle < 180 === !!node.children) ? "start" : "end";
    var rotation = (angle < 180 ? angle - 90 : angle + 90);
    var translation = (textAnchor === "start" ? 15 : -15) * zoom;
    var transform = "rotate(" + rotation + "),translate(" + translation + ", 0)";
    return (preact_1.h("text", { className: "name", "text-anchor": textAnchor, transform: transform, "font-size": fontSize },
        " ",
        name,
        " "));
}
exports.RADIAL_TEXT = RADIAL_TEXT;
function SLANTED_TEXT(x, y, node, renderer) {
    var baseRadius = renderer.baseRadius, baseFontSize = renderer.baseFontSize, baseStrokeWidth = renderer.baseStrokeWidth, baseNodeStrokeWidth = renderer.baseNodeStrokeWidth, zoom = renderer.zoom;
    var r = baseRadius * zoom;
    var fontSize = baseFontSize * zoom;
    var segments = node.name.split(".");
    var name = segments.pop();
    if (name == '**')
        name = segments.pop() + ".**";
    var transform = "rotate(-15),translate(0, " + -15 * zoom + ")";
    return (preact_1.h("text", { className: "name", "text-anchor": "middle", transform: transform, "font-size": fontSize },
        " ",
        name,
        " "));
}
exports.SLANTED_TEXT = SLANTED_TEXT;
///////////////////////////////////////////
// GRAPH EDGES
///////////////////////////////////////////
/** Straight line */
function RADIAL_EDGE(node, renderer) {
    var strokeWidth = renderer.baseStrokeWidth * renderer.zoom;
    var makeLinkPath = function (node) {
        var s = { x: node.animX, y: node.animY }; // statevisnode
        var p = { x: node._parent.animX, y: node._parent.animY }; // parent
        return "M" + [s.x, s.y]
            // + "C"  + [s.x, (s.y + p.y) / 2.5]
            // + " "  + [p.x, (s.y + p.y) / 2.5]
            + " " + [p.x, p.y];
    };
    return preact_1.h("path", { d: makeLinkPath(node), "stroke-width": strokeWidth, className: 'link' });
}
exports.RADIAL_EDGE = RADIAL_EDGE;
/** Bezier curve */
function TREE_EDGE(node, renderer) {
    var strokeWidth = renderer.baseStrokeWidth * renderer.zoom;
    var makeLinkPath = function (node) {
        var s = { x: node.animX, y: node.animY }; // statevisnode
        var p = { x: node._parent.animX, y: node._parent.animY }; // parent
        var yAvg = (s.y + p.y) / 2;
        return "M " + s.x + " " + s.y + " C " + s.x + " " + yAvg + ", " + p.x + " " + yAvg + ", " + p.x + " " + p.y;
    };
    return preact_1.h("path", { d: makeLinkPath(node), "stroke-width": strokeWidth, className: 'link' });
}
exports.TREE_EDGE = TREE_EDGE;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hierarchy;
/* harmony export (immutable) */ __webpack_exports__["b"] = computeHeight;
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__count__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__each__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eachBefore__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eachAfter__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sum__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sort__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ancestors__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__descendants__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__leaves__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__links__ = __webpack_require__(66);












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: __WEBPACK_IMPORTED_MODULE_0__count__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_1__each__["a" /* default */],
  eachAfter: __WEBPACK_IMPORTED_MODULE_3__eachAfter__["a" /* default */],
  eachBefore: __WEBPACK_IMPORTED_MODULE_2__eachBefore__["a" /* default */],
  sum: __WEBPACK_IMPORTED_MODULE_4__sum__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_5__sort__["a" /* default */],
  path: __WEBPACK_IMPORTED_MODULE_6__path__["a" /* default */],
  ancestors: __WEBPACK_IMPORTED_MODULE_7__ancestors__["a" /* default */],
  descendants: __WEBPACK_IMPORTED_MODULE_8__descendants__["a" /* default */],
  leaves: __WEBPACK_IMPORTED_MODULE_9__leaves__["a" /* default */],
  links: __WEBPACK_IMPORTED_MODULE_10__links__["a" /* default */],
  copy: node_copy
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optional;
/* harmony export (immutable) */ __webpack_exports__["b"] = required;
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return phi; });
/* harmony export (immutable) */ __webpack_exports__["c"] = squarifyRatio;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(5);



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["a"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a string shortened to a maximum length
 *
 * If the string is already less than the `max` length, return the string.
 * Else return the string, shortened to `max - 3` and append three dots ("...").
 *
 * @param max the maximum length of the string to return
 * @param str the input string
 */
function maxLength(max, str) {
    if (str.length <= max)
        return str;
    return str.substr(0, max - 3) + "...";
}
exports.maxLength = maxLength;
function stringifyPattern(value) {
    if (value === undefined)
        return 'undefined';
    if (value === null)
        return 'null';
    if (typeof value === 'object' && typeof value.then === 'function')
        return '[Promise]';
    return value;
}
function stringify(o) {
    var seen = [];
    function format(val) {
        if (typeof val === 'object') {
            if (seen.indexOf(val) !== -1)
                return '[circular ref]';
            seen.push(val);
        }
        return stringifyPattern(val);
    }
    return JSON.stringify(o, function (key, val) { return format(val); }).replace(/\\"/g, '"');
}
exports.stringify = stringify;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var StateSelector = /** @class */ (function (_super) {
    __extends(StateSelector, _super);
    function StateSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            current: null,
            states: [],
            deregisterFn: null
        };
        _this.selectState = function (event) {
            var $state = _this.props.router.stateService;
            var to = event.target.value;
            if (to)
                $state.go(to);
        };
        return _this;
    }
    StateSelector.prototype.componentDidMount = function () {
        var _this = this;
        var router = this.props.router;
        var updateStates = function () {
            return _this.setState({ states: router.stateRegistry.get().map(function (state) { return state.name; }) });
        };
        var updateCurrent = function (trans) {
            return _this.setState({ current: trans.to().name });
        };
        if (router.stateRegistry.onStatesChanged) {
            this.deregisterStateListenerFn = router.stateRegistry.onStatesChanged(updateStates);
        }
        var deregisterFn = router.transitionService.onSuccess({}, updateCurrent);
        this.setState({ current: router.globals.current.name, states: [], deregisterFn: deregisterFn });
        updateStates();
    };
    StateSelector.prototype.componentWillUnmount = function () {
        if (this.state.deregisterFn) {
            this.state.deregisterFn();
        }
        if (this.deregisterStateListenerFn) {
            this.deregisterStateListenerFn();
        }
    };
    StateSelector.prototype.render = function () {
        return (preact_1.h("select", { value: this.state.current || "", onChange: this.selectState, style: { maxWidth: 120 } },
            preact_1.h("option", { value: "" }, "Choose a state"),
            this.state.states.map(function (state) {
                return preact_1.h("option", { key: state, value: state }, state);
            })));
    };
    return StateSelector;
}(preact_1.Component));
exports.StateSelector = StateSelector;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasClass = function (classname) { return function (el) {
    return !!new RegExp("\\b" + classname + "\\b").exec(el.className);
}; };
exports.addClass = function (classname) { return function (el) {
    return el.className = el.className + " " + classname;
}; };
exports.removeClass = function (classname) { return function (el) {
    return el.className = el.className.replace(new RegExp("\\b" + classname + "\\b", 'g'), "");
}; };
exports.toggleClass = function (classname) { return function (el) {
    if (exports.hasClass(classname)(el))
        exports.removeClass(classname)(el);
    else
        exports.addClass(classname)(el);
}; };


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var StateNode_1 = __webpack_require__(40);
var animatepath_1 = __webpack_require__(19);
var easing_1 = __webpack_require__(6);
var renderers_1 = __webpack_require__(11);
var stateVisNode_1 = __webpack_require__(76);
var resetMetadata = {
    label: '',
    highlight: false,
    active: false,
    future: false,
    retained: false,
    entered: false,
    exited: false,
    inactive: true
};
var StateTree = /** @class */ (function (_super) {
    __extends(StateTree, _super);
    function StateTree() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            nodes: [],
            layout: {}
        };
        _this.nodes = [];
        _this.unmounted = false;
        _this.cancelCurrentAnimation = function () { return null; };
        _this.doLayoutAnimation = function () {
            _this.cancelCurrentAnimation();
            var nodes = _this.getNodes();
            if (!nodes.length)
                return;
            var rootNode = nodes.filter(function (state) { return state.name === ""; })[0];
            _this.props.renderer.layoutFn(rootNode);
            // Move all non-visible nodes to same x/y coords as the nearest visible parent
            nodes.filter(function (node) { return !node.visible; }).forEach(function (node) {
                var visibleAncestor = node._parent;
                while (visibleAncestor && !visibleAncestor.visible)
                    visibleAncestor = visibleAncestor._parent;
                if (visibleAncestor) {
                    node.x = visibleAncestor.x;
                    node.y = visibleAncestor.y;
                }
            });
            var dimensions = _this.dimensions();
            // Transforms x coord from the tree layout to fit the viewport using scale/offset values
            var transformX = function (xval) { return xval * dimensions.scaleX + dimensions.offsetX; };
            // Transforms y coord from the tree layout to fit the viewport using scale/offset values
            var transformY = function (yval) { return yval * dimensions.scaleY + dimensions.offsetY; };
            var getCurrentCoords = function (node) {
                return ({ x: node.animX || _this.props.width / 2, y: node.animY || _this.props.height / 2 });
            };
            // An array containing current x/y coords for all nodes
            // [ x1, y1, x2, y2, x3, y3, x4, y4 ]
            var currentCoords = nodes.map(getCurrentCoords).map(function (obj) { return [obj.x, obj.y]; })
                .reduce(function (acc, arr) { return acc.concat(arr); }, []);
            // An array containing target x/y coords for all nodes
            // [ x1', y1', x2', y2', x3', y3', x4', y4' ]
            var targetCoords = nodes.map(function (node) { return [transformX(node.x), transformY(node.y)]; })
                .reduce(function (acc, arr) { return acc.concat(arr); }, []);
            // xyValArray is an array containing x/y coords for all nodes,
            // interpolated between currentCoords and targetCoords based on time
            // [ x1'', y1'', x2'', y2'', x3'', y3'', x4'', y4'' ]
            var animationFrame = function (xyValArray) {
                var tupleCount = xyValArray.length / 2;
                for (var i = 0; i < tupleCount && i < nodes.length; i++) {
                    var node = nodes[i];
                    node.animX = xyValArray[(i * 2)];
                    node.animY = xyValArray[(i * 2) + 1];
                }
                _this.setState({ nodes: nodes });
            };
            _this.cancelCurrentAnimation = animatepath_1.animatePath(targetCoords, currentCoords, 500, animationFrame, function () { return null; }, easing_1.easing.easeInOutExpo);
        };
        _this.nodeForState = function (nodes, state) {
            return nodes.filter(function (node) { return node.name === state.name; })[0];
        };
        _this.updateStates = function () {
            var router = _this.props.router;
            var states = router.stateService.get().map(function (s) { return s.$$state(); });
            var known = _this.nodes.map(Object.getPrototypeOf);
            var toAdd = states.filter(function (s) { return known.indexOf(s) === -1; });
            var toDel = known.filter(function (s) { return states.indexOf(s) === -1; });
            var nodes = _this.nodes = _this.nodes.slice();
            if (toAdd.length || toDel.length) {
                toAdd.map(function (s) { return stateVisNode_1.createStateVisNode(s); }).forEach(function (n) { return nodes.push(n); });
                toDel.map(function (del) { return nodes.filter(function (node) { return del.isPrototypeOf(node); }); })
                    .reduce(function (acc, x) { return acc.concat(x); }, [])
                    .forEach(function (node) { return nodes.splice(nodes.indexOf(node), 1); });
                // Rebuild each node's children array
                nodes.forEach(function (n) { return n._children = []; });
                nodes.forEach(function (n) {
                    if (!n || !n.parent)
                        return;
                    var parentNode = _this.nodeForState(nodes, n.parent);
                    if (!parentNode)
                        return;
                    parentNode._children.push(n);
                    n._parent = parentNode;
                });
                nodes.forEach(function (n) { return n.future = !!n.lazyLoad; });
            }
            if (!_this.unmounted && !_this.deregisterStateListenerFn) {
                // poll if ui-router version is 1.0.0-beta.1 or earlier
                setTimeout(_this.updateStates, 1000);
            }
            _this.setState({ nodes: nodes }, _this.doLayoutAnimation);
        };
        _this.updateNodes = function ($transition$) {
            var nodes = _this.nodes.map(function (node) { return Object.assign(node, resetMetadata); });
            nodes.forEach(function (n) { return n.future = !!n.lazyLoad; });
            if ($transition$) {
                var tc = $transition$.treeChanges();
                var getNode = function (node) {
                    return _this.nodeForState(_this.nodes, node.state);
                };
                tc.retained.concat(tc.entering).map(getNode).filter(function (x) { return x; }).forEach(function (n) { return n.entered = true; });
                tc.retained.map(getNode).filter(function (x) { return x; }).forEach(function (n) { return n.retained = true; });
                tc.exiting.map(getNode).filter(function (x) { return x; }).forEach(function (n) { return n.exited = true; });
                tc.to.slice(-1).map(getNode).filter(function (x) { return x; }).forEach(function (n) { n.active = true; n.label = "active"; });
            }
            _this.setState({ nodes: _this.nodes }, _this.doLayoutAnimation);
        };
        return _this;
    }
    StateTree.create = function (router, element, props) {
        if (props === void 0) { props = {}; }
        if (!element) {
            element = document.createElement("div");
            element.id = "uirStateTree";
        }
        var initialProps = __assign({}, props, { router: router });
        var _render = function () {
            document.body.appendChild(element);
            preact_1.render(preact_1.h(StateTree, initialProps), element);
        };
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            _render();
        }
        else {
            document.addEventListener('DOMContentLoaded', _render, false);
        }
        return element;
    };
    StateTree.prototype.componentDidMount = function () {
        var _this = this;
        var registry = this.props.router.stateRegistry;
        var $transitions = this.props.router.transitionService;
        // Register states changed listener
        if (registry.onStatesChanged) {
            this.deregisterStateListenerFn = registry.onStatesChanged(function () { return _this.updateStates(); });
        }
        this.updateStates();
        // Register onSuccess transition hook to toggle the SVG classes
        this.deregisterHookFn = $transitions.onSuccess({}, function (trans) { return _this.updateNodes(trans); });
        this.updateNodes();
        var lastSuccessful = this.props.router.globals.successfulTransitions.peekTail();
        if (lastSuccessful) {
            this.updateNodes(lastSuccessful);
        }
        var pending = this.props.router.globals.transition;
        if (pending) {
            pending.promise.then(function () { return _this.updateNodes(pending); });
        }
    };
    StateTree.prototype.componentWillReceiveProps = function () {
        var nodes = this.state.nodes;
        this.setState({ nodes: nodes }, this.updateStates);
    };
    StateTree.prototype.dimensions = function () {
        var newProps = {};
        var radius = 15;
        var offsetX = 0;
        var offsetY = radius * 2;
        var height = this.props.height || 500;
        var width = this.props.width || 500;
        var scaleX = newProps.scaleX || (width - offsetX * 2);
        var scaleY = newProps.scaleY || (height - offsetY * 2);
        return { radius: radius, offsetX: offsetX, offsetY: offsetY, scaleX: scaleX, scaleY: scaleY };
    };
    StateTree.prototype.componentWillUnmount = function () {
        this.unmounted = true;
        this.deregisterHookFn && this.deregisterHookFn();
    };
    StateTree.prototype.getNodes = function () {
        return this.nodes.slice().sort(this.props.renderer.sortNodesFn);
    };
    StateTree.prototype.render = function () {
        var _this = this;
        var renderer = this.props.renderer;
        var renderNodes = this.getNodes()
            .filter(function (node) { return node.visible && node.animX && node.animY; });
        return (preact_1.h("div", { className: "statevis" },
            preact_1.h("svg", { width: this.props.width, height: this.props.height },
                renderNodes.filter(function (node) { return !!node.parent; }).map(function (node) {
                    return renderer.edgeRenderFn(node, renderer);
                }),
                renderNodes.map(function (node) {
                    return preact_1.h(StateNode_1.StateNode, { key: node.name, node: node, router: _this.props.router, renderer: _this.props.renderer, doLayout: _this.doLayoutAnimation.bind(_this), x: node.animX, y: node.animY });
                }))));
    };
    StateTree.defaultProps = {
        height: 350,
        width: 250,
        renderer: renderers_1.DEFAULT_RENDERER,
    };
    return StateTree;
}(preact_1.Component));
exports.StateTree = StateTree;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/resin-io/triangular.js
// http://alexandros.resin.io/angular-d3-svg/
// MIT License https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
var easing_1 = __webpack_require__(6);
var d3_interpolate_1 = __webpack_require__(41);
/** This animation code was taken from trangular.js, and is used to interpolate 2 arrays of values using an easing fn */
function animatePath(newValue, oldValue, duration, updateFrame, finishFn, easeFn) {
    if (finishFn === void 0) { finishFn = function () { }; }
    if (easeFn === void 0) { easeFn = easing_1.easing.easeOutElastic; }
    var start = null, interpolate = d3_interpolate_1.interpolateArray(oldValue, newValue);
    var step = function (now) {
        if (duration === -1)
            return finishFn();
        if (start == null)
            start = now;
        var progress = now - start, percent = 1;
        if (progress < duration) {
            requestAnimationFrame(step);
            percent = easeFn(progress, 0, 1, duration);
        }
        updateFrame(interpolate(percent));
    };
    requestAnimationFrame(step);
    return function cancel() {
        duration = -1;
    };
}
exports.animatePath = animatePath;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rgbBasisClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(2);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(10);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(nb),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(7);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(4);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = packEnclose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enclose__ = __webpack_require__(29);


function place(a, b, c) {
  var ax = a.x,
      ay = a.y,
      da = b.r + c.r,
      db = a.r + c.r,
      dx = b.x - ax,
      dy = b.y - ay,
      dc = dx * dx + dy * dy;
  if (dc) {
    var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
        y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
    c.x = ax + x * dx + y * dy;
    c.y = ay + x * dy - y * dx;
  } else {
    c.x = ax + db;
    c.y = ay;
  }
}

function intersects(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r + b.r;
  return dr * dr - 1e-6 > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(__WEBPACK_IMPORTED_MODULE_0__enclose__["a" /* default */])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* harmony default export */ __webpack_exports__["a"] = (function(circles) {
  packEnclose(circles);
  return circles;
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(68);


/* harmony default export */ __webpack_exports__["a"] = (function(circles) {
  var i = 0, n = (circles = Object(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* shuffle */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = constantZero;
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["b"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(87);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var modal_1 = __webpack_require__(35);
var ResolveData_1 = __webpack_require__(93);
var strings_1 = __webpack_require__(15);
var KeyValueRow = /** @class */ (function (_super) {
    __extends(KeyValueRow, _super);
    function KeyValueRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyValueRow.prototype.render = function () {
        var _a = this.props, _b = _a.tuple, key = _b.key, val = _b.val, classes = _a.classes, modalTitle = _a.modalTitle;
        var showModal = function () {
            return modal_1.Modal.show(modalTitle, key, val, ResolveData_1.ResolveData);
        };
        var renderValue = function () {
            if (val === undefined)
                return preact_1.h("span", { className: "uirTranVis_code" }, "undefined");
            if (val === null)
                return preact_1.h("span", { className: "uirTranVis_code" }, "null");
            if (typeof val === 'string')
                return preact_1.h("span", { className: "uirTranVis_code" },
                    "\"",
                    strings_1.maxLength(100, val),
                    "\"");
            if (typeof val === 'number')
                return preact_1.h("span", { className: "uirTranVis_code" }, val.toString());
            if (typeof val === 'boolean')
                return preact_1.h("span", { className: "uirTranVis_code" }, val.toString());
            if (Array.isArray(val))
                return preact_1.h("span", { className: "link", onClick: showModal }, "[Array]");
            if (typeof val === 'object')
                return preact_1.h("span", { className: "link", onClick: showModal }, "[Object]");
            if (typeof val.toString === 'function')
                return preact_1.h("span", null, strings_1.maxLength(100, val.toString()));
        };
        return (preact_1.h("div", { className: classes.div },
            preact_1.h("div", { className: classes.key },
                key,
                ":"),
            preact_1.h("div", { className: classes.val }, renderValue())));
    };
    return KeyValueRow;
}(preact_1.Component));
exports.KeyValueRow = KeyValueRow;
var KeysAndValues = /** @class */ (function (_super) {
    __extends(KeysAndValues, _super);
    function KeysAndValues() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { collapseFalsy: true };
        return _this;
    }
    KeysAndValues.prototype.makeBuckets = function (definitions, data) {
        var makeBucket = function (def) { return ({
            label: def.label,
            is: function (val) { return val === def.value; },
            value: def.value,
            count: 0,
            data: {},
        }); };
        var defaultBucket = {
            label: 'default',
            is: function () { return true; },
            count: 0,
            data: {},
        };
        var buckets = definitions.map(makeBucket).concat(defaultBucket);
        Object.keys(data).forEach(function (key) {
            var bucket = buckets.find(function (bucket) { return bucket.is(data[key]); });
            bucket.data[key] = data[key];
            bucket.value = data[key];
            bucket.count++;
        });
        return buckets;
    };
    KeysAndValues.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, classes = _a.classes, modalTitle = _a.modalTitle;
        var groupedValues = this.props.groupedValues || KeysAndValues.falsyGroupDefinitions;
        var enableGroupToggle = this.props.enableGroupToggle || false;
        var isCollapsed = this.state.collapseFalsy;
        var buckets = this.makeBuckets(groupedValues, data);
        var defaultBucket = buckets.find(function (bucket) { return bucket.label === 'default'; });
        var groupedBuckets = buckets.filter(function (bucket) { return !!bucket.count && bucket !== defaultBucket; });
        var groupedCount = groupedBuckets.reduce(function (total, bucket) { return total += bucket.count; }, 0);
        var tuples = Object.keys(defaultBucket.data).map(function (key) { return ({ key: key, val: defaultBucket.data[key] }); });
        var groupedTuples = groupedBuckets.map(function (bucket) {
            var key = Object.keys(bucket.data).sort().join(', ');
            var val = bucket.value;
            return { key: key, val: val };
        });
        var showGroupToggle = enableGroupToggle && groupedCount > 1;
        return (preact_1.h("div", { className: "uirTranVis_keysAndValues" },
            tuples.map(function (tuple) { return (preact_1.h(KeyValueRow, { key: tuple.key, tuple: tuple, classes: classes, modalTitle: modalTitle })); }),
            showGroupToggle && !!groupedTuples.length && (preact_1.h("a", { href: "javascript:void(0)", onClick: function () { return _this.setState({ collapseFalsy: !isCollapsed }); }, className: "uirTranVis_keyValue" },
                isCollapsed ? 'show' : 'hide',
                " ",
                groupedCount,
                " ",
                groupedBuckets.map(function (bucket) { return bucket.label; }).join(' or '),
                " parameter values")),
            (!showGroupToggle || !this.state.collapseFalsy) && (groupedTuples.map(function (tuple) { return (preact_1.h(KeyValueRow, { key: tuple.key, tuple: tuple, classes: classes, modalTitle: modalTitle })); }))));
    };
    KeysAndValues.falsyGroupDefinitions = [
        { value: undefined, label: 'undefined' },
        { value: null, label: 'null' },
        { value: '', label: 'empty string' },
    ];
    return KeysAndValues;
}(preact_1.Component));
exports.KeysAndValues = KeysAndValues;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modal.prototype.componentDidMount = function () {
        var el = this._ref;
        setTimeout(function () {
            var fades = el.getElementsByClassName("uir-fade");
            [].slice.apply(fades).forEach(function (node) { return node.className += " in"; });
        }, 35);
    };
    Modal.prototype.render = function () {
        var _this = this;
        return (preact_1.h("div", { ref: function (ref) { return _this._ref = ref; } },
            preact_1.h("div", { className: "uirTranVis_modal-backdrop uir-fade", style: { zIndex: 1040 } }),
            preact_1.h("div", { tabIndex: -1, className: "uirTranVis_modal uir-fade", style: { zIndex: 1050, display: "block" } },
                preact_1.h("div", { className: "uirTranVis_modal-dialog modal-lg" },
                    preact_1.h("div", { className: "uirTranVis_modal-content" }, this.props.children)))));
    };
    Modal.show = function (modalTitle, id, value, component) {
        var modal = document.body.querySelector("#uirTranVis_modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "uirTranVis_modal";
            document.body.appendChild(modal);
        }
        var Nothing = function () { return null; };
        var close = function () { return preact_1.render(preact_1.h(Nothing, null), document.body, modal); };
        preact_1.render(preact_1.h(component, { close: close, modalTitle: modalTitle, id: id, value: value }), modal);
    };
    return Modal;
}(preact_1.Component));
exports.Modal = Modal;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var StateSelector_1 = __webpack_require__(16);
exports.StateSelector = StateSelector_1.StateSelector;
var StateVisualizer_1 = __webpack_require__(38);
exports.StateVisualizer = StateVisualizer_1.StateVisualizer;
var StateTree_1 = __webpack_require__(18);
exports.StateTree = StateTree_1.StateTree;
var TransitionVisualizer_1 = __webpack_require__(88);
exports.TransitionVisualizer = TransitionVisualizer_1.TransitionVisualizer;
var visualizer = function (router) { return new Visualizer(router, {}); };
exports.visualizer = visualizer;
function unmountComponent(node) {
    var Nothing = function () { return null; };
    preact_1.render(preact_1.h(Nothing, null), document.body, node);
}
var DEFAULTS = {
    state: true,
    transition: true,
};
var Visualizer = /** @class */ (function () {
    function Visualizer(router, options) {
        this.router = router;
        this.name = "visualizer";
        options = Object.assign({}, DEFAULTS, options);
        if (options.state) {
            this.stateVisualizerEl = StateVisualizer_1.StateVisualizer.create(router);
        }
        if (options.transition) {
            this.transitionVisualizerEl = TransitionVisualizer_1.TransitionVisualizer.create(router);
        }
    }
    Visualizer.prototype.dispose = function (router) {
        this.stateVisualizerEl && unmountComponent(this.stateVisualizerEl);
        this.transitionVisualizerEl && unmountComponent(this.transitionVisualizerEl);
        this.stateVisualizerEl = null;
        this.transitionVisualizerEl = null;
    };
    return Visualizer;
}());
exports.Visualizer = Visualizer;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var draggable_1 = __webpack_require__(39);
var StateTree_1 = __webpack_require__(18);
var Controls_1 = __webpack_require__(77);
var StateVisWindow_1 = __webpack_require__(84);
var renderers_1 = __webpack_require__(11);
__webpack_require__(85);
var StateVisualizer = /** @class */ (function (_super) {
    __extends(StateVisualizer, _super);
    function StateVisualizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { height: null, width: null, renderer: renderers_1.DEFAULT_RENDERER, minimized: false };
        _this.deregisterFns = [];
        _this.svgWidth = function () { return _this.props.width || _this.state.width || 350; };
        _this.svgHeight = function () { return (_this.props.height || _this.state.height || 250) - 25; };
        return _this;
    }
    /**
     * Creates a new StateVisualizer and adds it to the document.
     *
     * @param router the UIRouter object
     * @param element (optional) the element where the StateVisualizer should be placed.
     *                If no element is passed, an element will be created in the body.
     * @param props height/width properties default: { height: 350, width: 250 }
     *
     * # Angular 1 + UI-Router (1.0.0-beta.2 and higher):
     *
     * Inject the router (`$uiRouter`) in a run block, then call StateVisualizer.create();
     *
     * ```
     * app.run(function($uiRouter) {
     *   StateVisualizer.create($uiRouter);
     * });
     * ```
     *
     * # Angular 1 + UI-Router 1.0.0-alpha.1 through 1.0.0-beta.1:
     *
     * Inject the router (`ng1UIRouter`) in a run block, then call StateVisualizer.create();
     *
     * ```
     * app.run(function(ng1UIRouter) {
     *   StateVisualizer.create(ng1UIRouter);
     * });
     * ```
     *
     * Angular 2:
     *
     * Call StateVisualizer.create() from your UIRouterConfig
     *
     * ```
     * export class MyUIRouterConfig extends UIRouterConfig {
     *   configure(router: UIRouter) {
     *     StateVisualizer.create(router);
     *   }
     * }
     * ```
     *
     * React:
     *
     * Call StateVisualizer.create() from your bootstrap
     *
     * ```
     * let router = new UIRouterReact();
     * StateVisualizer.create(router);
     * router.start();
     * ```
     *
     * @return the element that was bootstrapped.
     *         You can destroy the component using:
     *         [ReactDOM.unmountComponentAtNode](https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode)
     */
    StateVisualizer.create = function (router, element, props) {
        if (props === void 0) { props = {}; }
        if (!element) {
            element = document.createElement("div");
            element.id = "uirStateVisualizer";
        }
        var initialProps = Object.assign({}, props, { router: router, minimizeAfter: 2500 });
        var _render = function () {
            document.body.appendChild(element);
            preact_1.render(preact_1.h(StateVisualizer, initialProps), element);
        };
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            _render();
        }
        else {
            document.addEventListener('DOMContentLoaded', _render, false);
        }
        return element;
    };
    StateVisualizer.prototype.dispose = function () {
        var Nothing = function () { return null; };
        preact_1.render(preact_1.h(Nothing, null), document.body, this.el);
    };
    StateVisualizer.prototype.handleRendererChange = function (renderer) {
        this.setState({ renderer: renderer });
    };
    StateVisualizer.prototype.cancelAutoMinimize = function (ev) {
        if (this.minimizeTimeout) {
            clearTimeout(this.minimizeTimeout);
            this.minimizeTimeout = null;
        }
    };
    StateVisualizer.prototype.componentWillUnmount = function () {
        this.deregisterFns.forEach(function (fn) { return fn(); });
    };
    StateVisualizer.prototype.draggable = function (enaabled) {
        var controlsEl = this.windowEl.querySelector('.uirStateVisControls');
        var visEl = this.windowEl.querySelector('.statevis');
        this.deregisterFns.push(draggable_1.draggable(controlsEl, draggable_1.dragActions.move(this.windowEl)));
        this.deregisterFns.push(draggable_1.draggable(visEl, draggable_1.dragActions.move(this.windowEl)));
    };
    StateVisualizer.prototype.componentDidMount = function () {
        var _this = this;
        this.draggable(true);
        if (this.props.minimizeAfter) {
            var doMinimize = function () { return _this.setState({ minimized: true }); };
            this.minimizeTimeout = setTimeout(doMinimize, this.props.minimizeAfter);
        }
    };
    StateVisualizer.prototype.render = function () {
        var _this = this;
        var minimized = this.state.minimized;
        return (preact_1.h("div", { ref: function (el) { return _this.el = el; }, onMouseDown: this.cancelAutoMinimize.bind(this), onMouseEnter: this.cancelAutoMinimize.bind(this) },
            preact_1.h(StateVisWindow_1.StateVisWindow, { minimized: this.state.minimized, ref: function (windowRef) { return _this.windowEl = windowRef && windowRef.el || _this.windowEl; }, onResize: function (_a) {
                    var width = _a.width, height = _a.height;
                    return _this.setState({ width: width, height: height });
                } },
                preact_1.h("div", { onClick: function () { return _this.setState({ minimized: false }); }, className: "uirStateVisWindowOverlay " + (minimized ? "minimized" : "") }),
                preact_1.h(Controls_1.Controls, { router: this.props.router, onRendererChange: this.handleRendererChange.bind(this), onMinimize: function () { return _this.setState({ minimized: true }); }, onClose: function () { return _this.dispose(); } }),
                preact_1.h(StateTree_1.StateTree, { router: this.props.router, width: this.svgWidth(), height: this.svgHeight(), renderer: this.state.renderer }))));
    };
    return StateVisualizer;
}(preact_1.Component));
exports.StateVisualizer = StateVisualizer;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toggleClass_1 = __webpack_require__(17);
var moveElement = function (elementToMove) {
    return function _moveElement(elementBeingDragged, event, details) {
        var initialClientX = details.initialClientX, initialClientY = details.initialClientY, lastClientX = details.lastClientX, lastClientY = details.lastClientY, newClientX = details.newClientX, newClientY = details.newClientY;
        var el = elementToMove;
        var bounds = el.getBoundingClientRect();
        var left = bounds.left, top = bounds.top;
        var dx = newClientX - lastClientX;
        var dy = newClientY - lastClientY;
        el.style.right = "auto";
        el.style.bottom = "auto";
        el.style.left = (left + dx) + 'px';
        el.style.top = (top + dy) + 'px';
    };
};
exports.dragActions = {
    move: moveElement,
};
function draggable(el, callback) {
    var enabled = true;
    var isDragging = false;
    var initialClientX = 0, initialClientY = 0;
    var lastClientX = 0, lastClientY = 0;
    var mouseDownListener = function (e) {
        if (!enabled)
            return;
        isDragging = true;
        lastClientX = initialClientX = e.clientX;
        lastClientY = initialClientY = e.clientY;
        var dragListener = function (e) {
            if (!enabled || !isDragging)
                return;
            e.preventDefault();
            var newClientX = e.clientX, newClientY = e.clientY;
            callback(el, e, { initialClientX: initialClientX, initialClientY: initialClientY, lastClientX: lastClientX, lastClientY: lastClientY, newClientX: newClientX, newClientY: newClientY });
            lastClientX = newClientX;
            lastClientY = newClientY;
        };
        var doneDragging = function (e) {
            isDragging = false;
            document.removeEventListener("mousemove", dragListener);
            document.removeEventListener("mouseup", doneDragging);
        };
        document.addEventListener("mousemove", dragListener);
        document.addEventListener("mouseup", doneDragging);
    };
    toggleClass_1.addClass("draggable")(el);
    el.addEventListener("mousedown", mouseDownListener);
    return function () { return el.removeEventListener("mousedown", mouseDownListener); };
}
exports.draggable = draggable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var StateNode = /** @class */ (function (_super) {
    __extends(StateNode, _super);
    function StateNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goTimeout = null;
        _this.handleCollapseClicked = function (event) {
            clearTimeout(_this.goTimeout);
            _this.props.node._collapsed = !_this.props.node._collapsed;
            _this.props.doLayout();
        };
        _this.handleGoClicked = function (event) {
            clearTimeout(_this.goTimeout);
            var stateName = _this.props.node.name;
            stateName = stateName.replace(/\.\*\*$/, "");
            _this.goTimeout = setTimeout(function () { return _this.props.router.stateService.go(stateName); }, 200);
        };
        return _this;
    }
    StateNode.prototype.render = function () {
        var renderer = this.props.renderer;
        var _a = this.props, node = _a.node, x = _a.x, y = _a.y;
        var baseRadius = renderer.baseRadius, baseFontSize = renderer.baseFontSize, baseNodeStrokeWidth = renderer.baseNodeStrokeWidth, zoom = renderer.zoom;
        var r = baseRadius * zoom;
        var fontSize = baseFontSize * zoom;
        var nodeStrokeWidth = (baseNodeStrokeWidth * (node.entered ? 1.5 : 1) * zoom);
        var classes = ["entered", "retained", "exited", "active", "inactive", "future", "highlight", "collapsed"];
        var circleClasses = classes.reduce(function (str, clazz) { return (str + (node[clazz] ? " " + clazz + " " : '')); }, '');
        var descendents = node.collapsed ? node.totalDescendents : 0;
        return (preact_1.h("g", { transform: "translate(" + x + ", " + y + ")", onClick: this.handleGoClicked, onDblClick: this.handleCollapseClicked },
            preact_1.h("circle", { className: circleClasses, "stroke-width": nodeStrokeWidth, r: r }),
            !node.collapsed ? "" :
                preact_1.h("text", { className: "label", "text-anchor": "middle", "font-size": fontSize * (descendents < 10 ? 1.0 : 0.8) },
                    "(",
                    descendents,
                    ")"),
            renderer.labelRenderFn(x, y, node, renderer),
            preact_1.h("text", { className: "label", "text-anchor": "middle", "font-size": fontSize, transform: "translate(0, " + r * 2 + ")" }, node.label)));
    };
    return StateNode;
}(preact_1.Component));
exports.StateNode = StateNode;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return __WEBPACK_IMPORTED_MODULE_1__src_array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return __WEBPACK_IMPORTED_MODULE_2__src_basis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return __WEBPACK_IMPORTED_MODULE_4__src_date__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return __WEBPACK_IMPORTED_MODULE_6__src_object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(44);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return __WEBPACK_IMPORTED_MODULE_10__src_zoom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return __WEBPACK_IMPORTED_MODULE_13__src_lab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(52);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_16__src_quantize__["a"]; });



















/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(20);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(20);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(46);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(47);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["a"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hslLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(2);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(2);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hclLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(2);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(2);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["b"] = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_cluster__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return __WEBPACK_IMPORTED_MODULE_0__src_cluster__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_hierarchy_index__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return __WEBPACK_IMPORTED_MODULE_1__src_hierarchy_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_pack_index__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return __WEBPACK_IMPORTED_MODULE_2__src_pack_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pack_siblings__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pack_siblings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_pack_enclose__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return __WEBPACK_IMPORTED_MODULE_4__src_pack_enclose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_partition__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return __WEBPACK_IMPORTED_MODULE_5__src_partition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_stratify__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return __WEBPACK_IMPORTED_MODULE_6__src_stratify__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_tree__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return __WEBPACK_IMPORTED_MODULE_7__src_tree__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_treemap_index__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return __WEBPACK_IMPORTED_MODULE_8__src_treemap_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_treemap_binary__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return __WEBPACK_IMPORTED_MODULE_9__src_treemap_binary__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_treemap_dice__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return __WEBPACK_IMPORTED_MODULE_10__src_treemap_dice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_treemap_slice__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return __WEBPACK_IMPORTED_MODULE_11__src_treemap_slice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_treemap_sliceDice__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return __WEBPACK_IMPORTED_MODULE_12__src_treemap_sliceDice__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_treemap_squarify__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return __WEBPACK_IMPORTED_MODULE_13__src_treemap_squarify__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_treemap_resquarify__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return __WEBPACK_IMPORTED_MODULE_14__src_treemap_resquarify__["a"]; });

















/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.eachAfter(count);
});


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
});


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__siblings__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accessors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(30);




function defaultRadius(d) {
  return Math.sqrt(d.value);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = __WEBPACK_IMPORTED_MODULE_2__constant__["a" /* constantZero */];

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius))
          .eachAfter(packChildren(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* constantZero */], 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = Object(__WEBPACK_IMPORTED_MODULE_1__accessors__["a" /* optional */])(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["b" /* default */])(+x), pack) : padding;
  };

  return pack;
});

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = Object(__WEBPACK_IMPORTED_MODULE_0__siblings__["b" /* packEnclose */])(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffle;
var slice = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__treemap_round__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treemap_dice__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(__WEBPACK_IMPORTED_MODULE_0__treemap_round__["a" /* default */]);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        Object(__WEBPACK_IMPORTED_MODULE_1__treemap_dice__["a" /* default */])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accessors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hierarchy_index__ = __webpack_require__(12);



var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new __WEBPACK_IMPORTED_MODULE_1__hierarchy_index__["a" /* Node */](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(__WEBPACK_IMPORTED_MODULE_1__hierarchy_index__["b" /* computeHeight */]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = Object(__WEBPACK_IMPORTED_MODULE_0__accessors__["b" /* required */])(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = Object(__WEBPACK_IMPORTED_MODULE_0__accessors__["b" /* required */])(x), stratify) : parentId;
  };

  return stratify;
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hierarchy_index__ = __webpack_require__(12);


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(__WEBPACK_IMPORTED_MODULE_0__hierarchy_index__["a" /* Node */].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__round__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__squarify__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accessors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(30);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var tile = __WEBPACK_IMPORTED_MODULE_1__squarify__["a" /* default */],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* constantZero */],
      paddingTop = __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* constantZero */],
      paddingRight = __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* constantZero */],
      paddingBottom = __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* constantZero */],
      paddingLeft = __WEBPACK_IMPORTED_MODULE_3__constant__["a" /* constantZero */];

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(__WEBPACK_IMPORTED_MODULE_0__round__["a" /* default */]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = Object(__WEBPACK_IMPORTED_MODULE_2__accessors__["b" /* required */])(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["b" /* default */])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["b" /* default */])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["b" /* default */])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["b" /* default */])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["b" /* default */])(+x), treemap) : paddingLeft;
  };

  return treemap;
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = (function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? __WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */])(parent, x0, y0, x1, y1);
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dice__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slice__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__squarify__ = __webpack_require__(14);




/* harmony default export */ __webpack_exports__["a"] = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) Object(__WEBPACK_IMPORTED_MODULE_0__dice__["a" /* default */])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else Object(__WEBPACK_IMPORTED_MODULE_1__slice__["a" /* default */])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = Object(__WEBPACK_IMPORTED_MODULE_2__squarify__["c" /* squarifyRatio */])(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(__WEBPACK_IMPORTED_MODULE_2__squarify__["b" /* phi */]));


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createStateVisNode(state) {
    var node = Object.create(state);
    Object.defineProperty(node, "visible", {
        get: function () {
            if (this.entered)
                return true;
            var ancestorCollapsed = this._parent && (this._parent.collapsed || !this._parent.visible);
            return !ancestorCollapsed;
        }
    });
    Object.defineProperty(node, "children", {
        get: function () {
            return this._children.filter(function (child) { return child.visible; });
        }
    });
    Object.defineProperty(node, "totalDescendents", {
        get: function () {
            return this._children.reduce(function (acc, child) { return acc + child.totalDescendents; }, this._children.length);
        }
    });
    Object.defineProperty(node, "collapsed", {
        get: function () {
            return !this.entered && this._collapsed && this._children.length;
        }
    });
    return node;
}
exports.createStateVisNode = createStateVisNode;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var StateSelector_1 = __webpack_require__(16);
var LayoutPrefs_1 = __webpack_require__(78);
var ChevronDown_1 = __webpack_require__(79);
var Close_1 = __webpack_require__(80);
var Gear_1 = __webpack_require__(81);
var Help_1 = __webpack_require__(82);
var imgChevron = __webpack_require__(83);
var Controls = /** @class */ (function (_super) {
    __extends(Controls, _super);
    function Controls() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showRendererPrefs: false,
        };
        return _this;
    }
    Controls.prototype.render = function () {
        return (preact_1.h("div", { style: { width: '100%' } },
            preact_1.h("div", { className: "uirStateVisControls" },
                preact_1.h(StateSelector_1.StateSelector, { router: this.props.router }),
                preact_1.h("div", { style: { marginLeft: 'auto', cursor: 'pointer' }, className: "uirStateVisIcons" },
                    preact_1.h("span", { className: "uirStateVisHover" },
                        preact_1.h(Help_1.Help, { size: "16px" }),
                        preact_1.h("div", { className: "hoverBlock" },
                            preact_1.h("ul", null,
                                preact_1.h("li", null, "Click a node to activate that state."),
                                preact_1.h("li", null, "Select a state from the dropdown to activate that state."),
                                preact_1.h("li", null, "Double click a node to auto-collapse that section of the tree when inactive. Collapsed nodes are displayed with a dotted outline and the count of collapsed children."),
                                preact_1.h("li", null, "Lazy loaded states (including future states) are displayed with a dashed outline.")))),
                    preact_1.h("span", { className: "uirStateVisHover" },
                        preact_1.h(Gear_1.Gear, { size: "16px" }),
                        preact_1.h("div", { className: "hoverBlock" },
                            preact_1.h(LayoutPrefs_1.LayoutPrefs, { onRendererChange: this.props.onRendererChange }))),
                    preact_1.h("span", { className: "uirStateVisHover", onClick: this.props.onMinimize },
                        preact_1.h(ChevronDown_1.ChevronDown, { size: "16px" }),
                        preact_1.h("div", null,
                            preact_1.h("span", { style: { float: 'right' } }, "Minimize")),
                        preact_1.h("div", null, "Minimize")),
                    preact_1.h("span", { className: "uirStateVisHover", onClick: this.props.onClose },
                        preact_1.h(Close_1.Close, { size: "16px" }),
                        preact_1.h("div", null,
                            preact_1.h("span", { style: { float: 'right' } }, "Close")))))));
    };
    return Controls;
}(preact_1.Component));
exports.Controls = Controls;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var renderers_1 = __webpack_require__(11);
var LayoutPrefs = /** @class */ (function (_super) {
    __extends(LayoutPrefs, _super);
    function LayoutPrefs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            renderer: renderers_1.DEFAULT_RENDERER,
            presetName: 'Tree',
        };
        return _this;
    }
    LayoutPrefs.prototype.componentDidMount = function () {
        this.props.onRendererChange(this.state.renderer);
    };
    LayoutPrefs.prototype.handleZoom = function (event) {
        var el = event.target;
        var value = parseFloat(el['value']);
        var renderer = __assign({}, this.state.renderer, { zoom: value });
        this.setState({ renderer: renderer });
        this.props.onRendererChange(renderer);
    };
    LayoutPrefs.prototype.handleLayout = function (event) {
        var presetName = event.target['value'];
        var settings = renderers_1.RENDERER_PRESETS[presetName];
        var renderer = __assign({}, this.state.renderer, settings);
        this.setState({ renderer: renderer, presetName: presetName });
        this.props.onRendererChange(renderer);
    };
    LayoutPrefs.prototype.render = function () {
        return (preact_1.h("div", { className: "uirStateVisLayoutPrefs", style: { display: 'flex', flexFlow: 'column nowrap' }, onMouseDown: function (evt) { return evt.stopPropagation(); } },
            preact_1.h("div", { style: { flex: '1 1 auto', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' } },
                preact_1.h("div", null, "Layout:"),
                preact_1.h("select", { style: { marginLeft: 'auto', maxWidth: '100px' }, onChange: this.handleLayout.bind(this), value: this.state.presetName }, Object.keys(renderers_1.RENDERER_PRESETS).map(function (preset) {
                    return preact_1.h("option", { value: preset }, preset);
                }))),
            preact_1.h("div", { style: { flex: '1 1 auto', display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' } },
                preact_1.h("span", null, "Node size:"),
                preact_1.h("input", { style: { marginLeft: 'auto' }, value: "" + this.state.renderer.zoom, type: "range", min: "0.3", max: "3.0", step: "0.1", onInput: this.handleZoom.bind(this) }),
                preact_1.h("span", null,
                    this.state.renderer.zoom,
                    "x"))));
    };
    return LayoutPrefs;
}(preact_1.Component));
exports.LayoutPrefs = LayoutPrefs;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
exports.ChevronDown = function (_a) {
    var size = _a.size;
    return preact_1.h("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        preact_1.h("path", { d: "M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z" }));
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
exports.Close = function (_a) {
    var size = _a.size;
    return preact_1.h("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        preact_1.h("path", { d: "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z" }));
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
exports.Gear = function (_a) {
    var size = _a.size;
    return preact_1.h("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        preact_1.h("path", { d: "M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm512-109v222q0 12-8 23t-20 13l-185 28q-19 54-39 91 35 50 107 138 10 12 10 25t-9 23q-27 37-99 108t-94 71q-12 0-26-9l-138-108q-44 23-91 38-16 136-29 186-7 28-36 28h-222q-14 0-24.5-8.5t-11.5-21.5l-28-184q-49-16-90-37l-141 107q-10 9-25 9-14 0-25-11-126-114-165-168-7-10-7-23 0-12 8-23 15-21 51-66.5t54-70.5q-27-50-41-99l-183-27q-13-2-21-12.5t-8-23.5v-222q0-12 8-23t19-13l186-28q14-46 39-92-40-57-107-138-10-12-10-24 0-10 9-23 26-36 98.5-107.5t94.5-71.5q13 0 26 10l138 107q44-23 91-38 16-136 29-186 7-28 36-28h222q14 0 24.5 8.5t11.5 21.5l28 184q49 16 90 37l142-107q9-9 24-9 13 0 25 10 129 119 165 170 7 8 7 22 0 12-8 23-15 21-51 66.5t-54 70.5q26 50 41 98l183 28q13 2 21 12.5t8 23.5z" }));
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
exports.Help = function (_a) {
    var size = _a.size;
    return preact_1.h("svg", { width: size, height: size, viewBox: "0 0 1792 1792", xmlns: "http://www.w3.org/2000/svg" },
        preact_1.h("path", { d: "M1008 1200v160q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-160q0-14 9-23t23-9h160q14 0 23 9t9 23zm256-496q0 50-15 90t-45.5 69-52 44-59.5 36q-32 18-46.5 28t-26 24-11.5 29v32q0 14-9 23t-23 9h-160q-14 0-23-9t-9-23v-68q0-35 10.5-64.5t24-47.5 39-35.5 41-25.5 44.5-21q53-25 75-43t22-49q0-42-43.5-71.5t-95.5-29.5q-56 0-95 27-29 20-80 83-9 12-25 12-11 0-19-6l-108-82q-10-7-12-20t5-23q122-192 349-192 129 0 238.5 89.5t109.5 214.5zm-368-448q-130 0-248.5 51t-204 136.5-136.5 204-51 248.5 51 248.5 136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5-51-248.5-136.5-204-204-136.5-248.5-51zm768 640q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" }));
};


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAeklEQVQ4je2PwQmAMBAEpwuJLfkSJQ+txBKsT0RsxQj6uUAMXkTx4cOF+2R39i7w61X1wACYRMZIpo+NDthkJqXEiOdzXWiWgEuUxLAT5qAaWILQDORABozB+wq02h/tySXxZqvB2iXh5uYK1kpuwV6VlDyCvQqZD2sHTn0xdO0A9D4AAAAASUVORK5CYII="

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var toggleClass_1 = __webpack_require__(17);
/** A floating window that supports minimization and resizing  */
var StateVisWindow = /** @class */ (function (_super) {
    __extends(StateVisWindow, _super);
    function StateVisWindow(props) {
        var _this = _super.call(this, props) || this;
        _this.deregisterFns = [];
        _this.minimize = function () {
            // evt && evt.preventDefault();
            // evt && evt.stopPropagation();
            var el = _this.el;
            var bounds = el.getBoundingClientRect();
            _this.top = (bounds.top) + "px";
            _this.left = (bounds.left) + "px";
            _this.right = (window.innerWidth - bounds.right) + "px";
            _this.bottom = (window.innerHeight - bounds.bottom) + "px";
            el.style.top = "auto";
            el.style.left = "auto";
            el.style.right = _this.right;
            el.style.bottom = _this.bottom;
            var unminimize = function () {
                el.style.top = "auto";
                el.style.left = "auto";
                el.style.right = _this.right;
                el.style.bottom = _this.bottom;
                toggleClass_1.toggleClass('minimized')(el);
                el.removeEventListener("click", unminimize);
                var animationEndListener = function (evt) {
                    var bounds = el.getBoundingClientRect();
                    el.style.top = bounds.top + "px";
                    el.style.left = bounds.left + "px";
                    el.style.right = "auto";
                    el.style.bottom = "auto";
                    el.removeEventListener("transitionend", animationEndListener);
                };
                el.addEventListener("transitionend", animationEndListener);
            };
            toggleClass_1.addClass('minimized')(el);
            // wait 50ms to avoid coordinates jumping directly to 0/0 and avoid animation
            setTimeout(function () { return el.style.right = el.style.bottom = "0"; }, 50);
            return unminimize;
        };
        _this.state = {
            unminimize: null,
        };
        return _this;
    }
    StateVisWindow.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.minimized !== nextProps.minimized) {
            var unminimize_1 = this.state.unminimize;
            if (unminimize_1) {
                this.setState({ unminimize: null }, function () { return unminimize_1(); });
            }
            else {
                this.setState({ unminimize: this.minimize() });
            }
        }
    };
    StateVisWindow.prototype.componentWillUnmount = function () {
        this.deregisterFns.forEach(function (fn) { return fn(); });
    };
    StateVisWindow.prototype.componentDidMount = function () {
        if (typeof MutationObserver === 'function') {
            this.monitorResizeEvents();
        }
    };
    /** The uirStateVisContainer class enables resize: both. This function listens for resize events */
    StateVisWindow.prototype.monitorResizeEvents = function () {
        var _this = this;
        var _width = this.el.style.width;
        var _height = this.el.style.height;
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName == 'style') {
                    var el = mutation.target, newwidth = el['style'].width, newheight = el['style'].height;
                    if (newwidth !== _width || newheight !== _height) {
                        _width = newwidth;
                        _height = newheight;
                        var width = parseInt(newwidth.replace(/px$/, ""));
                        var height = parseInt(newheight.replace(/px$/, ""));
                        _this.props.onResize({ width: width, height: height });
                    }
                }
            });
        });
        var config = {
            attributes: true,
            childList: false,
            characterData: false,
            subtree: false,
            attributeFilter: ['style']
        };
        observer.observe(this.el, config);
        this.deregisterFns.push(function () { return observer.disconnect(); });
    };
    StateVisWindow.prototype.render = function () {
        var _this = this;
        return (preact_1.h("div", { className: "uirStateVisContainer", ref: function (el) { return _this.el = el; } }, this.props.children));
    };
    return StateVisWindow;
}(preact_1.Component));
exports.StateVisWindow = StateVisWindow;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":false,"attrs":{"nonce":"uiroutervisualizer"}}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(33)(content, options);
if(content.locals) module.exports = content.locals;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\n#uirStateVisualizer {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 16px;\n    font-family: sans-serif;\n    font-weight: normal;\n    vertical-align: baseline;\n    line-height: 1;\n    display: block;\n    box-sizing: content-box;\n}\n#uirStateVisualizer svg {\n    box-sizing: content-box;\n}\n\n.uirStateVisContainer {\n    z-index: 3;\n    position: fixed;\n    right: 32px;\n    bottom: 64px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: rgba(255, 255, 255, 0.8);\n    transform: scale(1);\n    transform-origin: right bottom;\n    transition: right 0.5s ease, bottom 0.5s ease, transform 0.5s ease;\n    overflow: hidden;\n    resize: both;\n}\n\n.uirStateVisContainer.minimized {\n    cursor: pointer;\n    transform: scale(0.25);\n    z-index: 60;\n}\n\n.uirStateVisContainer:hover {\n    outline: 2px solid rgba(0,0,0,0.35)\n}\n\n.uirStateVisContainer:hover .uirStateVisControls {\n    visibility: visible;\n}\n\n.uirStateVisContainer .uirStateVisControls {\n    visibility: hidden;\n    display: flex;\n    width: 100%;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    flex: 1 0 auto;\n    z-index: 1;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span svg {\n    padding: 3px;\n    fill: #777777;\n}\n\n.uirStateVisContainer .uirStateVisControls .uirStateVisIcons span:hover svg {\n    fill: black;\n}\n\n.uirStateVisHover > div {\n    transition: opacity 500ms ease;\n    opacity: 0;\n    height: 0;\n    padding: 0;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n    overflow: hidden;\n\n    margin-top: 26px;\n    font-size: 14px;\n}\n\n.uirStateVisHover > div.hoverBlock {\n    left: 0;\n    border-bottom: none;\n    background: white;\n}\n\n.uirStateVisHover:hover > div.hoverBlock {\n    border-bottom: 2px solid lightgrey;\n}\n\n\n.uirStateVisHover:hover > div {\n    opacity: 1;\n    height: auto;\n}\n\n.uirStateVisHover .uirStateVisLayoutPrefs {\n    padding: 12px 24px;\n}\n\n.uirStateVisContainer .statevis {\n    flex: 1 1 auto;\n    transition: all 1s ease;\n}\n\n.uirStateVisWindowOverlay {\n    display: none;\n}\n\n.minimized .uirStateVisWindowOverlay {\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0; \n    top: 0;\n    bottom: 0;\n    z-index: 10;\n}\n  \n.statevis circle {\n    /*r: 10;*/\n    fill: #fff;\n    stroke: grey;\n    /*stroke-width: 3px;*/\n\n    transition-property: r, fill, stroke, stroke-width;\n    transition-duration: 350ms;\n    transition-timing-function: ease-in-out;\n\n    cursor: pointer;\n}\n\n.statevis text {\n    transition-property: x, y, font-size, stroke, stroke-width;\n    transition-duration: 350ms;\n    transition-timing-function: ease-in-out;\n}\n\n.statevis circle.future {\n    /*r: 10;*/\n    stroke: grey;\n    stroke-dasharray: 7,5;\n    /*stroke-width: 1px;*/\n}\n\n.statevis circle.entered {\n    /*r: 10;*/\n    stroke: black;\n    fill: lightgreen;\n}\n\n.statevis circle.entered:after {\n    content: \"<text>Entered</text>\"\n}\n\n.statevis circle.active {\n    /*r: 15;*/\n    fill: green;\n    stroke: black;\n}\n\n.statevis circle.collapsed {\n    stroke-dasharray: 2, 2\n}\n\n.statevis text {\n    font-family: sans-serif;\n}\n\n.statevis .link {\n    fill: none;\n    stroke: #ccc;\n    /*stroke-width: 2px;*/\n}\n\n.statevis text.label {\n    fill: grey;\n    alignment-baseline: middle;\n}\n\n\n.draggable {\n    cursor: move;\n}\n\n/*.draggable:hover {*/\n    /*outline: 3px solid rgba(0,0,0,0.15)*/\n/*}*/\n", ""]);

// exports


/***/ }),
/* 87 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var TransitionView_1 = __webpack_require__(89);
var easing_1 = __webpack_require__(6);
var animatepath_1 = __webpack_require__(19);
__webpack_require__(100);
/**
 * This outer component manages the list of all transitions (history), and provides a fixed, scrolling viewport.
 * It attaches hooks for lifecycle events and decorates the transition with a descriptive message.
 */
var TransitionVisualizer = /** @class */ (function (_super) {
    __extends(TransitionVisualizer, _super);
    function TransitionVisualizer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deregisterFns = [];
        _this.state = {
            transitions: [],
            pointerEvents: "auto",
        };
        _this.cancelPreviousAnim = null;
        /**
         * Disable pointer events when the mouse is above the timeline
         *
         * This allows clicks to pass through the outer div to the user's app components
         * even when a transitionview details box is open and pinned.
         *
         * Enable pointer events when mouse is inside the timeline to allow horizontal scroll & scroll wheel
         */
        _this.onMouseMove = function (evt) {
            var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            var pointerEvents = (windowHeight - evt.clientY < 65 ? "auto" : "none");
            if (_this.state.pointerEvents != pointerEvents) {
                _this.setState({ pointerEvents: pointerEvents });
            }
        };
        return _this;
    }
    /**
     * Creates a new TransitionVisualizer and adds it to the document.
     *
     * @param router the UIRouter object
     * @param element (optional) the element where the TransitionVisualizer should be placed.
     *                If no element is passed, an element will be created in the body.
     * @param props maximum transitions default: { maximumTransitions: 15 }
     *
     *
     * # Angular 1 + UI-Router (1.0.0-beta.2 and higher):
     *
     * Inject the router (`$uiRouter`) in a run block, then call TransitionVisualizer.create();
     *
     * ```
     * app.run(function($uiRouter) {
     *   TransitionVisualizer.create($uiRouter);
     * });
     * ```
     *
     * # Angular 1 + UI-Router 1.0.0-alpha.1 through 1.0.0-beta.1:
     *
     * Inject the router (`ng1UIRouter`) in a run block, then call TransitionVisualizer.create();
     *
     * ```
     * app.run(function(ng1UIRouter) {
     *   TransitionVisualizer.create(ng1UIRouter);
     * });
     * ```
     *
     * Angular 2:
     *
     * Call TransitionVisualizer.create() from your UIRouterConfig
     *
     * ```
     * export class MyUIRouterConfig extends UIRouterConfig {
     *   configure(router: UIRouter) {
     *     TransitionVisualizer.create(router);
     *   }
     * }
     * ```
     *
     * React:
     *
     * Call TransitionVisualizer.create() from your bootstrap
     *
     * ```
     * let router = new UIRouterReact();
     * TransitionVisualizer.create(router);
     * router.start();
     * ```
     *
     * @return the element that was bootstrapped.
     *         You can destroy the component using:
     *         [ReactDOM.unmountComponentAtNode](https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode)
     */
    TransitionVisualizer.create = function (router, element, props) {
        if (props === void 0) { props = {}; }
        if (!element) {
            element = document.createElement("div");
            element.id = "uirTransitionVisualizer";
        }
        var initialProps = Object.assign({}, props, { router: router });
        var _render = function () {
            document.body.appendChild(element);
            preact_1.render(preact_1.h(TransitionVisualizer, initialProps), element);
        };
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            _render();
        }
        else {
            document.addEventListener('DOMContentLoaded', _render, false);
        }
        return element;
    };
    TransitionVisualizer.prototype.componentDidMount = function () {
        var _this = this;
        var dereg = this.props.router.transitionService.onBefore({}, function (trans) {
            _this.setState({ transitions: _this.state.transitions.concat(trans) });
            var duration = 750, el = _this._div.children[0];
            var scrollToRight = function () {
                var targetScrollX = el.scrollWidth - el.clientWidth + 200;
                _this.cancelPreviousAnim && _this.cancelPreviousAnim();
                var newVal = [targetScrollX], oldVal = [el.scrollLeft];
                var max = _this.props.maximumTransitions;
                var enforceMax = function () {
                    var list = _this.state.transitions;
                    if (list.length <= max)
                        return;
                    _this.setState({ transitions: list.slice(list.length - max) });
                };
                var callback = function (vals) { return el.scrollLeft = vals[0]; };
                _this.cancelPreviousAnim = animatepath_1.animatePath(newVal, oldVal, duration, callback, enforceMax, easing_1.easing.easeInOutCubic);
            };
            setTimeout(scrollToRight, 25);
        });
        this.deregisterFns.push(dereg);
        document.body.addEventListener("mousemove", this.onMouseMove);
        this.deregisterFns.push(function () { return document.body.removeEventListener("mousemove", _this.onMouseMove); });
    };
    TransitionVisualizer.prototype.componentWillUnmount = function () {
        while (this.deregisterFns.length)
            this.deregisterFns.pop()();
    };
    TransitionVisualizer.prototype.render = function () {
        var _this = this;
        var pointerEvents = this.state.pointerEvents;
        return (preact_1.h("div", { ref: function (el) { return _this._div = el; } },
            preact_1.h("div", { className: "uirTranVis_history", style: { pointerEvents: pointerEvents } },
                this.state.transitions.map(function (trans) {
                    return preact_1.h("div", { key: trans.$id, className: "uirTranVis_transition" },
                        preact_1.h(TransitionView_1.TransitionView, { transition: trans }),
                        preact_1.h("div", { style: { minWidth: "18em", border: "1px solid transparent" } }));
                }),
                preact_1.h("div", { style: { width: "200px", height: "1px" } }))));
    };
    TransitionVisualizer.defaultProps = {
        router: null,
        maximumTransitions: 15
    };
    return TransitionVisualizer;
}(preact_1.Component));
exports.TransitionVisualizer = TransitionVisualizer;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var TransitionPopover_1 = __webpack_require__(90);
var BreadcrumbArrow_1 = __webpack_require__(98);
var strings_1 = __webpack_require__(15);
var cancelablePromise_1 = __webpack_require__(99);
var TransitionView = /** @class */ (function (_super) {
    __extends(TransitionView, _super);
    function TransitionView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transitionPromise = null;
        _this.state = {
            status: 'running',
            message: null,
            rejection: null,
            pinned: false,
            expanded: false,
            open: false,
            deregisterFunctions: []
        };
        _this.togglePin = function () { return _this.setState({ pinned: !_this.state.pinned }); };
        _this.toggleExpand = function () { return _this.setState({ expanded: !_this.state.expanded }); };
        _this.open = function () { return _this.setState({ open: true }); };
        _this.close = function () { return _this.setState({ open: false }); };
        return _this;
    }
    TransitionView.prototype.componentDidMount = function () {
        var _this = this;
        var trans = this.props.transition;
        var setMessage = function (message) {
            // Transition hooks are computed when the trans starts; they can't be removed while the trans is running.
            if (!_this.transitionPromise.isCanceled) {
                _this.setState({ message: message });
            }
        };
        var statename = function (state) { return state.name || "(root)"; };
        var fns = [];
        fns.push(trans.onStart({}, function () { return setMessage("Starting..."); }, { priority: 10000 }));
        fns.push(trans.onExit({}, function (t, state) { return setMessage("Exiting " + statename(state)); }, { priority: 10000 }));
        fns.push(trans.onRetain({}, function (t, state) { return setMessage("Retained " + statename(state)); }, { priority: 10000 }));
        fns.push(trans.onEnter({}, function (t, state) { return setMessage("Entering " + statename(state)); }, { priority: 10000 }));
        fns.push(trans.onFinish({}, function () { return setMessage("Finishing..."); }));
        this.setState({ deregisterFunctions: fns });
        var success = function () { return _this.setState({ status: "success", message: null }); };
        var error = function (err) {
            if (err && err.isCanceled)
                return;
            var status = "error", rejection = null;
            if (err) {
                rejection = err && err.message;
                var type = err && err.type;
                if (type == 2 && err.redirected === true) {
                    status = "redirected";
                    var targetState = err['detail'];
                    var toState = targetState.name();
                    var toParams = JSON.stringify(targetState.params());
                    rejection = strings_1.maxLength(100, toState + "(" + toParams) + ")";
                }
                if (type == 5) {
                    status = "ignored";
                    rejection = "All states and parameters in the To and From paths are identical.";
                }
            }
            _this.setState({ status: status, rejection: rejection, message: null });
        };
        this.transitionPromise = cancelablePromise_1.makeCancelable(trans.promise);
        this.transitionPromise.promise.then(success, error);
    };
    TransitionView.prototype.componentWillUnmount = function () {
        this.transitionPromise.cancel();
        if (this.state.deregisterFunctions) {
            this.state.deregisterFunctions.forEach(function (fn) { return fn(); });
        }
    };
    TransitionView.prototype.render = function () {
        return (preact_1.h("div", { onMouseEnter: this.open, onMouseLeave: this.close },
            preact_1.h(TransitionPopover_1.TransitionPopover, { transition: this.props.transition, status: this.state.status, rejection: this.state.rejection, pinned: this.state.pinned, expanded: this.state.expanded, open: this.state.open, togglePinned: this.togglePin, toggleExpand: this.toggleExpand }),
            preact_1.h(BreadcrumbArrow_1.BreadcrumbArrow, { transition: this.props.transition, status: this.state.status, message: this.state.message, toggleExpand: this.toggleExpand })));
    };
    return TransitionView;
}(preact_1.Component));
exports.TransitionView = TransitionView;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var PopoverHeading_1 = __webpack_require__(91);
var TransSummary_1 = __webpack_require__(92);
var NodePaths_1 = __webpack_require__(95);
var TransitionPopover = /** @class */ (function (_super) {
    __extends(TransitionPopover, _super);
    function TransitionPopover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransitionPopover.prototype.render = function () {
        var _this = this;
        if (!this.props.open && !this.props.pinned)
            return null;
        var classes = function () { return "uirTranVis_transitionDetail uirTranVis_panel panel-default " +
            (_this.props.pinned ? "pin " : "") +
            (_this.props.expanded ? "expand " : "") +
            (_this.props.open ? "showDetail " : ""); };
        return (preact_1.h("div", { className: classes() },
            preact_1.h(PopoverHeading_1.PopoverHeading, { transition: this.props.transition, pinned: this.props.pinned, expanded: this.props.expanded, togglePinned: this.props.togglePinned, toggleExpand: this.props.toggleExpand }),
            preact_1.h("div", { className: "uirTranVis_panelBody" },
                preact_1.h(TransSummary_1.TransSummary, { trans: this.props.transition, status: this.props.status, rejection: this.props.rejection }),
                preact_1.h("hr", null),
                preact_1.h(NodePaths_1.NodePaths, { transition: this.props.transition })),
            preact_1.h("div", { className: "uirTranVis_downArrow" })));
    };
    return TransitionPopover;
}(preact_1.Component));
exports.TransitionPopover = TransitionPopover;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var PopoverHeading = /** @class */ (function (_super) {
    __extends(PopoverHeading, _super);
    function PopoverHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopoverHeading.prototype.render = function () {
        var _this = this;
        var tackClass = function () { return "uir-icon uir-icon-thumb-tack " + (_this.props.pinned ? "" : "uir-rotate-35"); };
        var expandClass = function () { return "uir-icon uirTranVis_tooltipRight " + (_this.props.expanded ? "uir-icon-toggle-on" : "uir-icon-toggle-off"); };
        return (preact_1.h("div", { className: "uirTranVis_panelHeading uirTranVis_heading" },
            preact_1.h("div", { style: { cursor: "pointer" }, onClick: this.props.togglePinned },
                preact_1.h("i", { className: tackClass() })),
            preact_1.h("h3", { className: "uirTranVis_panelTitle" },
                "Transition #",
                this.props.transition.$id),
            preact_1.h("div", { style: { cursor: "pointer" }, onClick: this.props.toggleExpand },
                preact_1.h("i", { className: expandClass() }))));
    };
    return PopoverHeading;
}(preact_1.Component));
exports.PopoverHeading = PopoverHeading;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var KeysAndValues_1 = __webpack_require__(34);
var TransSummary = /** @class */ (function (_super) {
    __extends(TransSummary, _super);
    function TransSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransSummary.prototype.render = function () {
        return (preact_1.h("div", { className: "uirTranVis_transSummary" },
            preact_1.h("div", { className: "uirTranVis_summaryData" },
                preact_1.h("span", null, "From:"),
                preact_1.h("strong", null, this.props.trans.from().name || '(root)')),
            preact_1.h("div", { className: "uirTranVis_summaryData" },
                preact_1.h("span", null, "To:"),
                preact_1.h("strong", null, this.props.trans.to().name || '(root)')),
            preact_1.h("div", { className: "uirTranVis_summaryData" },
                preact_1.h("span", null, "Result:"),
                preact_1.h("div", null,
                    preact_1.h("strong", null, this.props.status),
                    this.props.rejection ? preact_1.h("span", null,
                        ": ",
                        this.props.rejection) : null)),
            preact_1.h("div", { className: "uirTranVis_summaryHeading" }, "Parameter Values:"),
            preact_1.h("div", null,
                preact_1.h(KeysAndValues_1.KeysAndValues, { groupedValues: KeysAndValues_1.KeysAndValues.falsyGroupDefinitions, enableGroupToggle: true, data: this.props.trans.params(), modalTitle: "Parameter value", classes: { div: 'uirTranVis_keyValue', key: '', val: '' } }))));
    };
    return TransSummary;
}(preact_1.Component));
exports.TransSummary = TransSummary;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var modal_1 = __webpack_require__(35);
var pretty_1 = __webpack_require__(94);
var ResolveData = /** @class */ (function (_super) {
    __extends(ResolveData, _super);
    function ResolveData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close = function () { return _this.props.close(); };
        return _this;
    }
    ResolveData.prototype.render = function () {
        return (preact_1.h("div", null,
            preact_1.h(modal_1.Modal, null,
                preact_1.h("div", { className: "uirTranVis_modal-header uir-resolve-header" },
                    preact_1.h("div", { style: { "fontSize": "20px" } },
                        this.props.modalTitle,
                        ": ",
                        this.props.id),
                    preact_1.h("button", { className: "uirTranVis_btn uirTranVis_btnXs uirTranVis_btnPrimary", onClick: this.close },
                        preact_1.h("i", { className: "uir-icon uir-iconw-close" }))),
                preact_1.h("div", { className: "uirTranVis_modalBody" },
                    preact_1.h(pretty_1.Pretty, { data: this.props.value })),
                preact_1.h("div", { className: "uirTranVis_modalFooter" },
                    preact_1.h("button", { className: "uirTranVis_btn uirTranVis_btnPrimary", onClick: this.close }, "Close")))));
    };
    return ResolveData;
}(preact_1.Component));
exports.ResolveData = ResolveData;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var Pretty = /** @class */ (function (_super) {
    __extends(Pretty, _super);
    function Pretty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.preStyle = {
            display: 'block',
            padding: '10px 30px',
            margin: '0',
        };
        _this.state = { show: true };
        return _this;
    }
    Pretty.prototype.toggle = function () {
        this.setState({
            show: !this.state.show,
        });
    };
    Pretty.prototype.render = function () {
        return (preact_1.h("div", null, (this.state.show ?
            preact_1.h("pre", { style: this.preStyle }, JSON.stringify(this.props.data, null, 2)) : false)));
    };
    return Pretty;
}(preact_1.Component));
exports.Pretty = Pretty;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var NodeDetail_1 = __webpack_require__(96);
var FlowArrow_1 = __webpack_require__(97);
var NodePaths = /** @class */ (function (_super) {
    __extends(NodePaths, _super);
    function NodePaths() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            retained: [],
            enterExit: []
        };
        return _this;
    }
    NodePaths.prototype.componentDidMount = function () {
        var trans = this.props.transition;
        var tcPaths = Object.assign({}, trans.treeChanges());
        // Ignore the root state when drawing paths.
        ["entering", "exiting", "retained"]
            .forEach(function (key) { return tcPaths[key] = tcPaths[key].filter(function (node) { return !!node.state.name; }); });
        var partialKey = function (pathname, idx) {
            var node = tcPaths[pathname][idx];
            return node ? node.state.name : "";
        };
        var key = function (pathname1, pathname2, idx) {
            return trans.$id + "." + partialKey(pathname1, idx) + "-" + partialKey(pathname2, idx);
        };
        var retained = tcPaths.retained
            .map(function (node, idx) { return ({ key: key('retained', 'retained', idx), to: node, toType: 'retain', from: node, fromType: 'retain' }); });
        var enterExit = [];
        var maxPathLength = Math.max(tcPaths.exiting.length, tcPaths.entering.length);
        for (var i = 0; i < maxPathLength; i++) {
            enterExit.push({
                key: key('exiting', 'entering', i),
                to: tcPaths.entering[i],
                toType: tcPaths.entering[i] && 'enter',
                from: tcPaths.exiting[i],
                fromType: tcPaths.exiting[i] && 'exit'
            });
        }
        this.setState({ retained: retained, enterExit: enterExit });
    };
    NodePaths.prototype.render = function () {
        var _this = this;
        var height = 2000;
        var retained = this.state.retained || [];
        var enterExit = this.state.enterExit || [];
        var lastEnterIdx = enterExit.filter(function (x) { return !!x.toType; }).length - 1;
        return (preact_1.h("table", { className: "uirTranVis_paths" },
            preact_1.h("thead", null,
                preact_1.h("tr", null,
                    preact_1.h("th", null, "From Path"),
                    preact_1.h("th", null, "To Path"))),
            preact_1.h("tbody", null,
                retained.map(function (elem) {
                    return preact_1.h("tr", { key: elem.key },
                        preact_1.h("td", { className: elem.fromType, colSpan: 2 },
                            preact_1.h(NodeDetail_1.NodeDetail, { trans: _this.props.transition, node: elem.from, type: elem.fromType })));
                }),
                enterExit.map(function (elem, idx) {
                    return preact_1.h("tr", { key: elem.key },
                        preact_1.h("td", { colSpan: 2 },
                            preact_1.h("div", { className: "uirTranVis_Row" },
                                preact_1.h("div", { className: "" + elem.fromType }, !elem.fromType ? null :
                                    preact_1.h("div", { className: "uirTranVis_nodeContent" },
                                        preact_1.h(NodeDetail_1.NodeDetail, { trans: _this.props.transition, node: elem.from, type: elem.fromType }),
                                        preact_1.h(FlowArrow_1.FlowArrow, { bottom: 'V', top: idx ? 'V' : elem.toType ? 'RU' : 'AU' }))),
                                preact_1.h("div", { className: "" + elem.toType }, !elem.toType ? null :
                                    preact_1.h("div", { className: "uirTranVis_nodeContent" },
                                        preact_1.h(FlowArrow_1.FlowArrow, { top: idx ? 'V' : elem.fromType ? 'RD' : 'V', bottom: idx == lastEnterIdx ? 'AD' : 'V' }),
                                        preact_1.h(NodeDetail_1.NodeDetail, { trans: _this.props.transition, node: elem.to, type: elem.toType }))))));
                }))));
    };
    return NodePaths;
}(preact_1.Component));
exports.NodePaths = NodePaths;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var strings_1 = __webpack_require__(15);
var KeysAndValues_1 = __webpack_require__(34);
var NodeDetail = /** @class */ (function (_super) {
    __extends(NodeDetail, _super);
    function NodeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeDetail.prototype.stateName = function () {
        var node = this.props.node;
        var name = node && node.state && node.state.name;
        if (name === "")
            name = "(root)";
        return name && name.split(".").reverse()[0];
    };
    NodeDetail.prototype.params = function () {
        var node = this.props.node;
        return node && node.paramSchema.reduce(function (params, param) {
            params[param.id] = node.paramValues[param.id];
            return params;
        }, {});
    };
    NodeDetail.prototype.resolves = function () {
        var asString = function (val) {
            return typeof val === 'string' ? val : strings_1.maxLength(30, strings_1.stringify(val));
        };
        var node = this.props.node;
        var ignoredTokens = ['$stateParams', '$transition$', '$state$', this.props.trans.constructor];
        return node && node.resolvables
            .filter(function (r) { return ignoredTokens.indexOf(r.token) === -1; })
            .reduce(function (acc, r) { acc[asString(r.token)] = r.data; return acc; }, {});
    };
    NodeDetail.prototype.render = function () {
        if (!this.props.node)
            return null;
        var params = this.params();
        var resolves = this.resolves();
        return !this.props.node ? null : (preact_1.h("div", { className: "uirTranVis_nodeDetail" },
            preact_1.h("div", { className: "uirTranVis_heading" },
                preact_1.h("div", { className: "uirTranVis_nowrap uirTranVis_deemphasize" },
                    "(",
                    this.props.type,
                    " state)"),
                preact_1.h("div", { className: "uirTranVis_stateName" }, this.stateName())),
            !!Object.keys(params).length && (preact_1.h("div", { className: "params" },
                preact_1.h("div", { className: "uirTranVis_paramsLabel uirTranVis_deemphasize" }, "Parameter values"),
                preact_1.h(KeysAndValues_1.KeysAndValues, { data: this.params(), classes: { div: 'uirTranVis_keyValue' }, modalTitle: "Parameter value" }))),
            !!Object.keys(resolves).length && (preact_1.h("div", { className: "params resolve" },
                preact_1.h("div", { className: "uirTranVis_resolveLabel uirTranVis_deemphasize" }, "Resolved data"),
                preact_1.h(KeysAndValues_1.KeysAndValues, { data: this.resolves(), classes: { div: 'uirTranVis_keyValue' }, modalTitle: "Resolved value" })))));
    };
    return NodeDetail;
}(preact_1.Component));
exports.NodeDetail = NodeDetail;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var FlowArrow = /** @class */ (function (_super) {
    __extends(FlowArrow, _super);
    function FlowArrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.height = 1000;
        _this.renderCurve = function () { return (preact_1.h("path", { stroke: "white", "stroke-width": "20", fill: "none", d: "M50 " + _this.height + " V 70 Q50 20, 100 20 Q150 20, 150 70 V " + _this.height })); };
        _this.renderVerticalLine = function () { return (preact_1.h("svg", { viewBox: "0 70 100 " + (_this.height - 70), className: "flowArrowSvg" }, _this.renderCurve())); };
        _this.renderCurveRU = function () { return (preact_1.h("svg", { viewBox: "0 0 100 " + _this.height, className: "flowArrowSvg top" }, _this.renderCurve())); };
        _this.renderCurveRD = function () { return (preact_1.h("svg", { viewBox: "100 0 100 " + _this.height, className: "flowArrowSvg top" }, _this.renderCurve())); };
        _this.renderArrowU = function () { return (preact_1.h("svg", { viewBox: "0 0 100 " + _this.height, className: "flowArrowSvg top" },
            preact_1.h("path", { stroke: "white", "stroke-width": "20", fill: "none", d: "M50 " + _this.height + " V 20 " }),
            preact_1.h("polygon", { fill: "white", stroke: "white", "stroke-width": "20", points: "50,20 35,40 65,40" }))); };
        _this.renderArrowD = function () { return (preact_1.h("svg", { viewBox: "0 0 100 " + _this.height, className: "flowArrowSvg bottom" },
            preact_1.h("path", { stroke: "white", "stroke-width": "20", fill: "none", d: "M50 0 V " + (_this.height - 20) }),
            preact_1.h("polygon", { fill: "white", stroke: "white", "stroke-width": "20", points: "50," + (_this.height - 20) + " 35," + (_this.height - 40) + " 65," + (_this.height - 40) }))); };
        return _this;
    }
    FlowArrow.prototype.render = function () {
        var _this = this;
        var renderSvg = function (type) {
            switch (type) {
                case "V": return _this.renderVerticalLine();
                case "RU": return _this.renderCurveRU();
                case "RD": return _this.renderCurveRD();
                case "AU": return _this.renderArrowU();
                case "AD": return _this.renderArrowD();
                default: return null;
            }
        };
        return (preact_1.h("div", { className: "flowArrowCell" },
            preact_1.h("div", { style: { overflow: 'hidden', position: 'relative', flex: '1' } }, renderSvg(this.props.top)),
            preact_1.h("div", { style: { overflow: 'hidden', position: 'relative', flex: '1' } }, renderSvg(this.props.bottom))));
    };
    return FlowArrow;
}(preact_1.Component));
exports.FlowArrow = FlowArrow;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var BreadcrumbArrow = /** @class */ (function (_super) {
    __extends(BreadcrumbArrow, _super);
    function BreadcrumbArrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            return _this.props.toggleExpand();
        };
        return _this;
    }
    BreadcrumbArrow.prototype.iconClass = function () {
        var iconClasses = {
            running: 'uir-icon uir-spin uir-iconw-spinner',
            success: 'uir-icon uir-iconw-check',
            redirected: 'uir-icon uir-iconw-share',
            ignored: 'uir-icon uir-iconw-circle-o',
            error: 'uir-icon uir-iconw-close'
        };
        return iconClasses[this.props.status];
    };
    BreadcrumbArrow.prototype.render = function () {
        return !this.props.transition ? null : (preact_1.h("div", { className: this.props.status + " uirTranVis_historyEntry", onClick: this.handleClick },
            preact_1.h("div", { className: "uirTranVis_historyEntrySummary" },
                preact_1.h("div", { className: "uirTranVis_transId" }, this.props.transition.$id),
                preact_1.h("div", { className: "uirTranVis_status" },
                    this.props.status,
                    !this.props.message ? null : preact_1.h("span", null,
                        ": ",
                        this.props.message)),
                preact_1.h("div", { className: "uirTranVis_transName" },
                    preact_1.h("i", { className: this.iconClass() }),
                    preact_1.h("span", null, this.props.transition.to().name)))));
    };
    return BreadcrumbArrow;
}(preact_1.Component));
exports.BreadcrumbArrow = BreadcrumbArrow;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCancelable = function (promise) {
    var hasCanceled_ = false;
    var wrappedPromise = new Promise(function (resolve, reject) {
        promise.then(function (val) { return hasCanceled_ ? reject({ isCanceled: true }) : resolve(val); }, function (error) { return hasCanceled_ ? reject({ isCanceled: true }) : reject(error); });
    });
    var cancelablePromise = {
        promise: wrappedPromise,
        isCanceled: false,
        cancel: function () {
            cancelablePromise.isCanceled = hasCanceled_ = true;
        },
    };
    return cancelablePromise;
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":false,"attrs":{"nonce":"uiroutervisualizer"}}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(33)(content, options);
if(content.locals) module.exports = content.locals;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, "/*\n    .uirTranVis_history is the breadcrumbs and transition details block.\n    It fills the footer of the screen, and scrolls horizontally.\n    Mouse clicks should pass through to the elements underneath.\n*/\n\n.uirTranVis_history {\n    display: flex;\n    align-items: flex-end;\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    padding: 0 16px;\n    overflow-x: scroll;\n    z-index: 50;\n    /* disable mouse clicks, hover, etc, for the overall div */\n    pointer-events: none;\n}\n\n.uirTranVis_history > * {\n    /* Enable mouse for any sub-elements (the breadcrumb elemetns and detail elements) */\n    pointer-events: all;\n    flex: 0 0 auto;\n}\n\n/*  workaround for modal screen, and chrome and safari not allowing it to be\n    visible outside the .uirTranVis_history overflow while the .uirTranVis_history div is scrolled */\n.fullScreen .uirTranVis_history {\n    top: 0;\n}\n\n/* A single history entry (breadcrumb) arrow looking thing */\n.uirTranVis_history .uirTranVis_historyEntry {\n    position: relative;\n    text-align: center;\n    padding: 12px 30px;\n    margin-bottom: 6px;\n    margin-right: 6px;\n    color: #000;\n    cursor: pointer;\n}\n\n\n/* History entry arrow CSS */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    content: '';\n    position: absolute;\n    background: darkgrey;\n    left: 0;\n    height: 50.2%; /* +0.2% so firefox doesn't render a white line down the center */\n    width: 100%;\n    border: 1px solid black;\n    box-sizing: border-box;\n    z-index: -1;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:before {\n    top: 0;\n    border-bottom: 0;\n    -webkit-transform: skew(40deg, 0deg);\n    -ms-transform: skew(40deg, 0deg);\n    transform: skew(40deg, 0deg);\n}\n\n.uirTranVis_history .uirTranVis_historyEntry:after {\n    bottom: 0;\n    border-top: 0;\n    -webkit-transform: skew(-40deg, 0deg);\n    -ms-transform: skew(-40deg, 0deg);\n    transform: skew(-40deg, 0deg);\n}\n\n/*.uirTranVis_historyEntry::before height: 51% (|| ::after) */\n\n/* Styling for breadcrumb contents */\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary {\n    color: white;\n    white-space: nowrap;\n    font-size: small;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transId {\n    position: absolute;\n    top: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_status {\n    position: absolute;\n    bottom: 3px;\n    left: 10px;\n    font-size: smaller;\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName {\n    font-weight: bold;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center\n}\n.uirTranVis_historyEntry .uirTranVis_historyEntrySummary .uirTranVis_transName span {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_transSummary {\n    margin: 8px 0;\n}\n.uirTranVis_transSummary .uirTranVis_summaryHeading {\n    background-color: #f5f5f5;\n    margin: 8px -16px;\n    padding: 4px 16px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: baseline;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData span {\n    min-width: 60px;\n    text-align: right;\n    padding-right: 6px;\n}\n.uirTranVis_transSummary .uirTranVis_summaryData strong {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    direction: rtl;\n}\n\n.uirTranVis_history .uirTranVis_code {\n    padding: 0px 2px;\n    color: black;\n    background: #e6e6e6;\n    margin: 0;\n    font-family: monospace;\n}\n\n/* breadcrumb/history entry color coding */\n.uirTranVis_history .uirTranVis_historyEntry:before,.uirTranVis_historyEntry:after {\n    background: #737373;\n}\n.uirTranVis_history .uirTranVis_historyEntry:hover:before,.uirTranVis_historyEntry:hover:after {\n    background: #a6a6a6;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.success:before,.uirTranVis_historyEntry.success:after {\n    background: #45803b;\n}\n.uirTranVis_history .uirTranVis_historyEntry.success:hover:before,.uirTranVis_historyEntry.success:hover:after {\n    background: #19a600;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.error:before,.uirTranVis_historyEntry.error:after {\n    background: #bf1f1d;\n}\n.uirTranVis_history .uirTranVis_historyEntry.error:hover:before,.uirTranVis_historyEntry.error:hover:after {\n    background: #e62622;\n}\n\n\n.uirTranVis_history .uirTranVis_historyEntry.ignored:before,.uirTranVis_historyEntry.ignored:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.ignored:hover:before,.uirTranVis_historyEntry.ignored:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_historyEntry.redirected:before,.uirTranVis_historyEntry.redirected:after {\n    background: #e68b05;\n}\n.uirTranVis_history .uirTranVis_historyEntry.redirected:hover:before,.uirTranVis_historyEntry.redirected:hover:after {\n    background: #ff9808;\n}\n\n.uirTranVis_history .uirTranVis_keyValue {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_history .uirTranVis_keyValue + .uirTranVis_keyValue {\n    margin-top: 3px;\n}\n\n\n\n\n/* The transition detail popover (when hovering over a breadcrumb) */\n.uirTranVis_transitionDetail {\n    border: 1px solid lightgrey;\n    font-size: small;\n    transition: box-shadow 0.5s ease,  border 1.0s ease\n}\n\n/* Pointer element points from the uirTranVis_transitionDetail to the breadcrumb */\n.uirTranVis_transitionDetail .uirTranVis_downArrow {\n    position: relative;\n    width: 100%;\n    bottom: -10px;\n    margin-bottom: 10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before, .uirTranVis_transitionDetail .uirTranVis_downArrow:after {\n    content: \"\";\n    position: absolute;\n    border-left: 10px solid transparent;\n    border-right: 10px solid transparent;\n    top: 100%;\n    left: 50%;\n    margin-left: -10px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:before {\n    border-top: 10px solid lightgray;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_downArrow:after{\n    border-top: 10px solid white;\n    margin-top: -1px;\n    z-index: 1;\n}\n\n\n/* The layout and styling of the transition detail popover */\n/*.uirTranVis_transitionDetail .panel-heading {*/\n    /*text-align: center;*/\n/*}*/\n\n.uirTranVis_transitionDetail table {\n    border-collapse: collapse;\n}\n\n.uirTranVis_transitionDetail th {\n    text-align: center;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > *  {\n    flex: 0 1 auto;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_heading > * i {\n    transition: all 0.5s ease;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths {\n    width: 100%;\n}\n\n.uirTranVis_transitionDetail table.uirTranVis_paths td {\n    color: white;\n    border: 0;\n    font-size: small;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_transSummary .uirTranVis_keyValue > div:nth-child(2){\n    padding-left: 8px;\n    font-weight: normal;\n}\n\n\n.uirTranVis_transitionDetail td {\n    padding: 0;\n}\n\n.uirTranVis_transitionDetail td .flowArrowCell {\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: stretch;\n    justify-content: space-between;\n    width: 12px;\n    transition: width 0.25s ease;\n    height: auto;\n    flex: 0 0 auto;\n}\n.uirTranVis_transitionDetail.expand td .flowArrowCell { width: 24px; }\n\n.uirTranVis_transitionDetail .exit  .flowArrowSvg          { right: 0; }\n.uirTranVis_transitionDetail .enter .flowArrowSvg          { left: 0; }\n.uirTranVis_transitionDetail        .flowArrowSvg.bottom   { bottom: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg.top      { top: 0 }\n.uirTranVis_transitionDetail        .flowArrowSvg {\n    position: absolute;\n    width: 100%;\n    height: auto;\n    transition: width 0.25s ease;\n}\n\n/* color code path elements by retained/exited/entered */\n.uirTranVis_transitionDetail .retain {\n    background-color: #737273;\n}\n\n.uirTranVis_transitionDetail .exit {\n    background-color: #7c1010;\n}\n\n.uirTranVis_transitionDetail .enter {\n    background-color: #31592a;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_deemphasize {\n    color: #eaeaea;\n    font-size: x-small;\n}\n\n/* Styling for parameter values and resolve values */\n.uirTranVis_transitionDetail .params {\n    background-color: rgba(255,255,255,0.15);\n    padding: 0;\n    opacity: 0;\n    overflow: hidden;\n    transition: opacity 1s ease;\n    max-height: 0;\n}\n\n.uirTranVis_transitionDetail.expand .params {\n    display: block;\n    border-radius: 4px;\n    box-shadow: 1px 1px 2px black;\n    padding: 8px;\n    max-height: 250px;\n    overflow-y: auto;\n    opacity: 1;\n    margin: 8px 0;\n}\n\n.uirTranVis_transitionDetail.pin {\n    box-shadow: 4px 4px 12px rgba(0,0,0,0.3);\n    border: 1px solid black;\n}\n\n.uirTranVis_transitionDetail.pin .uirTranVis_downArrow:before {\n    border-top-color: black;\n}\n\n\n/* When showing expanded details, put space between path elements */\n.uirTranVis_transitionDetail.expand table.uirTranVis_paths td {\n    max-height: 100px;\n    vertical-align: top;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: stretch;\n    min-width: 400px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_Row > div {\n    flex: 1 0 50%;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeContent {\n    display: flex;\n    flex-flow: row nowrap;\n    min-height: 16px;\n    transition: min-height 0.25s ease;\n}\n\n.uirTranVis_transitionDetail.expand .uirTranVis_nodeContent {\n    height: 100%;\n    min-height: 65px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nodeDetail {\n    flex: 1 1 auto;\n    padding: 3px 7px;\n    min-width: 0;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_stateName {\n    font-weight: bolder;\n    margin-right: 16px;\n    margin-left: 0;\n}\n.uirTranVis_transitionDetail .enter .uirTranVis_stateName {\n    margin-right: 0;\n    margin-left: 16px;\n}\n\n.uirTranVis_transitionDetail .uirTranVis_nowrap {\n    white-space: nowrap;\n}\n\n.uirTranVis_history .uirTranVis_paramsLabel,\n.uirTranVis_history .uirTranVis_resolveLabel {\n    color: white;\n    margin-top: -8px;\n    text-align: center;\n    font-weight: bold;\n}\n\n\nspan.link {\n    cursor: pointer;\n    text-decoration: underline;\n}\n\n\n.uirTranVis_tooltipRight {\n    display: inline;\n    position: relative;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:after {\n    color: rgba(0,0,0,0);\n    text-decoration: none;\n    transition: all 1.5s ease;\n}\n\n.uirTranVis_tooltipRight:hover:after {\n    bottom: 0;\n    color: rgba(0,0,0,0.5);\n    content: attr(title);\n    display: block;\n    position: absolute;\n    white-space: nowrap;\n    font-size: smaller;\n}\n\n\n\n/* Bootstrap stuff */\n\n.uirTranVis_modal .uirTranVis_btnPrimary {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #2e6da4;\n}\n\n.uirTranVis_modal .uirTranVis_btn {\n    display: inline-block;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 1.42857143;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: middle;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background-image: none;\n    border: 1px solid transparent;\n    border-radius: 4px;\n}\n\n.uirTranVis_modal .uirTranVis_btnXs, .uirTranVis_btnGroupXs > .uirTranVis_btn {\n    padding: 1px 5px;\n    font-size: 12px;\n    line-height: 1.5;\n    border-radius: 3px;\n}\n\n.uirTranVis_transition {\n    max-width: 550px;\n}\n\n.uirTranVis_transitionDetail span.link {\n    color: white;\n}\n\n.uirTranVis_history *:not(.fa):not(pre):not(.uirTranVis_code) {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.uirTranVis_transitionDetail .enter .uirTranVis_heading {\n    flex-flow: row nowrap;\n}\n.uirTranVis_transitionDetail .uirTranVis_heading {\n    display: flex;\n    flex-flow: row-reverse nowrap;\n    justify-content: space-between;\n    align-items: baseline;\n}\n\n.uirTranVis_transitionDetail .retain .uirTranVis_heading {\n    justify-content: center;\n}\n\n.uirTranVis_panel {\n    margin-bottom: 20px;\n    background-color: #fff;\n    border: 1px solid lightgrey;\n    border-radius: 4px;\n    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n\n.uirTranVis_panelHeading {\n    color: #333;\n    background-color: #f5f5f5;\n    border-color: #ddd;\n\n    padding: 10px 16px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n\n.uirTranVis_panelTitle {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 16px;\n    color: inherit;\n}\n\n.uirTranVis_panelBody {\n    padding: 0 16px;\n}\n\n\n\n\n\n/* Styles go here */\n.uir-fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    -o-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n\n.uir-fade.in {\n    opacity: 1;\n}\n\n.uirTranVis_modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000;\n}\n\n.uirTranVis_modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5;\n}\n\n.uirTranVis_modal {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: block;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n\n.uirTranVis_modal-dialog {\n    position: relative;\n    width: auto;\n    margin: 10px;\n}\n\n.uirTranVis_modal-content {\n    position: relative;\n    background-color: #fff;\n    -webkit-background-clip: padding-box;\n    background-clip: padding-box;\n    border: 1px solid #999;\n    border: 1px solid rgba(0, 0, 0, .2);\n    border-radius: 6px;\n    outline: 0;\n    -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n    box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n\n.uirTranVis_modal-header {\n    padding: 16px;\n    border-bottom: 1px solid #e5e5e5;\n}\n\n.uir-resolve-header {\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    background-color: cornflowerblue;\n}\n\n.uirTranVis_modalBody {\n    color: black;\n    position: relative;\n    padding: 16px;\n}\n\n.uirTranVis_modalFooter {\n    padding: 16px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n\n.uir-icon {\n    display: inline-block;\n    height: 16px; width: 16px;\n    margin: 4px;\n    background-size: cover;\n    background-position: 0 0;\n}\n\n.uir-spin {\n    animation: uirspin 2s infinite;\n    transform: rotate(0deg);\n}\n\n.uir-rotate-35 {\n    transform: rotate(35deg);\n    opacity: 0.5;\n}\n\n@keyframes uirspin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n\n.uir-iconw-spinner       { background-image: url(" + __webpack_require__(102) + "); }\n.uir-iconw-check         { background-image: url(" + __webpack_require__(103) + "); }\n.uir-iconw-circle-o      { background-image: url(" + __webpack_require__(104) + "); }\n.uir-iconw-share         { background-image: url(" + __webpack_require__(105) + "); }\n.uir-iconw-close         { background-image: url(" + __webpack_require__(106) + "); }\n\n.uir-icon-thumb-tack     { background-image: url(" + __webpack_require__(107) + "); }\n.uir-icon-toggle-on      { background-image: url(" + __webpack_require__(108) + "); }\n.uir-icon-toggle-off     { background-image: url(" + __webpack_require__(109) + "); }\n", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABCElEQVQ4ja2SMU4CYRCF34Db6RISmi04gCZacgDuYElDYcFZLLWx1c4b6BE0sbaysBEh0aCdm3w2szKQ/1cTmGSz+795897Mzm/KBGCSjv14bWbkuDmBCcuY5HitUNAGxsDQoSrwKuAAeATegVHKcexuX0AFdIELf7rAVejoranbCRpPkmpJU0kfZvYp6SQYvARu/F7pogJ2M7k94BS4BPbXkwYUSdW0WOFb+gFugVeg94/iHjADbqTlFlh7/6mzwt14hK0E0AHugbNfOOfAHVA2WLwHpaRDhdman2pmc4cGko4kdSQtUg79Rt3nnPl2CsdKoB9rYgcys+dwrCU9eEe15xdJ503iGzoj4fOiDj0FAAAAAElFTkSuQmCC"

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAc0lEQVQ4jeXQuwmAQBCE4SvEOwOtwjK0KEEQDOzORyD28Rt4wnLoPYwEJ935Jlil/hUgB0agfItXzuyAScFG4Cu1WyqAAdARuHOxBjZ7nIFM4MWLbbFxShNQRWEx0uJPH/Osp5Ew9ozE45uRdCxGdLj1hRzpQwNP2Cwv6wAAAABJRU5ErkJggg=="

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAzElEQVQ4jaWTPQ7CMAyFnzkL7IUNRtoDlPugSkxciwlWFrr0CHCGfgw4qGrTFBVLUST7+fnnJdKfZjEnYJLWkpbuaiTdzYxJRuAA1AytBsqp5BPQesIFOPu5uK8FqlTlFngCeSSeAy/HlP2gddreJzrMHfPwPX0Dm9B2csYPNoyTSdLC/WHb1ykCSTe/V12C2RYIGr93P+RsezmDJQ4U6OCK6BI9GGR8jchYjMrYAVU/PKRjckCg9Bb79ohVjn4mJ8rkUklqzOyerDzX3pD9HgkYdWTVAAAAAElFTkSuQmCC"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA0UlEQVQ4jb2SvQ4BQRSFz/WXSESF0G6j8g7iAXQa4QE0ai+ip9ZIRDTeQUGjUJJ4BUs+hdlkbVixEqeZyZ05352ZM9K/BCyAzi+AA3AFuuF65s3mvKSqpLKkoivnJaUlTQHfzGZRUw4YAGvgQrz8p+sAFWDzwfQK0gwAyy/NAEfAE+AlNNeD7r3IscZAC6gB2UgKz2aXQsnNb5LaZraKSfMkqWVm+/AD9h15HmMUMAp3Di80HGAYB3inlJltJe0knRMB3DjR45clE1AAvMSAX3QHLbpPOaoNWa0AAAAASUVORK5CYII="

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAlElEQVQ4jd3QMQqDQBhEYU8kpBZio41pTBov5B31IEFEhC+NkkU2a7pABrYZeI+dP8v+L7ggj/Q5LmdwgxkT6qCvt25GkxKM3pk2cIf3jClBi+UgCeEF7dmM2/bVYxbck3Ag6SOC/lv4imdEMKE6g6vI5uNNPkswHODH9kLJkBJ0WHc46HfJiu5sRoki0hcok/BP8gJcS0AygPBo+gAAAABJRU5ErkJggg=="

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAArElEQVQ4jbXSPQ5BQRiF4cdfZQWXpdgBW1LZjaugsgoqDdFfKpVEQ2huMcb9E3GSU8yXM2/OZD5+VKtglmCMTjR/YI1THTTFs8TzJq0myHDBLbic5c0aKc29CQBpUbDdlFimvwJ6ub9SHyvcff7AHcs8U6pZwcXYs6onjBq0fMvEm5hgEJwXOGAazDLBNnYjwMn7qu5wxLasTgyItce5KlAHOOBak6lUgmFV4AV5rTJf7ROKuAAAAABJRU5ErkJggg=="

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAApUlEQVQ4jcXSPQrCQBQE4E9B8Rg2gmW0UvEyegQP41XsDWirheDPIbQRtBAtTEACu4opMrDFsjPvvZl9VI1a4d5BF60A/4Y9TsWHPtZ4Bs4DG6Q4Y4VeLh7hGhEv0P5o1sQsKzSQjRMSL9EI2JngKCJ+YhwQ885vFytwRz1SAObfCD+htIVYiKlwiFMcYKjkN0LivRyxRdpmE10ybpL7+MTfq1wdXiIXWWLHZLTUAAAAAElFTkSuQmCC"

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA4UlEQVQ4jcXSsUoDURAF0JPFDWmsrOxshBQKwcqI+Re3ttLCT/AP9FsEI2gW0wqSJUEb/YKk0ybEYp+wbHbXwiIXXvFm7p2Zd+exabRK93100anhf2OG93KBI9wE8QTbOESEZ3wFXgcHmOIcL3CCOS7QLnTbwx0eEBfibVwGzbEwTlIzcowRripyCd4gs+5FEaf4rIi3kEV4xKqhwBi72CnFV3iKGoTFTo346wkDfNQUziK5q2c14hjXuK3IJdiCvuY1Dn+JAWtrhJ7crAVSvGIpNyrFfThp4IyD5v9fefP4AeEQL7aw+eK/AAAAAElFTkSuQmCC"

/***/ })
/******/ ]);
});
//# sourceMappingURL=ui-router-visualizer.js.map