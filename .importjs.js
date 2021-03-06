//  Copyright (c) 2018-present, GM Cruise LLC
//
//  This source code is licensed under the Apache License, Version 2.0,
//  found in the LICENSE file in the root directory of this source tree.
//  You may not use this file except in compliance with the License.

module.exports = {
  minimumVersion: "3.2.0",
  useRelativePaths: false,
  environments: ["browser", "jest"],
  groupImports: false, // Rely on the `eslint-plugin-import-order-alphabetical` rule to fix this for us.
  importStatementFormatter({ importStatement }) {
    return importStatement.replace(/'/g, '"');
  },
  moduleNameFormatter({ moduleName, pathToCurrentFile }) {
    return moduleName.replace("packages/", "");
  },
  namedExports: {
    "@storybook/addon-knobs/react": [
      "withKnobs",
      "text",
      "boolean",
      "number",
      "color",
      "object",
      "array",
      "select",
      "files",
      "date",
      "button",
    ],
    react: ["Component", "PureComponent"],
    "@storybook/react": ["storiesOf"],
    "storybook-chrome-screenshot": ["withScreenshot", "initScreenshot", "setScreenshotOptions"],
    "react-dom": ["createPortal"],
    reselect: ["createSelector"],
  },
};

const lodashExports = [
  "add",
  "after",
  "ary",
  "assign",
  "assignIn",
  "assignInWith",
  "assignWith",
  "at",
  "attempt",
  "before",
  "bind",
  "bindAll",
  "bindKey",
  "camelCase",
  "capitalize",
  "castArray",
  "ceil",
  "chain",
  "chunk",
  "clamp",
  "clone",
  "cloneDeep",
  "cloneDeepWith",
  "cloneWith",
  "compact",
  "concat",
  "cond",
  "conforms",
  "conformsTo",
  "constant",
  "countBy",
  "create",
  "curry",
  "curryRight",
  "debounce",
  "deburr",
  "defaults",
  "defaultsDeep",
  "defaultTo",
  "defer",
  "difference",
  "differenceBy",
  "differenceWith",
  "divide",
  "drop",
  "dropRight",
  "dropRightWhile",
  "dropWhile",
  "endsWith",
  "eq",
  "escape",
  "escapeRegExp",
  "every",
  "fill",
  "filter",
  "find",
  "findIndex",
  "findKey",
  "findLast",
  "findLastIndex",
  "findLastKey",
  "flatMap",
  "flatMapDeep",
  "flatMapDepth",
  "flatten",
  "flattenDeep",
  "flattenDepth",
  "flip",
  "floor",
  "flow",
  "flowRight",
  "forEach",
  "forEachRight",
  "forIn",
  "forInRight",
  "forOwn",
  "forOwnRight",
  "fromPairs",
  "functions",
  "functionsIn",
  "get",
  "groupBy",
  "gt",
  "gte",
  "has",
  "hasIn",
  "head",
  "identity",
  "includes",
  "indexOf",
  "initial",
  "inRange",
  "intersection",
  "intersectionBy",
  "intersectionWith",
  "invert",
  "invertBy",
  "invoke",
  "invokeMap",
  "isArguments",
  "isArray",
  "isArrayBuffer",
  "isArrayLike",
  "isArrayLikeObject",
  "isBoolean",
  "isBuffer",
  "isDate",
  "isElement",
  "isEmpty",
  "isEqual",
  "isEqualWith",
  "isError",
  "isFinite",
  "isFunction",
  "isInteger",
  "isLength",
  "isMap",
  "isMatch",
  "isMatchWith",
  "isNaN",
  "isNative",
  "isNil",
  "isNull",
  "isNumber",
  "isObject",
  "isObjectLike",
  "isPlainObject",
  "isRegExp",
  "isSafeInteger",
  "isSet",
  "isString",
  "isSymbol",
  "isTypedArray",
  "isUndefined",
  "isWeakMap",
  "isWeakSet",
  "iteratee",
  "join",
  "kebabCase",
  "keyBy",
  "keys",
  "keysIn",
  "last",
  "lastIndexOf",
  "lowerCase",
  "lowerFirst",
  "lt",
  "lte",
  "map",
  "mapKeys",
  "mapValues",
  "matches",
  "matchesProperty",
  "max",
  "maxBy",
  "mean",
  "meanBy",
  "memoize",
  "merge",
  "mergeWith",
  "method",
  "methodOf",
  "min",
  "minBy",
  "mixin",
  "multiply",
  "negate",
  "noConflict",
  "noop",
  "now",
  "nth",
  "nthArg",
  "omit",
  "omitBy",
  "once",
  "orderBy",
  "over",
  "overArgs",
  "overEvery",
  "overSome",
  "pad",
  "padEnd",
  "padStart",
  "parseInt",
  "partial",
  "partialRight",
  "partition",
  "pick",
  "pickBy",
  "property",
  "propertyOf",
  "pull",
  "pullAll",
  "pullAllBy",
  "pullAllWith",
  "pullAt",
  "random",
  "range",
  "rangeRight",
  "rearg",
  "reduce",
  "reduceRight",
  "reject",
  "remove",
  "repeat",
  "replace",
  "rest",
  "result",
  "reverse",
  "round",
  "runInContext",
  "sample",
  "sampleSize",
  "set",
  "setWith",
  "shuffle",
  "size",
  "slice",
  "snakeCase",
  "some",
  "sortBy",
  "sortedIndex",
  "sortedIndexBy",
  "sortedIndexOf",
  "sortedLastIndex",
  "sortedLastIndexBy",
  "sortedLastIndexOf",
  "sortedUniq",
  "sortedUniqBy",
  "split",
  "spread",
  "startCase",
  "startsWith",
  "stubArray",
  "stubFalse",
  "stubObject",
  "stubString",
  "stubTrue",
  "subtract",
  "sum",
  "sumBy",
  "tail",
  "take",
  "takeRight",
  "takeRightWhile",
  "takeWhile",
  "tap",
  "template",
  "throttle",
  "thru",
  "times",
  "toArray",
  "toFinite",
  "toInteger",
  "toLength",
  "toLower",
  "toNumber",
  "toPairs",
  "toPairsIn",
  "toPath",
  "toPlainObject",
  "toSafeInteger",
  "toString",
  "toUpper",
  "transform",
  "trim",
  "trimEnd",
  "trimStart",
  "truncate",
  "unary",
  "unescape",
  "union",
  "unionBy",
  "unionWith",
  "uniq",
  "uniqBy",
  "uniqueId",
  "uniqWith",
  "unset",
  "unzip",
  "unzipWith",
  "update",
  "updateWith",
  "upperCase",
  "upperFirst",
  "values",
  "valuesIn",
  "without",
  "words",
  "wrap",
  "xor",
  "xorBy",
  "xorWith",
  "zip",
  "zipObject",
  "zipObjectDeep",
  "zipWith",
];
module.exports.namedExports.lodash = lodashExports;
