var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Marked_instances, convertRendererFunction_fn, parseMarkdown_fn, onError_fn;
import { r as run_all$1, s as safe_not_equal, E as create_slot, F as update_slot_base, G as get_all_dirty_from_scope, I as get_slot_changes, a8 as getContext, $ as setContext, w as get_store_value, z as onMount, m as component_subscribe, y as afterUpdate, A as tick$1, Z as onDestroy, d as detach, c as insert_hydration, x as empty, B as construct_svelte_component, a0 as compute_rest_props, a1 as assign, a2 as exclude_internal_props, j as claim_space, l as space, ab as beforeUpdate, p as attr, a7 as action_destroyer, a6 as listen, f as claim_element, g as children, k as element, h as claim_text, t as text, i as is_function, a5 as set_dynamic_element_data, b as set_data, e as append_hydration, q as set_style, n as noop$1, a9 as src_url_equal, D as claim_html_tag, H as HtmlTagHydration, o as destroy_each, ac as set_svg_attributes, ad as claim_svg_element, ae as svg_element } from "./DhipIWGX.js";
import { a as transition_in, t as transition_out, S as SvelteComponent, i as init, g as group_outros, c as check_outros, d as destroy_component, m as mount_component, b as claim_component, e as create_component } from "./w1gIoQsl.js";
import { g as globals } from "./OenZPaBa.js";
import { w as writable, r as readable, d as derived } from "./BvUVvXmz.js";
import { b as base } from "./C5zs-MIt.js";
function ensure_array_like(array_like_or_iterator) {
  return (array_like_or_iterator == null ? void 0 : array_like_or_iterator.length) !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
function outro_and_destroy_block(block2, lookup) {
  transition_out(block2, 1, 1, () => {
    lookup.delete(block2.key);
  });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list2, lookup, node, destroy, create_each_block2, next, get_context) {
  let o = old_blocks.length;
  let n = list2.length;
  let i2 = o;
  const old_indexes = {};
  while (i2--) old_indexes[old_blocks[i2].key] = i2;
  const new_blocks = [];
  const new_lookup = /* @__PURE__ */ new Map();
  const deltas = /* @__PURE__ */ new Map();
  const updates = [];
  i2 = n;
  while (i2--) {
    const child_ctx = get_context(ctx, list2, i2);
    const key = get_key(child_ctx);
    let block2 = lookup.get(key);
    if (!block2) {
      block2 = create_each_block2(key, child_ctx);
      block2.c();
    } else {
      updates.push(() => block2.p(child_ctx, dirty));
    }
    new_lookup.set(key, new_blocks[i2] = block2);
    if (key in old_indexes) deltas.set(key, Math.abs(i2 - old_indexes[key]));
  }
  const will_move = /* @__PURE__ */ new Set();
  const did_move = /* @__PURE__ */ new Set();
  function insert(block2) {
    transition_in(block2, 1);
    block2.m(node, next);
    lookup.set(block2.key, block2);
    next = block2.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
  }
  while (n) insert(new_blocks[n - 1]);
  run_all$1(updates);
  return new_blocks;
}
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i2 = levels.length;
  while (i2--) {
    const o = levels[i2];
    const n = updates[i2];
    if (n) {
      for (const key in o) {
        if (!(key in n)) to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i2] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2)) update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const CLASS_PART_SEPARATOR = "-";
function createClassGroupUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}
const arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  function update2(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update2(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update2(key, value);
      }
    }
  };
}
const IMPORTANT_MODIFIER = "!";
function createParseClassName(config) {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  function parseClassName(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  }
  if (experimentalParseClassName) {
    return function parseClassNameExperimental(className) {
      return experimentalParseClassName({
        className,
        parseClassName
      });
    };
  }
  return parseClassName;
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    parseClassName: createParseClassName(config),
    ...createClassGroupUtils(config)
  };
}
const SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter((parsed) => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map((parsed) => parsed.originalClassName).join(" ");
}
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix2) {
  if (typeof mix2 === "string") {
    return mix2;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix2.length; k++) {
    if (mix2[k]) {
      if (resolvedValue = toValue(mix2[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
function getDefaultConfig() {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale2 = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space2 = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space2]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space2]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale2]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale2]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale2]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function mergeConfigs(baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(baseConfig, "separator", separator);
  overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
}
function overrideProperty(baseObject, overrideKey, overrideValue) {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
}
function overrideConfigProperties(baseObject, overrideObject) {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
}
function mergeConfigProperties(baseObject, mergeObject) {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== void 0) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
}
function extendTailwindMerge(configExtension, ...createConfig) {
  return typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
}
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString = (style2) => {
    return Object.keys(style2).reduce((str, key) => {
      if (style2[key] === void 0) return str;
      return str + `${key}:${style2[key]};`;
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y2 = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x2 = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale2 = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString({
        transform: `${transform} translate3d(${x2}px, ${y2}px, 0) scale(${scale2})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
var l = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, u = (e) => !e || typeof e != "object" || Object.keys(e).length === 0, x = (e, o) => JSON.stringify(e) === JSON.stringify(o);
function i(e, o) {
  e.forEach(function(r2) {
    Array.isArray(r2) ? i(r2, o) : o.push(r2);
  });
}
function y(e) {
  let o = [];
  return i(e, o), o;
}
var a$1 = (...e) => y(e).filter(Boolean), p = (e, o) => {
  let r2 = {}, c2 = Object.keys(e), f = Object.keys(o);
  for (let t of c2) if (f.includes(t)) {
    let s = e[t], n = o[t];
    typeof s == "object" && typeof n == "object" ? r2[t] = p(s, n) : Array.isArray(s) || Array.isArray(n) ? r2[t] = a$1(n, s) : r2[t] = n + " " + s;
  } else r2[t] = e[t];
  for (let t of f) c2.includes(t) || (r2[t] = o[t]);
  return r2;
}, g = (e) => !e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim();
var ie = { twMerge: true, twMergeConfig: {}, responsiveVariants: false }, _ = (s) => s || void 0, M = (...s) => _(y(s).filter(Boolean).join(" ")), R = null, v = {}, q = false, j = (...s) => (b$1) => b$1.twMerge ? ((!R || q) && (q = false, R = u(v) ? twMerge : extendTailwindMerge({ ...v, extend: { theme: v.theme, classGroups: v.classGroups, conflictingClassGroupModifiers: v.conflictingClassGroupModifiers, conflictingClassGroups: v.conflictingClassGroups, ...v.extend } })), _(R(M(s)))) : M(s), Z = (s, b2) => {
  for (let e in b2) s.hasOwnProperty(e) ? s[e] = M(s[e], b2[e]) : s[e] = b2[e];
  return s;
}, ce = (s, b$1) => {
  let { extend: e = null, slots: N = {}, variants: F = {}, compoundVariants: U = [], compoundSlots: C = [], defaultVariants: W = {} } = s, m = { ...ie, ...b$1 }, S = e != null && e.base ? M(e.base, s == null ? void 0 : s.base) : s == null ? void 0 : s.base, g$1 = e != null && e.variants && !u(e.variants) ? p(F, e.variants) : F, A = e != null && e.defaultVariants && !u(e.defaultVariants) ? { ...e.defaultVariants, ...W } : W;
  !u(m.twMergeConfig) && !x(m.twMergeConfig, v) && (q = true, v = m.twMergeConfig);
  let O = u(e == null ? void 0 : e.slots), $ = u(N) ? {} : { base: M(s == null ? void 0 : s.base, O && (e == null ? void 0 : e.base)), ...N }, w = O ? $ : Z({ ...e == null ? void 0 : e.slots }, u($) ? { base: s == null ? void 0 : s.base } : $), h$1 = u(e == null ? void 0 : e.compoundVariants) ? U : a$1(e == null ? void 0 : e.compoundVariants, U), V = (f) => {
    if (u(g$1) && u(N) && O) return j(S, f == null ? void 0 : f.class, f == null ? void 0 : f.className)(m);
    if (h$1 && !Array.isArray(h$1)) throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof h$1}`);
    if (C && !Array.isArray(C)) throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof C}`);
    let K = (t, n, a2 = [], i2) => {
      let r2 = a2;
      if (typeof n == "string") r2 = r2.concat(g(n).split(" ").map((o) => `${t}:${o}`));
      else if (Array.isArray(n)) r2 = r2.concat(n.reduce((o, c2) => o.concat(`${t}:${c2}`), []));
      else if (typeof n == "object" && typeof i2 == "string") {
        for (let o in n) if (n.hasOwnProperty(o) && o === i2) {
          let c2 = n[o];
          if (c2 && typeof c2 == "string") {
            let l2 = g(c2);
            r2[i2] ? r2[i2] = r2[i2].concat(l2.split(" ").map((u2) => `${t}:${u2}`)) : r2[i2] = l2.split(" ").map((u2) => `${t}:${u2}`);
          } else Array.isArray(c2) && c2.length > 0 && (r2[i2] = c2.reduce((l2, u2) => l2.concat(`${t}:${u2}`), []));
        }
      }
      return r2;
    }, z = (t, n = g$1, a$12 = null, i2 = null) => {
      var J;
      let r2 = n[t];
      if (!r2 || u(r2)) return null;
      let o = (J = i2 == null ? void 0 : i2[t]) != null ? J : f == null ? void 0 : f[t];
      if (o === null) return null;
      let c2 = l(o), l$1 = Array.isArray(m.responsiveVariants) && m.responsiveVariants.length > 0 || m.responsiveVariants === true, u$1 = A == null ? void 0 : A[t], d = [];
      if (typeof c2 == "object" && l$1) for (let [T, L] of Object.entries(c2)) {
        let ne = r2[L];
        if (T === "initial") {
          u$1 = L;
          continue;
        }
        Array.isArray(m.responsiveVariants) && !m.responsiveVariants.includes(T) || (d = K(T, ne, d, a$12));
      }
      let ae = c2 != null && typeof c2 != "object" ? c2 : l(u$1), k = r2[ae || "false"];
      return typeof d == "object" && typeof a$12 == "string" && d[a$12] ? Z(d, k) : d.length > 0 ? (d.push(k), d) : k;
    }, P = () => g$1 ? Object.keys(g$1).map((t) => z(t, g$1)) : null, p2 = (t, n) => {
      if (!g$1 || typeof g$1 != "object") return null;
      let a2 = new Array();
      for (let i2 in g$1) {
        let r2 = z(i2, g$1, t, n), o = t === "base" && typeof r2 == "string" ? r2 : r2 && r2[t];
        o && (a2[a2.length] = o);
      }
      return a2;
    }, D = {};
    for (let t in f) f[t] !== void 0 && (D[t] = f[t]);
    let H = (t, n) => {
      var i2;
      let a2 = typeof (f == null ? void 0 : f[t]) == "object" ? { [t]: (i2 = f[t]) == null ? void 0 : i2.initial } : {};
      return { ...A, ...D, ...a2, ...n };
    }, I = (t = [], n) => {
      let a2 = [];
      for (let { class: i2, className: r2, ...o } of t) {
        let c2 = true;
        for (let [l2, u2] of Object.entries(o)) {
          let d = H(l2, n);
          if (Array.isArray(u2)) {
            if (!u2.includes(d[l2])) {
              c2 = false;
              break;
            }
          } else if (d[l2] !== u2) {
            c2 = false;
            break;
          }
        }
        c2 && (i2 && a2.push(i2), r2 && a2.push(r2));
      }
      return a2;
    }, ee = (t) => {
      let n = I(h$1, t);
      if (!Array.isArray(n)) return n;
      let a2 = {};
      for (let i2 of n) if (typeof i2 == "string" && (a2.base = j(a2.base, i2)(m)), typeof i2 == "object") for (let [r2, o] of Object.entries(i2)) a2[r2] = j(a2[r2], o)(m);
      return a2;
    }, te = (t) => {
      if (C.length < 1) return null;
      let n = {};
      for (let { slots: a2 = [], class: i2, className: r2, ...o } of C) {
        if (!u(o)) {
          let c2 = true;
          for (let l2 of Object.keys(o)) {
            let u2 = H(l2, t)[l2];
            if (u2 === void 0 || (Array.isArray(o[l2]) ? !o[l2].includes(u2) : o[l2] !== u2)) {
              c2 = false;
              break;
            }
          }
          if (!c2) continue;
        }
        for (let c2 of a2) n[c2] = n[c2] || [], n[c2].push([i2, r2]);
      }
      return n;
    };
    if (!u(N) || !O) {
      let t = {};
      if (typeof w == "object" && !u(w)) for (let n of Object.keys(w)) t[n] = (a2) => {
        var i2, r2;
        return j(w[n], p2(n, a2), ((i2 = ee(a2)) != null ? i2 : [])[n], ((r2 = te(a2)) != null ? r2 : [])[n], a2 == null ? void 0 : a2.class, a2 == null ? void 0 : a2.className)(m);
      };
      return t;
    }
    return j(S, P(), I(h$1), f == null ? void 0 : f.class, f == null ? void 0 : f.className)(m);
  }, x$1 = () => {
    if (!(!g$1 || typeof g$1 != "object")) return Object.keys(g$1);
  };
  return V.variantKeys = x$1(), V.extend = e, V.base = S, V.slots = w, V.variants = g$1, V.defaultVariants = A, V.compoundSlots = C, V.compoundVariants = h$1, V;
};
var Presence;
(function(Presence2) {
  Presence2[Presence2["Entering"] = 0] = "Entering";
  Presence2[Presence2["Present"] = 1] = "Present";
  Presence2[Presence2["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
var VisibilityAction$1;
(function(VisibilityAction2) {
  VisibilityAction2[VisibilityAction2["Hide"] = 0] = "Hide";
  VisibilityAction2[VisibilityAction2["Show"] = 1] = "Show";
})(VisibilityAction$1 || (VisibilityAction$1 = {}));
const defaultTimestep = 1 / 60 * 1e3;
const getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
const onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index = toRunNextFrame.indexOf(callback);
      if (index !== -1)
        toRunNextFrame.splice(index, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i2 = 0; i2 < numToRun; i2++) {
          const callback = toRun[i2];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}
const maxElapsed = 40;
let useDefaultElapsed = true;
let runNextFrame = false;
let isProcessing = false;
const frame = {
  delta: 0,
  timestamp: 0
};
const stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
const steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
const sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process, keepAlive, immediate);
  };
  return acc;
}, {});
const cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
const flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
const processStep = (stepId) => steps[stepId].process(frame);
const processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
const startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
const getFrameData = () => frame;
function __rest$1(s, e) {
  var t = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
    t[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
      if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
        t[p2[i2]] = s[p2[i2]];
    }
  return t;
}
var invariant = function() {
};
const clamp$1 = (min, max, v2) => Math.min(Math.max(v2, min), max);
const safeMin = 1e-3;
const minDuration = 0.01;
const maxDuration = 10;
const minDamping = 0.05;
const maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp$1(minDamping, maxDamping, dampingRatio);
  duration = clamp$1(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta2 = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta2);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta2 = exponentialDecay * duration;
      const d = delta2 * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta2);
      const g2 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g2;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -1e-3 + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i2 = 1; i2 < rootIterations; i2++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}
const durationKeys = ["duration", "bounce"];
const physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived2 = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived2), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest$1(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
const zero = (_t) => 0;
const progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
const mix = (from, to, progress2) => -progress2 * from + progress2 * to + from;
const clamp = (min, max) => (v2) => Math.max(Math.min(v2, max), min);
const sanitize = (v2) => v2 % 1 ? Number(v2.toFixed(5)) : v2;
const floatRegex = /(-)?([\d]*\.?[\d])+/g;
const colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
const singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v2) {
  return typeof v2 === "string";
}
const number = {
  test: (v2) => typeof v2 === "number",
  parse: parseFloat,
  transform: (v2) => v2
};
const alpha = Object.assign(Object.assign({}, number), { transform: clamp(0, 1) });
const scale = Object.assign(Object.assign({}, number), { default: 1 });
const createUnitType = (unit) => ({
  test: (v2) => isString(v2) && v2.endsWith(unit) && v2.split(" ").length === 1,
  parse: parseFloat,
  transform: (v2) => `${v2}${unit}`
});
const degrees = createUnitType("deg");
const percent = createUnitType("%");
const px = createUnitType("px");
const vh = createUnitType("vh");
const vw = createUnitType("vw");
const progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v2) => percent.parse(v2) / 100, transform: (v2) => percent.transform(v2 * 100) });
const isColorString = (type, testProp) => (v2) => {
  return Boolean(isString(v2) && singleColorRegex.test(v2) && v2.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v2, testProp));
};
const splitColor = (aName, bName, cName) => (v2) => {
  if (!isString(v2))
    return v2;
  const [a2, b2, c2, alpha2] = v2.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};
const hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};
const clampRgbUnit = clamp(0, 255);
const rgbUnit = Object.assign(Object.assign({}, number), { transform: (v2) => Math.round(clampRgbUnit(v2)) });
const rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};
function parseHex(v2) {
  let r2 = "";
  let g2 = "";
  let b2 = "";
  let a2 = "";
  if (v2.length > 5) {
    r2 = v2.substr(1, 2);
    g2 = v2.substr(3, 2);
    b2 = v2.substr(5, 2);
    a2 = v2.substr(7, 2);
  } else {
    r2 = v2.substr(1, 1);
    g2 = v2.substr(2, 1);
    b2 = v2.substr(3, 1);
    a2 = v2.substr(4, 1);
    r2 += r2;
    g2 += g2;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r2, 16),
    green: parseInt(g2, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
const hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};
const color = {
  test: (v2) => rgba.test(v2) || hex.test(v2) || hsla.test(v2),
  parse: (v2) => {
    if (rgba.test(v2)) {
      return rgba.parse(v2);
    } else if (hsla.test(v2)) {
      return hsla.parse(v2);
    } else {
      return hex.parse(v2);
    }
  },
  transform: (v2) => {
    return isString(v2) ? v2 : v2.hasOwnProperty("red") ? rgba.transform(v2) : hsla.transform(v2);
  }
};
const colorToken = "${c}";
const numberToken = "${n}";
function test(v2) {
  var _a, _b, _c, _d;
  return isNaN(v2) && isString(v2) && ((_b = (_a = v2.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v2.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse$1(v2) {
  if (typeof v2 === "number")
    v2 = `${v2}`;
  const values = [];
  let numColors = 0;
  const colors = v2.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v2 = v2.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v2.match(floatRegex);
  if (numbers) {
    v2 = v2.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v2 };
}
function parse(v2) {
  return analyse$1(v2).values;
}
function createTransformer(v2) {
  const { values, numColors, tokenised } = analyse$1(v2);
  const numValues = values.length;
  return (v3) => {
    let output = tokenised;
    for (let i2 = 0; i2 < numValues; i2++) {
      output = output.replace(i2 < numColors ? colorToken : numberToken, i2 < numColors ? color.transform(v3[i2]) : sanitize(v3[i2]));
    }
    return output;
  };
}
const convertNumbersToZero = (v2) => typeof v2 === "number" ? 0 : v2;
function getAnimatableNone$1(v2) {
  const parsed = parse(v2);
  const transformer = createTransformer(v2);
  return transformer(parsed.map(convertNumbersToZero));
}
const complex = { test, parse, createTransformer, getAnimatableNone: getAnimatableNone$1 };
const maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v2) {
  let [name, value] = v2.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v2;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v2;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /([a-z-]*)\(.*?\)/g;
const filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v2) => {
  const functions = v2.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v2;
} });
function hueToRgb(p2, q2, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p2 + (q2 - p2) * 6 * t;
  if (t < 1 / 2)
    return q2;
  if (t < 2 / 3)
    return p2 + (q2 - p2) * (2 / 3 - t) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q2 = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q2;
    red = hueToRgb(p2, q2, hue + 1 / 3);
    green = hueToRgb(p2, q2, hue);
    blue = hueToRgb(p2, q2, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}
const mixLinearColor = (from, to, v2) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v2 * (toExpo - fromExpo) + fromExpo));
};
const colorTypes = [hex, rgba, hsla];
const getColorType = (v2) => colorTypes.find((type) => type.test(v2));
const mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v2) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v2);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v2);
    return fromColorType.transform(blended);
  };
};
const isNum = (v2) => typeof v2 === "number";
const combineFunctions = (a2, b2) => (v2) => b2(a2(v2));
const pipe = (...transformers) => transformers.reduce(combineFunctions);
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v2) => mix(origin, target, v2);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
const mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i2) => getMixer(fromThis, to[i2]));
  return (v2) => {
    for (let i2 = 0; i2 < numValues; i2++) {
      output[i2] = blendValue[i2](v2);
    }
    return output;
  };
};
const mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v2) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v2);
    }
    return output;
  };
};
function analyse(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i2 = 0; i2 < numValues; i2++) {
    if (numNumbers || typeof parsed[i2] === "number") {
      numNumbers++;
    } else {
      if (parsed[i2].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
const mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse(origin);
  const targetStats = analyse(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    return (p2) => `${p2 > 0 ? target : origin}`;
  }
};
const mixNumber = (from, to) => (p2) => mix(from, to, p2);
function detectMixerFactory(v2) {
  if (typeof v2 === "number") {
    return mixNumber;
  } else if (typeof v2 === "string") {
    if (color.test(v2)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v2)) {
    return mixArray;
  } else if (typeof v2 === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i2 = 0; i2 < numMixers; i2++) {
    let mixer = mixerFactory(output[i2], output[i2 + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i2] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v2) => mixer(progress(from, to, v2));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v2) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v2 <= input[0]) {
      foundMixerIndex = true;
    } else if (v2 >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i2 = 1;
      for (; i2 < inputLength; i2++) {
        if (input[i2] > v2 || i2 === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i2 - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v2);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length);
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1);
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v2) => interpolator(clamp$1(input[0], input[inputLength - 1], v2)) : interpolator;
}
const reverseEasing = (easing) => (p2) => 1 - easing(1 - p2);
const mirrorEasing = (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;
const createExpoIn = (power) => (p2) => Math.pow(p2, power);
const createBackIn = (power) => (p2) => p2 * p2 * ((power + 1) * p2 - power);
const createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p2) => (p2 *= 2) < 1 ? 0.5 * backEasing(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));
};
const DEFAULT_OVERSHOOT_STRENGTH = 1.525;
const BOUNCE_FIRST_THRESHOLD = 4 / 11;
const BOUNCE_SECOND_THRESHOLD = 8 / 11;
const BOUNCE_THIRD_THRESHOLD = 9 / 10;
const linear = (p2) => p2;
const easeIn = createExpoIn(2);
const easeOut = reverseEasing(easeIn);
const easeInOut = mirrorEasing(easeIn);
const circIn = (p2) => 1 - Math.sin(Math.acos(p2));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circOut);
const backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
const backOut = reverseEasing(backIn);
const backInOut = mirrorEasing(backIn);
const anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
const ca = 4356 / 361;
const cb = 35442 / 1805;
const cc = 16061 / 1805;
const bounceOut = (p2) => {
  if (p2 === 1 || p2 === 0)
    return p2;
  const p22 = p2 * p2;
  return p2 < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p22 : p2 < BOUNCE_SECOND_THRESHOLD ? 9.075 * p22 - 9.9 * p2 + 3.4 : p2 < BOUNCE_THIRD_THRESHOLD ? ca * p22 - cb * p2 + cc : 10.8 * p2 * p2 - 20.52 * p2 + 10.72;
};
const bounceIn = reverseEasing(bounceOut);
const bounceInOut = (p2) => p2 < 0.5 ? 0.5 * (1 - bounceOut(1 - p2 * 2)) : 0.5 * bounceOut(p2 * 2 - 1) + 0.5;
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i2) => i2 !== 0 ? i2 / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes$1({ from = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t) => {
      const delta2 = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta2 > restDelta || delta2 < -restDelta);
      state.value = state.done ? target : target + delta2;
      return state;
    },
    flipTarget: () => {
    }
  };
}
const types = { keyframes: keyframes$1, spring, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes$1;
  } else if (types[config.type]) {
    return types[config.type];
  }
  const keys = new Set(Object.keys(config));
  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return keyframes$1;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return spring;
  }
  return keyframes$1;
}
function loopElapsed(elapsed, duration, delay = 0) {
  return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}
const framesync = (update2) => {
  const passTimestamp = ({ delta: delta2 }) => update2(delta2);
  return {
    start: () => sync.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest$1(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update2(delta2) {
    if (!isForwardPlayback)
      delta2 = -delta2;
    elapsed += delta2;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update2);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}
function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v2) {
    return min !== void 0 && v2 < min || max !== void 0 && v2 > max;
  }
  function boundaryNearest(v2) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v2) < Math.abs(max - v2) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v2) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v2);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v2);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading2 = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v2) => {
      prev = current;
      current = v2;
      velocity = velocityPerSecond(v2 - prev, getFrameData().delta);
      if (heading2 === 1 && v2 > boundary || heading2 === -1 && v2 < boundary) {
        startSpring({ from: v2, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}
const isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");
const isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");
const distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}
const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
const b = (a1, a2) => 3 * a2 - 6 * a1;
const c = (a1) => 3 * a1;
const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i2 = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
  return currentT;
}
const newtonIterations = 8;
const newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i2 = 0; i2 < newtonIterations; ++i2) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
const kSplineTableSize = 11;
const kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i2 = 0; i2 < kSplineTableSize; ++i2) {
    sampleValues[i2] = calcBezier(i2 * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  var index = arr.indexOf(item);
  index > -1 && arr.splice(index, 1);
}
var SubscriptionManager = (
  /** @class */
  function() {
    function SubscriptionManager2() {
      this.subscriptions = [];
    }
    SubscriptionManager2.prototype.add = function(handler) {
      var _this = this;
      addUniqueItem(this.subscriptions, handler);
      return function() {
        return removeItem(_this.subscriptions, handler);
      };
    };
    SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
      var numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a2, b2, c2);
      } else {
        for (var i2 = 0; i2 < numSubscriptions; i2++) {
          var handler = this.subscriptions[i2];
          handler && handler(a2, b2, c2);
        }
      }
    };
    SubscriptionManager2.prototype.getSize = function() {
      return this.subscriptions.length;
    };
    SubscriptionManager2.prototype.clear = function() {
      this.subscriptions.length = 0;
    };
    return SubscriptionManager2;
  }()
);
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = (
  /** @class */
  function() {
    function MotionValue2(init2, startStopNotifier) {
      var _this = this;
      this.timeDelta = 0;
      this.lastUpdated = 0;
      this.updateSubscribers = new SubscriptionManager();
      this.velocityUpdateSubscribers = new SubscriptionManager();
      this.renderSubscribers = new SubscriptionManager();
      this.canTrackVelocity = false;
      this.updateAndNotify = function(v2, render) {
        if (render === void 0) {
          render = true;
        }
        _this.prev = _this.current;
        _this.current = v2;
        var _a = getFrameData(), delta2 = _a.delta, timestamp = _a.timestamp;
        if (_this.lastUpdated !== timestamp) {
          _this.timeDelta = delta2;
          _this.lastUpdated = timestamp;
          sync.postRender(_this.scheduleVelocityCheck);
        }
        if (_this.prev !== _this.current) {
          _this.updateSubscribers.notify(_this.current);
        }
        if (_this.velocityUpdateSubscribers.getSize()) {
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
        if (render) {
          _this.renderSubscribers.notify(_this.current);
        }
      };
      this.scheduleVelocityCheck = function() {
        return sync.postRender(_this.velocityCheck);
      };
      this.velocityCheck = function(_a) {
        var timestamp = _a.timestamp;
        if (timestamp !== _this.lastUpdated) {
          _this.prev = _this.current;
          _this.velocityUpdateSubscribers.notify(_this.getVelocity());
        }
      };
      this.hasAnimated = false;
      this.prev = this.current = init2;
      this.canTrackVelocity = isFloat(this.current);
      this.onSubscription = () => {
      };
      this.onUnsubscription = () => {
      };
      if (startStopNotifier) {
        this.onSubscription = () => {
          if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) {
            const unsub = startStopNotifier();
            this.onUnsubscription = () => {
            };
            if (unsub) {
              this.onUnsubscription = () => {
                if (this.updateSubscribers.getSize() + this.velocityUpdateSubscribers.getSize() + this.renderSubscribers.getSize() === 0) {
                  unsub();
                }
              };
            }
          }
        };
      }
    }
    MotionValue2.prototype.onChange = function(subscription) {
      this.onSubscription();
      const unsub = this.updateSubscribers.add(subscription);
      return () => {
        unsub();
        this.onUnsubscription();
      };
    };
    MotionValue2.prototype.subscribe = function(subscription) {
      return this.onChange(subscription);
    };
    MotionValue2.prototype.clearListeners = function() {
      this.updateSubscribers.clear();
      this.onUnsubscription();
    };
    MotionValue2.prototype.onRenderRequest = function(subscription) {
      this.onSubscription();
      subscription(this.get());
      const unsub = this.renderSubscribers.add(subscription);
      return () => {
        unsub();
        this.onUnsubscription();
      };
    };
    MotionValue2.prototype.attach = function(passiveEffect) {
      this.passiveEffect = passiveEffect;
    };
    MotionValue2.prototype.set = function(v2, render) {
      if (render === void 0) {
        render = true;
      }
      if (!render || !this.passiveEffect) {
        this.updateAndNotify(v2, render);
      } else {
        this.passiveEffect(v2, this.updateAndNotify);
      }
    };
    MotionValue2.prototype.update = function(v2) {
      this.set(v2(this.get()));
    };
    MotionValue2.prototype.get = function() {
      this.onSubscription();
      const curr = this.current;
      this.onUnsubscription();
      return curr;
    };
    MotionValue2.prototype.getPrevious = function() {
      return this.prev;
    };
    MotionValue2.prototype.getVelocity = function() {
      this.onSubscription();
      const vel = this.canTrackVelocity ? (
        // These casts could be avoided if parseFloat would be typed better
        velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      ) : 0;
      this.onUnsubscription();
      return vel;
    };
    MotionValue2.prototype.start = function(animation) {
      var _this = this;
      this.stop();
      return new Promise(function(resolve) {
        _this.hasAnimated = true;
        _this.stopAnimation = animation(resolve);
      }).then(function() {
        return _this.clearAnimation();
      });
    };
    MotionValue2.prototype.stop = function() {
      if (this.stopAnimation)
        this.stopAnimation();
      this.clearAnimation();
    };
    MotionValue2.prototype.isAnimating = function() {
      return !!this.stopAnimation;
    };
    MotionValue2.prototype.clearAnimation = function() {
      this.stopAnimation = null;
    };
    MotionValue2.prototype.destroy = function() {
      this.updateSubscribers.clear();
      this.renderSubscribers.clear();
      this.stop();
      this.onUnsubscription();
    };
    return MotionValue2;
  }()
);
function motionValue(init2, startStopNotifier) {
  return new MotionValue(init2, startStopNotifier);
}
const getDomContext = (name, el) => {
  if (!el || !window) {
    return void 0;
  }
  let par = el;
  while (par = par.parentNode) {
    if (par.motionDomContext && par.motionDomContext.has(name)) {
      return par.motionDomContext.get(name);
    }
  }
  return void 0;
};
const setDomContext = (name, el, value) => {
  if (el && window) {
    if (!el.motionDomContext) {
      el.motionDomContext = /* @__PURE__ */ new Map();
    }
    el.motionDomContext.set(name, value);
  }
};
var MotionConfigContext = (c2) => getDomContext("MotionConfig", c2) || writable({
  transformPagePoint: function(p2) {
    return p2;
  },
  isStatic: false
});
function create_fragment$u(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[1],
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
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        2)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[1],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[1]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[1],
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
const ScaleCorrectionContext = (isCustom) => getDomContext("ScaleCorrection", isCustom) || writable([]);
const ScaleCorrectionParentContext = () => writable([]);
const provideScaleCorrection = (isCustom) => {
  const fromParent = getContext(ScaleCorrectionContext) || ScaleCorrectionContext(isCustom);
  const ctx = ScaleCorrectionContext();
  setContext(ScaleCorrectionContext, ctx);
  setDomContext("ScaleCorrection", isCustom, ctx);
  setContext(ScaleCorrectionParentContext, fromParent);
};
function instance$x($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isCustom } = $$props;
  provideScaleCorrection(isCustom);
  $$self.$$set = ($$props2) => {
    if ("isCustom" in $$props2) $$invalidate(0, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(1, $$scope = $$props2.$$scope);
  };
  return [isCustom, $$scope, slots];
}
class ScaleCorrectionProvider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$x, create_fragment$u, safe_not_equal, { isCustom: 0 });
  }
}
function __rest(s, e) {
  var t = {};
  for (var p2 in s) if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
    t[p2] = s[p2];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
      if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
        t[p2[i2]] = s[p2[i2]];
    }
  return t;
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i2 = m.call(o), r2, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r2 && !r2.done && (m = i2["return"])) m.call(i2);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
    if (ar || !(i2 in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
      ar[i2] = from[i2];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && // It's animatable if we have a string
  complex.test(value) && // And it contains numbers and/or colors
  !value.startsWith("url(")) {
    return true;
  }
  return false;
};
var isKeyframesTarget = function(v2) {
  return Array.isArray(v2);
};
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restDelta: 0.01,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes = function(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return Object.assign({ to }, transitionFactory(to));
};
var int = Object.assign(Object.assign({}, number), { transform: Math.round });
var numberValueTypes = {
  // Border props
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  // Positioning props
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  // Spacing props
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  // Transform props
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  // Misc
  zIndex: int,
  // SVG
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};
var defaultValueTypes = Object.assign(Object.assign({}, numberValueTypes), {
  // Color props
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  // Border props
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};
function getAnimatableNone(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = Object.assign({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to));
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = Object.assign(Object.assign({}, transition), getDefaultTransition(key, options.to));
  }
  return Object.assign(Object.assign({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = isAnimatable(key, origin);
  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v2) {
        return value.set(v2);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(Object.assign(Object.assign({}, options), valueTransition)) : animate(Object.assign(Object.assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v2) {
      var _a2;
      options.onUpdate(v2);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v2);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2;
    value.set(target);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay = getDelayFromTransition(transition, key);
    var start = function() {
      return controls = animation();
    };
    if (delay) {
      delayTimer = setTimeout(start, secondsToMilliseconds(delay));
    } else {
      start();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}
var isNumericalString = function(v2) {
  return /^\-?\d*\.?\d+$/.test(v2);
};
var isCustomValue = function(v2) {
  return Boolean(v2 && typeof v2 === "object" && v2.mix && v2.toValue);
};
var resolveFinalValueInKeyframes = function(v2) {
  return isKeyframesTarget(v2) ? v2[v2.length - 1] || 0 : v2;
};
var testValueType = function(v2) {
  return function(type) {
    return type.test(v2);
  };
};
var auto = {
  test: function(v2) {
    return v2 === "auto";
  },
  parse: function(v2) {
    return v2;
  }
};
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = function(v2) {
  return dimensionValueTypes.find(testValueType(v2));
};
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes)), [color, complex]);
var findValueType = function(v2) {
  return valueTypes.find(testValueType(v2));
};
function isVariantLabels(v2) {
  return Array.isArray(v2);
}
function isVariantLabel(v2) {
  return typeof v2 === "string" || isVariantLabels(v2);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity$1(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  return typeof definition === "function" ? definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity) : definition;
}
function resolveVariant(visualElement2, definition, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity$1(visualElement2));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest(_a, ["transitionEnd", "transition"]);
  target = Object.assign(Object.assign({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i2 = 0; i2 < numNewValues; i2++) {
    var key = newValueKeys[i2];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && isNumericalString(value)) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}
function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart();
  var animation;
  if (Array.isArray(definition)) {
    var animations2 = definition.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(function() {
    return visualElement2.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var animation = startAnimation(key, value, valueTarget, Object.assign({ delay }, transition));
    animations2.push(animation);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i2) {
    if (i2 === void 0) {
      i2 = 0;
    }
    return i2 * staggerChildren;
  } : function(i2) {
    if (i2 === void 0) {
      i2 = 0;
    }
    return maxStaggerDuration - i2 * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i2) {
    animations2.push(animateVariant(child, variant, Object.assign(Object.assign({}, options), { delay: delayChildren + generateStaggerDuration(i2) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}
var valueScaleCorrection = {};
function addScaleCorrection(correctors) {
  for (var key in correctors) {
    valueScaleCorrection[key] = correctors[key];
  }
}
function eachAxis(handler) {
  return [handler("x"), handler("y")];
}
function noop(any) {
  return any;
}
function convertBoundingBoxToAxisBox(_a) {
  var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertAxisBoxToBoundingBox(_a) {
  var x2 = _a.x, y2 = _a.y;
  return {
    top: y2.min,
    bottom: y2.max,
    left: x2.min,
    right: x2.max
  };
}
function transformBoundingBox(_a, transformPoint2) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  if (transformPoint2 === void 0) {
    transformPoint2 = noop;
  }
  var topLeft = transformPoint2({ x: left, y: top });
  var bottomRight = transformPoint2({ x: right, y: bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}
function axisBox() {
  return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
  return {
    x: Object.assign({}, box.x),
    y: Object.assign({}, box.y)
  };
}
var zeroDelta = {
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
};
function delta() {
  return {
    x: Object.assign({}, zeroDelta),
    y: Object.assign({}, zeroDelta)
  };
}
function isDraggable(visualElement2) {
  var _a = visualElement2.getProps(), drag2 = _a.drag, _dragX = _a._dragX;
  return drag2 && !_dragX;
}
function resetAxis(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function resetBox(box, originBox) {
  resetAxis(box.x, originBox.x);
  resetAxis(box.y, originBox.y);
}
function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x2 = _a.x, y2 = _a.y;
  applyAxisDelta(box.x, x2.translate, x2.scale, x2.originPoint);
  applyAxisDelta(box.y, y2.translate, y2.scale, y2.originPoint);
}
function applyAxisTransforms(final, axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  final.min = axis.min;
  final.max = axis.max;
  var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function applyBoxTransforms(finalBox, box, transforms) {
  applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
  applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate, scale2, origin, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  var originPoint = mix(axis.min, axis.max, origin) - translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
function removeBoxTransforms(box, transforms) {
  removeAxisTransforms(box.x, transforms, xKeys);
  removeAxisTransforms(box.y, transforms, yKeys);
}
function applyTreeDeltas(box, treeScale, treePath) {
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta2;
  for (var i2 = 0; i2 < treeLength; i2++) {
    node = treePath[i2];
    delta2 = node.getLayoutState().delta;
    treeScale.x *= delta2.x.scale;
    treeScale.y *= delta2.y.scale;
    applyBoxDelta(box, delta2);
    if (isDraggable(node)) {
      applyBoxTransforms(box, box, node.getLatestValues());
    }
  }
}
var clampProgress = function(v2) {
  return clamp$1(0, 1, v2);
};
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance(value, target) < maxDistance;
}
function calcLength(axis) {
  return axis.max - axis.min;
}
function calcOrigin$1(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clampProgress(origin);
}
function updateAxisDelta(delta2, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta2.origin = origin;
  delta2.originPoint = mix(source.min, source.max, delta2.origin);
  delta2.scale = calcLength(target) / calcLength(source);
  if (isNear(delta2.scale, 1, 1e-4))
    delta2.scale = 1;
  delta2.translate = mix(target.min, target.max, delta2.origin) - delta2.originPoint;
  if (isNear(delta2.translate))
    delta2.translate = 0;
}
function updateBoxDelta(delta2, source, target, origin) {
  updateAxisDelta(delta2.x, source.x, target.x, defaultOrigin(origin.originX));
  updateAxisDelta(delta2.y, source.y, target.y, defaultOrigin(origin.originY));
}
function defaultOrigin(origin) {
  return typeof origin === "number" ? origin : 0.5;
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(projection, parentProjection) {
  calcRelativeAxis(projection.target.x, projection.relativeTarget.x, parentProjection.target.x);
  calcRelativeAxis(projection.target.y, projection.relativeTarget.y, parentProjection.target.y);
}
var isMotionValue = function(value) {
  return value !== null && typeof value === "object" && value.getVelocity;
};
var createProjectionState = function() {
  return {
    isEnabled: false,
    isTargetLocked: false,
    target: axisBox(),
    targetFinal: axisBox()
  };
};
function createLayoutState() {
  return {
    isHydrated: false,
    layout: axisBox(),
    layoutCorrected: axisBox(),
    treeScale: { x: 1, y: 1 },
    delta: delta(),
    deltaFinal: delta(),
    deltaTransform: ""
  };
}
var zeroLayout = createLayoutState();
function buildLayoutProjectionTransform(_a, treeScale, latestTransform) {
  var x2 = _a.x, y2 = _a.y;
  var xTranslate = x2.translate / treeScale.x;
  var yTranslate = y2.translate / treeScale.y;
  var transform = "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) ";
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform += "rotate(" + rotate + ") ";
    if (rotateX)
      transform += "rotateX(" + rotateX + ") ";
    if (rotateY)
      transform += "rotateY(" + rotateY + ") ";
  }
  transform += "scale(" + x2.scale + ", " + y2.scale + ")";
  return !latestTransform && transform === identityProjection ? "" : transform;
}
function buildLayoutProjectionTransformOrigin(_a) {
  var deltaFinal = _a.deltaFinal;
  return deltaFinal.x.origin * 100 + "% " + deltaFinal.y.origin * 100 + "% 0";
}
var identityProjection = buildLayoutProjectionTransform(zeroLayout.delta, zeroLayout.treeScale, {});
var isAnimationControls = function(v2) {
  return typeof v2 === "object" && typeof v2.start === "function";
};
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i2 = 0; i2 < prevLength; i2++) {
    if (prev[i2] !== next[i2])
      return false;
  }
  return true;
}
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Focus,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder)).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate2 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
      acc = Object.assign(Object.assign(Object.assign({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate2 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i3) {
      var type = reversePriorityOrder[i3];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i3;
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = Object.assign({}, encounteredKeys);
      if (
        // If it isn't active and hasn't *just* been set as inactive
        !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
        !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
        isAnimationControls(prop) || typeof prop === "boolean"
      ) {
        return "continue";
      }
      var shouldAnimateType = variantsHaveChanged(typeState.prevProp, prop) || // If we're making this variant active, we want to always make it active
      type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
      i3 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = Object.assign(Object.assign({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev)) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = Object.assign(Object.assign({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
          return {
            animation,
            options: Object.assign({ type }, options)
          };
        }))));
      }
    };
    for (var i2 = 0; i2 < numAnimationTypes; i2++) {
      _loop_1(i2);
    }
    allAnimatedKeys = Object.assign({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate2(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    return animateChanges(options, type);
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state;
    }
  };
}
function variantsHaveChanged(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props) {
      return names.forEach(function(name) {
        var _a;
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        var on = "on" + name;
        var propListener = props[on];
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i2) {
    lifecycles["on" + names[i2]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i2]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args)));
    };
  });
  return lifecycles;
}
function updateMotionValuesFromProps(element2, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element2.addValue(key, nextValue);
    } else if (isMotionValue(prevValue)) {
      element2.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element2.hasValue(key)) {
        var existingValue = element2.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element2.addValue(key, motionValue((_a = element2.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element2.removeValue(key);
  }
  return next;
}
function updateLayoutDeltas(_a, _b, treePath, transformOrigin) {
  var delta2 = _a.delta, layout = _a.layout, layoutCorrected = _a.layoutCorrected, treeScale = _a.treeScale;
  var target = _b.target;
  resetBox(layoutCorrected, layout);
  applyTreeDeltas(layoutCorrected, treeScale, treePath);
  updateBoxDelta(delta2, layoutCorrected, target, transformOrigin);
}
var compareByDepth = function(a2, b2) {
  return a2.depth - b2.depth;
};
var FlatTree = (
  /** @class */
  function() {
    function FlatTree2() {
      this.children = [];
      this.isDirty = false;
    }
    FlatTree2.prototype.add = function(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.remove = function(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    };
    FlatTree2.prototype.forEach = function(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      var numChildren = this.children.length;
      for (var i2 = 0; i2 < numChildren; i2++) {
        callback(this.children[i2]);
      }
    };
    return FlatTree2;
  }()
);
function tweenAxis(target, prev, next, p2) {
  target.min = mix(prev.min, next.min, p2);
  target.max = mix(prev.max, next.max, p2);
}
function calcRelativeOffsetAxis(parent, child) {
  return {
    min: child.min - parent.min,
    max: child.max - parent.min
  };
}
function calcRelativeOffset(parent, child) {
  return {
    x: calcRelativeOffsetAxis(parent.x, child.x),
    y: calcRelativeOffsetAxis(parent.y, child.y)
  };
}
function setCurrentViewportBox(visualElement2) {
  var projectionParent = visualElement2.getProjectionParent();
  if (!projectionParent) {
    visualElement2.rebaseProjectionTarget();
    return;
  }
  var relativeOffset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement2.getLayoutState().layout);
  eachAxis(function(axis) {
    visualElement2.setProjectionTargetAxis(axis, relativeOffset[axis].min, relativeOffset[axis].max, true);
  });
}
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, resetTransform = _a.resetTransform, restoreTransform = _a.restoreTransform, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps2 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent = _a2.parent, props = _a2.props, presenceId2 = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState;
    if (options === void 0) {
      options = {};
    }
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance2;
    var lifecycles = createLifecycles();
    var projection = createProjectionState();
    var projectionParent;
    var leadProjection = projection;
    var leadLatestValues = latestValues;
    var unsubscribeFromLeadVisualElement;
    var layoutState = createLayoutState();
    var crossfader;
    var hasViewportBoxUpdated = false;
    var values = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var projectionTargetProgress;
    var baseTarget = Object.assign({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance2)
        return;
      if (element2.isProjectionReady()) {
        applyBoxTransforms(leadProjection.targetFinal, leadProjection.target, leadLatestValues);
        updateBoxDelta(layoutState.deltaFinal, layoutState.layoutCorrected, leadProjection.targetFinal, latestValues);
      }
      triggerBuild();
      renderInstance(instance2, renderState);
    }
    function triggerBuild() {
      var valuesToRender = latestValues;
      if (crossfader && crossfader.isActive()) {
        var crossfadedValues = crossfader.getCrossfadeState(element2);
        if (crossfadedValues)
          valuesToRender = crossfadedValues;
      }
      build(element2, renderState, valuesToRender, leadProjection, layoutState, options, props);
    }
    function update2() {
      lifecycles.notifyUpdate(latestValues);
    }
    function updateLayoutProjection() {
      if (!element2.isProjectionReady())
        return;
      var delta2 = layoutState.delta, treeScale = layoutState.treeScale;
      var prevTreeScaleX = treeScale.x;
      var prevTreeScaleY = treeScale.y;
      var prevDeltaTransform = layoutState.deltaTransform;
      updateLayoutDeltas(layoutState, leadProjection, element2.path, latestValues);
      hasViewportBoxUpdated && element2.notifyViewportBoxUpdate(leadProjection.target, delta2);
      hasViewportBoxUpdated = false;
      var deltaTransform = buildLayoutProjectionTransform(delta2, treeScale);
      if (deltaTransform !== prevDeltaTransform || // Also compare calculated treeScale, for values that rely on this only for scale correction
      prevTreeScaleX !== treeScale.x || prevTreeScaleY !== treeScale.y) {
        element2.scheduleRender();
      }
      layoutState.deltaTransform = deltaTransform;
    }
    function updateTreeLayoutProjection() {
      element2.layoutTree.forEach(fireUpdateLayoutProjection);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && sync.update(update2, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element2.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps2(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element2 = Object.assign(Object.assign({
      treeType,
      /**
       * This is a mirror of the internal instance prop, which keeps
       * VisualElement type-compatible with React's RefObject.
       */
      current: null,
      /**
       * The depth of this visual element within the visual element tree.
       */
      depth: parent ? parent.depth + 1 : 0,
      parent,
      children: /* @__PURE__ */ new Set(),
      /**
       * An ancestor path back to the root visual element. This is used
       * by layout projection to quickly recurse back up the tree.
       */
      path: parent ? __spreadArray(__spreadArray([], __read(parent.path)), [parent]) : [],
      layoutTree: parent ? parent.layoutTree : new FlatTree(),
      /**
       *
       */
      presenceId: presenceId2,
      projection,
      /**
       * If this component is part of the variant tree, it should track
       * any children that are also part of the tree. This is essentially
       * a shadow tree to simplify logic around how to stagger over children.
       */
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      /**
       * Whether this instance is visible. This can be changed imperatively
       * by AnimateSharedLayout, is analogous to CSS's visibility in that
       * hidden elements should take up layout, and needs enacting by the configured
       * render function.
       */
      isVisible: void 0,
      /**
       * Normally, if a component is controlled by a parent's variants, it can
       * rely on that ancestor to trigger animations further down the tree.
       * However, if a component is created after its parent is mounted, the parent
       * won't trigger that mount animation so the child needs to.
       *
       * TODO: This might be better replaced with a method isParentMounted
       */
      manuallyAnimateOnMount: Boolean(parent === null || parent === void 0 ? void 0 : parent.isMounted()),
      /**
       * This can be set by AnimatePresence to force components that mount
       * at the same time as it to mount as if they have initial={false} set.
       */
      blockInitialAnimation,
      /**
       * Determine whether this component has mounted yet. This is mostly used
       * by variant children to determine whether they need to trigger their
       * own animations on mount.
       */
      isMounted: function() {
        return Boolean(instance2);
      },
      mount: function(newInstance) {
        instance2 = element2.current = newInstance;
        element2.pointTo(element2);
        if (isVariantNode && parent && !isControllingVariants) {
          removeFromVariantTree = parent === null || parent === void 0 ? void 0 : parent.addVariantChild(element2);
        }
        parent === null || parent === void 0 ? void 0 : parent.children.add(element2);
      },
      /**
       *
       */
      unmount: function() {
        cancelSync.update(update2);
        cancelSync.render(render);
        cancelSync.preRender(element2.updateLayoutProjection);
        valueSubscriptions.forEach(function(remove) {
          return remove();
        });
        element2.stopLayoutAnimation();
        element2.layoutTree.remove(element2);
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent === null || parent === void 0 ? void 0 : parent.children.delete(element2);
        unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
        lifecycles.clearAllListeners();
      },
      /**
       * Add a child visual element to our set of children.
       */
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element2.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element2.getInstance(), other.getInstance());
      },
      /**
       * Returns the closest variant node in the tree starting from
       * this visual element.
       */
      getClosestVariantNode: function() {
        return isVariantNode ? element2 : parent === null || parent === void 0 ? void 0 : parent.getClosestVariantNode();
      },
      /**
       * A method that schedules an update to layout projections throughout
       * the tree. We inherit from the parent so there's only ever one
       * job scheduled on the next frame - that of the root visual element.
       */
      scheduleUpdateLayoutProjection: parent ? parent.scheduleUpdateLayoutProjection : function() {
        return sync.preRender(element2.updateTreeLayoutProjection, false, true);
      },
      /**
       * Expose the latest layoutId prop.
       */
      getLayoutId: function() {
        return props.layoutId;
      },
      /**
       * Returns the current instance.
       */
      getInstance: function() {
        return instance2;
      },
      /**
       * Get/set the latest static values.
       */
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      /**
       * Returns the latest motion value state. Currently only used to take
       * a snapshot of the visual element - perhaps this can return the whole
       * visual state
       */
      getLatestValues: function() {
        return latestValues;
      },
      /**
       * Set the visiblity of the visual element. If it's changed, schedule
       * a render to reflect these changes.
       */
      setVisibility: function(visibility) {
        if (element2.isVisible === visibility)
          return;
        element2.isVisible = visibility;
        element2.scheduleRender();
      },
      /**
       * Make a target animatable by Popmotion. For instance, if we're
       * trying to animate width from 100px to 100vw we need to measure 100vw
       * in pixels to determine what we really need to animate to. This is also
       * pluggable to support Framer's custom value types like Color,
       * and CSS variables.
       */
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element2, target, props, canMutate);
      },
      // Motion values ========================
      /**
       * Add a motion value and bind it to this visual element.
       */
      addValue: function(key2, value2) {
        if (element2.hasValue(key2))
          element2.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      /**
       * Remove a motion value and unbind any active subscriptions.
       */
      removeValue: function(key2) {
        var _a3;
        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      /**
       * Check whether we have a motion value for this key
       */
      hasValue: function(key2) {
        return values.has(key2);
      },
      /**
       * Get a motion value for this key. If called with a default
       * value, we'll create one if none exists.
       */
      getValue: function(key2, defaultValue) {
        var value2 = values.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element2.addValue(key2, value2);
        }
        return value2;
      },
      /**
       * Iterate over our motion values.
       */
      forEachValue: function(callback) {
        return values.forEach(callback);
      },
      /**
       * If we're trying to animate to a previously unencountered value,
       * we need to check for it in our state and as a last resort read it
       * directly from the instance (which might have performance implications).
       */
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance2, key2, options);
      },
      /**
       * Set the base target to later animate back to. This is currently
       * only hydrated on creation and when we first read a value.
       */
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      /**
       * Find the base target for a value thats been removed from all animation
       * props.
       */
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      /**
       * Build the renderer state based on the latest visual state.
       */
      build: function() {
        triggerBuild();
        return renderState;
      },
      /**
       * Schedule a render on the next animation frame.
       */
      scheduleRender: function() {
        sync.render(render, false, true);
      },
      /**
       * Synchronously fire render. It's prefered that we batch renders but
       * in many circumstances, like layout measurement, we need to run this
       * synchronously. However in those instances other measures should be taken
       * to batch reads/writes.
       */
      syncRender: render,
      /**
       * Update the provided props. Ensure any newly-added motion values are
       * added to our map, old ones removed, and listeners updated.
       */
      setProps: function(newProps) {
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element2, scrapeMotionValuesFromProps2(props), prevMotionValues);
      },
      getProps: function() {
        return props;
      },
      // Variants ==============================
      /**
       * Returns the variant definition with a given name.
       */
      getVariant: function(name) {
        var _a3;
        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      /**
       * Returns the defined default transition on this component.
       */
      getDefaultTransition: function() {
        return props.transition;
      },
      /**
       * Used by child variant nodes to get the closest ancestor variant props.
       */
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent === null || parent === void 0 ? void 0 : parent.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent === null || parent === void 0 ? void 0 : parent.getVariantContext()) || {};
          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i2 = 0; i2 < numVariantProps; i2++) {
          var name_1 = variantProps[i2];
          var prop = props[name_1];
          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      },
      // Layout projection ==============================
      /**
       * Enable layout projection for this visual element. Won't actually
       * occur until we also have hydrated layout measurements.
       */
      enableLayoutProjection: function() {
        projection.isEnabled = true;
        element2.layoutTree.add(element2);
      },
      /**
       * Lock the projection target, for instance when dragging, so
       * nothing else can try and animate it.
       */
      lockProjectionTarget: function() {
        projection.isTargetLocked = true;
      },
      unlockProjectionTarget: function() {
        element2.stopLayoutAnimation();
        projection.isTargetLocked = false;
      },
      getLayoutState: function() {
        return layoutState;
      },
      setCrossfader: function(newCrossfader) {
        crossfader = newCrossfader;
      },
      isProjectionReady: function() {
        return projection.isEnabled && projection.isHydrated && layoutState.isHydrated;
      },
      /**
       * Start a layout animation on a given axis.
       */
      startLayoutAnimation: function(axis, transition, isRelative) {
        if (isRelative === void 0) {
          isRelative = false;
        }
        var progress2 = element2.getProjectionAnimationProgress()[axis];
        var _a3 = isRelative ? projection.relativeTarget[axis] : projection.target[axis], min = _a3.min, max = _a3.max;
        var length = max - min;
        progress2.clearListeners();
        progress2.set(min);
        progress2.set(min);
        progress2.onChange(function(v2) {
          element2.setProjectionTargetAxis(axis, v2, v2 + length, isRelative);
        });
        return element2.animateMotionValue(axis, progress2, 0, transition);
      },
      /**
       * Stop layout animations.
       */
      stopLayoutAnimation: function() {
        eachAxis(function(axis) {
          return element2.getProjectionAnimationProgress()[axis].stop();
        });
      },
      /**
       * Measure the current viewport box with or without transforms.
       * Only measures axis-aligned boxes, rotate and skew must be manually
       * removed with a re-render to work.
       */
      measureViewportBox: function(withTransform) {
        if (withTransform === void 0) {
          withTransform = true;
        }
        var viewportBox = measureViewportBox(instance2, options);
        if (!withTransform)
          removeBoxTransforms(viewportBox, latestValues);
        return viewportBox;
      },
      /**
       * Get the motion values tracking the layout animations on each
       * axis. Lazy init if not already created.
       */
      getProjectionAnimationProgress: function() {
        projectionTargetProgress || (projectionTargetProgress = {
          x: motionValue(0),
          y: motionValue(0)
        });
        return projectionTargetProgress;
      },
      /**
       * Update the projection of a single axis. Schedule an update to
       * the tree layout projection.
       */
      setProjectionTargetAxis: function(axis, min, max, isRelative) {
        if (isRelative === void 0) {
          isRelative = false;
        }
        var target;
        if (isRelative) {
          if (!projection.relativeTarget) {
            projection.relativeTarget = axisBox();
          }
          target = projection.relativeTarget[axis];
        } else {
          projection.relativeTarget = void 0;
          target = projection.target[axis];
        }
        projection.isHydrated = true;
        target.min = min;
        target.max = max;
        hasViewportBoxUpdated = true;
        lifecycles.notifySetAxisTarget();
      },
      /**
       * Rebase the projection target on top of the provided viewport box
       * or the measured layout. This ensures that non-animating elements
       * don't fall out of sync differences in measurements vs projections
       * after a page scroll or other relayout.
       */
      rebaseProjectionTarget: function(force, box) {
        if (box === void 0) {
          box = layoutState.layout;
        }
        var _a3 = element2.getProjectionAnimationProgress(), x2 = _a3.x, y2 = _a3.y;
        var shouldRebase = !projection.relativeTarget && !projection.isTargetLocked && !x2.isAnimating() && !y2.isAnimating();
        if (force || shouldRebase) {
          eachAxis(function(axis) {
            var _a4 = box[axis], min = _a4.min, max = _a4.max;
            element2.setProjectionTargetAxis(axis, min, max);
          });
        }
      },
      /**
       * Notify the visual element that its layout is up-to-date.
       * Currently Animate.tsx uses this to check whether a layout animation
       * needs to be performed.
       */
      notifyLayoutReady: function(config) {
        setCurrentViewportBox(element2);
        element2.notifyLayoutUpdate(layoutState.layout, element2.prevViewportBox || layoutState.layout, config);
      },
      /**
       * Temporarily reset the transform of the instance.
       */
      resetTransform: function() {
        return resetTransform(element2, instance2, props);
      },
      restoreTransform: function() {
        return restoreTransform(instance2, renderState);
      },
      updateLayoutProjection,
      updateTreeLayoutProjection: function() {
        element2.layoutTree.forEach(fireResolveRelativeTargetBox);
        sync.preRender(updateTreeLayoutProjection, false, true);
      },
      getProjectionParent: function() {
        if (projectionParent === void 0) {
          var foundParent = false;
          for (var i2 = element2.path.length - 1; i2 >= 0; i2--) {
            var ancestor = element2.path[i2];
            if (ancestor.projection.isEnabled) {
              foundParent = ancestor;
              break;
            }
          }
          projectionParent = foundParent;
        }
        return projectionParent;
      },
      resolveRelativeTargetBox: function() {
        var relativeParent = element2.getProjectionParent();
        if (!projection.relativeTarget || !relativeParent)
          return;
        calcRelativeBox(projection, relativeParent.projection);
        if (isDraggable(relativeParent)) {
          var target = projection.target;
          applyBoxTransforms(target, target, relativeParent.getLatestValues());
        }
      },
      shouldResetTransform: function() {
        return Boolean(props._layoutResetTransform);
      },
      /**
       *
       */
      pointTo: function(newLead) {
        leadProjection = newLead.projection;
        leadLatestValues = newLead.getLatestValues();
        unsubscribeFromLeadVisualElement === null || unsubscribeFromLeadVisualElement === void 0 ? void 0 : unsubscribeFromLeadVisualElement();
        unsubscribeFromLeadVisualElement = pipe(newLead.onSetAxisTarget(element2.scheduleUpdateLayoutProjection), newLead.onLayoutAnimationComplete(function() {
          var _a3;
          if (element2.isPresent) {
            element2.presence = Presence.Present;
          } else {
            (_a3 = element2.layoutSafeToRemove) === null || _a3 === void 0 ? void 0 : _a3.call(element2);
          }
        }));
      },
      // TODO: Clean this up
      isPresent: true,
      presence: Presence.Entering
    });
    return element2;
  };
};
function fireResolveRelativeTargetBox(child) {
  child.resolveRelativeTargetBox();
}
function fireUpdateLayoutProjection(child) {
  child.updateLayoutProjection();
}
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder));
var numVariantProps = variantProps.length;
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "onLayoutAnimationComplete",
  "onViewportBoxUpdate",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}
const PresenceContext = (c2) => getDomContext("Presence", c2) || writable(null);
let counter = 0;
const incrementId = () => counter++;
function isPresent(context) {
  return context === null ? true : context.isPresent;
}
const usePresence = (isCustom = false) => {
  const context = getContext(PresenceContext) || PresenceContext(isCustom);
  const id = get_store_value(context) === null ? void 0 : incrementId();
  onMount(() => {
    if (get_store_value(context) !== null) {
      get_store_value(context).register(id);
    }
  });
  if (get_store_value(context) === null) {
    return readable([true, null]);
  }
  return derived(
    context,
    ($v) => !$v.isPresent && $v.onExitComplete ? [false, () => {
      var _a;
      return (_a = $v.onExitComplete) == null ? void 0 : _a.call($v, id);
    }] : [true]
  );
};
const LayoutGroupContext = (c2) => getDomContext("LayoutGroup", c2) || writable(null);
function isProjecting(visualElement2) {
  var isEnabled = visualElement2.projection.isEnabled;
  return isEnabled || visualElement2.shouldResetTransform();
}
function collectProjectingAncestors(visualElement2, ancestors) {
  if (ancestors === void 0) {
    ancestors = [];
  }
  var parent = visualElement2.parent;
  if (parent)
    collectProjectingAncestors(parent, ancestors);
  if (isProjecting(visualElement2))
    ancestors.push(visualElement2);
  return ancestors;
}
function collectProjectingChildren(visualElement2) {
  var children2 = [];
  var addChild = function(child) {
    if (isProjecting(child))
      children2.push(child);
    child.children.forEach(addChild);
  };
  visualElement2.children.forEach(addChild);
  return children2.sort(compareByDepth);
}
function updateLayoutMeasurement(visualElement2) {
  if (visualElement2.shouldResetTransform())
    return;
  var layoutState = visualElement2.getLayoutState();
  visualElement2.notifyBeforeLayoutMeasure(layoutState.layout);
  layoutState.isHydrated = true;
  layoutState.layout = visualElement2.measureViewportBox();
  layoutState.layoutCorrected = copyAxisBox(layoutState.layout);
  visualElement2.notifyLayoutMeasure(layoutState.layout, visualElement2.prevViewportBox || layoutState.layout);
  sync.update(function() {
    return visualElement2.rebaseProjectionTarget();
  });
}
function snapshotViewportBox(visualElement2, nc) {
  if (visualElement2.shouldResetTransform())
    return;
  if (!nc) visualElement2.prevViewportBox = visualElement2.measureViewportBox(false);
  visualElement2.rebaseProjectionTarget(false, visualElement2.prevViewportBox);
}
var unresolvedJobs = /* @__PURE__ */ new Set();
function pushJob(stack, job, pointer) {
  if (!stack[pointer])
    stack[pointer] = [];
  stack[pointer].push(job);
}
function batchLayout(callback) {
  unresolvedJobs.add(callback);
  return function() {
    return unresolvedJobs.delete(callback);
  };
}
function flushLayout() {
  if (!unresolvedJobs.size)
    return;
  var pointer = 0;
  var reads = [[]];
  var writes = [];
  var setRead = function(job) {
    return pushJob(reads, job, pointer);
  };
  var setWrite = function(job) {
    pushJob(writes, job, pointer);
    pointer++;
  };
  unresolvedJobs.forEach(function(callback) {
    callback(setRead, setWrite);
    pointer = 0;
  });
  unresolvedJobs.clear();
  sync.postRender(function() {
    setTimeout(function() {
      return false;
    }, 10);
  });
  var numStacks = writes.length;
  for (var i2 = 0; i2 <= numStacks; i2++) {
    reads[i2] && reads[i2].forEach(executeJob);
    writes[i2] && writes[i2].forEach(executeJob);
  }
}
var executeJob = function(job) {
  return job();
};
var defaultHandler = {
  layoutReady: function(child) {
    return child.notifyLayoutReady();
  }
};
function createBatcher() {
  var queue = /* @__PURE__ */ new Set();
  return {
    add: function(child) {
      return queue.add(child);
    },
    flush: function(_a) {
      var _b = _a === void 0 ? defaultHandler : _a, layoutReady = _b.layoutReady, parent = _b.parent;
      batchLayout(function(read, write) {
        var order2 = Array.from(queue).sort(compareByDepth);
        var ancestors = parent ? collectProjectingAncestors(parent) : [];
        write(function() {
          var allElements = __spreadArray(__spreadArray([], __read(ancestors)), __read(order2));
          allElements.forEach(function(element2) {
            return element2.resetTransform();
          });
        });
        read(function() {
          order2.forEach(updateLayoutMeasurement);
        });
        write(function() {
          ancestors.forEach(function(element2) {
            return element2.restoreTransform();
          });
          order2.forEach(layoutReady);
        });
        read(function() {
          order2.forEach(function(child) {
            if (child.isPresent)
              child.presence = Presence.Present;
          });
        });
        write(function() {
          flushSync.preRender();
          flushSync.render();
        });
        read(function() {
          sync.postRender(function() {
            return order2.forEach(assignProjectionToSnapshot);
          });
          queue.clear();
        });
      });
      flushLayout();
    }
  };
}
function assignProjectionToSnapshot(child) {
  child.prevViewportBox = child.projection.target;
}
var SharedLayoutContext = (custom) => getDomContext("SharedLayout", custom) || writable(createBatcher());
var FramerTreeLayoutContext = () => writable(createBatcher());
function isSharedLayout(context) {
  return !!context.forceUpdate;
}
const LazyContext = (c2) => getDomContext("Lazy", c2) || writable({ strict: false });
const MotionContext = (c2) => getDomContext("Motion", c2) || writable({});
const get_default_slot_changes$a = (dirty) => ({
  visualElement: dirty & /*visualElement*/
  1
});
const get_default_slot_context$a = (ctx) => ({ visualElement: (
  /*visualElement*/
  ctx[0]
) });
function create_fragment$t(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[19].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
    get_default_slot_context$a
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
        if (default_slot.p && (!current || dirty & /*$$scope, visualElement*/
        262145)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[18],
              dirty,
              get_default_slot_changes$a
            ),
            get_default_slot_context$a
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
function instance$w($$self, $$props, $$invalidate) {
  let $presenceContext;
  let $config;
  let $lazyContext;
  let $layoutGroupId;
  let $mc;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { createVisualElement = void 0, props, Component, visualState, isCustom } = $$props;
  const config = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  component_subscribe($$self, config, (value) => $$invalidate(15, $config = value));
  const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
  component_subscribe($$self, presenceContext, (value) => $$invalidate(14, $presenceContext = value));
  const lazyContext = getContext(LazyContext) || LazyContext(isCustom);
  component_subscribe($$self, lazyContext, (value) => $$invalidate(20, $lazyContext = value));
  const mc = getContext(MotionContext) || MotionContext(isCustom);
  component_subscribe($$self, mc, (value) => $$invalidate(17, $mc = value));
  let parent = get_store_value(mc).visualElement;
  const layoutGroupId = getContext(LayoutGroupContext) || LayoutGroupContext(isCustom);
  component_subscribe($$self, layoutGroupId, (value) => $$invalidate(16, $layoutGroupId = value));
  let layoutId = $layoutGroupId && props.layoutId !== void 0 ? $layoutGroupId + "-" + props.layoutId : props.layoutId;
  let visualElementRef = void 0;
  if (!createVisualElement) {
    createVisualElement = $lazyContext.renderer;
  }
  let visualElement2 = visualElementRef;
  afterUpdate(() => {
    tick$1().then(() => {
      var _a;
      (_a = visualElement2.animationState) == null ? void 0 : _a.animateChanges();
    });
  });
  onDestroy(() => {
    visualElement2 == null ? void 0 : visualElement2.notifyUnmount();
  });
  $$self.$$set = ($$props2) => {
    if ("createVisualElement" in $$props2) $$invalidate(6, createVisualElement = $$props2.createVisualElement);
    if ("props" in $$props2) $$invalidate(7, props = $$props2.props);
    if ("Component" in $$props2) $$invalidate(8, Component = $$props2.Component);
    if ("visualState" in $$props2) $$invalidate(9, visualState = $$props2.visualState);
    if ("isCustom" in $$props2) $$invalidate(10, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(18, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$mc*/
    131072) {
      $$invalidate(11, parent = $mc.visualElement);
    }
    if ($$self.$$.dirty & /*$layoutGroupId, props*/
    65664) {
      $$invalidate(12, layoutId = $layoutGroupId && props.layoutId !== void 0 ? $layoutGroupId + "-" + props.layoutId : props.layoutId);
    }
    if ($$self.$$.dirty & /*visualElementRef, createVisualElement, Component, visualState, parent, props, layoutId, $presenceContext*/
    31680) {
      if (!visualElementRef && createVisualElement) {
        $$invalidate(13, visualElementRef = createVisualElement(Component, {
          visualState,
          parent,
          props: { ...props, layoutId },
          presenceId: $presenceContext == null ? void 0 : $presenceContext.id,
          blockInitialAnimation: ($presenceContext == null ? void 0 : $presenceContext.initial) === false
        }));
      }
    }
    if ($$self.$$.dirty & /*visualElementRef*/
    8192) {
      $$invalidate(0, visualElement2 = visualElementRef);
    }
    if ($$self.$$.dirty & /*visualElement, $config, props, layoutId, $presenceContext, parent*/
    55425) {
      if (visualElement2) {
        visualElement2.setProps({ ...$config, ...props, layoutId });
        $$invalidate(0, visualElement2.isPresent = isPresent($presenceContext), visualElement2);
        $$invalidate(0, visualElement2.isPresenceRoot = !parent || parent.presenceId !== ($presenceContext == null ? void 0 : $presenceContext.id), visualElement2);
        visualElement2.syncRender();
      }
    }
  };
  return [
    visualElement2,
    config,
    presenceContext,
    lazyContext,
    mc,
    layoutGroupId,
    createVisualElement,
    props,
    Component,
    visualState,
    isCustom,
    parent,
    layoutId,
    visualElementRef,
    $presenceContext,
    $config,
    $layoutGroupId,
    $mc,
    $$scope,
    slots
  ];
}
class UseVisualElement extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$w, create_fragment$t, safe_not_equal, {
      createVisualElement: 6,
      props: 7,
      Component: 8,
      visualState: 9,
      isCustom: 10
    });
  }
}
var createDefinition = function(propNames) {
  return {
    isEnabled: function(props) {
      return propNames.some(function(name) {
        return !!props[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  layoutAnimation: createDefinition(["layout", "layoutId"])
};
function loadFeatures(features) {
  for (var key in features) {
    var Component = features[key];
    if (Component !== null) {
      featureDefinitions[key].Component = Component;
    }
  }
}
const get_default_slot_changes$9 = (dirty) => ({ features: dirty & /*features*/
2 });
const get_default_slot_context$9 = (ctx) => ({ features: (
  /*features*/
  ctx[1]
) });
function create_if_block$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    get_default_slot_context$9
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
        if (default_slot.p && (!current || dirty & /*$$scope, features*/
        10)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              get_default_slot_changes$9
            ),
            get_default_slot_context$9
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
function create_fragment$s(ctx) {
  let if_block_anchor;
  let current;
  let if_block = (
    /*visualElement*/
    ctx[0] && create_if_block$2(ctx)
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
      current = true;
    },
    p(ctx2, [dirty]) {
      if (
        /*visualElement*/
        ctx2[0]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*visualElement*/
          1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$2(ctx2);
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
      if (if_block) if_block.d(detaching);
    }
  };
}
function instance$v($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const featureNames = Object.keys(featureDefinitions);
  const numFeatures = featureNames.length;
  let { visualElement: visualElement2, props } = $$props;
  let features = [];
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("props" in $$props2) $$invalidate(2, props = $$props2.props);
    if ("$$scope" in $$props2) $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props, features, visualElement*/
    7) {
      {
        $$invalidate(1, features = []);
        for (let i2 = 0; i2 < numFeatures; i2++) {
          const name = featureNames[i2];
          const { isEnabled, Component } = featureDefinitions[name];
          if (isEnabled(props) && Component) {
            features.push({
              Component,
              key: name,
              props,
              visualElement: visualElement2
            });
          }
        }
      }
    }
  };
  return [visualElement2, features, props, $$scope, slots];
}
class UseFeatures extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$v, create_fragment$s, safe_not_equal, { visualElement: 0, props: 2 });
  }
}
function create_fragment$r(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[3].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[2],
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
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[2],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[2]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[2],
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
function instance$u($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { value, isCustom } = $$props;
  let store = writable(value);
  setContext(MotionContext, store);
  setDomContext("Motion", isCustom, store);
  onDestroy(() => {
    var _a;
    (_a = value == null ? void 0 : value.visualElement) == null ? void 0 : _a.unmount();
  });
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2) $$invalidate(0, value = $$props2.value);
    if ("isCustom" in $$props2) $$invalidate(1, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(2, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*value*/
    1) {
      store.set(value);
    }
  };
  return [value, isCustom, $$scope, slots];
}
class MotionContextProvider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$u, create_fragment$r, safe_not_equal, { value: 0, isCustom: 1 });
  }
}
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
var createSvgRenderState = function() {
  return Object.assign(Object.assign({}, createHtmlRenderState()), { attrs: {} });
};
var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}
function isForcedMotionValue(key, _a) {
  var layout = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && !!valueScaleCorrection[key];
}
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i2 = 0; i2 < numTransformKeys; i2++) {
    var key = transformKeys2[i2];
    transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return originX + " " + originY + " " + originZ;
}
function isCSSVariable$1(key) {
  return key.startsWith("--");
}
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};
function buildHTMLStyles(state, latestValues, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
  var _a;
  var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable$1(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      if (layoutState && projection && layoutState.isHydrated && valueScaleCorrection[key]) {
        var correctedValue = valueScaleCorrection[key].process(value, layoutState, projection);
        var applyTo = valueScaleCorrection[key].applyTo;
        if (applyTo) {
          var num = applyTo.length;
          for (var i2 = 0; i2 < num; i2++) {
            style[applyTo[i2]] = correctedValue;
          }
        } else {
          style[key] = correctedValue;
        }
      } else {
        style[key] = valueAsType;
      }
    }
  }
  if (layoutState && projection && buildProjectionTransform && buildProjectionTransformOrigin) {
    style.transform = buildProjectionTransform(layoutState.deltaFinal, layoutState.treeScale, hasTransform ? transform : void 0);
    if (transformTemplate) {
      style.transform = transformTemplate(transform, style.transform);
    }
    style.transformOrigin = buildProjectionTransformOrigin(layoutState);
  } else {
    if (hasTransform) {
      style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    }
    if (hasTransformOrigin) {
      style.transformOrigin = buildTransformOrigin(transformOrigin);
    }
  }
}
const get_default_slot_changes$8 = (dirty) => ({ styles: dirty & /*styles*/
1 });
const get_default_slot_context$8 = (ctx) => ({ styles: (
  /*styles*/
  ctx[0]
) });
function create_fragment$q(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    get_default_slot_context$8
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
        if (default_slot.p && (!current || dirty & /*$$scope, styles*/
        17)) {
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
              get_default_slot_changes$8
            ),
            get_default_slot_context$8
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
function instance$t($$self, $$props, $$invalidate) {
  let styles;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { visualState, isStatic, props } = $$props;
  const memo = () => {
    let state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, void 0, void 0, { enableHardwareAcceleration: !isStatic }, props.transformTemplate);
    const { vars, style } = state;
    return { ...vars, ...style };
  };
  $$self.$$set = ($$props2) => {
    if ("visualState" in $$props2) $$invalidate(1, visualState = $$props2.visualState);
    if ("isStatic" in $$props2) $$invalidate(2, isStatic = $$props2.isStatic);
    if ("props" in $$props2) $$invalidate(3, props = $$props2.props);
    if ("$$scope" in $$props2) $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*visualState*/
    2) {
      $$invalidate(0, styles = memo());
    }
  };
  return [styles, visualState, isStatic, props, $$scope, slots];
}
class UseInitialMotionValues extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$t, create_fragment$q, safe_not_equal, { visualState: 1, isStatic: 2, props: 3 });
  }
}
const get_default_slot_changes$7 = (dirty) => ({ styles: dirty & /*s1, props, style*/
522 });
const get_default_slot_context$7 = (ctx) => ({
  styles: (
    /*toStyle*/
    ctx[4](
      /*s1*/
      ctx[9],
      /*props*/
      ctx[1],
      /*style*/
      ctx[3]
    )
  )
});
function create_default_slot$d(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_default_slot_context$7
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
        if (default_slot.p && (!current || dirty & /*$$scope, s1, props, style*/
        650)) {
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
              get_default_slot_changes$7
            ),
            get_default_slot_context$7
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
function create_fragment$p(ctx) {
  let useinitialmotionvalues;
  let current;
  useinitialmotionvalues = new UseInitialMotionValues({
    props: {
      props: (
        /*props*/
        ctx[1]
      ),
      visualState: (
        /*visualState*/
        ctx[0]
      ),
      isStatic: (
        /*isStatic*/
        ctx[2]
      ),
      $$slots: {
        default: [
          create_default_slot$d,
          ({ styles: s1 }) => ({ 9: s1 }),
          ({ styles: s1 }) => s1 ? 512 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(useinitialmotionvalues.$$.fragment);
    },
    l(nodes) {
      claim_component(useinitialmotionvalues.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(useinitialmotionvalues, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const useinitialmotionvalues_changes = {};
      if (dirty & /*props*/
      2) useinitialmotionvalues_changes.props = /*props*/
      ctx2[1];
      if (dirty & /*visualState*/
      1) useinitialmotionvalues_changes.visualState = /*visualState*/
      ctx2[0];
      if (dirty & /*isStatic*/
      4) useinitialmotionvalues_changes.isStatic = /*isStatic*/
      ctx2[2];
      if (dirty & /*$$scope, s1, props, style*/
      650) {
        useinitialmotionvalues_changes.$$scope = { dirty, ctx: ctx2 };
      }
      useinitialmotionvalues.$set(useinitialmotionvalues_changes);
    },
    i(local) {
      if (current) return;
      transition_in(useinitialmotionvalues.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(useinitialmotionvalues.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(useinitialmotionvalues, detaching);
    }
  };
}
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function instance$s($$self, $$props, $$invalidate) {
  let styleProp;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { visualState, props, isStatic } = $$props;
  let style = {};
  const cRVO = copyRawValuesOnly;
  const toStyle = (s1) => {
    Object.assign(style, s1);
    if (props.transformValues) {
      $$invalidate(3, style = props.transformValues(style));
    }
    return style;
  };
  $$self.$$set = ($$props2) => {
    if ("visualState" in $$props2) $$invalidate(0, visualState = $$props2.visualState);
    if ("props" in $$props2) $$invalidate(1, props = $$props2.props);
    if ("isStatic" in $$props2) $$invalidate(2, isStatic = $$props2.isStatic);
    if ("$$scope" in $$props2) $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    2) {
      $$invalidate(5, styleProp = props.style || {});
    }
    if ($$self.$$.dirty & /*style, styleProp, props*/
    42) {
      cRVO(style, styleProp, props);
    }
  };
  return [visualState, props, isStatic, style, toStyle, styleProp, slots, $$scope];
}
class UseStyle extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$s, create_fragment$p, safe_not_equal, { visualState: 0, props: 1, isStatic: 2 });
  }
}
const get_default_slot_changes$6 = (dirty) => ({
  visualProps: dirty & /*styles, props*/
  65
});
const get_default_slot_context$6 = (ctx) => ({
  visualProps: (
    /*getHTMLProps*/
    ctx[3](
      /*styles*/
      ctx[6],
      /*props*/
      ctx[0]
    )
  )
});
function create_default_slot$c(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    get_default_slot_context$6
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
        if (default_slot.p && (!current || dirty & /*$$scope, styles, props*/
        97)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
              dirty,
              get_default_slot_changes$6
            ),
            get_default_slot_context$6
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
function create_fragment$o(ctx) {
  let usestyle;
  let current;
  usestyle = new UseStyle({
    props: {
      visualState: (
        /*visualState*/
        ctx[1]
      ),
      props: (
        /*props*/
        ctx[0]
      ),
      isStatic: (
        /*isStatic*/
        ctx[2]
      ),
      $$slots: {
        default: [
          create_default_slot$c,
          ({ styles }) => ({ 6: styles }),
          ({ styles }) => styles ? 64 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usestyle.$$.fragment);
    },
    l(nodes) {
      claim_component(usestyle.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usestyle, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const usestyle_changes = {};
      if (dirty & /*visualState*/
      2) usestyle_changes.visualState = /*visualState*/
      ctx2[1];
      if (dirty & /*props*/
      1) usestyle_changes.props = /*props*/
      ctx2[0];
      if (dirty & /*isStatic*/
      4) usestyle_changes.isStatic = /*isStatic*/
      ctx2[2];
      if (dirty & /*$$scope, styles, props*/
      97) {
        usestyle_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usestyle.$set(usestyle_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usestyle.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usestyle.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usestyle, detaching);
    }
  };
}
function instance$r($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualState, isStatic } = $$props;
  const getHTMLProps = (style, props2) => {
    let htmlProps = {};
    if (Boolean(props2.drag)) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props2.drag === true ? "none" : `pan-${props2.drag === "x" ? "y" : "x"}`;
    }
    htmlProps.style = style;
    return htmlProps;
  };
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(0, props = $$props2.props);
    if ("visualState" in $$props2) $$invalidate(1, visualState = $$props2.visualState);
    if ("isStatic" in $$props2) $$invalidate(2, isStatic = $$props2.isStatic);
    if ("$$scope" in $$props2) $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [props, visualState, isStatic, getHTMLProps, slots, $$scope];
}
class UseHTMLProps extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$r, create_fragment$o, safe_not_equal, { props: 0, visualState: 1, isStatic: 2 });
  }
}
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return pxOriginX + " " + pxOriginY;
}
var progressToPixels = function(progress2, length) {
  return px.transform(progress2 * length);
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset === void 0) {
    offset = 0;
  }
  var keys = camelKeys;
  attrs[keys.offset] = progressToPixels(-offset, totalLength);
  var pathLength = progressToPixels(length, totalLength);
  var pathSpacing = progressToPixels(spacing, totalLength);
  attrs[keys.array] = pathLength + " " + pathSpacing;
}
function buildSVGAttrs(state, _a, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, projection, layoutState, options, transformTemplate, buildProjectionTransform, buildProjectionTransformOrigin);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs, style = state.style, dimensions = state.dimensions, totalPathLength = state.totalPathLength;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (totalPathLength !== void 0 && pathLength !== void 0) {
    buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset);
  }
}
const get_default_slot_changes$5 = (dirty) => ({ visualProps: dirty & /*visualProps*/
1 });
const get_default_slot_context$5 = (ctx) => ({ visualProps: (
  /*visualProps*/
  ctx[0]
) });
function create_fragment$n(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
    get_default_slot_context$5
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
        if (default_slot.p && (!current || dirty & /*$$scope, visualProps*/
        9)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
              dirty,
              get_default_slot_changes$5
            ),
            get_default_slot_context$5
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
function instance$q($$self, $$props, $$invalidate) {
  let visualProps;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { visualState, props } = $$props;
  let memo = () => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
    return {
      ...state.attrs,
      style: { ...state.style }
    };
  };
  $$self.$$set = ($$props2) => {
    if ("visualState" in $$props2) $$invalidate(1, visualState = $$props2.visualState);
    if ("props" in $$props2) $$invalidate(2, props = $$props2.props);
    if ("$$scope" in $$props2) $$invalidate(3, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*visualState*/
    2) {
      $$invalidate(0, visualProps = memo());
    }
    if ($$self.$$.dirty & /*props, visualProps*/
    5) {
      if (props.style) {
        const rawStyles = {};
        copyRawValuesOnly(rawStyles, props.style, props);
        $$invalidate(0, visualProps.style = { ...rawStyles, ...visualProps.style }, visualProps);
      }
    }
  };
  return [visualProps, visualState, props, $$scope, slots];
}
class UseSVGProps extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$q, create_fragment$n, safe_not_equal, { visualState: 1, props: 2 });
  }
}
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
try {
  var emotionIsPropValid_1 = require("@emotion/is-prop-valid").default;
  shouldForward = function(key) {
    if (key.startsWith("on")) {
      return !isValidMotionProp(key);
    } else {
      return emotionIsPropValid_1(key);
    }
  };
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key)) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}
const get_default_slot_changes$4 = (dirty) => ({
  props: dirty & /*filteredProps, visualProps*/
  2064
});
const get_default_slot_context$4 = (ctx) => ({
  motion: (
    /*motion*/
    ctx[5]
  ),
  props: {
    .../*filteredProps*/
    ctx[4],
    .../*visualProps*/
    ctx[11]
  }
});
function create_default_slot$b(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[9].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[10],
    get_default_slot_context$4
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
        if (default_slot.p && (!current || dirty & /*$$scope, filteredProps, visualProps*/
        3088)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[10],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[10]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[10],
              dirty,
              get_default_slot_changes$4
            ),
            get_default_slot_context$4
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
function create_fragment$m(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*Component*/
    ctx[2] === "SVG" ? UseSVGProps : UseHTMLProps
  );
  function switch_props(ctx2, dirty) {
    return {
      props: {
        visualState: (
          /*visualState*/
          ctx2[1]
        ),
        isStatic: (
          /*isStatic*/
          ctx2[3]
        ),
        props: (
          /*props*/
          ctx2[0]
        ),
        $$slots: {
          default: [
            create_default_slot$b,
            ({ visualProps }) => ({ 11: visualProps }),
            ({ visualProps }) => visualProps ? 2048 : 0
          ]
        },
        $$scope: { ctx: ctx2 }
      }
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*Component*/
      4 && switch_value !== (switch_value = /*Component*/
      ctx2[2] === "SVG" ? UseSVGProps : UseHTMLProps)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*visualState*/
        2) switch_instance_changes.visualState = /*visualState*/
        ctx2[1];
        if (dirty & /*isStatic*/
        8) switch_instance_changes.isStatic = /*isStatic*/
        ctx2[3];
        if (dirty & /*props*/
        1) switch_instance_changes.props = /*props*/
        ctx2[0];
        if (dirty & /*$$scope, filteredProps, visualProps*/
        3088) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
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
        detach(switch_instance_anchor);
      }
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function instance$p($$self, $$props, $$invalidate) {
  let filteredProps;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualState, Component, forwardMotionProps = false, isStatic, ref, targetEl = void 0 } = $$props;
  const motion2 = (node) => {
    ref(node);
  };
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(0, props = $$props2.props);
    if ("visualState" in $$props2) $$invalidate(1, visualState = $$props2.visualState);
    if ("Component" in $$props2) $$invalidate(2, Component = $$props2.Component);
    if ("forwardMotionProps" in $$props2) $$invalidate(6, forwardMotionProps = $$props2.forwardMotionProps);
    if ("isStatic" in $$props2) $$invalidate(3, isStatic = $$props2.isStatic);
    if ("ref" in $$props2) $$invalidate(7, ref = $$props2.ref);
    if ("targetEl" in $$props2) $$invalidate(8, targetEl = $$props2.targetEl);
    if ("$$scope" in $$props2) $$invalidate(10, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props, Component, forwardMotionProps*/
    69) {
      $$invalidate(4, filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps));
    }
    if ($$self.$$.dirty & /*targetEl*/
    256) {
      if (targetEl) {
        motion2(targetEl);
      }
    }
  };
  return [
    props,
    visualState,
    Component,
    isStatic,
    filteredProps,
    motion2,
    forwardMotionProps,
    ref,
    targetEl,
    slots,
    $$scope
  ];
}
class UseRender extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$p, create_fragment$m, safe_not_equal, {
      props: 0,
      visualState: 1,
      Component: 2,
      forwardMotionProps: 6,
      isStatic: 3,
      ref: 7,
      targetEl: 8
    });
  }
}
function getBoundingBox(element2, transformPagePoint) {
  var box = element2.getBoundingClientRect();
  return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
}
function isCSSVariable(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  var _a = __read(match, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
function getVariableValue(current, element2, depth) {
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element2).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable(fallback)) {
    return getVariableValue(fallback, element2);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest(_a, []);
  var element2 = visualElement2.getInstance();
  if (!(element2 instanceof HTMLElement))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = Object.assign({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable(current2))
      return;
    var resolved2 = getVariableValue(current2, element2);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable(current))
      continue;
    var resolved = getVariableValue(current, element2);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v2) {
  return v2 === number || v2 === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
      return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  // Dimensions
  width: function(_a) {
    var x2 = _a.x;
    return x2.max - x2.min;
  },
  height: function(_a) {
    var y2 = _a.y;
    return y2.max - y2.min;
  },
  top: function(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function(_a, _b) {
    var y2 = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y2.max - y2.min);
  },
  right: function(_a, _b) {
    var x2 = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x2.max - x2.min);
  },
  // Transform
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element2 = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element2);
  var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
  var originComputedStyle = { top, left, bottom, right, transform };
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = Object.assign({}, target);
  transitionEnd = Object.assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from = origin[key];
    var to = target[key];
    var fromType = findDimensionValueType(from);
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      for (var i2 = to[0] === null ? 1 : 0; i2 < numKeyframes; i2++) {
        if (!toType) {
          toType = findDimensionValueType(to[i2]);
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}
var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};
function scrapeMotionValuesFromProps$1(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}
function renderHTML(element2, _a) {
  var style = _a.style, vars = _a.vars;
  Object.assign(element2.style, style);
  for (var key in vars) {
    element2.style.setProperty(key, vars[key]);
  }
}
function getComputedStyle$1(element2) {
  return window.getComputedStyle(element2);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle$1(domElement);
      return (isCSSVariable$1(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element2, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return getBoundingBox(element2, transformPagePoint);
  },
  /**
   * Reset the transform on the current Element. This is called as part
   * of a batched process across the entire layout tree. To remove this write
   * cycle it'd be interesting to see if it's possible to "undo" all the current
   * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
   * works
   */
  resetTransform: function(element2, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element2.scheduleRender();
  },
  restoreTransform: function(instance2, mutableState) {
    instance2.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style = _a.style;
    delete vars[key];
    delete style[key];
  },
  /**
   * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
   * can be animated by Motion.
   */
  makeTargetAnimatable: function(element2, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element2);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element2, target, origin);
      var parsed = parseDomVariant(element2, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return Object.assign({
      transition,
      transitionEnd
    }, target);
  },
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  build: function(element2, renderState, latestValues, projection, layoutState, options, props) {
    if (element2.isVisible !== void 0) {
      renderState.style.visibility = element2.isVisible ? "visible" : "hidden";
    }
    var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
    buildHTMLStyles(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);
function scrapeMotionValuesFromProps(props) {
  var newValues = scrapeMotionValuesFromProps$1(props);
  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox"
]);
function renderSVG(element2, renderState) {
  renderHTML(element2, renderState);
  for (var key in renderState.attrs) {
    element2.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}
var svgVisualElement = visualElement(Object.assign(Object.assign({}, htmlConfig), {
  getBaseTarget: function(props, key) {
    return props[key];
  },
  readValueFromInstance: function(domElement, key) {
    var _a;
    if (isTransformProp(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return domElement.getAttribute(key);
  },
  scrapeMotionValuesFromProps,
  build: function(_element, renderState, latestValues, projection, layoutState, options, props) {
    var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
    buildSVGAttrs(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : void 0, isProjectionTranform ? buildLayoutProjectionTransformOrigin : void 0);
  },
  render: renderSVG
}));
var createDomVisualElement = function(Component, options) {
  return Component === "SVG" ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};
var svgMotionConfig = {
  scrapeMotionValuesFromProps,
  createRenderState: createSvgRenderState,
  onMount: function(props, instance2, _a) {
    var renderState = _a.renderState, latestValues = _a.latestValues;
    try {
      renderState.dimensions = typeof instance2.getBBox === "function" ? instance2.getBBox() : instance2.getBoundingClientRect();
    } catch (e) {
      renderState.dimensions = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (isPath(instance2)) {
      renderState.totalPathLength = instance2.getTotalLength();
    }
    buildSVGAttrs(renderState, latestValues, void 0, void 0, { enableHardwareAcceleration: false }, props.transformTemplate);
    renderSVG(instance2, renderState);
  }
};
function isPath(element2) {
  return element2.tagName === "path";
}
var htmlMotionConfig = {
  scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
  createRenderState: createHtmlRenderState
};
function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial, animate2 = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate2) ? animate2 : void 0
    };
  }
  return props.inherit !== false ? context || {} : {};
}
const get_default_slot_changes$3 = (dirty) => ({ value: dirty & /*value*/
1 });
const get_default_slot_context$3 = (ctx) => ({ value: (
  /*value*/
  ctx[0]
) });
function create_fragment$l(ctx) {
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
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, value*/
        257)) {
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
function instance$o($$self, $$props, $$invalidate) {
  let $mc;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, isStatic, isCustom } = $$props;
  let mc = getContext(MotionContext) || MotionContext(isCustom);
  component_subscribe($$self, mc, (value2) => $$invalidate(7, $mc = value2));
  let { initial, animate: animate2 } = getCurrentTreeVariants(props, get_store_value(mc));
  const variantLabelsAsDependency = (prop) => {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  };
  const memo = () => {
    return { initial, animate: animate2 };
  };
  let value = memo();
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(2, props = $$props2.props);
    if ("isStatic" in $$props2) $$invalidate(3, isStatic = $$props2.isStatic);
    if ("isCustom" in $$props2) $$invalidate(4, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(8, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props, $mc*/
    132) {
      $$invalidate(5, { initial, animate: animate2 } = getCurrentTreeVariants(props, $mc), initial, ($$invalidate(6, animate2), $$invalidate(2, props), $$invalidate(7, $mc)));
    }
    if ($$self.$$.dirty & /*isStatic, initial, animate*/
    104) {
      if (isStatic) {
        $$invalidate(0, value = memo(variantLabelsAsDependency(initial), variantLabelsAsDependency(animate2)));
      }
    }
  };
  return [value, mc, props, isStatic, isCustom, initial, animate2, $mc, $$scope, slots];
}
class UseCreateMotionContext extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$o, create_fragment$l, safe_not_equal, { props: 2, isStatic: 3, isCustom: 4 });
  }
}
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}
const get_default_slot_changes$2 = (dirty) => ({ state: dirty & /*state*/
1 });
const get_default_slot_context$2 = (ctx) => ({ state: (
  /*state*/
  ctx[0]
) });
function create_fragment$k(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
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
        if (default_slot.p && (!current || dirty & /*$$scope, state*/
        513)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
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
const makeState = ({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, createRenderState, onMount: onMount2 }, props, context, presenceContext) => {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps2),
    renderState: createRenderState()
  };
  if (onMount2) {
    state.mount = (instance2) => onMount2(props, instance2, state);
  }
  return state;
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const blockInitialAnimation = (presenceContext == null ? void 0 : presenceContext.initial) === false;
  const motionValues = scrapeMotionValues(props);
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate2 } = props;
  const isControllingVariants = checkIfControllingVariants(props);
  const isVariantNode = checkIfVariantNode(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate2 !== null && animate2 !== void 0 ? animate2 : animate2 = context.animate;
  }
  const variantToSet = blockInitialAnimation || initial === false ? animate2 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list2 = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list2.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved) return;
      const { transitionEnd, transition, ...target } = resolved;
      for (const key in target) values[key] = target[key];
      for (const key in transitionEnd) values[key] = transitionEnd[key];
    });
  }
  return values;
}
function instance$n($$self, $$props, $$invalidate) {
  let $presenceContext;
  let $context;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { config, props, isStatic, isCustom } = $$props;
  const context = getContext(MotionContext) || MotionContext(isCustom);
  component_subscribe($$self, context, (value) => $$invalidate(8, $context = value));
  const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
  component_subscribe($$self, presenceContext, (value) => $$invalidate(7, $presenceContext = value));
  let state = makeState(config, props, get_store_value(context), get_store_value(presenceContext));
  const ms = makeState;
  $$self.$$set = ($$props2) => {
    if ("config" in $$props2) $$invalidate(3, config = $$props2.config);
    if ("props" in $$props2) $$invalidate(4, props = $$props2.props);
    if ("isStatic" in $$props2) $$invalidate(5, isStatic = $$props2.isStatic);
    if ("isCustom" in $$props2) $$invalidate(6, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(9, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*isStatic, config, props, $context, $presenceContext*/
    440) {
      if (isStatic) {
        $$invalidate(0, state = ms(config, props, $context, $presenceContext));
      }
    }
  };
  return [
    state,
    context,
    presenceContext,
    config,
    props,
    isStatic,
    isCustom,
    $presenceContext,
    $context,
    $$scope,
    slots
  ];
}
class UseVisualState extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$n, create_fragment$k, safe_not_equal, {
      config: 3,
      props: 4,
      isStatic: 5,
      isCustom: 6
    });
  }
}
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}
function useMotionRef(visualState, visualElement2, externalRef) {
  return function(instance2) {
    var _a;
    instance2 && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance2));
    if (visualElement2) {
      instance2 ? visualElement2.mount(instance2) : visualElement2.unmount();
    }
    if (externalRef) {
      if (typeof externalRef === "function") {
        externalRef(instance2);
      } else if (isRefObject(externalRef)) {
        externalRef.current = instance2;
      }
    }
  };
}
function get_each_context$3(ctx, list2, i2) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list2[i2];
  return child_ctx;
}
const get_default_slot_changes$1 = (dirty) => ({
  motion: dirty & /*motion*/
  16777216,
  props: dirty & /*renderProps*/
  33554432
});
const get_default_slot_context$1 = (ctx) => ({
  motion: (
    /*motion*/
    ctx[24]
  ),
  props: (
    /*renderProps*/
    ctx[25]
  )
});
function create_default_slot_6(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[14].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[15],
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
        if (default_slot.p && (!current || dirty & /*$$scope, motion, renderProps*/
        50364416)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[15],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[15]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[15],
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
function create_default_slot_5(ctx) {
  let userender;
  let current;
  userender = new UseRender({
    props: {
      Component: (
        /*Component*/
        ctx[6]
      ),
      props: (
        /*motionProps*/
        ctx[4]
      ),
      ref: useMotionRef(
        /*visualState*/
        ctx[18],
        /*context*/
        ctx[17].visualElement,
        /*externalRef*/
        ctx[1]
      ),
      visualState: (
        /*visualState*/
        ctx[18]
      ),
      isStatic: (
        /*isStatic*/
        ctx[3]
      ),
      forwardMotionProps: (
        /*forwardMotionProps*/
        ctx[0]
      ),
      $$slots: {
        default: [
          create_default_slot_6,
          ({ motion: motion2, props: renderProps }) => ({ 24: motion2, 25: renderProps }),
          ({ motion: motion2, props: renderProps }) => (motion2 ? 16777216 : 0) | (renderProps ? 33554432 : 0)
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(userender.$$.fragment);
    },
    l(nodes) {
      claim_component(userender.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(userender, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const userender_changes = {};
      if (dirty & /*motionProps*/
      16) userender_changes.props = /*motionProps*/
      ctx2[4];
      if (dirty & /*visualState, context, externalRef*/
      393218) userender_changes.ref = useMotionRef(
        /*visualState*/
        ctx2[18],
        /*context*/
        ctx2[17].visualElement,
        /*externalRef*/
        ctx2[1]
      );
      if (dirty & /*visualState*/
      262144) userender_changes.visualState = /*visualState*/
      ctx2[18];
      if (dirty & /*isStatic*/
      8) userender_changes.isStatic = /*isStatic*/
      ctx2[3];
      if (dirty & /*forwardMotionProps*/
      1) userender_changes.forwardMotionProps = /*forwardMotionProps*/
      ctx2[0];
      if (dirty & /*$$scope, motion, renderProps*/
      50364416) {
        userender_changes.$$scope = { dirty, ctx: ctx2 };
      }
      userender.$set(userender_changes);
    },
    i(local) {
      if (current) return;
      transition_in(userender.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(userender.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(userender, detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let each_1_anchor;
  let current;
  let each_value = ensure_array_like(
    /*_features*/
    ctx[20]
  );
  const get_key = (ctx2) => (
    /*feat*/
    ctx2[21].key
  );
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    let child_ctx = get_each_context$3(ctx, each_value, i2);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i2] = create_each_block$3(key, child_ctx));
  }
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(target, anchor);
        }
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*_features, isCustom*/
      1048608) {
        each_value = ensure_array_like(
          /*_features*/
          ctx2[20]
        );
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$3, each_1_anchor, get_each_context$3);
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].d(detaching);
      }
    }
  };
}
function create_each_block$3(key_1, ctx) {
  let first;
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*feat*/
    ctx[21].Component
  );
  function switch_props(ctx2, dirty) {
    return {
      props: {
        props: (
          /*feat*/
          ctx2[21].props
        ),
        visualElement: (
          /*feat*/
          ctx2[21].visualElement
        ),
        isCustom: (
          /*isCustom*/
          ctx2[5]
        )
      }
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      if (switch_instance) create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
      this.h();
    },
    l(nodes) {
      first = empty();
      if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      if (switch_instance) mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*_features*/
      1048576 && switch_value !== (switch_value = /*feat*/
      ctx[21].Component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*_features*/
        1048576) switch_instance_changes.props = /*feat*/
        ctx[21].props;
        if (dirty & /*_features*/
        1048576) switch_instance_changes.visualElement = /*feat*/
        ctx[21].visualElement;
        switch_instance.$set(switch_instance_changes);
      }
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
        detach(first);
        detach(switch_instance_anchor);
      }
      if (switch_instance) destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot_4(ctx) {
  let motioncontextprovider;
  let t;
  let if_block_anchor;
  let current;
  motioncontextprovider = new MotionContextProvider({
    props: {
      value: (
        /*context*/
        ctx[17]
      ),
      isCustom: (
        /*isCustom*/
        ctx[5]
      ),
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  let if_block = (
    /*mounted*/
    ctx[2] && create_if_block$1(ctx)
  );
  return {
    c() {
      create_component(motioncontextprovider.$$.fragment);
      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      claim_component(motioncontextprovider.$$.fragment, nodes);
      t = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      mount_component(motioncontextprovider, target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const motioncontextprovider_changes = {};
      if (dirty & /*context*/
      131072) motioncontextprovider_changes.value = /*context*/
      ctx2[17];
      if (dirty & /*$$scope, motionProps, visualState, context, externalRef, isStatic, forwardMotionProps*/
      426011) {
        motioncontextprovider_changes.$$scope = { dirty, ctx: ctx2 };
      }
      motioncontextprovider.$set(motioncontextprovider_changes);
      if (
        /*mounted*/
        ctx2[2]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*mounted*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
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
    i(local) {
      if (current) return;
      transition_in(motioncontextprovider.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(motioncontextprovider.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
        detach(if_block_anchor);
      }
      destroy_component(motioncontextprovider, detaching);
      if (if_block) if_block.d(detaching);
    }
  };
}
function create_default_slot_3(ctx) {
  let usefeatures;
  let current;
  usefeatures = new UseFeatures({
    props: {
      visualElement: (
        /*setContext*/
        ctx[10](
          /*context*/
          ctx[17],
          /*visualElement*/
          ctx[19]
        )
      ),
      props: (
        /*motionProps*/
        ctx[4]
      ),
      $$slots: {
        default: [
          create_default_slot_4,
          ({ features: _features }) => ({ 20: _features }),
          ({ features: _features }) => _features ? 1048576 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usefeatures.$$.fragment);
    },
    l(nodes) {
      claim_component(usefeatures.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usefeatures, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const usefeatures_changes = {};
      if (dirty & /*context, visualElement*/
      655360) usefeatures_changes.visualElement = /*setContext*/
      ctx2[10](
        /*context*/
        ctx2[17],
        /*visualElement*/
        ctx2[19]
      );
      if (dirty & /*motionProps*/
      16) usefeatures_changes.props = /*motionProps*/
      ctx2[4];
      if (dirty & /*$$scope, _features, mounted, context, motionProps, visualState, externalRef, isStatic, forwardMotionProps*/
      1474591) {
        usefeatures_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usefeatures.$set(usefeatures_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usefeatures.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usefeatures.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usefeatures, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let usevisualelement;
  let current;
  usevisualelement = new UseVisualElement({
    props: {
      Component: (
        /*Component*/
        ctx[6]
      ),
      visualState: (
        /*visualState*/
        ctx[18]
      ),
      createVisualElement: (
        /*createVisualElement*/
        ctx[7]
      ),
      props: (
        /*motionProps*/
        ctx[4]
      ),
      isCustom: (
        /*isCustom*/
        ctx[5]
      ),
      $$slots: {
        default: [
          create_default_slot_3,
          ({ visualElement: visualElement2 }) => ({ 19: visualElement2 }),
          ({ visualElement: visualElement2 }) => visualElement2 ? 524288 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usevisualelement.$$.fragment);
    },
    l(nodes) {
      claim_component(usevisualelement.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usevisualelement, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const usevisualelement_changes = {};
      if (dirty & /*visualState*/
      262144) usevisualelement_changes.visualState = /*visualState*/
      ctx2[18];
      if (dirty & /*motionProps*/
      16) usevisualelement_changes.props = /*motionProps*/
      ctx2[4];
      if (dirty & /*$$scope, context, visualElement, motionProps, mounted, visualState, externalRef, isStatic, forwardMotionProps*/
      950303) {
        usevisualelement_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usevisualelement.$set(usevisualelement_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usevisualelement.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usevisualelement.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usevisualelement, detaching);
    }
  };
}
function create_default_slot_1$3(ctx) {
  let usevisualstate;
  let current;
  usevisualstate = new UseVisualState({
    props: {
      config: (
        /*visualStateConfig*/
        ctx[8]
      ),
      props: (
        /*motionProps*/
        ctx[4]
      ),
      isStatic: (
        /*isStatic*/
        ctx[3]
      ),
      isCustom: (
        /*isCustom*/
        ctx[5]
      ),
      $$slots: {
        default: [
          create_default_slot_2,
          ({ state: visualState }) => ({ 18: visualState }),
          ({ state: visualState }) => visualState ? 262144 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usevisualstate.$$.fragment);
    },
    l(nodes) {
      claim_component(usevisualstate.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usevisualstate, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const usevisualstate_changes = {};
      if (dirty & /*motionProps*/
      16) usevisualstate_changes.props = /*motionProps*/
      ctx2[4];
      if (dirty & /*isStatic*/
      8) usevisualstate_changes.isStatic = /*isStatic*/
      ctx2[3];
      if (dirty & /*$$scope, visualState, motionProps, context, mounted, externalRef, isStatic, forwardMotionProps*/
      426015) {
        usevisualstate_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usevisualstate.$set(usevisualstate_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usevisualstate.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usevisualstate.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usevisualstate, detaching);
    }
  };
}
function create_default_slot$a(ctx) {
  let usecreatemotioncontext;
  let current;
  usecreatemotioncontext = new UseCreateMotionContext({
    props: {
      props: (
        /*motionProps*/
        ctx[4]
      ),
      isStatic: (
        /*isStatic*/
        ctx[3]
      ),
      isCustom: (
        /*isCustom*/
        ctx[5]
      ),
      $$slots: {
        default: [
          create_default_slot_1$3,
          ({ value: context }) => ({ 17: context }),
          ({ value: context }) => context ? 131072 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usecreatemotioncontext.$$.fragment);
    },
    l(nodes) {
      claim_component(usecreatemotioncontext.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usecreatemotioncontext, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const usecreatemotioncontext_changes = {};
      if (dirty & /*motionProps*/
      16) usecreatemotioncontext_changes.props = /*motionProps*/
      ctx2[4];
      if (dirty & /*isStatic*/
      8) usecreatemotioncontext_changes.isStatic = /*isStatic*/
      ctx2[3];
      if (dirty & /*$$scope, motionProps, isStatic, context, mounted, externalRef, forwardMotionProps*/
      163871) {
        usecreatemotioncontext_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usecreatemotioncontext.$set(usecreatemotioncontext_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usecreatemotioncontext.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usecreatemotioncontext.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usecreatemotioncontext, detaching);
    }
  };
}
function create_fragment$j(ctx) {
  let scalecorrectionprovider;
  let current;
  scalecorrectionprovider = new ScaleCorrectionProvider({
    props: {
      isCustom: (
        /*isCustom*/
        ctx[5]
      ),
      $$slots: { default: [create_default_slot$a] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(scalecorrectionprovider.$$.fragment);
    },
    l(nodes) {
      claim_component(scalecorrectionprovider.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(scalecorrectionprovider, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const scalecorrectionprovider_changes = {};
      if (dirty & /*$$scope, motionProps, isStatic, mounted, externalRef, forwardMotionProps*/
      32799) {
        scalecorrectionprovider_changes.$$scope = { dirty, ctx: ctx2 };
      }
      scalecorrectionprovider.$set(scalecorrectionprovider_changes);
    },
    i(local) {
      if (current) return;
      transition_in(scalecorrectionprovider.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(scalecorrectionprovider.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(scalecorrectionprovider, detaching);
    }
  };
}
function instance$m($$self, $$props, $$invalidate) {
  let motionProps;
  let isStatic;
  const omit_props_names = ["isSVG", "forwardMotionProps", "externalRef", "targetEl"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let $a;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isSVG = false, forwardMotionProps = false, externalRef = void 0, targetEl = void 0 } = $$props;
  const isCustom = targetEl;
  let Component = isSVG ? "SVG" : "DOM";
  let createVisualElement = createDomVisualElement;
  let visualStateConfig = isSVG ? svgMotionConfig : htmlMotionConfig;
  const a2 = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  component_subscribe($$self, a2, (value) => $$invalidate(13, $a = value));
  let mounted = false;
  const setContext2 = (c2, v2) => {
    c2.visualElement = v2;
    return v2;
  };
  onMount(() => $$invalidate(2, mounted = true));
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("isSVG" in $$new_props) $$invalidate(11, isSVG = $$new_props.isSVG);
    if ("forwardMotionProps" in $$new_props) $$invalidate(0, forwardMotionProps = $$new_props.forwardMotionProps);
    if ("externalRef" in $$new_props) $$invalidate(1, externalRef = $$new_props.externalRef);
    if ("targetEl" in $$new_props) $$invalidate(12, targetEl = $$new_props.targetEl);
    if ("$$scope" in $$new_props) $$invalidate(15, $$scope = $$new_props.$$scope);
  };
  $$self.$$.update = () => {
    $$invalidate(4, motionProps = $$restProps);
    if ($$self.$$.dirty & /*$a*/
    8192) {
      $$invalidate(3, { isStatic } = $a || {}, isStatic);
    }
  };
  return [
    forwardMotionProps,
    externalRef,
    mounted,
    isStatic,
    motionProps,
    isCustom,
    Component,
    createVisualElement,
    visualStateConfig,
    a2,
    setContext2,
    isSVG,
    targetEl,
    $a,
    slots,
    $$scope
  ];
}
class Motion extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$m, create_fragment$j, safe_not_equal, {
      isSVG: 11,
      forwardMotionProps: 0,
      externalRef: 1,
      targetEl: 12
    });
  }
}
function create_fragment$i(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
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
    p(ctx2, [dirty]) {
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
function addDomEvent(target, eventName, handler, options) {
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler, options);
  };
}
function instance$l($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { ref, eventName, handler = void 0, options = void 0 } = $$props;
  let cleanup = () => {
  };
  const effect = () => {
    cleanup();
    if (!ref) {
      return () => {
      };
    }
    const element2 = ref.current;
    if (handler && element2) {
      return addDomEvent(element2, eventName, handler, options);
    }
    return () => {
    };
  };
  onDestroy(cleanup);
  $$self.$$set = ($$props2) => {
    if ("ref" in $$props2) $$invalidate(0, ref = $$props2.ref);
    if ("eventName" in $$props2) $$invalidate(1, eventName = $$props2.eventName);
    if ("handler" in $$props2) $$invalidate(2, handler = $$props2.handler);
    if ("options" in $$props2) $$invalidate(3, options = $$props2.options);
    if ("$$scope" in $$props2) $$invalidate(4, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*ref, eventName, handler, options*/
    15) {
      cleanup = effect();
    }
  };
  return [ref, eventName, handler, options, $$scope, slots];
}
class UseDomEvent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$l, create_fragment$i, safe_not_equal, {
      ref: 0,
      eventName: 1,
      handler: 2,
      options: 3
    });
  }
}
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
function getViewportPointFromEvent(event) {
  return extractEventInfo(event, "client");
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};
var isBrowser = typeof window !== "undefined";
var supportsPointerEvents = function() {
  return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser && window.onmousedown === null;
};
function create_default_slot$9(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[4].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
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
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
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
function create_fragment$h(ctx) {
  let usedomevent;
  let current;
  usedomevent = new UseDomEvent({
    props: {
      ref: (
        /*ref*/
        ctx[0]
      ),
      eventName: getPointerEventName(
        /*eventName*/
        ctx[1]
      ),
      handler: (
        /*handler*/
        ctx[2] && wrapHandler(
          /*handler*/
          ctx[2],
          /*eventName*/
          ctx[1] === "pointerdown"
        )
      ),
      options: (
        /*options*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$9] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usedomevent.$$.fragment);
    },
    l(nodes) {
      claim_component(usedomevent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usedomevent, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const usedomevent_changes = {};
      if (dirty & /*ref*/
      1) usedomevent_changes.ref = /*ref*/
      ctx2[0];
      if (dirty & /*eventName*/
      2) usedomevent_changes.eventName = getPointerEventName(
        /*eventName*/
        ctx2[1]
      );
      if (dirty & /*handler, eventName*/
      6) usedomevent_changes.handler = /*handler*/
      ctx2[2] && wrapHandler(
        /*handler*/
        ctx2[2],
        /*eventName*/
        ctx2[1] === "pointerdown"
      );
      if (dirty & /*options*/
      8) usedomevent_changes.options = /*options*/
      ctx2[3];
      if (dirty & /*$$scope*/
      32) {
        usedomevent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usedomevent.$set(usedomevent_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usedomevent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usedomevent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usedomevent, detaching);
    }
  };
}
const mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
const touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function instance$k($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { ref, eventName, handler = void 0, options = void 0 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("ref" in $$props2) $$invalidate(0, ref = $$props2.ref);
    if ("eventName" in $$props2) $$invalidate(1, eventName = $$props2.eventName);
    if ("handler" in $$props2) $$invalidate(2, handler = $$props2.handler);
    if ("options" in $$props2) $$invalidate(3, options = $$props2.options);
    if ("$$scope" in $$props2) $$invalidate(5, $$scope = $$props2.$$scope);
  };
  return [ref, eventName, handler, options, slots, $$scope];
}
class UsePointerEvent extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$k, create_fragment$h, safe_not_equal, {
      ref: 0,
      eventName: 1,
      handler: 2,
      options: 3
    });
  }
}
var PanSession = (
  /** @class */
  function() {
    function PanSession2(event, handlers, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.handlers = {};
      this.updatePoint = function() {
        if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
          return;
        var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
        var isPanStarted = _this.startEvent !== null;
        var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        var point2 = info2.point;
        var timestamp2 = getFrameData().timestamp;
        _this.history.push(Object.assign(Object.assign({}, point2), { timestamp: timestamp2 }));
        var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
        if (!isPanStarted) {
          onStart && onStart(_this.lastMoveEvent, info2);
          _this.startEvent = _this.lastMoveEvent;
        }
        onMove && onMove(_this.lastMoveEvent, info2);
      };
      this.handlePointerMove = function(event2, info2) {
        _this.lastMoveEvent = event2;
        _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
        if (isMouseEvent(event2) && event2.buttons === 0) {
          _this.handlePointerUp(event2, info2);
          return;
        }
        sync.update(_this.updatePoint, true);
      };
      this.handlePointerUp = function(event2, info2) {
        _this.end();
        var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
        var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
        if (_this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (isTouchEvent(event) && event.touches.length > 1)
        return;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      var info = extractEventInfo(event);
      var initialInfo = transformPoint(info, this.transformPagePoint);
      var point = initialInfo.point;
      var timestamp = getFrameData().timestamp;
      this.history = [Object.assign(Object.assign({}, point), { timestamp })];
      var onSessionStart = handlers.onSessionStart;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    PanSession2.prototype.updateHandlers = function(handlers) {
      this.handlers = handlers;
    };
    PanSession2.prototype.end = function() {
      this.removeListeners && this.removeListeners();
      cancelSync.update(this.updatePoint);
    };
    return PanSession2;
  }()
);
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i2 = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i2 >= 0) {
    timestampedPoint = history[i2];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i2--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}
function create_default_slot$8(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[11].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
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
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
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
function create_fragment$g(ctx) {
  let usepointerevent;
  let current;
  usepointerevent = new UsePointerEvent({
    props: {
      ref: (
        /*visualElement*/
        ctx[0]
      ),
      eventName: "pointerdown",
      handler: (
        /*hasPanEvents*/
        ctx[1] && /*onPointerDown*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$8] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usepointerevent.$$.fragment);
    },
    l(nodes) {
      claim_component(usepointerevent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usepointerevent, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const usepointerevent_changes = {};
      if (dirty & /*visualElement*/
      1) usepointerevent_changes.ref = /*visualElement*/
      ctx2[0];
      if (dirty & /*hasPanEvents*/
      2) usepointerevent_changes.handler = /*hasPanEvents*/
      ctx2[1] && /*onPointerDown*/
      ctx2[3];
      if (dirty & /*$$scope*/
      4096) {
        usepointerevent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usepointerevent.$set(usepointerevent_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usepointerevent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usepointerevent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usepointerevent, detaching);
    }
  };
}
function instance$j($$self, $$props, $$invalidate) {
  let hasPanEvents;
  let $mcc;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualElement: visualElement2, isCustom } = $$props;
  let { onPan, onPanStart, onPanEnd, onPanSessionStart } = props;
  let panSession = null;
  const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  component_subscribe($$self, mcc, (value) => $$invalidate(10, $mcc = value));
  let { transformPagePoint } = get_store_value(mcc);
  let handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: (event, info) => {
      panSession = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  function onPointerDown(event) {
    panSession = new PanSession(event, handlers, { transformPagePoint });
  }
  afterUpdate(() => {
    if (panSession !== null) {
      panSession.updateHandlers(handlers);
    }
  });
  onDestroy(() => panSession && panSession.end());
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(4, props = $$props2.props);
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("isCustom" in $$props2) $$invalidate(5, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(12, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    16) {
      $$invalidate(6, { onPan, onPanStart, onPanEnd, onPanSessionStart } = props, onPan, ($$invalidate(7, onPanStart), $$invalidate(4, props)), ($$invalidate(8, onPanEnd), $$invalidate(4, props)), ($$invalidate(9, onPanSessionStart), $$invalidate(4, props)));
    }
    if ($$self.$$.dirty & /*onPan, onPanStart, onPanEnd, onPanSessionStart*/
    960) {
      $$invalidate(1, hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart);
    }
    if ($$self.$$.dirty & /*$mcc*/
    1024) {
      ({ transformPagePoint } = $mcc);
    }
    if ($$self.$$.dirty & /*onPanSessionStart, onPanStart, onPan, onPanEnd*/
    960) {
      handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: (event, info) => {
          panSession = null;
          onPanEnd && onPanEnd(event, info);
        }
      };
    }
  };
  return [
    visualElement2,
    hasPanEvents,
    mcc,
    onPointerDown,
    props,
    isCustom,
    onPan,
    onPanStart,
    onPanEnd,
    onPanSessionStart,
    $mcc,
    slots,
    $$scope
  ];
}
class UsePanGesture extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$j, create_fragment$g, safe_not_equal, { props: 4, visualElement: 0, isCustom: 5 });
  }
}
var isNodeOrChild = function(parent, child) {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};
function createLock(name) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}
function create_default_slot$7(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
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
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
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
function create_fragment$f(ctx) {
  let usepointerevent;
  let current;
  usepointerevent = new UsePointerEvent({
    props: {
      ref: (
        /*visualElement*/
        ctx[0]
      ),
      eventName: "pointerdown",
      handler: (
        /*hasPressListeners*/
        ctx[1] ? (
          /*onPointerDown*/
          ctx[2]
        ) : void 0
      ),
      $$slots: { default: [create_default_slot$7] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usepointerevent.$$.fragment);
    },
    l(nodes) {
      claim_component(usepointerevent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usepointerevent, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const usepointerevent_changes = {};
      if (dirty & /*visualElement*/
      1) usepointerevent_changes.ref = /*visualElement*/
      ctx2[0];
      if (dirty & /*hasPressListeners*/
      2) usepointerevent_changes.handler = /*hasPressListeners*/
      ctx2[1] ? (
        /*onPointerDown*/
        ctx2[2]
      ) : void 0;
      if (dirty & /*$$scope*/
      512) {
        usepointerevent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usepointerevent.$set(usepointerevent_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usepointerevent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usepointerevent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usepointerevent, detaching);
    }
  };
}
function instance$i($$self, $$props, $$invalidate) {
  let onTap;
  let onTapStart;
  let onTapCancel;
  let whileTap;
  let hasPressListeners;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualElement: visualElement2 } = $$props;
  let isPressing = false;
  let cancelPointerEndListeners = null;
  function removePointerEndListener() {
    cancelPointerEndListeners == null ? void 0 : cancelPointerEndListeners();
    cancelPointerEndListeners = null;
  }
  function checkPointerEnd() {
    var _a;
    removePointerEndListener();
    isPressing = false;
    (_a = visualElement2.animationState) == null ? void 0 : _a.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd()) return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel == null ? void 0 : onTapCancel(event, info) : onTap == null ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd()) return;
    onTapCancel == null ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a;
    if (isPressing) return;
    removePointerEndListener();
    isPressing = true;
    cancelPointerEndListeners = pipe(addPointerEvent(window, "pointerup", onPointerUp), addPointerEvent(window, "pointercancel", onPointerCancel));
    onTapStart == null ? void 0 : onTapStart(event, info);
    (_a = visualElement2.animationState) == null ? void 0 : _a.setActive(AnimationType.Tap, true);
  }
  onDestroy(removePointerEndListener);
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(3, props = $$props2.props);
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("$$scope" in $$props2) $$invalidate(9, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    8) {
      $$invalidate(6, { onTap, onTapStart, onTapCancel, whileTap } = props, onTap, ($$invalidate(4, onTapStart), $$invalidate(3, props)), ($$invalidate(5, onTapCancel), $$invalidate(3, props)), ($$invalidate(7, whileTap), $$invalidate(3, props)));
    }
    if ($$self.$$.dirty & /*onTap, onTapStart, onTapCancel, whileTap*/
    240) {
      $$invalidate(1, hasPressListeners = onTap || onTapStart || onTapCancel || whileTap);
    }
  };
  return [
    visualElement2,
    hasPressListeners,
    onPointerDown,
    props,
    onTapStart,
    onTapCancel,
    onTap,
    whileTap,
    slots,
    $$scope
  ];
}
class UseTapGesture extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$i, create_fragment$f, safe_not_equal, { props: 3, visualElement: 0 });
  }
}
function create_fragment$e(ctx) {
  let usepointerevent0;
  let t0;
  let usepointerevent1;
  let t1;
  let current;
  usepointerevent0 = new UsePointerEvent({
    props: {
      ref: (
        /*visualElement*/
        ctx[0]
      ),
      eventName: "pointerenter",
      handler: (
        /*onHoverStart*/
        ctx[1] || /*whileHover*/
        ctx[3] ? createHoverEvent(
          /*visualElement*/
          ctx[0],
          true,
          /*onHoverStart*/
          ctx[1]
        ) : void 0
      )
    }
  });
  usepointerevent1 = new UsePointerEvent({
    props: {
      ref: (
        /*visualElement*/
        ctx[0]
      ),
      eventName: "pointerleave",
      handler: (
        /*onHoverEnd*/
        ctx[2] || /*whileHover*/
        ctx[3] ? createHoverEvent(
          /*visualElement*/
          ctx[0],
          false,
          /*onHoverEnd*/
          ctx[2]
        ) : void 0
      )
    }
  });
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[5],
    null
  );
  return {
    c() {
      create_component(usepointerevent0.$$.fragment);
      t0 = space();
      create_component(usepointerevent1.$$.fragment);
      t1 = space();
      if (default_slot) default_slot.c();
    },
    l(nodes) {
      claim_component(usepointerevent0.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(usepointerevent1.$$.fragment, nodes);
      t1 = claim_space(nodes);
      if (default_slot) default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(usepointerevent0, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(usepointerevent1, target, anchor);
      insert_hydration(target, t1, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      const usepointerevent0_changes = {};
      if (dirty & /*visualElement*/
      1) usepointerevent0_changes.ref = /*visualElement*/
      ctx2[0];
      if (dirty & /*onHoverStart, whileHover, visualElement*/
      11) usepointerevent0_changes.handler = /*onHoverStart*/
      ctx2[1] || /*whileHover*/
      ctx2[3] ? createHoverEvent(
        /*visualElement*/
        ctx2[0],
        true,
        /*onHoverStart*/
        ctx2[1]
      ) : void 0;
      usepointerevent0.$set(usepointerevent0_changes);
      const usepointerevent1_changes = {};
      if (dirty & /*visualElement*/
      1) usepointerevent1_changes.ref = /*visualElement*/
      ctx2[0];
      if (dirty & /*onHoverEnd, whileHover, visualElement*/
      13) usepointerevent1_changes.handler = /*onHoverEnd*/
      ctx2[2] || /*whileHover*/
      ctx2[3] ? createHoverEvent(
        /*visualElement*/
        ctx2[0],
        false,
        /*onHoverEnd*/
        ctx2[2]
      ) : void 0;
      usepointerevent1.$set(usepointerevent1_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        32)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[5],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[5]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[5],
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
      transition_in(usepointerevent0.$$.fragment, local);
      transition_in(usepointerevent1.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(usepointerevent0.$$.fragment, local);
      transition_out(usepointerevent1.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(t1);
      }
      destroy_component(usepointerevent0, detaching);
      destroy_component(usepointerevent1, detaching);
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function createHoverEvent(visualElement2, isActive, callback) {
  return (event, info) => {
    var _a;
    if (!isMouseEvent(event) || isDragActive()) return;
    callback == null ? void 0 : callback(event, info);
    (_a = visualElement2.animationState) == null ? void 0 : _a.setActive(AnimationType.Hover, isActive);
  };
}
function instance$h($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualElement: visualElement2 } = $$props;
  let { onHoverStart, onHoverEnd, whileHover } = props;
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(4, props = $$props2.props);
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("$$scope" in $$props2) $$invalidate(5, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    16) {
      $$invalidate(1, { onHoverStart, onHoverEnd, whileHover } = props, onHoverStart, ($$invalidate(2, onHoverEnd), $$invalidate(4, props)), ($$invalidate(3, whileHover), $$invalidate(4, props)));
    }
  };
  return [visualElement2, onHoverStart, onHoverEnd, whileHover, props, $$scope, slots];
}
class UseHoverGesture extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$h, create_fragment$e, safe_not_equal, { props: 4, visualElement: 0 });
  }
}
function create_default_slot_1$2(ctx) {
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
function create_default_slot$6(ctx) {
  let usedomevent;
  let current;
  usedomevent = new UseDomEvent({
    props: {
      ref: (
        /*visualElement*/
        ctx[0]
      ),
      eventName: "blur",
      handler: (
        /*whileFocus*/
        ctx[1] ? (
          /*onBlur*/
          ctx[3]
        ) : void 0
      ),
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usedomevent.$$.fragment);
    },
    l(nodes) {
      claim_component(usedomevent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usedomevent, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const usedomevent_changes = {};
      if (dirty & /*visualElement*/
      1) usedomevent_changes.ref = /*visualElement*/
      ctx2[0];
      if (dirty & /*whileFocus*/
      2) usedomevent_changes.handler = /*whileFocus*/
      ctx2[1] ? (
        /*onBlur*/
        ctx2[3]
      ) : void 0;
      if (dirty & /*$$scope*/
      64) {
        usedomevent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usedomevent.$set(usedomevent_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usedomevent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usedomevent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usedomevent, detaching);
    }
  };
}
function create_fragment$d(ctx) {
  let usedomevent;
  let current;
  usedomevent = new UseDomEvent({
    props: {
      ref: (
        /*visualElement*/
        ctx[0]
      ),
      eventName: "focus",
      handler: (
        /*whileFocus*/
        ctx[1] ? (
          /*onFocus*/
          ctx[2]
        ) : void 0
      ),
      $$slots: { default: [create_default_slot$6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(usedomevent.$$.fragment);
    },
    l(nodes) {
      claim_component(usedomevent.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(usedomevent, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const usedomevent_changes = {};
      if (dirty & /*visualElement*/
      1) usedomevent_changes.ref = /*visualElement*/
      ctx2[0];
      if (dirty & /*whileFocus*/
      2) usedomevent_changes.handler = /*whileFocus*/
      ctx2[1] ? (
        /*onFocus*/
        ctx2[2]
      ) : void 0;
      if (dirty & /*$$scope, visualElement, whileFocus*/
      67) {
        usedomevent_changes.$$scope = { dirty, ctx: ctx2 };
      }
      usedomevent.$set(usedomevent_changes);
    },
    i(local) {
      if (current) return;
      transition_in(usedomevent.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(usedomevent.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(usedomevent, detaching);
    }
  };
}
function instance$g($$self, $$props, $$invalidate) {
  let whileFocus;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualElement: visualElement2 } = $$props;
  const onFocus = () => {
    var _a;
    (_a = visualElement2.animationState) == null ? void 0 : _a.setActive(AnimationType.Focus, true);
  };
  const onBlur = () => {
    var _a;
    (_a = visualElement2.animationState) == null ? void 0 : _a.setActive(AnimationType.Focus, false);
  };
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(4, props = $$props2.props);
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("$$scope" in $$props2) $$invalidate(6, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    16) {
      $$invalidate(1, { whileFocus } = props, whileFocus);
    }
  };
  return [visualElement2, whileFocus, onFocus, onBlur, props, slots, $$scope];
}
class UseFocusGesture extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$g, create_fragment$d, safe_not_equal, { props: 4, visualElement: 0 });
  }
}
const createMotionClass = (features) => {
  features && loadFeatures(features);
  return Motion;
};
const gestureAnimations = {
  tap: UseTapGesture,
  focus: UseFocusGesture,
  hover: UseHoverGesture
};
function applyConstraints(point, _a, elastic) {
  var min = _a.min, max = _a.max;
  if (min !== void 0 && point < min) {
    point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcConstrainedMinPoint(point, length, progress2, constraints, elastic) {
  var min = point - length * progress2;
  return constraints ? applyConstraints(min, constraints, elastic) : min;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }
  return {
    min: layoutAxis.min + min,
    max: layoutAxis.min + max
  };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcPositionFromProgress(axis, constraints, progress2) {
  var axisLength = axis.max - axis.min;
  var min = mix(constraints.min, constraints.max - axisLength, progress2);
  return { min, max: min + axisLength };
}
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}
function convertToRelativeProjection(visualElement2, isLayoutDrag) {
  if (isLayoutDrag === void 0) {
    isLayoutDrag = true;
  }
  var projectionParent = visualElement2.getProjectionParent();
  if (!projectionParent)
    return false;
  var offset;
  if (isLayoutDrag) {
    offset = calcRelativeOffset(projectionParent.projection.target, visualElement2.projection.target);
    removeBoxTransforms(offset, projectionParent.getLatestValues());
  } else {
    offset = calcRelativeOffset(projectionParent.getLayoutState().layout, visualElement2.getLayoutState().layout);
  }
  eachAxis(function(axis) {
    return visualElement2.setProjectionTargetAxis(axis, offset[axis].min, offset[axis].max, true);
  });
  return true;
}
var elementDragControls = /* @__PURE__ */ new WeakMap();
var lastPointerEvent;
var VisualElementDragControls = (
  /** @class */
  function() {
    function VisualElementDragControls2(_a) {
      var visualElement2 = _a.visualElement;
      this.isDragging = false;
      this.currentDirection = null;
      this.constraints = false;
      this.elastic = axisBox();
      this.props = {};
      this.hasMutatedConstraints = false;
      this.cursorProgress = {
        x: 0.5,
        y: 0.5
      };
      this.originPoint = {};
      this.openGlobalLock = null;
      this.panSession = null;
      this.visualElement = visualElement2;
      this.visualElement.enableLayoutProjection();
      elementDragControls.set(visualElement2, this);
    }
    VisualElementDragControls2.prototype.start = function(originEvent, _a) {
      var _this = this;
      var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
      var onSessionStart = function(event) {
        var _a2;
        _this.stopMotion();
        var initialPoint = getViewportPointFromEvent(event).point;
        (_a2 = _this.cancelLayout) === null || _a2 === void 0 ? void 0 : _a2.call(_this);
        _this.cancelLayout = batchLayout(function(read, write) {
          var ancestors = collectProjectingAncestors(_this.visualElement);
          var children2 = collectProjectingChildren(_this.visualElement);
          var tree = __spreadArray(__spreadArray([], __read(ancestors)), __read(children2));
          var hasManuallySetCursorOrigin = false;
          _this.isLayoutDrag() && _this.visualElement.lockProjectionTarget();
          write(function() {
            tree.forEach(function(element2) {
              return element2.resetTransform();
            });
          });
          read(function() {
            updateLayoutMeasurement(_this.visualElement);
            children2.forEach(updateLayoutMeasurement);
          });
          write(function() {
            tree.forEach(function(element2) {
              return element2.restoreTransform();
            });
            if (snapToCursor) {
              hasManuallySetCursorOrigin = _this.snapToCursor(initialPoint);
            }
          });
          read(function() {
            var isRelativeDrag = Boolean(_this.getAxisMotionValue("x") && !_this.isExternalDrag());
            if (!isRelativeDrag) {
              _this.visualElement.rebaseProjectionTarget(true, _this.visualElement.measureViewportBox(false));
            }
            _this.visualElement.scheduleUpdateLayoutProjection();
            var projection = _this.visualElement.projection;
            eachAxis(function(axis) {
              if (!hasManuallySetCursorOrigin) {
                var _a3 = projection.target[axis], min = _a3.min, max = _a3.max;
                _this.cursorProgress[axis] = cursorProgress ? cursorProgress[axis] : progress(min, max, initialPoint[axis]);
              }
              var axisValue = _this.getAxisMotionValue(axis);
              if (axisValue) {
                _this.originPoint[axis] = axisValue.get();
              }
            });
          });
          write(function() {
            flushSync.update();
            flushSync.preRender();
            flushSync.render();
            flushSync.postRender();
          });
          read(function() {
            return _this.resolveDragConstraints();
          });
        });
      };
      var onStart = function(event, info) {
        var _a2, _b2, _c2;
        var _d = _this.props, drag2 = _d.drag, dragPropagation = _d.dragPropagation;
        if (drag2 && !dragPropagation) {
          if (_this.openGlobalLock)
            _this.openGlobalLock();
          _this.openGlobalLock = getGlobalLock(drag2);
          if (!_this.openGlobalLock)
            return;
        }
        flushLayout();
        _this.isDragging = true;
        _this.currentDirection = null;
        (_b2 = (_a2 = _this.props).onDragStart) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, event, info);
        (_c2 = _this.visualElement.animationState) === null || _c2 === void 0 ? void 0 : _c2.setActive(AnimationType.Drag, true);
      };
      var onMove = function(event, info) {
        var _a2, _b2, _c2, _d;
        var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
        if (!dragPropagation && !_this.openGlobalLock)
          return;
        var offset = info.offset;
        if (dragDirectionLock && _this.currentDirection === null) {
          _this.currentDirection = getCurrentDirection(offset);
          if (_this.currentDirection !== null) {
            (_b2 = (_a2 = _this.props).onDirectionLock) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, _this.currentDirection);
          }
          return;
        }
        _this.updateAxis("x", info.point, offset);
        _this.updateAxis("y", info.point, offset);
        (_d = (_c2 = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c2, event, info);
        lastPointerEvent = event;
      };
      var onSessionEnd = function(event, info) {
        return _this.stop(event, info);
      };
      var transformPagePoint = this.props.transformPagePoint;
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd
      }, { transformPagePoint });
    };
    VisualElementDragControls2.prototype.resolveDragConstraints = function() {
      var _this = this;
      var _a = this.props, dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
      var layout = this.visualElement.getLayoutState().layoutCorrected;
      if (dragConstraints) {
        this.constraints = isRefObject(dragConstraints) ? this.resolveRefConstraints(layout, dragConstraints) : calcRelativeConstraints(layout, dragConstraints);
      } else {
        this.constraints = false;
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (this.constraints && !this.hasMutatedConstraints) {
        eachAxis(function(axis) {
          if (_this.getAxisMotionValue(axis)) {
            _this.constraints[axis] = rebaseAxisConstraints(layout[axis], _this.constraints[axis]);
          }
        });
      }
    };
    VisualElementDragControls2.prototype.resolveRefConstraints = function(layoutBox, constraints) {
      var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
      var constraintsElement = constraints.current;
      this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
      var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
      if (onMeasureDragConstraints) {
        var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
        }
      }
      return measuredConstraints;
    };
    VisualElementDragControls2.prototype.cancelDrag = function() {
      var _a, _b;
      this.visualElement.unlockProjectionTarget();
      (_a = this.cancelLayout) === null || _a === void 0 ? void 0 : _a.call(this);
      this.isDragging = false;
      this.panSession && this.panSession.end();
      this.panSession = null;
      if (!this.props.dragPropagation && this.openGlobalLock) {
        this.openGlobalLock();
        this.openGlobalLock = null;
      }
      (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
    };
    VisualElementDragControls2.prototype.stop = function(event, info) {
      var _a, _b, _c;
      (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
      this.panSession = null;
      var isDragging = this.isDragging;
      this.cancelDrag();
      if (!isDragging)
        return;
      var velocity = info.velocity;
      this.animateDragEnd(velocity);
      (_c = (_b = this.props).onDragEnd) === null || _c === void 0 ? void 0 : _c.call(_b, event, info);
    };
    VisualElementDragControls2.prototype.snapToCursor = function(point) {
      var _this = this;
      return eachAxis(function(axis) {
        var drag2 = _this.props.drag;
        if (!shouldDrag(axis, drag2, _this.currentDirection))
          return;
        var axisValue = _this.getAxisMotionValue(axis);
        if (axisValue) {
          var box = _this.visualElement.getLayoutState().layout;
          var length_1 = box[axis].max - box[axis].min;
          var center = box[axis].min + length_1 / 2;
          var offset = point[axis] - center;
          _this.originPoint[axis] = point[axis];
          axisValue.set(offset);
        } else {
          _this.cursorProgress[axis] = 0.5;
          return true;
        }
      }).includes(true);
    };
    VisualElementDragControls2.prototype.updateAxis = function(axis, point, offset) {
      var drag2 = this.props.drag;
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      return this.getAxisMotionValue(axis) ? this.updateAxisMotionValue(axis, offset) : this.updateVisualElementAxis(axis, point);
    };
    VisualElementDragControls2.prototype.updateAxisMotionValue = function(axis, offset) {
      var axisValue = this.getAxisMotionValue(axis);
      if (!offset || !axisValue)
        return;
      var nextValue = this.originPoint[axis] + offset[axis];
      var update2 = this.constraints ? applyConstraints(nextValue, this.constraints[axis], this.elastic[axis]) : nextValue;
      axisValue.set(update2);
    };
    VisualElementDragControls2.prototype.updateVisualElementAxis = function(axis, point) {
      var _a;
      var axisLayout = this.visualElement.getLayoutState().layout[axis];
      var axisLength = axisLayout.max - axisLayout.min;
      var axisProgress = this.cursorProgress[axis];
      var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], this.elastic[axis]);
      this.visualElement.setProjectionTargetAxis(axis, min, min + axisLength);
    };
    VisualElementDragControls2.prototype.setProps = function(_a) {
      var _b = _a.drag, drag2 = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? defaultElastic : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = __rest(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
      this.props = Object.assign({
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      }, remainingProps);
    };
    VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
      var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
      var dragKey = "_drag" + axis.toUpperCase();
      if (this.props[dragKey]) {
        return this.props[dragKey];
      } else if (!layout && layoutId === void 0) {
        return this.visualElement.getValue(axis, 0);
      }
    };
    VisualElementDragControls2.prototype.isLayoutDrag = function() {
      return !this.getAxisMotionValue("x");
    };
    VisualElementDragControls2.prototype.isExternalDrag = function() {
      var _a = this.props, _dragX = _a._dragX, _dragY = _a._dragY;
      return _dragX || _dragY;
    };
    VisualElementDragControls2.prototype.animateDragEnd = function(velocity) {
      var _this = this;
      var _a = this.props, drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
      var isRelative = convertToRelativeProjection(this.visualElement, this.isLayoutDrag() && !this.isExternalDrag());
      var constraints = this.constraints || {};
      if (isRelative && Object.keys(constraints).length && this.isLayoutDrag()) {
        var projectionParent = this.visualElement.getProjectionParent();
        if (projectionParent) {
          var relativeConstraints_1 = calcRelativeOffset(projectionParent.projection.targetFinal, constraints);
          eachAxis(function(axis) {
            var _a2 = relativeConstraints_1[axis], min = _a2.min, max = _a2.max;
            constraints[axis] = {
              min: isNaN(min) ? void 0 : min,
              max: isNaN(max) ? void 0 : max
            };
          });
        }
      }
      var momentumAnimations = eachAxis(function(axis) {
        var _a2;
        if (!shouldDrag(axis, drag2, _this.currentDirection)) {
          return;
        }
        var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
        var bounceStiffness = dragElastic ? 200 : 1e6;
        var bounceDamping = dragElastic ? 40 : 1e7;
        var inertia2 = Object.assign(Object.assign({
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10
        }, dragTransition), transition);
        return _this.getAxisMotionValue(axis) ? _this.startAxisValueAnimation(axis, inertia2) : _this.visualElement.startLayoutAnimation(axis, inertia2, isRelative);
      });
      return Promise.all(momentumAnimations).then(function() {
        var _a2, _b;
        (_b = (_a2 = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a2);
      });
    };
    VisualElementDragControls2.prototype.stopMotion = function() {
      var _this = this;
      eachAxis(function(axis) {
        var axisValue = _this.getAxisMotionValue(axis);
        axisValue ? axisValue.stop() : _this.visualElement.stopLayoutAnimation();
      });
    };
    VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
      var axisValue = this.getAxisMotionValue(axis);
      if (!axisValue)
        return;
      var currentValue = axisValue.get();
      axisValue.set(currentValue);
      axisValue.set(currentValue);
      return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls2.prototype.scalePoint = function() {
      var _this = this;
      var _a = this.props, drag2 = _a.drag, dragConstraints = _a.dragConstraints;
      if (!isRefObject(dragConstraints) || !this.constraintsBox)
        return;
      this.stopMotion();
      var boxProgress = { x: 0, y: 0 };
      eachAxis(function(axis) {
        boxProgress[axis] = calcOrigin$1(_this.visualElement.projection.target[axis], _this.constraintsBox[axis]);
      });
      this.updateConstraints(function() {
        eachAxis(function(axis) {
          if (!shouldDrag(axis, drag2, null))
            return;
          var _a2 = calcPositionFromProgress(_this.visualElement.projection.target[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a2.min, max = _a2.max;
          _this.visualElement.setProjectionTargetAxis(axis, min, max);
        });
      });
      setTimeout(flushLayout, 1);
    };
    VisualElementDragControls2.prototype.updateConstraints = function(onReady) {
      var _this = this;
      this.cancelLayout = batchLayout(function(read, write) {
        var ancestors = collectProjectingAncestors(_this.visualElement);
        write(function() {
          return ancestors.forEach(function(element2) {
            return element2.resetTransform();
          });
        });
        read(function() {
          return updateLayoutMeasurement(_this.visualElement);
        });
        write(function() {
          return ancestors.forEach(function(element2) {
            return element2.restoreTransform();
          });
        });
        read(function() {
          _this.resolveDragConstraints();
        });
        if (onReady)
          write(onReady);
      });
    };
    VisualElementDragControls2.prototype.mount = function(visualElement2) {
      var _this = this;
      var element2 = visualElement2.getInstance();
      var stopPointerListener = addPointerEvent(element2, "pointerdown", function(event) {
        var _a = _this.props, drag2 = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
        drag2 && dragListener && _this.start(event);
      });
      var stopResizeListener = addDomEvent(window, "resize", function() {
        _this.scalePoint();
      });
      var stopLayoutUpdateListener = visualElement2.onLayoutUpdate(function() {
        if (_this.isDragging) {
          _this.resolveDragConstraints();
        }
      });
      var prevDragCursor = visualElement2.prevDragCursor;
      if (prevDragCursor) {
        this.start(lastPointerEvent, { cursorProgress: prevDragCursor });
      }
      return function() {
        stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
        stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
        stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
        _this.cancelDrag();
      };
    };
    return VisualElementDragControls2;
  }()
);
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}
function create_fragment$c(ctx) {
  let current;
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
function instance$f($$self, $$props, $$invalidate) {
  let $mcc;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { visualElement: visualElement2, props, isCustom } = $$props;
  const mcc = getContext(MotionConfigContext) || MotionConfigContext(isCustom);
  component_subscribe($$self, mcc, (value) => $$invalidate(5, $mcc = value));
  let dragControls = new VisualElementDragControls({ visualElement: visualElement2 });
  let cleanup;
  const dragEffect = () => {
    if (cleanup) {
      cleanup();
    }
    if (groupDragControls) {
      cleanup = groupDragControls.subscribe(dragControls);
    }
  };
  let { dragControls: groupDragControls } = props;
  let { transformPagePoint } = get_store_value(mcc);
  dragControls.setProps({ ...props, transformPagePoint });
  onDestroy(() => {
    if (cleanup) {
      cleanup();
    }
  });
  onMount(() => dragControls.mount(visualElement2));
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(1, visualElement2 = $$props2.visualElement);
    if ("props" in $$props2) $$invalidate(2, props = $$props2.props);
    if ("isCustom" in $$props2) $$invalidate(3, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(6, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    4) {
      ({ dragControls: groupDragControls } = props);
    }
    if ($$self.$$.dirty & /*$mcc*/
    32) {
      $$invalidate(4, { transformPagePoint } = $mcc, transformPagePoint);
    }
    if ($$self.$$.dirty & /*props, transformPagePoint*/
    20) {
      dragControls.setProps({ ...props, transformPagePoint });
    }
  };
  dragEffect();
  return [mcc, visualElement2, props, isCustom, transformPagePoint, $mcc, $$scope, slots];
}
class UseDrag extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$f, create_fragment$c, safe_not_equal, { visualElement: 1, props: 2, isCustom: 3 });
  }
}
const drag = {
  pan: UsePanGesture,
  drag: UseDrag
};
function pixelsToPercent(pixels, axis) {
  return pixels / (axis.max - axis.min) * 100;
}
function correctBorderRadius(latest, _layoutState, _a) {
  var target = _a.target;
  if (typeof latest === "string") {
    if (px.test(latest)) {
      latest = parseFloat(latest);
    } else {
      return latest;
    }
  }
  var x2 = pixelsToPercent(latest, target.x);
  var y2 = pixelsToPercent(latest, target.y);
  return x2 + "% " + y2 + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _a) {
  var delta2 = _a.delta, treeScale = _a.treeScale;
  var original = latest;
  var containsCSSVariables = latest.includes("var(");
  var cssVariables = [];
  if (containsCSSVariables) {
    latest = latest.replace(cssVariableRegex, function(match) {
      cssVariables.push(match);
      return varToken;
    });
  }
  var shadow = complex.parse(latest);
  if (shadow.length > 5)
    return original;
  var template = complex.createTransformer(latest);
  var offset = typeof shadow[0] !== "number" ? 1 : 0;
  var xScale = delta2.x.scale * treeScale.x;
  var yScale = delta2.y.scale * treeScale.y;
  shadow[0 + offset] /= xScale;
  shadow[1 + offset] /= yScale;
  var averageScale = mix(xScale, yScale, 0.5);
  if (typeof shadow[2 + offset] === "number")
    shadow[2 + offset] /= averageScale;
  if (typeof shadow[3 + offset] === "number")
    shadow[3 + offset] /= averageScale;
  var output = template(shadow);
  if (containsCSSVariables) {
    var i_1 = 0;
    output = output.replace(varToken, function() {
      var cssVariable = cssVariables[i_1];
      i_1++;
      return cssVariable;
    });
  }
  return output;
}
var borderCorrectionDefinition = {
  process: correctBorderRadius
};
var defaultScaleCorrectors = {
  borderRadius: Object.assign(Object.assign({}, borderCorrectionDefinition), { applyTo: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ] }),
  borderTopLeftRadius: borderCorrectionDefinition,
  borderTopRightRadius: borderCorrectionDefinition,
  borderBottomLeftRadius: borderCorrectionDefinition,
  borderBottomRightRadius: borderCorrectionDefinition,
  boxShadow: {
    process: correctBoxShadow
  }
};
const progressTarget = 1e3;
function hasMoved(a2, b2) {
  return !isZeroBox(a2) && !isZeroBox(b2) && (!axisIsEqual(a2.x, b2.x) || !axisIsEqual(a2.y, b2.y));
}
const zeroAxis = { min: 0, max: 0 };
function isZeroBox(a2) {
  return axisIsEqual(a2.x, zeroAxis) && axisIsEqual(a2.y, zeroAxis);
}
function axisIsEqual(a2, b2) {
  return a2.min === b2.min && a2.max === b2.max;
}
const defaultLayoutTransition = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
function instance$e($$self, $$props, $$invalidate) {
  let { visualElement: visualElement2, layout = void 0, safeToRemove } = $$props;
  let frameTarget = axisBox();
  let currentAnimationTarget = axisBox();
  let isAnimating = { x: false, y: false };
  let stopAxisAnimation = { x: void 0, y: void 0 };
  let unsubLayoutReady;
  let isAnimatingTree = false;
  onMount(() => {
    $$invalidate(0, visualElement2.animateMotionValue = startAnimation, visualElement2);
    visualElement2.enableLayoutProjection();
    unsubLayoutReady = visualElement2.onLayoutUpdate(animateF);
    $$invalidate(
      0,
      visualElement2.layoutSafeToRemove = function() {
        safeToRemove();
      },
      visualElement2
    );
    addScaleCorrection(defaultScaleCorrectors);
  });
  onDestroy(() => {
    unsubLayoutReady();
    eachAxis((axis) => {
      var _a;
      return (_a = stopAxisAnimation[axis]) == null ? void 0 : _a.call(stopAxisAnimation);
    });
  });
  const animateF = (target, origin, { originBox, targetBox, visibilityAction, shouldStackAnimate, onComplete, ...config } = {}) => {
    if (shouldStackAnimate === false) {
      isAnimatingTree = false;
      return safeToRemove();
    }
    if (isAnimatingTree && shouldStackAnimate !== true) {
      return;
    } else if (shouldStackAnimate) {
      isAnimatingTree = true;
    }
    origin = originBox || origin;
    target = targetBox || target;
    const boxHasMoved = hasMoved(origin, target);
    const animations2 = eachAxis((axis) => {
      if (layout === "position") {
        const targetLength = target[axis].max - target[axis].min;
        origin[axis].max = origin[axis].min + targetLength;
      }
      if (visualElement2.projection.isTargetLocked) {
        return;
      } else if (visibilityAction !== void 0) {
        visualElement2.setVisibility(visibilityAction === VisibilityAction.Show);
      } else if (boxHasMoved) {
        return animateAxis(axis, target[axis], origin[axis], config);
      } else {
        return visualElement2.setProjectionTargetAxis(axis, target[axis].min, target[axis].max);
      }
    });
    visualElement2.syncRender();
    return Promise.all(animations2).then(() => {
      isAnimatingTree = false;
      onComplete && onComplete();
      visualElement2.notifyLayoutAnimationComplete();
    });
  };
  const animateAxis = (axis, target, origin, { transition: _transition } = {}) => {
    var _a, _b;
    (_a = stopAxisAnimation[axis]) == null ? void 0 : _a.call(stopAxisAnimation);
    if (isAnimating[axis] && axisIsEqual(target, currentAnimationTarget[axis])) {
      return;
    }
    (_b = stopAxisAnimation[axis]) == null ? void 0 : _b.call(stopAxisAnimation);
    isAnimating[axis] = true;
    const _frameTarget = frameTarget[axis];
    const layoutProgress = visualElement2.getProjectionAnimationProgress()[axis];
    layoutProgress.clearListeners();
    layoutProgress.set(0);
    layoutProgress.set(0);
    const frame2 = () => {
      const p2 = layoutProgress.get() / progressTarget;
      tweenAxis(_frameTarget, origin, target, p2);
      visualElement2.setProjectionTargetAxis(axis, _frameTarget.min, _frameTarget.max);
    };
    frame2();
    const unsubscribeProgress = layoutProgress.onChange(frame2);
    stopAxisAnimation[axis] = () => {
      isAnimating[axis] = false;
      layoutProgress.stop();
      unsubscribeProgress();
    };
    currentAnimationTarget[axis] = target;
    const layoutTransition = _transition || visualElement2.getDefaultTransition() || defaultLayoutTransition;
    const animation = startAnimation(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, layoutTransition && getValueTransition(layoutTransition, "layout")).then(stopAxisAnimation[axis]);
    return animation;
  };
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("layout" in $$props2) $$invalidate(1, layout = $$props2.layout);
    if ("safeToRemove" in $$props2) $$invalidate(2, safeToRemove = $$props2.safeToRemove);
  };
  return [visualElement2, layout, safeToRemove];
}
class Animate extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$e, null, safe_not_equal, {
      visualElement: 0,
      layout: 1,
      safeToRemove: 2
    });
  }
}
function create_fragment$b(ctx) {
  let animate2;
  let current;
  animate2 = new Animate({
    props: {
      visualElement: (
        /*visualElement*/
        ctx[0]
      ),
      layout: (
        /*layout*/
        ctx[1]
      ),
      safeToRemove: (
        /*$presence*/
        ctx[2][1]
      )
    }
  });
  return {
    c() {
      create_component(animate2.$$.fragment);
    },
    l(nodes) {
      claim_component(animate2.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(animate2, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const animate_changes = {};
      if (dirty & /*visualElement*/
      1) animate_changes.visualElement = /*visualElement*/
      ctx2[0];
      if (dirty & /*layout*/
      2) animate_changes.layout = /*layout*/
      ctx2[1];
      if (dirty & /*$presence*/
      4) animate_changes.safeToRemove = /*$presence*/
      ctx2[2][1];
      animate2.$set(animate_changes);
    },
    i(local) {
      if (current) return;
      transition_in(animate2.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(animate2.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(animate2, detaching);
    }
  };
}
function instance$d($$self, $$props, $$invalidate) {
  let $presence;
  let { visualElement: visualElement2, props, isCustom } = $$props;
  let { layout } = props;
  const presence = usePresence(isCustom);
  component_subscribe($$self, presence, (value) => $$invalidate(2, $presence = value));
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("props" in $$props2) $$invalidate(4, props = $$props2.props);
    if ("isCustom" in $$props2) $$invalidate(5, isCustom = $$props2.isCustom);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    16) {
      $$invalidate(1, { layout } = props, layout);
    }
  };
  return [visualElement2, layout, $presence, presence, props, isCustom];
}
class AnimateLayoutContextProvider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$d, create_fragment$b, safe_not_equal, { visualElement: 0, props: 4, isCustom: 5 });
  }
}
function instance$c($$self, $$props, $$invalidate) {
  let { visualElement: visualElement2, syncLayout, framerSyncLayout, update: update2 } = $$props;
  const scaleCorrectionContext = getContext(ScaleCorrectionContext);
  const scaleCorrectionParentContext = getContext(ScaleCorrectionParentContext);
  onMount(() => {
    isSharedLayout(syncLayout) && syncLayout.register(visualElement2);
    isSharedLayout(framerSyncLayout) && framerSyncLayout.register(visualElement2);
    visualElement2.onUnmount(() => {
      if (isSharedLayout(syncLayout)) {
        syncLayout.remove(visualElement2);
      }
      if (isSharedLayout(framerSyncLayout)) {
        framerSyncLayout.remove(visualElement2);
      }
    });
  });
  let updated = false;
  const updater = (nc = false) => {
    if (updated) {
      return null;
    }
    updated = true;
    get_store_value(scaleCorrectionContext).forEach((v2) => {
      var _a;
      (_a = v2.updater) == null ? void 0 : _a.call(v2, true);
    });
    if (isSharedLayout(syncLayout)) {
      syncLayout.syncUpdate();
    } else {
      snapshotViewportBox(visualElement2, nc);
      syncLayout.add(visualElement2);
    }
    return null;
  };
  if (update2 === void 0) {
    beforeUpdate(updater);
  }
  const afterU = (nc = false) => {
    updated = false;
    const scc = get_store_value(scaleCorrectionContext);
    scc.forEach((v2, i2) => {
      var _a;
      (_a = v2.afterU) == null ? void 0 : _a.call(v2, true);
    });
    if (!isSharedLayout(syncLayout)) {
      syncLayout.flush();
    }
  };
  scaleCorrectionParentContext.update((v2) => v2.concat([{ updater, afterU }]));
  afterUpdate(afterU);
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("syncLayout" in $$props2) $$invalidate(1, syncLayout = $$props2.syncLayout);
    if ("framerSyncLayout" in $$props2) $$invalidate(2, framerSyncLayout = $$props2.framerSyncLayout);
    if ("update" in $$props2) $$invalidate(3, update2 = $$props2.update);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*update*/
    8) {
      update2 !== void 0 && updater(update2);
    }
  };
  return [visualElement2, syncLayout, framerSyncLayout, update2];
}
class Measure extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$c, null, safe_not_equal, {
      visualElement: 0,
      syncLayout: 1,
      framerSyncLayout: 2,
      update: 3
    });
  }
}
function create_fragment$a(ctx) {
  let measure;
  let current;
  measure = new Measure({
    props: {
      syncLayout: (
        /*$syncLayout*/
        ctx[2]
      ),
      framerSyncLayout: (
        /*$framerSyncLayout*/
        ctx[3]
      ),
      visualElement: (
        /*visualElement*/
        ctx[0]
      ),
      update: (
        /*update*/
        ctx[1]
      )
    }
  });
  return {
    c() {
      create_component(measure.$$.fragment);
    },
    l(nodes) {
      claim_component(measure.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(measure, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const measure_changes = {};
      if (dirty & /*$syncLayout*/
      4) measure_changes.syncLayout = /*$syncLayout*/
      ctx2[2];
      if (dirty & /*$framerSyncLayout*/
      8) measure_changes.framerSyncLayout = /*$framerSyncLayout*/
      ctx2[3];
      if (dirty & /*visualElement*/
      1) measure_changes.visualElement = /*visualElement*/
      ctx2[0];
      if (dirty & /*update*/
      2) measure_changes.update = /*update*/
      ctx2[1];
      measure.$set(measure_changes);
    },
    i(local) {
      if (current) return;
      transition_in(measure.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(measure.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(measure, detaching);
    }
  };
}
function instance$b($$self, $$props, $$invalidate) {
  let update2;
  let $syncLayout;
  let $framerSyncLayout;
  let { visualElement: visualElement2, props, isCustom } = $$props;
  const syncLayout = getContext(SharedLayoutContext) || SharedLayoutContext(isCustom);
  component_subscribe($$self, syncLayout, (value) => $$invalidate(2, $syncLayout = value));
  const framerSyncLayout = getContext(FramerTreeLayoutContext) || FramerTreeLayoutContext();
  component_subscribe($$self, framerSyncLayout, (value) => $$invalidate(3, $framerSyncLayout = value));
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("props" in $$props2) $$invalidate(6, props = $$props2.props);
    if ("isCustom" in $$props2) $$invalidate(7, isCustom = $$props2.isCustom);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    64) {
      $$invalidate(1, { update: update2 } = props, update2);
    }
  };
  return [
    visualElement2,
    update2,
    $syncLayout,
    $framerSyncLayout,
    syncLayout,
    framerSyncLayout,
    props,
    isCustom
  ];
}
class MeasureContextProvider extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$b, create_fragment$a, safe_not_equal, { visualElement: 0, props: 6, isCustom: 7 });
  }
}
var layoutAnimations = {
  measureLayout: MeasureContextProvider,
  layoutAnimation: AnimateLayoutContextProvider
};
function instance$a($$self, $$props, $$invalidate) {
  let { visualElement: visualElement2, props } = $$props;
  let { animate: animate2 } = props;
  $$self.$$set = ($$props2) => {
    if ("visualElement" in $$props2) $$invalidate(0, visualElement2 = $$props2.visualElement);
    if ("props" in $$props2) $$invalidate(1, props = $$props2.props);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    2) {
      $$invalidate(2, { animate: animate2 } = props, animate2);
    }
    if ($$self.$$.dirty & /*visualElement*/
    1) {
      {
        $$invalidate(0, visualElement2.animationState = visualElement2.animationState || createAnimationState(visualElement2), visualElement2);
      }
    }
    if ($$self.$$.dirty & /*animate, visualElement*/
    5) {
      if (isAnimationControls(animate2)) {
        tick$1().then(() => animate2.subscribe(visualElement2));
      }
    }
  };
  return [visualElement2, props, animate2];
}
class AnimationState extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$a, null, safe_not_equal, { visualElement: 0, props: 1 });
  }
}
function create_fragment$9(ctx) {
  let current;
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
function instance$9($$self, $$props, $$invalidate) {
  let custom;
  let $presence;
  let $presenceContext;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props, visualElement: visualElement2, isCustom } = $$props;
  const presenceContext = getContext(PresenceContext) || PresenceContext(isCustom);
  component_subscribe($$self, presenceContext, (value) => $$invalidate(9, $presenceContext = value));
  const presence = usePresence(isCustom);
  component_subscribe($$self, presence, (value) => $$invalidate(5, $presence = value));
  const effect = (pres) => {
    var _a;
    const [isPresent2, onExitComplete] = pres;
    const animation = (_a = visualElement2.animationState) == null ? void 0 : _a.setActive(AnimationType.Exit, !isPresent2, {
      custom: ($presenceContext == null ? void 0 : $presenceContext.custom) ?? custom
    });
    !isPresent2 && (animation == null ? void 0 : animation.then(onExitComplete));
    return "";
  };
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2) $$invalidate(2, props = $$props2.props);
    if ("visualElement" in $$props2) $$invalidate(3, visualElement2 = $$props2.visualElement);
    if ("isCustom" in $$props2) $$invalidate(4, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(6, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*props*/
    4) {
      ({ custom } = props);
    }
    if ($$self.$$.dirty & /*$presence*/
    32) {
      effect($presence);
    }
  };
  return [
    presenceContext,
    presence,
    props,
    visualElement2,
    isCustom,
    $presence,
    $$scope,
    slots
  ];
}
class Exit extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$9, create_fragment$9, safe_not_equal, { props: 2, visualElement: 3, isCustom: 4 });
  }
}
const animations = {
  animation: AnimationState,
  exit: Exit
};
const featureBundle = {
  ...animations,
  ...gestureAnimations,
  ...drag,
  ...layoutAnimations
};
var motion = (
  //createMotionProxy(allMotionFeatures);
  /* @__PURE__ */ createMotionClass(featureBundle)
);
function create_fragment$8(ctx) {
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
    p(ctx2, [dirty]) {
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
let presenceId = 0;
function getPresenceId() {
  const id = presenceId;
  presenceId++;
  return id;
}
function newChildrenMap() {
  return /* @__PURE__ */ new Map();
}
function instance$8($$self, $$props, $$invalidate) {
  let refresh;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { isPresent: isPresent2, onExitComplete = void 0, initial, custom = void 0, presenceAffectsLayout, isCustom } = $$props;
  const presenceChildren = new newChildrenMap();
  const id = getPresenceId();
  const memoContext = () => {
    return {
      id,
      initial,
      isPresent: isPresent2,
      custom,
      onExitComplete: (childId) => {
        presenceChildren.set(childId, true);
        let allComplete = true;
        presenceChildren.forEach((isComplete) => {
          if (!isComplete) allComplete = false;
        });
        allComplete && (onExitComplete == null ? void 0 : onExitComplete());
      },
      register: (childId) => {
        presenceChildren.set(childId, false);
        return () => presenceChildren.delete(childId);
      }
    };
  };
  let context = PresenceContext();
  afterUpdate(() => {
    if (presenceAffectsLayout) {
      context.set(memoContext());
    }
  });
  const keyset = () => {
    presenceChildren.forEach((_2, key) => presenceChildren.set(key, false));
  };
  setContext(PresenceContext, context);
  setDomContext("Presence", isCustom, context);
  $$self.$$set = ($$props2) => {
    if ("isPresent" in $$props2) $$invalidate(0, isPresent2 = $$props2.isPresent);
    if ("onExitComplete" in $$props2) $$invalidate(1, onExitComplete = $$props2.onExitComplete);
    if ("initial" in $$props2) $$invalidate(2, initial = $$props2.initial);
    if ("custom" in $$props2) $$invalidate(3, custom = $$props2.custom);
    if ("presenceAffectsLayout" in $$props2) $$invalidate(4, presenceAffectsLayout = $$props2.presenceAffectsLayout);
    if ("isCustom" in $$props2) $$invalidate(5, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*presenceAffectsLayout, isPresent*/
    17) {
      $$invalidate(6, refresh = presenceAffectsLayout ? void 0 : isPresent2);
    }
    if ($$self.$$.dirty & /*refresh*/
    64) {
      context.set(memoContext());
    }
    if ($$self.$$.dirty & /*isPresent*/
    1) {
      keyset();
    }
    if ($$self.$$.dirty & /*isPresent, onExitComplete*/
    3) {
      tick$1().then(() => {
        !isPresent2 && !presenceChildren.size && (onExitComplete == null ? void 0 : onExitComplete());
      });
    }
  };
  return [
    isPresent2,
    onExitComplete,
    initial,
    custom,
    presenceAffectsLayout,
    isCustom,
    refresh,
    $$scope,
    slots
  ];
}
class PresenceChild extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, {
      isPresent: 0,
      onExitComplete: 1,
      initial: 2,
      custom: 3,
      presenceAffectsLayout: 4,
      isCustom: 5
    });
  }
}
const { Map: Map_1 } = globals;
function get_each_context$2(ctx, list2, i2) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list2[i2];
  return child_ctx;
}
const get_default_slot_changes = (dirty) => ({ item: dirty & /*childrenToRender*/
16 });
const get_default_slot_context = (ctx) => ({ item: (
  /*child*/
  ctx[22].item
) });
function create_default_slot$5(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[17].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[18],
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
        if (default_slot.p && (!current || dirty & /*$$scope, childrenToRender*/
        262160)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[18],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[18]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[18],
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
function create_each_block$2(key_1, ctx) {
  let first;
  let presencechild;
  let current;
  presencechild = new PresenceChild({
    props: {
      isPresent: (
        /*child*/
        ctx[22].present
      ),
      initial: (
        /*initial*/
        ctx[1] ? void 0 : false
      ),
      custom: (
        /*child*/
        ctx[22].onExit ? (
          /*custom*/
          ctx[0]
        ) : void 0
      ),
      presenceAffectsLayout: (
        /*presenceAffectsLayout*/
        ctx[2]
      ),
      onExitComplete: (
        /*child*/
        ctx[22].onExit
      ),
      isCustom: (
        /*isCustom*/
        ctx[3]
      ),
      $$slots: { default: [create_default_slot$5] },
      $$scope: { ctx }
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(presencechild.$$.fragment);
      this.h();
    },
    l(nodes) {
      first = empty();
      claim_component(presencechild.$$.fragment, nodes);
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      mount_component(presencechild, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const presencechild_changes = {};
      if (dirty & /*childrenToRender*/
      16) presencechild_changes.isPresent = /*child*/
      ctx[22].present;
      if (dirty & /*initial*/
      2) presencechild_changes.initial = /*initial*/
      ctx[1] ? void 0 : false;
      if (dirty & /*childrenToRender, custom*/
      17) presencechild_changes.custom = /*child*/
      ctx[22].onExit ? (
        /*custom*/
        ctx[0]
      ) : void 0;
      if (dirty & /*presenceAffectsLayout*/
      4) presencechild_changes.presenceAffectsLayout = /*presenceAffectsLayout*/
      ctx[2];
      if (dirty & /*childrenToRender*/
      16) presencechild_changes.onExitComplete = /*child*/
      ctx[22].onExit;
      if (dirty & /*isCustom*/
      8) presencechild_changes.isCustom = /*isCustom*/
      ctx[3];
      if (dirty & /*$$scope, childrenToRender*/
      262160) {
        presencechild_changes.$$scope = { dirty, ctx };
      }
      presencechild.$set(presencechild_changes);
    },
    i(local) {
      if (current) return;
      transition_in(presencechild.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(presencechild.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(first);
      }
      destroy_component(presencechild, detaching);
    }
  };
}
function create_fragment$7(ctx) {
  let each_blocks = [];
  let each_1_lookup = new Map_1();
  let each_1_anchor;
  let current;
  let each_value = ensure_array_like(
    /*childrenToRender*/
    ctx[4]
  );
  const get_key = (ctx2) => getChildKey(
    /*child*/
    ctx2[22]
  );
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    let child_ctx = get_each_context$2(ctx, each_value, i2);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i2] = create_each_block$2(key, child_ctx));
  }
  return {
    c() {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(target, anchor);
        }
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*childrenToRender, initial, undefined, custom, presenceAffectsLayout, isCustom, $$scope*/
      262175) {
        each_value = ensure_array_like(
          /*childrenToRender*/
          ctx2[4]
        );
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$2, each_1_anchor, get_each_context$2);
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(each_1_anchor);
      }
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].d(detaching);
      }
    }
  };
}
function getChildKey(child) {
  return child.key || "";
}
function instance$7($$self, $$props, $$invalidate) {
  let isl;
  let forceRender;
  let $layoutContext;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { list: list2 = void 0, custom = void 0, initial = true, onExitComplete = void 0, exitBeforeEnter = void 0, presenceAffectsLayout = true, show = void 0, isCustom = false } = $$props;
  let _list = list2 !== void 0 ? list2 : show ? [{ key: 1 }] : [];
  const layoutContext = getContext(SharedLayoutContext) || SharedLayoutContext(isCustom);
  component_subscribe($$self, layoutContext, (value) => $$invalidate(16, $layoutContext = value));
  let isInitialRender = true;
  let filteredChildren = _list;
  let presentChildren = filteredChildren;
  let allChildren = /* @__PURE__ */ new Map();
  let exiting = /* @__PURE__ */ new Set();
  const updateChildLookup = (children2, allChild) => {
    children2.forEach((child) => {
      const key = getChildKey(child);
      allChild.set(key, child);
    });
  };
  let childrenToRender = [...filteredChildren.map((v2) => ({ present: true, item: v2, key: v2.key }))];
  $$self.$$set = ($$props2) => {
    if ("list" in $$props2) $$invalidate(6, list2 = $$props2.list);
    if ("custom" in $$props2) $$invalidate(0, custom = $$props2.custom);
    if ("initial" in $$props2) $$invalidate(1, initial = $$props2.initial);
    if ("onExitComplete" in $$props2) $$invalidate(7, onExitComplete = $$props2.onExitComplete);
    if ("exitBeforeEnter" in $$props2) $$invalidate(8, exitBeforeEnter = $$props2.exitBeforeEnter);
    if ("presenceAffectsLayout" in $$props2) $$invalidate(2, presenceAffectsLayout = $$props2.presenceAffectsLayout);
    if ("show" in $$props2) $$invalidate(9, show = $$props2.show);
    if ("isCustom" in $$props2) $$invalidate(3, isCustom = $$props2.isCustom);
    if ("$$scope" in $$props2) $$invalidate(18, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*list, show*/
    576) {
      $$invalidate(10, _list = list2 !== void 0 ? list2 : show ? [{ key: 1 }] : []);
    }
    if ($$self.$$.dirty & /*$layoutContext*/
    65536) {
      $$invalidate(15, isl = isSharedLayout($layoutContext));
    }
    if ($$self.$$.dirty & /*isl, $layoutContext, _list*/
    99328) {
      $$invalidate(14, forceRender = () => {
        if (isl) {
          $layoutContext.forceUpdate();
        }
        $$invalidate(10, _list = [..._list]);
      });
    }
    if ($$self.$$.dirty & /*_list*/
    1024) {
      $$invalidate(12, filteredChildren = _list);
    }
    if ($$self.$$.dirty & /*filteredChildren*/
    4096) {
      updateChildLookup(filteredChildren, allChildren);
    }
    if ($$self.$$.dirty & /*isInitialRender, filteredChildren, presentChildren, exitBeforeEnter, forceRender, onExitComplete, childrenToRender*/
    31120) {
      if (!isInitialRender) {
        $$invalidate(4, childrenToRender = [...filteredChildren.map((v2) => ({ present: true, item: v2, key: v2.key }))]);
        const presentKeys = presentChildren.map(getChildKey);
        const targetKeys = filteredChildren.map(getChildKey);
        const numPresent = presentKeys.length;
        for (let i2 = 0; i2 < numPresent; i2++) {
          const key = presentKeys[i2];
          if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
          } else {
            exiting.delete(key);
          }
        }
        if (exitBeforeEnter && exiting.size) {
          $$invalidate(4, childrenToRender = []);
        }
        exiting.forEach((key) => {
          if (targetKeys.indexOf(key) !== -1) return;
          const child = allChildren.get(key);
          if (!child) return;
          const insertionIndex = presentKeys.indexOf(key);
          const onExit = () => {
            allChildren.delete(key);
            exiting.delete(key);
            const removeIndex = presentChildren.findIndex((presentChild) => presentChild.key === key);
            if (removeIndex < 0) {
              return;
            }
            presentChildren.splice(removeIndex, 1);
            if (!exiting.size) {
              $$invalidate(13, presentChildren = [...filteredChildren]);
              forceRender();
              onExitComplete && onExitComplete();
            }
          };
          childrenToRender.splice(insertionIndex, 0, {
            present: false,
            item: child,
            key: getChildKey(child),
            onExit
          });
        });
        $$invalidate(13, presentChildren = childrenToRender);
      } else {
        $$invalidate(11, isInitialRender = false);
      }
    }
  };
  return [
    custom,
    initial,
    presenceAffectsLayout,
    isCustom,
    childrenToRender,
    layoutContext,
    list2,
    onExitComplete,
    exitBeforeEnter,
    show,
    _list,
    isInitialRender,
    filteredChildren,
    presentChildren,
    forceRender,
    isl,
    $layoutContext,
    slots,
    $$scope
  ];
}
class AnimatePresence extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      list: 6,
      custom: 0,
      initial: 1,
      onExitComplete: 7,
      exitBeforeEnter: 8,
      presenceAffectsLayout: 2,
      show: 9,
      isCustom: 3
    });
  }
}
function run(fn) {
  return fn();
}
function run_all(fns) {
  fns.forEach(run);
}
const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      update(component.$$);
    }
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i2 = 0; i2 < render_callbacks.length; i2 += 1) {
      const callback = render_callbacks[i2];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const defaultOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
  unobserveOnEnter: false
};
const createEvent = (name, detail) => new CustomEvent(name, { detail });
function inview(node, options = {}) {
  const { root, rootMargin, threshold, unobserveOnEnter } = Object.assign(Object.assign({}, defaultOptions), options);
  let prevPos = {
    x: void 0,
    y: void 0
  };
  let scrollDirection = {
    vertical: void 0,
    horizontal: void 0
  };
  if (typeof IntersectionObserver !== "undefined" && node) {
    const observer = new IntersectionObserver((entries, _observer) => {
      entries.forEach((singleEntry) => {
        if (prevPos.y > singleEntry.boundingClientRect.y) {
          scrollDirection.vertical = "up";
        } else {
          scrollDirection.vertical = "down";
        }
        if (prevPos.x > singleEntry.boundingClientRect.x) {
          scrollDirection.horizontal = "left";
        } else {
          scrollDirection.horizontal = "right";
        }
        prevPos = {
          y: singleEntry.boundingClientRect.y,
          x: singleEntry.boundingClientRect.x
        };
        const detail = {
          inView: singleEntry.isIntersecting,
          entry: singleEntry,
          scrollDirection,
          node,
          observer: _observer
        };
        node.dispatchEvent(createEvent("inview_change", detail));
        node.dispatchEvent(createEvent("change", detail));
        if (singleEntry.isIntersecting) {
          node.dispatchEvent(createEvent("inview_enter", detail));
          node.dispatchEvent(createEvent("enter", detail));
          unobserveOnEnter && _observer.unobserve(node);
        } else {
          node.dispatchEvent(createEvent("inview_leave", detail));
          node.dispatchEvent(createEvent("leave", detail));
        }
      });
    }, {
      root,
      rootMargin,
      threshold
    });
    tick().then(() => {
      node.dispatchEvent(createEvent("inview_init", { observer, node }));
      node.dispatchEvent(
        //@ts-expect-error only for backward compatibility
        createEvent("init", { observer, node })
      );
    });
    observer.observe(node);
    return {
      destroy() {
        observer.unobserve(node);
      }
    };
  }
}
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text("Default");
    },
    l(nodes) {
      t = claim_text(nodes, "Default");
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
function create_default_slot_1$1(ctx) {
  let div;
  let div_class_value;
  let inview_action;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[12],
    null
  );
  const default_slot_or_fallback = default_slot || fallback_block();
  return {
    c() {
      div = element("div");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (default_slot_or_fallback) default_slot_or_fallback.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = cn(
        /*_class*/
        ctx[5]
      ));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          action_destroyer(inview_action = inview.call(null, div, {
            rootMargin: (
              /*inViewMargin*/
              ctx[2]
            ),
            unobserveOnEnter: (
              /*once*/
              ctx[4]
            )
          })),
          action_destroyer(
            /*motion*/
            ctx[14].call(null, div)
          ),
          listen(
            div,
            "inview_change",
            /*inview_change_handler*/
            ctx[11]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        4096)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[12],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[12]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[12],
              dirty,
              null
            ),
            null
          );
        }
      }
      if (!current || dirty & /*_class*/
      32 && div_class_value !== (div_class_value = cn(
        /*_class*/
        ctx2[5]
      ))) {
        attr(div, "class", div_class_value);
      }
      if (inview_action && is_function(inview_action.update) && dirty & /*inViewMargin, once*/
      20) inview_action.update.call(null, {
        rootMargin: (
          /*inViewMargin*/
          ctx2[2]
        ),
        unobserveOnEnter: (
          /*once*/
          ctx2[4]
        )
      });
    },
    i(local) {
      if (current) return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all$1(dispose);
    }
  };
}
function create_default_slot$4(ctx) {
  let motion_1;
  let current;
  motion_1 = new motion({
    props: {
      initial: "hidden",
      animate: (
        /*isInView*/
        ctx[6]
      ),
      exit: "hidden",
      variants: (
        /*defaultVariants*/
        ctx[7]
      ),
      transition: {
        delay: 0.04 + /*delay*/
        ctx[1],
        duration: (
          /*duration*/
          ctx[0]
        ),
        ease: "easeOut"
      },
      $$slots: {
        default: [
          create_default_slot_1$1,
          ({ motion: motion2 }) => ({ 14: motion2 }),
          ({ motion: motion2 }) => motion2 ? 16384 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(motion_1.$$.fragment);
    },
    l(nodes) {
      claim_component(motion_1.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(motion_1, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const motion_1_changes = {};
      if (dirty & /*isInView*/
      64) motion_1_changes.animate = /*isInView*/
      ctx2[6];
      if (dirty & /*delay, duration*/
      3) motion_1_changes.transition = {
        delay: 0.04 + /*delay*/
        ctx2[1],
        duration: (
          /*duration*/
          ctx2[0]
        ),
        ease: "easeOut"
      };
      if (dirty & /*$$scope, _class, inViewMargin, once, isInView*/
      4212) {
        motion_1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      motion_1.$set(motion_1_changes);
    },
    i(local) {
      if (current) return;
      transition_in(motion_1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(motion_1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(motion_1, detaching);
    }
  };
}
function create_fragment$6(ctx) {
  let animatepresence;
  let current;
  animatepresence = new AnimatePresence({
    props: {
      list: [{ key: (
        /*id*/
        ctx[3]
      ) }],
      $$slots: {
        default: [
          create_default_slot$4,
          ({ item }) => ({ 13: item }),
          ({ item }) => item ? 8192 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(animatepresence.$$.fragment);
    },
    l(nodes) {
      claim_component(animatepresence.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(animatepresence, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const animatepresence_changes = {};
      if (dirty & /*id*/
      8) animatepresence_changes.list = [{ key: (
        /*id*/
        ctx2[3]
      ) }];
      if (dirty & /*$$scope, isInView, delay, duration, _class, inViewMargin, once*/
      4215) {
        animatepresence_changes.$$scope = { dirty, ctx: ctx2 };
      }
      animatepresence.$set(animatepresence_changes);
    },
    i(local) {
      if (current) return;
      transition_in(animatepresence.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(animatepresence.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(animatepresence, detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { duration = 0.4 } = $$props;
  let { delay = 0 } = $$props;
  let { yOffset = 8 } = $$props;
  let { inViewMargin = "-20px" } = $$props;
  let { blur = "2px" } = $$props;
  let { id = crypto.randomUUID().slice(0, 6) } = $$props;
  let { once = true } = $$props;
  let defaultVariants = {
    hidden: {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blur})`
    },
    visible: { opacity: 1, y: 0, filter: `blur(0px)` }
  };
  let isInView = "hidden";
  let { class: _class = "" } = $$props;
  const inview_change_handler = ({ detail }) => {
    $$invalidate(6, isInView = detail.inView ? "visible" : "hidden");
  };
  $$self.$$set = ($$props2) => {
    if ("duration" in $$props2) $$invalidate(0, duration = $$props2.duration);
    if ("delay" in $$props2) $$invalidate(1, delay = $$props2.delay);
    if ("yOffset" in $$props2) $$invalidate(8, yOffset = $$props2.yOffset);
    if ("inViewMargin" in $$props2) $$invalidate(2, inViewMargin = $$props2.inViewMargin);
    if ("blur" in $$props2) $$invalidate(9, blur = $$props2.blur);
    if ("id" in $$props2) $$invalidate(3, id = $$props2.id);
    if ("once" in $$props2) $$invalidate(4, once = $$props2.once);
    if ("class" in $$props2) $$invalidate(5, _class = $$props2.class);
    if ("$$scope" in $$props2) $$invalidate(12, $$scope = $$props2.$$scope);
  };
  return [
    duration,
    delay,
    inViewMargin,
    id,
    once,
    _class,
    isInView,
    defaultVariants,
    yOffset,
    blur,
    slots,
    inview_change_handler,
    $$scope
  ];
}
class BlurFade extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, {
      duration: 0,
      delay: 1,
      yOffset: 8,
      inViewMargin: 2,
      blur: 9,
      id: 3,
      once: 4,
      class: 5
    });
  }
}
const badgeVariants = ce({
  base: "inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
      secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function create_dynamic_element$1(ctx) {
  let svelte_element;
  let svelte_element_class_value;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[5].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[4],
    null
  );
  let svelte_element_levels = [
    { href: (
      /*href*/
      ctx[1]
    ) },
    {
      class: svelte_element_class_value = cn(badgeVariants({
        variant: (
          /*variant*/
          ctx[2]
        ),
        className: (
          /*className*/
          ctx[0]
        )
      }))
    },
    /*$$restProps*/
    ctx[3]
  ];
  let svelte_element_data = {};
  for (let i2 = 0; i2 < svelte_element_levels.length; i2 += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i2]);
  }
  return {
    c() {
      svelte_element = element(
        /*href*/
        ctx[1] ? "a" : "span"
      );
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      svelte_element = claim_element(
        nodes,
        /*href*/
        ((ctx[1] ? "a" : "span") || "null").toUpperCase(),
        { href: true, class: true }
      );
      var svelte_element_nodes = children(svelte_element);
      if (default_slot) default_slot.l(svelte_element_nodes);
      svelte_element_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_dynamic_element_data(
        /*href*/
        ctx[1] ? "a" : "span"
      )(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
      if (default_slot) {
        default_slot.m(svelte_element, null);
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
      set_dynamic_element_data(
        /*href*/
        ctx2[1] ? "a" : "span"
      )(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [
        (!current || dirty & /*href*/
        2) && { href: (
          /*href*/
          ctx2[1]
        ) },
        (!current || dirty & /*variant, className*/
        5 && svelte_element_class_value !== (svelte_element_class_value = cn(badgeVariants({
          variant: (
            /*variant*/
            ctx2[2]
          ),
          className: (
            /*className*/
            ctx2[0]
          )
        })))) && { class: svelte_element_class_value },
        dirty & /*$$restProps*/
        8 && /*$$restProps*/
        ctx2[3]
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
    }
  };
}
function create_fragment$5(ctx) {
  let previous_tag = (
    /*href*/
    ctx[1] ? "a" : "span"
  );
  let svelte_element_anchor;
  let current;
  let svelte_element = (
    /*href*/
    (ctx[1] ? "a" : "span") && create_dynamic_element$1(ctx)
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
    p(ctx2, [dirty]) {
      if (
        /*href*/
        ctx2[1] ? "a" : "span"
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element$1(ctx2);
          previous_tag = /*href*/
          ctx2[1] ? "a" : "span";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*href*/
          ctx2[1] ? "a" : "span"
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element$1(ctx2);
          previous_tag = /*href*/
          ctx2[1] ? "a" : "span";
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*href*/
        ctx2[1] ? "a" : "span";
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
function instance$5($$self, $$props, $$invalidate) {
  const omit_props_names = ["class", "href", "variant"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { class: className = void 0 } = $$props;
  let { href = void 0 } = $$props;
  let { variant = "default" } = $$props;
  $$self.$$set = ($$new_props) => {
    $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
    $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("class" in $$new_props) $$invalidate(0, className = $$new_props.class);
    if ("href" in $$new_props) $$invalidate(1, href = $$new_props.href);
    if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
    if ("$$scope" in $$new_props) $$invalidate(4, $$scope = $$new_props.$$scope);
  };
  return [className, href, variant, $$restProps, $$scope, slots];
}
class Badge extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { class: 0, href: 1, variant: 2 });
  }
}
function _getDefaults() {
  return {
    async: false,
    breaks: false,
    extensions: null,
    gfm: true,
    hooks: null,
    pedantic: false,
    renderer: null,
    silent: false,
    tokenizer: null,
    walkTokens: null
  };
}
let _defaults = _getDefaults();
function changeDefaults(newDefaults) {
  _defaults = newDefaults;
}
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, "g");
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape$1(html2, encode) {
  if (encode) {
    if (escapeTest.test(html2)) {
      return html2.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html2)) {
      return html2.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html2;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html2) {
  return html2.replace(unescapeTest, (_2, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  let source = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      let valSource = typeof val === "string" ? val : val.source;
      valSource = valSource.replace(caret, "$1");
      source = source.replace(name, valSource);
      return obj;
    },
    getRegex: () => {
      return new RegExp(source, opt);
    }
  };
  return obj;
}
function cleanUrl(href) {
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
const noopTest = { exec: () => null };
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false;
    let curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i2 = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (count) {
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count)
        cells.push("");
    }
  }
  for (; i2 < cells.length; i2++) {
    cells[i2] = cells[i2].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c2, invert) {
  const l2 = str.length;
  if (l2 === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l2) {
    const currChar = str.charAt(l2 - suffLen - 1);
    if (currChar === c2 && true) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l2 - suffLen);
}
function findClosingBracket(str, b2) {
  if (str.indexOf(b2[1]) === -1) {
    return -1;
  }
  let level = 0;
  for (let i2 = 0; i2 < str.length; i2++) {
    if (str[i2] === "\\") {
      i2++;
    } else if (str[i2] === b2[0]) {
      level++;
    } else if (str[i2] === b2[1]) {
      level--;
      if (level < 0) {
        return i2;
      }
    }
  }
  return -1;
}
function outputLink(cap, link2, raw, lexer) {
  const href = link2.href;
  const title = link2.title ? escape$1(link2.title) : null;
  const text2 = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text: text2,
      tokens: lexer.inlineTokens(text2)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape$1(text2)
  };
}
function indentCodeCompensation(raw, text2) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text2;
  }
  const indentToCode = matchIndentToCode[1];
  return text2.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class _Tokenizer {
  // set by the lexer
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "rules");
    // set by the lexer
    __publicField(this, "lexer");
    this.options = options || _defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text2 = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text2, "\n") : text2
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text2 = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : cap[2],
        text: text2
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text2 = cap[2].trim();
      if (/#$/.test(text2)) {
        const trimmed = rtrim(text2, "#");
        if (this.options.pedantic) {
          text2 = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text2 = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text: text2,
        tokens: this.lexer.inline(text2)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: rtrim(cap[0], "\n")
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      let lines = rtrim(cap[0], "\n").split("\n");
      let raw = "";
      let text2 = "";
      const tokens = [];
      while (lines.length > 0) {
        let inBlockquote = false;
        const currentLines = [];
        let i2;
        for (i2 = 0; i2 < lines.length; i2++) {
          if (/^ {0,3}>/.test(lines[i2])) {
            currentLines.push(lines[i2]);
            inBlockquote = true;
          } else if (!inBlockquote) {
            currentLines.push(lines[i2]);
          } else {
            break;
          }
        }
        lines = lines.slice(i2);
        const currentRaw = currentLines.join("\n");
        const currentText = currentRaw.replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g, "\n    $1").replace(/^ {0,3}>[ \t]?/gm, "");
        raw = raw ? `${raw}
${currentRaw}` : currentRaw;
        text2 = text2 ? `${text2}
${currentText}` : currentText;
        const top = this.lexer.state.top;
        this.lexer.state.top = true;
        this.lexer.blockTokens(currentText, tokens, true);
        this.lexer.state.top = top;
        if (lines.length === 0) {
          break;
        }
        const lastToken = tokens[tokens.length - 1];
        if ((lastToken == null ? void 0 : lastToken.type) === "code") {
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "blockquote") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.blockquote(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - oldToken.raw.length) + newToken.raw;
          text2 = text2.substring(0, text2.length - oldToken.text.length) + newToken.text;
          break;
        } else if ((lastToken == null ? void 0 : lastToken.type) === "list") {
          const oldToken = lastToken;
          const newText = oldToken.raw + "\n" + lines.join("\n");
          const newToken = this.list(newText);
          tokens[tokens.length - 1] = newToken;
          raw = raw.substring(0, raw.length - lastToken.raw.length) + newToken.raw;
          text2 = text2.substring(0, text2.length - oldToken.raw.length) + newToken.raw;
          lines = newText.substring(tokens[tokens.length - 1].raw.length).split("\n");
          continue;
        }
      }
      return {
        type: "blockquote",
        raw,
        tokens,
        text: text2
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list2 = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      let endsWithBlankLine = false;
      while (src) {
        let endEarly = false;
        let raw = "";
        let itemContents = "";
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        let line = cap[2].split("\n", 1)[0].replace(/^\t+/, (t) => " ".repeat(3 * t.length));
        let nextLine = src.split("\n", 1)[0];
        let blankLine = !line.trim();
        let indent = 0;
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimStart();
        } else if (blankLine) {
          indent = cap[1].length + 1;
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        if (blankLine && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            const rawLine = src.split("\n", 1)[0];
            nextLine = rawLine;
            if (this.options.pedantic) {
              nextLine = nextLine.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(nextLine)) {
              break;
            }
            if (headingBeginRegex.test(nextLine)) {
              break;
            }
            if (nextBulletRegex.test(nextLine)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (nextLine.search(/[^ ]/) >= indent || !nextLine.trim()) {
              itemContents += "\n" + nextLine.slice(indent);
            } else {
              if (blankLine) {
                break;
              }
              if (line.search(/[^ ]/) >= 4) {
                break;
              }
              if (fencesBeginRegex.test(line)) {
                break;
              }
              if (headingBeginRegex.test(line)) {
                break;
              }
              if (hrRegex.test(line)) {
                break;
              }
              itemContents += "\n" + nextLine;
            }
            if (!blankLine && !nextLine.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
            line = nextLine.slice(indent);
          }
        }
        if (!list2.loose) {
          if (endsWithBlankLine) {
            list2.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        let istask = null;
        let ischecked;
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list2.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents,
          tokens: []
        });
        list2.raw += raw;
      }
      list2.items[list2.items.length - 1].raw = list2.items[list2.items.length - 1].raw.trimEnd();
      list2.items[list2.items.length - 1].text = list2.items[list2.items.length - 1].text.trimEnd();
      list2.raw = list2.raw.trimEnd();
      for (let i2 = 0; i2 < list2.items.length; i2++) {
        this.lexer.state.top = false;
        list2.items[i2].tokens = this.lexer.blockTokens(list2.items[i2].text, []);
        if (!list2.loose) {
          const spacers = list2.items[i2].tokens.filter((t) => t.type === "space");
          const hasMultipleLineBreaks = spacers.length > 0 && spacers.some((t) => /\n.*\n/.test(t.raw));
          list2.loose = hasMultipleLineBreaks;
        }
      }
      if (list2.loose) {
        for (let i2 = 0; i2 < list2.items.length; i2++) {
          list2.items[i2].loose = true;
        }
      }
      return list2;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        block: true,
        raw: cap[0],
        pre: cap[1] === "pre" || cap[1] === "script" || cap[1] === "style",
        text: cap[0]
      };
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag2 = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : cap[3];
      return {
        type: "def",
        tag: tag2,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (!cap) {
      return;
    }
    if (!/[:|]/.test(cap[2])) {
      return;
    }
    const headers = splitCells(cap[1]);
    const aligns = cap[2].replace(/^\||\| *$/g, "").split("|");
    const rows = cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : [];
    const item = {
      type: "table",
      raw: cap[0],
      header: [],
      align: [],
      rows: []
    };
    if (headers.length !== aligns.length) {
      return;
    }
    for (const align of aligns) {
      if (/^ *-+: *$/.test(align)) {
        item.align.push("right");
      } else if (/^ *:-+: *$/.test(align)) {
        item.align.push("center");
      } else if (/^ *:-+ *$/.test(align)) {
        item.align.push("left");
      } else {
        item.align.push(null);
      }
    }
    for (let i2 = 0; i2 < headers.length; i2++) {
      item.header.push({
        text: headers[i2],
        tokens: this.lexer.inline(headers[i2]),
        header: true,
        align: item.align[i2]
      });
    }
    for (const row of rows) {
      item.rows.push(splitCells(row, item.header.length).map((cell, i2) => {
        return {
          text: cell,
          tokens: this.lexer.inline(cell),
          header: false,
          align: item.align[i2]
        };
      }));
    }
    return item;
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text2 = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text: text2,
        tokens: this.lexer.inline(text2)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape$1(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        block: false,
        text: cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link2 = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link2) {
          href = link2[1];
          title = link2[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline.anyPunctuation, "$1") : href,
        title: title ? title.replace(this.rules.inline.anyPunctuation, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      const linkString = (cap[2] || cap[1]).replace(/\s+/g, " ");
      const link2 = links[linkString.toLowerCase()];
      if (!link2) {
        const text2 = cap[0].charAt(0);
        return {
          type: "text",
          raw: text2,
          text: text2
        };
      }
      return outputLink(cap, link2, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrongLDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || !prevChar || this.rules.inline.punctuation.exec(prevChar)) {
      const lLength = [...match[0]].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = [...rDelim].length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const lastCharLength = [...match[0]][0].length;
        const raw = src.slice(0, lLength + match.index + lastCharLength + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text3 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text3,
            tokens: this.lexer.inlineTokens(text3)
          };
        }
        const text2 = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text: text2,
          tokens: this.lexer.inlineTokens(text2)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text2 = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text2);
      const hasSpaceCharsOnBothEnds = /^ /.test(text2) && / $/.test(text2);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text2 = text2.substring(1, text2.length - 1);
      }
      text2 = escape$1(text2, true);
      return {
        type: "codespan",
        raw: cap[0],
        text: text2
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = escape$1(cap[1]);
        href = "mailto:" + text2;
      } else {
        text2 = escape$1(cap[1]);
        href = text2;
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  url(src) {
    var _a;
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text2, href;
      if (cap[2] === "@") {
        text2 = escape$1(cap[0]);
        href = "mailto:" + text2;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = ((_a = this.rules.inline._backpedal.exec(cap[0])) == null ? void 0 : _a[0]) ?? "";
        } while (prevCapZero !== cap[0]);
        text2 = escape$1(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + cap[0];
        } else {
          href = cap[0];
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text: text2,
        href,
        tokens: [
          {
            type: "text",
            raw: text2,
            text: text2
          }
        ]
      };
    }
  }
  inlineText(src) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text2;
      if (this.lexer.state.inRawBlock) {
        text2 = cap[0];
      } else {
        text2 = escape$1(cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text: text2
      };
    }
  }
}
const newline = /^(?: *(?:\n|$))+/;
const blockCode = /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/;
const fences = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
const hr = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
const heading = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
const bullet = /(?:[*+-]|\d{1,9}[.)])/;
const lheading = edit(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, bullet).replace(/blockCode/g, / {4}/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex();
const _paragraph = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
const blockText = /^[^\n]+/;
const _blockLabel = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
const def = edit(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label", _blockLabel).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
const list = edit(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, bullet).getRegex();
const _tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
const _comment = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
const html = edit("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", "i").replace("comment", _comment).replace("tag", _tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
const paragraph = edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
const blockquote = edit(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", paragraph).getRegex();
const blockNormal = {
  blockquote,
  code: blockCode,
  def,
  fences,
  heading,
  hr,
  html,
  lheading,
  list,
  newline,
  paragraph,
  table: noopTest,
  text: blockText
};
const gfmTable = edit("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex();
const blockGfm = {
  ...blockNormal,
  table: gfmTable,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gfmTable).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", _tag).getRegex()
};
const blockPedantic = {
  ...blockNormal,
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", _comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(_paragraph).replace("hr", hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", lheading).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
};
const escape = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
const inlineCode = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
const br = /^( {2,}|\\)\n(?!\s*$)/;
const inlineText = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
const _punctuation = "\\p{P}\\p{S}";
const punctuation = edit(/^((?![*_])[\spunctuation])/, "u").replace(/punctuation/g, _punctuation).getRegex();
const blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
const emStrongLDelim = edit(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, "u").replace(/punct/g, _punctuation).getRegex();
const emStrongRDelimAst = edit("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])", "gu").replace(/punct/g, _punctuation).getRegex();
const emStrongRDelimUnd = edit("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])", "gu").replace(/punct/g, _punctuation).getRegex();
const anyPunctuation = edit(/\\([punct])/, "gu").replace(/punct/g, _punctuation).getRegex();
const autolink = edit(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
const _inlineComment = edit(_comment).replace("(?:-->|$)", "-->").getRegex();
const tag = edit("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", _inlineComment).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
const _inlineLabel = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
const link = edit(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", _inlineLabel).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
const reflink = edit(/^!?\[(label)\]\[(ref)\]/).replace("label", _inlineLabel).replace("ref", _blockLabel).getRegex();
const nolink = edit(/^!?\[(ref)\](?:\[\])?/).replace("ref", _blockLabel).getRegex();
const reflinkSearch = edit("reflink|nolink(?!\\()", "g").replace("reflink", reflink).replace("nolink", nolink).getRegex();
const inlineNormal = {
  _backpedal: noopTest,
  // only used for GFM url
  anyPunctuation,
  autolink,
  blockSkip,
  br,
  code: inlineCode,
  del: noopTest,
  emStrongLDelim,
  emStrongRDelimAst,
  emStrongRDelimUnd,
  escape,
  link,
  nolink,
  punctuation,
  reflink,
  reflinkSearch,
  tag,
  text: inlineText,
  url: noopTest
};
const inlinePedantic = {
  ...inlineNormal,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", _inlineLabel).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", _inlineLabel).getRegex()
};
const inlineGfm = {
  ...inlineNormal,
  escape: edit(escape).replace("])", "~|])").getRegex(),
  url: edit(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
  _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
};
const inlineBreaks = {
  ...inlineGfm,
  br: edit(br).replace("{2,}", "*").getRegex(),
  text: edit(inlineGfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
};
const block = {
  normal: blockNormal,
  gfm: blockGfm,
  pedantic: blockPedantic
};
const inline = {
  normal: inlineNormal,
  gfm: inlineGfm,
  breaks: inlineBreaks,
  pedantic: inlinePedantic
};
class _Lexer {
  constructor(options) {
    __publicField(this, "tokens");
    __publicField(this, "options");
    __publicField(this, "state");
    __publicField(this, "tokenizer");
    __publicField(this, "inlineQueue");
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || _defaults;
    this.options.tokenizer = this.options.tokenizer || new _Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }
  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new _Lexer(options);
    return lexer.lex(src);
  }
  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new _Lexer(options);
    return lexer.inlineTokens(src);
  }
  /**
   * Preprocessing
   */
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    for (let i2 = 0; i2 < this.inlineQueue.length; i2++) {
      const next = this.inlineQueue[i2];
      this.inlineTokens(next.src, next.tokens);
    }
    this.inlineQueue = [];
    return this.tokens;
  }
  blockTokens(src, tokens = [], lastParagraphClipped = false) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_2, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token;
    let lastToken;
    let cutSrc;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && (lastToken == null ? void 0 : lastToken.type) === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + "a".repeat(match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.anyPunctuation.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach((getStartIndex) => {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class _Renderer {
  // set by the parser
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "parser");
    this.options = options || _defaults;
  }
  space(token) {
    return "";
  }
  code({ text: text2, lang, escaped }) {
    var _a;
    const langString = (_a = (lang || "").match(/^\S*/)) == null ? void 0 : _a[0];
    const code = text2.replace(/\n$/, "") + "\n";
    if (!langString) {
      return "<pre><code>" + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="language-' + escape$1(langString) + '">' + (escaped ? code : escape$1(code, true)) + "</code></pre>\n";
  }
  blockquote({ tokens }) {
    const body = this.parser.parse(tokens);
    return `<blockquote>
${body}</blockquote>
`;
  }
  html({ text: text2 }) {
    return text2;
  }
  heading({ tokens, depth }) {
    return `<h${depth}>${this.parser.parseInline(tokens)}</h${depth}>
`;
  }
  hr(token) {
    return "<hr>\n";
  }
  list(token) {
    const ordered = token.ordered;
    const start = token.start;
    let body = "";
    for (let j2 = 0; j2 < token.items.length; j2++) {
      const item = token.items[j2];
      body += this.listitem(item);
    }
    const type = ordered ? "ol" : "ul";
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startAttr + ">\n" + body + "</" + type + ">\n";
  }
  listitem(item) {
    let itemBody = "";
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked });
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
          item.tokens[0].text = checkbox + " " + item.tokens[0].text;
          if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
            item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
          }
        } else {
          item.tokens.unshift({
            type: "text",
            raw: checkbox + " ",
            text: checkbox + " "
          });
        }
      } else {
        itemBody += checkbox + " ";
      }
    }
    itemBody += this.parser.parse(item.tokens, !!item.loose);
    return `<li>${itemBody}</li>
`;
  }
  checkbox({ checked }) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens }) {
    return `<p>${this.parser.parseInline(tokens)}</p>
`;
  }
  table(token) {
    let header = "";
    let cell = "";
    for (let j2 = 0; j2 < token.header.length; j2++) {
      cell += this.tablecell(token.header[j2]);
    }
    header += this.tablerow({ text: cell });
    let body = "";
    for (let j2 = 0; j2 < token.rows.length; j2++) {
      const row = token.rows[j2];
      cell = "";
      for (let k = 0; k < row.length; k++) {
        cell += this.tablecell(row[k]);
      }
      body += this.tablerow({ text: cell });
    }
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow({ text: text2 }) {
    return `<tr>
${text2}</tr>
`;
  }
  tablecell(token) {
    const content = this.parser.parseInline(token.tokens);
    const type = token.header ? "th" : "td";
    const tag2 = token.align ? `<${type} align="${token.align}">` : `<${type}>`;
    return tag2 + content + `</${type}>
`;
  }
  /**
   * span level renderer
   */
  strong({ tokens }) {
    return `<strong>${this.parser.parseInline(tokens)}</strong>`;
  }
  em({ tokens }) {
    return `<em>${this.parser.parseInline(tokens)}</em>`;
  }
  codespan({ text: text2 }) {
    return `<code>${text2}</code>`;
  }
  br(token) {
    return "<br>";
  }
  del({ tokens }) {
    return `<del>${this.parser.parseInline(tokens)}</del>`;
  }
  link({ href, title, tokens }) {
    const text2 = this.parser.parseInline(tokens);
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text2;
    }
    href = cleanHref;
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text2 + "</a>";
    return out;
  }
  image({ href, title, text: text2 }) {
    const cleanHref = cleanUrl(href);
    if (cleanHref === null) {
      return text2;
    }
    href = cleanHref;
    let out = `<img src="${href}" alt="${text2}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += ">";
    return out;
  }
  text(token) {
    return "tokens" in token && token.tokens ? this.parser.parseInline(token.tokens) : token.text;
  }
}
class _TextRenderer {
  // no need for block level renderers
  strong({ text: text2 }) {
    return text2;
  }
  em({ text: text2 }) {
    return text2;
  }
  codespan({ text: text2 }) {
    return text2;
  }
  del({ text: text2 }) {
    return text2;
  }
  html({ text: text2 }) {
    return text2;
  }
  text({ text: text2 }) {
    return text2;
  }
  link({ text: text2 }) {
    return "" + text2;
  }
  image({ text: text2 }) {
    return "" + text2;
  }
  br() {
    return "";
  }
}
class _Parser {
  constructor(options) {
    __publicField(this, "options");
    __publicField(this, "renderer");
    __publicField(this, "textRenderer");
    this.options = options || _defaults;
    this.options.renderer = this.options.renderer || new _Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.renderer.parser = this;
    this.textRenderer = new _TextRenderer();
  }
  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new _Parser(options);
    return parser.parse(tokens);
  }
  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new _Parser(options);
    return parser.parseInline(tokens);
  }
  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const anyToken = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const genericToken = anyToken;
        const ret = this.options.extensions.renderers[genericToken.type].call({ parser: this }, genericToken);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(genericToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "space": {
          out += this.renderer.space(token);
          continue;
        }
        case "hr": {
          out += this.renderer.hr(token);
          continue;
        }
        case "heading": {
          out += this.renderer.heading(token);
          continue;
        }
        case "code": {
          out += this.renderer.code(token);
          continue;
        }
        case "table": {
          out += this.renderer.table(token);
          continue;
        }
        case "blockquote": {
          out += this.renderer.blockquote(token);
          continue;
        }
        case "list": {
          out += this.renderer.list(token);
          continue;
        }
        case "html": {
          out += this.renderer.html(token);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(token);
          continue;
        }
        case "text": {
          let textToken = token;
          let body = this.renderer.text(textToken);
          while (i2 + 1 < tokens.length && tokens[i2 + 1].type === "text") {
            textToken = tokens[++i2];
            body += "\n" + this.renderer.text(textToken);
          }
          if (top) {
            out += this.renderer.paragraph({
              type: "paragraph",
              raw: body,
              text: body,
              tokens: [{ type: "text", raw: body, text: body }]
            });
          } else {
            out += body;
          }
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "";
    for (let i2 = 0; i2 < tokens.length; i2++) {
      const anyToken = tokens[i2];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[anyToken.type]) {
        const ret = this.options.extensions.renderers[anyToken.type].call({ parser: this }, anyToken);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(anyToken.type)) {
          out += ret || "";
          continue;
        }
      }
      const token = anyToken;
      switch (token.type) {
        case "escape": {
          out += renderer.text(token);
          break;
        }
        case "html": {
          out += renderer.html(token);
          break;
        }
        case "link": {
          out += renderer.link(token);
          break;
        }
        case "image": {
          out += renderer.image(token);
          break;
        }
        case "strong": {
          out += renderer.strong(token);
          break;
        }
        case "em": {
          out += renderer.em(token);
          break;
        }
        case "codespan": {
          out += renderer.codespan(token);
          break;
        }
        case "br": {
          out += renderer.br(token);
          break;
        }
        case "del": {
          out += renderer.del(token);
          break;
        }
        case "text": {
          out += renderer.text(token);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return "";
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
class _Hooks {
  constructor(options) {
    __publicField(this, "options");
    this.options = options || _defaults;
  }
  /**
   * Process markdown before marked
   */
  preprocess(markdown) {
    return markdown;
  }
  /**
   * Process HTML after marked is finished
   */
  postprocess(html2) {
    return html2;
  }
  /**
   * Process all tokens before walk tokens
   */
  processAllTokens(tokens) {
    return tokens;
  }
}
__publicField(_Hooks, "passThroughHooks", /* @__PURE__ */ new Set([
  "preprocess",
  "postprocess",
  "processAllTokens"
]));
class Marked {
  constructor(...args) {
    __privateAdd(this, _Marked_instances);
    __publicField(this, "defaults", _getDefaults());
    __publicField(this, "options", this.setOptions);
    __publicField(this, "parse", __privateMethod(this, _Marked_instances, parseMarkdown_fn).call(this, _Lexer.lex, _Parser.parse));
    __publicField(this, "parseInline", __privateMethod(this, _Marked_instances, parseMarkdown_fn).call(this, _Lexer.lexInline, _Parser.parseInline));
    __publicField(this, "Parser", _Parser);
    __publicField(this, "Renderer", _Renderer);
    __publicField(this, "TextRenderer", _TextRenderer);
    __publicField(this, "Lexer", _Lexer);
    __publicField(this, "Tokenizer", _Tokenizer);
    __publicField(this, "Hooks", _Hooks);
    this.use(...args);
  }
  /**
   * Run callback for every token
   */
  walkTokens(tokens, callback) {
    var _a, _b;
    let values = [];
    for (const token of tokens) {
      values = values.concat(callback.call(this, token));
      switch (token.type) {
        case "table": {
          const tableToken = token;
          for (const cell of tableToken.header) {
            values = values.concat(this.walkTokens(cell.tokens, callback));
          }
          for (const row of tableToken.rows) {
            for (const cell of row) {
              values = values.concat(this.walkTokens(cell.tokens, callback));
            }
          }
          break;
        }
        case "list": {
          const listToken = token;
          values = values.concat(this.walkTokens(listToken.items, callback));
          break;
        }
        default: {
          const genericToken = token;
          if ((_b = (_a = this.defaults.extensions) == null ? void 0 : _a.childTokens) == null ? void 0 : _b[genericToken.type]) {
            this.defaults.extensions.childTokens[genericToken.type].forEach((childTokens) => {
              const tokens2 = genericToken[childTokens].flat(Infinity);
              values = values.concat(this.walkTokens(tokens2, callback));
            });
          } else if (genericToken.tokens) {
            values = values.concat(this.walkTokens(genericToken.tokens, callback));
          }
        }
      }
    }
    return values;
  }
  use(...args) {
    const extensions = this.defaults.extensions || { renderers: {}, childTokens: {} };
    args.forEach((pack) => {
      const opts = { ...pack };
      opts.async = this.defaults.async || opts.async || false;
      if (pack.extensions) {
        pack.extensions.forEach((ext) => {
          if (!ext.name) {
            throw new Error("extension name required");
          }
          if ("renderer" in ext) {
            const prevRenderer = extensions.renderers[ext.name];
            if (prevRenderer) {
              extensions.renderers[ext.name] = function(...args2) {
                let ret = ext.renderer.apply(this, args2);
                if (ret === false) {
                  ret = prevRenderer.apply(this, args2);
                }
                return ret;
              };
            } else {
              extensions.renderers[ext.name] = ext.renderer;
            }
          }
          if ("tokenizer" in ext) {
            if (!ext.level || ext.level !== "block" && ext.level !== "inline") {
              throw new Error("extension level must be 'block' or 'inline'");
            }
            const extLevel = extensions[ext.level];
            if (extLevel) {
              extLevel.unshift(ext.tokenizer);
            } else {
              extensions[ext.level] = [ext.tokenizer];
            }
            if (ext.start) {
              if (ext.level === "block") {
                if (extensions.startBlock) {
                  extensions.startBlock.push(ext.start);
                } else {
                  extensions.startBlock = [ext.start];
                }
              } else if (ext.level === "inline") {
                if (extensions.startInline) {
                  extensions.startInline.push(ext.start);
                } else {
                  extensions.startInline = [ext.start];
                }
              }
            }
          }
          if ("childTokens" in ext && ext.childTokens) {
            extensions.childTokens[ext.name] = ext.childTokens;
          }
        });
        opts.extensions = extensions;
      }
      if (pack.renderer) {
        const renderer = this.defaults.renderer || new _Renderer(this.defaults);
        for (const prop in pack.renderer) {
          if (!(prop in renderer)) {
            throw new Error(`renderer '${prop}' does not exist`);
          }
          if (["options", "parser"].includes(prop)) {
            continue;
          }
          const rendererProp = prop;
          let rendererFunc = pack.renderer[rendererProp];
          const prevRenderer = renderer[rendererProp];
          renderer[rendererProp] = (...args2) => {
            if (!pack.useNewRenderer) {
              rendererFunc = __privateMethod(this, _Marked_instances, convertRendererFunction_fn).call(this, rendererFunc, rendererProp, renderer);
            }
            let ret = rendererFunc.apply(renderer, args2);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args2);
            }
            return ret || "";
          };
        }
        opts.renderer = renderer;
      }
      if (pack.tokenizer) {
        const tokenizer = this.defaults.tokenizer || new _Tokenizer(this.defaults);
        for (const prop in pack.tokenizer) {
          if (!(prop in tokenizer)) {
            throw new Error(`tokenizer '${prop}' does not exist`);
          }
          if (["options", "rules", "lexer"].includes(prop)) {
            continue;
          }
          const tokenizerProp = prop;
          const tokenizerFunc = pack.tokenizer[tokenizerProp];
          const prevTokenizer = tokenizer[tokenizerProp];
          tokenizer[tokenizerProp] = (...args2) => {
            let ret = tokenizerFunc.apply(tokenizer, args2);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args2);
            }
            return ret;
          };
        }
        opts.tokenizer = tokenizer;
      }
      if (pack.hooks) {
        const hooks = this.defaults.hooks || new _Hooks();
        for (const prop in pack.hooks) {
          if (!(prop in hooks)) {
            throw new Error(`hook '${prop}' does not exist`);
          }
          if (prop === "options") {
            continue;
          }
          const hooksProp = prop;
          const hooksFunc = pack.hooks[hooksProp];
          const prevHook = hooks[hooksProp];
          if (_Hooks.passThroughHooks.has(prop)) {
            hooks[hooksProp] = (arg) => {
              if (this.defaults.async) {
                return Promise.resolve(hooksFunc.call(hooks, arg)).then((ret2) => {
                  return prevHook.call(hooks, ret2);
                });
              }
              const ret = hooksFunc.call(hooks, arg);
              return prevHook.call(hooks, ret);
            };
          } else {
            hooks[hooksProp] = (...args2) => {
              let ret = hooksFunc.apply(hooks, args2);
              if (ret === false) {
                ret = prevHook.apply(hooks, args2);
              }
              return ret;
            };
          }
        }
        opts.hooks = hooks;
      }
      if (pack.walkTokens) {
        const walkTokens = this.defaults.walkTokens;
        const packWalktokens = pack.walkTokens;
        opts.walkTokens = function(token) {
          let values = [];
          values.push(packWalktokens.call(this, token));
          if (walkTokens) {
            values = values.concat(walkTokens.call(this, token));
          }
          return values;
        };
      }
      this.defaults = { ...this.defaults, ...opts };
    });
    return this;
  }
  setOptions(opt) {
    this.defaults = { ...this.defaults, ...opt };
    return this;
  }
  lexer(src, options) {
    return _Lexer.lex(src, options ?? this.defaults);
  }
  parser(tokens, options) {
    return _Parser.parse(tokens, options ?? this.defaults);
  }
}
_Marked_instances = new WeakSet();
// TODO: Remove this in next major release
convertRendererFunction_fn = function(func, prop, renderer) {
  switch (prop) {
    case "heading":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, renderer.parser.parseInline(token.tokens), token.depth, unescape(renderer.parser.parseInline(token.tokens, renderer.parser.textRenderer)));
      };
    case "code":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.text, token.lang, !!token.escaped);
      };
    case "table":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        let header = "";
        let cell = "";
        for (let j2 = 0; j2 < token.header.length; j2++) {
          cell += this.tablecell({
            text: token.header[j2].text,
            tokens: token.header[j2].tokens,
            header: true,
            align: token.align[j2]
          });
        }
        header += this.tablerow({ text: cell });
        let body = "";
        for (let j2 = 0; j2 < token.rows.length; j2++) {
          const row = token.rows[j2];
          cell = "";
          for (let k = 0; k < row.length; k++) {
            cell += this.tablecell({
              text: row[k].text,
              tokens: row[k].tokens,
              header: false,
              align: token.align[k]
            });
          }
          body += this.tablerow({ text: cell });
        }
        return func.call(this, header, body);
      };
    case "blockquote":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        const body = this.parser.parse(token.tokens);
        return func.call(this, body);
      };
    case "list":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        const ordered = token.ordered;
        const start = token.start;
        const loose = token.loose;
        let body = "";
        for (let j2 = 0; j2 < token.items.length; j2++) {
          const item = token.items[j2];
          const checked = item.checked;
          const task = item.task;
          let itemBody = "";
          if (item.task) {
            const checkbox = this.checkbox({ checked: !!checked });
            if (loose) {
              if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                  item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                }
              } else {
                item.tokens.unshift({
                  type: "text",
                  text: checkbox + " "
                });
              }
            } else {
              itemBody += checkbox + " ";
            }
          }
          itemBody += this.parser.parse(item.tokens, loose);
          body += this.listitem({
            type: "list_item",
            raw: itemBody,
            text: itemBody,
            task,
            checked: !!checked,
            loose,
            tokens: item.tokens
          });
        }
        return func.call(this, body, ordered, start);
      };
    case "html":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.text, token.block);
      };
    case "paragraph":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, this.parser.parseInline(token.tokens));
      };
    case "escape":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.text);
      };
    case "link":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.href, token.title, this.parser.parseInline(token.tokens));
      };
    case "image":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.href, token.title, token.text);
      };
    case "strong":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, this.parser.parseInline(token.tokens));
      };
    case "em":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, this.parser.parseInline(token.tokens));
      };
    case "codespan":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.text);
      };
    case "del":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, this.parser.parseInline(token.tokens));
      };
    case "text":
      return function(token) {
        if (!token.type || token.type !== prop) {
          return func.apply(this, arguments);
        }
        return func.call(this, token.text);
      };
  }
  return func;
};
parseMarkdown_fn = function(lexer, parser) {
  return (src, options) => {
    const origOpt = { ...options };
    const opt = { ...this.defaults, ...origOpt };
    if (this.defaults.async === true && origOpt.async === false) {
      if (!opt.silent) {
        console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored.");
      }
      opt.async = true;
    }
    const throwError = __privateMethod(this, _Marked_instances, onError_fn).call(this, !!opt.silent, !!opt.async);
    if (typeof src === "undefined" || src === null) {
      return throwError(new Error("marked(): input parameter is undefined or null"));
    }
    if (typeof src !== "string") {
      return throwError(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(src) + ", string expected"));
    }
    if (opt.hooks) {
      opt.hooks.options = opt;
    }
    if (opt.async) {
      return Promise.resolve(opt.hooks ? opt.hooks.preprocess(src) : src).then((src2) => lexer(src2, opt)).then((tokens) => opt.hooks ? opt.hooks.processAllTokens(tokens) : tokens).then((tokens) => opt.walkTokens ? Promise.all(this.walkTokens(tokens, opt.walkTokens)).then(() => tokens) : tokens).then((tokens) => parser(tokens, opt)).then((html2) => opt.hooks ? opt.hooks.postprocess(html2) : html2).catch(throwError);
    }
    try {
      if (opt.hooks) {
        src = opt.hooks.preprocess(src);
      }
      let tokens = lexer(src, opt);
      if (opt.hooks) {
        tokens = opt.hooks.processAllTokens(tokens);
      }
      if (opt.walkTokens) {
        this.walkTokens(tokens, opt.walkTokens);
      }
      let html2 = parser(tokens, opt);
      if (opt.hooks) {
        html2 = opt.hooks.postprocess(html2);
      }
      return html2;
    } catch (e) {
      return throwError(e);
    }
  };
};
onError_fn = function(silent, async) {
  return (e) => {
    e.message += "\nPlease report this to https://github.com/markedjs/marked.";
    if (silent) {
      const msg = "<p>An error occurred:</p><pre>" + escape$1(e.message + "", true) + "</pre>";
      if (async) {
        return Promise.resolve(msg);
      }
      return msg;
    }
    if (async) {
      return Promise.reject(e);
    }
    throw e;
  };
};
const markedInstance = new Marked();
function marked(src, opt) {
  return markedInstance.parse(src, opt);
}
marked.options = marked.setOptions = function(options) {
  markedInstance.setOptions(options);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.getDefaults = _getDefaults;
marked.defaults = _defaults;
marked.use = function(...args) {
  markedInstance.use(...args);
  marked.defaults = markedInstance.defaults;
  changeDefaults(marked.defaults);
  return marked;
};
marked.walkTokens = function(tokens, callback) {
  return markedInstance.walkTokens(tokens, callback);
};
marked.parseInline = markedInstance.parseInline;
marked.Parser = _Parser;
marked.parser = _Parser.parse;
marked.Renderer = _Renderer;
marked.TextRenderer = _TextRenderer;
marked.Lexer = _Lexer;
marked.lexer = _Lexer.lex;
marked.Tokenizer = _Tokenizer;
marked.Hooks = _Hooks;
marked.parse = marked;
marked.options;
marked.setOptions;
marked.use;
marked.walkTokens;
marked.parseInline;
_Parser.parse;
_Lexer.lex;
function get_each_context$1(ctx, list2, i2) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list2[i2];
  return child_ctx;
}
function get_each_context_1(ctx, list2, i2) {
  const child_ctx = ctx.slice();
  child_ctx[14] = list2[i2];
  return child_ctx;
}
function create_else_block(ctx) {
  let div2;
  let img;
  let img_src_value;
  let t0;
  let div1;
  let html_tag;
  let raw_value = marked(
    /*description*/
    ctx[1]
  ) + "";
  let t1;
  let div0;
  let current;
  let if_block = (
    /*tags*/
    ctx[4] && /*tags*/
    ctx[4].length > 0 && create_if_block_2(ctx)
  );
  return {
    c() {
      div2 = element("div");
      img = element("img");
      t0 = space();
      div1 = element("div");
      html_tag = new HtmlTagHydration(false);
      t1 = space();
      div0 = element("div");
      if (if_block) if_block.c();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      img = claim_element(div2_nodes, "IMG", { class: true, src: true, alt: true });
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      html_tag = claim_html_tag(div1_nodes, false);
      t1 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (if_block) if_block.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(img, "class", "w-full object-cover object-top");
      if (!src_url_equal(img.src, img_src_value = "" + (base + /*image*/
      ctx[5]))) attr(img, "src", img_src_value);
      attr(
        img,
        "alt",
        /*title*/
        ctx[8]
      );
      html_tag.a = t1;
      attr(div0, "class", "px-2 pb-2");
      attr(div1, "class", "description-overlay text-[14px] svelte-t81r3p");
      attr(div2, "class", "image-container relative svelte-t81r3p");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, img);
      append_hydration(div2, t0);
      append_hydration(div2, div1);
      html_tag.m(raw_value, div1);
      append_hydration(div1, t1);
      append_hydration(div1, div0);
      if (if_block) if_block.m(div0, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (!current || dirty & /*image*/
      32 && !src_url_equal(img.src, img_src_value = "" + (base + /*image*/
      ctx2[5]))) {
        attr(img, "src", img_src_value);
      }
      if (!current || dirty & /*title*/
      256) {
        attr(
          img,
          "alt",
          /*title*/
          ctx2[8]
        );
      }
      if ((!current || dirty & /*description*/
      2) && raw_value !== (raw_value = marked(
        /*description*/
        ctx2[1]
      ) + "")) html_tag.p(raw_value);
      if (
        /*tags*/
        ctx2[4] && /*tags*/
        ctx2[4].length > 0
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*tags*/
          16) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_2(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div0, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
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
        detach(div2);
      }
      if (if_block) if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let video_1;
  let video_1_src_value;
  return {
    c() {
      video_1 = element("video");
      this.h();
    },
    l(nodes) {
      video_1 = claim_element(nodes, "VIDEO", { class: true, src: true });
      children(video_1).forEach(detach);
      this.h();
    },
    h() {
      attr(video_1, "class", "pointer-events-none mx-auto w-full object-cover object-top");
      if (!src_url_equal(video_1.src, video_1_src_value = /*video*/
      ctx[6])) attr(video_1, "src", video_1_src_value);
      video_1.autoplay = true;
      video_1.loop = true;
      video_1.muted = true;
    },
    m(target, anchor) {
      insert_hydration(target, video_1, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*video*/
      64 && !src_url_equal(video_1.src, video_1_src_value = /*video*/
      ctx2[6])) {
        attr(video_1, "src", video_1_src_value);
      }
    },
    i: noop$1,
    o: noop$1,
    d(detaching) {
      if (detaching) {
        detach(video_1);
      }
    }
  };
}
function create_if_block_2(ctx) {
  let div;
  let current;
  let each_value_1 = ensure_array_like(
    /*tags*/
    ctx[4]
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
    each_blocks[i2] = create_each_block_1(get_each_context_1(ctx, each_value_1, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "mt-2 flex flex-wrap gap-1");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*tags*/
      16) {
        each_value_1 = ensure_array_like(
          /*tags*/
          ctx2[4]
        );
        let i2;
        for (i2 = 0; i2 < each_value_1.length; i2 += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block_1(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(div, null);
          }
        }
        group_outros();
        for (i2 = each_value_1.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i2 = 0; i2 < each_value_1.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
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
function create_default_slot_1(ctx) {
  let t_value = (
    /*tag*/
    ctx[14] + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*tags*/
      16 && t_value !== (t_value = /*tag*/
      ctx2[14] + "")) set_data(t, t_value);
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_each_block_1(ctx) {
  let badge;
  let current;
  badge = new Badge({
    props: {
      class: "rounded-[4px] px-1 py-0 text-[10px]",
      variant: "secondary",
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(badge.$$.fragment);
    },
    l(nodes) {
      claim_component(badge.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(badge, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const badge_changes = {};
      if (dirty & /*$$scope, tags*/
      131088) {
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
      destroy_component(badge, detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let current;
  let each_value = ensure_array_like(
    /*links*/
    ctx[7]
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block$1(get_each_context$1(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
  return {
    c() {
      div = element("div");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "flex flex-row flex-wrap items-start gap-1 mt-2 px-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(div, null);
        }
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*links*/
      128) {
        each_value = ensure_array_like(
          /*links*/
          ctx2[7]
        );
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block$1(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(div, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
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
function create_default_slot$3(ctx) {
  let switch_instance;
  let t0;
  let t1_value = (
    /*link*/
    ctx[9].type + ""
  );
  let t1;
  let current;
  var switch_value = (
    /*link*/
    ctx[9].icon
  );
  function switch_props(ctx2, dirty) {
    return {
      props: { class: "size-3 mb-px", strokeWidth: 1.6 }
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
      128 && switch_value !== (switch_value = /*link*/
      ctx2[9].icon)) {
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
      128) && t1_value !== (t1_value = /*link*/
      ctx2[9].type + "")) set_data(t1, t1_value);
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
  let a2;
  let badge;
  let t;
  let a_href_value;
  let current;
  badge = new Badge({
    props: {
      class: " flex gap-1 px-2 py-1 text-[9px] items-center justify-center text-black bg-[#FFF7D1] hover:bg-[#b6c9fb]",
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      a2 = element("a");
      create_component(badge.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      a2 = claim_element(nodes, "A", { href: true, target: true });
      var a_nodes = children(a2);
      claim_component(badge.$$.fragment, a_nodes);
      t = claim_space(a_nodes);
      a_nodes.forEach(detach);
      this.h();
    },
    h() {
      var _a;
      attr(a2, "href", a_href_value = /*link*/
      (_a = ctx[9]) == null ? void 0 : _a.href);
      attr(a2, "target", "_blank");
    },
    m(target, anchor) {
      insert_hydration(target, a2, anchor);
      mount_component(badge, a2, null);
      append_hydration(a2, t);
      current = true;
    },
    p(ctx2, dirty) {
      var _a;
      const badge_changes = {};
      if (dirty & /*$$scope, links*/
      131200) {
        badge_changes.$$scope = { dirty, ctx: ctx2 };
      }
      badge.$set(badge_changes);
      if (!current || dirty & /*links*/
      128 && a_href_value !== (a_href_value = /*link*/
      (_a = ctx2[9]) == null ? void 0 : _a.href)) {
        attr(a2, "href", a_href_value);
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
        detach(a2);
      }
      destroy_component(badge);
    }
  };
}
function create_fragment$4(ctx) {
  let div0;
  let a2;
  let current_block_type_index;
  let if_block0;
  let a_href_value;
  let t0;
  let div3;
  let div1;
  let t1;
  let t2;
  let div2;
  let time;
  let t3;
  let t4;
  let span;
  let t5;
  let t6;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*video*/
      ctx2[6]
    ) return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*links*/
    ctx[7] && /*links*/
    ctx[7].length > 0 && create_if_block(ctx)
  );
  return {
    c() {
      div0 = element("div");
      a2 = element("a");
      if_block0.c();
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = text(
        /*title*/
        ctx[8]
      );
      t2 = space();
      div2 = element("div");
      time = element("time");
      t3 = text(
        /*dates*/
        ctx[2]
      );
      t4 = text(" ･ ");
      span = element("span");
      t5 = text(
        /*publisher*/
        ctx[3]
      );
      t6 = space();
      if (if_block1) if_block1.c();
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      a2 = claim_element(div0_nodes, "A", { href: true, class: true });
      var a_nodes = children(a2);
      if_block0.l(a_nodes);
      a_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", { id: true, class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      t1 = claim_text(
        div1_nodes,
        /*title*/
        ctx[8]
      );
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      time = claim_element(div2_nodes, "TIME", { class: true });
      var time_nodes = children(time);
      t3 = claim_text(
        time_nodes,
        /*dates*/
        ctx[2]
      );
      t4 = claim_text(time_nodes, " ･ ");
      span = claim_element(time_nodes, "SPAN", { style: true });
      var span_nodes = children(span);
      t5 = claim_text(
        span_nodes,
        /*publisher*/
        ctx[3]
      );
      span_nodes.forEach(detach);
      time_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      t6 = claim_space(div3_nodes);
      if (if_block1) if_block1.l(div3_nodes);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a2, "href", a_href_value = /*href*/
      ctx[0] || "#");
      attr(a2, "class", "block cursor-pointer relative");
      attr(div0, "class", "relative flex flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg bg-card text-card-foreground");
      attr(div1, "class", "px-2 pt-2 font-semibold");
      set_style(
        div1,
        "font-size",
        /*fontSize*/
        ctx[10]
      );
      set_style(span, "background-color", "#d9f9f4");
      attr(time, "class", "font-sans text-[12px]");
      attr(div2, "class", "px-2");
      attr(div3, "id", "project-card-text");
      attr(div3, "class", "pb-5 text-center");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, a2);
      if_blocks[current_block_type_index].m(a2, null);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div1);
      append_hydration(div1, t1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      append_hydration(div2, time);
      append_hydration(time, t3);
      append_hydration(time, t4);
      append_hydration(time, span);
      append_hydration(span, t5);
      append_hydration(div3, t6);
      if (if_block1) if_block1.m(div3, null);
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(a2, null);
      }
      if (!current || dirty & /*href*/
      1 && a_href_value !== (a_href_value = /*href*/
      ctx2[0] || "#")) {
        attr(a2, "href", a_href_value);
      }
      if (!current || dirty & /*title*/
      256) set_data(
        t1,
        /*title*/
        ctx2[8]
      );
      if (!current || dirty & /*dates*/
      4) set_data(
        t3,
        /*dates*/
        ctx2[2]
      );
      if (!current || dirty & /*publisher*/
      8) set_data(
        t5,
        /*publisher*/
        ctx2[3]
      );
      if (
        /*links*/
        ctx2[7] && /*links*/
        ctx2[7].length > 0
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & /*links*/
          128) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div3, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current) return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t0);
        detach(div3);
      }
      if_blocks[current_block_type_index].d();
      if (if_block1) if_block1.d();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { class: _class = "" } = $$props;
  let { href = "" } = $$props;
  let { description } = $$props;
  let { dates } = $$props;
  let { publisher } = $$props;
  let { tags } = $$props;
  let { link: link2 = "" } = $$props;
  let { image = "" } = $$props;
  let { video = "" } = $$props;
  let { links = [] } = $$props;
  let { title } = $$props;
  let fontSize = title === "How Much It Takes to Get an Abortion in the 'PURPLE' State of Florida?" ? "14px" : "16px";
  $$self.$$set = ($$props2) => {
    if ("class" in $$props2) $$invalidate(11, _class = $$props2.class);
    if ("href" in $$props2) $$invalidate(0, href = $$props2.href);
    if ("description" in $$props2) $$invalidate(1, description = $$props2.description);
    if ("dates" in $$props2) $$invalidate(2, dates = $$props2.dates);
    if ("publisher" in $$props2) $$invalidate(3, publisher = $$props2.publisher);
    if ("tags" in $$props2) $$invalidate(4, tags = $$props2.tags);
    if ("link" in $$props2) $$invalidate(9, link2 = $$props2.link);
    if ("image" in $$props2) $$invalidate(5, image = $$props2.image);
    if ("video" in $$props2) $$invalidate(6, video = $$props2.video);
    if ("links" in $$props2) $$invalidate(7, links = $$props2.links);
    if ("title" in $$props2) $$invalidate(8, title = $$props2.title);
  };
  return [
    href,
    description,
    dates,
    publisher,
    tags,
    image,
    video,
    links,
    title,
    link2,
    fontSize,
    _class
  ];
}
class ProjectCard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      class: 11,
      href: 0,
      description: 1,
      dates: 2,
      publisher: 3,
      tags: 4,
      link: 9,
      image: 5,
      video: 6,
      links: 7,
      title: 8
    });
  }
}
/**
 * @license lucide-svelte v0.414.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function get_each_context(ctx, list2, i2) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list2[i2][0];
  child_ctx[12] = list2[i2][1];
  return child_ctx;
}
function create_dynamic_element(ctx) {
  let svelte_element;
  let svelte_element_levels = [
    /*attrs*/
    ctx[12]
  ];
  let svelte_element_data = {};
  for (let i2 = 0; i2 < svelte_element_levels.length; i2 += 1) {
    svelte_element_data = assign(svelte_element_data, svelte_element_levels[i2]);
  }
  return {
    c() {
      svelte_element = svg_element(
        /*tag*/
        ctx[11]
      );
      this.h();
    },
    l(nodes) {
      svelte_element = claim_svg_element(
        nodes,
        /*tag*/
        ctx[11],
        {}
      );
      children(svelte_element).forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svelte_element, svelte_element_data);
    },
    m(target, anchor) {
      insert_hydration(target, svelte_element, anchor);
    },
    p(ctx2, dirty) {
      set_svg_attributes(svelte_element, svelte_element_data = get_spread_update(svelte_element_levels, [dirty & /*iconNode*/
      32 && /*attrs*/
      ctx2[12]]));
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element);
      }
    }
  };
}
function create_each_block(ctx) {
  let previous_tag = (
    /*tag*/
    ctx[11]
  );
  let svelte_element_anchor;
  let svelte_element = (
    /*tag*/
    ctx[11] && create_dynamic_element(ctx)
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
    },
    p(ctx2, dirty) {
      if (
        /*tag*/
        ctx2[11]
      ) {
        if (!previous_tag) {
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*tag*/
          ctx2[11];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else if (safe_not_equal(
          previous_tag,
          /*tag*/
          ctx2[11]
        )) {
          svelte_element.d(1);
          svelte_element = create_dynamic_element(ctx2);
          previous_tag = /*tag*/
          ctx2[11];
          svelte_element.c();
          svelte_element.m(svelte_element_anchor.parentNode, svelte_element_anchor);
        } else {
          svelte_element.p(ctx2, dirty);
        }
      } else if (previous_tag) {
        svelte_element.d(1);
        svelte_element = null;
        previous_tag = /*tag*/
        ctx2[11];
      }
    },
    d(detaching) {
      if (detaching) {
        detach(svelte_element_anchor);
      }
      if (svelte_element) svelte_element.d(detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let svg;
  let each_1_anchor;
  let svg_stroke_width_value;
  let svg_class_value;
  let current;
  let each_value = ensure_array_like(
    /*iconNode*/
    ctx[5]
  );
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  const default_slot_template = (
    /*#slots*/
    ctx[10].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[9],
    null
  );
  let svg_levels = [
    defaultAttributes,
    /*$$restProps*/
    ctx[7],
    { width: (
      /*size*/
      ctx[2]
    ) },
    { height: (
      /*size*/
      ctx[2]
    ) },
    { stroke: (
      /*color*/
      ctx[1]
    ) },
    {
      "stroke-width": svg_stroke_width_value = /*absoluteStrokeWidth*/
      ctx[4] ? Number(
        /*strokeWidth*/
        ctx[3]
      ) * 24 / Number(
        /*size*/
        ctx[2]
      ) : (
        /*strokeWidth*/
        ctx[3]
      )
    },
    {
      class: svg_class_value = /*mergeClasses*/
      ctx[6](
        "lucide-icon",
        "lucide",
        /*name*/
        ctx[0] ? `lucide-${/*name*/
        ctx[0]}` : "",
        /*$$props*/
        ctx[8].class
      )
    }
  ];
  let svg_data = {};
  for (let i2 = 0; i2 < svg_levels.length; i2 += 1) {
    svg_data = assign(svg_data, svg_levels[i2]);
  }
  return {
    c() {
      svg = svg_element("svg");
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].c();
      }
      each_1_anchor = empty();
      if (default_slot) default_slot.c();
      this.h();
    },
    l(nodes) {
      svg = claim_svg_element(nodes, "svg", {
        width: true,
        height: true,
        stroke: true,
        "stroke-width": true,
        class: true
      });
      var svg_nodes = children(svg);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        each_blocks[i2].l(svg_nodes);
      }
      each_1_anchor = empty();
      if (default_slot) default_slot.l(svg_nodes);
      svg_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_svg_attributes(svg, svg_data);
    },
    m(target, anchor) {
      insert_hydration(target, svg, anchor);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        if (each_blocks[i2]) {
          each_blocks[i2].m(svg, null);
        }
      }
      append_hydration(svg, each_1_anchor);
      if (default_slot) {
        default_slot.m(svg, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (dirty & /*iconNode*/
      32) {
        each_value = ensure_array_like(
          /*iconNode*/
          ctx2[5]
        );
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            each_blocks[i2].m(svg, each_1_anchor);
          }
        }
        for (; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        512)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[9],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[9]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[9],
              dirty,
              null
            ),
            null
          );
        }
      }
      set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [
        defaultAttributes,
        dirty & /*$$restProps*/
        128 && /*$$restProps*/
        ctx2[7],
        (!current || dirty & /*size*/
        4) && { width: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*size*/
        4) && { height: (
          /*size*/
          ctx2[2]
        ) },
        (!current || dirty & /*color*/
        2) && { stroke: (
          /*color*/
          ctx2[1]
        ) },
        (!current || dirty & /*absoluteStrokeWidth, strokeWidth, size*/
        28 && svg_stroke_width_value !== (svg_stroke_width_value = /*absoluteStrokeWidth*/
        ctx2[4] ? Number(
          /*strokeWidth*/
          ctx2[3]
        ) * 24 / Number(
          /*size*/
          ctx2[2]
        ) : (
          /*strokeWidth*/
          ctx2[3]
        ))) && { "stroke-width": svg_stroke_width_value },
        (!current || dirty & /*name, $$props*/
        257 && svg_class_value !== (svg_class_value = /*mergeClasses*/
        ctx2[6](
          "lucide-icon",
          "lucide",
          /*name*/
          ctx2[0] ? `lucide-${/*name*/
          ctx2[0]}` : "",
          /*$$props*/
          ctx2[8].class
        ))) && { class: svg_class_value }
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
        detach(svg);
      }
      destroy_each(each_blocks, detaching);
      if (default_slot) default_slot.d(detaching);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  const omit_props_names = ["name", "color", "size", "strokeWidth", "absoluteStrokeWidth", "iconNode"];
  let $$restProps = compute_rest_props($$props, omit_props_names);
  let { $$slots: slots = {}, $$scope } = $$props;
  let { name = void 0 } = $$props;
  let { color: color2 = "currentColor" } = $$props;
  let { size = 24 } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { absoluteStrokeWidth = false } = $$props;
  let { iconNode = [] } = $$props;
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && array.indexOf(className) === index;
  }).join(" ");
  $$self.$$set = ($$new_props) => {
    $$invalidate(8, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    $$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
    if ("name" in $$new_props) $$invalidate(0, name = $$new_props.name);
    if ("color" in $$new_props) $$invalidate(1, color2 = $$new_props.color);
    if ("size" in $$new_props) $$invalidate(2, size = $$new_props.size);
    if ("strokeWidth" in $$new_props) $$invalidate(3, strokeWidth = $$new_props.strokeWidth);
    if ("absoluteStrokeWidth" in $$new_props) $$invalidate(4, absoluteStrokeWidth = $$new_props.absoluteStrokeWidth);
    if ("iconNode" in $$new_props) $$invalidate(5, iconNode = $$new_props.iconNode);
    if ("$$scope" in $$new_props) $$invalidate(9, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [
    name,
    color2,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode,
    mergeClasses,
    $$restProps,
    $$props,
    $$scope,
    slots
  ];
}
class Icon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      name: 0,
      color: 1,
      size: 2,
      strokeWidth: 3,
      absoluteStrokeWidth: 4,
      iconNode: 5
    });
  }
}
function create_default_slot$2(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
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
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
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
  let icon;
  let current;
  const icon_spread_levels = [
    { name: "code" },
    /*$$props*/
    ctx[1],
    { iconNode: (
      /*iconNode*/
      ctx[0]
    ) }
  ];
  let icon_props = {
    $$slots: { default: [create_default_slot$2] },
    $$scope: { ctx }
  };
  for (let i2 = 0; i2 < icon_spread_levels.length; i2 += 1) {
    icon_props = assign(icon_props, icon_spread_levels[i2]);
  }
  icon = new Icon({ props: icon_props });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const icon_changes = dirty & /*$$props, iconNode*/
      3 ? get_spread_update(icon_spread_levels, [
        icon_spread_levels[0],
        dirty & /*$$props*/
        2 && get_spread_object(
          /*$$props*/
          ctx2[1]
        ),
        dirty & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          ctx2[0]
        ) }
      ]) : {};
      if (dirty & /*$$scope*/
      8) {
        icon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      icon.$set(icon_changes);
    },
    i(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const iconNode = [
    ["polyline", { "points": "16 18 22 12 16 6" }],
    ["polyline", { "points": "8 6 2 12 8 18" }]
  ];
  $$self.$$set = ($$new_props) => {
    $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [iconNode, $$props, slots, $$scope];
}
class Code extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {});
  }
}
function create_default_slot$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
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
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
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
function create_fragment$1(ctx) {
  let icon;
  let current;
  const icon_spread_levels = [
    { name: "globe" },
    /*$$props*/
    ctx[1],
    { iconNode: (
      /*iconNode*/
      ctx[0]
    ) }
  ];
  let icon_props = {
    $$slots: { default: [create_default_slot$1] },
    $$scope: { ctx }
  };
  for (let i2 = 0; i2 < icon_spread_levels.length; i2 += 1) {
    icon_props = assign(icon_props, icon_spread_levels[i2]);
  }
  icon = new Icon({ props: icon_props });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const icon_changes = dirty & /*$$props, iconNode*/
      3 ? get_spread_update(icon_spread_levels, [
        icon_spread_levels[0],
        dirty & /*$$props*/
        2 && get_spread_object(
          /*$$props*/
          ctx2[1]
        ),
        dirty & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          ctx2[0]
        ) }
      ]) : {};
      if (dirty & /*$$scope*/
      8) {
        icon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      icon.$set(icon_changes);
    },
    i(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    [
      "path",
      {
        "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
      }
    ],
    ["path", { "d": "M2 12h20" }]
  ];
  $$self.$$set = ($$new_props) => {
    $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [iconNode, $$props, slots, $$scope];
}
class Globe extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {});
  }
}
function create_default_slot(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[2].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[3],
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
        8)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[3],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[3]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[3],
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
function create_fragment(ctx) {
  let icon;
  let current;
  const icon_spread_levels = [
    { name: "newspaper" },
    /*$$props*/
    ctx[1],
    { iconNode: (
      /*iconNode*/
      ctx[0]
    ) }
  ];
  let icon_props = {
    $$slots: { default: [create_default_slot] },
    $$scope: { ctx }
  };
  for (let i2 = 0; i2 < icon_spread_levels.length; i2 += 1) {
    icon_props = assign(icon_props, icon_spread_levels[i2]);
  }
  icon = new Icon({ props: icon_props });
  return {
    c() {
      create_component(icon.$$.fragment);
    },
    l(nodes) {
      claim_component(icon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(icon, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const icon_changes = dirty & /*$$props, iconNode*/
      3 ? get_spread_update(icon_spread_levels, [
        icon_spread_levels[0],
        dirty & /*$$props*/
        2 && get_spread_object(
          /*$$props*/
          ctx2[1]
        ),
        dirty & /*iconNode*/
        1 && { iconNode: (
          /*iconNode*/
          ctx2[0]
        ) }
      ]) : {};
      if (dirty & /*$$scope*/
      8) {
        icon_changes.$$scope = { dirty, ctx: ctx2 };
      }
      icon.$set(icon_changes);
    },
    i(local) {
      if (current) return;
      transition_in(icon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(icon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(icon, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const iconNode = [
    [
      "path",
      {
        "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
      }
    ],
    ["path", { "d": "M18 14h-8" }],
    ["path", { "d": "M15 18h-5" }],
    ["path", { "d": "M10 6h8v4h-8V6Z" }]
  ];
  $$self.$$set = ($$new_props) => {
    $$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
    if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
  };
  $$props = exclude_internal_props($$props);
  return [iconNode, $$props, slots, $$scope];
}
class Newspaper extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
const GithubSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMxODE5MUEnICB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkdpdEh1YjwvdGl0bGU+PHBhdGggZD0iTTEyIC4yOTdjLTYuNjMgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAzIDMuNDM4IDkuOCA4LjIwNSAxMS4zODUuNi4xMTMuODItLjI1OC44Mi0uNTc3IDAtLjI4NS0uMDEtMS4wNC0uMDE1LTIuMDQtMy4zMzguNzI0LTQuMDQyLTEuNjEtNC4wNDItMS42MUM0LjQyMiAxOC4wNyAzLjYzMyAxNy43IDMuNjMzIDE3LjdjLTEuMDg3LS43NDQuMDg0LS43MjkuMDg0LS43MjkgMS4yMDUuMDg0IDEuODM4IDEuMjM2IDEuODM4IDEuMjM2IDEuMDcgMS44MzUgMi44MDkgMS4zMDUgMy40OTUuOTk4LjEwOC0uNzc2LjQxNy0xLjMwNS43Ni0xLjYwNS0yLjY2NS0uMy01LjQ2Ni0xLjMzMi01LjQ2Ni01LjkzIDAtMS4zMS40NjUtMi4zOCAxLjIzNS0zLjIyLS4xMzUtLjMwMy0uNTQtMS41MjMuMTA1LTMuMTc2IDAgMCAxLjAwNS0uMzIyIDMuMyAxLjIzLjk2LS4yNjcgMS45OC0uMzk5IDMtLjQwNSAxLjAyLjAwNiAyLjA0LjEzOCAzIC40MDUgMi4yOC0xLjU1MiAzLjI4NS0xLjIzIDMuMjg1LTEuMjMuNjQ1IDEuNjUzLjI0IDIuODczLjEyIDMuMTc2Ljc2NS44NCAxLjIzIDEuOTEgMS4yMyAzLjIyIDAgNC42MS0yLjgwNSA1LjYyNS01LjQ3NSA1LjkyLjQyLjM2LjgxIDEuMDk2LjgxIDIuMjIgMCAxLjYwNi0uMDE1IDIuODk2LS4wMTUgMy4yODYgMCAuMzE1LjIxLjY5LjgyNS41N0MyMC41NjUgMjIuMDkyIDI0IDE3LjU5MiAyNCAxMi4yOTdjMC02LjYyNy01LjM3My0xMi0xMi0xMiIvPjwvc3ZnPg==";
const GithubDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViPC90aXRsZT48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9zdmc+";
const GmailSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMwQTBBMEEnICAgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5HbWFpbDwvdGl0bGU+PHBhdGggZD0iTTI0IDUuNDU3djEzLjkwOWMwIC45MDQtLjczMiAxLjYzNi0xLjYzNiAxLjYzNmgtMy44MTlWMTEuNzNMMTIgMTYuNjRsLTYuNTQ1LTQuOTF2OS4yNzNIMS42MzZBMS42MzYgMS42MzYgMCAwIDEgMCAxOS4zNjZWNS40NTdjMC0yLjAyMyAyLjMwOS0zLjE3OCAzLjkyNy0xLjk2NEw1LjQ1NSA0LjY0IDEyIDkuNTQ4bDYuNTQ1LTQuOTEgMS41MjgtMS4xNDVDMjEuNjkgMi4yOCAyNCAzLjQzNCAyNCA1LjQ1N3oiLz48L3N2Zz4=";
const GmailDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R21haWw8L3RpdGxlPjxwYXRoIGQ9Ik0yNCA1LjQ1N3YxMy45MDljMCAuOTA0LS43MzIgMS42MzYtMS42MzYgMS42MzZoLTMuODE5VjExLjczTDEyIDE2LjY0bC02LjU0NS00LjkxdjkuMjczSDEuNjM2QTEuNjM2IDEuNjM2IDAgMCAxIDAgMTkuMzY2VjUuNDU3YzAtMi4wMjMgMi4zMDktMy4xNzggMy45MjctMS45NjRMNS40NTUgNC42NCAxMiA5LjU0OGw2LjU0NS00LjkxIDEuNTI4LTEuMTQ1QzIxLjY5IDIuMjggMjQgMy40MzQgMjQgNS40NTd6Ii8+PC9zdmc+";
const LinkedinSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMxODE5MUEnICB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkxpbmtlZEluPC90aXRsZT48cGF0aCBkPSJNMjAuNDQ3IDIwLjQ1MmgtMy41NTR2LTUuNTY5YzAtMS4zMjgtLjAyNy0zLjAzNy0xLjg1Mi0zLjAzNy0xLjg1MyAwLTIuMTM2IDEuNDQ1LTIuMTM2IDIuOTM5djUuNjY3SDkuMzUxVjloMy40MTR2MS41NjFoLjA0NmMuNDc3LS45IDEuNjM3LTEuODUgMy4zNy0xLjg1IDMuNjAxIDAgNC4yNjcgMi4zNyA0LjI2NyA1LjQ1NXY2LjI4NnpNNS4zMzcgNy40MzNjLTEuMTQ0IDAtMi4wNjMtLjkyNi0yLjA2My0yLjA2NSAwLTEuMTM4LjkyLTIuMDYzIDIuMDYzLTIuMDYzIDEuMTQgMCAyLjA2NC45MjUgMi4wNjQgMi4wNjMgMCAxLjEzOS0uOTI1IDIuMDY1LTIuMDY0IDIuMDY1em0xLjc4MiAxMy4wMTlIMy41NTVWOWgzLjU2NHYxMS40NTJ6TTIyLjIyNSAwSDEuNzcxQy43OTIgMCAwIC43NzQgMCAxLjcyOXYyMC41NDJDMCAyMy4yMjcuNzkyIDI0IDEuNzcxIDI0aDIwLjQ1MUMyMy4yIDI0IDI0IDIzLjIyNyAyNCAyMi4yNzFWMS43MjlDMjQgLjc3NCAyMy4yIDAgMjIuMjIyIDBoLjAwM3oiLz48L3N2Zz4=";
const LinkedinDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+TGlua2VkSW48L3RpdGxlPjxwYXRoIGQ9Ik0yMC40NDcgMjAuNDUyaC0zLjU1NHYtNS41NjljMC0xLjMyOC0uMDI3LTMuMDM3LTEuODUyLTMuMDM3LTEuODUzIDAtMi4xMzYgMS40NDUtMi4xMzYgMi45Mzl2NS42NjdIOS4zNTFWOWgzLjQxNHYxLjU2MWguMDQ2Yy40NzctLjkgMS42MzctMS44NSAzLjM3LTEuODUgMy42MDEgMCA0LjI2NyAyLjM3IDQuMjY3IDUuNDU1djYuMjg2ek01LjMzNyA3LjQzM2MtMS4xNDQgMC0yLjA2My0uOTI2LTIuMDYzLTIuMDY1IDAtMS4xMzguOTItMi4wNjMgMi4wNjMtMi4wNjMgMS4xNCAwIDIuMDY0LjkyNSAyLjA2NCAyLjA2MyAwIDEuMTM5LS45MjUgMi4wNjUtMi4wNjQgMi4wNjV6bTEuNzgyIDEzLjAxOUgzLjU1NVY5aDMuNTY0djExLjQ1MnpNMjIuMjI1IDBIMS43NzFDLjc5MiAwIDAgLjc3NCAwIDEuNzI5djIwLjU0MkMwIDIzLjIyNy43OTIgMjQgMS43NzEgMjRoMjAuNDUxQzIzLjIgMjQgMjQgMjMuMjI3IDI0IDIyLjI3MVYxLjcyOUMyNCAuNzc0IDIzLjIgMCAyMi4yMjIgMGguMDAzeiIvPjwvc3ZnPg==";
const TwitterSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyMxODE5MUEnICB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlg8L3RpdGxlPjxwYXRoIGQ9Ik0xOC45MDEgMS4xNTNoMy42OGwtOC4wNCA5LjE5TDI0IDIyLjg0NmgtNy40MDZsLTUuOC03LjU4NC02LjYzOCA3LjU4NEguNDc0bDguNi05LjgzTDAgMS4xNTRoNy41OTRsNS4yNDMgNi45MzJaTTE3LjYxIDIwLjY0NGgyLjAzOUw2LjQ4NiAzLjI0SDQuMjk4WiIvPjwvc3ZnPg==";
const TwitterDarkSvg = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGZpbGw9JyNmZmYnIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+WDwvdGl0bGU+PHBhdGggZD0iTTE4LjkwMSAxLjE1M2gzLjY4bC04LjA0IDkuMTlMMjQgMjIuODQ2aC03LjQwNmwtNS44LTcuNTg0LTYuNjM4IDcuNTg0SC40NzRsOC42LTkuODNMMCAxLjE1NGg3LjU5NGw1LjI0MyA2LjkzMlpNMTcuNjEgMjAuNjQ0aDIuMDM5TDYuNDg2IDMuMjRINC4yOThaIi8+PC9zdmc+";
let DATA = {
  name: "Eve Lu",
  url: "https://github.com/SikandarJODD",
  img: "https://i.pinimg.com/736x/9e/dc/a6/9edca66eba199828bda2dbaf35642154.jpg",
  description: "",
  // navbar: [
  // 	{ href: '/', icon: HomeIcon, label: 'Home' },
  // 	{ href: '/blog', icon: NotebookIcon, label: 'Blog' },
  // 	{ href: '', icon: CodeIcon, label: 'Projects' }
  // ],
  contact: {
    social: {
      email: {
        name: "eseve@live.com",
        url: "",
        icon: GmailSvg,
        navbar: true,
        dark_icon: GmailDarkSvg
      },
      GitHub: {
        name: "GitHub",
        url: "",
        // url: 'https://github.com/luyi-eve',
        // // icon: Icons.github,
        icon: GithubSvg,
        navbar: true,
        dark_icon: GithubDarkSvg
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        // url: 'www.linkedin.com/in/luyi-eve',
        // // icon: Icons.linkedin,
        icon: LinkedinSvg,
        navbar: true,
        dark_icon: LinkedinDarkSvg
      },
      X: {
        name: "X",
        url: "",
        // url: 'https://x.com/luyi_2021',
        // // icon: Icons.x,
        icon: TwitterSvg,
        navbar: true,
        dark_icon: TwitterDarkSvg
      }
    }
  },
  datavizs: [
    {
      title: "Who Favors Tampa Bay the Most ?",
      href: "https://www.tampabay.com/life-culture/music/2024/09/23/tampa-bay-st-petersburg-concerts-most/",
      dates: "Sept 2024",
      publisher: "Tampa Bay Times",
      active: true,
      description: "A data story involved sifting through over 68,000 Florida concert records using setlist.fm and Spotify APIs, which has pinpointed major artists who performed in Tampa Bay in the past decade.",
      technologies: [
        "Python",
        "Datawrapper",
        "API"
      ],
      links: [
        {
          type: "Methodology",
          href: "https://github.com/luyi-eve/florida-local-concert-records",
          icon: Globe
        }
      ],
      image: "/images/tampabay-most-common-artists-3.png",
      video: ""
    },
    {
      title: "Beryl Feasted on Record-Hot Ocean",
      href: "https://www.tampabay.com/hurricane/2024/07/06/beryl-feasted-record-hot-water-heres-why-that-matters-florida/",
      dates: "July 2024",
      publisher: "Tampa Bay Times",
      active: true,
      description: "A data story explored how record-high North Atlantic water temperatures rapidly intensify hurricanes, like Beryl, and pose risks to the Tampa Bay area.",
      technologies: [
        "GDAL",
        "Datawrapper"
      ],
      links: [],
      image: "/images/sst-anomaly-2024.gif",
      video: ""
    },
    {
      title: "How Much It Takes to Get an Abortion in the 'PURPLE' State of Florida?",
      href: "https://luyi-eve.github.io/fl-abortion-costs/",
      dates: "October 2022",
      publisher: "University of Miami",
      active: true,
      description: "This is my capstone project at the University of Miami highlighting Florida’s non-medical abortion costs after Roe’s fall based on self-collected statewide abortion facility datasets, combined with interactive infographics features.",
      technologies: [
        "Python",
        "Javascript",
        "Adobe Illustrator",
        "Datawrapper",
        "Mapbox",
        "Swiper.js"
      ],
      links: [
        {
          type: "Methodology",
          href: "https://luyi-eve.github.io/fl-abortion-costs/#methodology",
          icon: Globe
          // icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://luyi-eve.github.io/fl-abortion-costs/about-and-sources#datasets-and-sources",
          icon: Code
          // icon: <Icons.github className="size-3" />,
        },
        {
          type: "Making-of Article",
          href: "https://luyi-eve.github.io/fl-abortion-costs/making-of-article",
          icon: Newspaper
          // icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/images/fl-abortion-costs-small.gif",
      video: ""
    },
    {
      title: "Where is Gaza's Aid?",
      href: "https://storymaps.arcgis.com/stories/25b4fa88e1a0421286c31d7e03a43086",
      dates: "May 2024",
      publisher: "Stanford University",
      active: true,
      description: "A mapping project visualizes the aid routes in use since the Gaza war began.",
      technologies: [
        "QGIS",
        "Adobe Illustrator",
        "Excel"
      ],
      links: [
        // {
        // 	type: 'Website',
        // 	href: 'https://automatic.chat',
        // 	icon: Globe
        // 	// icon: <Icons.globe className="size-3" />,
        // }
      ],
      image: "/images/gaza-aid-route.jpg",
      video: ""
    },
    {
      title: "Singapore Political Gender Imbalance",
      href: "https://luyi-eve.github.io/image/singapore-political-gender-imbalance.pdf",
      dates: "April 2024",
      publisher: "Personal",
      active: true,
      description: "A visualization that looks into Singapore's gender imbalance in political landscape.",
      technologies: [
        "Adobe Illustrator",
        "Excel"
      ],
      links: [
        // {
        // 	type: 'Website',
        // 	href: 'https://automatic.chat',
        // 	icon: Globe
        // 	// icon: <Icons.globe className="size-3" />,
        // }
      ],
      image: "/images/singapore-political-gender-imbalance.png",
      video: ""
    },
    {
      title: "Gaza Killed Journalist Database",
      href: "https://gaza-reporters.github.io/database/",
      dates: "Feb 2024",
      publisher: "Stanford University",
      active: true,
      description: "A News App that tracks all the journalists who have been killed in Gaza during the most recent war.",
      technologies: [
        "Javascript",
        "Python"
      ],
      links: [
        {
          type: "Methodology",
          href: "https://github.com/gaza-reporters/gaza-reporters.github.io",
          icon: Globe
          // icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/images/gaza-killed-journalist-database.png",
      video: ""
    },
    {
      title: "U.S. Prison Phone Rate",
      href: "https://luyi-eve.github.io/image/prison-phone-rates.pdf",
      dates: "March 2023",
      publisher: "Personal",
      active: true,
      description: "A visualization shows data on in-state phone rates for 15-minute increments in U.S. 50 states prisons from 2008 to 2021.",
      technologies: [
        "Adobe Illustrator",
        "Excel"
      ],
      links: [
        // {
        // 	type: 'Website',
        // 	href: 'https://automatic.chat',
        // 	icon: Globe
        // 	// icon: <Icons.globe className="size-3" />,
        // }
      ],
      image: "/images/prison-phone-rates.png",
      video: ""
    },
    {
      title: "Why I watched that movie at that time?",
      href: "https://luyi-eve.github.io/movies-self-analysis/",
      publisher: "Lede Program ･ Columbia University",
      dates: "July 2022",
      active: true,
      description: "A self-analysis visualizes all the movies and tv shows I‘ve watched from August 2021 to July 2022.",
      technologies: [
        "Scraping",
        "Datawrapper",
        "Adobe Illustrator",
        "Scrollama.js"
      ],
      links: [
        // {
        // 	type: 'Website',
        // 	href: 'https://automatic.chat',
        // 	icon: Globe
        // 	// icon: <Icons.globe className="size-3" />,
        // }
      ],
      image: "/images/movies-self-analysis.png",
      video: ""
    },
    {
      title: "Who is being hunted where?",
      href: "https://luyi-eve.github.io/image/asian-hate.pdf",
      dates: "July 2022",
      publisher: "University of Miami",
      active: true,
      description: "A visualization shows how anti-Asian violence was distributed during the COVID-19.",
      technologies: [
        "Datawrapper",
        "Adobe Illustrator"
      ],
      links: [
        // {
        // 	type: 'Website',
        // 	href: 'https://automatic.chat',
        // 	icon: Globe
        // 	// icon: <Icons.globe className="size-3" />,
        // }
      ],
      image: "/images/asian-hate.png",
      video: ""
    },
    {
      title: "The Biggest Weapon",
      href: "",
      dates: "April 2022",
      publisher: "University of Miami",
      active: true,
      description: "A visualization explores how Ukraine conflict will shake Europe's reliance on Russian crude oil supply.",
      technologies: [
        "Datawrapper",
        "Adobe Illustrator"
      ],
      links: [
        {
          type: "Making-of Article",
          href: "https://luyi-eve.github.io/the-biggest-weapon/",
          icon: Newspaper
          // icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/images/the-biggest-weapon4.png",
      video: ""
    }
  ],
  reportings: [
    {
      title: "Widespread Backlash Against APEC in S.F.,but Why?",
      url: "https://a-luyieve.vev.site/widespread-backlash-against-apec-in-sf-but-why/",
      dates: "December 2023",
      location: "San Francisco, California",
      description: "",
      image: "/images/anti-apec.JPG",
      // mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [
        {
          title: "Breaking News",
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
          href: ""
        }
      ]
    },
    {
      title: "Under One Dark Sky",
      url: "https://peninsulapress.com/?s=under+one+dark+sky",
      dates: "January 9, 2024",
      location: "Point Reyes, California",
      description: "",
      image: "/images/dark-sky-written.JPG",
      // mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
      links: [
        {
          title: "News Reporting"
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
        },
        {
          title: "Data-driven"
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
        },
        {
          title: "Documentary"
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
        },
        {
          title: "Multimedia"
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
        }
      ]
    },
    {
      title: "San Mateo County Sheriff Urges Legislators to Reevaluate Lower Penalties for Theft, Laments ‘Lawlessness’",
      url: "https://peninsulapress.com/2023/10/26/san-mateo-county-sheriff-urges-legislators-to-reevaluate-lower-penalties-for-theft-laments-lawlessness/",
      dates: "October, 2023",
      location: "San Mateo, California",
      description: "",
      // icon: "public",
      image: "/images/san-mateo-sheriff.png",
      links: [
        {
          title: "Multimedia"
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
        }
      ]
    },
    {
      title: "California’s Parental Notification Policy Ignites Controversy Over Trans Youth Rights",
      url: "https://peninsulapress.com/2023/11/09/californias-parental-notification-policy-ignites-controversy-over-trans-youth-rights/",
      dates: "November 9, 2023",
      location: "Sacramento, California",
      description: "",
      image: "/images/merideth-cooper.jpg",
      // mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
      links: [
        {
          title: "Podcast"
          // icon: Globe,
          // icon: <Icons.globe className="h-4 w-4" />,
          // href: 'https://devpost.com/software/my6footprint'
        }
      ]
    },
    {
      title: "Back on Screen",
      url: "https://issuu.com/abbyleeg/docs/winter21-issuu_compressed_/26",
      dates: "Jan 7, 2022",
      location: "Miami, Florida",
      description: "",
      image: "/images/back-on-screen.png",
      links: [
        // {
        // 	title: 'News Reporting',
        // 	// icon: Github,
        // 	// icon: <Icons.github className="h-4 w-4" />,
        // },
      ]
    },
    {
      title: "Three months later in Surfside: Some mourning, some moving on",
      url: "https://themiamihurricane.com/2021/09/24/three-months-later-in-surfside-some-mourning-some-moving-on/",
      dates: "September 2021",
      location: "Surfside, Florida",
      description: "",
      image: "/images/three-month-surfside.png",
      // mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        // {
        // 	title: 'News Reporting',
        // 	// icon: Github,
        // 	// icon: <Icons.github className="h-4 w-4" />,
        // },
      ]
    },
    {
      title: "China's Landmark #MeToo Case",
      url: "https://drive.google.com/file/d/196Dy6xxaXoDZaPb1gPz88ELrog0WpPbn/view",
      dates: "September 2021",
      location: "Beijing, China",
      description: "",
      image: "/images/china-metoo.jpg",
      // mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: "Podcast",
          // icon: Github,
          // icon: <Icons.github className="h-4 w-4" />,
          href: ""
        }
      ]
    }
  ],
  archives: [
    {
      title: "Words by Maugham",
      href: "https://luyi-eve.github.io/words-by-maugham/",
      dates: "August 2022",
      publisher: "Lede Program ･ Columbia University",
      active: true,
      description: "A text analysis story that sorts through Somerset Maugham's 25 books, short stories and plays.",
      technologies: [
        "Text Analysis",
        "Python",
        "Flourish"
      ],
      // links: [
      // 	{
      // 		type: 'Website',
      // 		href: 'https://www.tampabay.com/life-culture/music/2024/09/23/tampa-bay-st-petersburg-concerts-most/',
      // 		// icon: <Icons.globe className="size-3" />,
      // 		icon: Globe
      // 	}
      // ],
      image: "/images/words-by-maugham.png",
      video: ""
    },
    {
      title: "Chicago's Dead Zones",
      href: "https://luyi-eve.github.io/chicago-dead-zones/",
      dates: "August 2022",
      publisher: "Lede Program ･ Columbia University",
      active: true,
      description: "A personal investigation of Chicago's cell service through a mix of maps.",
      technologies: [
        "QGIS",
        "Mapbox",
        "Scrollama.js"
      ],
      links: [
        // {
        // 	type: 'Website',
        // 	href: 'https://magicui.design',
        // 	// icon: <Icons.globe className="size-3" />,
        // 	icon: Globe
        // },
        // {
        // 	type: 'Source',
        // 	href: 'https://github.com/magicuidesign/magicui',
        // 	icon: Github
        // 	// icon: <Icons.github className="size-3" />,
        // }
      ],
      image: "/images/chicago-dead-zones.png",
      video: ""
    },
    {
      title: "Cool it?! New Yorkers",
      href: "https://luyi-eve.github.io/cool-it-newyorkers/",
      dates: "July 2022",
      publisher: "Lede Program ･ Columbia University",
      active: true,
      description: "A guide towards New York City's public cooling features during extreme heat emergencies.",
      technologies: [
        "Datawrapper"
      ],
      links: [
        // {
        // 	type: 'Methodology',
        // 	href: 'https://luyi-eve.github.io/fl-abortion-costs/#methodology',
        // 	icon: Globe
        // 	// icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/images/cool-it-nyc.png",
      video: ""
    }
  ]
};
export {
  BlurFade as B,
  DATA as D,
  ProjectCard as P,
  get_spread_object as a,
  ce as b,
  cn as c,
  Badge as d,
  ensure_array_like as e,
  flyAndScale as f,
  get_spread_update as g,
  cubicOut as h
};
//# sourceMappingURL=Dx5cBrAf.js.map
