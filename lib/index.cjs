'use strict';

var require$$0 = require('react');

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return type.displayName || "Context";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(type, key, props, owner, debugStack, debugTask) {
	      var refProp = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== refProp ? refProp : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        maybeKey,
	        getOwner(),
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      isValidElement(node)
	        ? node._store && (node._store.validated = 1)
	        : "object" === typeof node &&
	          null !== node &&
	          node.$$typeof === REACT_LAZY_TYPE &&
	          ("fulfilled" === node._payload.status
	            ? isValidElement(node._payload.value) &&
	              node._payload.value._store &&
	              (node._payload.value._store.validated = 1)
	            : node._store && (node._store.validated = 1));
	    }
	    function isValidElement(object) {
	      return (
	        "object" === typeof object &&
	        null !== object &&
	        object.$$typeof === REACT_ELEMENT_TYPE
	      );
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	      REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      react_stack_bottom_frame: function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var styles$6 = {"badge":"Badge-module_badge__ZbEBU","content":"Badge-module_content__sVR8-","dot":"Badge-module_dot__KeAKh","size-small":"Badge-module_size-small__NV8YR","size-medium":"Badge-module_size-medium__faJWm","hasDot":"Badge-module_hasDot__McMVo","tone-neutral":"Badge-module_tone-neutral__60fxa","variant-soft":"Badge-module_variant-soft__u7nBJ","variant-outline":"Badge-module_variant-outline__qIuZS","variant-filled":"Badge-module_variant-filled__lLL-n","tone-primary":"Badge-module_tone-primary__g4-Ly","tone-success":"Badge-module_tone-success__TlmT8","tone-warning":"Badge-module_tone-warning__wwrbb","tone-danger":"Badge-module_tone-danger__ZEeSl"};

const Badge = ({ as: Component = "span", children, className = "", dot = false, size = "medium", tone = "neutral", variant = "soft", ...props }) => {
    const classes = [
        styles$6.badge,
        styles$6[`size-${size}`],
        styles$6[`tone-${tone}`],
        styles$6[`variant-${variant}`],
        dot && styles$6.hasDot,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs(Component, { ...props, className: classes, children: [dot && jsxRuntimeExports.jsx("span", { className: styles$6.dot, "aria-hidden": "true" }), jsxRuntimeExports.jsx("span", { className: styles$6.content, children: children })] }));
};

var styles$5 = {"checkbox":"Checkbox-module_checkbox__D0D4S","control":"Checkbox-module_control__QFHjF","box":"Checkbox-module_box__KLUVK","label":"Checkbox-module_label__JBaRm","error":"Checkbox-module_error__dRORZ","hasError":"Checkbox-module_hasError__1u2T7","disabled":"Checkbox-module_disabled__WagIC"};

const Checkbox = ({ "aria-describedby": ariaDescribedBy, className = "", disabled, error, id, label, ...props }) => {
    const generatedId = require$$0.useId();
    const checkboxId = id ?? generatedId;
    const errorId = error ? `${checkboxId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [
        styles$5.checkbox,
        error && styles$5.hasError,
        disabled && styles$5.disabled,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs("label", { className: classes, children: [jsxRuntimeExports.jsxs("span", { className: styles$5.control, children: [jsxRuntimeExports.jsx("input", { ...props, "aria-describedby": describedBy, "aria-invalid": error ? "true" : undefined, disabled: disabled, id: checkboxId, type: "checkbox" }), jsxRuntimeExports.jsx("span", { className: styles$5.box, "aria-hidden": "true" })] }), label && jsxRuntimeExports.jsx("span", { className: styles$5.label, children: label }), error && (jsxRuntimeExports.jsx("span", { className: styles$5.error, id: errorId, role: "alert", children: error }))] }));
};

var styles$4 = {"input":"Input-module_input__505b7","label":"Input-module_label__gmqts","control":"Input-module_control__epTZf","hasIconLeft":"Input-module_hasIconLeft__MzJlw","disabled":"Input-module_disabled__ProN9","readOnly":"Input-module_readOnly__biXJu","hasError":"Input-module_hasError__OhUOS","icon":"Input-module_icon__qkecR","iconLeft":"Input-module_iconLeft__S-ETg","iconRight":"Input-module_iconRight__gYw0l","error":"Input-module_error__38tit"};

const Input = ({ "aria-describedby": ariaDescribedBy, className = "", disabled, error, id, label, icon, iconPosition, readOnly, ...props }) => {
    const generatedId = require$$0.useId();
    const inputId = id ?? generatedId;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [
        styles$4.input,
        error && styles$4.hasError,
        label && styles$4.hasLabel,
        icon && iconPosition === "left" && styles$4.hasIconLeft,
        disabled && styles$4.disabled,
        readOnly && styles$4.readOnly,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs("label", { className: classes, children: [jsxRuntimeExports.jsxs("span", { className: styles$4.control, children: [label && jsxRuntimeExports.jsx("span", { className: styles$4.label, children: label }), icon && iconPosition === "left" && (jsxRuntimeExports.jsx("span", { className: `${styles$4.icon} ${styles$4.iconLeft}`, children: icon })), jsxRuntimeExports.jsx("input", { ...props, "aria-describedby": describedBy, "aria-invalid": error ? "true" : undefined, disabled: disabled, id: inputId, readOnly: readOnly }), icon && iconPosition === "right" && (jsxRuntimeExports.jsx("span", { className: `${styles$4.icon} ${styles$4.iconRight}`, children: icon }))] }), error && (jsxRuntimeExports.jsx("span", { className: styles$4.error, id: errorId, role: "alert", children: error }))] }));
};

var styles$3 = {"radio":"Radio-module_radio__qhO7H","control":"Radio-module_control__-u9W6","mark":"Radio-module_mark__7Wpkw","label":"Radio-module_label__c-sYW","error":"Radio-module_error__zjn8W","hasError":"Radio-module_hasError__2Rcox","disabled":"Radio-module_disabled__RZ0be"};

const Radio = ({ "aria-describedby": ariaDescribedBy, className = "", disabled, error, id, label, ...props }) => {
    const generatedId = require$$0.useId();
    const radioId = id ?? generatedId;
    const errorId = error ? `${radioId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [
        styles$3.radio,
        error && styles$3.hasError,
        disabled && styles$3.disabled,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs("label", { className: classes, children: [jsxRuntimeExports.jsxs("span", { className: styles$3.control, children: [jsxRuntimeExports.jsx("input", { ...props, "aria-describedby": describedBy, "aria-invalid": error ? "true" : undefined, disabled: disabled, id: radioId, type: "radio" }), jsxRuntimeExports.jsx("span", { className: styles$3.mark, "aria-hidden": "true" })] }), label && jsxRuntimeExports.jsx("span", { className: styles$3.label, children: label }), error && (jsxRuntimeExports.jsx("span", { className: styles$3.error, id: errorId, role: "alert", children: error }))] }));
};

var styles$2 = {"select":"Select-module_select__U4LyF","control":"Select-module_control__wQqBI","label":"Select-module_label__zUgZC","chevron":"Select-module_chevron__Kgee3","disabled":"Select-module_disabled__kkzG-","hasError":"Select-module_hasError__Urs0g","error":"Select-module_error__yikGO"};

const Select = ({ "aria-describedby": ariaDescribedBy, children, className = "", disabled, error, id, label, ...props }) => {
    const generatedId = require$$0.useId();
    const selectId = id ?? generatedId;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [
        styles$2.select,
        error && styles$2.hasError,
        label && styles$2.hasLabel,
        disabled && styles$2.disabled,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs("label", { className: classes, children: [jsxRuntimeExports.jsxs("span", { className: styles$2.control, children: [label && jsxRuntimeExports.jsx("span", { className: styles$2.label, children: label }), jsxRuntimeExports.jsx("select", { ...props, "aria-describedby": describedBy, "aria-invalid": error ? "true" : undefined, disabled: disabled, id: selectId, children: children }), jsxRuntimeExports.jsx("span", { className: styles$2.chevron, "aria-hidden": "true" })] }), error && (jsxRuntimeExports.jsx("span", { className: styles$2.error, id: errorId, role: "alert", children: error }))] }));
};

var styles$1 = {"switch":"Switch-module_switch__PKzsW","control":"Switch-module_control__uwo8Z","track":"Switch-module_track__wE1gs","circle":"Switch-module_circle__QFeBs","label":"Switch-module_label__T-0Mn","error":"Switch-module_error__OBYv6","hasError":"Switch-module_hasError__z9hs-","disabled":"Switch-module_disabled__VeSGJ"};

const Switch = ({ "aria-describedby": ariaDescribedBy, className = "", disabled, id, error, label, ...props }) => {
    const generatedId = require$$0.useId();
    const switchId = id ?? generatedId;
    const errorId = error ? `${switchId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [
        styles$1.switch,
        error && styles$1.hasError,
        disabled && styles$1.disabled,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs("label", { className: classes, children: [label && jsxRuntimeExports.jsx("span", { className: styles$1.label, children: label }), jsxRuntimeExports.jsxs("span", { className: styles$1.control, children: [jsxRuntimeExports.jsx("input", { ...props, "aria-describedby": describedBy, "aria-invalid": error ? "true" : undefined, disabled: disabled, id: switchId, role: "switch", type: "checkbox" }), jsxRuntimeExports.jsx("span", { className: styles$1.track, "aria-hidden": "true", children: jsxRuntimeExports.jsx("span", { className: styles$1.circle }) })] }), error && (jsxRuntimeExports.jsx("span", { className: styles$1.error, id: errorId, role: "alert", children: error }))] }));
};

var styles = {"textArea":"TextArea-module_textArea__nlK-5","control":"TextArea-module_control__JgpqZ","label":"TextArea-module_label__FSbGZ","disabled":"TextArea-module_disabled__lHxCa","readOnly":"TextArea-module_readOnly__HaMuJ","hasError":"TextArea-module_hasError__qwr9S","error":"TextArea-module_error__DWDms"};

const TextArea = ({ "aria-describedby": ariaDescribedBy, className = "", disabled, error, id, label, readOnly, ...props }) => {
    const generatedId = require$$0.useId();
    const textAreaId = id ?? generatedId;
    const errorId = error ? `${textAreaId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || undefined;
    const classes = [
        styles.textArea,
        error && styles.hasError,
        label && styles.hasLabel,
        disabled && styles.disabled,
        readOnly && styles.readOnly,
        className,
    ]
        .filter(Boolean)
        .join(" ");
    return (jsxRuntimeExports.jsxs("label", { className: classes, children: [jsxRuntimeExports.jsxs("span", { className: styles.control, children: [label && jsxRuntimeExports.jsx("span", { className: styles.label, children: label }), jsxRuntimeExports.jsx("textarea", { ...props, "aria-describedby": describedBy, "aria-invalid": error ? "true" : undefined, disabled: disabled, id: textAreaId, readOnly: readOnly })] }), error && (jsxRuntimeExports.jsx("span", { className: styles.error, id: errorId, role: "alert", children: error }))] }));
};

exports.Badge = Badge;
exports.Checkbox = Checkbox;
exports.Input = Input;
exports.Radio = Radio;
exports.Select = Select;
exports.Switch = Switch;
exports.TextArea = TextArea;
//# sourceMappingURL=index.cjs.map
