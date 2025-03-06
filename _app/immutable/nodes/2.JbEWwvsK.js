import { Z as onDestroy, w as get_store_value, A as tick, _ as createEventDispatcher, $ as setContext, s as safe_not_equal, d as detach, c as insert_hydration, x as empty, a0 as compute_rest_props, a1 as assign, a2 as exclude_internal_props, E as create_slot, F as update_slot_base, G as get_all_dirty_from_scope, I as get_slot_changes, a3 as set_attributes, f as claim_element, g as children, k as element, C as binding_callbacks, a4 as bubble, r as run_all, a5 as set_dynamic_element_data, a6 as listen, a7 as action_destroyer, i as is_function, a8 as getContext, m as component_subscribe, M as add_render_callback, b as set_data, p as attr, e as append_hydration, j as claim_space, h as claim_text, l as space, t as text, a9 as src_url_equal, o as destroy_each, B as construct_svelte_component, aa as split_css_unit, q as set_style, u as head_selector, n as noop$1, v as get_svelte_dataset } from "../chunks/DhipIWGX.js";
import { S as SvelteComponent, i as init, t as transition_out, a as transition_in, g as group_outros, c as check_outros, f as create_bidirectional_transition, h as create_out_transition, j as create_in_transition, d as destroy_component, m as mount_component, b as claim_component, e as create_component } from "../chunks/w1gIoQsl.js";
import { g as get_spread_update, c as cn, a as get_spread_object, f as flyAndScale, b as ce, e as ensure_array_like, d as Badge, h as cubicOut, D as DATA, B as BlurFade, P as ProjectCard } from "../chunks/CIrq-BIi.js";
import { b as base } from "../chunks/Bfva0ycC.js";
import { d as derived, w as writable, r as readable } from "../chunks/BvUVvXmz.js";
import { d as derivedMode } from "../chunks/C_i4H-yG.js";
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function portalAttr(portal) {
  if (portal !== null) {
    return "";
  }
  return void 0;
}
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn == null ? void 0 : returnedFn();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name: name2,
    attribute,
    selector,
    getEl
  };
}
const isBrowser = typeof document !== "undefined";
function isDocument(element2) {
  return element2 instanceof Document;
}
function isElement$1(element2) {
  return element2 instanceof Element;
}
function isHTMLElement$1(element2) {
  return element2 instanceof HTMLElement;
}
function isTouch(event) {
  return event.pointerType === "touch";
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement$1(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent == null ? void 0 : customEvent.defaultPrevented)
      return;
    return handler(event);
  };
}
const safeOnDestroy = (fn) => {
  try {
    onDestroy(fn);
  } catch {
    return fn;
  }
};
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined$1(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get_store_value(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get());
      }));
    });
    subscriber(get());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get,
    subscribe
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect == null ? void 0 : sideEffect(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
let urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let nanoid = (size2 = 21) => {
  let id = "";
  let i = size2 | 0;
  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
};
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
const kbd = {
  ESCAPE: "Escape"
};
function makeHull(points) {
  const newPoints = points.slice();
  newPoints.sort(POINT_COMPARATOR);
  return makeHullPresorted(newPoints);
}
function makeHullPresorted(points) {
  if (points.length <= 1)
    return points.slice();
  const upperHull = [];
  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    while (upperHull.length >= 2) {
      const q = upperHull[upperHull.length - 1];
      const r = upperHull[upperHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        upperHull.pop();
      else
        break;
    }
    upperHull.push(p);
  }
  upperHull.pop();
  const lowerHull = [];
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i];
    while (lowerHull.length >= 2) {
      const q = lowerHull[lowerHull.length - 1];
      const r = lowerHull[lowerHull.length - 2];
      if ((q.x - r.x) * (p.y - r.y) >= (q.y - r.y) * (p.x - r.x))
        lowerHull.pop();
      else
        break;
    }
    lowerHull.push(p);
  }
  lowerHull.pop();
  if (upperHull.length == 1 && lowerHull.length == 1 && upperHull[0].x == lowerHull[0].x && upperHull[0].y == lowerHull[0].y)
    return upperHull;
  else
    return upperHull.concat(lowerHull);
}
function POINT_COMPARATOR(a, b) {
  if (a.x < b.x)
    return -1;
  else if (a.x > b.x)
    return 1;
  else if (a.y < b.y)
    return -1;
  else if (a.y > b.y)
    return 1;
  else
    return 0;
}
function getPointsFromEl(el) {
  const rect = el.getBoundingClientRect();
  return [
    { x: rect.left, y: rect.top },
    { x: rect.right, y: rect.top },
    { x: rect.right, y: rect.bottom },
    { x: rect.left, y: rect.bottom }
  ];
}
function makeHullFromElements(els) {
  const points = els.flatMap((el) => getPointsFromEl(el));
  return makeHull(points);
}
function pointInPolygon(point, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].x;
    const yi = polygon[i].y;
    const xj = polygon[j].x;
    const yj = polygon[j].y;
    const intersect = yi > point.y !== yj > point.y && point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi;
    if (intersect)
      inside = !inside;
  }
  return inside;
}
function effect(stores, fn) {
  let cb = void 0;
  const destroy = derived(stores, (stores2) => {
    cb == null ? void 0 : cb();
    cb = fn(stores2);
  }).subscribe(noop);
  const unsub = () => {
    destroy();
    cb == null ? void 0 : cb();
  };
  safeOnDestroy(unsub);
  return unsub;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement$1(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  if (portalProp !== void 0)
    return portalProp;
  const portalParent = getPortalParent(node);
  if (portalParent === "body")
    return document.body;
  return null;
}
const defaults$2 = {
  src: "",
  delayMs: 0,
  onLoadingStatusChange: void 0
};
const createAvatar = (props) => {
  const withDefaults = { ...defaults$2, ...props };
  const options = toWritableStores(omit(withDefaults, "loadingStatus", "onLoadingStatusChange"));
  const { src, delayMs } = options;
  const loadingStatusWritable = withDefaults.loadingStatus ?? writable("loading");
  const loadingStatus = overridable(loadingStatusWritable, withDefaults == null ? void 0 : withDefaults.onLoadingStatusChange);
  effect([src, delayMs], ([$src, $delayMs]) => {
    if (isBrowser) {
      const image2 = new Image();
      image2.src = $src;
      image2.onload = () => {
        if (delayMs !== void 0) {
          const timerId = window.setTimeout(() => {
            loadingStatus.set("loaded");
          }, $delayMs);
          return () => window.clearTimeout(timerId);
        } else {
          loadingStatus.set("loaded");
        }
      };
      image2.onerror = () => {
        loadingStatus.set("error");
      };
    }
  });
  const image = makeElement("avatar-image", {
    stores: [src, loadingStatus],
    returned: ([$src, $loadingStatus]) => {
      const imageStyles = styleToString({
        display: $loadingStatus === "loaded" ? "block" : "none"
      });
      return {
        src: $src,
        style: imageStyles
      };
    }
  });
  const fallback = makeElement("avatar-fallback", {
    stores: [loadingStatus],
    returned: ([$loadingStatus]) => {
      return {
        style: $loadingStatus === "loaded" ? styleToString({
          display: "none"
        }) : void 0,
        hidden: $loadingStatus === "loaded" ? true : void 0
      };
    }
  });
  return {
    elements: {
      image,
      fallback
    },
    states: {
      loadingStatus
    },
    options
  };
};
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name: name2,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name2]: {
        ...middlewareData[name2],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element2 = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element2))) != null ? _await$platform$isEle : true) ? element2 : element2.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$1 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element: element2,
      padding = 0
    } = evaluate(options, state) || {};
    if (element2 == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element2);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element2));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset$1 = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element2) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element2);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element2) {
  return ["table", "td", "th"].includes(getNodeName(element2));
}
function isTopLayer(element2) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element2.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element2) {
  let currentNode = getParentNode(element2);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element2) {
  return getWindow(element2).getComputedStyle(element2);
}
function getNodeScroll(element2) {
  if (isElement(element2)) {
    return {
      scrollLeft: element2.scrollLeft,
      scrollTop: element2.scrollTop
    };
  }
  return {
    scrollLeft: element2.scrollX,
    scrollTop: element2.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element2) {
  const css = getComputedStyle$1(element2);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element2);
  const offsetWidth = hasOffset ? element2.offsetWidth : width;
  const offsetHeight = hasOffset ? element2.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element2) {
  return !isElement(element2) ? element2.contextElement : element2;
}
function getScale(element2) {
  const domElement = unwrapElement(element2);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element2) {
  const win = getWindow(element2);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element2, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element2)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element2, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element2.getBoundingClientRect();
  const domElement = unwrapElement(element2);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element2);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element2) {
  return Array.from(element2.getClientRects());
}
function getWindowScrollBarX(element2) {
  return getBoundingClientRect(getDocumentElement(element2)).left + getNodeScroll(element2).scrollLeft;
}
function getDocumentRect(element2) {
  const html = getDocumentElement(element2);
  const scroll = getNodeScroll(element2);
  const body = element2.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element2);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element2, strategy) {
  const win = getWindow(element2);
  const html = getDocumentElement(element2);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element2, strategy) {
  const clientRect = getBoundingClientRect(element2, true, strategy === "fixed");
  const top = clientRect.top + element2.clientTop;
  const left = clientRect.left + element2.clientLeft;
  const scale = isHTMLElement(element2) ? getScale(element2) : createCoords(1);
  const width = element2.clientWidth * scale.x;
  const height = element2.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element2, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element2, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element2));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element2);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element2, stopNode) {
  const parentNode = getParentNode(element2);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element2, cache) {
  const cachedResult = cache.get(element2);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element2, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element2).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element2) : element2;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element2, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element2, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element: element2,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element2) ? [] : getClippingElementAncestors(element2, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element2, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element2, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element2) {
  const {
    width,
    height
  } = getCssDimensions(element2);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element2, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element2, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element2) {
  return getComputedStyle$1(element2).position === "static";
}
function getTrueOffsetParent(element2, polyfill) {
  if (!isHTMLElement(element2) || getComputedStyle$1(element2).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element2);
  }
  return element2.offsetParent;
}
function getOffsetParent(element2, polyfill) {
  const win = getWindow(element2);
  if (isTopLayer(element2)) {
    return win;
  }
  if (!isHTMLElement(element2)) {
    let svgOffsetParent = getParentNode(element2);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element2, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element2) || win;
}
const getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element2) {
  return getComputedStyle$1(element2).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element2, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element2);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element2.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element2);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const offset = offset$1;
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const arrow = arrow$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
const defaultConfig = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: true,
  sameWidth: false,
  overflowPadding: 8
};
const ARROW_TRANSFORM = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function useFloating(reference, floating, opts = {}) {
  if (!floating || !reference || opts === null)
    return {
      destroy: noop
    };
  const options = { ...defaultConfig, ...opts };
  const arrowEl = floating.querySelector("[data-arrow=true]");
  const middleware = [];
  if (options.flip) {
    middleware.push(flip({
      boundary: options.boundary,
      padding: options.overflowPadding
    }));
  }
  const arrowOffset = isHTMLElement$1(arrowEl) ? arrowEl.offsetHeight / 2 : 0;
  if (options.gutter || options.offset) {
    const data = options.gutter ? { mainAxis: options.gutter } : options.offset;
    if ((data == null ? void 0 : data.mainAxis) != null) {
      data.mainAxis += arrowOffset;
    }
    middleware.push(offset(data));
  }
  middleware.push(shift({
    boundary: options.boundary,
    crossAxis: options.overlap,
    padding: options.overflowPadding
  }));
  if (arrowEl) {
    middleware.push(arrow({ element: arrowEl, padding: 8 }));
  }
  middleware.push(size({
    padding: options.overflowPadding,
    apply({ rects, availableHeight, availableWidth }) {
      if (options.sameWidth) {
        Object.assign(floating.style, {
          width: `${Math.round(rects.reference.width)}px`,
          minWidth: "unset"
        });
      }
      if (options.fitViewport) {
        Object.assign(floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`
        });
      }
    }
  }));
  function compute() {
    if (!reference || !floating)
      return;
    if (isHTMLElement$1(reference) && !reference.ownerDocument.documentElement.contains(reference))
      return;
    const { placement, strategy } = options;
    computePosition(reference, floating, {
      placement,
      middleware,
      strategy
    }).then((data) => {
      const x = Math.round(data.x);
      const y = Math.round(data.y);
      const [side, align] = getSideAndAlignFromPlacement(data.placement);
      floating.setAttribute("data-side", side);
      floating.setAttribute("data-align", align);
      Object.assign(floating.style, {
        position: options.strategy,
        top: `${y}px`,
        left: `${x}px`
      });
      if (isHTMLElement$1(arrowEl) && data.middlewareData.arrow) {
        const { x: x2, y: y2 } = data.middlewareData.arrow;
        const dir = data.placement.split("-")[0];
        arrowEl.setAttribute("data-side", dir);
        Object.assign(arrowEl.style, {
          position: "absolute",
          left: x2 != null ? `${x2}px` : "",
          top: y2 != null ? `${y2}px` : "",
          [dir]: `calc(100% - ${arrowOffset}px)`,
          transform: ARROW_TRANSFORM[dir],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return data;
    });
  }
  Object.assign(floating.style, {
    position: options.strategy
  });
  return {
    destroy: autoUpdate(reference, floating, compute)
  };
}
function getSideAndAlignFromPlacement(placement) {
  const [side, align = "center"] = placement.split("-");
  return [side, align];
}
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement$1(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update(target);
  return {
    update,
    destroy
  };
};
({
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults$1 = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  ...omit(defaults$1, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const defaults = {
  positioning: {
    placement: "bottom"
  },
  arrowSize: 8,
  defaultOpen: false,
  closeOnPointerDown: true,
  openDelay: 1e3,
  closeDelay: 0,
  forceVisible: false,
  portal: void 0,
  closeOnEscape: true,
  disableHoverableContent: false,
  group: void 0
};
const { name } = createElHelpers("tooltip");
const groupMap = /* @__PURE__ */ new Map();
const tooltipIdParts = ["trigger", "content"];
function createTooltip(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "open", "ids"));
  const { positioning, arrowSize, closeOnPointerDown, openDelay, closeDelay, forceVisible, portal, closeOnEscape, disableHoverableContent, group } = options;
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults == null ? void 0 : withDefaults.onOpenChange);
  const openReason = writable(null);
  const ids = toWritableStores({ ...generateIds(tooltipIdParts), ...withDefaults.ids });
  let clickedTrigger = false;
  const getEl = (part) => {
    if (!isBrowser)
      return null;
    return document.getElementById(ids[part].get());
  };
  let openTimeout = null;
  let closeTimeout = null;
  function openTooltip(reason) {
    if (closeTimeout) {
      window.clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    if (!openTimeout) {
      openTimeout = window.setTimeout(() => {
        open.set(true);
        openReason.update((prev) => prev ?? reason);
        openTimeout = null;
      }, openDelay.get());
    }
  }
  function closeTooltip(isBlur) {
    if (openTimeout) {
      window.clearTimeout(openTimeout);
      openTimeout = null;
    }
    if (isBlur && isMouseInTooltipArea) {
      openReason.set("pointer");
      return;
    }
    if (!closeTimeout) {
      closeTimeout = window.setTimeout(() => {
        open.set(false);
        openReason.set(null);
        if (isBlur)
          clickedTrigger = false;
        closeTimeout = null;
      }, closeDelay.get());
    }
  }
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
    return $open || $forceVisible;
  });
  const trigger = makeElement(name("trigger"), {
    stores: [ids.content, ids.trigger, open],
    returned: ([$contentId, $triggerId, $open]) => {
      return {
        "aria-describedby": $contentId,
        id: $triggerId,
        "data-state": $open ? "open" : "closed"
      };
    },
    action: (node) => {
      const keydownHandler = (e) => {
        if (closeOnEscape.get() && e.key === kbd.ESCAPE) {
          if (openTimeout) {
            window.clearTimeout(openTimeout);
            openTimeout = null;
          }
          open.set(false);
        }
      };
      const unsub = executeCallbacks(addMeltEventListener(node, "pointerdown", () => {
        const $closeOnPointerDown = closeOnPointerDown.get();
        if (!$closeOnPointerDown)
          return;
        open.set(false);
        clickedTrigger = true;
        if (openTimeout) {
          window.clearTimeout(openTimeout);
          openTimeout = null;
        }
      }), addMeltEventListener(node, "pointerenter", (e) => {
        if (isTouch(e))
          return;
        openTooltip("pointer");
      }), addMeltEventListener(node, "pointerleave", (e) => {
        if (isTouch(e))
          return;
        if (openTimeout) {
          window.clearTimeout(openTimeout);
          openTimeout = null;
        }
      }), addMeltEventListener(node, "focus", () => {
        if (clickedTrigger)
          return;
        openTooltip("focus");
      }), addMeltEventListener(node, "blur", () => closeTooltip(true)), addMeltEventListener(node, "keydown", keydownHandler), addEventListener(document, "keydown", keydownHandler));
      return {
        destroy: unsub
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: [isVisible, open, portal, ids.content],
    returned: ([$isVisible, $open, $portal, $contentId]) => {
      return removeUndefined$1({
        role: "tooltip",
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: $isVisible ? void 0 : styleToString({ display: "none" }),
        id: $contentId,
        "data-portal": portalAttr($portal),
        "data-state": $open ? "open" : "closed"
      });
    },
    action: (node) => {
      let unsubFloating = noop;
      let unsubPortal = noop;
      const unsubDerived = effect([isVisible, positioning, portal], ([$isVisible, $positioning, $portal]) => {
        unsubPortal();
        unsubFloating();
        const triggerEl = getEl("trigger");
        if (!$isVisible || !triggerEl)
          return;
        tick().then(() => {
          unsubPortal();
          unsubFloating();
          const portalDest = getPortalDestination(node, $portal);
          if (portalDest)
            unsubPortal = usePortal(node, portalDest).destroy;
          unsubFloating = useFloating(triggerEl, node, $positioning).destroy;
        });
      });
      function handleScroll(e) {
        if (!open.get())
          return;
        const target = e.target;
        if (!isElement$1(target) && !isDocument(target))
          return;
        const triggerEl = getEl("trigger");
        if (triggerEl && target.contains(triggerEl)) {
          closeTooltip();
        }
      }
      const unsubEvents = executeCallbacks(addMeltEventListener(node, "pointerenter", () => openTooltip("pointer")), addMeltEventListener(node, "pointerdown", () => openTooltip("pointer")), addEventListener(window, "scroll", handleScroll, { capture: true }));
      return {
        destroy() {
          unsubEvents();
          unsubPortal();
          unsubFloating();
          unsubDerived();
        }
      };
    }
  });
  const arrow2 = makeElement(name("arrow"), {
    stores: arrowSize,
    returned: ($arrowSize) => ({
      "data-arrow": true,
      style: styleToString({
        position: "absolute",
        width: `var(--arrow-size, ${$arrowSize}px)`,
        height: `var(--arrow-size, ${$arrowSize}px)`
      })
    })
  });
  let isMouseInTooltipArea = false;
  effect(open, ($open) => {
    const currentGroup = group.get();
    if (currentGroup === void 0 || currentGroup === false) {
      return;
    }
    if (!$open) {
      if (groupMap.get(currentGroup) === open) {
        groupMap.delete(currentGroup);
      }
      return;
    }
    const currentOpen = groupMap.get(currentGroup);
    currentOpen == null ? void 0 : currentOpen.set(false);
    groupMap.set(currentGroup, open);
  });
  effect([open, openReason], ([$open, $openReason]) => {
    if (!$open || !isBrowser)
      return;
    return executeCallbacks(addEventListener(document, "mousemove", (e) => {
      const contentEl = getEl("content");
      const triggerEl = getEl("trigger");
      if (!contentEl || !triggerEl)
        return;
      const polygonElements = disableHoverableContent.get() ? [triggerEl] : [triggerEl, contentEl];
      const polygon = makeHullFromElements(polygonElements);
      isMouseInTooltipArea = pointInPolygon({
        x: e.clientX,
        y: e.clientY
      }, polygon);
      if ($openReason !== "pointer")
        return;
      if (!isMouseInTooltipArea) {
        closeTooltip();
      }
    }));
  });
  return {
    ids,
    elements: {
      trigger,
      content,
      arrow: arrow2
    },
    states: { open },
    options
  };
}
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getAvatarData() {
  const NAME = "avatar";
  const PARTS = ["root", "image", "fallback"];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getAvatarData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const avatar = { ...createAvatar(removeUndefined(props)), getAttrs: getAttrs2 };
  setContext(NAME, avatar);
  return {
    ...avatar,
    updateOption: getOptionUpdater(avatar.options)
  };
}
const get_default_slot_changes_1$2 = (dirty) => ({});
const get_default_slot_context_1$2 = (ctx) => ({ attrs: (
  /*attrs*/
  ctx[2]
) });
const get_default_slot_changes$3 = (dirty) => ({});
const get_default_slot_context$3 = (ctx) => ({ attrs: (
  /*attrs*/
  ctx[2]
) });
function create_else_block$3(ctx) {
  let div;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_default_slot_context_1$2
  );
  let div_levels = [
    /*$$restProps*/
    ctx[3],
    /*attrs*/
    ctx[2]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[9](div);
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              get_default_slot_changes_1$2
            ),
            get_default_slot_context_1$2
          );
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3],
        /*attrs*/
        ctx2[2]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[9](null);
    }
  };
}
function create_if_block$5(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_default_slot_context$3
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        128)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              get_default_slot_changes$3
            ),
            get_default_slot_context$3
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$9(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$5, create_else_block$3];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*asChild*/
      ctx2[1]
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function instance$9($$self, $$props, $$invalidate) {
  const omit_props_names = ["delayMs", "loadingStatus", "onLoadingStatusChange", "asChild", "el"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { delayMs = void 0 } = $$props;
  let { loadingStatus = void 0 } = $$props;
  let { onLoadingStatusChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { states: { loadingStatus: localLoadingStatus }, updateOption, getAttrs: getAttrs2 } = setCtx$1({
    src: "",
    delayMs,
    onLoadingStatusChange: ({ next }) => {
      $$invalidate(4, loadingStatus = next);
      onLoadingStatusChange == null ? void 0 : onLoadingStatusChange(next);
      return next;
    }
  });
  const attrs = getAttrs2("root");
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("delayMs" in $$new_props) $$invalidate(5, delayMs = $$new_props.delayMs);
    if ("loadingStatus" in $$new_props) $$invalidate(4, loadingStatus = $$new_props.loadingStatus);
    if ("onLoadingStatusChange" in $$new_props) $$invalidate(6, onLoadingStatusChange = $$new_props.onLoadingStatusChange);
    if ("asChild" in $$new_props) $$invalidate(1, asChild = $$new_props.asChild);
    if ("el" in $$new_props) $$invalidate(0, el = $$new_props.el);
    if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*loadingStatus*/
    16) {
      loadingStatus !== void 0 && localLoadingStatus.set(loadingStatus);
    }
    if ($$self.$$.dirty & /*delayMs*/
    32) {
      updateOption("delayMs", delayMs);
    }
  };
  return [
    el,
    asChild,
    attrs,
    $$restProps,
    loadingStatus,
    delayMs,
    onLoadingStatusChange,
    $$scope,
    slots,
    div_binding
  ];
}
let Avatar$1 = class Avatar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, {
      delayMs: 5,
      loadingStatus: 4,
      onLoadingStatusChange: 6,
      asChild: 1,
      el: 0
    });
  }
};
function builderActions(node, params) {
  const unsubs = [];
  params.builders.forEach((builder) => {
    const act = builder.action(node);
    if (act) {
      unsubs.push(act);
    }
  });
  return {
    destroy: () => {
      unsubs.forEach((unsub) => {
        if (unsub.destroy) {
          unsub.destroy();
        }
      });
    }
  };
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key) => {
      if (key !== "action") {
        attrs[key] = builder[key];
      }
    });
  });
  return attrs;
}
function create_else_block$2(ctx) {
  let previous_tag = (
    /*href*/
    ctx[1] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[1] ? "a" : "button") && create_dynamic_element_1(ctx)
  );
  return {
    c() {
      if (svelte_element) svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element) svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element) svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*href*/
        ctx2[1] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element_1(ctx2);
          previous_tag = /*href*/
          ctx2[1] ? "a" : "button";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[1] ? "a" : "button"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element_1(ctx2);
          previous_tag = /*href*/
          ctx2[1] ? "a" : "button";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*href*/
        ctx2[1] ? "a" : "button";
      }
    },
    i(local) {
      if (current) return;
      transition_in(svelte_element, local);
      current = true;
    },
    o(local) {
      transition_out(svelte_element, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element_anchor);
      }
      if (svelte_element) svelte_element.d(detaching);
    }
  };
}
function create_if_block$4(ctx) {
  let previous_tag = (
    /*href*/
    ctx[1] ? "a" : "button"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[1] ? "a" : "button") && create_dynamic_element(ctx)
  );
  return {
    c() {
      if (svelte_element) svelte_element.c();
      svelte_element_anchor = empty();
    },
    l(nodes) {
      if (svelte_element) svelte_element.l(nodes);
      svelte_element_anchor = empty();
    },
    m(target, anchor) {
      if (svelte_element) svelte_element.m(target, anchor);
      insert_hydration(target, svelte_element_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (
        /*href*/
        ctx2[1] ? "a" : "button"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*href*/
          ctx2[1] ? "a" : "button";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[1] ? "a" : "button"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*href*/
          ctx2[1] ? "a" : "button";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*href*/
        ctx2[1] ? "a" : "button";
      }
    },
    i(local) {
      if (current) return;
      transition_in(svelte_element, local);
      current = true;
    },
    o(local) {
      transition_out(svelte_element, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element_anchor);
      }
      if (svelte_element) svelte_element.d(detaching);
    }
  };
}
function create_dynamic_element_1(ctx) {
  let svelte_element;
  let svelte_element_type_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let svelte_element_levels = [
    {
      type: svelte_element_type_value = /*href*/
      ctx[1] ? void 0 : (
        /*type*/
        ctx[2]
      )
    },
    { href: (
      /*href*/
      ctx[1]
    ) },
    { tabindex: "0" },
    /*$$restProps*/
    ctx[5],
    /*attrs*/
    ctx[4]
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[1] ? "a" : "button"
      );
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[1] ? "a" : "button") || "null").toUpperCase(),
        { type: true, href: true, tabindex: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot) default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*href*/
        ctx[1] ? "a" : "button"
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      ctx[29](svelte_element);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "click",
            /*click_handler_1*/
            ctx[18]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler_1*/
            ctx[19]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler_1*/
            ctx[20]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler_1*/
            ctx[21]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler_1*/
            ctx[22]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler_1*/
            ctx[23]
          ),
          listen(
            svelte_element,
            "mousedown",
            /*mousedown_handler_1*/
            ctx[24]
          ),
          listen(
            svelte_element,
            "pointerdown",
            /*pointerdown_handler_1*/
            ctx[25]
          ),
          listen(
            svelte_element,
            "mouseup",
            /*mouseup_handler_1*/
            ctx[26]
          ),
          listen(
            svelte_element,
            "pointerup",
            /*pointerup_handler_1*/
            ctx[27]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*href*/
        ctx2[1] ? "a" : "button"
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href, type*/
        6 && svelte_element_type_value !== (svelte_element_type_value = /*href*/
        ctx2[1] ? void 0 : (
          /*type*/
          ctx2[2]
        ))) && { type: svelte_element_type_value },
        (!current || dirty & /*href*/
        2) && { href: (
          /*href*/
          ctx2[1]
        ) },
        { tabindex: "0" },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        /*attrs*/
        ctx2[4]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[29](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let svelte_element_type_value;
  let builderActions_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[7].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  let svelte_element_levels = [
    {
      type: svelte_element_type_value = /*href*/
      ctx[1] ? void 0 : (
        /*type*/
        ctx[2]
      )
    },
    { href: (
      /*href*/
      ctx[1]
    ) },
    { tabindex: "0" },
    getAttrs(
      /*builders*/
      ctx[3]
    ),
    /*$$restProps*/
    ctx[5],
    /*attrs*/
    ctx[4]
  ];
  let svelte_element_data = {};
  for (let i = 0; i < svelte_element_levels.length; i += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[1] ? "a" : "button"
      );
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[1] ? "a" : "button") || "null").toUpperCase(),
        { type: true, href: true, tabindex: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot) default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*href*/
        ctx[1] ? "a" : "button"
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
      }
      ctx[28](svelte_element);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            svelte_element,
            "click",
            /*click_handler*/
            ctx[8]
          ),
          listen(
            svelte_element,
            "change",
            /*change_handler*/
            ctx[9]
          ),
          listen(
            svelte_element,
            "keydown",
            /*keydown_handler*/
            ctx[10]
          ),
          listen(
            svelte_element,
            "keyup",
            /*keyup_handler*/
            ctx[11]
          ),
          listen(
            svelte_element,
            "mouseenter",
            /*mouseenter_handler*/
            ctx[12]
          ),
          listen(
            svelte_element,
            "mouseleave",
            /*mouseleave_handler*/
            ctx[13]
          ),
          listen(
            svelte_element,
            "mousedown",
            /*mousedown_handler*/
            ctx[14]
          ),
          listen(
            svelte_element,
            "pointerdown",
            /*pointerdown_handler*/
            ctx[15]
          ),
          listen(
            svelte_element,
            "mouseup",
            /*mouseup_handler*/
            ctx[16]
          ),
          listen(
            svelte_element,
            "pointerup",
            /*pointerup_handler*/
            ctx[17]
          ),
          action_destroyer(builderActions_action = builderActions.call(null, svelte_element, { builders: (
            /*builders*/
            ctx[3]
          ) }))
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_dynamic_element_data(
        /*href*/
        ctx2[1] ? "a" : "button"
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href, type*/
        6 && svelte_element_type_value !== (svelte_element_type_value = /*href*/
        ctx2[1] ? void 0 : (
          /*type*/
          ctx2[2]
        ))) && { type: svelte_element_type_value },
        (!current || dirty & /*href*/
        2) && { href: (
          /*href*/
          ctx2[1]
        ) },
        { tabindex: "0" },
        dirty & /*builders*/
        8 && getAttrs(
          /*builders*/
          ctx2[3]
        ),
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5],
        /*attrs*/
        ctx2[4]
      ]));
      if (builderActions_action && is_function(builderActions_action.update) && dirty & /*builders*/
      8) builderActions_action.update.call(null, { builders: (
        /*builders*/
        ctx2[3]
      ) });
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[28](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$8(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$4, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*builders*/
      ctx2[3] && /*builders*/
      ctx2[3].length
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  const omit_props_names = ["href", "type", "builders", "el"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { href = void 0 } = $$props;
  let { type = void 0 } = $$props;
  let { builders = [] } = $$props;
  let { el = void 0 } = $$props;
  const attrs = { "data-button-root": "" };
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mousedown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function pointerdown_handler(event) {
    bubble.call(this, $$self, event);
  }
  function mouseup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function pointerup_handler(event) {
    bubble.call(this, $$self, event);
  }
  function click_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function change_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function keyup_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseenter_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseleave_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mousedown_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function pointerdown_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function mouseup_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function pointerup_handler_1(event) {
    bubble.call(this, $$self, event);
  }
  function svelte_element_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  function svelte_element_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("href" in $$new_props) $$invalidate(1, href = $$new_props.href);
    if ("type" in $$new_props) $$invalidate(2, type = $$new_props.type);
    if ("builders" in $$new_props) $$invalidate(3, builders = $$new_props.builders);
    if ("el" in $$new_props) $$invalidate(0, el = $$new_props.el);
    if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [
    el,
    href,
    type,
    builders,
    attrs,
    $$restProps,
    $$scope,
    slots,
    click_handler,
    change_handler,
    keydown_handler,
    keyup_handler,
    mouseenter_handler,
    mouseleave_handler,
    mousedown_handler,
    pointerdown_handler,
    mouseup_handler,
    pointerup_handler,
    click_handler_1,
    change_handler_1,
    keydown_handler_1,
    keyup_handler_1,
    mouseenter_handler_1,
    mouseleave_handler_1,
    mousedown_handler_1,
    pointerdown_handler_1,
    mouseup_handler_1,
    pointerup_handler_1,
    svelte_element_binding,
    svelte_element_binding_1
  ];
}
let Button$1 = class Button extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { href: 1, type: 2, builders: 3, el: 0 });
  }
};
function getPositioningUpdater(store) {
  return (props = {}) => {
    return updatePositioning$1(store, props);
  };
}
function updatePositioning$1(store, props) {
  const defaultPositioningProps = {
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    sameWidth: false,
    avoidCollisions: true,
    collisionPadding: 8,
    fitViewport: false,
    strategy: "absolute",
    overlap: false
  };
  const withDefaults = { ...defaultPositioningProps, ...props };
  store.update((prev) => {
    return {
      ...prev,
      placement: joinPlacement(withDefaults.side, withDefaults.align),
      offset: {
        ...prev.offset,
        mainAxis: withDefaults.sideOffset,
        crossAxis: withDefaults.alignOffset
      },
      gutter: 0,
      sameWidth: withDefaults.sameWidth,
      flip: withDefaults.avoidCollisions,
      overflowPadding: withDefaults.collisionPadding,
      boundary: withDefaults.collisionBoundary,
      fitViewport: withDefaults.fitViewport,
      strategy: withDefaults.strategy,
      overlap: withDefaults.overlap
    };
  });
}
function joinPlacement(side, align) {
  if (align === "center")
    return side;
  return `${side}-${align}`;
}
function getTooltipData() {
  const NAME = "tooltip";
  const PARTS = ["arrow", "content", "trigger"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getTooltipData();
  const getAttrs2 = createBitAttrs(NAME, PARTS);
  const tooltip = {
    ...createTooltip({
      positioning: {
        placement: "top",
        gutter: 0
      },
      openDelay: 700,
      ...removeUndefined(props),
      forceVisible: true
    }),
    getAttrs: getAttrs2
  };
  setContext(NAME, tooltip);
  return {
    ...tooltip,
    updateOption: getOptionUpdater(tooltip.options)
  };
}
function getCtx() {
  const { NAME } = getTooltipData();
  return getContext(NAME);
}
function updatePositioning(props) {
  const defaultPlacement = {
    side: "top",
    align: "center",
    sideOffset: 1
  };
  const withDefaults = { ...defaultPlacement, ...props };
  const { options: { positioning } } = getCtx();
  const updater = getPositioningUpdater(positioning);
  updater({ ...withDefaults });
}
const get_default_slot_changes$2 = (dirty) => ({ ids: dirty & /*$idValues*/
1 });
const get_default_slot_context$2 = (ctx) => ({ ids: (
  /*$idValues*/
  ctx[0]
) });
function create_fragment$7(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[12].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[11],
    get_default_slot_context$2
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, $idValues*/
        2049)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[11],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[11]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[11],
              dirty,
              get_default_slot_changes$2
            ),
            get_default_slot_context$2
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let $idValues;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { closeOnPointerDown = void 0 } = $$props;
  let { openDelay = void 0 } = $$props;
  let { closeDelay = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { disableHoverableContent = void 0 } = $$props;
  let { group = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnEscape,
    portal,
    closeOnPointerDown,
    openDelay,
    closeDelay,
    forceVisible: true,
    defaultOpen: open,
    disableHoverableContent,
    group,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange == null ? void 0 : onOpenChange(next);
        $$invalidate(2, open = next);
      }
      return next;
    },
    positioning: { gutter: 0, offset: { mainAxis: 1 } }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  component_subscribe($$self, idValues, (value) => $$invalidate(0, $idValues = value));
  $$self.$$set = ($$props2) => {
    if ("closeOnEscape" in $$props2) $$invalidate(3, closeOnEscape = $$props2.closeOnEscape);
    if ("portal" in $$props2) $$invalidate(4, portal = $$props2.portal);
    if ("closeOnPointerDown" in $$props2) $$invalidate(5, closeOnPointerDown = $$props2.closeOnPointerDown);
    if ("openDelay" in $$props2) $$invalidate(6, openDelay = $$props2.openDelay);
    if ("closeDelay" in $$props2) $$invalidate(7, closeDelay = $$props2.closeDelay);
    if ("open" in $$props2) $$invalidate(2, open = $$props2.open);
    if ("onOpenChange" in $$props2) $$invalidate(8, onOpenChange = $$props2.onOpenChange);
    if ("disableHoverableContent" in $$props2) $$invalidate(9, disableHoverableContent = $$props2.disableHoverableContent);
    if ("group" in $$props2) $$invalidate(10, group = $$props2.group);
    if ("$$scope" in $$props2) $$invalidate(11, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*open*/
    4) {
      open !== void 0 && localOpen.set(open);
    }
    if ($$self.$$.dirty & /*closeOnEscape*/
    8) {
      updateOption("closeOnEscape", closeOnEscape);
    }
    if ($$self.$$.dirty & /*portal*/
    16) {
      updateOption("portal", portal);
    }
    if ($$self.$$.dirty & /*closeOnPointerDown*/
    32) {
      updateOption("closeOnPointerDown", closeOnPointerDown);
    }
    if ($$self.$$.dirty & /*openDelay*/
    64) {
      updateOption("openDelay", openDelay);
    }
    if ($$self.$$.dirty & /*closeDelay*/
    128) {
      updateOption("closeDelay", closeDelay);
    }
    if ($$self.$$.dirty & /*group*/
    1024) {
      updateOption("group", group);
    }
    if ($$self.$$.dirty & /*disableHoverableContent*/
    512) {
      updateOption("disableHoverableContent", disableHoverableContent);
    }
  };
  return [
    $idValues,
    idValues,
    open,
    closeOnEscape,
    portal,
    closeOnPointerDown,
    openDelay,
    closeDelay,
    onOpenChange,
    disableHoverableContent,
    group,
    $$scope,
    slots
  ];
}
class Tooltip extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      closeOnEscape: 3,
      portal: 4,
      closeOnPointerDown: 5,
      openDelay: 6,
      closeDelay: 7,
      open: 2,
      onOpenChange: 8,
      disableHoverableContent: 9,
      group: 10
    });
  }
}
const get_default_slot_changes_5 = (dirty) => ({ builder: dirty[0] & /*builder*/
256 });
const get_default_slot_context_5 = (ctx) => ({ builder: (
  /*builder*/
  ctx[8]
) });
const get_default_slot_changes_4 = (dirty) => ({ builder: dirty[0] & /*builder*/
256 });
const get_default_slot_context_4 = (ctx) => ({ builder: (
  /*builder*/
  ctx[8]
) });
const get_default_slot_changes_3 = (dirty) => ({ builder: dirty[0] & /*builder*/
256 });
const get_default_slot_context_3 = (ctx) => ({ builder: (
  /*builder*/
  ctx[8]
) });
const get_default_slot_changes_2 = (dirty) => ({ builder: dirty[0] & /*builder*/
256 });
const get_default_slot_context_2 = (ctx) => ({ builder: (
  /*builder*/
  ctx[8]
) });
const get_default_slot_changes_1$1 = (dirty) => ({ builder: dirty[0] & /*builder*/
256 });
const get_default_slot_context_1$1 = (ctx) => ({ builder: (
  /*builder*/
  ctx[8]
) });
const get_default_slot_changes$1 = (dirty) => ({ builder: dirty[0] & /*builder*/
256 });
const get_default_slot_context$1 = (ctx) => ({ builder: (
  /*builder*/
  ctx[8]
) });
function create_if_block_5(ctx) {
  let div;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[28].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[27],
    get_default_slot_context_5
  );
  let div_levels = [
    /*builder*/
    ctx[8],
    /*$$restProps*/
    ctx[13]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[33](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(
            /*builder*/
            ctx[8].action(div)
          ),
          listen(
            div,
            "m-pointerdown",
            /*dispatch*/
            ctx[12]
          ),
          listen(
            div,
            "m-pointerenter",
            /*dispatch*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope, builder*/
        134217984)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[27],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[27]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[27],
              dirty,
              get_default_slot_changes_5
            ),
            get_default_slot_context_5
          );
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty[0] & /*builder*/
        256 && /*builder*/
        ctx2[8],
        dirty[0] & /*$$restProps*/
        8192 && /*$$restProps*/
        ctx2[13]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[33](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_4(ctx) {
  let div;
  let div_outro;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[28].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[27],
    get_default_slot_context_4
  );
  let div_levels = [
    /*builder*/
    ctx[8],
    /*$$restProps*/
    ctx[13]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[32](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(
            /*builder*/
            ctx[8].action(div)
          ),
          listen(
            div,
            "m-pointerdown",
            /*dispatch*/
            ctx[12]
          ),
          listen(
            div,
            "m-pointerenter",
            /*dispatch*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope, builder*/
        134217984)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[27],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[27]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[27],
              dirty,
              get_default_slot_changes_4
            ),
            get_default_slot_context_4
          );
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty[0] & /*builder*/
        256 && /*builder*/
        ctx[8],
        dirty[0] & /*$$restProps*/
        8192 && /*$$restProps*/
        ctx[13]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      if (div_outro) div_outro.end(1);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (local) {
        div_outro = create_out_transition(
          div,
          /*outTransition*/
          ctx[5],
          /*outTransitionConfig*/
          ctx[6]
        );
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[32](null);
      if (detaching && div_outro) div_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_3(ctx) {
  let div;
  let div_intro;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[28].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[27],
    get_default_slot_context_3
  );
  let div_levels = [
    /*builder*/
    ctx[8],
    /*$$restProps*/
    ctx[13]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[31](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(
            /*builder*/
            ctx[8].action(div)
          ),
          listen(
            div,
            "m-pointerdown",
            /*dispatch*/
            ctx[12]
          ),
          listen(
            div,
            "m-pointerenter",
            /*dispatch*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope, builder*/
        134217984)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[27],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[27]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[27],
              dirty,
              get_default_slot_changes_3
            ),
            get_default_slot_context_3
          );
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty[0] & /*builder*/
        256 && /*builder*/
        ctx[8],
        dirty[0] & /*$$restProps*/
        8192 && /*$$restProps*/
        ctx[13]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      if (local) {
        if (!div_intro) {
          add_render_callback(() => {
            div_intro = create_in_transition(
              div,
              /*inTransition*/
              ctx[3],
              /*inTransitionConfig*/
              ctx[4]
            );
            div_intro.start();
          });
        }
      }
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[31](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_2$1(ctx) {
  let div;
  let div_intro;
  let div_outro;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[28].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[27],
    get_default_slot_context_2
  );
  let div_levels = [
    /*builder*/
    ctx[8],
    /*$$restProps*/
    ctx[13]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[30](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(
            /*builder*/
            ctx[8].action(div)
          ),
          listen(
            div,
            "m-pointerdown",
            /*dispatch*/
            ctx[12]
          ),
          listen(
            div,
            "m-pointerenter",
            /*dispatch*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope, builder*/
        134217984)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[27],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[27]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[27],
              dirty,
              get_default_slot_changes_2
            ),
            get_default_slot_context_2
          );
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty[0] & /*builder*/
        256 && /*builder*/
        ctx[8],
        dirty[0] & /*$$restProps*/
        8192 && /*$$restProps*/
        ctx[13]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      if (local) {
        add_render_callback(() => {
          if (!current) return;
          if (div_outro) div_outro.end(1);
          div_intro = create_in_transition(
            div,
            /*inTransition*/
            ctx[3],
            /*inTransitionConfig*/
            ctx[4]
          );
          div_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (div_intro) div_intro.invalidate();
      if (local) {
        div_outro = create_out_transition(
          div,
          /*outTransition*/
          ctx[5],
          /*outTransitionConfig*/
          ctx[6]
        );
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[30](null);
      if (detaching && div_outro) div_outro.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block_1$2(ctx) {
  let div;
  let div_transition;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[28].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[27],
    get_default_slot_context_1$1
  );
  let div_levels = [
    /*builder*/
    ctx[8],
    /*$$restProps*/
    ctx[13]
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      if (default_slot) default_slot.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      ctx[29](div);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(
            /*builder*/
            ctx[8].action(div)
          ),
          listen(
            div,
            "m-pointerdown",
            /*dispatch*/
            ctx[12]
          ),
          listen(
            div,
            "m-pointerenter",
            /*dispatch*/
            ctx[12]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope, builder*/
        134217984)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[27],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[27]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[27],
              dirty,
              get_default_slot_changes_1$1
            ),
            get_default_slot_context_1$1
          );
        }
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [
        dirty[0] & /*builder*/
        256 && /*builder*/
        ctx[8],
        dirty[0] & /*$$restProps*/
        8192 && /*$$restProps*/
        ctx[13]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      if (local) {
        add_render_callback(() => {
          if (!current) return;
          if (!div_transition) div_transition = create_bidirectional_transition(
            div,
            /*transition*/
            ctx[1],
            /*transitionConfig*/
            ctx[2],
            true
          );
          div_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      if (local) {
        if (!div_transition) div_transition = create_bidirectional_transition(
          div,
          /*transition*/
          ctx[1],
          /*transitionConfig*/
          ctx[2],
          false
        );
        div_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[29](null);
      if (detaching && div_transition) div_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$3(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[28].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[27],
    get_default_slot_context$1
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty[0] & /*$$scope, builder*/
        134217984)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[27],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[27]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[27],
              dirty,
              get_default_slot_changes$1
            ),
            get_default_slot_context$1
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$6(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [
    create_if_block$3,
    create_if_block_1$2,
    create_if_block_2$1,
    create_if_block_3,
    create_if_block_4,
    create_if_block_5
  ];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*asChild*/
      ctx2[7] && /*$open*/
      ctx2[9]
    ) return 0;
    if (
      /*transition*/
      ctx2[1] && /*$open*/
      ctx2[9]
    ) return 1;
    if (
      /*inTransition*/
      ctx2[3] && /*outTransition*/
      ctx2[5] && /*$open*/
      ctx2[9]
    ) return 2;
    if (
      /*inTransition*/
      ctx2[3] && /*$open*/
      ctx2[9]
    ) return 3;
    if (
      /*outTransition*/
      ctx2[5] && /*$open*/
      ctx2[9]
    ) return 4;
    if (
      /*$open*/
      ctx2[9]
    ) return 5;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let builder;
  const omit_props_names = [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $open;
  let $content;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { side = "top" } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 0 } = $$props;
  let { alignOffset = 0 } = $$props;
  let { collisionPadding = 8 } = $$props;
  let { avoidCollisions = true } = $$props;
  let { collisionBoundary = void 0 } = $$props;
  let { sameWidth = false } = $$props;
  let { fitViewport = false } = $$props;
  let { strategy = "absolute" } = $$props;
  let { overlap = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs: getAttrs2 } = getCtx();
  component_subscribe($$self, content, (value) => $$invalidate(26, $content = value));
  component_subscribe($$self, open, (value) => $$invalidate(9, $open = value));
  const dispatch = createDispatcher();
  const attrs = getAttrs2("content");
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  function div_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  function div_binding_2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  function div_binding_3($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  function div_binding_4($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(13, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("transition" in $$new_props) $$invalidate(1, transition = $$new_props.transition);
    if ("transitionConfig" in $$new_props) $$invalidate(2, transitionConfig = $$new_props.transitionConfig);
    if ("inTransition" in $$new_props) $$invalidate(3, inTransition = $$new_props.inTransition);
    if ("inTransitionConfig" in $$new_props) $$invalidate(4, inTransitionConfig = $$new_props.inTransitionConfig);
    if ("outTransition" in $$new_props) $$invalidate(5, outTransition = $$new_props.outTransition);
    if ("outTransitionConfig" in $$new_props) $$invalidate(6, outTransitionConfig = $$new_props.outTransitionConfig);
    if ("asChild" in $$new_props) $$invalidate(7, asChild = $$new_props.asChild);
    if ("id" in $$new_props) $$invalidate(14, id = $$new_props.id);
    if ("side" in $$new_props) $$invalidate(15, side = $$new_props.side);
    if ("align" in $$new_props) $$invalidate(16, align = $$new_props.align);
    if ("sideOffset" in $$new_props) $$invalidate(17, sideOffset = $$new_props.sideOffset);
    if ("alignOffset" in $$new_props) $$invalidate(18, alignOffset = $$new_props.alignOffset);
    if ("collisionPadding" in $$new_props) $$invalidate(19, collisionPadding = $$new_props.collisionPadding);
    if ("avoidCollisions" in $$new_props) $$invalidate(20, avoidCollisions = $$new_props.avoidCollisions);
    if ("collisionBoundary" in $$new_props) $$invalidate(21, collisionBoundary = $$new_props.collisionBoundary);
    if ("sameWidth" in $$new_props) $$invalidate(22, sameWidth = $$new_props.sameWidth);
    if ("fitViewport" in $$new_props) $$invalidate(23, fitViewport = $$new_props.fitViewport);
    if ("strategy" in $$new_props) $$invalidate(24, strategy = $$new_props.strategy);
    if ("overlap" in $$new_props) $$invalidate(25, overlap = $$new_props.overlap);
    if ("el" in $$new_props) $$invalidate(0, el = $$new_props.el);
    if ("$$scope" in $$new_props) $$invalidate(27, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty[0] & /*id*/
    16384) {
      if (id) {
        ids.content.set(id);
      }
    }
    if ($$self.$$.dirty[0] & /*$content*/
    67108864) {
      $$invalidate(8, builder = $content);
    }
    if ($$self.$$.dirty[0] & /*builder*/
    256) {
      Object.assign(builder, attrs);
    }
    if ($$self.$$.dirty[0] & /*$open, side, align, sideOffset, alignOffset, collisionPadding, avoidCollisions, collisionBoundary, sameWidth, fitViewport, strategy, overlap*/
    67076608) {
      if ($open) {
        updatePositioning({
          side,
          align,
          sideOffset,
          alignOffset,
          collisionPadding,
          avoidCollisions,
          collisionBoundary,
          sameWidth,
          fitViewport,
          strategy,
          overlap
        });
      }
    }
  };
  return [
    el,
    transition,
    transitionConfig,
    inTransition,
    inTransitionConfig,
    outTransition,
    outTransitionConfig,
    asChild,
    builder,
    $open,
    content,
    open,
    dispatch,
    $$restProps,
    id,
    side,
    align,
    sideOffset,
    alignOffset,
    collisionPadding,
    avoidCollisions,
    collisionBoundary,
    sameWidth,
    fitViewport,
    strategy,
    overlap,
    $content,
    $$scope,
    slots,
    div_binding,
    div_binding_1,
    div_binding_2,
    div_binding_3,
    div_binding_4
  ];
}
let Tooltip_content$1 = class Tooltip_content extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance$6,
      create_fragment$6,
      safe_not_equal,
      {
        transition: 1,
        transitionConfig: 2,
        inTransition: 3,
        inTransitionConfig: 4,
        outTransition: 5,
        outTransitionConfig: 6,
        asChild: 7,
        id: 14,
        side: 15,
        align: 16,
        sideOffset: 17,
        alignOffset: 18,
        collisionPadding: 19,
        avoidCollisions: 20,
        collisionBoundary: 21,
        sameWidth: 22,
        fitViewport: 23,
        strategy: 24,
        overlap: 25,
        el: 0
      },
      null,
      [-1, -1]
    );
  }
};
const get_default_slot_changes_1 = (dirty) => ({ builder: dirty & /*builder*/
4 });
const get_default_slot_context_1 = (ctx) => ({ builder: (
  /*builder*/
  ctx[2]
) });
const get_default_slot_changes = (dirty) => ({ builder: dirty & /*builder*/
4 });
const get_default_slot_context = (ctx) => ({ builder: (
  /*builder*/
  ctx[2]
) });
function create_else_block$1(ctx) {
  let button;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context_1
  );
  let button_levels = [
    /*builder*/
    ctx[2],
    { type: "button" },
    /*$$restProps*/
    ctx[5]
  ];
  let button_data = {};
  for (let i = 0; i < button_levels.length; i += 1) {
    button_data = assign(button_data, button_levels[i]);
  }
  return {
    c() {
      button = element("button");
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      button = claim_element(nodes, "BUTTON", { type: true });
      var button_nodes = children(button);
      if (default_slot) default_slot.l(button_nodes);
      button_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(button, button_data);
    },
    m(target, anchor) {
      insert_hydration(target, button, anchor);
      if (default_slot) {
        default_slot.m(button, null);
      }
      if (button.autofocus) button.focus();
      ctx[10](button);
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(
            /*builder*/
            ctx[2].action(button)
          ),
          listen(
            button,
            "m-blur",
            /*dispatch*/
            ctx[4]
          ),
          listen(
            button,
            "m-focus",
            /*dispatch*/
            ctx[4]
          ),
          listen(
            button,
            "m-keydown",
            /*dispatch*/
            ctx[4]
          ),
          listen(
            button,
            "m-pointerdown",
            /*dispatch*/
            ctx[4]
          ),
          listen(
            button,
            "m-pointerenter",
            /*dispatch*/
            ctx[4]
          ),
          listen(
            button,
            "m-pointerleave",
            /*dispatch*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, builder*/
        260)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes_1
            ),
            get_default_slot_context_1
          );
        }
      }
      set_attributes(button, button_data = get_spread_update(button_levels, [
        dirty & /*builder*/
        4 && /*builder*/
        ctx2[2],
        { type: "button" },
        dirty & /*$$restProps*/
        32 && /*$$restProps*/
        ctx2[5]
      ]));
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(button);
      }
      if (default_slot) default_slot.d(detaching);
      ctx[10](null);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_if_block$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    get_default_slot_context
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, builder*/
        260)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*asChild*/
      ctx2[1]
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let builder;
  const omit_props_names = ["asChild", "id", "el"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $trigger;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, ids, getAttrs: getAttrs2 } = getCtx();
  component_subscribe($$self, trigger, (value) => $$invalidate(7, $trigger = value));
  const dispatch = createDispatcher();
  const attrs = getAttrs2("trigger");
  function button_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      el = $$value;
      $$invalidate(0, el);
    });
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("asChild" in $$new_props) $$invalidate(1, asChild = $$new_props.asChild);
    if ("id" in $$new_props) $$invalidate(6, id = $$new_props.id);
    if ("el" in $$new_props) $$invalidate(0, el = $$new_props.el);
    if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*id*/
    64) {
      if (id) {
        ids.trigger.set(id);
      }
    }
    if ($$self.$$.dirty & /*$trigger*/
    128) {
      $$invalidate(2, builder = $trigger);
    }
    if ($$self.$$.dirty & /*builder*/
    4) {
      Object.assign(builder, attrs);
    }
  };
  return [
    el,
    asChild,
    builder,
    trigger,
    dispatch,
    $$restProps,
    id,
    $trigger,
    $$scope,
    slots,
    button_binding
  ];
}
class Tooltip_trigger extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { asChild: 1, id: 6, el: 0 });
  }
}
function create_default_slot$4(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[6],
    null
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        64)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[6],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[6]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[6],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$4(ctx) {
  let tooltipprimitive_content;
  let current;
  const tooltipprimitive_content_spread_levels = [
    { transition: (
      /*transition*/
      ctx[2]
    ) },
    {
      transitionConfig: (
        /*transitionConfig*/
        ctx[3]
      )
    },
    { sideOffset: (
      /*sideOffset*/
      ctx[1]
    ) },
    {
      class: cn(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
        /*className*/
        ctx[0]
      )
    },
    /*$$restProps*/
    ctx[4]
  ];
  let tooltipprimitive_content_props = {
    $$slots: { default: [create_default_slot$4] },
    $$scope: { ctx }
  };
  for (let i = 0; i < tooltipprimitive_content_spread_levels.length; i += 1) {
    tooltipprimitive_content_props = assign(tooltipprimitive_content_props, tooltipprimitive_content_spread_levels[i]);
  }
  tooltipprimitive_content = new Tooltip_content$1({ props: tooltipprimitive_content_props });
  return {
    c() {
      create_component(tooltipprimitive_content.$$.fragment);
    },
    l(nodes) {
      claim_component(tooltipprimitive_content.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tooltipprimitive_content, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const tooltipprimitive_content_changes = dirty & /*transition, transitionConfig, sideOffset, className, $$restProps*/
      31 ? get_spread_update(tooltipprimitive_content_spread_levels, [
        dirty & /*transition*/
        4 && { transition: (
          /*transition*/
          ctx2[2]
        ) },
        dirty & /*transitionConfig*/
        8 && {
          transitionConfig: (
            /*transitionConfig*/
            ctx2[3]
          )
        },
        dirty & /*sideOffset*/
        2 && { sideOffset: (
          /*sideOffset*/
          ctx2[1]
        ) },
        dirty & /*className*/
        1 && {
          class: cn(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
            /*className*/
            ctx2[0]
          )
        },
        dirty & /*$$restProps*/
        16 && get_spread_object(
          /*$$restProps*/
          ctx2[4]
        )
      ]) : {};
      if (dirty & /*$$scope*/
      64) {
        tooltipprimitive_content_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltipprimitive_content.$set(tooltipprimitive_content_changes);
    },
    i(local) {
      if (current) return;
      transition_in(tooltipprimitive_content.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tooltipprimitive_content.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tooltipprimitive_content, detaching);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  const omit_props_names = ["class", "sideOffset", "transition", "transitionConfig"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { sideOffset = 4 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = { y: 8, duration: 150 } } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("class" in $$new_props) $$invalidate(0, className = $$new_props.class);
    if ("sideOffset" in $$new_props) $$invalidate(1, sideOffset = $$new_props.sideOffset);
    if ("transition" in $$new_props) $$invalidate(2, transition = $$new_props.transition);
    if ("transitionConfig" in $$new_props) $$invalidate(3, transitionConfig = $$new_props.transitionConfig);
    if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
  };
  return [
    className,
    sideOffset,
    transition,
    transitionConfig,
    $$restProps,
    slots,
    $$scope
  ];
}
class Tooltip_content2 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      class: 0,
      sideOffset: 1,
      transition: 2,
      transitionConfig: 3
    });
  }
}
const Root = Tooltip;
const Trigger = Tooltip_trigger;
const buttonVariants = ce({
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function create_default_slot$3(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[8],
    null
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        256)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[8],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[8]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[8],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let buttonprimitive_root;
  let current;
  const buttonprimitive_root_spread_levels = [
    { builders: (
      /*builders*/
      ctx[3]
    ) },
    {
      class: cn(buttonVariants({
        variant: (
          /*variant*/
          ctx[1]
        ),
        size: (
          /*size*/
          ctx[2]
        ),
        className: (
          /*className*/
          ctx[0]
        )
      }))
    },
    { type: "button" },
    /*$$restProps*/
    ctx[4]
  ];
  let buttonprimitive_root_props = {
    $$slots: { default: [create_default_slot$3] },
    $$scope: { ctx }
  };
  for (let i = 0; i < buttonprimitive_root_spread_levels.length; i += 1) {
    buttonprimitive_root_props = assign(buttonprimitive_root_props, buttonprimitive_root_spread_levels[i]);
  }
  buttonprimitive_root = new Button$1({ props: buttonprimitive_root_props });
  buttonprimitive_root.$on(
    "click",
    /*click_handler*/
    ctx[6]
  );
  buttonprimitive_root.$on(
    "keydown",
    /*keydown_handler*/
    ctx[7]
  );
  return {
    c() {
      create_component(buttonprimitive_root.$$.fragment);
    },
    l(nodes) {
      claim_component(buttonprimitive_root.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(buttonprimitive_root, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const buttonprimitive_root_changes = dirty & /*builders, variant, size, className, $$restProps*/
      31 ? get_spread_update(buttonprimitive_root_spread_levels, [
        dirty & /*builders*/
        8 && { builders: (
          /*builders*/
          ctx2[3]
        ) },
        dirty & /*variant, size, className*/
        7 && {
          class: cn(buttonVariants({
            variant: (
              /*variant*/
              ctx2[1]
            ),
            size: (
              /*size*/
              ctx2[2]
            ),
            className: (
              /*className*/
              ctx2[0]
            )
          }))
        },
        buttonprimitive_root_spread_levels[2],
        dirty & /*$$restProps*/
        16 && get_spread_object(
          /*$$restProps*/
          ctx2[4]
        )
      ]) : {};
      if (dirty & /*$$scope*/
      256) {
        buttonprimitive_root_changes.$$scope = { dirty, ctx: ctx2 };
      }
      buttonprimitive_root.$set(buttonprimitive_root_changes);
    },
    i(local) {
      if (current) return;
      transition_in(buttonprimitive_root.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(buttonprimitive_root.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(buttonprimitive_root, detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["class", "variant", "size", "builders"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { variant = "default" } = $$props;
  let { size: size2 = "default" } = $$props;
  let { builders = [] } = $$props;
  function click_handler(event) {
    bubble.call(this, $$self, event);
  }
  function keydown_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("class" in $$new_props) $$invalidate(0, className = $$new_props.class);
    if ("variant" in $$new_props) $$invalidate(1, variant = $$new_props.variant);
    if ("size" in $$new_props) $$invalidate(2, size2 = $$new_props.size);
    if ("builders" in $$new_props) $$invalidate(3, builders = $$new_props.builders);
    if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
  };
  return [
    className,
    variant,
    size2,
    builders,
    $$restProps,
    slots,
    click_handler,
    keydown_handler,
    $$scope
  ];
}
class Button2 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      class: 0,
      variant: 1,
      size: 2,
      builders: 3
    });
  }
}
function create_default_slot$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  return {
    c() {
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[4],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[4]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[4],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let avatarprimitive_root;
  let current;
  const avatarprimitive_root_spread_levels = [
    { delayMs: (
      /*delayMs*/
      ctx[1]
    ) },
    {
      class: cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        /*className*/
        ctx[0]
      )
    },
    /*$$restProps*/
    ctx[2]
  ];
  let avatarprimitive_root_props = {
    $$slots: { default: [create_default_slot$2] },
    $$scope: { ctx }
  };
  for (let i = 0; i < avatarprimitive_root_spread_levels.length; i += 1) {
    avatarprimitive_root_props = assign(avatarprimitive_root_props, avatarprimitive_root_spread_levels[i]);
  }
  avatarprimitive_root = new Avatar$1({ props: avatarprimitive_root_props });
  return {
    c() {
      create_component(avatarprimitive_root.$$.fragment);
    },
    l(nodes) {
      claim_component(avatarprimitive_root.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(avatarprimitive_root, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const avatarprimitive_root_changes = dirty & /*delayMs, className, $$restProps*/
      7 ? get_spread_update(avatarprimitive_root_spread_levels, [
        dirty & /*delayMs*/
        2 && { delayMs: (
          /*delayMs*/
          ctx2[1]
        ) },
        dirty & /*className*/
        1 && {
          class: cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            /*className*/
            ctx2[0]
          )
        },
        dirty & /*$$restProps*/
        4 && get_spread_object(
          /*$$restProps*/
          ctx2[2]
        )
      ]) : {};
      if (dirty & /*$$scope*/
      16) {
        avatarprimitive_root_changes.$$scope = { dirty, ctx: ctx2 };
      }
      avatarprimitive_root.$set(avatarprimitive_root_changes);
    },
    i(local) {
      if (current) return;
      transition_in(avatarprimitive_root.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(avatarprimitive_root.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(avatarprimitive_root, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  const omit_props_names = ["class", "delayMs"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { delayMs = void 0 } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(2, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("class" in $$new_props) $$invalidate(0, className = $$new_props.class);
    if ("delayMs" in $$new_props) $$invalidate(1, delayMs = $$new_props.delayMs);
    if ("$$scope" in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  return [className, delayMs, $$restProps, slots, $$scope];
}
class Avatar2 extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { class: 0, delayMs: 1 });
  }
}
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  child_ctx[9] = i;
  return child_ctx;
}
function create_default_slot_1$1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, alt: true, class: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = "" + (base + /*image*/
      ctx[4]))) attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*title*/
        ctx[0]
      );
      attr(img, "class", "object-contain");
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*image*/
      16 && !src_url_equal(img.src, img_src_value = "" + (base + /*image*/
      ctx2[4]))) {
        attr(img, "src", img_src_value);
      }
      if (dirty & /*title*/
      1) {
        attr(
          img,
          "alt",
          /*title*/
          ctx2[0]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(img);
      }
    }
  };
}
function create_if_block_2(ctx) {
  let p;
  let t;
  return {
    c() {
      p = element("p");
      t = text(
        /*location*/
        ctx[3]
      );
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(
        p_nodes,
        /*location*/
        ctx[3]
      );
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-sm text-muted-foreground");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*location*/
      8) set_data(
        t,
        /*location*/
        ctx2[3]
      );
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_if_block_1$1(ctx) {
  let time;
  let t;
  return {
    c() {
      time = element("time");
      t = text(
        /*dates*/
        ctx[2]
      );
      this.h();
    },
    l(nodes) {
      time = claim_element(nodes, "TIME", { class: true });
      var time_nodes = children(time);
      t = claim_text(
        time_nodes,
        /*dates*/
        ctx[2]
      );
      time_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(time, "class", "text-xs text-muted-foreground");
    },
    m(target, anchor) {
      insert_hydration(target, time, anchor);
      append_hydration(time, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*dates*/
      4) set_data(
        t,
        /*dates*/
        ctx2[2]
      );
    },
    d(detaching) {
      if (detaching) {
        detach(time);
      }
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let current;
  let each_value = ensure_array_like(
    /*links*/
    ctx[5]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mt-2 flex flex-row flex-wrap items-start gap-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*links*/
      32) {
        each_value = ensure_array_like(
          /*links*/
          ctx2[5]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot$1(ctx) {
  let switch_instance;
  let t0;
  let t1_value = (
    /*link*/
    ctx[7].title + ""
  );
  let t1;
  let current;
  var switch_value = (
    /*link*/
    ctx[7].icon
  );
  function switch_props(ctx2, dirty) {
    return {
      props: { class: "h-4 w-4 ", strokeWidth: "1.6" }
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      t0 = space();
      t1 = text(t1_value);
    },
    l(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      t0 = claim_space(nodes);
      t1 = claim_text(nodes, t1_value);
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, t1, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*links*/
      32 && switch_value !== (switch_value = /*link*/
      ctx2[7].icon)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, t0.parentNode, t0);
        } else {
          switch_instance = null;
        }
      }
      if ((!current || dirty & /*links*/
      32) && t1_value !== (t1_value = /*link*/
      ctx2[7].title + "")) set_data(t1, t1_value);
    },
    i(local) {
      if (current) return;
      if (switch_instance) transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance) transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
      }
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_each_block$1(ctx) {
  let a;
  let badge;
  let t;
  let a_href_value;
  let current;
  badge = new Badge({
    props: {
      key: (
        /*idx*/
        ctx[9]
      ),
      title: (
        /*link*/
        ctx[7].title
      ),
      class: "flex gap-2",
      style: "color:black; background-color:#d9f9f4",
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      a = element("a");
      create_component(badge.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      a = claim_element(nodes, "A", { href: true });
      var a_nodes = children(a);
      claim_component(badge.$$.fragment, a_nodes);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a, "href", a_href_value = /*link*/
      ctx[7].href);
    },
    m(target, anchor) {
      insert_hydration(target, a, anchor);
      mount_component(badge, a, null);
      append_hydration(a, t);
      current = true;
    },
    p(ctx2, dirty) {
      const badge_changes = {};
      if (dirty & /*links*/
      32) badge_changes.title = /*link*/
      ctx2[7].title;
      if (dirty & /*$$scope, links*/
      1056) {
        badge_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge.$set(badge_changes);
      if (!current || dirty & /*links*/
      32 && a_href_value !== (a_href_value = /*link*/
      ctx2[7].href)) {
        attr(a, "href", a_href_value);
      }
    },
    i(local) {
      if (current) return;
      transition_in(badge.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(badge.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(a);
      }
      destroy_component(badge);
    }
  };
}
function create_fragment$1(ctx) {
  let li;
  let div1;
  let avatar_root;
  let t0;
  let div0;
  let a;
  let h2;
  let t1;
  let t2;
  let t3;
  let t4;
  let current;
  avatar_root = new Avatar2({
    props: {
      class: "m-auto border",
      style: "margin-right:20px; border-radius: 0; width: 100px; height: 100px;",
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  let if_block0 = (
    /*location*/
    ctx[3] && create_if_block_2(ctx)
  );
  let if_block1 = (
    /*dates*/
    ctx[2] && create_if_block_1$1(ctx)
  );
  let if_block2 = (
    /*links*/
    ctx[5] && /*links*/
    ctx[5].length > 0 && create_if_block$1(ctx)
  );
  return {
    c() {
      li = element("li");
      div1 = element("div");
      create_component(avatar_root.$$.fragment);
      t0 = space();
      div0 = element("div");
      a = element("a");
      h2 = element("h2");
      t1 = text(
        /*title*/
        ctx[0]
      );
      t2 = space();
      if (if_block0) if_block0.c();
      t3 = space();
      if (if_block1) if_block1.c();
      t4 = space();
      if (if_block2) if_block2.c();
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      div1 = claim_element(li_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(avatar_root.$$.fragment, div1_nodes);
      t0 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a = claim_element(div0_nodes, "A", { href: true, class: true });
      var a_nodes = children(a);
      h2 = claim_element(a_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t1 = claim_text(
        h2_nodes,
        /*title*/
        ctx[0]
      );
      h2_nodes.forEach(detach);
      a_nodes.forEach(detach);
      t2 = claim_space(div0_nodes);
      if (if_block0) if_block0.l(div0_nodes);
      t3 = claim_space(div0_nodes);
      if (if_block1) if_block1.l(div0_nodes);
      t4 = claim_space(div0_nodes);
      if (if_block2) if_block2.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h2, "class", "font-semibold leading-1.6 mb-2 ");
      attr(
        a,
        "href",
        /*url*/
        ctx[1]
      );
      attr(a, "class", "custom-underline text-current hover:text-opacity-75 svelte-y9nwr2");
      attr(div0, "class", "flex flex-1 flex-col justify-start gap-1 ml-4");
      attr(div1, "class", "flex items-start");
      attr(li, "class", "relative ml-1 py-4 flex");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, div1);
      mount_component(avatar_root, div1, null);
      append_hydration(div1, t0);
      append_hydration(div1, div0);
      append_hydration(div0, a);
      append_hydration(a, h2);
      append_hydration(h2, t1);
      append_hydration(div0, t2);
      if (if_block0) if_block0.m(div0, null);
      append_hydration(div0, t3);
      if (if_block1) if_block1.m(div0, null);
      append_hydration(div0, t4);
      if (if_block2) if_block2.m(div0, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const avatar_root_changes = {};
      if (dirty & /*$$scope, image, title*/
      1041) {
        avatar_root_changes.$$scope = { dirty, ctx: ctx2 };
      }
      avatar_root.$set(avatar_root_changes);
      if (!current || dirty & /*title*/
      1) set_data(
        t1,
        /*title*/
        ctx2[0]
      );
      if (!current || dirty & /*url*/
      2) {
        attr(
          a,
          "href",
          /*url*/
          ctx2[1]
        );
      }
      if (
        /*location*/
        ctx2[3]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          if_block0.m(div0, t3);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (
        /*dates*/
        ctx2[2]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          if_block1.m(div0, t4);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (
        /*links*/
        ctx2[5] && /*links*/
        ctx2[5].length > 0
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*links*/
          32) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block$1(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div0, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(avatar_root.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(avatar_root.$$.fragment, local);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(li);
      }
      destroy_component(avatar_root);
      if (if_block0) if_block0.d();
      if (if_block1) if_block1.d();
      if (if_block2) if_block2.d();
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { title } = $$props;
  let { url } = $$props;
  let { description } = $$props;
  let { dates } = $$props;
  let { location } = $$props;
  let { image = "" } = $$props;
  let { links = [] } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2) $$invalidate(0, title = $$props2.title);
    if ("url" in $$props2) $$invalidate(1, url = $$props2.url);
    if ("description" in $$props2) $$invalidate(6, description = $$props2.description);
    if ("dates" in $$props2) $$invalidate(2, dates = $$props2.dates);
    if ("location" in $$props2) $$invalidate(3, location = $$props2.location);
    if ("image" in $$props2) $$invalidate(4, image = $$props2.image);
    if ("links" in $$props2) $$invalidate(5, links = $$props2.links);
  };
  return [title, url, dates, location, image, links, description];
}
class ReportingCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      title: 0,
      url: 1,
      description: 6,
      dates: 2,
      location: 3,
      image: 4,
      links: 5
    });
  }
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [xValue, xUnit] = split_css_unit(x);
  const [yValue, yUnit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * xValue}${xUnit}, ${(1 - t) * yValue}${yUnit});
			opacity: ${target_opacity - od * u}`
  };
}
const videos = [
  {
    id: 1,
    title: "Under One Dark Sky",
    length: "19:19",
    src: "https://www.youtube-nocookie.com/embed/7amgJlkS4pk",
    description: "As light pollution worsens in cities and countryside, a hopeful movement led by activists in Western Marin, California, aims to preserve the night sky by making it the Bay Area's first Dark Sky Community."
  },
  {
    id: 2,
    title: "Tidal Variance",
    length: "29:42",
    src: "https://drive.google.com/file/d/1ybwNRVpggg-CS95s35wyBDjbfxS6uEH9/preview",
    description: "A student documentary that features the regional water issues caused by climate change including Miami’s sea-level rise, Bangladesh’s seasonal flooding, and Little Haiti’s climate gentrification."
  },
  {
    id: 3,
    title: "Shanghai Lockdown 2022",
    length: "2:40",
    src: "https://www.youtube-nocookie.com/embed/fxK_2Dpu0nA",
    description: "A short film that features real-life situations during the world’s strictest COVID Lockdown in the Chinese city of Shanghai in April 2022."
  },
  {
    id: 4,
    title: "Food Desert in Overtown",
    length: "6:11",
    src: "https://www.youtube-nocookie.com/embed/NfCUjJpLhek",
    description: "A short film that focuses on food insecurity issues, particularly in Overtown, an under-resourced Caribbean neighborhood located in the city of Miami."
  },
  {
    id: 5,
    title: "How Microchip Shortage Impacted us?",
    length: "7:08",
    src: "https://www.youtube-nocookie.com/embed/YokNYODZe3c",
    description: "An interview-based short film that talks about the global impacts of microchip shortage due to the pandemic. "
  },
  {
    id: 6,
    title: "Cuban Domino Effect in Miami",
    length: "1:36",
    src: "https://www.youtube-nocookie.com/embed/Fd9q-lt4dck",
    description: `A short film that features a tile-based game of "dominoes". The scenario of film was set up at Miami's most iconic spot, Domino Park, in the Cuban community of Little Havana. `
  },
  {
    id: 7,
    title: "A Haitian artist: Louis Rosemont",
    length: "1:09",
    src: "https://www.youtube-nocookie.com/embed/wvpY_stVBVg",
    description: "An interview-based short film with local Haitian artist Louis Rosemont."
  },
  {
    id: 8,
    title: "Find Little Haiti",
    length: "2:40",
    src: "https://www.youtube-nocookie.com/embed/myVN-ftyxnk",
    description: 'A short film that features the largest Haitian American community "Little Haiti" in Miami-Dade County in Florida, with a strong focus on its history, culture, and art evolution.'
  },
  {
    id: 9,
    title: "A Chinese Wheat Straw Artist",
    length: "3:28",
    src: "https://www.youtube-nocookie.com/embed/KS841VeASVY",
    description: "A short film that features the first wheat straw artist in China, Renjie Shi who doesn't paint with pens but with wheat straw to create an incredible world of fine art."
  }
];
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = i;
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function get_each_context_2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[12] = list[i];
  child_ctx[14] = i;
  return child_ctx;
}
function get_each_context_3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[15] = list[i];
  return child_ctx;
}
function create_default_slot_29(ctx) {
  let div;
  let textContent = "Hi, I'm Eve (Yi) Lu✨";
  return {
    c() {
      div = element("div");
      div.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { style: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-18c0fir") div.textContent = textContent;
      this.h();
    },
    h() {
      set_style(div, "font-family", '"Cairo Play", serif');
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_default_slot_28(ctx) {
  let t;
  return {
    c() {
      t = text("I'm a data journalist. I tell stories with data📊, create graphics🎨 and sometimes make films📹.");
    },
    l(nodes) {
      t = claim_text(nodes, "I'm a data journalist. I tell stories with data📊, create graphics🎨 and sometimes make films📹.");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_27(ctx) {
  let h2;
  let textContent = "About";
  return {
    c() {
      h2 = element("h2");
      h2.textContent = textContent;
      this.h();
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h2) !== "svelte-z7kkf3") h2.textContent = textContent;
      this.h();
    },
    h() {
      attr(h2, "class", "text-xl font-bold");
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(h2);
      }
    }
  };
}
function create_default_slot_26(ctx) {
  let div;
  let textContent = `I am a recent graduate of <span style="text-decoration: underline; font-weight: bold;">Stanford University</span> in Data Journalism, and a data reporter intern for <span style="text-decoration: underline; font-weight: bold;">Tampa Bay Times</span> in the summer of 2024. Prior to Stanford, I hold a M.A. degree in Journalism at the <span style="text-decoration: underline; font-weight: bold;">University of Miami</span> and an alumna of the <span style="text-decoration: underline; font-weight: bold;">Lede Program</span> in 2022. I care about <span style="text-decoration: underline; font-weight: bold;">social gender inequalities</span> and <span style="text-decoration: underline; font-weight: bold;">global environmental matters</span>. Born and raised in Shanghai, I speak English and Mandarin. While not coding, I watch thriller movies alone 🍿 and collect Hello Kittys 🎀₍^. .^₎⟆.`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true,
        style: true,
        ["data-svelte-h"]: true
      });
      if (get_svelte_dataset(div) !== "svelte-81oe1n") div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert");
      set_style(div, "line-height", "1.6");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_default_slot_25(ctx) {
  let div;
  let textContent = ``;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-ki6r97") div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_default_slot_24(ctx) {
  let h2;
  let textContent = "Tools I use";
  return {
    c() {
      h2 = element("h2");
      h2.textContent = textContent;
      this.h();
    },
    l(nodes) {
      h2 = claim_element(nodes, "H2", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(h2) !== "svelte-1lx13r5") h2.textContent = textContent;
      this.h();
    },
    h() {
      attr(h2, "class", "text-xl font-bold");
    },
    m(target, anchor) {
      insert_hydration(target, h2, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(h2);
      }
    }
  };
}
function create_default_slot_23(ctx) {
  let t;
  return {
    c() {
      t = text("Svelte");
    },
    l(nodes) {
      t = claim_text(nodes, "Svelte");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_22(ctx) {
  let div;
  let span0;
  let textContent = "████▒▒▒▒▒▒▒▒▒ ?%: I've been self-teaching ";
  let badge;
  let span1;
  let textContent_1 = "bit by bit lately.";
  let current;
  badge = new Badge({
    props: {
      style: " margin-right:3px; margin-bottom:9px; background-color:#D9F9F4;color:black",
      $$slots: { default: [create_default_slot_23] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div = element("div");
      span0 = element("span");
      span0.textContent = textContent;
      create_component(badge.$$.fragment);
      span1 = element("span");
      span1.textContent = textContent_1;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      span0 = claim_element(div_nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span0) !== "svelte-1b5umhq") span0.textContent = textContent;
      claim_component(badge.$$.fragment, div_nodes);
      span1 = claim_element(div_nodes, "SPAN", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(span1) !== "svelte-p00lih") span1.textContent = textContent_1;
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(span0, "class", "font-light");
      attr(span1, "class", "font-light");
      attr(div, "class", "px-1 prose max-w-full text-pretty font-sans text-[14px] text-muted-foreground dark:prose-invert");
      set_style(div, "line-height", "1.6");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, span0);
      mount_component(badge, div, null);
      append_hydration(div, span1);
      current = true;
    },
    p(ctx2, dirty) {
      const badge_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge.$set(badge_changes);
    },
    i(local) {
      if (current) return;
      transition_in(badge.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(badge.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(badge);
    }
  };
}
function create_default_slot_21(ctx) {
  let t;
  return {
    c() {
      t = text("Python");
    },
    l(nodes) {
      t = claim_text(nodes, "Python");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_20(ctx) {
  let t;
  return {
    c() {
      t = text("Adobe Illustrator");
    },
    l(nodes) {
      t = claim_text(nodes, "Adobe Illustrator");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_19(ctx) {
  let t;
  return {
    c() {
      t = text("Javascript/D3.js");
    },
    l(nodes) {
      t = claim_text(nodes, "Javascript/D3.js");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_18(ctx) {
  let t;
  return {
    c() {
      t = text("HTML/CSS");
    },
    l(nodes) {
      t = claim_text(nodes, "HTML/CSS");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_17(ctx) {
  let t;
  return {
    c() {
      t = text("Mapbox");
    },
    l(nodes) {
      t = claim_text(nodes, "Mapbox");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_16(ctx) {
  let t;
  return {
    c() {
      t = text("QGIS");
    },
    l(nodes) {
      t = claim_text(nodes, "QGIS");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_15(ctx) {
  let t;
  return {
    c() {
      t = text("Datawrapper");
    },
    l(nodes) {
      t = claim_text(nodes, "Datawrapper");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_14(ctx) {
  let t;
  return {
    c() {
      t = text("Flourish");
    },
    l(nodes) {
      t = claim_text(nodes, "Flourish");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_13(ctx) {
  let t;
  return {
    c() {
      t = text("etc");
    },
    l(nodes) {
      t = claim_text(nodes, "etc");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_default_slot_12(ctx) {
  let badge0;
  let t0;
  let badge1;
  let t1;
  let badge2;
  let t2;
  let badge3;
  let t3;
  let badge4;
  let t4;
  let badge5;
  let t5;
  let badge6;
  let t6;
  let badge7;
  let t7;
  let badge8;
  let current;
  badge0 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px; background-color:#D9F9F4;color:black",
      $$slots: { default: [create_default_slot_21] },
      $$scope: { ctx }
    }
  });
  badge1 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px; background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_20] },
      $$scope: { ctx }
    }
  });
  badge2 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_19] },
      $$scope: { ctx }
    }
  });
  badge3 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_18] },
      $$scope: { ctx }
    }
  });
  badge4 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_17] },
      $$scope: { ctx }
    }
  });
  badge5 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_16] },
      $$scope: { ctx }
    }
  });
  badge6 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_15] },
      $$scope: { ctx }
    }
  });
  badge7 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_14] },
      $$scope: { ctx }
    }
  });
  badge8 = new Badge({
    props: {
      style: "margin-right:3px; margin-bottom:9px;background-color:#D9F9F4; rounded-lg;color:black",
      $$slots: { default: [create_default_slot_13] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(badge0.$$.fragment);
      t0 = space();
      create_component(badge1.$$.fragment);
      t1 = space();
      create_component(badge2.$$.fragment);
      t2 = space();
      create_component(badge3.$$.fragment);
      t3 = space();
      create_component(badge4.$$.fragment);
      t4 = space();
      create_component(badge5.$$.fragment);
      t5 = space();
      create_component(badge6.$$.fragment);
      t6 = space();
      create_component(badge7.$$.fragment);
      t7 = space();
      create_component(badge8.$$.fragment);
    },
    l(nodes) {
      claim_component(badge0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(badge1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(badge2.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(badge3.$$.fragment, nodes);
      t3 = claim_space(nodes);
      claim_component(badge4.$$.fragment, nodes);
      t4 = claim_space(nodes);
      claim_component(badge5.$$.fragment, nodes);
      t5 = claim_space(nodes);
      claim_component(badge6.$$.fragment, nodes);
      t6 = claim_space(nodes);
      claim_component(badge7.$$.fragment, nodes);
      t7 = claim_space(nodes);
      claim_component(badge8.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(badge0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(badge1, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(badge2, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(badge3, target, anchor);
      insert_hydration(target, t3, anchor);
      mount_component(badge4, target, anchor);
      insert_hydration(target, t4, anchor);
      mount_component(badge5, target, anchor);
      insert_hydration(target, t5, anchor);
      mount_component(badge6, target, anchor);
      insert_hydration(target, t6, anchor);
      mount_component(badge7, target, anchor);
      insert_hydration(target, t7, anchor);
      mount_component(badge8, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const badge0_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge0.$set(badge0_changes);
      const badge1_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge1.$set(badge1_changes);
      const badge2_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge2.$set(badge2_changes);
      const badge3_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge3.$set(badge3_changes);
      const badge4_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge4.$set(badge4_changes);
      const badge5_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge5.$set(badge5_changes);
      const badge6_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge6.$set(badge6_changes);
      const badge7_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge7.$set(badge7_changes);
      const badge8_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        badge8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge8.$set(badge8_changes);
    },
    i(local) {
      if (current) return;
      transition_in(badge0.$$.fragment, local);
      transition_in(badge1.$$.fragment, local);
      transition_in(badge2.$$.fragment, local);
      transition_in(badge3.$$.fragment, local);
      transition_in(badge4.$$.fragment, local);
      transition_in(badge5.$$.fragment, local);
      transition_in(badge6.$$.fragment, local);
      transition_in(badge7.$$.fragment, local);
      transition_in(badge8.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(badge0.$$.fragment, local);
      transition_out(badge1.$$.fragment, local);
      transition_out(badge2.$$.fragment, local);
      transition_out(badge3.$$.fragment, local);
      transition_out(badge4.$$.fragment, local);
      transition_out(badge5.$$.fragment, local);
      transition_out(badge6.$$.fragment, local);
      transition_out(badge7.$$.fragment, local);
      transition_out(badge8.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
        detach(t2);
        detach(t3);
        detach(t4);
        detach(t5);
        detach(t6);
        detach(t7);
      }
      destroy_component(badge0, detaching);
      destroy_component(badge1, detaching);
      destroy_component(badge2, detaching);
      destroy_component(badge3, detaching);
      destroy_component(badge4, detaching);
      destroy_component(badge5, detaching);
      destroy_component(badge6, detaching);
      destroy_component(badge7, detaching);
      destroy_component(badge8, detaching);
    }
  };
}
function create_else_block(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = /*social*/
      ctx[15].icon)) attr(img, "src", img_src_value);
      attr(img, "class", "size-[18px]");
      attr(
        img,
        "alt",
        /*social*/
        ctx[15].name
      );
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(img);
      }
    }
  };
}
function create_if_block_1(ctx) {
  let img;
  let img_src_value;
  return {
    c() {
      img = element("img");
      this.h();
    },
    l(nodes) {
      img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
      this.h();
    },
    h() {
      var _a;
      if (!src_url_equal(img.src, img_src_value = /*social*/
      (_a = ctx[15]) == null ? void 0 : _a.dark_icon)) attr(img, "src", img_src_value);
      attr(img, "class", "size-4");
      attr(
        img,
        "alt",
        /*social*/
        ctx[15].name
      );
    },
    m(target, anchor) {
      insert_hydration(target, img, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(img);
      }
    }
  };
}
function create_default_slot_11(ctx) {
  let if_block_anchor;
  function select_block_type(ctx2, dirty) {
    var _a;
    if (
      /*social*/
      ((_a = ctx2[15]) == null ? void 0 : _a.dark_icon) && /*theme*/
      ctx2[2] === "dark"
    ) return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block) {
        if_block.p(ctx2, dirty);
      } else {
        if_block.d(1);
        if_block = current_block_type(ctx2);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_block.d(detaching);
    }
  };
}
function create_default_slot_10(ctx) {
  let button;
  let current;
  button = new Button2({
    props: {
      href: (
        /*social*/
        ctx[15].url
      ),
      variant: "ghost",
      size: "icon",
      class: "size-12 rounded-full",
      $$slots: { default: [create_default_slot_11] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(button.$$.fragment);
    },
    l(nodes) {
      claim_component(button.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(button, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const button_changes = {};
      if (dirty & /*$$scope, theme*/
      262148) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current) return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(button, detaching);
    }
  };
}
function create_default_slot_9(ctx) {
  let p;
  let t_value = (
    /*social*/
    ctx[15].name + ""
  );
  let t;
  return {
    c() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "svelte-1746ueg");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      append_hydration(p, t);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_default_slot_8(ctx) {
  let tooltip_trigger;
  let t0;
  let tooltip_content;
  let t1;
  let current;
  tooltip_trigger = new Trigger({
    props: {
      $$slots: { default: [create_default_slot_10] },
      $$scope: { ctx }
    }
  });
  tooltip_content = new Tooltip_content2({
    props: {
      $$slots: { default: [create_default_slot_9] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tooltip_trigger.$$.fragment);
      t0 = space();
      create_component(tooltip_content.$$.fragment);
      t1 = space();
    },
    l(nodes) {
      claim_component(tooltip_trigger.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(tooltip_content.$$.fragment, nodes);
      t1 = claim_space(nodes);
    },
    m(target, anchor) {
      mount_component(tooltip_trigger, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(tooltip_content, target, anchor);
      insert_hydration(target, t1, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tooltip_trigger_changes = {};
      if (dirty & /*$$scope, theme*/
      262148) {
        tooltip_trigger_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip_trigger.$set(tooltip_trigger_changes);
      const tooltip_content_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        tooltip_content_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip_content.$set(tooltip_content_changes);
    },
    i(local) {
      if (current) return;
      transition_in(tooltip_trigger.$$.fragment, local);
      transition_in(tooltip_content.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tooltip_trigger.$$.fragment, local);
      transition_out(tooltip_content.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
      }
      destroy_component(tooltip_trigger, detaching);
      destroy_component(tooltip_content, detaching);
    }
  };
}
function create_each_block_3(ctx) {
  let tooltip_root;
  let current;
  tooltip_root = new Root({
    props: {
      openDelay: 300,
      $$slots: { default: [create_default_slot_8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(tooltip_root.$$.fragment);
    },
    l(nodes) {
      claim_component(tooltip_root.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(tooltip_root, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const tooltip_root_changes = {};
      if (dirty & /*$$scope, theme*/
      262148) {
        tooltip_root_changes.$$scope = { dirty, ctx: ctx2 };
      }
      tooltip_root.$set(tooltip_root_changes);
    },
    i(local) {
      if (current) return;
      transition_in(tooltip_root.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(tooltip_root.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(tooltip_root, detaching);
    }
  };
}
function create_default_slot_7(ctx) {
  let div2;
  let textContent = `<div class="space-y-2"><div class="inline-block bg-foreground px-3 py-1 text-sm text-background" style="background-color:#123524">DATA STORY</div> <h2 class="pt-4 subtitle text-3xl font-bold tracking-tighter sm:text-4xl svelte-1746ueg">I make graphics</h2> <p class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed svelte-1746ueg"></p></div>`;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div2) !== "svelte-1rjp0vq") div2.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div2, "class", "flex flex-col items-center justify-center space-y-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_default_slot_6(ctx) {
  let projectcard;
  let t;
  let current;
  projectcard = new ProjectCard({
    props: {
      href: (
        /*dataviz*/
        ctx[12].href
      ),
      title: (
        /*dataviz*/
        ctx[12].title
      ),
      publisher: (
        /*dataviz*/
        ctx[12].publisher
      ),
      description: (
        /*dataviz*/
        ctx[12].description
      ),
      dates: (
        /*dataviz*/
        ctx[12].dates
      ),
      tags: (
        /*dataviz*/
        ctx[12].technologies
      ),
      image: (
        /*dataviz*/
        ctx[12].image
      ),
      video: (
        /*dataviz*/
        ctx[12].video
      ),
      links: (
        /*dataviz*/
        ctx[12].links
      )
    }
  });
  return {
    c() {
      create_component(projectcard.$$.fragment);
      t = space();
    },
    l(nodes) {
      claim_component(projectcard.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m(target, anchor) {
      mount_component(projectcard, target, anchor);
      insert_hydration(target, t, anchor);
      current = true;
    },
    p: noop$1,
    i(local) {
      if (current) return;
      transition_in(projectcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(projectcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(projectcard, detaching);
    }
  };
}
function create_each_block_2(ctx) {
  let blurfade;
  let current;
  blurfade = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY * 1.5 + /*id*/
      ctx[14] * 0.05,
      $$slots: { default: [create_default_slot_6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(blurfade.$$.fragment);
    },
    l(nodes) {
      claim_component(blurfade.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(blurfade, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const blurfade_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade.$set(blurfade_changes);
    },
    i(local) {
      if (current) return;
      transition_in(blurfade.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(blurfade.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(blurfade, detaching);
    }
  };
}
function create_default_slot_5(ctx) {
  let div;
  let textContent = `<p class="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-relaxed svelte-1746ueg"><span class="font-semibold cursor-pointer custom-underline svelte-1746ueg" style="font-family:Cairo Play, serif"><a href="${base}/blog">View Data Projects Archive →</a></span></p>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-1f9dagc") div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-col space-y-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_default_slot_4(ctx) {
  let div2;
  let textContent = `<div class="space-y-2"><div class="inline-block bg-foreground px-3 py-1 text-sm text-background" style="background-color:#123524">NEWS REPORTING</div> <h2 class="pt-4 subtitle text-3xl font-bold tracking-tighter sm:text-4xl svelte-1746ueg">I write words</h2> <p class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed svelte-1746ueg"></p></div>`;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div2) !== "svelte-c1t3ao") div2.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div2, "class", "flex flex-col items-center justify-center space-y-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_default_slot_3(ctx) {
  let reportingcard;
  let t;
  let current;
  const reportingcard_spread_levels = [
    /*project*/
    ctx[9]
  ];
  let reportingcard_props = {};
  for (let i = 0; i < reportingcard_spread_levels.length; i += 1) {
    reportingcard_props = assign(reportingcard_props, reportingcard_spread_levels[i]);
  }
  reportingcard = new ReportingCard({ props: reportingcard_props });
  return {
    c() {
      create_component(reportingcard.$$.fragment);
      t = space();
    },
    l(nodes) {
      claim_component(reportingcard.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m(target, anchor) {
      mount_component(reportingcard, target, anchor);
      insert_hydration(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const reportingcard_changes = {};
      reportingcard.$set(reportingcard_changes);
    },
    i(local) {
      if (current) return;
      transition_in(reportingcard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(reportingcard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(reportingcard, detaching);
    }
  };
}
function create_each_block_1(ctx) {
  let blurfade;
  let current;
  blurfade = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(blurfade.$$.fragment);
    },
    l(nodes) {
      claim_component(blurfade.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(blurfade, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const blurfade_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade.$set(blurfade_changes);
    },
    i(local) {
      if (current) return;
      transition_in(blurfade.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(blurfade.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(blurfade, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let ul;
  let current;
  let each_value_1 = ensure_array_like(DATA.reportings);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      ul = claim_element(nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(ul, "class", "mb-4 ml-4 divide-y divide-dashed");
    },
    m(target, anchor) {
      insert_hydration(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(ul, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*BLUR_FADE_DELAY*/
      0) {
        each_value_1 = ensure_array_like(DATA.reportings);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i = 0; i < each_value_1.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(ul);
      }
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let div2;
  let textContent = `<div class="space-y-2"><div class="inline-block bg-foreground px-3 py-1 text-sm text-background" style="background-color:#123524">DOCUMENTARY</div> <h2 class="pt-4 subtitle text-3xl font-bold tracking-tighter sm:text-4xl svelte-1746ueg">I produce films</h2> <p class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed svelte-1746ueg"></p></div>`;
  return {
    c() {
      div2 = element("div");
      div2.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div2) !== "svelte-3scfln") div2.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div2, "class", "flex flex-col items-center justify-center space-y-4 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
    }
  };
}
function create_if_block(ctx) {
  let iframe;
  let iframe_src_value;
  let iframe_transition;
  let t0;
  let div1;
  let button0;
  let textContent = "←";
  let t2;
  let div0;
  let p0;
  let t3;
  let t4_value = (
    /*video*/
    ctx[6].length + ""
  );
  let t4;
  let t5;
  let h2;
  let t6_value = (
    /*video*/
    ctx[6].title + ""
  );
  let t6;
  let t7;
  let p1;
  let t8_value = (
    /*video*/
    ctx[6].description + ""
  );
  let t8;
  let t9;
  let button1;
  let textContent_1 = "→";
  let t11;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      iframe = element("iframe");
      t0 = space();
      div1 = element("div");
      button0 = element("button");
      button0.textContent = textContent;
      t2 = space();
      div0 = element("div");
      p0 = element("p");
      t3 = text("Watch · ");
      t4 = text(t4_value);
      t5 = space();
      h2 = element("h2");
      t6 = text(t6_value);
      t7 = space();
      p1 = element("p");
      t8 = text(t8_value);
      t9 = space();
      button1 = element("button");
      button1.textContent = textContent_1;
      t11 = space();
      this.h();
    },
    l(nodes) {
      iframe = claim_element(nodes, "IFRAME", {
        width: true,
        height: true,
        src: true,
        title: true,
        frameborder: true,
        allow: true,
        class: true
      });
      children(iframe).forEach(detach);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      button0 = claim_element(div1_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-1xijw83") button0.textContent = textContent;
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      p0 = claim_element(div0_nodes, "P", { class: true });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "Watch · ");
      t4 = claim_text(p0_nodes, t4_value);
      p0_nodes.forEach(detach);
      t5 = claim_space(div0_nodes);
      h2 = claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = children(h2);
      t6 = claim_text(h2_nodes, t6_value);
      h2_nodes.forEach(detach);
      t7 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, t8_value);
      p1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t9 = claim_space(div1_nodes);
      button1 = claim_element(div1_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button1) !== "svelte-sukqlm") button1.textContent = textContent_1;
      t11 = claim_space(div1_nodes);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(iframe, "width", "600");
      attr(iframe, "height", "350");
      if (!src_url_equal(iframe.src, iframe_src_value = /*video*/
      ctx[6].src)) attr(iframe, "src", iframe_src_value);
      attr(
        iframe,
        "title",
        /*video*/
        ctx[6].title
      );
      attr(iframe, "frameborder", "0");
      attr(iframe, "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      iframe.allowFullscreen = true;
      attr(iframe, "class", "svelte-1746ueg");
      attr(button0, "class", "arrow left svelte-1746ueg");
      attr(p0, "class", "watch-time svelte-1746ueg");
      attr(h2, "class", "svelte-1746ueg");
      attr(p1, "class", "svelte-1746ueg");
      attr(div0, "class", "video-info svelte-1746ueg");
      attr(button1, "class", "arrow right svelte-1746ueg");
      attr(div1, "class", "video-grid svelte-1746ueg");
    },
    m(target, anchor) {
      insert_hydration(target, iframe, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, button0);
      append_hydration(div1, t2);
      append_hydration(div1, div0);
      append_hydration(div0, p0);
      append_hydration(p0, t3);
      append_hydration(p0, t4);
      append_hydration(div0, t5);
      append_hydration(div0, h2);
      append_hydration(h2, t6);
      append_hydration(div0, t7);
      append_hydration(div0, p1);
      append_hydration(p1, t8);
      append_hydration(div1, t9);
      append_hydration(div1, button1);
      append_hydration(div1, t11);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*prevVideo*/
            ctx[4]
          ),
          listen(
            button1,
            "click",
            /*nextVideo*/
            ctx[3]
          )
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (current) return;
      if (local) {
        add_render_callback(() => {
          if (!current) return;
          if (!iframe_transition) iframe_transition = create_bidirectional_transition(
            iframe,
            fly,
            {
              x: (
                /*direction*/
                ctx[1] * 50
              ),
              duration: 400
            },
            true
          );
          iframe_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      if (local) {
        if (!iframe_transition) iframe_transition = create_bidirectional_transition(
          iframe,
          fly,
          {
            x: (
              /*direction*/
              ctx[1] * 50
            ),
            duration: 400
          },
          false
        );
        iframe_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(iframe);
        detach(t0);
        detach(div1);
      }
      if (detaching && iframe_transition) iframe_transition.end();
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block(ctx) {
  let if_block_anchor;
  let if_block = (
    /*index*/
    ctx[8] === /*currentIndex*/
    ctx[0] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block) if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx2, dirty) {
      if (
        /*index*/
        ctx2[8] === /*currentIndex*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*currentIndex*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (if_block) if_block.d(detaching);
    }
  };
}
function create_default_slot(ctx) {
  let div;
  let textContent = `<p class="text-sm svelte-1746ueg" style="color:grey">© Copyright ･ Svelte template ･<a class="custom-underline svelte-1746ueg" href="https://github.com/SikandarJODD" target="_blank" rel="noopener noreferrer">Sikandar S. Bhide</a></p>`;
  return {
    c() {
      div = element("div");
      div.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div) !== "svelte-z9nu6e") div.innerHTML = textContent;
      this.h();
    },
    h() {
      attr(div, "class", "space-y-3");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p: noop$1,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_fragment(ctx) {
  let link0;
  let link1;
  let link2;
  let meta0;
  let meta1;
  let meta2;
  let meta3;
  let meta4;
  let meta5;
  let meta6;
  let meta7;
  let meta8;
  let meta9;
  let meta10;
  let meta11;
  let meta12;
  let meta13;
  let meta14;
  let meta15;
  let t0;
  let main;
  let section0;
  let div2;
  let div1;
  let div0;
  let blurfade0;
  let t1;
  let blurfade1;
  let t2;
  let section1;
  let blurfade2;
  let t3;
  let blurfade3;
  let t4;
  let blurfade4;
  let t5;
  let section2;
  let div4;
  let blurfade5;
  let t6;
  let div3;
  let blurfade6;
  let t7;
  let blurfade7;
  let t8;
  let section3;
  let div5;
  let t9;
  let section4;
  let div7;
  let blurfade8;
  let t10;
  let div6;
  let t11;
  let blurfade9;
  let t12;
  let section5;
  let div8;
  let blurfade10;
  let t13;
  let blurfade11;
  let t14;
  let section6;
  let div10;
  let blurfade12;
  let t15;
  let div9;
  let t16;
  let section7;
  let div11;
  let blurfade13;
  let current;
  document.title = DATA.name;
  blurfade0 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      class: "font-bold tracking-tighter pb-4 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl",
      yOffset: 8,
      $$slots: { default: [create_default_slot_29] },
      $$scope: { ctx }
    }
  });
  blurfade1 = new BlurFade({
    props: {
      class: "md:text-xl",
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_28] },
      $$scope: { ctx }
    }
  });
  blurfade2 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_27] },
      $$scope: { ctx }
    }
  });
  blurfade3 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY * 1.4,
      $$slots: { default: [create_default_slot_26] },
      $$scope: { ctx }
    }
  });
  blurfade4 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY * 1.4,
      $$slots: { default: [create_default_slot_25] },
      $$scope: { ctx }
    }
  });
  blurfade5 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_24] },
      $$scope: { ctx }
    }
  });
  blurfade6 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY + 2e-3,
      $$slots: { default: [create_default_slot_22] },
      $$scope: { ctx }
    }
  });
  blurfade7 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY + 2e-3,
      $$slots: { default: [create_default_slot_12] },
      $$scope: { ctx }
    }
  });
  let each_value_3 = ensure_array_like(Object.entries(DATA.contact.social).filter(func).map(func_1));
  let each_blocks_2 = [];
  for (let i = 0; i < each_value_3.length; i += 1) {
    each_blocks_2[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
  }
  const out = (i) => transition_out(each_blocks_2[i], 1, 1, () => {
    each_blocks_2[i] = null;
  });
  blurfade8 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_7] },
      $$scope: { ctx }
    }
  });
  let each_value_2 = ensure_array_like(DATA.datavizs);
  let each_blocks_1 = [];
  for (let i = 0; i < each_value_2.length; i += 1) {
    each_blocks_1[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
  }
  const out_1 = (i) => transition_out(each_blocks_1[i], 1, 1, () => {
    each_blocks_1[i] = null;
  });
  blurfade9 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  blurfade10 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  blurfade11 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY * 2,
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  blurfade12 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY,
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  let each_value = ensure_array_like(videos);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  blurfade13 = new BlurFade({
    props: {
      delay: BLUR_FADE_DELAY * 2,
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      link0 = element("link");
      link1 = element("link");
      link2 = element("link");
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      meta5 = element("meta");
      meta6 = element("meta");
      meta7 = element("meta");
      meta8 = element("meta");
      meta9 = element("meta");
      meta10 = element("meta");
      meta11 = element("meta");
      meta12 = element("meta");
      meta13 = element("meta");
      meta14 = element("meta");
      meta15 = element("meta");
      t0 = space();
      main = element("main");
      section0 = element("section");
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      create_component(blurfade0.$$.fragment);
      t1 = space();
      create_component(blurfade1.$$.fragment);
      t2 = space();
      section1 = element("section");
      create_component(blurfade2.$$.fragment);
      t3 = space();
      create_component(blurfade3.$$.fragment);
      t4 = space();
      create_component(blurfade4.$$.fragment);
      t5 = space();
      section2 = element("section");
      div4 = element("div");
      create_component(blurfade5.$$.fragment);
      t6 = space();
      div3 = element("div");
      create_component(blurfade6.$$.fragment);
      t7 = space();
      create_component(blurfade7.$$.fragment);
      t8 = space();
      section3 = element("section");
      div5 = element("div");
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].c();
      }
      t9 = space();
      section4 = element("section");
      div7 = element("div");
      create_component(blurfade8.$$.fragment);
      t10 = space();
      div6 = element("div");
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].c();
      }
      t11 = space();
      create_component(blurfade9.$$.fragment);
      t12 = space();
      section5 = element("section");
      div8 = element("div");
      create_component(blurfade10.$$.fragment);
      t13 = space();
      create_component(blurfade11.$$.fragment);
      t14 = space();
      section6 = element("section");
      div10 = element("div");
      create_component(blurfade12.$$.fragment);
      t15 = space();
      div9 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t16 = space();
      section7 = element("section");
      div11 = element("div");
      create_component(blurfade13.$$.fragment);
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1heduwa", document.head);
      link0 = claim_element(head_nodes, "LINK", { rel: true, href: true });
      link1 = claim_element(head_nodes, "LINK", { href: true, rel: true });
      link2 = claim_element(head_nodes, "LINK", { href: true, rel: true });
      meta0 = claim_element(head_nodes, "META", { name: true, content: true });
      meta1 = claim_element(head_nodes, "META", { property: true, content: true });
      meta2 = claim_element(head_nodes, "META", { property: true, content: true });
      meta3 = claim_element(head_nodes, "META", { property: true, content: true });
      meta4 = claim_element(head_nodes, "META", { property: true, content: true });
      meta5 = claim_element(head_nodes, "META", { property: true, content: true });
      meta6 = claim_element(head_nodes, "META", { property: true, content: true });
      meta7 = claim_element(head_nodes, "META", { property: true, content: true });
      meta8 = claim_element(head_nodes, "META", { name: true, content: true });
      meta9 = claim_element(head_nodes, "META", { name: true, content: true });
      meta10 = claim_element(head_nodes, "META", { name: true, content: true });
      meta11 = claim_element(head_nodes, "META", { name: true, content: true });
      meta12 = claim_element(head_nodes, "META", { name: true, content: true });
      meta13 = claim_element(head_nodes, "META", { name: true, content: true });
      meta14 = claim_element(head_nodes, "META", { name: true, content: true });
      meta15 = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      t0 = claim_space(nodes);
      main = claim_element(nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      section0 = claim_element(main_nodes, "SECTION", { id: true });
      var section0_nodes = children(section0);
      div2 = claim_element(section0_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      claim_component(blurfade0.$$.fragment, div0_nodes);
      t1 = claim_space(div0_nodes);
      claim_component(blurfade1.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      section0_nodes.forEach(detach);
      t2 = claim_space(main_nodes);
      section1 = claim_element(main_nodes, "SECTION", { id: true });
      var section1_nodes = children(section1);
      claim_component(blurfade2.$$.fragment, section1_nodes);
      t3 = claim_space(section1_nodes);
      claim_component(blurfade3.$$.fragment, section1_nodes);
      t4 = claim_space(section1_nodes);
      claim_component(blurfade4.$$.fragment, section1_nodes);
      section1_nodes.forEach(detach);
      t5 = claim_space(main_nodes);
      section2 = claim_element(main_nodes, "SECTION", { id: true });
      var section2_nodes = children(section2);
      div4 = claim_element(section2_nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      claim_component(blurfade5.$$.fragment, div4_nodes);
      t6 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      claim_component(blurfade6.$$.fragment, div3_nodes);
      t7 = claim_space(div3_nodes);
      claim_component(blurfade7.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      section2_nodes.forEach(detach);
      t8 = claim_space(main_nodes);
      section3 = claim_element(main_nodes, "SECTION", { id: true, style: true });
      var section3_nodes = children(section3);
      div5 = claim_element(section3_nodes, "DIV", { class: true });
      var div5_nodes = children(div5);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        each_blocks_2[i].l(div5_nodes);
      }
      div5_nodes.forEach(detach);
      section3_nodes.forEach(detach);
      t9 = claim_space(main_nodes);
      section4 = claim_element(main_nodes, "SECTION", { id: true });
      var section4_nodes = children(section4);
      div7 = claim_element(section4_nodes, "DIV", { class: true });
      var div7_nodes = children(div7);
      claim_component(blurfade8.$$.fragment, div7_nodes);
      t10 = claim_space(div7_nodes);
      div6 = claim_element(div7_nodes, "DIV", { class: true });
      var div6_nodes = children(div6);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        each_blocks_1[i].l(div6_nodes);
      }
      div6_nodes.forEach(detach);
      t11 = claim_space(div7_nodes);
      claim_component(blurfade9.$$.fragment, div7_nodes);
      div7_nodes.forEach(detach);
      section4_nodes.forEach(detach);
      t12 = claim_space(main_nodes);
      section5 = claim_element(main_nodes, "SECTION", { id: true });
      var section5_nodes = children(section5);
      div8 = claim_element(section5_nodes, "DIV", { class: true });
      var div8_nodes = children(div8);
      claim_component(blurfade10.$$.fragment, div8_nodes);
      t13 = claim_space(div8_nodes);
      claim_component(blurfade11.$$.fragment, div8_nodes);
      div8_nodes.forEach(detach);
      section5_nodes.forEach(detach);
      t14 = claim_space(main_nodes);
      section6 = claim_element(main_nodes, "SECTION", { id: true });
      var section6_nodes = children(section6);
      div10 = claim_element(section6_nodes, "DIV", { class: true });
      var div10_nodes = children(div10);
      claim_component(blurfade12.$$.fragment, div10_nodes);
      t15 = claim_space(div10_nodes);
      div9 = claim_element(div10_nodes, "DIV", { class: true });
      var div9_nodes = children(div9);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div9_nodes);
      }
      div9_nodes.forEach(detach);
      div10_nodes.forEach(detach);
      section6_nodes.forEach(detach);
      t16 = claim_space(main_nodes);
      section7 = claim_element(main_nodes, "SECTION", { id: true });
      var section7_nodes = children(section7);
      div11 = claim_element(section7_nodes, "DIV", { class: true });
      var div11_nodes = children(div11);
      claim_component(blurfade13.$$.fragment, div11_nodes);
      div11_nodes.forEach(detach);
      section7_nodes.forEach(detach);
      main_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(link0, "rel", "preconnect");
      attr(link0, "href", "https://fonts.googleapis.com");
      attr(link1, "href", "https://fonts.googleapis.com/css2?family=Cairo+Play:wght@200..1000&display=swap");
      attr(link1, "rel", "stylesheet");
      attr(link2, "href", "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
      attr(link2, "rel", "stylesheet");
      attr(meta0, "name", "description");
      attr(meta0, "content", DATA.description);
      attr(meta1, "property", "og:title");
      attr(meta1, "content", DATA.name);
      attr(meta2, "property", "og:description");
      attr(meta2, "content", DATA.description);
      attr(meta3, "property", "og:url");
      attr(meta3, "content", DATA.url);
      attr(meta4, "property", "og:site_name");
      attr(meta4, "content", DATA.name);
      attr(meta5, "property", "og:image");
      attr(meta5, "content", DATA.img);
      attr(meta6, "property", "og:locale");
      attr(meta6, "content", "en_US");
      attr(meta7, "property", "og:type");
      attr(meta7, "content", "website");
      attr(meta8, "name", "robots");
      attr(meta8, "content", "index, follow");
      attr(meta9, "name", "googlebot");
      attr(meta9, "content", "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1");
      attr(meta10, "name", "twitter:title");
      attr(meta10, "content", DATA.name);
      attr(meta11, "name", "twitter:card");
      attr(meta11, "content", "summary_large_image");
      attr(meta12, "name", "twitter:image");
      attr(meta12, "content", DATA.img);
      attr(meta13, "name", "twitter:description");
      attr(meta13, "content", DATA.description);
      attr(meta14, "name", "google-site-verification");
      attr(meta14, "content", "your-google-verification-code");
      attr(meta15, "name", "yandex-verification");
      attr(meta15, "content", "your-yandex-verification-code");
      attr(div0, "class", "flex flex-1 flex-col space-y-1.5");
      attr(div1, "class", "flex justify-between gap-2");
      attr(div2, "class", "mx-auto w-full max-w-2xl space-y-8");
      attr(section0, "id", "intro");
      attr(section1, "id", "about");
      attr(div3, "class", "flex flex-wrap gap-1");
      attr(div4, "class", "flex min-h-0 flex-col gap-y-3");
      attr(section2, "id", "skills");
      attr(div5, "class", "pt-4");
      attr(section3, "id", "social-media-icon");
      set_style(section3, "margin-top", "10px");
      attr(div6, "class", "w-full grid grid-cols-1 gap-5 sm:grid-cols-2");
      attr(div7, "class", "w-full space-y-12 py-10");
      attr(section4, "id", "datavizs");
      attr(div8, "class", "w-full space-y-8 py-10");
      attr(section5, "id", "reportings");
      attr(div9, "class", "slider-container svelte-1746ueg");
      attr(div10, "class", "w-full space-y-12 py-4");
      attr(section6, "id", "videos");
      attr(div11, "class", "grid w-full items-center justify-center gap-4 px-4 pt-0 pb-10 md:px-6");
      attr(section7, "id", "credit");
      attr(main, "class", "flex min-h-[100dvh] flex-col space-y-10 svelte-1746ueg");
    },
    m(target, anchor) {
      append_hydration(document.head, link0);
      append_hydration(document.head, link1);
      append_hydration(document.head, link2);
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      append_hydration(document.head, meta3);
      append_hydration(document.head, meta4);
      append_hydration(document.head, meta5);
      append_hydration(document.head, meta6);
      append_hydration(document.head, meta7);
      append_hydration(document.head, meta8);
      append_hydration(document.head, meta9);
      append_hydration(document.head, meta10);
      append_hydration(document.head, meta11);
      append_hydration(document.head, meta12);
      append_hydration(document.head, meta13);
      append_hydration(document.head, meta14);
      append_hydration(document.head, meta15);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, main, anchor);
      append_hydration(main, section0);
      append_hydration(section0, div2);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      mount_component(blurfade0, div0, null);
      append_hydration(div0, t1);
      mount_component(blurfade1, div0, null);
      append_hydration(main, t2);
      append_hydration(main, section1);
      mount_component(blurfade2, section1, null);
      append_hydration(section1, t3);
      mount_component(blurfade3, section1, null);
      append_hydration(section1, t4);
      mount_component(blurfade4, section1, null);
      append_hydration(main, t5);
      append_hydration(main, section2);
      append_hydration(section2, div4);
      mount_component(blurfade5, div4, null);
      append_hydration(div4, t6);
      append_hydration(div4, div3);
      mount_component(blurfade6, div3, null);
      append_hydration(div3, t7);
      mount_component(blurfade7, div3, null);
      append_hydration(main, t8);
      append_hydration(main, section3);
      append_hydration(section3, div5);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        if (each_blocks_2[i]) {
          each_blocks_2[i].m(div5, null);
        }
      }
      append_hydration(main, t9);
      append_hydration(main, section4);
      append_hydration(section4, div7);
      mount_component(blurfade8, div7, null);
      append_hydration(div7, t10);
      append_hydration(div7, div6);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        if (each_blocks_1[i]) {
          each_blocks_1[i].m(div6, null);
        }
      }
      append_hydration(div7, t11);
      mount_component(blurfade9, div7, null);
      append_hydration(main, t12);
      append_hydration(main, section5);
      append_hydration(section5, div8);
      mount_component(blurfade10, div8, null);
      append_hydration(div8, t13);
      mount_component(blurfade11, div8, null);
      append_hydration(main, t14);
      append_hydration(main, section6);
      append_hydration(section6, div10);
      mount_component(blurfade12, div10, null);
      append_hydration(div10, t15);
      append_hydration(div10, div9);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div9, null);
        }
      }
      append_hydration(main, t16);
      append_hydration(main, section7);
      append_hydration(section7, div11);
      mount_component(blurfade13, div11, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const blurfade0_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade0.$set(blurfade0_changes);
      const blurfade1_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade1.$set(blurfade1_changes);
      const blurfade2_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade2_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade2.$set(blurfade2_changes);
      const blurfade3_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade3_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade3.$set(blurfade3_changes);
      const blurfade4_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade4_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade4.$set(blurfade4_changes);
      const blurfade5_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade5_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade5.$set(blurfade5_changes);
      const blurfade6_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade6_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade6.$set(blurfade6_changes);
      const blurfade7_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade7_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade7.$set(blurfade7_changes);
      if (dirty & /*Object, theme*/
      4) {
        each_value_3 = ensure_array_like(Object.entries(DATA.contact.social).filter(func).map(func_1));
        let i;
        for (i = 0; i < each_value_3.length; i += 1) {
          const child_ctx = get_each_context_3(ctx2, each_value_3, i);
          if (each_blocks_2[i]) {
            each_blocks_2[i].p(child_ctx, dirty);
            transition_in(each_blocks_2[i], 1);
          } else {
            each_blocks_2[i] = create_each_block_3(child_ctx);
            each_blocks_2[i].c();
            transition_in(each_blocks_2[i], 1);
            each_blocks_2[i].m(div5, null);
          }
        }
        group_outros();
        for (i = each_value_3.length; i < each_blocks_2.length; i += 1) {
          out(i);
        }
        check_outros();
      }
      const blurfade8_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade8_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade8.$set(blurfade8_changes);
      if (dirty & /*BLUR_FADE_DELAY*/
      0) {
        each_value_2 = ensure_array_like(DATA.datavizs);
        let i;
        for (i = 0; i < each_value_2.length; i += 1) {
          const child_ctx = get_each_context_2(ctx2, each_value_2, i);
          if (each_blocks_1[i]) {
            each_blocks_1[i].p(child_ctx, dirty);
            transition_in(each_blocks_1[i], 1);
          } else {
            each_blocks_1[i] = create_each_block_2(child_ctx);
            each_blocks_1[i].c();
            transition_in(each_blocks_1[i], 1);
            each_blocks_1[i].m(div6, null);
          }
        }
        group_outros();
        for (i = each_value_2.length; i < each_blocks_1.length; i += 1) {
          out_1(i);
        }
        check_outros();
      }
      const blurfade9_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade9_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade9.$set(blurfade9_changes);
      const blurfade10_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade10_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade10.$set(blurfade10_changes);
      const blurfade11_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade11_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade11.$set(blurfade11_changes);
      const blurfade12_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade12_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade12.$set(blurfade12_changes);
      if (dirty & /*nextVideo, prevVideo, direction, currentIndex*/
      27) {
        each_value = ensure_array_like(videos);
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div9, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      const blurfade13_changes = {};
      if (dirty & /*$$scope*/
      262144) {
        blurfade13_changes.$$scope = { dirty, ctx: ctx2 };
      }
      blurfade13.$set(blurfade13_changes);
    },
    i(local) {
      if (current) return;
      transition_in(blurfade0.$$.fragment, local);
      transition_in(blurfade1.$$.fragment, local);
      transition_in(blurfade2.$$.fragment, local);
      transition_in(blurfade3.$$.fragment, local);
      transition_in(blurfade4.$$.fragment, local);
      transition_in(blurfade5.$$.fragment, local);
      transition_in(blurfade6.$$.fragment, local);
      transition_in(blurfade7.$$.fragment, local);
      for (let i = 0; i < each_value_3.length; i += 1) {
        transition_in(each_blocks_2[i]);
      }
      transition_in(blurfade8.$$.fragment, local);
      for (let i = 0; i < each_value_2.length; i += 1) {
        transition_in(each_blocks_1[i]);
      }
      transition_in(blurfade9.$$.fragment, local);
      transition_in(blurfade10.$$.fragment, local);
      transition_in(blurfade11.$$.fragment, local);
      transition_in(blurfade12.$$.fragment, local);
      transition_in(blurfade13.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(blurfade0.$$.fragment, local);
      transition_out(blurfade1.$$.fragment, local);
      transition_out(blurfade2.$$.fragment, local);
      transition_out(blurfade3.$$.fragment, local);
      transition_out(blurfade4.$$.fragment, local);
      transition_out(blurfade5.$$.fragment, local);
      transition_out(blurfade6.$$.fragment, local);
      transition_out(blurfade7.$$.fragment, local);
      each_blocks_2 = each_blocks_2.filter(Boolean);
      for (let i = 0; i < each_blocks_2.length; i += 1) {
        transition_out(each_blocks_2[i]);
      }
      transition_out(blurfade8.$$.fragment, local);
      each_blocks_1 = each_blocks_1.filter(Boolean);
      for (let i = 0; i < each_blocks_1.length; i += 1) {
        transition_out(each_blocks_1[i]);
      }
      transition_out(blurfade9.$$.fragment, local);
      transition_out(blurfade10.$$.fragment, local);
      transition_out(blurfade11.$$.fragment, local);
      transition_out(blurfade12.$$.fragment, local);
      transition_out(blurfade13.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(main);
      }
      detach(link0);
      detach(link1);
      detach(link2);
      detach(meta0);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      detach(meta4);
      detach(meta5);
      detach(meta6);
      detach(meta7);
      detach(meta8);
      detach(meta9);
      detach(meta10);
      detach(meta11);
      detach(meta12);
      detach(meta13);
      detach(meta14);
      detach(meta15);
      destroy_component(blurfade0);
      destroy_component(blurfade1);
      destroy_component(blurfade2);
      destroy_component(blurfade3);
      destroy_component(blurfade4);
      destroy_component(blurfade5);
      destroy_component(blurfade6);
      destroy_component(blurfade7);
      destroy_each(each_blocks_2, detaching);
      destroy_component(blurfade8);
      destroy_each(each_blocks_1, detaching);
      destroy_component(blurfade9);
      destroy_component(blurfade10);
      destroy_component(blurfade11);
      destroy_component(blurfade12);
      destroy_each(each_blocks, detaching);
      destroy_component(blurfade13);
    }
  };
}
let BLUR_FADE_DELAY = 0.04;
const func = ([_, social]) => social.navbar;
const func_1 = ([_, social]) => social;
function instance($$self, $$props, $$invalidate) {
  let theme;
  let $mode;
  component_subscribe($$self, derivedMode, ($$value) => $$invalidate(5, $mode = $$value));
  let currentIndex = 0;
  let direction = 1;
  function nextVideo() {
    $$invalidate(1, direction = 1);
    $$invalidate(0, currentIndex = (currentIndex + 1) % videos.length);
  }
  function prevVideo() {
    $$invalidate(1, direction = -1);
    $$invalidate(0, currentIndex = (currentIndex - 1 + videos.length) % videos.length);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$mode*/
    32) {
      $$invalidate(2, theme = $mode);
    }
  };
  return [currentIndex, direction, theme, nextVideo, prevVideo, $mode];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};
//# sourceMappingURL=2.JbEWwvsK.js.map
