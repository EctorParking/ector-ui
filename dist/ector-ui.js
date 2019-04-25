'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('react-dates/initialize');
var moment = _interopDefault(require('moment'));
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes$1 = _interopDefault(require('prop-types'));
var Levenshtein = _interopDefault(require('fast-levenshtein'));
var reactDates = require('react-dates');
var reactDom = require('react-dom');
var reactDom__default = _interopDefault(reactDom);

moment.locale('FR');
moment.updateLocale('FR', {
  months: 'Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre'.split('_'),
  monthsShort: 'Janv._Févr._Mars_Avr._Mai_Juin_Juil._Août_Sept._Oct._Nov._Déc.'.split('_'),
  weekdays: 'Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi'.split('_'),
  weekdaysShort: 'Dim._Lun._Mar._Mer._Jeu._Ven._Sam.'.split('_'),
  weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_')
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".ActionLink-module_container__1snmH {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: none;\n  border: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 0;\n}\n\n.ActionLink-module_commonLabelStyle__3qrLp {\n  color: #9ca3ff;\n  font-size: 0.8em;\n}\n\n.ActionLink-module_labelWithIcon__370D_ {\n  font-weight: 500;\n  margin-left: 5px;\n}\n\n.ActionLink-module_labelWithoutIcon__1-sRR {\n  font-style: italic;\n  font-weight: 700;\n  text-decoration: underline;\n}\n";
var s = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"ActionLink-module_container__1snmH","commonLabelStyle":"ActionLink-module_commonLabelStyle__3qrLp","labelWithIcon":"ActionLink-module_labelWithIcon__370D_","labelWithoutIcon":"ActionLink-module_labelWithoutIcon__1-sRR"};
styleInject(css);

var ActionLink = function ActionLink(_ref) {
  var icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      id = _ref.id,
      type = _ref.type;
  var labelStyle = icon ? s.labelWithIcon : s.labelWithoutIcon;
  return React__default.createElement("button", {
    className: [s.container, className].join(' '),
    onClick: onClick,
    id: id,
    type: type
  }, icon && React__default.createElement("i", {
    className: "icon-".concat(icon)
  }), React__default.createElement("span", {
    className: "".concat(s.commonLabelStyle, " ").concat(labelStyle)
  }, label));
};

ActionLink.defaultProps = {
  icon: '',
  className: '',
  onClick: function onClick() {},
  id: '',
  type: 'button'
};
ActionLink.propTypes = {
  icon: PropTypes$1.string,
  label: PropTypes$1.string.isRequired,
  onClick: PropTypes$1.func,
  className: PropTypes$1.string,
  id: PropTypes$1.string,
  type: PropTypes$1.string
};

var css$1 = ".Alert-module_alert__r0hVZ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fefefe;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-bottom: 30px;\n  padding: 20px;\n  width: 100%;\n}\n\n.Alert-module_alert__r0hVZ.Alert-module_success__1d-9F {\n  background-color: #59c871;\n}\n\n.Alert-module_alert__r0hVZ.Alert-module_error__1M0Mz {\n  background-color: #ff5757;\n}\n\n.Alert-module_alert__r0hVZ.Alert-module_warning__25grb {\n  background-color: #f39c12;\n}\n\n.Alert-module_icon__MG7hJ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  border: 2px solid #fefefe;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 150%;\n  height: 40px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 20px;\n  width: 40px;\n}\n\n.Alert-module_title__8QSrA {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.Alert-module_alert__r0hVZ p {\n  margin: 0;\n}\n";
var s$1 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","alert":"Alert-module_alert__r0hVZ","success":"Alert-module_success__1d-9F","error":"Alert-module_error__1M0Mz","warning":"Alert-module_warning__25grb","icon":"Alert-module_icon__MG7hJ","title":"Alert-module_title__8QSrA"};
styleInject(css$1);

var icons = {
  success: 'checkmark',
  error: 'error-outline',
  warning: 'warning'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      type = _ref.type,
      title = _ref.title,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$1.alert, " ").concat(s$1[type], " ").concat(className)
  }, React__default.createElement("i", {
    className: "icon-".concat(icons[type], " ").concat(s$1.icon)
  }), React__default.createElement("div", null, React__default.createElement("strong", {
    className: s$1.title
  }, title), React__default.createElement("p", null, children)));
};

Alert.defaultProps = {
  className: ''
};
Alert.propTypes = {
  children: PropTypes$1.node.isRequired,
  type: PropTypes$1.oneOf(Object.keys(icons)).isRequired,
  title: PropTypes$1.string.isRequired,
  className: PropTypes$1.string
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var css$2 = ".Card-module_card__3FjBB {\n  background-color: #eceff6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-radius: 0.5rem;\n  padding: 4.8px;\n  padding: 4.8px;\n  padding: 0.3rem;\n  position: relative;\n}\n\n.Card-module_card_selected__2gCWh {\n  background-color: #ffcd02;\n}\n\n.Card-module_card_clickable__2aWr0:hover {\n  cursor: pointer;\n  background-color: #ffcd02;\n}\n\n.Card-module_card_clickable__2aWr0:hover:active {\n  cursor: default;\n}\n\n.Card-module_card_content__3eV9O {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  background-color: #fefefe;\n  border-radius: 0.3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 32px 24px;\n  padding: 32px 24px;\n  padding: 2rem 1.5rem;\n}\n\n.Card-module_card_footer__3Nao4 {\n  background-color: transparent;\n  height: 48px;\n  height: 48px;\n  height: 3rem;\n  position: relative;\n}\n\n.Card-module_footerComponent__2kcfz {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Card-module_label__EcoX3 {\n  position: absolute;\n  top: -10px;\n  right: 20px;\n}\n";
var s$2 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card":"Card-module_card__3FjBB","card_selected":"Card-module_card_selected__2gCWh","card_clickable":"Card-module_card_clickable__2aWr0","card_content":"Card-module_card_content__3eV9O","card_footer":"Card-module_card_footer__3Nao4","footerComponent":"Card-module_footerComponent__2kcfz","label":"Card-module_label__EcoX3"};
styleInject(css$2);

var CardFooter = function CardFooter(_ref) {
  var className = _ref.className,
      FooterChildren = _ref.FooterChildren;
  return React__default.createElement("div", {
    className: "".concat(s$2.card_footer, " ").concat(className)
  }, FooterChildren);
};

CardFooter.defaultProps = {
  FooterChildren: null,
  className: ''
};
CardFooter.propTypes = {
  FooterChildren: PropTypes$1.node,
  className: PropTypes$1.string
};

var CardHeader = function CardHeader(_ref2) {
  var HeaderChildren = _ref2.HeaderChildren;
  return React__default.createElement("div", null, HeaderChildren);
};

CardHeader.defaultProps = {
  HeaderChildren: null
};
CardHeader.propTypes = {
  HeaderChildren: PropTypes$1.node
};

var Card = function Card(_ref3) {
  var children = _ref3.children,
      FooterChildren = _ref3.FooterChildren,
      HeaderChildren = _ref3.HeaderChildren,
      isSelected = _ref3.isSelected,
      onClick = _ref3.onClick,
      className = _ref3.className,
      contentClassName = _ref3.contentClassName,
      footerClassName = _ref3.footerClassName,
      LabelComponent = _ref3.LabelComponent,
      testid = _ref3.testid,
      FooterComponent = _ref3.FooterComponent,
      RootComponent = _ref3.RootComponent;
  var isClickable = typeof onClick === 'function' && !isSelected;
  var cardClassName = "\n    ".concat(s$2.card, "\n    ").concat(isSelected ? s$2.card_selected : '', "\n    ").concat(isClickable ? s$2.card_clickable : '', "\n    ").concat(className, "\n  ");
  return React__default.createElement(RootComponent, {
    role: "presentation",
    className: cardClassName,
    onClick: onClick,
    testid: testid
  }, HeaderChildren && React__default.createElement(CardHeader, {
    HeaderChildren: HeaderChildren
  }), React__default.createElement(LabelComponent, {
    className: s$2.label
  }), React__default.createElement("div", {
    className: "".concat(s$2.card_content, " ").concat(contentClassName)
  }, children), FooterChildren && React__default.createElement(CardFooter, {
    className: footerClassName,
    FooterChildren: FooterChildren
  }), React__default.createElement(FooterComponent, {
    className: "".concat(s$2.card_footer, " ").concat(s$2.footerComponent)
  }));
};

Card.defaultProps = {
  FooterChildren: null,
  HeaderChildren: null,
  isSelected: false,
  onClick: null,
  className: '',
  contentClassName: '',
  footerClassName: '',
  testid: '',
  LabelComponent: function LabelComponent() {
    return null;
  },
  FooterComponent: function FooterComponent() {
    return null;
  },
  RootComponent: function RootComponent(props) {
    return React__default.createElement("div", props);
  }
};
Card.propTypes = {
  children: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.node), PropTypes$1.node]).isRequired,
  FooterChildren: PropTypes$1.node,
  HeaderChildren: PropTypes$1.node,
  onClick: PropTypes$1.func,
  isSelected: PropTypes$1.bool,
  className: PropTypes$1.string,
  contentClassName: PropTypes$1.string,
  footerClassName: PropTypes$1.string,
  testid: PropTypes$1.string,
  LabelComponent: PropTypes$1.func,
  FooterComponent: PropTypes$1.func,
  RootComponent: PropTypes$1.func
};

var AlternativeTimeCardTextsType = {
  select: PropTypes$1.string
};

var css$3 = ".LinkUnderlined-module_link_underlined__4pJUb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  padding: 0 2px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  z-index: 0;\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0s ease-in-out;\n  transition: all 0s ease-in-out\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: -1px;\n  width: 100%;\n  height: 8px;\n  background-color: #ffcd02;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate3d(0, 0, 0) scaleY(1);\n          transform: translate3d(0, 0, 0) scaleY(1);\n  z-index: -1;\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:hover:before {\n  -webkit-transform: translate3d(0, 4px, 0) scaleY(0.6);\n          transform: translate3d(0, 4px, 0) scaleY(0.6);\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:hover:active {\n  opacity: 0.6\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:hover:active:before {\n  -webkit-transform: translate3d(0, 4px, 0) scaleY(0.2);\n          transform: translate3d(0, 4px, 0) scaleY(0.2);\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s;\n}\n\n.LinkUnderlined-module_link_underlined_fetching__3nZHt:before {\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.LinkUnderlined-module_link_underlined_fetching__3nZHt:hover:active {\n  opacity: 1;\n}\n\n.LinkUnderlined-module_fetching__30v4g {\n  background: none;\n  background-color: transparent !important;\n  color: transparent !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  overflow: hidden;\n  position: relative\n}\n\n.LinkUnderlined-module_fetching__30v4g:hover {\n  background-color: transparent;\n}\n\n.LinkUnderlined-module_fetching__30v4g:before {\n  background-color: #ffe8ad;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin-top: -2px;\n}\n\n.LinkUnderlined-module_fetching__30v4g:after {\n  -webkit-animation: LinkUnderlined-module_fetching__30v4g 3s linear infinite;\n          animation: LinkUnderlined-module_fetching__30v4g 3s linear infinite;\n  background-color: #ffb201;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  margin-top: -2px;\n  left: 0;\n  width: 20%;\n}\n\n@-webkit-keyframes LinkUnderlined-module_fetching__30v4g {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n\n@keyframes LinkUnderlined-module_fetching__30v4g {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n";
var s$3 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","link_underlined":"LinkUnderlined-module_link_underlined__4pJUb","link_underlined_fetching":"LinkUnderlined-module_link_underlined_fetching__3nZHt","fetching":"LinkUnderlined-module_fetching__30v4g"};
styleInject(css$3);

var LinkUnderlined = function LinkUnderlined(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      testid = _ref.testid,
      className = _ref.className,
      id = _ref.id,
      fetching = _ref.fetching;
  return React__default.createElement("div", {
    className: [s$3.link_underlined, fetching ? s$3.link_underlined_fetching : undefined, className].join(' '),
    id: id
  }, React__default.createElement("button", {
    testid: testid,
    onClick: onClick,
    id: id === LinkUnderlined.defaultProps.id ? '' : "".concat(id, "Button"),
    className: fetching ? s$3.fetching : undefined
  }, children));
};

LinkUnderlined.defaultProps = {
  className: ''
};
LinkUnderlined.propTypes = {
  children: PropTypes$1.node.isRequired,
  onClick: PropTypes$1.func.isRequired,
  testid: PropTypes$1.string,
  className: PropTypes$1.string,
  id: PropTypes$1.string,
  fetching: PropTypes$1.bool
};
LinkUnderlined.defaultProps = {
  testid: '',
  className: undefined,
  id: '',
  fetching: false
};

var AlternativeTimeCardFooter = function AlternativeTimeCardFooter(_ref) {
  var texts = _ref.texts,
      mode = _ref.mode,
      onSelect = _ref.onSelect,
      testid = _ref.testid;

  if (mode === 'normal') {
    return React__default.createElement(LinkUnderlined, {
      testid: testid,
      onClick: onSelect
    }, texts.select);
  }

  return null;
};

AlternativeTimeCardFooter.propTypes = {
  texts: AlternativeTimeCardTextsType.isRequired,
  mode: PropTypes$1.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes$1.func.isRequired,
  testid: PropTypes$1.string
};
AlternativeTimeCardFooter.defaultProps = {
  testid: ''
};

var AlternativeTimeCardAlternativeType = {
  date: PropTypes$1.string,
  time: PropTypes$1.string,
  spot: PropTypes$1.string
};

var css$4 = ".AlternativeTimeCard-module_container__1P0Nm {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: auto;\n  min-width: auto;\n\n  * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n}\n\n.AlternativeTimeCard-module_content__1Eblg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 30px;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.AlternativeTimeCard-module_content__1Eblg i {\n  margin-right: 10px;\n}\n\n.AlternativeTimeCard-module_header__3hEI6 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  line-height: 1;\n  padding: 5px 10px 10px;\n}\n\n.AlternativeTimeCard-module_footerContainer__2mb4P {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 31px;\n  line-height: 1;\n  padding: 5px;\n  margin-top: 3px;\n}\n";
var s$4 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"AlternativeTimeCard-module_container__1P0Nm","content":"AlternativeTimeCard-module_content__1Eblg","header":"AlternativeTimeCard-module_header__3hEI6","footerContainer":"AlternativeTimeCard-module_footerContainer__2mb4P"};
styleInject(css$4);

var AlternativeTimeCard = function AlternativeTimeCard(_ref) {
  var texts = _ref.texts,
      alternative = _ref.alternative,
      mode = _ref.mode,
      onSelect = _ref.onSelect,
      testid = _ref.testid,
      className = _ref.className,
      cardProps = _objectWithoutProperties(_ref, ["texts", "alternative", "mode", "onSelect", "testid", "className"]);

  var footer = mode !== 'selectedWithoutFooter' ? React__default.createElement(AlternativeTimeCardFooter, {
    mode: mode,
    texts: texts,
    onSelect: onSelect,
    testid: testid
  }) : null;
  var header = React__default.createElement("div", {
    className: s$4.header
  }, React__default.createElement("strong", null, alternative.date), alternative.spot);
  return React__default.createElement(Card, _extends({
    isSelected: mode.indexOf('selected') === 0,
    HeaderChildren: header,
    FooterChildren: footer,
    className: "".concat(s$4.container, " ").concat(className),
    contentClassName: s$4.content,
    footerClassName: s$4.footerContainer
  }, cardProps), React__default.createElement("i", {
    className: "icon icon-ec-clock"
  }), alternative.time);
};

AlternativeTimeCard.propTypes = {
  texts: AlternativeTimeCardTextsType,
  alternative: AlternativeTimeCardAlternativeType.isRequired,
  mode: PropTypes$1.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes$1.func.isRequired,
  testid: PropTypes$1.string,
  className: PropTypes$1.string
};
AlternativeTimeCard.defaultProps = {
  testid: '',
  className: '',
  texts: {
    select: 'Sélectionner'
  }
};

var ApplicationCardUrlsType = PropTypes$1.shape({
  googlePlay: PropTypes$1.string,
  appStore: PropTypes$1.string
});

var playStoreImg = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20177.3%2046.9%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D.cls-2%2C.cls-3%2C.cls-4%7Bisolation%3Aisolate%3B%7D.cls-3%7Bfont-size%3A15px%3B%7D.cls-3%2C.cls-4%7Bfill%3A%23153457%3Bfont-family%3AGTWalsheim-Regular%2C%20GT%20Walsheim%3B%7D.cls-4%7Bfont-size%3A20px%3B%7D.cls-5%7Bletter-spacing%3A-0.01em%3B%7D.cls-6%7Bletter-spacing%3A-0.01em%3B%7D.cls-7%7Bletter-spacing%3A0em%3B%7D.cls-8%7Bletter-spacing%3A-0.01em%3B%7D.cls-9%7Bfill%3A%2314a7e0%3B%7D.cls-10%7Bfill%3A%23eb435e%3B%7D.cls-11%7Bfill%3A%2300a35d%3B%7D.cls-12%7Bfill%3A%23f7cc16%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EFichier%202%3C%2Ftitle%3E%3Cg%20id%3D%22Calque_2%22%20data-name%3D%22Calque%202%22%3E%3Cg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M177.2%2C38.9a8%2C8%2C0%2C0%2C1-8%2C8H8a8%2C8%2C0%2C0%2C1-8-8V8A8%2C8%2C0%2C0%2C1%2C8%2C0H169.3a8%2C8%2C0%2C0%2C1%2C8%2C8V38.9Z%22%2F%3E%3Cg%20class%3D%22cls-2%22%3E%3Ctext%20class%3D%22cls-3%22%20transform%3D%22translate%2860.59%2016.03%29%22%3EDisponible%20sur%3C%2Ftext%3E%3Ctext%20class%3D%22cls-4%22%20transform%3D%22translate%2862.36%2037.03%29%22%3EPlay%20%3Ctspan%20class%3D%22cls-5%22%20x%3D%2244.56%22%20y%3D%220%22%3ES%3C%2Ftspan%3E%3Ctspan%20class%3D%22cls-6%22%20x%3D%2255.5%22%20y%3D%220%22%3Et%3C%2Ftspan%3E%3Ctspan%20class%3D%22cls-7%22%20x%3D%2262.5%22%20y%3D%220%22%3Eo%3C%2Ftspan%3E%3Ctspan%20class%3D%22cls-8%22%20x%3D%2273.62%22%20y%3D%220%22%3Er%3C%2Ftspan%3E%3Ctspan%20x%3D%2280.56%22%20y%3D%220%22%3Ee%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20id%3D%22M1q7wL.tif%22%3E%3Cpath%20class%3D%22cls-9%22%20d%3D%22M16.62%2C40.89a2.7%2C2.7%2C0%2C0%2C1-.7-2.1V8.69a2.7%2C2.7%2C0%2C0%2C1%2C.7-2.1c1.8%2C1.8%2C3.6%2C3.7%2C5.5%2C5.5%2C3.8%2C3.9%2C7.7%2C7.7%2C11.5%2C11.6-.3.3-.6.7-.9%2C1C27.32%2C30.09%2C21.92%2C35.49%2C16.62%2C40.89Z%22%2F%3E%3Cpath%20class%3D%22cls-10%22%20d%3D%22M16.62%2C40.89c5.3-5.4%2C10.7-10.8%2C16-16.1.3-.3.6-.7.9-1h.2c1.9%2C1.9%2C3.8%2C3.9%2C5.7%2C5.8-5.1%2C2.9-10.2%2C5.9-15.3%2C8.8l-4.8%2C2.7C18.42%2C41.49%2C17.52%2C41.79%2C16.62%2C40.89Z%22%2F%3E%3Cpath%20class%3D%22cls-11%22%20d%3D%22M33.82%2C23.69h-.2c-3.9-3.8-7.7-7.7-11.5-11.6l-5.5-5.5a1.88%2C1.88%2C0%2C0%2C1%2C2.6-.2c6.8%2C3.8%2C13.5%2C7.7%2C20.2%2C11.6C37.62%2C19.79%2C35.72%2C21.79%2C33.82%2C23.69Z%22%2F%3E%3Cpath%20class%3D%22cls-12%22%20d%3D%22M33.82%2C23.69c1.9-1.9%2C3.8-3.9%2C5.7-5.8%2C2.4%2C1.3%2C4.8%2C2.6%2C7.2%2C4%2C1.6%2C1%2C1.6%2C2.6-.1%2C3.6-2.3%2C1.4-4.7%2C2.7-7.1%2C4C37.62%2C27.59%2C35.72%2C25.69%2C33.82%2C23.69Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref8 =
/*#__PURE__*/
React__default.createElement("g", {
  id: "f9hyA2.tif"
}, React__default.createElement("path", {
  className: "cls-9",
  d: "M46.6 16.8a7.78 7.78 0 0 0 .9 13.8.37.37 0 0 1-.1.3 23.07 23.07 0 0 1-4.4 7.4 4.57 4.57 0 0 1-5.6 1.1 19.45 19.45 0 0 0-2.2-.8 6.19 6.19 0 0 0-3.8.4 18 18 0 0 1-2.1.8 3.7 3.7 0 0 1-3.6-.8 13.89 13.89 0 0 1-3.1-3.7 21.73 21.73 0 0 1-3.3-8.4 14.2 14.2 0 0 1 .3-6.8 8.87 8.87 0 0 1 6-6.3 7.21 7.21 0 0 1 4.8.2c.8.3 1.6.6 2.3.8a2 2 0 0 0 1.5 0c.9-.3 1.8-.7 2.7-1a8.48 8.48 0 0 1 7.7 1.1 6.1 6.1 0 0 1 2 1.9zM33.2 13c-.5-3.7 2.9-7.8 7-8 .5 3.9-3.1 8.3-7 8z"
}));

var appStoreImg = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20177.3%2046.8%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D.cls-2%2C.cls-3%2C.cls-4%7Bisolation%3Aisolate%3B%7D.cls-3%7Bfont-size%3A15px%3B%7D.cls-3%2C.cls-4%7Bfill%3A%23153457%3Bfont-family%3AGTWalsheim-Regular%2C%20GT%20Walsheim%3B%7D.cls-4%7Bfont-size%3A22px%3B%7D.cls-5%7Bletter-spacing%3A-0.02em%3B%7D.cls-6%7Bletter-spacing%3A-0.01em%3B%7D.cls-7%7Bletter-spacing%3A0em%3B%7D.cls-8%7Bletter-spacing%3A-0.01em%3B%7D.cls-9%7Bfill%3A%23666766%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3EFichier%201%3C%2Ftitle%3E%3Cg%20id%3D%22Calque_2%22%20data-name%3D%22Calque%202%22%3E%3Cg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M177.2%2C38.8a8%2C8%2C0%2C0%2C1-8%2C8H8a8%2C8%2C0%2C0%2C1-8-8V8A8%2C8%2C0%2C0%2C1%2C8%2C0H169.3a8%2C8%2C0%2C0%2C1%2C8%2C8V38.8Z%22%2F%3E%3Cg%20class%3D%22cls-2%22%3E%3Ctext%20class%3D%22cls-3%22%20transform%3D%22translate%2862.7%2015.39%29%22%3EDisponible%20sur%3C%2Ftext%3E%3Ctext%20class%3D%22cls-4%22%20transform%3D%22translate%2863%2036.39%29%22%3EApp%20%3Ctspan%20class%3D%22cls-5%22%20x%3D%2244.55%22%20y%3D%220%22%3Es%3C%2Ftspan%3E%3Ctspan%20class%3D%22cls-6%22%20x%3D%2254.1%22%20y%3D%220%22%3Et%3C%2Ftspan%3E%3Ctspan%20class%3D%22cls-7%22%20x%3D%2261.8%22%20y%3D%220%22%3Eo%3C%2Ftspan%3E%3Ctspan%20class%3D%22cls-8%22%20x%3D%2274.03%22%20y%3D%220%22%3Er%3C%2Ftspan%3E%3Ctspan%20x%3D%2281.66%22%20y%3D%220%22%3Ee%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fg%3E%3Cg%20id%3D%22f9hyA2.tif%22%3E%3Cpath%20class%3D%22cls-9%22%20d%3D%22M46.6%2C16.8a7.78%2C7.78%2C0%2C0%2C0%2C.9%2C13.8.37.37%2C0%2C0%2C1-.1.3A23.07%2C23.07%2C0%2C0%2C1%2C43%2C38.3a4.57%2C4.57%2C0%2C0%2C1-5.6%2C1.1%2C19.45%2C19.45%2C0%2C0%2C0-2.2-.8%2C6.19%2C6.19%2C0%2C0%2C0-3.8.4%2C18%2C18%2C0%2C0%2C1-2.1.8%2C3.7%2C3.7%2C0%2C0%2C1-3.6-.8%2C13.89%2C13.89%2C0%2C0%2C1-3.1-3.7%2C21.73%2C21.73%2C0%2C0%2C1-3.3-8.4%2C14.2%2C14.2%2C0%2C0%2C1%2C.3-6.8%2C8.87%2C8.87%2C0%2C0%2C1%2C6-6.3%2C7.21%2C7.21%2C0%2C0%2C1%2C4.8.2c.8.3%2C1.6.6%2C2.3.8a2%2C2%2C0%2C0%2C0%2C1.5%2C0c.9-.3%2C1.8-.7%2C2.7-1a8.48%2C8.48%2C0%2C0%2C1%2C7.7%2C1.1A6.1%2C6.1%2C0%2C0%2C1%2C46.6%2C16.8Z%22%2F%3E%3Cpath%20class%3D%22cls-9%22%20d%3D%22M33.2%2C13c-.5-3.7%2C2.9-7.8%2C7-8C40.7%2C8.9%2C37.1%2C13.3%2C33.2%2C13Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var phoneImg = "3a07cf99a5e781a9.png";

var css$5 = ".ApplicationCard-module_applicationCard__2no43 {\n  background-color: #163457;\n  border-radius: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 20px;\n  max-width: 410px;\n  overflow: hidden;\n}\n\n.ApplicationCard-module_applicationCard__2no43 * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.ApplicationCard-module_applicationCard__2no43 > div:first-child {\n  padding: 20px;\n  padding-left: 0;\n}\n\n.ApplicationCard-module_applicationCard__2no43 > div:last-child {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-bottom: -20px;\n}\n\n.ApplicationCard-module_applicationCard__2no43 h2 {\n  color: #ffcd02;\n  font-weight: 500;\n  margin: 0 0 10px;\n}\n\n.ApplicationCard-module_applicationCard__2no43 p {\n  color: #fefefe;\n}\n\n.ApplicationCard-module_applicationCard__2no43 img {\n  display: block;\n  max-height: 220px;\n  max-width: 100%;\n  margin: 0;\n}\n\n.ApplicationCard-module_icons__1tF4n {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 30px;\n}\n\n.ApplicationCard-module_icons__1tF4n img {\n  min-width: 129px;\n}\n\n.ApplicationCard-module_icons__1tF4n a:first-child {\n  margin-right: 5px;\n}\n\n.ApplicationCard-module_icons__1tF4n a:last-child {\n  margin-left: 5px;\n}\n\n.ApplicationCard-module_applicationCard__2no43 p {\n  margin: 0;\n}\n";
var s$5 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","applicationCard":"ApplicationCard-module_applicationCard__2no43","icons":"ApplicationCard-module_icons__1tF4n"};
styleInject(css$5);

var ApplicationCard = function ApplicationCard(_ref) {
  var title = _ref.title,
      description = _ref.description,
      urls = _ref.urls,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$5.applicationCard, " ").concat(className)
  }, React__default.createElement("div", null, React__default.createElement("h2", null, title), React__default.createElement("p", null, description), React__default.createElement("div", {
    className: s$5.icons
  }, React__default.createElement("a", {
    href: urls.googlePlay
  }, React__default.createElement("img", {
    src: playStoreImg,
    alt: "Google Play"
  })), React__default.createElement("a", {
    href: urls.appStore
  }, React__default.createElement("img", {
    src: appStoreImg,
    alt: "App Store"
  })))), React__default.createElement("div", null, React__default.createElement("img", {
    src: phoneImg,
    alt: "Phone"
  })));
};

ApplicationCard.defaultProps = {
  className: ''
};
ApplicationCard.propTypes = {
  title: PropTypes$1.string.isRequired,
  description: PropTypes$1.string.isRequired,
  urls: ApplicationCardUrlsType.isRequired,
  className: PropTypes$1.string
};

var BookingStepsTextsType = PropTypes$1.shape({
  pickup: PropTypes$1.string,
  return: PropTypes$1.string
});
var defaultTexts = {
  pickup: 'Prise en charge',
  return: 'Restitution'
};

var PricingSummaryOptionType = PropTypes$1.shape({
  label: PropTypes$1.string,
  price: PropTypes$1.number
});

var PricingSummaryTextsType = PropTypes$1.shape({
  addOption: PropTypes$1.string,
  total: PropTypes$1.string
});
var defaultTexts$1 = {
  addOption: 'Ajouter une option',
  total: 'Total TTC'
};

var css$6 = ".BookingCardFooter-module_footer__1HSax {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  padding: 0 20px;\n}\n\n.BookingCardFooter-module_left__1VzXV {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BookingCardFooter-module_left__1VzXV > * {\n  margin-right: 20px;\n}\n\n.BookingCardFooter-module_left__1VzXV > *:last-child {\n  margin-right: 0;\n}\n";
var s$6 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","footer":"BookingCardFooter-module_footer__1HSax","left":"BookingCardFooter-module_left__1VzXV"};
styleInject(css$6);

var renderLeftAction = function renderLeftAction(leftAction, index) {
  var ActionElement = function ActionElement() {
    return leftAction;
  };

  return React__default.createElement(ActionElement, {
    key: index
  });
};

var BookingCardFooter = function BookingCardFooter(_ref) {
  var leftActions = _ref.leftActions,
      rightAction = _ref.rightAction;
  return React__default.createElement("div", {
    className: s$6.footer
  }, React__default.createElement("div", {
    className: s$6.left
  }, leftActions.map(renderLeftAction)), React__default.createElement("div", null, rightAction));
};

BookingCardFooter.defaultProps = {
  leftActions: [],
  rightAction: null
};
BookingCardFooter.propTypes = {
  leftActions: PropTypes$1.arrayOf(PropTypes$1.node),
  rightAction: PropTypes$1.node
};

var css$7 = ".BookingCard-module_container__rtGKa {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.BookingCard-module_bookingSteps__3Vsng {\n  margin-right: 30px;\n}\n\n.BookingCard-module_pricingSummary__1RKl- {\n  margin-left: 30px;\n}\n";
var s$7 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"BookingCard-module_container__rtGKa","bookingSteps":"BookingCard-module_bookingSteps__3Vsng","pricingSummary":"BookingCard-module_pricingSummary__1RKl-"};
styleInject(css$7);

var BookingCard = function BookingCard(_ref) {
  var fromSpot = _ref.fromSpot,
      toSpot = _ref.toSpot,
      startAt = _ref.startAt,
      endAt = _ref.endAt,
      bookingStepsTexts = _ref.bookingStepsTexts,
      options = _ref.options,
      pricingSummaryTexts = _ref.pricingSummaryTexts,
      leftActions = _ref.leftActions,
      rightAction = _ref.rightAction,
      className = _ref.className;
  var footer = React__default.createElement(BookingCardFooter, {
    leftActions: leftActions,
    rightAction: rightAction
  });
  return React__default.createElement(Card, {
    className: className,
    FooterChildren: footer
  }, React__default.createElement("div", {
    className: s$7.container
  }, React__default.createElement("div", {
    className: s$7.bookingSteps
  }, React__default.createElement(BookingSteps, {
    fromSpot: fromSpot,
    toSpot: toSpot,
    startAt: startAt,
    endAt: endAt,
    texts: bookingStepsTexts
  })), React__default.createElement("div", {
    className: s$7.pricingSummary
  }, React__default.createElement(PricingSummary, {
    currency: "\u20AC",
    currencyPosition: "after",
    options: options,
    texts: pricingSummaryTexts
  }))));
};

BookingCard.defaultProps = {
  leftActions: [],
  rightAction: null,
  className: '',
  bookingStepsTexts: defaultTexts
};
BookingCard.propTypes = {
  fromSpot: PropTypes$1.string.isRequired,
  toSpot: PropTypes$1.string.isRequired,
  startAt: PropTypes$1.string.isRequired,
  endAt: PropTypes$1.string.isRequired,
  bookingStepsTexts: BookingStepsTextsType,
  options: PropTypes$1.arrayOf(PricingSummaryOptionType).isRequired,
  pricingSummaryTexts: PricingSummaryTextsType.isRequired,
  leftActions: PropTypes$1.arrayOf(PropTypes$1.node),
  rightAction: PropTypes$1.node,
  className: PropTypes$1.string
};

var css$8 = ".BookingSteps-module_bookingSteps__6TCaf {\n  padding-left: 30px;\n  font-size: 16px;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf > div:first-child {\n  padding-bottom: 30px;\n  position: relative;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf > div:first-child:before {\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: -20px;\n  margin-left: 4px;\n  bottom: -10px;\n  border-right: 2px dotted #32a0c5;\n}\n\n.BookingSteps-module_stepName__3dA-f {\n  font-size: 1.2em;\n  font-weight: 500;\n  color: #32a0c5;\n  margin: 0;\n  position: relative;\n}\n\n.BookingSteps-module_stepName__3dA-f:before {\n  position: absolute;\n  content: '';\n  width: 10px;\n  height: 10px;\n  top: 50%;\n  left: -20px;\n  border-radius: 50%;\n  background-color: #32a0c5;\n  margin-top: -5px;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf div span {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.9em;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf div span i {\n  /* margin-right: var(--marginSmall); */\n  font-size: 0.7em;\n  width: 30px;\n}\n";
var s$8 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","bookingSteps":"BookingSteps-module_bookingSteps__6TCaf","stepName":"BookingSteps-module_stepName__3dA-f"};
styleInject(css$8);

var BookingSteps = function BookingSteps(_ref) {
  var fromSpot = _ref.fromSpot,
      toSpot = _ref.toSpot,
      startAt = _ref.startAt,
      endAt = _ref.endAt,
      texts = _ref.texts,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$8.bookingSteps, " ").concat(className)
  }, React__default.createElement("div", null, React__default.createElement("h3", {
    className: s$8.stepName
  }, texts.pickup), React__default.createElement("span", null, React__default.createElement("i", {
    className: "icon icon-ec-departure"
  }), fromSpot), React__default.createElement("span", null, React__default.createElement("i", {
    className: "icon icon-ec-dateA"
  }), startAt)), React__default.createElement("div", null, React__default.createElement("h3", {
    className: s$8.stepName
  }, texts.return), React__default.createElement("span", null, React__default.createElement("i", {
    className: "icon icon-ec-arrival"
  }), toSpot), React__default.createElement("span", null, React__default.createElement("i", {
    className: "icon icon-ec-dateB"
  }), endAt)));
};

BookingSteps.defaultProps = {
  className: ''
};
BookingSteps.propTypes = {
  fromSpot: PropTypes$1.string.isRequired,
  toSpot: PropTypes$1.string.isRequired,
  startAt: PropTypes$1.string.isRequired,
  endAt: PropTypes$1.string.isRequired,
  texts: BookingStepsTextsType.isRequired,
  className: PropTypes$1.string
};

var css$9 = ".Button-module_button__6y6Zv {\n  background-color: #ffcd02;\n  border-radius: 8px;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0.8em 1.1em;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-transition: background-color 0.2s ease-in-out;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.Button-module_button__6y6Zv span {\n  position: relative;\n}\n\n.Button-module_button__6y6Zv .Button-module_track__n1eRD {\n  -webkit-animation: Button-module_outFromFetching__2D1oh 0.2s linear forwards;\n          animation: Button-module_outFromFetching__2D1oh 0.2s linear forwards;\n  background-color: #ffcd02;\n  border-radius: 8px;\n  content: '';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 0%;\n}\n\n.Button-module_button__6y6Zv[disabled] {\n  background-color: #7890a3;\n  cursor: not-allowed\n}\n\n.Button-module_button__6y6Zv[disabled]:hover {\n  background-color: #7890a3;\n}\n\n.Button-module_button__6y6Zv.Button-module_fetching__1tCOO {\n  background-color: rgba(255, 205, 2, .41961);\n}\n\n.Button-module_track__n1eRD.Button-module_fetchingTrack__SjURZ {\n  -webkit-animation: Button-module_fetching__1tCOO 3s cubic-bezier(.33,.6,.3,.69) forwards;\n          animation: Button-module_fetching__1tCOO 3s cubic-bezier(.33,.6,.3,.69) forwards;\n  opacity: 1;\n}\n\n@-webkit-keyframes Button-module_fetching__1tCOO {\n    from {\n      width: 0%;\n    }\n\n    to {\n      width: 100%;\n    }\n}\n\n@keyframes Button-module_fetching__1tCOO {\n    from {\n      width: 0%;\n    }\n\n    to {\n      width: 100%;\n    }\n}\n\n@-webkit-keyframes Button-module_outFromFetching__2D1oh {\n    from {\n      opacity: 1;\n      width: 100%;\n    }\n\n    to {\n      opacity: 0;\n      width: 100%;\n    }\n}\n\n@keyframes Button-module_outFromFetching__2D1oh {\n    from {\n      opacity: 1;\n      width: 100%;\n    }\n\n    to {\n      opacity: 0;\n      width: 100%;\n    }\n}\n";
var s$9 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","button":"Button-module_button__6y6Zv","track":"Button-module_track__n1eRD","outFromFetching":"Button-module_outFromFetching__2D1oh","fetching":"Button-module_fetching__1tCOO","fetchingTrack":"Button-module_fetchingTrack__SjURZ"};
styleInject(css$9);

var Button = function Button(_ref) {
  var animationDuration = _ref.animationDuration,
      fetchingDelay = _ref.fetchingDelay,
      children = _ref.children,
      href = _ref.href,
      to = _ref.to,
      type = _ref.type,
      title = _ref.title,
      component = _ref.component,
      onClick = _ref.onClick,
      className = _ref.className,
      fetching = _ref.fetching,
      disabled = _ref.disabled;

  var props = _objectSpread({
    className: [s$9.button, fetching ? s$9.fetching : '', className].join(' ')
  }, !fetching && onClick ? {
    onClick: onClick
  } : {}, type ? {
    type: type
  } : {}, href ? {
    href: href
  } : {}, to ? {
    to: to
  } : {}, disabled ? {
    disabled: disabled
  } : {}, {
    title: title
  });

  var Element = onClick || type !== '' ? 'button' : component;
  return React__default.createElement(Element, props, React__default.createElement("span", {
    className: [s$9.track, fetching ? s$9.fetchingTrack : ''].join(' '),
    style: {
      animationDuration: "".concat(animationDuration, "s"),
      animationDelay: fetching ? "".concat(fetchingDelay, "s") : ''
    }
  }), React__default.createElement("span", null, children));
};

Button.defaultProps = {
  animationDuration: 1.5,
  fetchingDelay: 0.5,
  href: '#',
  onClick: null,
  to: '',
  type: '',
  className: '',
  fetching: false,
  disabled: false,
  component: 'a'
};
Button.propTypes = {
  animationDuration: PropTypes$1.number,
  fetchingDelay: PropTypes$1.number,
  href: PropTypes$1.string,
  onClick: PropTypes$1.func,
  to: PropTypes$1.string,
  type: PropTypes$1.string,
  title: PropTypes$1.string.isRequired,
  className: PropTypes$1.string,
  fetching: PropTypes$1.bool,
  disabled: PropTypes$1.bool,
  children: PropTypes$1.string.isRequired,
  component: PropTypes$1.oneOf([PropTypes$1.string, PropTypes$1.node])
};

var css$a = ".BookingModificationSummaryRow-module_summaryRow__3yRUL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 5px 0;\n}\n\n.BookingModificationSummaryRow-module_summaryRowText__3WlNz {\n  color: #163457;\n  font-size: 16px;\n  margin: 0;\n}\n\n.BookingModificationSummaryRow-module_summaryRowPrice__Zr9Jr {\n  margin: 0;\n  font-size: 22px;\n}\n";
var s$a = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","summaryRow":"BookingModificationSummaryRow-module_summaryRow__3yRUL","summaryRowText":"BookingModificationSummaryRow-module_summaryRowText__3WlNz","summaryRowPrice":"BookingModificationSummaryRow-module_summaryRowPrice__Zr9Jr"};
styleInject(css$a);

var BookingModificationSummaryRow = function BookingModificationSummaryRow(_ref) {
  var text = _ref.text,
      price = _ref.price,
      isExtra = _ref.isExtra,
      className = _ref.className,
      textClassName = _ref.textClassName,
      priceClassName = _ref.priceClassName,
      count = _ref.count;
  return React__default.createElement("div", {
    className: "".concat(s$a.summaryRow, " ").concat(className)
  }, React__default.createElement("p", {
    className: "".concat(s$a.summaryRowText, " ").concat(textClassName)
  }, "".concat(text).concat(count > 1 ? "(x".concat(count, ")") : '')), React__default.createElement("p", {
    className: "".concat(s$a.summaryRowPrice, " ").concat(priceClassName)
  }, isExtra ? '+' : '', parseFloat(price).toFixed(2), "\u20AC"));
};

BookingModificationSummaryRow.defaultProps = {
  isExtra: false,
  textClassName: '',
  priceClassName: '',
  className: '',
  count: 1
};
BookingModificationSummaryRow.propTypes = {
  text: PropTypes$1.string.isRequired,
  price: PropTypes$1.number.isRequired,
  isExtra: PropTypes$1.bool,
  textClassName: PropTypes$1.string,
  priceClassName: PropTypes$1.string,
  className: PropTypes$1.string,
  count: PropTypes$1.number
};

var bookingModificationSummaryTextType = PropTypes$1.shape({
  initialPrice: PropTypes$1.string,
  routingFee: PropTypes$1.string,
  parkingFee: PropTypes$1.string,
  administrativeFee: PropTypes$1.string,
  leftToPay: PropTypes$1.string
});
var defaultTexts$2 = {
  initialPrice: 'Prix initial',
  routingFee: 'Acheminement',
  parkingFee: 'Durée de stationnement supplémentaire',
  administrativeFee: 'Frais de dossier*',
  total: 'Total reste à payer'
};

var FeePropType = PropTypes$1.oneOf(PropTypes$1.string, PropTypes$1.number);
var BookingModificationSummaryPriceType = PropTypes$1.shape({
  initialPrice: PropTypes$1.string,
  routingFee: FeePropType,
  parkingFee: FeePropType,
  administrativeFee: FeePropType,
  countRoutingFee: PropTypes$1.number,
  countParkingFee: PropTypes$1.number,
  countAdministrativeFee: PropTypes$1.number,
  total: PropTypes$1.string
});

var css$b = ".BookingModificationSummary-module_bookingModificationSummaryContainer__m75Sd {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.BookingModificationSummary-module_horizontalRule__zXT2f {\n  border: 0;\n  border-top: 2px solid #163457;\n  margin: 8px 0;\n  width: 100%;\n}\n\n.BookingModificationSummary-module_totalSummaryRow__2aMiu > .BookingModificationSummary-module_price__3elbC {\n  font-size: 22px;\n}\n\n.BookingModificationSummary-module_bold__8CWuB {\n  font-weight: 700;\n}\n\n.BookingModificationSummary-module_bigText__ykaTn {\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.BookingModificationSummary-module_bigPrice__39KvY {\n  font-size: 32px;\n}\n";
var s$b = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","bookingModificationSummaryContainer":"BookingModificationSummary-module_bookingModificationSummaryContainer__m75Sd","horizontalRule":"BookingModificationSummary-module_horizontalRule__zXT2f","totalSummaryRow":"BookingModificationSummary-module_totalSummaryRow__2aMiu","price":"BookingModificationSummary-module_price__3elbC","bold":"BookingModificationSummary-module_bold__8CWuB","bigText":"BookingModificationSummary-module_bigText__ykaTn","bigPrice":"BookingModificationSummary-module_bigPrice__39KvY"};
styleInject(css$b);

var BookingModificationSummary = function BookingModificationSummary(_ref) {
  var texts = _ref.texts,
      className = _ref.className,
      bookingModificationSummaryPrice = _ref.bookingModificationSummaryPrice;
  return React__default.createElement("div", {
    className: "".concat(s$b.bookingModificationSummaryContainer, " ").concat(className)
  }, React__default.createElement(BookingModificationSummaryRow, {
    price: bookingModificationSummaryPrice.initialPrice,
    text: texts.initialPrice,
    textClassName: s$b.bold
  }), +bookingModificationSummaryPrice.parkingFee || +bookingModificationSummaryPrice.routingFee || +bookingModificationSummaryPrice.administrativeFee ? React__default.createElement("hr", {
    className: s$b.horizontalRule
  }) : null, +bookingModificationSummaryPrice.parkingFee ? React__default.createElement(BookingModificationSummaryRow, {
    price: bookingModificationSummaryPrice.parkingFee,
    text: texts.parkingFee,
    count: bookingModificationSummaryPrice.countParkingFee,
    isExtra: true
  }) : null, +bookingModificationSummaryPrice.routingFee ? React__default.createElement(BookingModificationSummaryRow, {
    price: bookingModificationSummaryPrice.routingFee,
    count: bookingModificationSummaryPrice.countRoutingFee,
    text: texts.routingFee,
    isExtra: true
  }) : null, +bookingModificationSummaryPrice.administrativeFee ? React__default.createElement(BookingModificationSummaryRow, {
    price: bookingModificationSummaryPrice.administrativeFee,
    count: bookingModificationSummaryPrice.countAdministrativeFee,
    text: texts.administrativeFee,
    isExtra: true
  }) : null, React__default.createElement("hr", {
    className: s$b.horizontalRule
  }), React__default.createElement(BookingModificationSummaryRow, {
    price: bookingModificationSummaryPrice.total,
    text: texts.total,
    textClassName: "".concat(s$b.bold, " ").concat(s$b.bigText),
    priceClassName: s$b.bigPrice
  }));
};

BookingModificationSummary.defaultProps = {
  className: '',
  texts: defaultTexts$2
};
BookingModificationSummary.propTypes = {
  texts: bookingModificationSummaryTextType,
  className: PropTypes$1.string,
  bookingModificationSummaryPrice: BookingModificationSummaryPriceType.isRequired
};

var css$c = ".CarCard-module_carName__3U28- {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n}\n\n.CarCard-module_footer__2tcPB {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-left: 0.5em;\n}\n\n.CarCard-module_carImage__2VNnU {\n  margin-top: -0.5em;\n  width: 100px;\n}\n\n.CarCard-module_checkIcon__2K1Lg {\n  color: #fefefe;\n  font-size: 22px;\n}\n\n.CarCard-module_editIcon__1JUFI {\n  margin-right: -0.75em;\n}\n\n.CarCard-module_editButton__4jhVF {\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.CarCard-module_pendingDeletion__1KStd {\n  background-color: #eceff6;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n}\n\n.CarCard-module_pendingModification__2FzfP {\n  padding: 20px;\n}\n\n.CarCard-module_deletionAlert__2nLFJ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.CarCard-module_deletionAlert__2nLFJ p {\n  margin: 10px 0;\n}\n\n.CarCard-module_deletionButtons__3RyZ- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n";
var s$c = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","carName":"CarCard-module_carName__3U28-","footer":"CarCard-module_footer__2tcPB","carImage":"CarCard-module_carImage__2VNnU","checkIcon":"CarCard-module_checkIcon__2K1Lg","editIcon":"CarCard-module_editIcon__1JUFI","editButton":"CarCard-module_editButton__4jhVF","pendingDeletion":"CarCard-module_pendingDeletion__1KStd","pendingModification":"CarCard-module_pendingModification__2FzfP","deletionAlert":"CarCard-module_deletionAlert__2nLFJ","deletionButtons":"CarCard-module_deletionButtons__3RyZ-"};
styleInject(css$c);

var CarType = PropTypes$1.shape({
  name: PropTypes$1.string,
  numberPlate: PropTypes$1.string
});

var TextsType = PropTypes$1.shape({
  modify: PropTypes$1.string,
  save: PropTypes$1.string,
  confirmDeletionTitle: PropTypes$1.string,
  confirmDeletionSentence: PropTypes$1.string,
  cancel: PropTypes$1.string,
  confirm: PropTypes$1.string
});
var DefaultTexts = {
  modify: 'Changer',
  save: 'Enregistrer',
  confirmDeletionTitle: 'Confirmation',
  confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce véhicule ?',
  cancel: 'Annuler',
  confirm: 'Confirmer'
};

var css$d = ".CarCardDeletionAlert-module_deletionAlert__1X4X3 {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.CarCardDeletionAlert-module_deletionAlert__1X4X3 p {\n  margin: 10px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.CarCardDeletionAlert-module_deletionButtons__2ZjMT {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n";
var s$d = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","deletionAlert":"CarCardDeletionAlert-module_deletionAlert__1X4X3","deletionButtons":"CarCardDeletionAlert-module_deletionButtons__2ZjMT"};
styleInject(css$d);

var CarCardDeletionAlert = function CarCardDeletionAlert(_ref) {
  var texts = _ref.texts,
      onDelete = _ref.onDelete,
      onCancel = _ref.onCancel,
      id = _ref.id;
  return React__default.createElement("div", {
    className: s$d.deletionAlert,
    id: id
  }, React__default.createElement("strong", null, texts.confirmDeletionTitle), React__default.createElement("p", null, texts.confirmDeletionSentence), React__default.createElement("div", {
    className: s$d.deletionButtons
  }, React__default.createElement(LinkUnderlined, {
    onClick: onCancel,
    id: "".concat(id, "CancelLink")
  }, React__default.createElement("strong", null, texts.cancel)), React__default.createElement(LinkUnderlined, {
    onClick: onDelete,
    id: "".concat(id, "ConfirmLink")
  }, React__default.createElement("strong", null, texts.confirm))));
};

CarCardDeletionAlert.defaultProps = {
  texts: DefaultTexts
};
CarCardDeletionAlert.propTypes = {
  texts: TextsType,
  onDelete: PropTypes$1.func.isRequired,
  onCancel: PropTypes$1.func.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$e = ".CarCardHeader-module_name__FBdn8 {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n}\n\n.CarCardHeader-module_editIcon__3m80I:before, .CarCardHeader-module_deleteIcon__3YQd_:before {\n  color: #32a0c5;\n}\n\n.CarCardHeader-module_editButton__1G4OQ {\n  background: none;\n  border: 0;\n  margin: 0;\n  margin-right: -0.75em;\n  padding: 0;\n}\n";
var s$e = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","name":"CarCardHeader-module_name__FBdn8","editIcon":"CarCardHeader-module_editIcon__3m80I","deleteIcon":"CarCardHeader-module_deleteIcon__3YQd_","editButton":"CarCardHeader-module_editButton__1G4OQ"};
styleInject(css$e);

var CarCardHeader = function CarCardHeader(_ref) {
  var car = _ref.car,
      editable = _ref.editable,
      deletable = _ref.deletable,
      pendingDeletion = _ref.pendingDeletion,
      pendingModification = _ref.pendingModification,
      texts = _ref.texts,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      id = _ref.id;
  var name = car.name;
  var button = null;

  if (editable && !pendingModification) {
    button = React__default.createElement("button", {
      className: s$e.editButton,
      title: texts.modify,
      onClick: onEdit,
      id: "".concat(id, "Button")
    }, React__default.createElement("i", {
      className: "icon-edit ".concat(s$e.editIcon),
      id: "".concat(id, "Icon")
    }));
  } else if (deletable && !pendingDeletion) {
    button = React__default.createElement("button", {
      className: s$e.editButton,
      title: texts.delete,
      onClick: onDelete,
      id: "".concat(id, "Button")
    }, React__default.createElement("i", {
      className: "icon-bin ".concat(s$e.deleteIcon),
      id: "".concat(id, "Icon")
    }));
  }

  return React__default.createElement("span", {
    className: s$e.name,
    id: id
  }, name, button);
};

CarCardHeader.defaultProps = {
  texts: DefaultTexts
};
CarCardHeader.propTypes = {
  car: CarType.isRequired,
  editable: PropTypes$1.bool.isRequired,
  deletable: PropTypes$1.bool.isRequired,
  pendingDeletion: PropTypes$1.bool.isRequired,
  pendingModification: PropTypes$1.bool.isRequired,
  texts: TextsType,
  onEdit: PropTypes$1.func.isRequired,
  onDelete: PropTypes$1.func.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$f = ".CarCardFooter-module_footer__3Rxvl {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n  padding: 0 16px;\n  padding: 0 1rem;\n}\n\n.CarCardFooter-module_carImage__1jNWG {\n  margin-top: -0.5em;\n  width: 100px;\n}\n\n.CarCardFooter-module_checkIcon__35HXC {\n  color: #fefefe;\n  font-size: 22px;\n}\n";
var s$f = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","footer":"CarCardFooter-module_footer__3Rxvl","carImage":"CarCardFooter-module_carImage__1jNWG","checkIcon":"CarCardFooter-module_checkIcon__35HXC"};
styleInject(css$f);

var _ref15 =
/*#__PURE__*/
React__default.createElement("linearGradient", {
  id: "SVGID_1_",
  x1: 830.808,
  x2: 1200.208,
  y1: 313.956,
  y2: 313.956,
  gradientTransform: "rotate(180 648.158 172.03)",
  gradientUnits: "userSpaceOnUse"
}, React__default.createElement("stop", {
  offset: 0,
  stopColor: "#fff"
}), React__default.createElement("stop", {
  offset: 1,
  stopColor: "#fff",
  stopOpacity: 0
}));

var _ref18 =
/*#__PURE__*/
React__default.createElement("linearGradient", {
  id: "SVGID_2_",
  x1: 844.308,
  x2: 971.208,
  y1: 201.73,
  y2: 201.73,
  gradientTransform: "rotate(180 648.158 172.03)",
  gradientUnits: "userSpaceOnUse"
}, React__default.createElement("stop", {
  offset: 0,
  stopColor: "#fff"
}), React__default.createElement("stop", {
  offset: 1,
  stopColor: "#fff",
  stopOpacity: 0
}));

var _ref22 =
/*#__PURE__*/
React__default.createElement("g", {
  opacity: 0.2
}, React__default.createElement("circle", {
  cx: 537.1,
  cy: 188.8,
  r: 6.3,
  className: "st15"
}), React__default.createElement("path", {
  d: "M520.1 185c0 1.6 1.3 2.8 2.8 2.8 1.6 0 2.8-1.3 2.8-2.8 0-1.6-1.3-2.8-2.8-2.8s-2.8 1.3-2.8 2.8zm-2.8-9.3c-15.8-1.7-31.7-3.5-47.5-5.2m46.3 20.3l-25.2-1.8",
  className: "st15"
}), React__default.createElement("path", {
  d: "M550.7 207.3c1-.3 15-4.6 16-13.2.3-2.6-.3-7.9-13.8-17.2-26.3-18.1-54.3-19.8-58-19.9-9.5-.4-25 .3-43.3 6.7",
  className: "st15"
}));

var _ref29 =
/*#__PURE__*/
React__default.createElement("linearGradient", {
  id: "SVGID_3_",
  x1: 931.108,
  x2: 1268.908,
  y1: 250.03,
  y2: 250.03,
  gradientTransform: "rotate(180 648.158 172.03)",
  gradientUnits: "userSpaceOnUse"
}, React__default.createElement("stop", {
  offset: 0,
  stopColor: "#fff"
}), React__default.createElement("stop", {
  offset: 1,
  stopColor: "#fff",
  stopOpacity: 0
}));

var _ref40 =
/*#__PURE__*/
React__default.createElement("g", {
  opacity: 0.3
}, React__default.createElement("path", {
  fill: "#fff",
  d: "M88.2 100.9l43-56.5-3.8.4 43-4.5-62.5 71.5-12.4-1.4-14.7-19 7.4 9.5z",
  opacity: 0.5
}));

var _ref46 =
/*#__PURE__*/
React__default.createElement("defs", null, React__default.createElement("path", {
  id: "SVGID_4_",
  d: "M346.4 263.5c0-43.2 24.8-78.2 55.4-78.2s55.4 35 55.4 78.2c0 8.4-2.7 24-2.7 24l7.2.2 27 4.7s5.2 23.1-18.1 37.1c-16.9 10.1-62.7 12.3-68.9 12.3-30.5-.1-55.3-35.1-55.3-78.3z"
}));

var _ref47 =
/*#__PURE__*/
React__default.createElement("clipPath", {
  id: "SVGID_5_"
}, React__default.createElement("use", {
  overflow: "visible",
  xlinkHref: "#SVGID_4_"
}));

var _ref48 =
/*#__PURE__*/
React__default.createElement("g", {
  clipPath: "url(#SVGID_5_)"
}, React__default.createElement("path", {
  d: "M395.5 199.5h.2c1.2-.1 2.4-.2 3.7-.2 1 0 2 .1 3 .1l13.3-.1h18.6c25.8 0 46.8 29.3 46.8 65.5s-20.9 65.5-46.8 65.5h-34.9c-25.8 0-46.8-29.3-46.8-65.5 0-34.4 18.9-62.6 42.9-65.3z",
  className: "st1"
}), React__default.createElement("ellipse", {
  cx: 395.5,
  cy: 264.8,
  className: "st31",
  rx: 42.9,
  ry: 60.3
}), React__default.createElement("ellipse", {
  cx: 395.5,
  cy: 264.8,
  className: "st32",
  rx: 34.3,
  ry: 48.2
}), React__default.createElement("ellipse", {
  cx: 395.5,
  cy: 264.8,
  className: "st33",
  rx: 23.9,
  ry: 33.6
}), React__default.createElement("ellipse", {
  cx: 395.5,
  cy: 264.8,
  className: "st32",
  rx: 7.3,
  ry: 10.3
}));

var _ref50 =
/*#__PURE__*/
React__default.createElement("defs", null, React__default.createElement("path", {
  id: "SVGID_6_",
  d: "M26.2 261.9c0-37.6 21.6-68.1 48.2-68.1s48.2 30.5 48.2 68.1c0 5.7-1.4 16.6-1.4 16.6l20.6.7S155.7 330 74.4 330c-26.6 0-48.2-30.5-48.2-68.1z"
}));

var _ref51 =
/*#__PURE__*/
React__default.createElement("clipPath", {
  id: "SVGID_7_"
}, React__default.createElement("use", {
  overflow: "visible",
  xlinkHref: "#SVGID_6_"
}));

var _ref52 =
/*#__PURE__*/
React__default.createElement("g", {
  clipPath: "url(#SVGID_7_)"
}, React__default.createElement("path", {
  d: "M69 206.2h.1c1.1-.1 2.1-.2 3.2-.2.9 0 1.7.1 2.6.1l11.6-.1h16.2c22.5 0 40.7 25.5 40.7 57.1 0 31.5-18.2 57.1-40.7 57.1H72.3c-22.5 0-40.7-25.5-40.7-57.1 0-30 16.4-54.5 37.4-56.9z",
  className: "st1"
}), React__default.createElement("ellipse", {
  cx: 69,
  cy: 263.1,
  className: "st31",
  rx: 37.4,
  ry: 52.5
}), React__default.createElement("ellipse", {
  cx: 69,
  cy: 263.1,
  className: "st32",
  rx: 29.9,
  ry: 42
}), React__default.createElement("ellipse", {
  cx: 69,
  cy: 263.1,
  className: "st33",
  rx: 21.6,
  ry: 30.4
}), React__default.createElement("ellipse", {
  cx: 69,
  cy: 263.1,
  className: "st32",
  rx: 6.6,
  ry: 9.3
}));

var carImage = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20id%3D%22Capa_1%22%20viewBox%3D%220%200%20735.1%20361.2%22%3E%3Cstyle%3E.st1%7Bfill%3A%23383c3f%7D.st2%7Bfill%3A%23c2c8cc%7D.st4%7Bfill%3A%236a6e70%7D.st7%7Bfill%3A%23617077%7D.st8%7Bfill%3A%233d474c%7D.st12%7Bfill%3A%23202628%7D.st15%2C.st19%7Bfill%3Anone%3Bstroke%3A%231a2f47%3Bstroke-miterlimit%3A10%7D.st15%7Bstroke-linecap%3Around%3Bstroke-linejoin%3Around%3Bstroke-width%3A4.1021%7D.st19%7Bstroke-width%3A1.0255%7D.st24%7Bfill%3A%23495559%7D.st31%7Bfill%3A%23585e61%7D.st32%7Bfill%3A%239b9d9e%7D.st33%7Bfill%3A%23a9aaab%7D%3C%2Fstyle%3E%3Cpath%20fill%3D%22%23063147%22%20d%3D%22M712.5%20323.8s-290.1%2020-365.6%2018.3-301.5-14.2-319.4-20.3-26.3-27.3%20159.1-17%20517.2-31.8%20525.9%2019z%22%20opacity%3D%22.2%22%2F%3E%3Cpath%20d%3D%22M618.2%20184.8h.2c1.2-.1%202.4-.2%203.7-.2%201%200%202%20.1%203%20.1l13.3-.1H657c25.8%200%2046.8%2029.3%2046.8%2065.5s-20.9%2065.5-46.8%2065.5h-34.9c-25.8%200-46.8-29.3-46.8-65.5-.1-34.4%2018.9-62.6%2042.9-65.3z%22%20class%3D%22st1%22%2F%3E%3Cellipse%20cx%3D%22618.2%22%20cy%3D%22250.1%22%20class%3D%22st1%22%20rx%3D%2242.9%22%20ry%3D%2260.3%22%2F%3E%3Cellipse%20cx%3D%22618.2%22%20cy%3D%22250.1%22%20class%3D%22st1%22%20rx%3D%2234.3%22%20ry%3D%2248.2%22%2F%3E%3Cpath%20d%3D%22M618.2%20235.5H634v29.1h-15.8c-5.7%200-10.3-6.5-10.3-14.5-.1-8.1%204.6-14.6%2010.3-14.6z%22%20class%3D%22st1%22%2F%3E%3Cpath%20d%3D%22M621.9%20235.5h15.8v29.1h-15.8c-5.7%200-10.3-6.5-10.3-14.5-.1-8.1%204.6-14.6%2010.3-14.6z%22%20class%3D%22st1%22%2F%3E%3Cpath%20d%3D%22M720.1%20258.9v-64.8l-19.6-44.6-113.4-42.6S517%2051.5%20472.8%2035.6l-45.4-13.5S249.5-.6%2099.8%2040.5l-72.4%2074.8-17.2%2086.5%204.3%2051.5%2014.1%2016%2092%209.2%20235.6%209.2h105.5l53.4%209.2%20165-9.8%2024.5-11.7%2015.3-2.5v-14h.2z%22%20class%3D%22st2%22%2F%3E%3Cpath%20fill%3D%22%23e8f1f8%22%20d%3D%22M494.2%20285.8l216.9-12.1c3.5-.2%206.3-3.3%206.1-6.8s-3.3-6.3-6.8-6.1l-216.9%2012.1c-3.5.2-6.3%203.3-6.1%206.8s3.2%206.3%206.8%206.1z%22%2F%3E%3Cpath%20d%3D%22M503%20269.6l202.5-9.4c6.8-.3%2012.4-5.7%2012.9-12.5l.1-1.8c.7-8.2-6-15.1-14.2-14.7l-202.5%209.4c-6.8.3-12.4%205.7-12.9%2012.5l-.1%201.8c-.7%208.2%206%2015.1%2014.2%2014.7z%22%20class%3D%22st4%22%2F%3E%3Cpath%20fill%3D%22%23555556%22%20d%3D%22M703.7%20246.3l-.2%201.2c-.7%204.5-6.4%208.1-13.3%208.4l-197.9%209.2c-2.4-2.7-3.8-6.3-3.5-10.2l.1-1.8c.2-2.6%201.2-5%202.7-7l197.9-9.2c8.4-.4%2015%204%2014.2%209.4z%22%2F%3E%3Cpath%20d%3D%22M704.1%20165l-182.8%2011.7%2018.4%2022.7L709%20188.3l-4.9-23.3z%22%20class%3D%22st4%22%2F%3E%3Cpath%20fill%3D%22%23d5d5d5%22%20d%3D%22M720.1%20194.1v1.8l-27.6-7%203.6-22.1%204.4-17.1%2019.6%2044.4zm-150.3%201.6L557.5%20176l-60.1-16.4H452l21.4%2036.1%2080.4%209.8%2016-9.8z%22%2F%3E%3Cpath%20d%3D%22M580.8%20109.2s-70.1-55.4-114.3-71.3H298l78.5%2080.5%20204.3-9.2z%22%20class%3D%22st7%22%2F%3E%3Cpath%20d%3D%22M274.7%2040.5l-53.4-5.6-93.9%209.9-46.6%2046.6%2014.7%2019%20230.7%2027L360%20125l-69.4-73.5-15.9-11z%22%20class%3D%22st8%22%2F%3E%3ClinearGradient%20id%3D%22SVGID_1_%22%20x1%3D%22830.8078%22%20x2%3D%221200.2078%22%20y1%3D%22313.9564%22%20y2%3D%22313.9564%22%20gradientTransform%3D%22rotate%28180%20648.1578%20172.02975%29%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20fill%3D%22url%28%23SVGID_1_%29%22%20d%3D%22M427.4%2022.1l38.1%2011.3c-37-3.1-208.7-15.4-369.4%2010.9l3.7-3.8C249.5-.6%20427.4%2022.1%20427.4%2022.1z%22%2F%3E%3Cpath%20fill%3D%22%23d6d8da%22%20d%3D%22M611.5%20262.4c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4V260c0%201.3-1%202.4-2.4%202.4zm-15.2%200c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4V260c0%201.3-1.1%202.4-2.4%202.4zm-14.8%201.8c-1.3%200-2.4-1.1-2.4-2.4V242c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.4-1%202.5-2.4%202.5zm-15.2%200c-1.3%200-2.4-1.1-2.4-2.4V242c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.4-1.1%202.5-2.4%202.5zm-14.6.2c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4V262c0%201.3-1.1%202.4-2.4%202.4zm136.8-5.7c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.3-1.1%202.4-2.4%202.4zm-15.3%200c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.3-1%202.4-2.4%202.4zm-14.7%201.8c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.3-1.1%202.4-2.4%202.4zm-15.3%200c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.3-1%202.4-2.4%202.4zm-14.5.2c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v19.7c0%201.4-1.1%202.4-2.4%202.4zm-92.2%203.7c-1.3%200-2.4-1.1-2.4-2.4v-19.7c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4V262c0%201.3-1.1%202.4-2.4%202.4zm-14%202.8c-1.3%200-2.4-1.1-2.4-2.4v-22.3c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v22.3c0%201.3-1.1%202.4-2.4%202.4zm-15.3%200c-1.3%200-2.4-1.1-2.4-2.4v-20.5c0-1.3%201.1-2.4%202.4-2.4s2.4%201.1%202.4%202.4v20.5c.1%201.3-1%202.4-2.4%202.4z%22%2F%3E%3ClinearGradient%20id%3D%22SVGID_2_%22%20x1%3D%22844.3077%22%20x2%3D%22971.2078%22%20y1%3D%22201.7297%22%20y2%3D%22201.7297%22%20gradientTransform%3D%22rotate%28180%20648.1578%20172.02975%29%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20fill%3D%22url%28%23SVGID_2_%29%22%20d%3D%22M325.1%20147.2l25.9-14.5-7-1.8%2016-5.9%2092%2034.6-78.4-20.9-48.5%208.5z%22%2F%3E%3Cpath%20d%3D%22M88.2%20100.9l-7.4-9.5%2046.6-46.6%203.8-.4-43%2056.5zm137.3-65.5l-26.2%2087.1-7.2-.8L223%2035.1l2.5.3z%22%20class%3D%22st12%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%228.204%22%20d%3D%22M517.9%20184.2c-15.8-1.7-31.7-3.5-47.5-5.2%22%20opacity%3D%22.5%22%2F%3E%3Cg%20opacity%3D%22.2%22%3E%3Ccircle%20cx%3D%22537.1%22%20cy%3D%22188.8%22%20r%3D%226.3%22%20class%3D%22st15%22%2F%3E%3Cpath%20d%3D%22M520.1%20185c0%201.6%201.3%202.8%202.8%202.8%201.6%200%202.8-1.3%202.8-2.8%200-1.6-1.3-2.8-2.8-2.8s-2.8%201.3-2.8%202.8zm-2.8-9.3c-15.8-1.7-31.7-3.5-47.5-5.2m46.3%2020.3l-25.2-1.8%22%20class%3D%22st15%22%2F%3E%3Cpath%20d%3D%22M550.7%20207.3c1-.3%2015-4.6%2016-13.2.3-2.6-.3-7.9-13.8-17.2-26.3-18.1-54.3-19.8-58-19.9-9.5-.4-25%20.3-43.3%206.7%22%20class%3D%22st15%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%223.817%22%20d%3D%22M712.3%20177.1l-10.2%205.4%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.911%22%20d%3D%22M707.8%20169.1l-5.1%202.4%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%231a2f47%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%22.629%22%20d%3D%22M686.4%20175.9c-88.5.8-107.4%201.5-107.4%202%200%201.1%20101%20.7%20101.1%204.2.1%202.5-53%206.1-99.9%208.8%22%2F%3E%3Cpath%20d%3D%22M120.7%2045.1s82-29.3%20336.5-14.2%22%20class%3D%22st19%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%221.911%22%20d%3D%22M465.2%20273.3s6.4-81.3-54.8-91.7M690.9%20194s-34.6%208.1-77%207.8c-42.3-.3-44.2-2.4-44.2-2.4m129.4-44s7.5%209.5-14.9%2010.9-124.2%208.5-124.2%208.5-11.8-1.5-21.1-7.7%22%2F%3E%3Cpath%20fill%3D%22%23996665%22%20d%3D%22M26.2%20116.5l5.2%2018.5-4%2027.9-9.9%202.5%208.7-48.9z%22%2F%3E%3ClinearGradient%20id%3D%22SVGID_3_%22%20x1%3D%22931.1077%22%20x2%3D%221268.9078%22%20y1%3D%22250.0297%22%20y2%3D%22250.0297%22%20gradientTransform%3D%22rotate%28180%20648.1578%20172.02975%29%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23fff%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23fff%22%20stop-opacity%3D%220%22%2F%3E%3C%2FlinearGradient%3E%3Cpath%20fill%3D%22url%28%23SVGID_3_%29%22%20d%3D%22M82.6%20123l-55.2-7.7%2072.1-74.5%2021.2%204.3%206.7-.3-46.6%2046.6%2014.7%2019%20230.7%2027%2039-12.4-40.8%2022.2L82.6%20123z%22%2F%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%228.204%22%20d%3D%22M153.7%20132.7l-35.5-3.1%22%20opacity%3D%22.75%22%2F%3E%3Cpath%20d%3D%22M221.3%2034.9l-23%202.4-34.6%2081.1%2028.8%203.3%2028.8-86.8z%22%20class%3D%22st24%22%2F%3E%3Cpath%20d%3D%22M194.9%20122l-2.4-.3%202.4.3z%22%20class%3D%22st8%22%2F%3E%3Cpath%20d%3D%22M80.8%2091.4l7.4%209.5%2043-56.5-3.8.4%2070.9-7.5-34.6%2081.1-68.2-8-14.7-19z%22%20class%3D%22st7%22%2F%3E%3Cpath%20d%3D%22M223%2035.1l1.4.2-1.4-.2zm-23.7%2087.4l-4.4-.5%204.4.5z%22%20class%3D%22st12%22%2F%3E%3Cpath%20d%3D%22M192.5%20121.7l-13.3-1.5%2013.3%201.5zm-.4%200l5.9-16.5-5.5%2016.5h-.4z%22%20class%3D%22st24%22%2F%3E%3Cpath%20fill%3D%22%23202628%22%20d%3D%22M298%2037.9h168.6c9.5%203.4%2020.2%208.7%2031.2%2014.8L428.6%20116l-52.1%202.3L298%2037.9z%22%20opacity%3D%22.5%22%2F%3E%3Cpath%20d%3D%22M437.5%2091.6l26.3-26.2-40.6%2014-26.2%2026.3%2040.5-14.1z%22%20class%3D%22st7%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M122.7%20223.6s-7.9-33.4-30.2-41.4c-22.4-8%20.9-12.9.9-12.9s28.5%2027.1%2029.3%2054.3zm461.2-113.2s-98.2%2012.7-207.4%208l207.4-8z%22%2F%3E%3Cg%20opacity%3D%22.3%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M88.2%20100.9l43-56.5-3.8.4%2043-4.5-62.5%2071.5-12.4-1.4-14.7-19%207.4%209.5z%22%20opacity%3D%22.5%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M336.3%2099.9L274%20131.3l-73.7-8.6L307%2068.9l29.3%2031z%22%20class%3D%22st7%22%2F%3E%3Cpath%20d%3D%22M362.9%20125l-44.5-19.3-23%202.2-5.9%2014.1%2020.3%2019.4%2030.5-1.3%2022.6-15.1z%22%20class%3D%22st2%22%2F%3E%3Cpath%20d%3D%22M332.2%2016S195%2016%20108.1%2035.2c-19.8%204.4-66.7%2062.7-66.7%2062.7%22%20class%3D%22st19%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M217.6%20170.7s.2-12.4-13.1-12.9-20%206.7-16.3%209.2%2023.9%202.3%2023.9%202.3%22%20opacity%3D%22.3%22%2F%3E%3Cpath%20d%3D%22M346.4%20263.5c0-43.2%2024.8-78.2%2055.4-78.2s55.4%2035%2055.4%2078.2v2.5c-49.3%203.8-86.1%2014.6-107.8%2022.6-1.9-7.8-3-16.3-3-25.1z%22%20class%3D%22st1%22%2F%3E%3Cdefs%3E%3Cpath%20id%3D%22SVGID_4_%22%20d%3D%22M346.4%20263.5c0-43.2%2024.8-78.2%2055.4-78.2s55.4%2035%2055.4%2078.2c0%208.4-2.7%2024-2.7%2024l7.2.2%2027%204.7s5.2%2023.1-18.1%2037.1c-16.9%2010.1-62.7%2012.3-68.9%2012.3-30.5-.1-55.3-35.1-55.3-78.3z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22SVGID_5_%22%3E%3Cuse%20overflow%3D%22visible%22%20xlink%3Ahref%3D%22%23SVGID_4_%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url%28%23SVGID_5_%29%22%3E%3Cpath%20d%3D%22M395.5%20199.5h.2c1.2-.1%202.4-.2%203.7-.2%201%200%202%20.1%203%20.1l13.3-.1h18.6c25.8%200%2046.8%2029.3%2046.8%2065.5s-20.9%2065.5-46.8%2065.5h-34.9c-25.8%200-46.8-29.3-46.8-65.5%200-34.4%2018.9-62.6%2042.9-65.3z%22%20class%3D%22st1%22%2F%3E%3Cellipse%20cx%3D%22395.5%22%20cy%3D%22264.8%22%20class%3D%22st31%22%20rx%3D%2242.9%22%20ry%3D%2260.3%22%2F%3E%3Cellipse%20cx%3D%22395.5%22%20cy%3D%22264.8%22%20class%3D%22st32%22%20rx%3D%2234.3%22%20ry%3D%2248.2%22%2F%3E%3Cellipse%20cx%3D%22395.5%22%20cy%3D%22264.8%22%20class%3D%22st33%22%20rx%3D%2223.9%22%20ry%3D%2233.6%22%2F%3E%3Cellipse%20cx%3D%22395.5%22%20cy%3D%22264.8%22%20class%3D%22st32%22%20rx%3D%227.3%22%20ry%3D%2210.3%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M26.2%20261.9c0-37.6%2021.6-68.1%2048.2-68.1s48.2%2030.5%2048.2%2068.1v2.2c-42.9%203.3-75%2012.7-93.9%2019.7-1.6-6.8-2.5-14.2-2.5-21.9z%22%20class%3D%22st1%22%2F%3E%3Cg%3E%3Cdefs%3E%3Cpath%20id%3D%22SVGID_6_%22%20d%3D%22M26.2%20261.9c0-37.6%2021.6-68.1%2048.2-68.1s48.2%2030.5%2048.2%2068.1c0%205.7-1.4%2016.6-1.4%2016.6l20.6.7S155.7%20330%2074.4%20330c-26.6%200-48.2-30.5-48.2-68.1z%22%2F%3E%3C%2Fdefs%3E%3CclipPath%20id%3D%22SVGID_7_%22%3E%3Cuse%20overflow%3D%22visible%22%20xlink%3Ahref%3D%22%23SVGID_6_%22%2F%3E%3C%2FclipPath%3E%3Cg%20clip-path%3D%22url%28%23SVGID_7_%29%22%3E%3Cpath%20d%3D%22M69%20206.2h.1c1.1-.1%202.1-.2%203.2-.2.9%200%201.7.1%202.6.1l11.6-.1h16.2c22.5%200%2040.7%2025.5%2040.7%2057.1%200%2031.5-18.2%2057.1-40.7%2057.1H72.3c-22.5%200-40.7-25.5-40.7-57.1%200-30%2016.4-54.5%2037.4-56.9z%22%20class%3D%22st1%22%2F%3E%3Cellipse%20cx%3D%2269%22%20cy%3D%22263.1%22%20class%3D%22st31%22%20rx%3D%2237.4%22%20ry%3D%2252.5%22%2F%3E%3Cellipse%20cx%3D%2269%22%20cy%3D%22263.1%22%20class%3D%22st32%22%20rx%3D%2229.9%22%20ry%3D%2242%22%2F%3E%3Cellipse%20cx%3D%2269%22%20cy%3D%22263.1%22%20class%3D%22st33%22%20rx%3D%2221.6%22%20ry%3D%2230.4%22%2F%3E%3Cellipse%20cx%3D%2269%22%20cy%3D%22263.1%22%20class%3D%22st32%22%20rx%3D%226.6%22%20ry%3D%229.3%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%231a2f47%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%224.102%22%20d%3D%22M131.1%20253.7s-9.7-73.3-53.6-74.7%22%20opacity%3D%22.3%22%2F%3E%3C%2Fsvg%3E";

var CarCardFooter = function CarCardFooter(_ref) {
  var texts = _ref.texts,
      mode = _ref.mode,
      onClick = _ref.onClick,
      onSubmit = _ref.onSubmit,
      id = _ref.id;
  var what;

  if (mode.indexOf('delete') === 0) {
    return null;
  }

  if (mode.indexOf('edit') === 0) {
    what = React__default.createElement(LinkUnderlined, {
      onClick: onSubmit,
      id: "".concat(id, "Link")
    }, React__default.createElement("strong", null, texts.save));
  } else {
    what = mode.indexOf('selected') !== -1 ? React__default.createElement("i", {
      className: "icon-checkmark ".concat(s$f.checkIcon),
      id: "".concat(id, "Icon")
    }) : React__default.createElement(LinkUnderlined, {
      onClick: onClick,
      id: "".concat(id, "Link")
    }, React__default.createElement("strong", null, texts.modify));
  }

  return React__default.createElement("div", {
    className: s$f.footer,
    id: id
  }, React__default.createElement("img", {
    src: carImage,
    className: s$f.carImage,
    alt: "Car"
  }), what);
};

CarCardFooter.defaultProps = {
  texts: DefaultTexts,
  onClick: function onClick() {},
  onSubmit: function onSubmit() {}
};
CarCardFooter.propTypes = {
  texts: TextsType,
  mode: PropTypes$1.string.isRequired,
  onClick: PropTypes$1.func,
  onSubmit: PropTypes$1.func,
  id: PropTypes$1.string.isRequired
};

var css$g = ".CarCardContentRead-module_column__3X7s_ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.CarCardContentRead-module_text__2ZnHk {\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n";
var s$g = {"column":"CarCardContentRead-module_column__3X7s_","text":"CarCardContentRead-module_text__2ZnHk"};
styleInject(css$g);

var CarCardContentRead = function CarCardContentRead(_ref) {
  var car = _ref.car,
      id = _ref.id;
  var numberPlate = car.numberPlate;
  return React__default.createElement("div", {
    className: s$g.column,
    id: id
  }, React__default.createElement("span", {
    className: s$g.text,
    id: "carNumberPlate"
  }, numberPlate));
};

CarCardContentRead.propTypes = {
  car: CarType.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$h = ".CarCardContentEdit-module_column__14Vlf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n";
var s$h = {"column":"CarCardContentEdit-module_column__14Vlf"};
styleInject(css$h);

var CarCardContentEdit = function CarCardContentEdit(_ref) {
  var car = _ref.car,
      onChangeNumberPlate = _ref.onChangeNumberPlate,
      onChangeColor = _ref.onChangeColor,
      id = _ref.id;
  var name = car.name,
      color = car.color;
  return React__default.createElement("div", {
    className: s$h.column,
    id: id
  }, React__default.createElement(Input, {
    type: "text",
    value: name,
    onChange: onChangeNumberPlate,
    id: "carNameInput"
  }), React__default.createElement(Input, {
    type: "text",
    value: color,
    onChange: onChangeColor,
    id: "carColorInput"
  }));
};

CarCardContentEdit.propTypes = {
  car: CarType.isRequired,
  onChangeNumberPlate: PropTypes$1.func.isRequired,
  onChangeColor: PropTypes$1.func.isRequired,
  id: PropTypes$1.string.isRequired
};

var CarCard = function CarCard(_ref) {
  var car = _ref.car,
      editable = _ref.editable,
      deletable = _ref.deletable,
      texts = _ref.texts,
      selected = _ref.selected,
      pendingModification = _ref.pendingModification,
      pendingDeletion = _ref.pendingDeletion,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      onClick = _ref.onClick,
      className = _ref.className,
      onChangeColor = _ref.onChangeColor,
      onChangeNumberPlate = _ref.onChangeNumberPlate,
      children = _ref.children,
      onSubmit = _ref.onSubmit,
      onConfirmDeletion = _ref.onConfirmDeletion,
      onCancelDeletion = _ref.onCancelDeletion,
      idPrefix = _ref.idPrefix,
      cardProps = _objectWithoutProperties(_ref, ["car", "editable", "deletable", "texts", "selected", "pendingModification", "pendingDeletion", "onEdit", "onDelete", "onClick", "className", "onChangeColor", "onChangeNumberPlate", "children", "onSubmit", "onConfirmDeletion", "onCancelDeletion", "idPrefix"]);

  var mode = 'read';

  if (pendingDeletion) {
    mode = 'delete';
  }

  if (pendingModification) {
    mode = 'edit';
  }

  if (selected) {
    mode += '-selected';
  }

  var footer = mode.indexOf('delete') === 0 ? null : React__default.createElement(CarCardFooter, {
    texts: texts,
    mode: mode,
    onClick: onClick,
    onSubmit: onSubmit,
    id: "".concat(idPrefix, "Footer")
  });
  var header = null;
  var content = mode.indexOf('read') === 0 ? React__default.createElement(CarCardContentRead, {
    car: car,
    id: "".concat(idPrefix, "ContentRead")
  }) : React__default.createElement(CarCardContentEdit, {
    car: car,
    onChangeColor: onChangeColor,
    onChangeNumberPlate: onChangeNumberPlate,
    id: "".concat(idPrefix, "ContentEdit")
  });

  if (mode.indexOf('delete') === 0) {
    content = React__default.createElement(CarCardDeletionAlert, {
      texts: texts,
      onDelete: onConfirmDeletion,
      onCancel: onCancelDeletion,
      id: "".concat(idPrefix, "DeletionAlert")
    });
  } else {
    header = React__default.createElement(CarCardHeader, {
      texts: texts,
      car: car,
      editable: editable,
      deletable: deletable,
      pendingDeletion: pendingDeletion,
      pendingModification: pendingModification,
      onDelete: onDelete,
      onEdit: onEdit,
      id: "".concat(idPrefix, "Header")
    });
  }

  return React__default.createElement(Card, _extends({
    FooterChildren: footer,
    isSelected: selected,
    contentClassName: [pendingModification ? s$c.pendingModification : '', pendingDeletion ? s$c.pendingDeletion : ''].join(' '),
    className: className
  }, cardProps), header, children !== null ? children : content);
};

CarCard.propTypes = {
  car: CarType.isRequired,
  editable: PropTypes$1.bool,
  deletable: PropTypes$1.bool,
  selected: PropTypes$1.bool,
  pendingModification: PropTypes$1.bool,
  pendingDeletion: PropTypes$1.bool,
  texts: TextsType,
  onEdit: PropTypes$1.func,
  onDelete: PropTypes$1.func,
  onClick: PropTypes$1.func,
  className: PropTypes$1.string,
  onChangeNumberPlate: PropTypes$1.func,
  onChangeColor: PropTypes$1.func,
  children: PropTypes$1.node,
  onSubmit: PropTypes$1.func,
  onConfirmDeletion: PropTypes$1.func,
  onCancelDeletion: PropTypes$1.func,
  idPrefix: PropTypes$1.string
};
CarCard.defaultProps = {
  texts: DefaultTexts,
  editable: true,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: function onClick() {},
  onEdit: function onEdit() {},
  onDelete: function onDelete() {},
  className: '',
  deletable: false,
  onChangeNumberPlate: function onChangeNumberPlate() {},
  onChangeColor: function onChangeColor() {},
  children: null,
  onSubmit: function onSubmit() {},
  onConfirmDeletion: function onConfirmDeletion() {},
  onCancelDeletion: function onCancelDeletion() {},
  idPrefix: 'carCard'
};

var css$i = ".CardTitle-module_card_title__3ZJs5 {\n  color: #32a0c5;\n  font-size: 22.4px;\n  font-size: 22.4px;\n  font-size: 1.4rem;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 16px;\n  margin-bottom: 16px;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 480px) {\n  .CardTitle-module_card_title__3ZJs5 {\n    font-size: 1.3rem;\n  }\n}\n";
var s$i = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card_title":"CardTitle-module_card_title__3ZJs5"};
styleInject(css$i);

var CardTitle = function CardTitle(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restOfProps = _objectWithoutProperties(_ref, ["children", "className"]);

  return React__default.createElement("h3", _extends({
    className: [s$i.card_title, className].join(' ')
  }, restOfProps), children);
};

CardTitle.defaultProps = {
  className: ''
};
CardTitle.propTypes = {
  children: PropTypes$1.node.isRequired,
  className: PropTypes$1.string
};

var TextsType$1 = PropTypes$1.shape({
  title: PropTypes$1.string,
  travelingNumberFromPlaceholder: PropTypes$1.string,
  travelingNumberFromLabel: PropTypes$1.string,
  travelingNumberToPlaceholder: PropTypes$1.string,
  travelingNumberToLabel: PropTypes$1.string,
  businessTravel: PropTypes$1.string,
  unknownFlightNumber: PropTypes$1.string,
  returnFlightCompany: PropTypes$1.string,
  returnFlightOrigin: PropTypes$1.string,
  blank: PropTypes$1.string,
  updateReturnFlightCompany: PropTypes$1.string,
  travelingNumberTo: PropTypes$1.string
});
var DefaultTexts$1 = {
  title: 'Numéro de Vol / Train',
  travelingNumberFromPlaceholder: 'AB 000',
  travelingNumberFromLabel: 'Aller',
  travelingNumberToPlaceholder: 'AB 0000',
  travelingNumberToLabel: 'Retour',
  businessTravel: 'Voyage professionel',
  unknownTravelingNumberTo: 'Je ne le connais pas',
  returnFlightCompany: 'Compagnie aérienne',
  returnFlightOrigin: 'Ville de provenance',
  blank: 'Non renseigné',
  updateReturnFlightCompany: 'Modifier',
  travelingNumberTo: 'Numéro billet'
};

var css$j = ".CardTravelInformation-module_inputsRow__3ttBe {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.CardTravelInformation-module_travelingNumberFromInputLabel__2Yk1d {\n  margin: 16px 8px 16px 0;\n  margin: 16px 8px 16px 0;\n  margin: 1rem 0.5rem 1rem 0;\n}\n\n.CardTravelInformation-module_travelingNumberToInputLabel__1_lTU {\n  margin: 16px 0 16px 8px;\n  margin: 16px 0 16px 8px;\n  margin: 1rem 0 1rem 0.5rem;\n}\n\n.CardTravelInformation-module_mandatorySentence__2URs8 {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.CardTravelInformation-module_unknownTravelingNumberTo__3-nIa {\n  display: inline-block\n}\n\n.CardTravelInformation-module_unknownTravelingNumberTo__3-nIa>.CardTravelInformation-module_unknownTravelingNumberToButton__16oLN {\n  float: right;\n}\n\n@media (max-width: 825px) {\n  .CardTravelInformation-module_travelingNumberFromInputLabel__2Yk1d, .CardTravelInformation-module_travelingNumberToInputLabel__1_lTU {\n    margin: 10px auto;\n  }\n}\n\n@media (max-width: 480px) {\n  .CardTravelInformation-module_inputsRow__3ttBe {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n";
var s$j = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","inputsRow":"CardTravelInformation-module_inputsRow__3ttBe","travelingNumberFromInputLabel":"CardTravelInformation-module_travelingNumberFromInputLabel__2Yk1d","travelingNumberToInputLabel":"CardTravelInformation-module_travelingNumberToInputLabel__1_lTU","mandatorySentence":"CardTravelInformation-module_mandatorySentence__2URs8","unknownTravelingNumberTo":"CardTravelInformation-module_unknownTravelingNumberTo__3-nIa","unknownTravelingNumberToButton":"CardTravelInformation-module_unknownTravelingNumberToButton__16oLN"};
styleInject(css$j);

var CardTravelInformation =
/*#__PURE__*/
function (_Component) {
  _inherits(CardTravelInformation, _Component);

  function CardTravelInformation(props) {
    var _this;

    _classCallCheck(this, CardTravelInformation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardTravelInformation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderReturnFlightCompany", function () {
      var _this$props = _this.props,
          values = _this$props.values,
          texts = _this$props.texts;

      if (!values.returnFlightCompany || values.returnFlightCompany === '') {
        return null;
      }

      return React__default.createElement(React.Fragment, null, React__default.createElement("div", null, texts.travelingNumberTo, "\xA0:\xA0", values.travelingNumberTo || texts.blank), React__default.createElement("div", null, texts.returnFlightCompany, "\xA0:\xA0", values.returnFlightCompany), React__default.createElement("div", null, texts.returnFlightOrigin, "\xA0:\xA0", values.returnFlightOrigin || texts.blank));
    });

    _this.handleChangeTravelingNumberFrom = _this.handleChange.bind(_assertThisInitialized(_this), 'travelingNumberFrom');
    _this.handleChangeTravelingNumberTo = _this.handleChange.bind(_assertThisInitialized(_this), 'travelingNumberTo');
    return _this;
  }

  _createClass(CardTravelInformation, [{
    key: "handleChange",
    value: function handleChange(field, event) {
      var onChangeProperty = this.props.onChangeProperty;
      onChangeProperty(field, event.currentTarget.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          texts = _this$props2.texts,
          inputClassName = _this$props2.inputClassName,
          onClickUnknownTravelingNumberTo = _this$props2.onClickUnknownTravelingNumberTo,
          values = _this$props2.values,
          errors = _this$props2.errors,
          unknownTravelingNumberToClassName = _this$props2.unknownTravelingNumberToClassName,
          travelingNumberToClassName = _this$props2.travelingNumberToClassName,
          travelingNumberFromClassName = _this$props2.travelingNumberFromClassName,
          cardProps = _objectWithoutProperties(_this$props2, ["texts", "inputClassName", "onClickUnknownTravelingNumberTo", "values", "errors", "unknownTravelingNumberToClassName", "travelingNumberToClassName", "travelingNumberFromClassName"]);

      var hasFilledReturnFlightCompany = values.returnFlightCompany !== null && values.returnFlightCompany.length > 0;
      return React__default.createElement(Card, cardProps, React__default.createElement(CardTitle, {
        className: s$j.title
      }, texts.title), React__default.createElement("div", {
        className: s$j.inputsRow
      }, React__default.createElement(InputLabel, {
        placeholder: texts.travelingNumberFromPlaceholder,
        label: texts.travelingNumberFromLabel,
        onChange: this.handleChangeTravelingNumberFrom,
        className: [s$j.travelingNumberFromInputLabel, travelingNumberFromClassName].join(' '),
        inputClassName: inputClassName,
        value: values.travelingNumberFrom || '',
        error: errors.travelingNumberFrom,
        id: "travelingNumberFromInput"
      }), React__default.createElement(InputLabel, {
        mandatory: true,
        placeholder: texts.travelingNumberToPlaceholder,
        label: texts.travelingNumberToLabel,
        onChange: this.handleChangeTravelingNumberTo,
        value: values.travelingNumberTo || '',
        error: errors.travelingNumberTo,
        className: [s$j.travelingNumberToInputLabel, travelingNumberToClassName].join(' '),
        inputClassName: inputClassName,
        id: "travelingNumberToInput",
        InputComponent: this.renderReturnFlightCompany
      })), React__default.createElement("div", {
        className: [s$j.unknownTravelingNumberTo, unknownTravelingNumberToClassName].join(' ')
      }, React__default.createElement(ActionLink, {
        className: s$j.unknownTravelingNumberToButton,
        label: hasFilledReturnFlightCompany ? texts.updateReturnFlightCompany : texts.unknownTravelingNumberTo,
        onClick: onClickUnknownTravelingNumberTo,
        id: "unknownFlightNumberButton"
      })));
    }
  }]);

  return CardTravelInformation;
}(React.Component);

CardTravelInformation.defaultProps = {
  texts: DefaultTexts$1,
  className: '',
  inputClassName: '',
  onChangeProperty: function onChangeProperty() {},
  onClickUnknownTravelingNumberTo: function onClickUnknownTravelingNumberTo() {},
  values: {
    travelingNumberFrom: null,
    travelingNumberTo: null,
    returnFlightCompany: null,
    returnFlightOrigin: null
  },
  errors: {
    travelingNumberFrom: null,
    travelingNumberTo: null
  },
  unknownTravelingNumberToClassName: '',
  travelingNumberToClassName: '',
  travelingNumberFromClassName: ''
};
CardTravelInformation.propTypes = {
  values: PropTypes$1.shape({
    travelingNumberFrom: PropTypes$1.string,
    travelingNumberTo: PropTypes$1.string,
    returnFlightCompany: PropTypes$1.string,
    returnFlightOrigin: PropTypes$1.string
  }),
  errors: PropTypes$1.shape({
    travelingNumberFrom: PropTypes$1.string,
    travelingNumberTo: PropTypes$1.string
  }),
  texts: TextsType$1,
  className: PropTypes$1.string,
  onChangeProperty: PropTypes$1.func,
  inputClassName: PropTypes$1.string,
  onClickUnknownTravelingNumberTo: PropTypes$1.func,
  unknownTravelingNumberToClassName: PropTypes$1.string,
  travelingNumberToClassName: PropTypes$1.string,
  travelingNumberFromClassName: PropTypes$1.string
};

var Colors = [{
  label: 'black',
  hexadecimalCode: '#000000'
}, {
  label: 'grey',
  hexadecimalCode: '#818181'
}, {
  label: 'white',
  hexadecimalCode: '#ffffff'
}, {
  label: 'light blue',
  hexadecimalCode: '#c6d5e8'
}, {
  label: 'blue',
  hexadecimalCode: '#4a5f7f'
}, {
  label: 'green',
  hexadecimalCode: '#9ac18f'
}, {
  label: 'yellow',
  hexadecimalCode: '#e0c580'
}, {
  label: 'red',
  hexadecimalCode: '#a96854'
}, {
  label: 'brown',
  hexadecimalCode: '#5d4e47'
}, {
  label: 'transparent',
  hexadecimalCode: 'transparent'
}];
var ColorPropsType = PropTypes$1.shape({
  label: PropTypes$1.string,
  hexadecimalCode: PropTypes$1.string
});

var css$k = ".ColorPicker-module_colorPicker__1nGRp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  max-width: 300px;\n}\n\n.ColorPicker-module_badge__2yfcC {\n  background: none;\n  border-radius: 15px;\n  border: 1px solid #163457;\n  height: 30px;\n  margin: 15px;\n  overflow: hidden;\n  position: relative;\n  width: 30px;\n}\n\n.ColorPicker-module_badgeSelected__19Xx9 {\n  border-color: #ffcd02;\n  border-width: 3px;\n}\n\n.ColorPicker-module_transparent__3Lbn6:before,\n.ColorPicker-module_transparent__3Lbn6:after {\n  background-color: #ff5757;\n  content: '';\n  height: 1px;\n  position: absolute;\n  top: 15px;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 150%;\n}\n\n.ColorPicker-module_transparent__3Lbn6:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  left: -5px;\n}\n\n.ColorPicker-module_transparent__3Lbn6:after {\n  right: -5px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.ColorPicker-module_tooltip__2BRme {\n  position: relative\n}\n\n.ColorPicker-module_tooltip__2BRme:hover>.ColorPicker-module_tooltipText__EMozF {\n  visibility: visible;\n}\n\n.ColorPicker-module_tooltipText__EMozF {\n  -webkit-transform: translateX(-50%) !important;\n          transform: translateX(-50%) !important;\n  left: 30px !important;\n  top: 50px !important;\n}\n";
var s$k = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","colorPicker":"ColorPicker-module_colorPicker__1nGRp","badge":"ColorPicker-module_badge__2yfcC","badgeSelected":"ColorPicker-module_badgeSelected__19Xx9","transparent":"ColorPicker-module_transparent__3Lbn6","tooltip":"ColorPicker-module_tooltip__2BRme","tooltipText":"ColorPicker-module_tooltipText__EMozF"};
styleInject(css$k);

var ColorPicker =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ColorPicker, _PureComponent);

  function ColorPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderColorBadge", function (color, index) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          tooltipClassName = _this$props.tooltipClassName,
          showTooltip = _this$props.showTooltip,
          value = _this$props.value,
          badgeClassName = _this$props.badgeClassName,
          tooltipSize = _this$props.tooltipSize;
      var tooltipContainerClassName = showTooltip ? s$k.tooltip : '';
      var badgeClassNames = [s$k.badge, color.hexadecimalCode === 'transparent' ? s$k.transparent : '', value === color.hexadecimalCode ? s$k.badgeSelected : '', badgeClassName];
      return React__default.createElement(Tooltip, {
        text: color.label,
        className: tooltipContainerClassName,
        tooltipClassName: [s$k.tooltipText, tooltipClassName].join(' '),
        tooltipSize: tooltipSize,
        IconComponent: function IconComponent() {
          return React__default.createElement("button", {
            key: "color-".concat(color.label),
            className: badgeClassNames.join(' '),
            style: {
              backgroundColor: color.hexadecimalCode
            },
            title: color.label,
            onClick: function onClick() {
              return onSelect(color);
            },
            id: "color".concat(index)
          });
        }
      });
    });

    return _this;
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          colorsList = _this$props2.colorsList,
          className = _this$props2.className,
          testid = _this$props2.testid;
      return React__default.createElement("div", {
        className: [s$k.colorPicker, className].join(' '),
        testid: testid
      }, colorsList.map(this.renderColorBadge));
    }
  }]);

  return ColorPicker;
}(React.PureComponent);

ColorPicker.defaultProps = {
  colorsList: Colors,
  className: '',
  tooltipClassName: '',
  showTooltip: true,
  value: '',
  badgeClassName: '',
  testid: '',
  tooltipSize: 'xSmall'
};
ColorPicker.propTypes = {
  showTooltip: PropTypes$1.bool,
  badgeClassName: PropTypes$1.string,
  tooltipClassName: PropTypes$1.string,
  tooltipSize: PropTypes$1.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes$1.string,
  colorsList: PropTypes$1.arrayOf(ColorPropsType),
  onSelect: PropTypes$1.func.isRequired,
  value: PropTypes$1.string,
  testid: PropTypes$1.string
};

var css$l = ".ContactCard-module_pendingDeletion__1MWPo {\n  background-color: #eceff6;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n}\n\n.ContactCard-module_pendingModification__2gi3N {\n  padding: 20px;\n}\n\n.ContactCard-module_pendingDeletion__1MWPo p {\n  text-align: center;\n}\n";
var s$l = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","pendingDeletion":"ContactCard-module_pendingDeletion__1MWPo","pendingModification":"ContactCard-module_pendingModification__2gi3N"};
styleInject(css$l);

var ContactType = PropTypes$1.shape({
  firstName: PropTypes$1.string,
  lastName: PropTypes$1.string,
  email: PropTypes$1.string,
  phone: PropTypes$1.string,
  title: PropTypes$1.oneOf(['male', 'female'])
});
var ContactFormValuesType = PropTypes$1.shape({
  email: PropTypes$1.string,
  phone: PropTypes$1.string
});
var ContactFormErrorsType = PropTypes$1.shape({
  email: PropTypes$1.string,
  phone: PropTypes$1.string
});

var TextsType$2 = PropTypes$1.shape({
  modify: PropTypes$1.string,
  delete: PropTypes$1.string,
  save: PropTypes$1.string,
  confirmDeletionTitle: PropTypes$1.string,
  confirmDeletionSentence: PropTypes$1.string,
  cancel: PropTypes$1.string,
  confirm: PropTypes$1.string
});
var DefaultTexts$2 = {
  modify: 'Changer',
  delete: 'Supprimer',
  save: 'Enregistrer',
  confirmDeletionTitle: 'Confirmation',
  confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce contact ?',
  cancel: 'Annuler',
  confirm: 'Confirmer'
};

var css$m = ".ContactCardDeletionAlert-module_deletionAlert__3yCFY {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.ContactCardDeletionAlert-module_deletionAlert__3yCFY p {\n  margin: 10px 0;\n  width: 100%;\n}\n\n.ContactCardDeletionAlert-module_deletionButtons__3_jUz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n";
var s$m = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","deletionAlert":"ContactCardDeletionAlert-module_deletionAlert__3yCFY","deletionButtons":"ContactCardDeletionAlert-module_deletionButtons__3_jUz"};
styleInject(css$m);

var ContactCardDeletionAlert = function ContactCardDeletionAlert(_ref) {
  var texts = _ref.texts,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      id = _ref.id;
  return React__default.createElement("div", {
    className: s$m.deletionAlert,
    id: id
  }, React__default.createElement("strong", null, texts.confirmDeletionTitle), React__default.createElement("p", null, texts.confirmDeletionSentence), React__default.createElement("div", {
    className: s$m.deletionButtons
  }, React__default.createElement(LinkUnderlined, {
    onClick: onCancel,
    id: "".concat(id, "CancelLink")
  }, React__default.createElement("strong", null, texts.cancel)), React__default.createElement(LinkUnderlined, {
    onClick: onConfirm,
    id: "".concat(id, "ConfirmLink")
  }, React__default.createElement("strong", null, texts.confirm))));
};

ContactCardDeletionAlert.defaultProps = {
  texts: DefaultTexts$2
};
ContactCardDeletionAlert.propTypes = {
  texts: TextsType$2,
  onConfirm: PropTypes$1.func.isRequired,
  onCancel: PropTypes$1.func.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$n = ".ContactCardHeader-module_name__33JVE {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n}\n\n.ContactCardHeader-module_editIcon__1sOu6:before, .ContactCardHeader-module_deleteIcon__35WZv:before {\n  color: #32a0c5;\n}\n\n.ContactCardHeader-module_editButton__5yJha {\n  background: none;\n  border: 0;\n  margin: 0;\n  margin-right: -0.75em;\n  padding: 0;\n}\n";
var s$n = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","name":"ContactCardHeader-module_name__33JVE","editIcon":"ContactCardHeader-module_editIcon__1sOu6","deleteIcon":"ContactCardHeader-module_deleteIcon__35WZv","editButton":"ContactCardHeader-module_editButton__5yJha"};
styleInject(css$n);

var ContactCardHeader = function ContactCardHeader(_ref) {
  var contact = _ref.contact,
      editable = _ref.editable,
      deletable = _ref.deletable,
      pendingDeletion = _ref.pendingDeletion,
      pendingModification = _ref.pendingModification,
      texts = _ref.texts,
      onEdit = _ref.onEdit,
      onDelete = _ref.onDelete,
      id = _ref.id;
  var firstName = contact.firstName,
      lastName = contact.lastName;
  var button = null;

  if (editable && !pendingModification) {
    button = React__default.createElement("button", {
      className: s$n.editButton,
      title: texts.modify,
      onClick: onEdit,
      id: "".concat(id, "Button")
    }, React__default.createElement("i", {
      className: "icon-edit ".concat(s$n.editIcon)
    }));
  } else if (deletable && !pendingDeletion) {
    button = React__default.createElement("button", {
      className: s$n.editButton,
      title: texts.delete,
      onClick: onDelete,
      id: "".concat(id, "Button")
    }, React__default.createElement("i", {
      className: "icon-bin ".concat(s$n.deleteIcon)
    }));
  }

  return React__default.createElement("span", {
    className: s$n.name,
    id: id
  }, "".concat(firstName, " ").concat(lastName), button);
};

ContactCardHeader.propTypes = {
  contact: ContactType.isRequired,
  editable: PropTypes$1.bool.isRequired,
  deletable: PropTypes$1.bool.isRequired,
  pendingDeletion: PropTypes$1.bool.isRequired,
  pendingModification: PropTypes$1.bool.isRequired,
  texts: TextsType$2.isRequired,
  onEdit: PropTypes$1.func.isRequired,
  onDelete: PropTypes$1.func.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$o = ".ContactCardFooter-module_footer__2NOL8 {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 0 32px;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 32px;\n  height: 32px;\n  height: 2rem;\n}\n\n.ContactCardFooter-module_checkIcon__4bk-O {\n  color: #fefefe;\n  font-size: 22px;\n}\n";
var s$o = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","footer":"ContactCardFooter-module_footer__2NOL8","checkIcon":"ContactCardFooter-module_checkIcon__4bk-O"};
styleInject(css$o);

var ContactCardFooter = function ContactCardFooter(_ref) {
  var texts = _ref.texts,
      contact = _ref.contact,
      mode = _ref.mode,
      onClick = _ref.onClick,
      onSubmit = _ref.onSubmit,
      id = _ref.id;
  var what;

  if (mode.indexOf('delete') === 0) {
    return null;
  }

  if (mode.indexOf('edit') === 0) {
    what = React__default.createElement(LinkUnderlined, {
      onClick: onSubmit,
      id: "".concat(id, "Link")
    }, React__default.createElement("strong", null, texts.save));
  } else {
    what = mode.indexOf('selected') !== -1 ? React__default.createElement("i", {
      className: "icon-checkmark ".concat(s$o.checkIcon),
      id: "".concat(id, "Icon")
    }) : React__default.createElement(LinkUnderlined, {
      onClick: onClick,
      id: "".concat(id, "Link")
    }, React__default.createElement("strong", null, texts.modify));
  }

  return React__default.createElement("div", {
    className: s$o.footer,
    id: id
  }, what);
};

ContactCardFooter.propTypes = {
  texts: TextsType$2.isRequired,
  contact: ContactType.isRequired,
  mode: PropTypes$1.string.isRequired,
  onClick: PropTypes$1.func.isRequired,
  onSubmit: PropTypes$1.func.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$p = ".ContactCardContentRead-module_column__3YIJ5 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.ContactCardContentRead-module_text__2u0RM {\n  overflow: hidden;\n  -ms-text-overflow: ellipsis;\n  text-overflow: ellipsis;\n}\n";
var s$p = {"column":"ContactCardContentRead-module_column__3YIJ5","text":"ContactCardContentRead-module_text__2u0RM"};
styleInject(css$p);

var ContactCardContentRead = function ContactCardContentRead(_ref) {
  var contact = _ref.contact,
      id = _ref.id;
  var email = contact.email,
      phone = contact.phone;
  return React__default.createElement("div", {
    className: s$p.column,
    id: id
  }, React__default.createElement("span", {
    className: s$p.text,
    id: "contactEmail"
  }, email), React__default.createElement("span", {
    className: s$p.text,
    id: "contactPhone"
  }, phone));
};

ContactCardContentRead.propTypes = {
  contact: ContactType.isRequired,
  id: PropTypes$1.string.isRequired
};

var css$q = ".ContactCardContentEdit-module_column__2M0S_ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n";
var s$q = {"column":"ContactCardContentEdit-module_column__2M0S_"};
styleInject(css$q);

var ContactCardContentEdit = function ContactCardContentEdit(_ref) {
  var onChangeEmail = _ref.onChangeEmail,
      onChangePhoneNumber = _ref.onChangePhoneNumber,
      values = _ref.values,
      errors = _ref.errors,
      id = _ref.id;
  return React__default.createElement("div", {
    className: s$q.column,
    id: id
  }, React__default.createElement(InputLabel, {
    label: "",
    type: "text",
    id: "contactEmailInput",
    value: values.email,
    onChange: onChangeEmail,
    error: errors.email
  }), React__default.createElement(InputLabel, {
    label: "",
    type: "text",
    id: "contactPhoneInput",
    value: values.phone,
    onChange: onChangePhoneNumber,
    error: errors.phone
  }));
};

ContactCardContentEdit.propTypes = {
  onChangeEmail: PropTypes$1.func.isRequired,
  onChangePhoneNumber: PropTypes$1.func.isRequired,
  values: ContactFormValuesType.isRequired,
  errors: ContactFormErrorsType.isRequired,
  id: PropTypes$1.string.isRequired
};

var ContactCard = function ContactCard(_ref) {
  var contact = _ref.contact,
      editable = _ref.editable,
      texts = _ref.texts,
      selected = _ref.selected,
      pendingModification = _ref.pendingModification,
      pendingDeletion = _ref.pendingDeletion,
      deletable = _ref.deletable,
      onClick = _ref.onClick,
      onDelete = _ref.onDelete,
      onEdit = _ref.onEdit,
      onSubmit = _ref.onSubmit,
      onChangeEmail = _ref.onChangeEmail,
      onChangePhoneNumber = _ref.onChangePhoneNumber,
      formValues = _ref.formValues,
      formErrors = _ref.formErrors,
      onCancelDeletion = _ref.onCancelDeletion,
      onConfirmDeletion = _ref.onConfirmDeletion,
      idPrefix = _ref.idPrefix,
      children = _ref.children,
      cardProps = _objectWithoutProperties(_ref, ["contact", "editable", "texts", "selected", "pendingModification", "pendingDeletion", "deletable", "onClick", "onDelete", "onEdit", "onSubmit", "onChangeEmail", "onChangePhoneNumber", "formValues", "formErrors", "onCancelDeletion", "onConfirmDeletion", "idPrefix", "children"]);

  var mode = 'read';

  if (pendingDeletion) {
    mode = 'delete';
  }

  if (pendingModification) {
    mode = 'edit';
  }

  if (selected) {
    mode += '-selected';
  }

  var footer = mode.indexOf('delete') === 0 ? null : React__default.createElement(ContactCardFooter, {
    texts: texts,
    mode: mode,
    contact: contact,
    onClick: onClick,
    onSubmit: onSubmit,
    id: "".concat(idPrefix, "Footer")
  });
  var header = null;
  var content = mode.indexOf('read') === 0 ? React__default.createElement(ContactCardContentRead, {
    contact: contact,
    id: "".concat(idPrefix, "ContentRead")
  }) : React__default.createElement(ContactCardContentEdit, {
    contact: contact,
    onChangeEmail: onChangeEmail,
    onChangePhoneNumber: onChangePhoneNumber,
    values: formValues,
    errors: formErrors,
    id: "".concat(idPrefix, "ContentEdit")
  });

  if (mode.indexOf('delete') === 0) {
    content = React__default.createElement(ContactCardDeletionAlert, {
      texts: texts,
      onCancel: onCancelDeletion,
      onConfirm: onConfirmDeletion,
      id: "".concat(idPrefix, "DeletionAlert")
    });
  } else {
    header = React__default.createElement(ContactCardHeader, {
      texts: texts,
      contact: contact,
      editable: editable,
      deletable: deletable,
      pendingDeletion: pendingDeletion,
      pendingModification: pendingModification,
      onDelete: onDelete,
      onEdit: onEdit,
      id: "".concat(idPrefix, "Header")
    });
  }

  return React__default.createElement(Card, _extends({
    FooterChildren: footer,
    isSelected: selected,
    contentClassName: [pendingModification ? s$l.pendingModification : '', pendingDeletion ? s$l.pendingDeletion : ''].join(' ')
  }, cardProps), header, children !== null ? children : content);
};

ContactCard.propTypes = {
  contact: ContactType.isRequired,
  editable: PropTypes$1.bool,
  deletable: PropTypes$1.bool,
  selected: PropTypes$1.bool,
  pendingModification: PropTypes$1.bool,
  pendingDeletion: PropTypes$1.bool,
  texts: TextsType$2,
  onClick: PropTypes$1.func,
  onDelete: PropTypes$1.func,
  onEdit: PropTypes$1.func,
  onSubmit: PropTypes$1.func,
  onChangeEmail: PropTypes$1.func,
  onChangePhoneNumber: PropTypes$1.func,
  formValues: ContactFormValuesType,
  formErrors: ContactFormErrorsType,
  onCancelDeletion: PropTypes$1.func,
  onConfirmDeletion: PropTypes$1.func,
  idPrefix: PropTypes$1.string,
  children: PropTypes$1.node
};
ContactCard.defaultProps = {
  editable: true,
  deletable: false,
  selected: false,
  pendingModification: false,
  pendingDeletion: false,
  onClick: function onClick() {},
  onDelete: function onDelete() {},
  onEdit: function onEdit() {},
  texts: DefaultTexts$2,
  onSubmit: function onSubmit() {},
  onChangeEmail: function onChangeEmail() {},
  onChangePhoneNumber: function onChangePhoneNumber() {},
  onCancelDeletion: function onCancelDeletion() {},
  onConfirmDeletion: function onConfirmDeletion() {},
  idPrefix: 'contactCard',
  children: null,
  formValues: {
    email: '',
    phone: ''
  },
  formErrors: {
    email: null,
    phone: null
  }
};

var css$r = ".ContactForm-module_title__3ved4 {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n  margin-bottom: 20px;\n}\n\n.ContactForm-module_hidden__qeLf1 {\n  display: none;\n}\n\n.ContactForm-module_columns__2X9Q2 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ContactForm-module_columns__2X9Q2 > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.ContactForm-module_firstSection__2-PaO {\n  margin-right: 30px;\n}\n\n.ContactForm-module_secondSection__3Tyz5 {\n  margin-left: 30px;\n}\n\n.ContactForm-module_footer__1tHfE {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.ContactForm-module_leftGenderPickerField__35PAF {\n  height: 44px;\n}\n\n.ContactForm-module_topGenderPickerField__4HrA9 {\n  height: 66px;\n}\n\n.ContactForm-module_genderPickerInputs__JKZh- {\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.ContactForm-module_contactFormInput__2qQIC {\n  margin-top: 10px;\n}\n\n.ContactForm-module_postalCodeInput__2kGf4 {\n  max-width: 42%;\n}\n\n.ContactForm-module_phoneInput__AIWcI {\n  width: 100%;\n}\n";
var s$r = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","title":"ContactForm-module_title__3ved4","hidden":"ContactForm-module_hidden__qeLf1","-webkit-columns":"ContactForm-module_columns__2X9Q2","columns":"ContactForm-module_columns__2X9Q2","firstSection":"ContactForm-module_firstSection__2-PaO","secondSection":"ContactForm-module_secondSection__3Tyz5","footer":"ContactForm-module_footer__1tHfE","leftGenderPickerField":"ContactForm-module_leftGenderPickerField__35PAF","topGenderPickerField":"ContactForm-module_topGenderPickerField__4HrA9","genderPickerInputs":"ContactForm-module_genderPickerInputs__JKZh-","contactFormInput":"ContactForm-module_contactFormInput__2qQIC","postalCodeInput":"ContactForm-module_postalCodeInput__2kGf4","phoneInput":"ContactForm-module_phoneInput__AIWcI"};
styleInject(css$r);

var TextsType$3 = PropTypes$1.shape({
  newDriver: PropTypes$1.string,
  addDriver: PropTypes$1.string,
  civility: PropTypes$1.string,
  firstName: PropTypes$1.string,
  lastName: PropTypes$1.string,
  firstNamePlaceholder: PropTypes$1.string,
  lastNamePlaceholder: PropTypes$1.string,
  email: PropTypes$1.string,
  phone: PropTypes$1.string,
  postCode: PropTypes$1.string,
  notMandatory: PropTypes$1.string,
  emailPlaceholder: PropTypes$1.string,
  postCodePlaceholder: PropTypes$1.string,
  male: PropTypes$1.string,
  female: PropTypes$1.string
});
var DefaultTexts$3 = {
  newDriver: 'Ajouter un nouveau conducteur',
  addDriver: 'Ajouter ce conducteur',
  civility: 'Civilité',
  firstName: 'Prénom',
  lastName: 'Nom',
  firstNamePlaceholder: 'Alain',
  lastNamePlaceholder: 'Prost',
  email: 'Email',
  phone: 'Téléphone',
  postCode: 'Code postal',
  notMandatory: 'facultatif',
  emailPlaceholder: 'alain.prost@gmail.com',
  postCodePlaceholder: '44 100',
  male: 'Mr',
  female: 'Mme'
};

var _ref =
/*#__PURE__*/
React__default.createElement("g", {
  fillRule: "evenodd",
  strokeWidth: "1pt"
}, React__default.createElement("path", {
  fill: "#fff",
  d: "M0 0h640v480H0z"
}), React__default.createElement("path", {
  fill: "#00267f",
  d: "M0 0h213.3v480H0z"
}), React__default.createElement("path", {
  fill: "#f31830",
  d: "M426.7 0H640v480H426.7z"
}));

var frFlag = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22flag-icon-css-fr%22%20width%3D%22640%22%20height%3D%22480%22%3E%20%20%3Cg%20fill-rule%3D%22evenodd%22%20stroke-width%3D%221pt%22%3E%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h640v480H0z%22%2F%3E%20%20%20%20%3Cpath%20fill%3D%22%2300267f%22%20d%3D%22M0%200h213.3v480H0z%22%2F%3E%20%20%20%20%3Cpath%20fill%3D%22%23f31830%22%20d%3D%22M426.7%200H640v480H426.7z%22%2F%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$1 =
/*#__PURE__*/
React__default.createElement("defs", null, React__default.createElement("clipPath", {
  id: "a"
}, React__default.createElement("path", {
  fillOpacity: 0.7,
  d: "M-85.3 0h682.6v512H-85.3z"
})));

var _ref2 =
/*#__PURE__*/
React__default.createElement("g", {
  clipPath: "url(#a)",
  transform: "translate(80) scale(.94)"
}, React__default.createElement("g", {
  strokeWidth: "1pt"
}, React__default.createElement("path", {
  fill: "#006",
  d: "M-256 0H768v512H-256z"
}), React__default.createElement("path", {
  fill: "#fff",
  d: "M-256 0v57.2L653.5 512H768v-57.2L-141.5 0H-256zM768 0v57.2L-141.5 512H-256v-57.2L653.5 0H768z"
}), React__default.createElement("path", {
  fill: "#fff",
  d: "M170.7 0v512h170.6V0H170.7zM-256 170.7v170.6H768V170.7H-256z"
}), React__default.createElement("path", {
  fill: "#c00",
  d: "M-256 204.8v102.4H768V204.8H-256zM204.8 0v512h102.4V0H204.8zM-256 512L85.3 341.3h76.4L-179.7 512H-256zm0-512L85.3 170.7H9L-256 38.2V0zm606.4 170.7L691.7 0H768L426.7 170.7h-76.3zM768 512L426.7 341.3H503l265 132.5V512z"
})));

var gbFlag = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22flag-icon-css-gb%22%20width%3D%22640%22%20height%3D%22480%22%3E%20%20%3Cdefs%3E%20%20%20%20%3CclipPath%20id%3D%22a%22%3E%20%20%20%20%20%20%3Cpath%20fill-opacity%3D%22.7%22%20d%3D%22M-85.3%200h682.6v512H-85.3z%22%2F%3E%20%20%20%20%3C%2FclipPath%3E%20%20%3C%2Fdefs%3E%20%20%3Cg%20clip-path%3D%22url%28%23a%29%22%20transform%3D%22translate%2880%29%20scale%28.94%29%22%3E%20%20%20%20%3Cg%20stroke-width%3D%221pt%22%3E%20%20%20%20%20%20%3Cpath%20fill%3D%22%23006%22%20d%3D%22M-256%200H768v512H-256z%22%2F%3E%20%20%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M-256%200v57.2L653.5%20512H768v-57.2L-141.5%200H-256zM768%200v57.2L-141.5%20512H-256v-57.2L653.5%200H768z%22%2F%3E%20%20%20%20%20%20%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M170.7%200v512h170.6V0H170.7zM-256%20170.7v170.6H768V170.7H-256z%22%2F%3E%20%20%20%20%20%20%3Cpath%20fill%3D%22%23c00%22%20d%3D%22M-256%20204.8v102.4H768V204.8H-256zM204.8%200v512h102.4V0H204.8zM-256%20512L85.3%20341.3h76.4L-179.7%20512H-256zm0-512L85.3%20170.7H9L-256%2038.2V0zm606.4%20170.7L691.7%200H768L426.7%20170.7h-76.3zM768%20512L426.7%20341.3H503l265%20132.5V512z%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var esFlag = "942a5a37d3455e70.svg";

var deFlag = "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20id%3D%22flag-icon-css-de%22%20width%3D%22640%22%20height%3D%22480%22%3E%20%20%3Cpath%20fill%3D%22%23ffce00%22%20d%3D%22M0%20320h640v160H0z%22%2F%3E%20%20%3Cpath%20d%3D%22M0%200h640v160H0z%22%2F%3E%20%20%3Cpath%20fill%3D%22%23d00%22%20d%3D%22M0%20160h640v160H0z%22%2F%3E%3C%2Fsvg%3E";

var DefaultCountries = [{
  value: 'fr',
  label: '+33',
  image: frFlag
}, {
  value: 'es',
  label: '+34',
  image: esFlag
}, {
  value: 'gb',
  label: '+44',
  image: gbFlag
}, {
  value: 'de',
  label: '+49',
  image: deFlag
}];
var CountryPropType = PropTypes$1.shape({
  value: PropTypes$1.string,
  label: PropTypes$1.string,
  image: PropTypes$1.string
});

var ContactForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm(props) {
    var _this;

    _classCallCheck(this, ContactForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderGenderPicker", function () {
      var title = _this.props.values.title;
      return React__default.createElement(GenderPicker, {
        genders: _this.genders,
        onSelect: _this.handleChangeGender,
        selected: title || '',
        className: s$r.genderPickerInputs
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFooter", function (footerProps) {
      var _this$props = _this.props,
          FooterComponent = _this$props.FooterComponent,
          texts = _this$props.texts,
          onSubmit = _this$props.onSubmit;

      if (FooterComponent === null) {
        return null;
      }

      if (typeof FooterComponent === 'function' && FooterComponent(footerProps)) {
        return FooterComponent(footerProps);
      }

      return React__default.createElement("div", {
        className: [s$r.footer, footerProps.className].join(' ')
      }, React__default.createElement(LinkUnderlined, {
        onClick: onSubmit
      }, texts.addDriver));
    });

    _this.handleChangeGender = props.onChangeProperty.bind(_assertThisInitialized(_this), 'title');
    _this.handleChangeFirstName = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'firstName');
    _this.handleChangeLastName = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'lastName');
    _this.handleChangeEmail = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'email');
    _this.handleChangePhone = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'phone');
    _this.handleChangePostalCode = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'postalCode');
    _this.renderFirstNameInput = _this.renderInputComponent.bind(_assertThisInitialized(_this), 'firstName');
    _this.renderLastNameInput = _this.renderInputComponent.bind(_assertThisInitialized(_this), 'lastName');
    _this.renderEmailInput = _this.renderInputComponent.bind(_assertThisInitialized(_this), 'email');
    _this.renderPostalCodeInput = _this.renderInputComponent.bind(_assertThisInitialized(_this), 'postalCode');
    _this.genders = [{
      value: 'male',
      label: props.texts.male
    }, {
      value: 'female',
      label: props.texts.female
    }];
    return _this;
  }

  _createClass(ContactForm, [{
    key: "handleChangeProperty",
    value: function handleChangeProperty(field, event) {
      var onChangeProperty = this.props.onChangeProperty;
      onChangeProperty(field, event.currentTarget.value);
    }
  }, {
    key: "renderInputComponent",
    value: function renderInputComponent(inputName) {
      var renderInput = this.props.renderInput;
      return renderInput(inputName);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          texts = _this$props2.texts,
          values = _this$props2.values,
          selected = _this$props2.selected,
          onInputBlur = _this$props2.onInputBlur,
          onInputFocus = _this$props2.onInputFocus,
          errors = _this$props2.errors,
          labelPosition = _this$props2.labelPosition,
          countries = _this$props2.countries,
          contentClassName = _this$props2.contentClassName,
          firstSectionClassName = _this$props2.firstSectionClassName,
          secondSectionClassName = _this$props2.secondSectionClassName,
          withCountryFlag = _this$props2.withCountryFlag,
          RootComponent = _this$props2.RootComponent,
          cardProps = _objectWithoutProperties(_this$props2, ["texts", "values", "selected", "onInputBlur", "onInputFocus", "errors", "labelPosition", "countries", "contentClassName", "firstSectionClassName", "secondSectionClassName", "withCountryFlag", "RootComponent"]);

      var newDriver = texts.newDriver,
          civility = texts.civility,
          firstName = texts.firstName,
          firstNamePlaceholder = texts.firstNamePlaceholder,
          lastName = texts.lastName,
          lastNamePlaceholder = texts.lastNamePlaceholder,
          email = texts.email,
          emailPlaceholder = texts.emailPlaceholder,
          phone = texts.phone,
          postCode = texts.postCode,
          postCodePlaceholder = texts.postCodePlaceholder;
      return React__default.createElement(RootComponent, _extends({}, cardProps, {
        isSelected: selected,
        FooterComponent: this.renderFooter
      }), React__default.createElement(CardTitle, {
        className: !newDriver ? s$r.hidden : ''
      }, newDriver), React__default.createElement("div", {
        className: [s$r.columns, contentClassName].join(' ')
      }, React__default.createElement("div", {
        className: [s$r.firstSection, firstSectionClassName].join(' ')
      }, React__default.createElement(InputLabel, {
        label: civility,
        left: labelPosition === 'left',
        InputComponent: this.renderGenderPicker,
        className: [labelPosition === 'left' ? s$r.leftGenderPickerField : s$r.topGenderPickerField, s$r.contactFormInput].join(' ')
      }), React__default.createElement(InputLabel, {
        left: labelPosition === 'left',
        type: "text",
        name: "firstName",
        id: "first-name",
        placeholder: firstNamePlaceholder,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onChange: this.handleChangeFirstName,
        value: values.firstName || '',
        error: errors.firstName,
        label: firstName,
        mandatory: true,
        className: s$r.contactFormInput,
        InputComponent: this.renderFirstNameInput
      }), React__default.createElement(InputLabel, {
        left: labelPosition === 'left',
        label: lastName,
        mandatory: true,
        name: "lastName",
        type: "text",
        id: "last-name",
        placeholder: lastNamePlaceholder,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onChange: this.handleChangeLastName,
        value: values.lastName || '',
        error: errors.lastName,
        className: s$r.contactFormInput,
        InputComponent: this.renderLastNameInput
      })), React__default.createElement("div", {
        className: [s$r.secondSection, secondSectionClassName].join(' ')
      }, React__default.createElement(InputLabel, {
        left: labelPosition === 'left',
        label: email,
        mandatory: true,
        name: "email",
        type: "email",
        id: "email",
        placeholder: emailPlaceholder,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onChange: this.handleChangeEmail,
        value: values.email || '',
        error: errors.email,
        className: s$r.contactFormInput,
        InputComponent: this.renderEmailInput
      }), React__default.createElement(PhoneInput, {
        label: phone,
        mandatory: true,
        left: labelPosition === 'left',
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onChange: this.handleChangePhone,
        error: errors.phone,
        value: values.phone || '',
        className: s$r.contactFormInput,
        inputClassName: s$r.phoneInput,
        countries: countries,
        id: "phone-number",
        name: "phoneNumber",
        withFlag: withCountryFlag
      }), React__default.createElement(InputLabel, {
        left: labelPosition === 'left',
        label: postCode,
        type: "text",
        id: "postal-code",
        name: "postalCode",
        placeholder: postCodePlaceholder,
        onFocus: onInputFocus,
        onBlur: onInputBlur,
        onChange: this.handleChangePostalCode,
        value: values.postalCode || '',
        error: errors.postalCode,
        className: s$r.contactFormInput,
        inputClassName: s$r.postalCodeInput,
        InputComponent: this.renderPostalCodeInput
      }))));
    }
  }]);

  return ContactForm;
}(React__default.Component);

ContactForm.defaultProps = {
  texts: DefaultTexts$3,
  onChangeProperty: function onChangeProperty() {},
  values: {
    gender: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    postalCode: null
  },
  errors: {
    gender: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    postalCode: null
  },
  onInputFocus: function onInputFocus() {},
  onInputBlur: function onInputBlur() {},
  selected: false,
  labelPosition: 'left',
  onSubmit: function onSubmit() {},
  countries: undefined,
  contentClassName: '',
  firstSectionClassName: '',
  secondSectionClassName: '',
  withCountryFlag: true,
  renderInput: function renderInput() {
    return null;
  },
  FooterComponent: function FooterComponent() {
    return null;
  },
  // eslint-disable-next-line react/prop-types
  RootComponent: function RootComponent(_ref) {
    var children = _ref.children,
        cardProps = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement(Card, cardProps, children);
  }
};
ContactForm.propTypes = {
  texts: TextsType$3,
  onChangeProperty: PropTypes$1.func,
  values: PropTypes$1.shape({
    title: PropTypes$1.oneOf(['male', 'female', null, '']),
    firstName: PropTypes$1.string,
    lastName: PropTypes$1.string,
    email: PropTypes$1.string,
    phoneNumber: PropTypes$1.string,
    postalCode: PropTypes$1.string
  }),
  errors: PropTypes$1.shape({
    title: PropTypes$1.string,
    firstName: PropTypes$1.string,
    lastName: PropTypes$1.string,
    email: PropTypes$1.string,
    phoneNumber: PropTypes$1.string,
    postalCode: PropTypes$1.string
  }),
  onInputFocus: PropTypes$1.func,
  onInputBlur: PropTypes$1.func,
  selected: PropTypes$1.bool,
  labelPosition: PropTypes$1.oneOf(['top', 'left']),
  onSubmit: PropTypes$1.func,
  countries: PropTypes$1.arrayOf(CountryPropType),
  contentClassName: PropTypes$1.string,
  firstSectionClassName: PropTypes$1.string,
  secondSectionClassName: PropTypes$1.string,
  withCountryFlag: PropTypes$1.bool,
  renderInput: PropTypes$1.func,
  FooterComponent: PropTypes$1.func,
  RootComponent: PropTypes$1.func
};

var GenderType = PropTypes$1.shape({
  value: PropTypes$1.string,
  label: PropTypes$1.string
});

var css$s = ".RadioButton-module_radioButton__2iRZ- * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.RadioButton-module_radioButton__2iRZ- {\n  position: relative;\n}\n\n.RadioButton-module_radioButton__2iRZ- input {\n  position: absolute;\n  opacity: 0;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span:before,\n.RadioButton-module_radioButton__2iRZ- > span:after {\n  display: block;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span:before {\n  border-radius: 50%;\n  border: 2px solid rgb(206, 206, 206);\n  content: '';\n  height: 10px;\n  margin-right: 10px;\n  width: 10px;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span:after {\n  background-color: #ffcd02;\n  border-radius: 50%;\n  content: '';\n  display: none;\n  height: 6px;\n  left: 4px;\n  position: absolute;\n  top: 8px;\n  width: 6px;\n}\n\n.RadioButton-module_radioButton__2iRZ- input[type=\"radio\"]:checked + span:after {\n  display: block;\n}\n";
var s$s = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","radioButton":"RadioButton-module_radioButton__2iRZ-"};
styleInject(css$s);

var RadioButton = function RadioButton(_ref) {
  var name = _ref.name,
      value = _ref.value,
      label = _ref.label,
      onSelect = _ref.onSelect,
      className = _ref.className,
      labelClassName = _ref.labelClassName,
      restOfProps = _objectWithoutProperties(_ref, ["name", "value", "label", "onSelect", "className", "labelClassName"]);

  return React__default.createElement("label", {
    htmlFor: "".concat(name, "-").concat(value),
    className: "".concat(s$s.radioButton, " ").concat(className)
  }, React__default.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    id: "".concat(name, "-").concat(value),
    onChange: function onChange() {
      return onSelect(value);
    }
  }, restOfProps)), React__default.createElement("span", {
    className: labelClassName
  }, label));
};

RadioButton.defaultProps = {
  onSelect: function onSelect() {},
  className: '',
  labelClassName: ''
};
RadioButton.propTypes = {
  name: PropTypes$1.string.isRequired,
  value: PropTypes$1.string.isRequired,
  label: PropTypes$1.string.isRequired,
  onSelect: PropTypes$1.func,
  className: PropTypes$1.string,
  labelClassName: PropTypes$1.string
};

var css$t = ".GenderPicker-module_genderPicker__damb5 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.GenderPicker-module_genderPicker__damb5 label {\n  margin-right: 20px;\n}\n\n.GenderPicker-module_genderPicker__damb5 label:last-child {\n  margin-right: 0;\n}\n\n.GenderPicker-module_error__22EzG {\n  text-align: left;\n  color: #ff5757;\n}\n";
var s$t = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","genderPicker":"GenderPicker-module_genderPicker__damb5","error":"GenderPicker-module_error__22EzG"};
styleInject(css$t);

var GenderPicker = function GenderPicker(_ref) {
  var genders = _ref.genders,
      onSelect = _ref.onSelect,
      selected = _ref.selected,
      className = _ref.className,
      error = _ref.error;
  return React__default.createElement("div", null, React__default.createElement("div", {
    className: [s$t.genderPicker, className].join(' ')
  }, genders.map(function (gender) {
    return React__default.createElement(RadioButton, {
      key: gender.value,
      value: gender.value,
      label: gender.label,
      name: "gender",
      checked: gender.value === selected,
      onSelect: onSelect
    });
  })), !!error && React__default.createElement("div", {
    className: s$t.error
  }, error));
};

GenderPicker.defaultProps = {
  selected: '',
  onSelect: function onSelect() {},
  className: '',
  error: null
};
GenderPicker.propTypes = {
  selected: PropTypes$1.string,
  genders: PropTypes$1.arrayOf(GenderType).isRequired,
  onSelect: PropTypes$1.func,
  className: PropTypes$1.string,
  error: PropTypes$1.string
};

var css$u = ".Input-module_container__y-kIk {\n  position: relative;\n}\n\n.Input-module_input__1TjxO {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #163457;\n  border: 2px solid #d5d6d7;\n  border-radius: 3px;\n  display: block;\n  height: 40px;\n  height: 40px;\n  height: 2.5rem;\n  padding: 8px;\n  padding: 8px;\n  padding: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  margin-top: 4px;\n  margin-top: 4px;\n  margin-top: 0.25rem\n}\n\n.Input-module_input__1TjxO::-webkit-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.Input-module_input__1TjxO::-ms-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.input::-webkit-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.input::-ms-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.Input-module_input__1TjxO::placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.Input-module_input__1TjxO:focus {\n  border-color: #ffcd02;\n}\n\n.Input-module_inputWithError__q0fcE {\n  border-color: #ff5757 !important;\n}\n\n.Input-module_inputPrepend__36mBv {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #939baa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 32px;\n  font-size: 32px;\n  font-size: 2rem;\n  height: 100%;\n  left: 5px;\n  position: absolute;\n  top: 0;\n}\n\n.Input-module_inputAppend__2lJtU {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #939baa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 32px;\n  font-size: 32px;\n  font-size: 2rem;\n  height: 100%;\n  position: absolute;\n  right: 5px;\n  top: 0;\n}\n";
var s$u = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"Input-module_container__y-kIk","input":"Input-module_input__1TjxO","inputWithError":"Input-module_inputWithError__q0fcE","inputPrepend":"Input-module_inputPrepend__36mBv","inputAppend":"Input-module_inputAppend__2lJtU"};
styleInject(css$u);

var Input = function Input(_ref) {
  var onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      checked = _ref.checked,
      value = _ref.value,
      hasError = _ref.hasError,
      className = _ref.className,
      onKeyDown = _ref.onKeyDown,
      LeftComponent = _ref.LeftComponent,
      RightComponent = _ref.RightComponent,
      containerClassName = _ref.containerClassName,
      restOfProps = _objectWithoutProperties(_ref, ["onFocus", "onBlur", "onChange", "checked", "value", "hasError", "className", "onKeyDown", "LeftComponent", "RightComponent", "containerClassName"]);

  return React__default.createElement("div", {
    className: [s$u.container, containerClassName].join(' ')
  }, React__default.createElement(LeftComponent, {
    className: s$u.inputPrepend
  }), React__default.createElement("input", _extends({
    className: [s$u.input, hasError ? s$u.inputWithError : '', className].join(' '),
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange,
    checked: checked,
    value: value,
    onKeyDown: onKeyDown
  }, restOfProps)), React__default.createElement(RightComponent, {
    className: s$u.inputAppend
  }));
};

Input.defaultProps = {
  placeholder: '',
  id: '',
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  checked: false,
  value: '',
  className: '',
  hasError: false,
  type: 'text',
  onKeyDown: function onKeyDown() {},
  LeftComponent: function LeftComponent() {
    return null;
  },
  RightComponent: function RightComponent() {
    return null;
  },
  containerClassName: undefined
};
Input.propTypes = {
  type: PropTypes$1.string,
  placeholder: PropTypes$1.string,
  id: PropTypes$1.string,
  onFocus: PropTypes$1.func,
  onBlur: PropTypes$1.func,
  onChange: PropTypes$1.func,
  checked: PropTypes$1.bool,
  value: PropTypes$1.string,
  className: PropTypes$1.string,
  hasError: PropTypes$1.bool,
  onKeyDown: PropTypes$1.func,
  LeftComponent: PropTypes$1.func,
  RightComponent: PropTypes$1.func,
  containerClassName: PropTypes$1.string
};

var css$v = ".InputButton-module_inputButtonContainerClassName__2OzTt {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.InputButton-module_input__3lwQJ {\n  border-bottom-right-radius: 0;\n  border-right: 0;\n  border-top-right-radius: 0;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.InputButton-module_input__3lwQJ, .InputButton-module_button__3YbuH {\n  height: 40px;\n}\n\n.InputButton-module_button__3YbuH {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.InputButton-module_helpTextClassname__3BmMr {\n  color: #d5d6d7;\n  font-style: italic;\n  margin: 0;\n}\n\n.InputButton-module_error__3au5y {\n  text-align: left;\n  color: #ff5757;\n}\n\n.InputButton-module_iconContainer__2PZ0_ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 2px solid #d5d6d7;\n  border-left: 0;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 40px;\n}\n\n.InputButton-module_iconContainer__2PZ0_:empty {\n  display: none;\n}\n\n.InputButton-module_iconContainerFocussed__2QI9x {\n  border-color: #ffcd02;\n  border-right: 0;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.InputButton-module_icon__3usZ5 {\n  color: #163457;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 10px;\n}\n";
var s$v = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","inputButtonContainerClassName":"InputButton-module_inputButtonContainerClassName__2OzTt","input":"InputButton-module_input__3lwQJ","button":"InputButton-module_button__3YbuH","helpTextClassname":"InputButton-module_helpTextClassname__3BmMr","error":"InputButton-module_error__3au5y","iconContainer":"InputButton-module_iconContainer__2PZ0_","iconContainerFocussed":"InputButton-module_iconContainerFocussed__2QI9x","icon":"InputButton-module_icon__3usZ5"};
styleInject(css$v);

var InputButton = function InputButton(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      buttonText = _ref.buttonText,
      inputClassName = _ref.inputClassName,
      inputContainerClassName = _ref.inputContainerClassName,
      inputButtonContainerClassName = _ref.inputButtonContainerClassName,
      inputType = _ref.inputType,
      hasError = _ref.hasError,
      buttonVisible = _ref.buttonVisible,
      IconComponent = _ref.IconComponent,
      ButtonComponent = _ref.ButtonComponent,
      SubTextComponent = _ref.SubTextComponent,
      inputProps = _objectWithoutProperties(_ref, ["id", "placeholder", "buttonText", "inputClassName", "inputContainerClassName", "inputButtonContainerClassName", "inputType", "hasError", "buttonVisible", "IconComponent", "ButtonComponent", "SubTextComponent"]);

  return React__default.createElement("div", {
    className: [s$v.inputButtonContainerClassName, inputButtonContainerClassName].join(' ')
  }, React__default.createElement("div", {
    className: inputContainerClassName
  }, React__default.createElement(Input, _extends({
    placeholder: placeholder,
    className: [buttonVisible ? s$v.input : undefined, inputClassName].join(' '),
    id: id,
    type: inputType,
    hasError: hasError
  }, inputProps, {
    RightComponent: function RightComponent(_ref2) {
      var className = _ref2.className;
      return React__default.createElement(IconComponent, {
        className: [className, s$v.icon].join(' ')
      });
    }
  })), React__default.createElement(SubTextComponent, null)), buttonVisible && React__default.createElement(ButtonComponent, {
    className: s$v.button
  }, buttonText));
};

InputButton.defaultProps = {
  inputButtonContainerClassName: '',
  id: 'InputButton',
  placeholder: '',
  inputClassName: '',
  hasError: false,
  buttonVisible: true,
  inputType: 'text',
  inputContainerClassName: '',
  IconComponent: function IconComponent() {
    return null;
  },
  ButtonComponent: function ButtonComponent(props) {
    return React__default.createElement(Button, _extends({}, props, {
      component: "button",
      title: "button"
    }));
  },
  SubTextComponent: function SubTextComponent() {
    return null;
  }
};
InputButton.propTypes = {
  id: PropTypes$1.string,
  buttonText: PropTypes$1.string.isRequired,
  placeholder: PropTypes$1.string,
  inputType: PropTypes$1.string,
  inputClassName: PropTypes$1.string,
  inputContainerClassName: PropTypes$1.string,
  inputButtonContainerClassName: PropTypes$1.string,
  hasError: PropTypes$1.bool,
  buttonVisible: PropTypes$1.bool,
  IconComponent: PropTypes$1.func,
  ButtonComponent: PropTypes$1.func,
  SubTextComponent: PropTypes$1.func
};

var css$w = "/* The input_checkbox */\n\n.InputCheckbox-module_input_checkbox__cqwzW {\n  display: block;\n  position: relative;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n  padding-top: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 24px;\n  height: 24px;\n  height: 1.5rem\n}\n\n.InputCheckbox-module_input_checkbox__cqwzW:active {\n  opacity: 0.6;\n}\n\n/* Hide the browser's default checkbox */\n\n.InputCheckbox-module_input_checkbox__cqwzW input {\n  position: absolute;\n  border: 2.4px solid transparent;\n  border: 2.4px solid transparent;\n  border: 0.15rem solid transparent;\n  opacity: 0;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  height: 22px;\n  margin-top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n/* Create a custom checkbox */\n\n.InputCheckbox-module_checkmark__QSyLA {\n  background-color: #fefefe;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 0.25rem;\n  border: 2.4px solid #d5d6d7;\n  border: 2.4px solid #d5d6d7;\n  border: 0.15rem solid #d5d6d7;\n}\n\n/* On mouse-over, add a grey background color */\n\n.InputCheckbox-module_input_checkbox__cqwzW:hover input ~ .InputCheckbox-module_checkmark__QSyLA {\n  border-color: rgb(206, 206, 206);\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.InputCheckbox-module_input_checkbox__cqwzW input:checked ~ .InputCheckbox-module_checkmark__QSyLA {\n  background-color: transparent;\n  border-color: rgb(206, 206, 206);\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.InputCheckbox-module_checkmark__QSyLA:after {\n  content: '';\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.InputCheckbox-module_input_checkbox__cqwzW input:checked ~ .InputCheckbox-module_checkmark__QSyLA:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.InputCheckbox-module_input_checkbox__cqwzW .InputCheckbox-module_checkmark__QSyLA:after {\n  left: 3px;\n  top: 3px;\n  border-radius: 0.15rem;\n  width: 12px;\n  height: 12px;\n  background-color: #ffcd02;\n}\n";
var s$w = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","input_checkbox":"InputCheckbox-module_input_checkbox__cqwzW","checkmark":"InputCheckbox-module_checkmark__QSyLA"};
styleInject(css$w);

var InputCheckbox = function InputCheckbox(_ref) {
  var id = _ref.id,
      children = _ref.children,
      onChange = _ref.onChange,
      checked = _ref.checked,
      className = _ref.className,
      checkmarkClassName = _ref.checkmarkClassName,
      restOfProps = _objectWithoutProperties(_ref, ["id", "children", "onChange", "checked", "className", "checkmarkClassName"]);

  return React__default.createElement("label", {
    htmlFor: "".concat(id),
    className: "".concat(s$w.input_checkbox, " ").concat(className)
  }, children, React__default.createElement("input", _extends({
    type: "checkbox",
    id: "".concat(id),
    onChange: onChange,
    checked: checked
  }, restOfProps)), React__default.createElement("span", {
    className: [s$w.checkmark, checkmarkClassName].join(' ')
  }));
};

InputCheckbox.defaultProps = {
  id: 'InputStart',
  onChange: function onChange() {},
  checked: false,
  className: '',
  checkmarkClassName: undefined
};
InputCheckbox.propTypes = {
  children: PropTypes$1.node.isRequired,
  id: PropTypes$1.string,
  onChange: PropTypes$1.func,
  checked: PropTypes$1.bool,
  className: PropTypes$1.string,
  checkmarkClassName: PropTypes$1.string
};

var css$x = ".InputLabel-module_container__204V9 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.InputLabel-module_leftContainer__VGF5O {\n  display: grid;\n  grid-template-columns: 10em auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.InputLabel-module_leftLabel__2ToOM {\n  padding-right: 1em;\n}\n\n.InputLabel-module_input__2fkjR {\n  display: block;\n  width: 100%;\n  margin-top: 0;\n}\n\n.InputLabel-module_error__2vD-d {\n  text-align: left;\n  color: #ff5757;\n}\n\n.InputLabel-module_mandatory__2bVGW {\n  font-weight: 700;\n}\n\n.InputLabel-module_mandatory__2bVGW:after {\n  content: '*';\n}\n\n.InputLabel-module_leftText__1seAt {\n  grid-column-start: 2;\n}\n";
var s$x = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"InputLabel-module_container__204V9","leftContainer":"InputLabel-module_leftContainer__VGF5O","leftLabel":"InputLabel-module_leftLabel__2ToOM","input":"InputLabel-module_input__2fkjR","error":"InputLabel-module_error__2vD-d","mandatory":"InputLabel-module_mandatory__2bVGW","leftText":"InputLabel-module_leftText__1seAt"};
styleInject(css$x);

var InputLabel = function InputLabel(_ref) {
  var label = _ref.label,
      id = _ref.id,
      mandatory = _ref.mandatory,
      placeholder = _ref.placeholder,
      type = _ref.type,
      className = _ref.className,
      inputClassName = _ref.inputClassName,
      error = _ref.error,
      left = _ref.left,
      children = _ref.children,
      InputComponent = _ref.InputComponent,
      LabelComponent = _ref.LabelComponent,
      inputContainerClassName = _ref.inputContainerClassName,
      LabelFooterComponent = _ref.LabelFooterComponent,
      errorClassName = _ref.errorClassName,
      onKeyDown = _ref.onKeyDown,
      inputProps = _objectWithoutProperties(_ref, ["label", "id", "mandatory", "placeholder", "type", "className", "inputClassName", "error", "left", "children", "InputComponent", "LabelComponent", "inputContainerClassName", "LabelFooterComponent", "errorClassName", "onKeyDown"]);

  var labelClassName = mandatory ? s$x.mandatory : '';
  return React__default.createElement("div", {
    className: [left ? s$x.leftContainer : s$x.container, className].join(' ')
  }, LabelComponent !== null && typeof LabelComponent === 'function' && LabelComponent() ? React__default.createElement(LabelComponent, {
    className: [left ? s$x.leftLabel : undefined, labelClassName].join(' ')
  }) : React__default.createElement("label", {
    htmlFor: id,
    className: [left ? s$x.leftLabel : undefined, labelClassName].join(' ')
  }, label), InputComponent !== null && typeof InputComponent === 'function' && InputComponent() ? React__default.createElement(InputComponent, null) : React__default.createElement(Input, _extends({
    className: [s$x.input, inputClassName].join(' '),
    id: id,
    placeholder: placeholder,
    type: type,
    hasError: !!error,
    onKeyDown: onKeyDown
  }, inputProps)), LabelFooterComponent !== null && typeof LabelFooterComponent === 'function' && LabelFooterComponent() && !error ? React__default.createElement(LabelFooterComponent, {
    className: left ? s$x.leftText : undefined
  }) : !!error && React__default.createElement("div", {
    className: [s$x.error, left ? s$x.leftText : undefined, errorClassName].join(' ')
  }, error));
};

InputLabel.defaultProps = {
  id: 'InputStart',
  mandatory: false,
  placeholder: '',
  className: '',
  inputClassName: '',
  error: null,
  left: false,
  children: null,
  InputComponent: null,
  LabelComponent: null,
  type: 'text',
  inputContainerClassName: '',
  LabelFooterComponent: null,
  errorClassName: '',
  onKeyDown: function onKeyDown() {}
};
InputLabel.propTypes = {
  label: PropTypes$1.string.isRequired,
  id: PropTypes$1.string,
  mandatory: PropTypes$1.bool,
  placeholder: PropTypes$1.string,
  type: PropTypes$1.oneOfType(['text', 'number']),
  className: PropTypes$1.string,
  inputClassName: PropTypes$1.string,
  inputContainerClassName: PropTypes$1.string,
  error: PropTypes$1.string,
  left: PropTypes$1.bool,
  children: PropTypes$1.node,
  InputComponent: PropTypes$1.func,
  LabelComponent: PropTypes$1.func,
  LabelFooterComponent: PropTypes$1.func,
  errorClassName: PropTypes$1.string,
  onKeyDown: PropTypes$1.func
};

var css$y = ".Label-module_labelContainer__22ERg {\n    border-radius: 3px;\n    color: #fefefe;\n    font-size: 11px;\n    padding: 0 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.Label-module_text__147Rh {\n    padding: 0 5px;\n    font-weight: 500;\n    letter-spacing: 1px;\n}\n\n.Label-module_deepBlueColor__1ehlD {\n    background-color: #163457;\n}\n\n.Label-module_greenColor__2tK-0 {\n    background-color: #59c871;\n}\n\n.Label-module_redColor__3vBA4 {\n    background-color: #ff5757;\n}\n\n.Label-module_melroseColor__hhiPS {\n    background-color: #9ca3ff;\n}\n\n.Label-module_blueColor__1dgmE {\n    background-color: #32a0c5;\n}\n\n.Label-module_lightGreyColor__1GS0a {\n    background-color: #eceff6;\n}\n\n.Label-module_metalGreyColor__2t5Or {\n    background-color: #d5d6d7;\n}\n\n.Label-module_darkMetalGreyColor__-9Z3n {\n    background-color: rgb(206, 206, 206);\n}\n\n.Label-module_aquaHazeGreyColor__t4pra {\n    background-color: #9eb3c2;\n}\n\n.Label-module_orangeColor__1uCN4 {\n    background-color: #f39c12;\n}\n";
var s$y = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","labelContainer":"Label-module_labelContainer__22ERg","text":"Label-module_text__147Rh","deepBlueColor":"Label-module_deepBlueColor__1ehlD","greenColor":"Label-module_greenColor__2tK-0","redColor":"Label-module_redColor__3vBA4","melroseColor":"Label-module_melroseColor__hhiPS","blueColor":"Label-module_blueColor__1dgmE","lightGreyColor":"Label-module_lightGreyColor__1GS0a","metalGreyColor":"Label-module_metalGreyColor__2t5Or","darkMetalGreyColor":"Label-module_darkMetalGreyColor__-9Z3n","aquaHazeGreyColor":"Label-module_aquaHazeGreyColor__t4pra","orangeColor":"Label-module_orangeColor__1uCN4"};
styleInject(css$y);

var Label = function Label(_ref) {
  var label = _ref.label,
      logo = _ref.logo,
      className = _ref.className,
      color = _ref.color;
  return React__default.createElement("div", {
    className: [s$y.labelContainer, s$y["".concat(color, "Color")], className].join(' ')
  }, React__default.createElement("span", {
    className: "icon-ec-".concat(logo)
  }), React__default.createElement("span", {
    className: s$y.text
  }, label));
};

Label.defaultProps = {
  className: ''
};
Label.propTypes = {
  logo: PropTypes$1.string.isRequired,
  label: PropTypes$1.string.isRequired,
  className: PropTypes$1.string,
  color: PropTypes$1.string.isRequired
};

var css$z = ".Loader-module_loader__N9Oko {\n    border: 16px solid #32a0c5;\n    border-top: 16px solid #163457;\n    border-radius: 50%;\n    -webkit-animation: Loader-module_spin__MH2Fo 2s linear infinite;\n            animation: Loader-module_spin__MH2Fo 2s linear infinite;\n    -ms-flex-item-align: center;\n        align-self: center;\n    margin: 15px auto;\n}\n\n.Loader-module_large__9YkjD {\n    width: 120px;\n    height: 120px;\n    border-width: 16px;\n}\n\n.Loader-module_medium__TWZ7Q {\n    width: 60px;\n    height: 60px;\n    border-width: 8px;\n}\n\n.Loader-module_small__3uXVP {\n    width: 30px;\n    height: 30px;\n    border-width: 4px;\n}\n\n.Loader-module_xSmall__3N8aP {\n    width: 15px;\n    height: 15px;\n    border-width: 2px;\n}\n\n@-webkit-keyframes Loader-module_spin__MH2Fo {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes Loader-module_spin__MH2Fo {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n";
var s$z = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","loader":"Loader-module_loader__N9Oko","spin":"Loader-module_spin__MH2Fo","large":"Loader-module_large__9YkjD","medium":"Loader-module_medium__TWZ7Q","small":"Loader-module_small__3uXVP","xSmall":"Loader-module_xSmall__3N8aP"};
styleInject(css$z);

var Loader = function Loader(_ref) {
  var size = _ref.size,
      className = _ref.className,
      testid = _ref.testid;
  return React__default.createElement("div", {
    testid: testid,
    className: [s$z.loader, s$z[size], className].join(' ')
  });
};

Loader.defaultProps = {
  className: undefined,
  testid: undefined,
  size: 'small'
};
Loader.propTypes = {
  size: PropTypes$1.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes$1.string,
  testid: PropTypes$1.string
};

var css$A = ".LoginForm-module_card__3_T4d {\n  width: 400px;\n}\n\n.LoginForm-module_contentCard__2LMaI {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding: 16px 32px;\n  padding: 16px 32px;\n  padding: 1rem 2rem;\n}\n\n.LoginForm-module_input__3Vyuc {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.LoginForm-module_button__2JEzi {\n  margin: 10px 0;\n}\n\n.LoginForm-module_error__2-jaK {\n  color: #ff5757;\n}\n\n.LoginForm-module_inputError__1QmRY {\n  border-color: #ff5757;\n}\n\n.LoginForm-module_forgottenPasswordLink__3N7WZ {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n";
var s$A = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card":"LoginForm-module_card__3_T4d","contentCard":"LoginForm-module_contentCard__2LMaI","input":"LoginForm-module_input__3Vyuc","button":"LoginForm-module_button__2JEzi","error":"LoginForm-module_error__2-jaK","inputError":"LoginForm-module_inputError__1QmRY","forgottenPasswordLink":"LoginForm-module_forgottenPasswordLink__3N7WZ"};
styleInject(css$A);

var TextsType$4 = PropTypes$1.shape({
  email: PropTypes$1.string,
  password: PropTypes$1.string,
  submitButton: PropTypes$1.string,
  onClickPasswordForgottenLabel: PropTypes$1.string
});
var DefaultTexts$4 = {
  email: 'Email',
  password: 'Mot de passe',
  submitButton: 'Se connecter',
  onClickPasswordForgottenLabel: 'je l\'ai oublié'
};

var LoginFormValuesType = PropTypes$1.shape({
  email: PropTypes$1.string,
  password: PropTypes$1.string
});
var LoginFormErrorsType = PropTypes$1.shape({
  email: PropTypes$1.string,
  password: PropTypes$1.string
});

var LoginForm = function LoginForm(_ref) {
  var className = _ref.className,
      values = _ref.values,
      errors = _ref.errors,
      texts = _ref.texts,
      onChangeEmail = _ref.onChangeEmail,
      onChangePassword = _ref.onChangePassword,
      onSubmit = _ref.onSubmit,
      emailInputClassName = _ref.emailInputClassName,
      passwordInputClassName = _ref.passwordInputClassName,
      contentClassName = _ref.contentClassName,
      buttonClassName = _ref.buttonClassName,
      fetching = _ref.fetching,
      errorLogin = _ref.errorLogin,
      buttonTestid = _ref.buttonTestid,
      RootComponent = _ref.RootComponent,
      SubmitButtonComponent = _ref.SubmitButtonComponent,
      onClickPasswordForgotten = _ref.onClickPasswordForgotten,
      shouldDisplayEmailField = _ref.shouldDisplayEmailField,
      cardProps = _objectWithoutProperties(_ref, ["className", "values", "errors", "texts", "onChangeEmail", "onChangePassword", "onSubmit", "emailInputClassName", "passwordInputClassName", "contentClassName", "buttonClassName", "fetching", "errorLogin", "buttonTestid", "RootComponent", "SubmitButtonComponent", "onClickPasswordForgotten", "shouldDisplayEmailField"]);

  return React__default.createElement(RootComponent, _extends({}, cardProps, {
    className: [s$A.card, className].join(' '),
    contentClassName: [s$A.contentCard, contentClassName].join(' ')
  }), shouldDisplayEmailField && React__default.createElement(InputLabel, {
    className: [s$A.input, emailInputClassName].join(''),
    hasError: !!errors.email || typeof errorLogin !== 'undefined' && errorLogin !== '',
    label: texts.email,
    mandatory: true,
    type: "email",
    id: "loginFormEmailInput",
    value: values.email || '',
    onChange: onChangeEmail,
    error: errors.email
  }), React__default.createElement(InputLabel, {
    className: [s$A.input, passwordInputClassName].join(''),
    hasError: !!errors.password || typeof errorLogin !== 'undefined' && errorLogin !== '',
    label: texts.password,
    mandatory: true,
    type: "password",
    id: "loginFormPasswordInput",
    value: values.password || '',
    onChange: onChangePassword,
    error: errors.password
  }), onClickPasswordForgotten && React__default.createElement(ActionLink, {
    label: texts.onClickPasswordForgottenLabel,
    className: s$A.forgottenPasswordLink,
    onClick: onClickPasswordForgotten
  }), typeof errorLogin !== 'undefined' && errorLogin !== '' && React__default.createElement("div", {
    className: s$A.error
  }, errorLogin), React__default.createElement(SubmitButtonComponent, {
    onClick: onSubmit,
    className: [s$A.button, buttonClassName].join(' '),
    fetching: fetching,
    testid: buttonTestid
  }, React__default.createElement("span", null, texts.submitButton)));
};

LoginForm.defaultProps = {
  texts: DefaultTexts$4,
  className: undefined,
  emailInputClassName: undefined,
  passwordInputClassName: undefined,
  contentClassName: undefined,
  buttonClassName: undefined,
  fetching: false,
  errorLogin: undefined,
  buttonTestid: undefined,
  // eslint-disable-next-line react/prop-types
  RootComponent: function RootComponent(_ref2) {
    var children = _ref2.children,
        cardProps = _objectWithoutProperties(_ref2, ["children"]);

    return React__default.createElement(Card, cardProps, children);
  },
  // eslint-disable-next-line
  SubmitButtonComponent: function SubmitButtonComponent(_ref3) {
    var children = _ref3.children,
        buttonProps = _objectWithoutProperties(_ref3, ["children"]);

    return React__default.createElement(LinkUnderlined, buttonProps, children);
  },
  onClickPasswordForgotten: undefined,
  shouldDisplayEmailField: true
};
LoginForm.propTypes = {
  values: LoginFormValuesType.isRequired,
  errors: LoginFormErrorsType.isRequired,
  errorLogin: PropTypes$1.string,
  onChangeEmail: PropTypes$1.func.isRequired,
  onChangePassword: PropTypes$1.func.isRequired,
  onSubmit: PropTypes$1.func.isRequired,
  texts: TextsType$4,
  className: PropTypes$1.string,
  emailInputClassName: PropTypes$1.string,
  passwordInputClassName: PropTypes$1.string,
  contentClassName: PropTypes$1.string,
  buttonClassName: PropTypes$1.string,
  fetching: PropTypes$1.bool,
  buttonTestid: PropTypes$1.string,
  RootComponent: PropTypes$1.func,
  SubmitButtonComponent: PropTypes$1.func,
  onClickPasswordForgotten: PropTypes$1.func,
  shouldDisplayEmailField: PropTypes$1.bool
};

var css$B = ".PaymentMethodCard-module_card__1P35E {\n  position: relative;\n}\n\n.PaymentMethodCard-module_cardContent__CnD6V {\n  padding: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.PaymentMethodCard-module_header__pGvBe {\n  position: absolute;\n  width: 100%;\n  top: 20px;\n  right: 20px;\n}\n\n.PaymentMethodCard-module_pendingDeletion__-WJj3 {\n  background-color: #eceff6;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n  text-align: center;\n}\n\n.PaymentMethodCard-module_footer__2mmr8 {\n  display: block;\n}\n";
var s$B = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card":"PaymentMethodCard-module_card__1P35E","cardContent":"PaymentMethodCard-module_cardContent__CnD6V","header":"PaymentMethodCard-module_header__pGvBe","pendingDeletion":"PaymentMethodCard-module_pendingDeletion__-WJj3","footer":"PaymentMethodCard-module_footer__2mmr8"};
styleInject(css$B);

var DefaultTexts$5 = {
  select: 'Sélectionner',
  remove: 'Supprimer',
  save: 'Enregistrer',
  confirmDeletionTitle: 'Confirmation',
  confirmDeletionSentence: 'Êtes-vous sûr(e) de vouloir supprimer ce moyen de paiement ?',
  cancel: 'Annuler',
  confirm: 'Confirmer',
  expireAt: 'Exp'
};
var TextsType$5 = PropTypes$1.shape({
  update: PropTypes$1.string,
  remove: PropTypes$1.string,
  save: PropTypes$1.string,
  confirmDeletionTitle: PropTypes$1.string,
  confirmDeletionSentence: PropTypes$1.string,
  cancel: PropTypes$1.string,
  confirm: PropTypes$1.string,
  expireAt: PropTypes$1.string
});

var PaymentMethodType = PropTypes$1.shape({
  last4digits: PropTypes$1.string,
  brand: PropTypes$1.oneOf(['visa', 'mastercard', 'american', 'cb']),
  type: PropTypes$1.oneOf(['card', 'account', 'sepa']),
  expireAt: PropTypes$1.string
});

var _ref$2 =
/*#__PURE__*/
React__default.createElement("g", {
  id: "Page-1_7_"
}, React__default.createElement("g", {
  id: "Visa_2_"
}, React__default.createElement("path", {
  id: "Shape_23_",
  className: "st0",
  d: "M150.3 8.9c-3.2-1.2-8.2-2.5-14.5-2.5-16 0-27.3 8.2-27.4 20-.1 8.7 8 13.6 14.2 16.5 6.3 3 8.4 4.9 8.4 7.5 0 4.1-5 5.9-9.7 5.9-6.5 0-9.9-.9-15.2-3.2l-2.1-1-2.3 13.6c3.8 1.7 10.8 3.2 18 3.2 17 0 28.1-8.1 28.2-20.7.1-6.9-4.3-12.2-13.6-16.5-5.7-2.8-9.1-4.7-9.1-7.5 0-2.5 2.9-5.2 9.3-5.2 5.3-.1 9.1 1.1 12.1 2.3l1.5.7 2.2-13.1"
}), React__default.createElement("path", {
  id: "Shape_21_",
  className: "st0",
  d: "M191.8 7.5h-12.5c-3.9 0-6.8 1.1-8.5 5l-24 55.6h17s2.8-7.5 3.4-9.1h20.7c.5 2.1 2 9.1 2 9.1h15L191.8 7.5zm-19.9 39.1c1.3-3.5 6.5-17 6.5-17-.1.2 1.3-3.5 2.1-5.8l1.1 5.2s3.1 14.5 3.7 17.5l-13.4.1z"
}), React__default.createElement("path", {
  id: "Shape_19_",
  className: "st0",
  d: "M75.4 68.1L85.5 7.4h16.2L91.6 68.1H75.4z"
}), React__default.createElement("path", {
  id: "Shape_17_",
  className: "st0",
  d: "M61.8 7.5L46 48.9l-1.7-8.4c-3-9.7-12.1-20.2-22.4-25.5l14.5 53.1h17.1L79 7.5H61.8"
}), React__default.createElement("path", {
  id: "Shape_15_",
  d: "M31.3 7.4H5.1l-.2 1.3c20.3 5 33.8 17.2 39.3 31.8l-5.7-27.9c-.9-3.9-3.7-5-7.2-5.2",
  fill: "#fab131"
})));

var iconVisa = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Calque_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20211%2075%22%20style%3D%22enable-background%3Anew%200%200%20211%2075%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23256EAF%3B%7D%20.st1%7Bfill%3A%23FAB131%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Page-1_7_%22%3E%20%3Cg%20id%3D%22Visa_2_%22%3E%20%20%3Cpath%20id%3D%22Shape_23_%22%20class%3D%22st0%22%20d%3D%22M150.3%2C8.9c-3.2-1.2-8.2-2.5-14.5-2.5c-16%2C0-27.3%2C8.2-27.4%2C20c-0.1%2C8.7%2C8%2C13.6%2C14.2%2C16.5%20%20%20c6.3%2C3%2C8.4%2C4.9%2C8.4%2C7.5c0%2C4.1-5%2C5.9-9.7%2C5.9c-6.5%2C0-9.9-0.9-15.2-3.2l-2.1-1l-2.3%2C13.6c3.8%2C1.7%2C10.8%2C3.2%2C18%2C3.2%20%20%20c17%2C0%2C28.1-8.1%2C28.2-20.7c0.1-6.9-4.3-12.2-13.6-16.5c-5.7-2.8-9.1-4.7-9.1-7.5c0-2.5%2C2.9-5.2%2C9.3-5.2c5.3-0.1%2C9.1%2C1.1%2C12.1%2C2.3%20%20%20l1.5%2C0.7L150.3%2C8.9%22%2F%3E%20%20%3Cpath%20id%3D%22Shape_21_%22%20class%3D%22st0%22%20d%3D%22M191.8%2C7.5h-12.5c-3.9%2C0-6.8%2C1.1-8.5%2C5l-24%2C55.6h17c0%2C0%2C2.8-7.5%2C3.4-9.1c1.9%2C0%2C18.4%2C0%2C20.7%2C0%20%20%20c0.5%2C2.1%2C2%2C9.1%2C2%2C9.1h15L191.8%2C7.5L191.8%2C7.5z%20M171.9%2C46.6c1.3-3.5%2C6.5-17%2C6.5-17c-0.1%2C0.2%2C1.3-3.5%2C2.1-5.8l1.1%2C5.2%20%20%20c0%2C0%2C3.1%2C14.5%2C3.7%2C17.5L171.9%2C46.6L171.9%2C46.6L171.9%2C46.6L171.9%2C46.6z%22%2F%3E%20%20%3Cpath%20id%3D%22Shape_19_%22%20class%3D%22st0%22%20d%3D%22M75.4%2C68.1L85.5%2C7.4h16.2L91.6%2C68.1H75.4z%22%2F%3E%20%20%3Cpath%20id%3D%22Shape_17_%22%20class%3D%22st0%22%20d%3D%22M61.8%2C7.5L46%2C48.9l-1.7-8.4c-3-9.7-12.1-20.2-22.4-25.5l14.5%2C53.1l17.1%2C0L79%2C7.5H61.8%22%2F%3E%20%20%3Cpath%20id%3D%22Shape_15_%22%20class%3D%22st1%22%20d%3D%22M31.3%2C7.4H5.1L4.9%2C8.7c20.3%2C5%2C33.8%2C17.2%2C39.3%2C31.8l-5.7-27.9C37.6%2C8.7%2C34.8%2C7.6%2C31.3%2C7.4%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$3 =
/*#__PURE__*/
React__default.createElement("g", {
  id: "Layer_2"
}, React__default.createElement("g", {
  id: "Layer_1-2"
}, React__default.createElement("linearGradient", {
  id: "SVGID_1_",
  gradientUnits: "userSpaceOnUse",
  x1: 46.095,
  y1: 66.685,
  x2: 46.095,
  y2: 10.315,
  gradientTransform: "matrix(1 0 0 -1 0 76)"
}, React__default.createElement("stop", {
  offset: 0,
  stopColor: "#83cbed"
}), React__default.createElement("stop", {
  offset: 1,
  stopColor: "#2983ba"
})), React__default.createElement("path", {
  d: "M4 9.3h84.2c1.7 0 3 1.3 3 3v50.4c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V12.3c0-1.6 1.3-3 3-3z",
  fill: "url(#SVGID_1_)",
  stroke: "#dedede",
  strokeMiterlimit: 10
}), React__default.createElement("path", {
  className: "st1",
  d: "M27.2 36.9V36l-.5.9h-3.9l-.5-1v1H15l-.9-2h-1.4l-.9 2H5.7l2.5-6.1 2.8-6.2h5.3l.7 1.8v-1.8h6.5l1.4 3 1.4-3h20.4c.6 0 1.2.2 1.8.5v-.5h5.2v.7c.7-.4 1.5-.7 2.3-.7h9l.8 1.8v-1.8h5.8l1.1 1.8v-1.8H78V37h-5.7L71 34.7v2.1h-7.1l-1-2.2h-1.4l-.9 2.2h-4.3c-1 0-2-.3-2.8-.9v.9H45V34c0-.4-.3-.4-.3-.4h-.3v3.3H27.2zM22.9 39.6h11.2l1.6 1.8 1.7-1.8H46c.6 0 1.1.2 1.6.4v-.4h7.7c.6 0 1.2.2 1.8.5v-.5H67v.4c.5-.3 1.1-.4 1.7-.5H75v.5c.5-.3 1.1-.4 1.7-.5h6v11.7c-.9.4-2 .7-3 .8h-6.6v-.4c-.5.3-1 .4-1.6.4H53.8v-3c0-.3-.1-.3-.4-.3h-.2V52h-5.5v-3.4c-.6.3-1.2.4-1.7.4h-2v3h-6.8l-1.5-1.9L34 52H23V39.6z"
}), React__default.createElement("path", {
  className: "st2",
  d: "M58.3 41.4h7v1.9h-4.9V45h4.8v1.6h-4.8v1.7h4.9v1.9h-7zM78.9 44.8c2.7.1 2.9 1.5 2.9 2.9s-1.2 2.5-2.6 2.5h-4.7v-1.9H78c.6 0 1.5 0 1.5-.8 0-.4-.2-.7-.8-.7-.3 0-1.3-.1-1.5-.1-2.4-.1-2.9-1.2-2.9-2.7-.1-1.3 1-2.5 2.3-2.5h4.8v1.9h-3.3c-.8 0-1.6-.1-1.6.8 0 .5.4.7.9.7l1.5-.1zM70.8 44.8c2.7.1 2.9 1.5 2.9 2.9s-1.2 2.5-2.6 2.5h-4.7v-1.9h3.5c.6 0 1.5 0 1.5-.8 0-.4-.2-.7-.8-.7-.3 0-1.3-.1-1.5-.1-2.4-.1-2.9-1.2-2.9-2.7-.1-1.3 1-2.5 2.3-2.5h4.8v1.9H70c-.8 0-1.6-.1-1.6.8 0 .5.4.7.9.7l1.5-.1zM45.3 41.4h-7.5l-2.5 2.7-2.4-2.7h-8.5v8.8h8.2l2.6-2.9 2.5 2.9h4.1v-3h2.9c1.1 0 3.2 0 3.2-3.1.1-1.3-.8-2.5-2.2-2.7h-.4zm-13.8 6.9h-5v-1.7h4.8V45h-4.8v-1.7h5.2l2.1 2.4-2.3 2.6zm8.2 1l-3.1-3.7 3.1-3.4v7.1zm4.9-3.9h-2.7v-2.1h2.7c.6-.1 1.1.4 1.2 1 .1.6-.4 1.1-1 1.2-.1-.1-.2-.1-.2-.1zM55.7 46.2c1-.4 1.6-1.4 1.5-2.4 0-1.3-1-2.3-2.3-2.4H49v8.8h2.2v-3.1H54c.7 0 1 .7 1.1 1.5l.1 1.6h2.1l-.1-1.8c-.1-1.4-.5-2.1-1.5-2.2zm-1.9-.9h-2.7v-2h2.7c.5-.1 1.1.3 1.2.8v.2c0 .6-.3 1-1.2 1zM49.8 26.3H52v8.8h-2.2zM32.2 26.3h7.1v1.9h-4.9v1.6h4.7v1.7h-4.7v1.7h4.9v1.9h-7.1zM47.2 31.1c1-.4 1.6-1.4 1.5-2.4 0-1.3-1-2.3-2.3-2.4H40.5v8.8h2.2V32h2.8c.8 0 1 .7 1.1 1.5l.1 1.6h2.1l-.1-1.8c0-1.5-.5-2.1-1.5-2.2zm-1.8-.9h-2.7v-2h2.7c.5-.1 1.1.3 1.2.8v.2c0 .6-.3 1-1.2 1zM27.3 26.3l-2.6 5.9-2.7-5.9h-3.4v8.5l-3.8-8.5H12l-3.8 8.8h2.3l.8-2h4.3l.9 2h4.3v-6.5l2.9 6.5h2l2.9-6.4v6.4h2.2v-8.8h-3.5zm-15.2 4.9l1.3-3.1 1.3 3.1h-2.6zM74.2 26.3v6.1l-3.6-6.1h-3.2v8.2l-3.7-8.2h-2.9l-3 6.8h-1.4c-.5-.1-1.3-.5-1.3-2v-.6c0-2.1 1.1-2.2 2.5-2.2H59v-2h-2.8c-1 0-3.1.8-3.2 4.4 0 2.4 1 4.4 3.4 4.4h2.8l.8-2h4.3l.8 2h4.2v-6.4l3.9 6.4h2.9v-8.8h-1.9zM61 31.2l1.3-3.1 1.3 3.1H61z"
})));

var iconAmerican = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Calque_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2093.7%2075%22%20style%3D%22enable-background%3Anew%200%200%2093.7%2075%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3Aurl%28%23SVGID_1_%29%3Bstroke%3A%23DEDEDE%3Bstroke-miterlimit%3A10%3B%7D%20.st1%7Bfill%3A%23FFFFFF%3B%7D%20.st2%7Bfill%3A%230078A9%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Layer_2%22%3E%20%3Cg%20id%3D%22Layer_1-2%22%3E%20%20%20%20%20%3ClinearGradient%20id%3D%22SVGID_1_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%2246.095%22%20y1%3D%2266.685%22%20x2%3D%2246.095%22%20y2%3D%2210.315%22%20gradientTransform%3D%22matrix%281%200%200%20-1%200%2076%29%22%3E%20%20%20%3Cstop%20%20offset%3D%220%22%20style%3D%22stop-color%3A%2383CBED%22%2F%3E%20%20%20%3Cstop%20%20offset%3D%221%22%20style%3D%22stop-color%3A%232983BA%22%2F%3E%20%20%3C%2FlinearGradient%3E%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M4%2C9.3h84.2c1.7%2C0%2C3%2C1.3%2C3%2C3v50.4c0%2C1.7-1.3%2C3-3%2C3H4c-1.7%2C0-3-1.3-3-3V12.3C1%2C10.7%2C2.3%2C9.3%2C4%2C9.3z%22%2F%3E%20%20%3Cpath%20class%3D%22st1%22%20d%3D%22M27.2%2C36.9v-0.9l-0.5%2C0.9h-3.9l-0.5-1v1h-7.3l-0.9-2h-1.4l-0.9%2C2H5.7l2.5-6.1l2.8-6.2h5.3l0.7%2C1.8v-1.8h6.5%20%20%20l1.4%2C3l1.4-3h20.4c0.6%2C0%2C1.2%2C0.2%2C1.8%2C0.5v-0.5h5.2v0.7c0.7-0.4%2C1.5-0.7%2C2.3-0.7h9l0.8%2C1.8v-1.8h5.8l1.1%2C1.8v-1.8H78v12.4h-5.7%20%20%20L71%2C34.7v2.1h-7.1l-1-2.2h-1.4l-0.9%2C2.2h-4.3c-1%2C0-2-0.3-2.8-0.9v0.9h-8.5V34c0-0.4-0.3-0.4-0.3-0.4h-0.3v3.3H27.2z%22%2F%3E%20%20%3Cpath%20class%3D%22st1%22%20d%3D%22M22.9%2C39.6h11.2l1.6%2C1.8l1.7-1.8H46c0.6%2C0%2C1.1%2C0.2%2C1.6%2C0.4v-0.4h7.7c0.6%2C0%2C1.2%2C0.2%2C1.8%2C0.5v-0.5H67V40%20%20%20c0.5-0.3%2C1.1-0.4%2C1.7-0.5H75V40c0.5-0.3%2C1.1-0.4%2C1.7-0.5h6v11.7c-0.9%2C0.4-2%2C0.7-3%2C0.8h-6.6v-0.4c-0.5%2C0.3-1%2C0.4-1.6%2C0.4H53.8v-3%20%20%20c0-0.3-0.1-0.3-0.4-0.3h-0.2V52h-5.5v-3.4C47.1%2C48.9%2C46.5%2C49%2C46%2C49h-2v3h-6.8l-1.5-1.9L34%2C52h-11V39.6z%22%2F%3E%20%20%3Cpolygon%20class%3D%22st2%22%20points%3D%2258.3%2C41.4%2065.3%2C41.4%2065.3%2C43.3%2060.4%2C43.3%2060.4%2C45%2065.2%2C45%2065.2%2C46.6%2060.4%2C46.6%2060.4%2C48.3%2065.3%2C48.3%20%20%20%2065.3%2C50.2%2058.3%2C50.2%20%20%20%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M78.9%2C44.8c2.7%2C0.1%2C2.9%2C1.5%2C2.9%2C2.9c0%2C1.4-1.2%2C2.5-2.6%2C2.5c-0.1%2C0-0.1%2C0-0.2%2C0h-4.5v-1.9H78%20%20%20c0.6%2C0%2C1.5%2C0%2C1.5-0.8c0-0.4-0.2-0.7-0.8-0.7c-0.3%2C0-1.3-0.1-1.5-0.1c-2.4-0.1-2.9-1.2-2.9-2.7c-0.1-1.3%2C1-2.5%2C2.3-2.5%20%20%20c0.1%2C0%2C0.2%2C0%2C0.3%2C0h4.5v1.9h-3.3c-0.8%2C0-1.6-0.1-1.6%2C0.8c0%2C0.5%2C0.4%2C0.7%2C0.9%2C0.7L78.9%2C44.8z%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M70.8%2C44.8c2.7%2C0.1%2C2.9%2C1.5%2C2.9%2C2.9c0%2C1.4-1.2%2C2.5-2.6%2C2.5c-0.1%2C0-0.1%2C0-0.2%2C0h-4.5v-1.9h3.5%20%20%20c0.6%2C0%2C1.5%2C0%2C1.5-0.8c0-0.4-0.2-0.7-0.8-0.7c-0.3%2C0-1.3-0.1-1.5-0.1c-2.4-0.1-2.9-1.2-2.9-2.7c-0.1-1.3%2C1-2.5%2C2.3-2.5%20%20%20c0.1%2C0%2C0.2%2C0%2C0.3%2C0h4.5v1.9H70c-0.8%2C0-1.6-0.1-1.6%2C0.8c0%2C0.5%2C0.4%2C0.7%2C0.9%2C0.7L70.8%2C44.8z%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M45.3%2C41.4h-7.5l-2.5%2C2.7l-2.4-2.7h-8.5v8.8h8.2l2.6-2.9l2.5%2C2.9h4.1v-3h2.9c1.1%2C0%2C3.2%2C0%2C3.2-3.1%20%20%20c0.1-1.3-0.8-2.5-2.2-2.7C45.6%2C41.4%2C45.4%2C41.4%2C45.3%2C41.4z%20M31.5%2C48.3h-5v-1.7h4.8V45h-4.8v-1.7h5.2l2.1%2C2.4L31.5%2C48.3z%20M39.7%2C49.3%20%20%20l-3.1-3.7l3.1-3.4V49.3z%20M44.6%2C45.4h-2.7v-2.1h2.7c0.6-0.1%2C1.1%2C0.4%2C1.2%2C1c0.1%2C0.6-0.4%2C1.1-1%2C1.2C44.7%2C45.4%2C44.6%2C45.4%2C44.6%2C45.4%20%20%20L44.6%2C45.4z%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M55.7%2C46.2c1-0.4%2C1.6-1.4%2C1.5-2.4c0-1.3-1-2.3-2.3-2.4c-0.1%2C0-0.2%2C0-0.3%2C0H49v8.8h2.2v-3.1H54%20%20%20c0.7%2C0%2C1%2C0.7%2C1.1%2C1.5l0.1%2C1.6h2.1l-0.1-1.8C57.1%2C47%2C56.7%2C46.3%2C55.7%2C46.2z%20M53.8%2C45.3h-2.7v-2h2.7c0.5-0.1%2C1.1%2C0.3%2C1.2%2C0.8%20%20%20c0%2C0.1%2C0%2C0.1%2C0%2C0.2C55%2C44.9%2C54.7%2C45.3%2C53.8%2C45.3z%22%2F%3E%20%20%3Crect%20x%3D%2249.8%22%20y%3D%2226.3%22%20class%3D%22st2%22%20width%3D%222.2%22%20height%3D%228.8%22%2F%3E%20%20%3Cpolygon%20class%3D%22st2%22%20points%3D%2232.2%2C26.3%2039.3%2C26.3%2039.3%2C28.2%2034.4%2C28.2%2034.4%2C29.8%2039.1%2C29.8%2039.1%2C31.5%2034.4%2C31.5%2034.4%2C33.2%20%20%20%2039.3%2C33.2%2039.3%2C35.1%2032.2%2C35.1%20%20%20%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M47.2%2C31.1c1-0.4%2C1.6-1.4%2C1.5-2.4c0-1.3-1-2.3-2.3-2.4c-0.1%2C0-0.2%2C0-0.3%2C0h-5.6v8.8h2.2V32h2.8%20%20%20c0.8%2C0%2C1%2C0.7%2C1.1%2C1.5l0.1%2C1.6h2.1l-0.1-1.8C48.7%2C31.8%2C48.2%2C31.2%2C47.2%2C31.1z%20M45.4%2C30.2h-2.7v-2h2.7c0.5-0.1%2C1.1%2C0.3%2C1.2%2C0.8%20%20%20c0%2C0.1%2C0%2C0.1%2C0%2C0.2C46.6%2C29.8%2C46.3%2C30.2%2C45.4%2C30.2z%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M27.3%2C26.3l-2.6%2C5.9L22%2C26.3h-3.4v8.5l-3.8-8.5H12l-3.8%2C8.8h2.3l0.8-2h4.3l0.9%2C2h4.3v-6.5l2.9%2C6.5h2l2.9-6.4%20%20%20v6.4h2.2v-8.8H27.3z%20M12.1%2C31.2l1.3-3.1l1.3%2C3.1H12.1z%22%2F%3E%20%20%3Cpath%20class%3D%22st2%22%20d%3D%22M74.2%2C26.3v6.1l-3.6-6.1h-3.2v8.2l-3.7-8.2h-2.9l-3%2C6.8c0%2C0-1.2%2C0-1.4%2C0c-0.5-0.1-1.3-0.5-1.3-2v-0.6%20%20%20c0-2.1%2C1.1-2.2%2C2.5-2.2H59v-2h-2.8c-1%2C0-3.1%2C0.8-3.2%2C4.4c0%2C2.4%2C1%2C4.4%2C3.4%2C4.4h2.8l0.8-2h4.3l0.8%2C2h4.2v-6.4l3.9%2C6.4h2.9v-8.8H74.2%20%20%20z%20M61%2C31.2l1.3-3.1l1.3%2C3.1H61z%22%2F%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var iconCb = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Calque_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%20194%2089%22%20style%3D%22enable-background%3Anew%200%200%20194%2089%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%23247FB2%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M102.5%2C44.7c0%2C6.6-1%2C12.3-2.9%2C17.1c-1.9%2C4.9-4.8%2C8.9-8.7%2C12.2c-3.9%2C3-8.8%2C5.3-14.7%2C6.9%20%20c-5.9%2C1.5-12.9%2C2.3-21%2C2.3c-8.3%2C0-15.5-0.8-21.5-2.3c-6-1.5-10.9-3.8-14.5-6.9c-3.8-3.3-6.5-7.4-8.3-12.2C9.1%2C57%2C8.1%2C51.2%2C8.1%2C44.7%20%20c0-6.4%2C0.7-12%2C2.2-16.5c1.5-4.6%2C3.6-8.2%2C6.4-10.9c3.9-3.7%2C9-6.5%2C15.5-8.3c6.4-1.8%2C14.1-2.7%2C23-2.7c8.3%2C0%2C15.6%2C0.8%2C21.8%2C2.5%20%20c6.2%2C1.6%2C11.3%2C4.2%2C15.3%2C7.6c3.3%2C2.7%2C5.7%2C6.2%2C7.3%2C10.4c1.6%2C4.2%2C2.4%2C9.1%2C2.4%2C14.6H54.9v3.5H102.5z%20M105.4%2C41.2V7.6h65%20%20c2.2%2C0%2C4.3%2C0.4%2C6.2%2C1.2c1.9%2C0.8%2C3.8%2C2.1%2C5.5%2C3.9c1.6%2C1.6%2C2.9%2C3.4%2C3.8%2C5.4c0.9%2C1.9%2C1.3%2C4.1%2C1.3%2C6.4c0%2C2.2-0.4%2C4.3-1.1%2C6.2%20%20c-0.8%2C1.9-1.8%2C3.7-3.3%2C5.2c-1.4%2C1.6-3%2C2.9-4.9%2C3.8c-1.9%2C0.9-3.9%2C1.4-6.2%2C1.5H105.4z%20M177.6%2C46.3c2%2C0.9%2C3.8%2C2.3%2C5.4%2C4.2%20%20c1.8%2C1.8%2C3%2C3.7%2C3.9%2C5.9c0.8%2C2.2%2C1.2%2C4.5%2C1.2%2C6.9c0%2C2.5-0.4%2C4.7-1.2%2C6.8c-0.8%2C2.1-2.1%2C3.9-3.9%2C5.5c-1.6%2C1.8-3.5%2C3.1-5.4%2C4%20%20c-2%2C0.9-4.1%2C1.4-6.3%2C1.7h-65.9V44.7h65.9C173.5%2C44.8%2C175.6%2C45.3%2C177.6%2C46.3z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$4 =
/*#__PURE__*/
React__default.createElement("g", {
  id: "Layer_2"
}, React__default.createElement("g", {
  id: "Layer_1-2"
}, React__default.createElement("path", {
  fill: "none",
  d: "M-10-7.9h110.7v90.8H-10z"
}), React__default.createElement("path", {
  d: "M17.4 71.5V67c.1-1.5-1-2.8-2.5-2.9h-.3c-1-.1-2 .4-2.5 1.3-.5-.8-1.4-1.3-2.4-1.3-.8 0-1.6.4-2.1 1.1v-.9H6v7.2h1.6v-4c-.1-.9.5-1.8 1.4-1.9h.3c1 0 1.6.7 1.6 1.9v4h1.6v-4c-.1-.9.5-1.8 1.5-1.9h.3c1.1 0 1.6.7 1.6 1.9v4h1.5zm23.4-7.2h-2.6v-2.2h-1.6v2.2h-1.4v1.4h1.5V69c0 1.7.6 2.7 2.5 2.7.7 0 1.4-.2 2-.6l-.5-1.3c-.4.3-.9.4-1.4.4-.8 0-1-.5-1-1.2v-3.3h2.6l-.1-1.4zm13.4-.2c-.8 0-1.5.4-1.9 1.1v-.9h-1.6v7.2h1.6v-4c0-1.2.5-1.9 1.5-1.9.3 0 .7.1 1 .2l.5-1.5c-.4-.2-.7-.2-1.1-.2zm-20.2.7c-.9-.5-1.9-.8-2.9-.8-1.8 0-3 .9-3 2.3 0 1.2.9 1.9 2.5 2.1l.8.1c.9.1 1.3.3 1.3.8 0 .6-.6.9-1.6.9-.9 0-1.7-.2-2.4-.8l-.8 1.2c.9.6 2 1 3.1.9 2.1 0 3.3-1 3.3-2.4s-1-1.9-2.5-2.2l-.9.1c-.7-.1-1.2-.2-1.2-.7 0-.5.5-.8 1.4-.8.8 0 1.6.2 2.3.6l.6-1.3zm42-.7c-.8 0-1.5.4-1.9 1.1v-.9h-1.6v7.2h1.6v-4c0-1.2.5-1.9 1.5-1.9.3 0 .7.1 1 .2l.5-1.5c-.4-.2-.7-.2-1.1-.2zm-20.2 3.8c-.1 2 1.5 3.7 3.5 3.8h.3c.9 0 1.9-.3 2.6-.9l-.8-1.3c-.5.4-1.2.6-1.9.6-1.3-.1-2.2-1.2-2.1-2.5.1-1.1 1-2 2.1-2.1.7 0 1.3.2 1.9.6l.8-1.3c-.7-.6-1.7-.9-2.6-.9-2-.1-3.7 1.4-3.8 3.4v.6zm14.7 0v-3.6h-1.6v.9c-.5-.7-1.4-1.1-2.3-1.1-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8.9 0 1.7-.4 2.3-1.1v.9h1.6v-3.6zm-5.9 0c.1-1.2 1.1-2.1 2.3-2s2.1 1.1 2 2.3c-.1 1.1-1 2-2.2 2.1-1.2 0-2.2-.9-2.2-2.1.1-.2.1-.3.1-.3zm-18.9-3.8c-2.1 0-3.7 1.7-3.7 3.8 0 2.1 1.7 3.7 3.8 3.7 1.1.1 2.2-.3 3-1l-.8-1.2c-.6.5-1.3.7-2.1.8-1.1.1-2-.7-2.2-1.8h5.4v-.6c.1-2.2-1.3-3.7-3.4-3.7zm0 1.4c1 0 1.8.8 1.8 1.7h-3.8c.1-1 1-1.7 2-1.7zM85 67.9v-6.5h-1.5v3.8c-.5-.7-1.4-1.1-2.3-1.1-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8.9 0 1.7-.4 2.3-1.1v.9H85v-3.6zm2.6 2.5c.1 0 .2 0 .3.1.1 0 .2.1.2.2l.2.2c.1.2.1.4 0 .6 0 .1-.1.2-.2.2l-.2.2c-.1 0-.2.1-.3.1-.3 0-.6-.2-.7-.4-.1-.2-.1-.4 0-.6 0-.1.1-.2.2-.2l.2-.2c.1-.2.2-.2.3-.2zm0 1.3h.2c.1 0 .1-.1.2-.1.2-.2.2-.5 0-.8 0-.1-.1-.1-.2-.1h-.4c-.1 0-.1.1-.2.1-.2.2-.2.5 0 .8.1.1.1.1.2.1h.2zm.1-.9c.1 0 .1 0 .2.1 0 0 .1.1.1.2s0 .1-.1.1c0 0-.1.1-.2.1l.2.2h-.2l-.2-.2h-.1v.2h-.1v-.7h.4zm-.2.1v.2H87.8V71v-.1H87.5zm-8.3-3c.1-1.2 1.1-2.1 2.3-2s2.1 1.1 2 2.3c-.1 1.1-1 2-2.2 2.1-1.2 0-2.2-.9-2.2-2.1.1-.2.1-.3.1-.3zm-52.9 0v-3.6h-1.6v.9c-.5-.7-1.4-1.1-2.3-1.1-2.1 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8.9 0 1.7-.4 2.3-1.1v.9h1.6v-3.6zm-5.9 0c.1-1.2 1.1-2.1 2.3-2 1.2.1 2.1 1.1 2 2.3-.1 1.1-1 2-2.2 2.1-1.2 0-2.2-.9-2.2-2.1.1-.2.1-.3.1-.3z",
  fill: "#231f20"
}), React__default.createElement("g", {
  id: "_Group_"
}, React__default.createElement("path", {
  fill: "#ff5f00",
  d: "M33.5 9.3h23.8V52H33.5z"
}), React__default.createElement("path", {
  id: "_Path_",
  d: "M35 30.7c0-8.3 3.8-16.2 10.4-21.3C33.6.1 16.5 2.1 7.2 13.9S0 42.8 11.8 52c9.8 7.7 23.7 7.7 33.5 0C38.8 46.9 35 39 35 30.7z",
  fill: "#eb001b"
}), React__default.createElement("path", {
  className: "st4",
  d: "M89.3 30.7c0 15-12.2 27.1-27.1 27.1-6.1 0-12-2-16.8-5.8 11.8-9.3 13.8-26.3 4.6-38.1-1.3-1.7-2.9-3.2-4.6-4.6C57.2 0 74.3 2.1 83.5 13.9c3.7 4.8 5.8 10.7 5.8 16.8zM86.7 47.5v-.9h.3v-.2h-.9v.2h.4v.9h.2zm1.7 0v-1.1h-.3l-.3.8-.3-.8h-.2v1.1h.2v-.8l.3.7h.2l.3-.7v.8h.1z"
}))));

var iconMastercard = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Calque_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2091.1%2075%22%20style%3D%22enable-background%3Anew%200%200%2091.1%2075%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3Anone%3B%7D%20.st1%7Bfill%3A%23231F20%3B%7D%20.st2%7Bfill%3A%23FF5F00%3B%7D%20.st3%7Bfill%3A%23EB001B%3B%7D%20.st4%7Bfill%3A%23F79E1B%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Layer_2%22%3E%20%3Cg%20id%3D%22Layer_1-2%22%3E%20%20%3Crect%20x%3D%22-10%22%20y%3D%22-7.9%22%20class%3D%22st0%22%20width%3D%22110.7%22%20height%3D%2290.8%22%2F%3E%20%20%3Cpath%20class%3D%22st1%22%20d%3D%22M17.4%2C71.5V67c0.1-1.5-1-2.8-2.5-2.9c-0.1%2C0-0.2%2C0-0.3%2C0c-1-0.1-2%2C0.4-2.5%2C1.3c-0.5-0.8-1.4-1.3-2.4-1.3%20%20%20c-0.8%2C0-1.6%2C0.4-2.1%2C1.1v-0.9H6v7.2h1.6v-4c-0.1-0.9%2C0.5-1.8%2C1.4-1.9c0.1%2C0%2C0.2%2C0%2C0.3%2C0c1%2C0%2C1.6%2C0.7%2C1.6%2C1.9v4h1.6v-4%20%20%20c-0.1-0.9%2C0.5-1.8%2C1.5-1.9c0.1%2C0%2C0.2%2C0%2C0.3%2C0c1.1%2C0%2C1.6%2C0.7%2C1.6%2C1.9v4L17.4%2C71.5z%20M40.8%2C64.3h-2.6v-2.2h-1.6v2.2h-1.4v1.4h1.5V69%20%20%20c0%2C1.7%2C0.6%2C2.7%2C2.5%2C2.7c0.7%2C0%2C1.4-0.2%2C2-0.6l-0.5-1.3c-0.4%2C0.3-0.9%2C0.4-1.4%2C0.4c-0.8%2C0-1-0.5-1-1.2v-3.3h2.6L40.8%2C64.3z%20%20%20%20M54.2%2C64.1c-0.8%2C0-1.5%2C0.4-1.9%2C1.1v-0.9h-1.6v7.2h1.6v-4c0-1.2%2C0.5-1.9%2C1.5-1.9c0.3%2C0%2C0.7%2C0.1%2C1%2C0.2l0.5-1.5%20%20%20C54.9%2C64.1%2C54.6%2C64.1%2C54.2%2C64.1L54.2%2C64.1z%20M34%2C64.8c-0.9-0.5-1.9-0.8-2.9-0.8c-1.8%2C0-3%2C0.9-3%2C2.3c0%2C1.2%2C0.9%2C1.9%2C2.5%2C2.1l0.8%2C0.1%20%20%20c0.9%2C0.1%2C1.3%2C0.3%2C1.3%2C0.8c0%2C0.6-0.6%2C0.9-1.6%2C0.9c-0.9%2C0-1.7-0.2-2.4-0.8l-0.8%2C1.2c0.9%2C0.6%2C2%2C1%2C3.1%2C0.9c2.1%2C0%2C3.3-1%2C3.3-2.4%20%20%20s-1-1.9-2.5-2.2L30.9%2C67c-0.7-0.1-1.2-0.2-1.2-0.7c0-0.5%2C0.5-0.8%2C1.4-0.8c0.8%2C0%2C1.6%2C0.2%2C2.3%2C0.6L34%2C64.8z%20M76%2C64.1%20%20%20c-0.8%2C0-1.5%2C0.4-1.9%2C1.1v-0.9h-1.6v7.2h1.6v-4c0-1.2%2C0.5-1.9%2C1.5-1.9c0.3%2C0%2C0.7%2C0.1%2C1%2C0.2l0.5-1.5C76.7%2C64.1%2C76.4%2C64.1%2C76%2C64.1%20%20%20L76%2C64.1z%20M55.8%2C67.9c-0.1%2C2%2C1.5%2C3.7%2C3.5%2C3.8c0.1%2C0%2C0.2%2C0%2C0.3%2C0c0.9%2C0%2C1.9-0.3%2C2.6-0.9l-0.8-1.3c-0.5%2C0.4-1.2%2C0.6-1.9%2C0.6%20%20%20c-1.3-0.1-2.2-1.2-2.1-2.5c0.1-1.1%2C1-2%2C2.1-2.1c0.7%2C0%2C1.3%2C0.2%2C1.9%2C0.6l0.8-1.3c-0.7-0.6-1.7-0.9-2.6-0.9c-2-0.1-3.7%2C1.4-3.8%2C3.4%20%20%20C55.8%2C67.6%2C55.8%2C67.7%2C55.8%2C67.9L55.8%2C67.9z%20M70.5%2C67.9v-3.6h-1.6v0.9c-0.5-0.7-1.4-1.1-2.3-1.1c-2.1%2C0-3.8%2C1.7-3.8%2C3.8%20%20%20c0%2C2.1%2C1.7%2C3.8%2C3.8%2C3.8c0.9%2C0%2C1.7-0.4%2C2.3-1.1v0.9h1.6V67.9z%20M64.6%2C67.9c0.1-1.2%2C1.1-2.1%2C2.3-2s2.1%2C1.1%2C2%2C2.3%20%20%20c-0.1%2C1.1-1%2C2-2.2%2C2.1c-1.2%2C0-2.2-0.9-2.2-2.1C64.6%2C68%2C64.6%2C67.9%2C64.6%2C67.9z%20M45.7%2C64.1c-2.1%2C0-3.7%2C1.7-3.7%2C3.8%20%20%20c0%2C2.1%2C1.7%2C3.7%2C3.8%2C3.7l0%2C0c1.1%2C0.1%2C2.2-0.3%2C3-1l-0.8-1.2c-0.6%2C0.5-1.3%2C0.7-2.1%2C0.8c-1.1%2C0.1-2-0.7-2.2-1.8h5.4c0-0.2%2C0-0.4%2C0-0.6%20%20%20C49.2%2C65.6%2C47.8%2C64.1%2C45.7%2C64.1L45.7%2C64.1z%20M45.7%2C65.5c1%2C0%2C1.8%2C0.8%2C1.8%2C1.7c0%2C0%2C0%2C0%2C0%2C0h-3.8C43.8%2C66.2%2C44.7%2C65.5%2C45.7%2C65.5%20%20%20L45.7%2C65.5z%20M85%2C67.9v-6.5h-1.5v3.8c-0.5-0.7-1.4-1.1-2.3-1.1c-2.1%2C0-3.8%2C1.7-3.8%2C3.8c0%2C2.1%2C1.7%2C3.8%2C3.8%2C3.8%20%20%20c0.9%2C0%2C1.7-0.4%2C2.3-1.1v0.9H85V67.9z%20M87.6%2C70.4c0.1%2C0%2C0.2%2C0%2C0.3%2C0.1c0.1%2C0%2C0.2%2C0.1%2C0.2%2C0.2c0.1%2C0.1%2C0.1%2C0.1%2C0.2%2C0.2%20%20%20c0.1%2C0.2%2C0.1%2C0.4%2C0%2C0.6c0%2C0.1-0.1%2C0.2-0.2%2C0.2c-0.1%2C0.1-0.1%2C0.1-0.2%2C0.2c-0.1%2C0-0.2%2C0.1-0.3%2C0.1c-0.3%2C0-0.6-0.2-0.7-0.4%20%20%20c-0.1-0.2-0.1-0.4%2C0-0.6c0-0.1%2C0.1-0.2%2C0.2-0.2c0.1-0.1%2C0.1-0.1%2C0.2-0.2C87.4%2C70.4%2C87.5%2C70.4%2C87.6%2C70.4L87.6%2C70.4z%20M87.6%2C71.7%20%20%20c0.1%2C0%2C0.1%2C0%2C0.2%2C0c0.1%2C0%2C0.1-0.1%2C0.2-0.1c0.2-0.2%2C0.2-0.5%2C0-0.8c0-0.1-0.1-0.1-0.2-0.1c-0.1%2C0-0.1%2C0-0.2%2C0c-0.1%2C0-0.1%2C0-0.2%2C0%20%20%20c-0.1%2C0-0.1%2C0.1-0.2%2C0.1c-0.2%2C0.2-0.2%2C0.5%2C0%2C0.8c0.1%2C0.1%2C0.1%2C0.1%2C0.2%2C0.1C87.5%2C71.7%2C87.6%2C71.7%2C87.6%2C71.7L87.6%2C71.7z%20M87.7%2C70.8%20%20%20c0.1%2C0%2C0.1%2C0%2C0.2%2C0.1c0%2C0%2C0.1%2C0.1%2C0.1%2C0.2c0%2C0.1%2C0%2C0.1-0.1%2C0.1c0%2C0-0.1%2C0.1-0.2%2C0.1l0.2%2C0.2h-0.2l-0.2-0.2h-0.1v0.2h-0.1v-0.7%20%20%20L87.7%2C70.8z%20M87.5%2C70.9v0.2h0.2c0%2C0%2C0.1%2C0%2C0.1%2C0c0%2C0%2C0%2C0%2C0-0.1c0%2C0%2C0%2C0%2C0-0.1c0%2C0-0.1%2C0-0.1%2C0L87.5%2C70.9z%20M79.2%2C67.9%20%20%20c0.1-1.2%2C1.1-2.1%2C2.3-2s2.1%2C1.1%2C2%2C2.3c-0.1%2C1.1-1%2C2-2.2%2C2.1c-1.2%2C0-2.2-0.9-2.2-2.1C79.2%2C68%2C79.2%2C67.9%2C79.2%2C67.9z%20M26.3%2C67.9v-3.6%20%20%20h-1.6v0.9c-0.5-0.7-1.4-1.1-2.3-1.1c-2.1%2C0-3.8%2C1.7-3.8%2C3.8c0%2C2.1%2C1.7%2C3.8%2C3.8%2C3.8c0.9%2C0%2C1.7-0.4%2C2.3-1.1v0.9h1.6L26.3%2C67.9z%20%20%20%20M20.4%2C67.9c0.1-1.2%2C1.1-2.1%2C2.3-2c1.2%2C0.1%2C2.1%2C1.1%2C2%2C2.3c-0.1%2C1.1-1%2C2-2.2%2C2.1c-1.2%2C0-2.2-0.9-2.2-2.1%20%20%20C20.4%2C68%2C20.4%2C67.9%2C20.4%2C67.9L20.4%2C67.9z%22%2F%3E%20%20%3Cg%20id%3D%22_Group_%22%3E%20%20%20%3Crect%20x%3D%2233.5%22%20y%3D%229.3%22%20class%3D%22st2%22%20width%3D%2223.8%22%20height%3D%2242.7%22%2F%3E%20%20%20%3Cpath%20id%3D%22_Path_%22%20class%3D%22st3%22%20d%3D%22M35%2C30.7c0-8.3%2C3.8-16.2%2C10.4-21.3C33.6%2C0.1%2C16.5%2C2.1%2C7.2%2C13.9S0%2C42.8%2C11.8%2C52%20%20%20%20c9.8%2C7.7%2C23.7%2C7.7%2C33.5%2C0C38.8%2C46.9%2C35%2C39%2C35%2C30.7z%22%2F%3E%20%20%20%3Cpath%20class%3D%22st4%22%20d%3D%22M89.3%2C30.7c0%2C15-12.2%2C27.1-27.1%2C27.1c-6.1%2C0-12-2-16.8-5.8c11.8-9.3%2C13.8-26.3%2C4.6-38.1%20%20%20%20c-1.3-1.7-2.9-3.2-4.6-4.6c11.8-9.3%2C28.9-7.2%2C38.1%2C4.6C87.2%2C18.7%2C89.3%2C24.6%2C89.3%2C30.7L89.3%2C30.7z%22%2F%3E%20%20%20%3Cpath%20class%3D%22st4%22%20d%3D%22M86.7%2C47.5v-0.9H87v-0.2h-0.9v0.2h0.4v0.9L86.7%2C47.5z%20M88.4%2C47.5v-1.1h-0.3l-0.3%2C0.8l-0.3-0.8h-0.2v1.1h0.2%20%20%20%20v-0.8l0.3%2C0.7H88l0.3-0.7v0.8L88.4%2C47.5z%22%2F%3E%20%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var css$C = ".PaymentMethodCardContentRead-module_content__2127O {\n  display: block;\n  color: #163457;\n  text-align: center;\n}\n\n.PaymentMethodCardContentRead-module_brandIcon__3r5qJ {\n  width: 75px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin-bottom: 10px;\n}\n";
var s$C = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","content":"PaymentMethodCardContentRead-module_content__2127O","brandIcon":"PaymentMethodCardContentRead-module_brandIcon__3r5qJ"};
styleInject(css$C);

var creditCardBrandIcons = {
  visa: iconVisa,
  american: iconAmerican,
  cb: iconCb,
  mastercard: iconMastercard
};

var PaymentMethodCardContentRead = function PaymentMethodCardContentRead(_ref) {
  var paymentMethod = _ref.paymentMethod,
      texts = _ref.texts;
  return React__default.createElement(React.Fragment, null, paymentMethod.type === 'card' && React__default.createElement("img", {
    className: s$C.brandIcon,
    src: creditCardBrandIcons[paymentMethod.brand],
    alt: paymentMethod.brand
  }), React__default.createElement("span", {
    className: s$C.content
  }, "\xB7\xB7\xB7\xB7\xA0\xB7\xB7\xB7\xB7\xA0\xB7\xB7\xB7\xB7\xA0", paymentMethod.last4digits), React__default.createElement("span", {
    className: s$C.content
  }, texts.expireAt, "\xA0:\xA0", paymentMethod.expireAt));
};

PaymentMethodCardContentRead.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  texts: TextsType$5.isRequired
};

var css$D = ".PaymentmethodCardContentDelete-module_container__2q5zt {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.PaymentmethodCardContentDelete-module_sentence__4dwCI {\n  margin: 10px 0;\n}\n\n.PaymentmethodCardContentDelete-module_buttons__1lGiu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 100%;\n}\n";
var s$D = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"PaymentmethodCardContentDelete-module_container__2q5zt","sentence":"PaymentmethodCardContentDelete-module_sentence__4dwCI","buttons":"PaymentmethodCardContentDelete-module_buttons__1lGiu"};
styleInject(css$D);

var PaymentmethodCardContentDelete = function PaymentmethodCardContentDelete(_ref) {
  var texts = _ref.texts,
      onConfirmDeletion = _ref.onConfirmDeletion,
      onCancelDeletion = _ref.onCancelDeletion;
  return React__default.createElement("div", {
    className: s$D.container
  }, React__default.createElement("strong", null, texts.confirmDeletionTitle), React__default.createElement("p", {
    className: s$D.sentence
  }, texts.confirmDeletionSentence), React__default.createElement("div", {
    className: s$D.buttons
  }, React__default.createElement(LinkUnderlined, {
    onClick: onCancelDeletion
  }, React__default.createElement("strong", null, texts.cancel)), React__default.createElement(LinkUnderlined, {
    onClick: onConfirmDeletion
  }, React__default.createElement("strong", null, texts.confirm))));
};

PaymentmethodCardContentDelete.propTypes = {
  texts: TextsType$5.isRequired,
  onConfirmDeletion: PropTypes$1.func.isRequired,
  onCancelDeletion: PropTypes$1.func.isRequired
};

var PaymentMethodCardContent = function PaymentMethodCardContent(_ref) {
  var pendingDeletion = _ref.pendingDeletion,
      contentProps = _objectWithoutProperties(_ref, ["pendingDeletion"]);

  return pendingDeletion ? React__default.createElement(PaymentmethodCardContentDelete, contentProps) : React__default.createElement(PaymentMethodCardContentRead, contentProps);
};

PaymentMethodCardContent.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  texts: TextsType$5.isRequired,
  pendingDeletion: PropTypes$1.bool.isRequired,
  onConfirmDeletion: PropTypes$1.func.isRequired,
  onCancelDeletion: PropTypes$1.func.isRequired
};

var css$E = ".PaymentMethodCardFooter-module_container__iE-kv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.PaymentMethodCardFooter-module_checkIcon__xbtB2 {\n  color: #fefefe;\n  font-size: 22px;\n}\n";
var s$E = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"PaymentMethodCardFooter-module_container__iE-kv","checkIcon":"PaymentMethodCardFooter-module_checkIcon__xbtB2"};
styleInject(css$E);

var PaymentMethodCardFooter = function PaymentMethodCardFooter(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      texts = _ref.texts,
      onClick = _ref.onClick,
      testid = _ref.testid;
  return React__default.createElement("div", {
    className: [s$E.container, className].join(' ')
  }, selected ? React__default.createElement("i", {
    className: "icon-checkmark ".concat(s$E.checkIcon)
  }) : React__default.createElement(LinkUnderlined, {
    onClick: onClick,
    testid: "".concat(testid, "Button")
  }, React__default.createElement("strong", null, texts.select)));
};

PaymentMethodCardFooter.defaultProps = {
  className: undefined,
  testid: ''
};
PaymentMethodCardFooter.propTypes = {
  className: PropTypes$1.string,
  selected: PropTypes$1.bool.isRequired,
  texts: TextsType$5.isRequired,
  onClick: PropTypes$1.func.isRequired,
  testid: PropTypes$1.string
};

var css$F = ".PaymentMethodCardHeader-module_container__1NB8- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 22px;\n}\n\n.PaymentMethodCardHeader-module_icon__Rh3J2 {\n  -webkit-text-fill-color: #32a0c5;\n  fill: #32a0c5;\n}\n\n.PaymentMethodCardHeader-module_button__L01aa {\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n";
var s$F = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"PaymentMethodCardHeader-module_container__1NB8-","icon":"PaymentMethodCardHeader-module_icon__Rh3J2","button":"PaymentMethodCardHeader-module_button__L01aa"};
styleInject(css$F);

var PaymentMethodCardHeader = function PaymentMethodCardHeader(_ref) {
  var onDelete = _ref.onDelete,
      texts = _ref.texts,
      pendingDeletion = _ref.pendingDeletion,
      className = _ref.className;
  return pendingDeletion ? null : React__default.createElement("div", {
    className: [s$F.container, className].join(' ')
  }, React__default.createElement("button", {
    className: s$F.button,
    title: texts.remove,
    onClick: onDelete
  }, React__default.createElement("i", {
    className: "icon-bin ".concat(s$F.icon)
  })));
};

PaymentMethodCardHeader.defaultProps = {
  className: undefined
};
PaymentMethodCardHeader.propTypes = {
  onDelete: PropTypes$1.func.isRequired,
  texts: TextsType$5.isRequired,
  pendingDeletion: PropTypes$1.bool.isRequired,
  className: PropTypes$1.string
};

var PaymentMethodCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaymentMethodCard, _React$Component);

  function PaymentMethodCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentMethodCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentMethodCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderFooter", function (footerProps) {
      var _this$props = _this.props,
          texts = _this$props.texts,
          onClick = _this$props.onClick,
          selected = _this$props.selected,
          FooterComponent = _this$props.FooterComponent,
          testid = _this$props.testid;

      if (typeof FooterComponent !== 'undefined' && !FooterComponent) {
        return null;
      }

      if (typeof FooterComponent === 'function') {
        return FooterComponent(footerProps);
      }

      return React__default.createElement(PaymentMethodCardFooter, _extends({}, footerProps, {
        texts: texts,
        onClick: onClick,
        selected: selected,
        testid: testid
      }));
    });

    return _this;
  }

  _createClass(PaymentMethodCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          selected = _this$props2.selected,
          children = _this$props2.children,
          paymentMethod = _this$props2.paymentMethod,
          texts = _this$props2.texts,
          pendingDeletion = _this$props2.pendingDeletion,
          onConfirmDeletion = _this$props2.onConfirmDeletion,
          onCancelDeletion = _this$props2.onCancelDeletion,
          deletable = _this$props2.deletable,
          onDelete = _this$props2.onDelete,
          contentClassName = _this$props2.contentClassName,
          className = _this$props2.className,
          cardProps = _objectWithoutProperties(_this$props2, ["selected", "children", "paymentMethod", "texts", "pendingDeletion", "onConfirmDeletion", "onCancelDeletion", "deletable", "onDelete", "contentClassName", "className"]);

      var cardContentProps = {
        paymentMethod: paymentMethod,
        texts: texts,
        pendingDeletion: pendingDeletion,
        onConfirmDeletion: onConfirmDeletion,
        onCancelDeletion: onCancelDeletion
      };
      var cardHeaderProps = {
        onDelete: onDelete,
        texts: texts,
        pendingDeletion: pendingDeletion
      };
      return React__default.createElement(Card, _extends({}, cardProps, {
        className: [s$B.card, className].join(' '),
        FooterComponent: this.renderFooter,
        isSelected: selected,
        contentClassName: [s$B.cardContent, pendingDeletion ? s$B.pendingDeletion : undefined, contentClassName].join(' ')
      }), deletable && React__default.createElement(PaymentMethodCardHeader, _extends({}, cardHeaderProps, {
        className: s$B.header
      })), children === null ? React__default.createElement(PaymentMethodCardContent, cardContentProps) : children);
    }
  }]);

  return PaymentMethodCard;
}(React__default.Component);

PaymentMethodCard.defaultProps = {
  selected: false,
  deletable: true,
  pendingDeletion: false,
  texts: DefaultTexts$5,
  onClick: function onClick() {},
  onDelete: function onDelete() {},
  onCancelDeletion: function onCancelDeletion() {},
  onConfirmDeletion: function onConfirmDeletion() {},
  children: null,
  idPrefix: 'paymentMethodCard',
  className: undefined,
  FooterComponent: undefined,
  contentClassName: undefined,
  testid: ''
};
PaymentMethodCard.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  deletable: PropTypes$1.bool,
  selected: PropTypes$1.bool,
  pendingDeletion: PropTypes$1.bool,
  texts: TextsType$5,
  onClick: PropTypes$1.func,
  onDelete: PropTypes$1.func,
  onCancelDeletion: PropTypes$1.func,
  onConfirmDeletion: PropTypes$1.func,
  idPrefix: PropTypes$1.string,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  FooterComponent: PropTypes$1.func,
  contentClassName: PropTypes$1.string,
  testid: PropTypes$1.string
};

var css$G = ".PhoneInput-module_phoneInput__28kFN {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.PhoneInput-module_phoneInputCountryCode__1qz3Z {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 50px;\n          flex: 1 0 50px;\n}\n\n.PhoneInput-module_phoneInput__28kFN input {\n  margin-left: 10px;\n}\n\n.PhoneInput-module_selectImage__2afak {\n  margin-right: 10px;\n  max-height: 24px;\n  max-width: 24px;\n}\n\n";
var s$G = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","phoneInput":"PhoneInput-module_phoneInput__28kFN","phoneInputCountryCode":"PhoneInput-module_phoneInputCountryCode__1qz3Z","selectImage":"PhoneInput-module_selectImage__2afak"};
styleInject(css$G);

var PhoneInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PhoneInput, _React$Component);

  function PhoneInput(props) {
    var _this;

    _classCallCheck(this, PhoneInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderSelectOption", function (option) {
      return React__default.createElement("option", {
        key: option.value,
        value: option.value
      }, option.label);
    });

    _defineProperty(_assertThisInitialized(_this), "renderPhoneInputs", function () {
      var _this$props = _this.props,
          error = _this$props.error,
          mandatory = _this$props.mandatory,
          left = _this$props.left,
          countries = _this$props.countries,
          withFlag = _this$props.withFlag,
          inputClassName = _this$props.inputClassName,
          phoneInputProps = _objectWithoutProperties(_this$props, ["error", "mandatory", "left", "countries", "withFlag", "inputClassName"]);

      var _this$state = _this.state,
          country = _this$state.country,
          phone = _this$state.phone;
      return React__default.createElement("div", {
        className: s$G.phoneInput
      }, React__default.createElement(Select, {
        options: countries,
        value: country.value,
        renderOption: _this.renderSelectOption,
        onChange: _this.onCountryCodeChange,
        className: s$G.phoneInputCountryCode
      }, withFlag && React__default.createElement("img", {
        src: country.image,
        className: s$G.selectImage,
        alt: country.label
      }), React__default.createElement("span", null, country.label)), React__default.createElement(Input, _extends({}, phoneInputProps, {
        className: inputClassName,
        hasError: !!error && error.length > 0,
        placeholder: "06 07 08 09 00",
        type: "text",
        onChange: _this.onPhoneNumberChange,
        value: phone
      })));
    });

    var value = props.value;
    _this.state = _this.getCountryAndPhoneFromValue(value);
    _this.onCountryCodeChange = _this.onCountryCodeChange.bind(_assertThisInitialized(_this));
    _this.onPhoneNumberChange = _this.onPhoneNumberChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PhoneInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var _this$state2 = this.state,
          phone = _this$state2.phone,
          country = _this$state2.country;
      var nextValue = newProps.value;

      if (nextValue !== "".concat(country.label).concat(phone)) {
        this.setState(this.getCountryAndPhoneFromValue(nextValue));
      }
    }
  }, {
    key: "onCountryCodeChange",
    value: function onCountryCodeChange(event) {
      var countryCode = event.currentTarget.value;
      var _this$props2 = this.props,
          countries = _this$props2.countries,
          onChange = _this$props2.onChange;
      var phone = this.state.phone;
      var country = countries.find(function (option) {
        return option.value === countryCode;
      });
      onChange(_objectSpread({}, event, {
        currentTarget: {
          value: "".concat(country.label).concat(phone)
        }
      }));
      this.setState({
        country: country
      });
    }
  }, {
    key: "onPhoneNumberChange",
    value: function onPhoneNumberChange(event) {
      var onChange = this.props.onChange;
      var country = this.state.country;
      var value = event.currentTarget.value;
      onChange(_objectSpread({}, event, {
        currentTarget: {
          value: "".concat(country.label).concat(value)
        }
      }));
      this.setState({
        phone: value
      });
    }
  }, {
    key: "getCountryAndPhoneFromValue",
    value: function getCountryAndPhoneFromValue(value) {
      var countries = this.props.countries;
      var country = countries.find(function (c) {
        return value.startsWith(c.label);
      });
      var phone = '';
      var countryCode; // eslint-disable-line no-unused-vars

      if (country) {
        var _value$split = value.split(country.label);

        var _value$split2 = _slicedToArray(_value$split, 2);

        countryCode = _value$split2[0];
        phone = _value$split2[1];
        return {
          country: country,
          phone: phone
        };
      }

      return {
        country: countries[0],
        phone: phone
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          label = _this$props3.label,
          error = _this$props3.error,
          mandatory = _this$props3.mandatory,
          left = _this$props3.left,
          className = _this$props3.className;
      return React__default.createElement(InputLabel, {
        error: error,
        label: label,
        left: left,
        mandatory: mandatory,
        InputComponent: this.renderPhoneInputs,
        className: className
      });
    }
  }]);

  return PhoneInput;
}(React__default.Component);

PhoneInput.defaultProps = {
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  value: '',
  error: '',
  label: '',
  mandatory: false,
  left: false,
  className: '',
  countries: DefaultCountries,
  withFlag: true,
  inputClassName: ''
};
PhoneInput.propTypes = {
  onChange: PropTypes$1.func,
  onFocus: PropTypes$1.func,
  onBlur: PropTypes$1.func,
  error: PropTypes$1.string,
  value: PropTypes$1.string,
  label: PropTypes$1.string,
  mandatory: PropTypes$1.bool,
  left: PropTypes$1.bool,
  className: PropTypes$1.string,
  countries: PropTypes$1.shape(CountryPropType),
  withFlag: PropTypes$1.bool,
  inputClassName: PropTypes$1.string
};

var css$H = ".PricingSummaryOption-module_option__1G-X7 {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #163457;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.PricingSummaryOption-module_label__goVjq {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.PricingSummaryOption-module_label__goVjq i {\n  font-size: 0.9em;\n  margin-left: 10px;\n}\n\n.PricingSummaryOption-module_label__goVjq i:before {\n  color: #163457;\n}\n\n.PricingSummaryOption-module_price__2ZK97 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-weight: 700;\n}\n\n.PricingSummaryOption-module_currency-after__3ttKX {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.PricingSummaryOption-module_currency-before__1lVgh {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n";
var s$H = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","option":"PricingSummaryOption-module_option__1G-X7","label":"PricingSummaryOption-module_label__goVjq","price":"PricingSummaryOption-module_price__2ZK97","currency-after":"PricingSummaryOption-module_currency-after__3ttKX","currency-before":"PricingSummaryOption-module_currency-before__1lVgh"};
styleInject(css$H);

var PricingSummaryOption = function PricingSummaryOption(_ref) {
  var currency = _ref.currency,
      currencyPosition = _ref.currencyPosition,
      option = _ref.option;
  return React__default.createElement("div", {
    className: s$H.option
  }, React__default.createElement("span", {
    className: s$H.label
  }, option.label, React__default.createElement("i", {
    className: "icon icon-ec-info"
  })), React__default.createElement("span", {
    className: "".concat(s$H.price, " ").concat(s$H["currency-".concat(currencyPosition)])
  }, React__default.createElement("span", null, option.price), React__default.createElement("span", null, currency)));
};

PricingSummaryOption.defaultProps = {
  currencyPosition: 'after'
};
PricingSummaryOption.propTypes = {
  currency: PropTypes$1.string.isRequired,
  currencyPosition: PropTypes$1.oneOf(['before', 'after']),
  option: PricingSummaryOptionType.isRequired
};

var css$I = ".PricingSummary-module_pricingSummary__2eJwY {\n  width: 250px;\n}\n\n.PricingSummary-module_total__2vek1 {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 20px;\n}\n\n.PricingSummary-module_totalLabel__2o3Rh {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.PricingSummary-module_totalPrice__1_-UG {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 40px;\n  line-height: 1;\n}\n\n.PricingSummary-module_currency-after__27MYY {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.PricingSummary-module_currency-before__345FN {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.PricingSummary-module_add__2494l {\n  border: 0;\n  color: rgb(206, 206, 206);\n  padding: 0;\n  margin: 0;\n  background: transparent;\n}\n\n.PricingSummary-module_add__2494l span {\n  margin-left: 5px;\n  text-decoration: underline;\n}\n";
var s$I = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","pricingSummary":"PricingSummary-module_pricingSummary__2eJwY","total":"PricingSummary-module_total__2vek1","totalLabel":"PricingSummary-module_totalLabel__2o3Rh","totalPrice":"PricingSummary-module_totalPrice__1_-UG","currency-after":"PricingSummary-module_currency-after__27MYY","currency-before":"PricingSummary-module_currency-before__345FN","add":"PricingSummary-module_add__2494l"};
styleInject(css$I);

var PricingSummary = function PricingSummary(_ref) {
  var currency = _ref.currency,
      currencyPosition = _ref.currencyPosition,
      options = _ref.options,
      texts = _ref.texts,
      onAddClick = _ref.onAddClick,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$I.pricingSummary, " ").concat(className)
  }, React__default.createElement("div", {
    className: s$I.options
  }, options.map(function (option) {
    return React__default.createElement(PricingSummaryOption, {
      currency: currency,
      currencyPosition: currencyPosition,
      option: option,
      key: option.label
    });
  })), React__default.createElement("button", {
    onClick: onAddClick,
    className: s$I.add
  }, "+", React__default.createElement("span", null, texts.addOption)), React__default.createElement("div", {
    className: s$I.total
  }, React__default.createElement("span", {
    className: s$I.totalLabel
  }, texts.total), React__default.createElement("span", {
    className: "".concat(s$I.totalPrice, " ").concat(s$I["currency-".concat(currencyPosition)])
  }, React__default.createElement("span", null, options.reduce(function (acc, val) {
    return acc + val.price;
  }, 0)), React__default.createElement("span", null, currency))));
};

PricingSummary.defaultProps = {
  currencyPosition: 'after',
  onAddClick: function onAddClick() {},
  className: '',
  texts: defaultTexts$1
};
PricingSummary.propTypes = {
  currency: PropTypes$1.string.isRequired,
  currencyPosition: PropTypes$1.oneOf(['before', 'after']),
  options: PropTypes$1.arrayOf(PricingSummaryOptionType).isRequired,
  texts: PricingSummaryTextsType,
  onAddClick: PropTypes$1.func,
  className: PropTypes$1.string
};

var ReferralCardTextsType = PropTypes$1.shape({
  title: PropTypes$1.string,
  description: PropTypes$1.string
});
var defaultTexts$3 = {
  title: 'Aidez Ector à conquérir le monde',
  description: 'Devenez parrain Ector et faites profiter à votre filleul de 10€ offert lors de sa première réservation'
};

var css$J = ".ReferralCard-module_referralCard__2OSJ1 {\n  background-color: #eceff6;\n  border-radius: 8px;\n  color: #163457;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 320px;\n  padding: 20px;\n}\n\n.ReferralCard-module_referralCard__2OSJ1 i {\n  margin-right: 20px;\n}\n\n.ReferralCard-module_referralCard__2OSJ1 p {\n  margin: 0;\n}\n";
var s$J = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","referralCard":"ReferralCard-module_referralCard__2OSJ1"};
styleInject(css$J);

var ReferralCard = function ReferralCard(_ref) {
  var texts = _ref.texts,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$J.referralCard, " ").concat(className)
  }, React__default.createElement("i", {
    className: "icon icon-ec-referral"
  }), React__default.createElement("div", null, React__default.createElement("strong", null, texts.title), React__default.createElement("p", null, texts.description)));
};

ReferralCard.defaultProps = {
  className: '',
  texts: defaultTexts$3
};
ReferralCard.propTypes = {
  texts: ReferralCardTextsType,
  className: PropTypes$1.string
};

var RideSummaryTextType = PropTypes$1.shape({
  title: PropTypes$1.string,
  date: PropTypes$1.string,
  spot: PropTypes$1.string,
  travelingNumber: PropTypes$1.string
});
var defaultTexts$4 = {
  title: 'Aller',
  date: 'Mer. 26 septembre 2018 à 12:00',
  spot: 'Roissy CDG T1',
  travelingNumber: 'N° Vol/Train: Non Renseigné'
};

var css$K = ".RideSummary-module_rideSummary__2oiET {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.RideSummary-module_rideSummaryTitle__1uusE {\n  color: #32a0c5;\n  font-size: 22px;\n  margin: 0;\n}\n\n.RideSummary-module_rideSummaryText__1cZNU {\n  margin: 0;\n  color: #163457;\n}\n";
var s$K = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","rideSummary":"RideSummary-module_rideSummary__2oiET","rideSummaryTitle":"RideSummary-module_rideSummaryTitle__1uusE","rideSummaryText":"RideSummary-module_rideSummaryText__1cZNU"};
styleInject(css$K);

var RideSummary = function RideSummary(_ref) {
  var texts = _ref.texts,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$K.rideSummary, " ").concat(className)
  }, React__default.createElement("p", {
    className: s$K.rideSummaryTitle
  }, texts.title), React__default.createElement("p", {
    className: s$K.rideSummaryText
  }, texts.date), React__default.createElement("p", {
    className: s$K.rideSummaryText
  }, texts.spot), React__default.createElement("p", {
    className: s$K.rideSummaryText
  }, texts.travelingNumber));
};

RideSummary.defaultProps = {
  className: '',
  texts: defaultTexts$4
};
RideSummary.propTypes = {
  texts: RideSummaryTextType,
  className: PropTypes$1.string
};

var SelectValueType = PropTypes$1.shape({
  label: PropTypes$1.string,
  value: PropTypes$1.string,
  image: PropTypes$1.string
});

var css$L = ".Select-module_select__3oApo {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 3px;\n  border: 2px solid #d5d6d7;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #163457;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 40px;\n  height: 40px;\n  height: 2.5rem;\n  margin-top: 4px;\n  margin-top: 4px;\n  margin-top: 0.25rem;\n  padding: 8px;\n  padding: 8px;\n  padding: 0.5rem;\n  position: relative;\n}\n\n.Select-module_select__3oApo:after {\n  content: '\\E954';\n  font-family: 'icomoon';\n  font-size: 80%;\n  margin-right: 10px;\n  position: absolute;\n  right: 0;\n}\n\n.Select-module_select__3oApo select {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.Select-module_select__3oApo select:disabled {\n  cursor: not-allowed;\n}\n\n.Select-module_disabled__1fHPm {\n  background-color: #eceff6;\n}\n";
var s$L = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","select":"Select-module_select__3oApo","disabled":"Select-module_disabled__1fHPm"};
styleInject(css$L);

var renderSelectOption = function renderSelectOption(option) {
  return React__default.createElement("option", {
    value: option,
    key: option
  }, option);
};

var Select = function Select(props) {
  var value = props.value,
      options = props.options,
      children = props.children,
      className = props.className,
      renderOption = props.renderOption,
      selectProps = _objectWithoutProperties(props, ["value", "options", "children", "className", "renderOption"]);

  var optionRenderer = renderOption || renderSelectOption;
  return React__default.createElement("div", {
    className: [s$L.select, selectProps.disabled ? s$L.disabled : undefined, className].join(' ')
  }, React__default.createElement("select", _extends({
    value: value
  }, selectProps), options.map(optionRenderer)), children !== null ? children : React__default.createElement("span", {
    className: s$L.label
  }, value));
};

Select.defaultProps = {
  children: null,
  className: '',
  renderOption: null,
  disabled: false
};
Select.propTypes = {
  options: PropTypes$1.arrayOf(SelectValueType).isRequired,
  value: PropTypes$1.string.isRequired,
  children: PropTypes$1.node,
  className: PropTypes$1.string,
  renderOption: PropTypes$1.func,
  disabled: PropTypes$1.bool
};

var css$M = ".ServiceCard-module_card__2WAwR {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #eceff6;\n    border-radius: 8px;\n    padding: 5px;\n    margin-top: 25px;\n    position: relative;\n    width: 250px;\n    height: 260px;\n}\n\n.ServiceCard-module_optionCardContainerSelected__1EDYO {\n    background-color: #ffcd02;\n}\n\n.ServiceCard-module_labelContainer__14NKR {\n    position: absolute;\n    top: -10px;\n    right: 8%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n@media (max-width: 1232px) {\n    .ServiceCard-module_card__2WAwR {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        height: auto;\n        margin-right: 0;\n        width: 100%;\n    }\n}\n";
var s$M = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card":"ServiceCard-module_card__2WAwR","optionCardContainerSelected":"ServiceCard-module_optionCardContainerSelected__1EDYO","labelContainer":"ServiceCard-module_labelContainer__14NKR"};
styleInject(css$M);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var wordwrap_1 = createCommonjsModule(function (module) {
var wordwrap = module.exports = function (start, stop, params) {
    if (typeof start === 'object') {
        params = start;
        start = params.start;
        stop = params.stop;
    }
    
    if (typeof stop === 'object') {
        params = stop;
        start = start || params.start;
        stop = undefined;
    }
    
    if (!stop) {
        stop = start;
        start = 0;
    }
    
    if (!params) params = {};
    var mode = params.mode || 'soft';
    var re = mode === 'hard' ? /\b/ : /(\S+\s+)/;
    
    return function (text) {
        var chunks = text.toString()
            .split(re)
            .reduce(function (acc, x) {
                if (mode === 'hard') {
                    for (var i = 0; i < x.length; i += stop - start) {
                        acc.push(x.slice(i, i + stop - start));
                    }
                }
                else acc.push(x);
                return acc;
            }, [])
        ;
        
        return chunks.reduce(function (lines, rawChunk) {
            if (rawChunk === '') return lines;
            
            var chunk = rawChunk.replace(/\t/g, '    ');
            
            var i = lines.length - 1;
            if (lines[i].length + chunk.length > stop) {
                lines[i] = lines[i].replace(/\s+$/, '');
                
                chunk.split(/\n/).forEach(function (c) {
                    lines.push(
                        new Array(start + 1).join(' ')
                        + c.replace(/^\s+/, '')
                    );
                });
            }
            else if (chunk.match(/\n/)) {
                var xs = chunk.split(/\n/);
                lines[i] += xs.shift();
                xs.forEach(function (c) {
                    lines.push(
                        new Array(start + 1).join(' ')
                        + c.replace(/^\s+/, '')
                    );
                });
            }
            else {
                lines[i] += chunk;
            }
            
            return lines;
        }, [ new Array(start + 1).join(' ') ]).join('\n');
    };
};

wordwrap.soft = wordwrap;

wordwrap.hard = function (start, stop) {
    return wordwrap(start, stop, { mode : 'hard' });
};
});

var css$N = ".ServiceCardBody-module_cardContent__1u4QW {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fefefe;\n  height: 197px;\n  padding: 10px;\n}\n\n.ServiceCardBody-module_title__18Brj {\n  color: #32a0c5;\n  font-weight: 300;\n  font-size: 22px;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  margin: 0 20px 0 0;\n}\n\n.ServiceCardBody-module_description__3F2b6 {\n  color: #163457;\n}\n\n.ServiceCardBody-module_icon__3pkKY{\n  height: 45px;\n  width: 45px;\n}\n\n.ServiceCardBody-module_knowMore__3FUFJ {\n    color: #9ca3ff;\n    cursor: pointer;\n    display: block;\n    padding: 0;\n    text-decoration: underline;\n}\n\n.ServiceCardBody-module_punctuationKnowMore__1aKtN:after {\n    content: '\\2026';\n}\n\n@media (max-width: 1232px) {\n    .ServiceCardBody-module_cardContent__1u4QW {\n        -webkit-box-flex: 7;\n            -ms-flex: 7;\n                flex: 7;\n        height: auto;\n        padding: 10px;\n    }\n\n    .ServiceCardBody-module_title__18Brj {\n        font-size: 20px;\n        margin-right: 0;\n    }\n\n    .ServiceCardBody-module_icon__3pkKY {\n        display: none;\n    }\n}\n";
var s$N = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","cardContent":"ServiceCardBody-module_cardContent__1u4QW","title":"ServiceCardBody-module_title__18Brj","description":"ServiceCardBody-module_description__3F2b6","icon":"ServiceCardBody-module_icon__3pkKY","knowMore":"ServiceCardBody-module_knowMore__3FUFJ","punctuationKnowMore":"ServiceCardBody-module_punctuationKnowMore__1aKtN"};
styleInject(css$N);

var ServiceCardBody = function ServiceCardBody(_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      contentClassName = _ref.contentClassName,
      openShowMore = _ref.openShowMore,
      knowMoreLabel = _ref.knowMoreLabel;
  var descriptionFormatted = description;
  var showKnowMoreLink = false;

  if (description.length > 70) {
    descriptionFormatted = wordwrap_1(65)(descriptionFormatted);
    descriptionFormatted = descriptionFormatted.substring(0, descriptionFormatted.indexOf('\n'));
    showKnowMoreLink = true;
  }

  return React__default.createElement("div", {
    className: "".concat(s$N.cardContent, " ").concat(contentClassName)
  }, image, React__default.createElement("h2", {
    className: s$N.title
  }, title), React__default.createElement("span", {
    className: "".concat(s$N.description, " ").concat(showKnowMoreLink ? s$N.punctuationKnowMore : '')
  }, descriptionFormatted), showKnowMoreLink && React__default.createElement("button", {
    className: s$N.knowMore,
    onClick: openShowMore,
    type: "button"
  }, React__default.createElement("span", null, knowMoreLabel)));
};

ServiceCardBody.defaultProps = {
  image: null,
  contentClassName: '',
  openShowMore: function openShowMore() {},
  knowMoreLabel: 'En savoir plus'
};
ServiceCardBody.propTypes = {
  image: PropTypes$1.node,
  title: PropTypes$1.string.isRequired,
  description: PropTypes$1.string.isRequired,
  contentClassName: PropTypes$1.string,
  openShowMore: PropTypes$1.func,
  knowMoreLabel: PropTypes$1.string
};

var css$O = ".ServiceCardFooter-module_footerContainer__3xZao {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 20px 10px;\n}\n\n.ServiceCardFooter-module_price__1o6fm {\n    color: #163457;\n    font-size: 35px;\n    font-weight: 500;\n}\n\n.ServiceCardFooter-module_deleteButton__W6dqf {\n    background: none;\n    border: 0;\n    color: #32a0c5;\n    padding: 0;\n    text-decoration: underline;\n    font-style: italic;\n    font-weight: 300;\n    text-align: end;\n}\n\n@media (max-width: 1232px) {\n    .ServiceCardFooter-module_footerContainer__3xZao {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-flex: 3;\n            -ms-flex: 3;\n                flex: 3;\n        height: auto;\n        height: initial;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        padding: 10px;\n    }\n\n    .ServiceCardFooter-module_price__1o6fm {\n        font-size: 22px;\n        line-height: 1;\n    }\n\n    .ServiceCardFooter-module_price__1o6fm small {\n        font-size: 70%;\n    }\n}\n";
var s$O = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","footerContainer":"ServiceCardFooter-module_footerContainer__3xZao","price":"ServiceCardFooter-module_price__1o6fm","deleteButton":"ServiceCardFooter-module_deleteButton__W6dqf"};
styleInject(css$O);

var formatPrice = function formatPrice(price) {
  var showDecimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var countDecimals;

  if (!showDecimals) {
    countDecimals = !Number.isInteger(Number(price)) ? 2 : 0;
  } else {
    countDecimals = showDecimals ? 2 : 0;
  }

  var displayPrice = price || 0;
  return parseFloat(displayPrice).toFixed(countDecimals);
};

var HtmlPrice = function HtmlPrice(_ref) {
  var price = _ref.price,
      currency = _ref.currency,
      showDecimals = _ref.showDecimals,
      className = _ref.className,
      separator = _ref.separator,
      PriceAppendComponent = _ref.PriceAppendComponent,
      appendix = _ref.appendix;
  var splitPrice = "".concat(formatPrice(price, showDecimals)).split('.');
  return splitPrice[1] ? React__default.createElement("span", {
    className: className
  }, "".concat(splitPrice[0]).concat(separator), React__default.createElement(PriceAppendComponent, {
    value: splitPrice[1],
    currency: currency,
    appendix: appendix
  })) : React__default.createElement("span", {
    className: className
  }, "".concat(splitPrice[0]), React__default.createElement(PriceAppendComponent, {
    value: "",
    currency: currency,
    appendix: appendix
  }));
};

var PriceAppendDefaultComponent = function PriceAppendDefaultComponent(_ref2) {
  var value = _ref2.value,
      currency = _ref2.currency;
  return React__default.createElement("small", null, "".concat(value).concat(currency));
};

PriceAppendDefaultComponent.propTypes = {
  value: PropTypes$1.string.isRequired,
  currency: PropTypes$1.string.isRequired
};
HtmlPrice.defaultProps = {
  currency: '€',
  className: undefined,
  showDecimals: false,
  separator: '.',
  appendix: '',
  PriceAppendComponent: PriceAppendDefaultComponent
};
HtmlPrice.propTypes = {
  price: PropTypes$1.string.isRequired,
  showDecimals: PropTypes$1.bool,
  currency: PropTypes$1.string,
  className: PropTypes$1.string,
  separator: PropTypes$1.string,
  appendix: PropTypes$1.string,
  PriceAppendComponent: PropTypes$1.func
};

var ServiceCardFooter = function ServiceCardFooter(_ref) {
  var price = _ref.price,
      actionFooter = _ref.actionFooter,
      buttonLabelFooter = _ref.buttonLabelFooter,
      isSubscribed = _ref.isSubscribed,
      testid = _ref.testid,
      showButton = _ref.showButton;
  return React__default.createElement("div", {
    className: s$O.footerContainer
  }, React__default.createElement(HtmlPrice, {
    price: price,
    className: s$O.price
  }), !isSubscribed && React__default.createElement(LinkUnderlined, {
    onClick: actionFooter,
    testid: testid
  }, buttonLabelFooter), isSubscribed && showButton && React__default.createElement("button", {
    testid: testid,
    className: s$O.deleteButton,
    onClick: actionFooter,
    type: "button"
  }, buttonLabelFooter));
};

ServiceCardFooter.defaultProps = {
  testid: '',
  showButton: true
};
ServiceCardFooter.propTypes = {
  price: PropTypes$1.number.isRequired,
  actionFooter: PropTypes$1.func.isRequired,
  buttonLabelFooter: PropTypes$1.string.isRequired,
  isSubscribed: PropTypes$1.bool.isRequired,
  testid: PropTypes$1.string,
  showButton: PropTypes$1.bool
};

var ServiceCard = function ServiceCard(_ref) {
  var className = _ref.className,
      contentClassName = _ref.contentClassName,
      image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      price = _ref.price,
      actionFooter = _ref.actionFooter,
      openShowMore = _ref.openShowMore,
      isSubscribed = _ref.isSubscribed,
      buttonLabelFooter = _ref.buttonLabelFooter,
      labelText = _ref.labelText,
      labelLogo = _ref.labelLogo,
      labelColor = _ref.labelColor,
      id = _ref.id,
      showButton = _ref.showButton,
      knowMoreLabel = _ref.knowMoreLabel;
  var cardClassName = "\n        ".concat(s$M.card, "\n        ").concat(className, "\n        ").concat(isSubscribed ? s$M.optionCardContainerSelected : '', "\n    ");
  return React__default.createElement("div", {
    className: cardClassName
  }, labelColor !== '' && labelLogo !== '' && labelText !== '' && React__default.createElement(Label, {
    logo: labelLogo,
    label: labelText,
    color: labelColor,
    className: s$M.labelContainer
  }), React__default.createElement(ServiceCardBody, {
    image: image,
    title: title,
    description: description,
    openShowMore: openShowMore,
    knowMoreLabel: knowMoreLabel
  }), React__default.createElement(ServiceCardFooter, {
    testid: "serviceCard".concat(id).concat(isSubscribed ? 'Selected' : ''),
    price: price,
    actionFooter: actionFooter,
    buttonLabelFooter: buttonLabelFooter,
    isSubscribed: isSubscribed,
    showButton: showButton
  }));
};

ServiceCard.defaultProps = {
  className: '',
  contentClassName: '',
  image: null,
  title: '',
  description: '',
  price: 0,
  openShowMore: function openShowMore() {},
  isSubscribed: false,
  labelText: '',
  labelLogo: '',
  labelColor: '',
  id: '',
  showButton: true,
  knowMoreLabel: 'En savoir plus'
};
ServiceCard.propTypes = {
  className: PropTypes$1.string,
  contentClassName: PropTypes$1.string,
  image: PropTypes$1.node,
  title: PropTypes$1.string,
  description: PropTypes$1.string,
  price: PropTypes$1.number,
  actionFooter: PropTypes$1.func.isRequired,
  openShowMore: PropTypes$1.func,
  isSubscribed: PropTypes$1.bool,
  buttonLabelFooter: PropTypes$1.string.isRequired,
  labelText: PropTypes$1.string,
  labelLogo: PropTypes$1.string,
  labelColor: PropTypes$1.string,
  id: PropTypes$1.string,
  showButton: PropTypes$1.bool,
  knowMoreLabel: PropTypes$1.string
};

var css$P = ".Subtitle-module_subtitle__3qud- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 30px;\n}\n\n.Subtitle-module_subtitle__3qud- h2 {\n  color: #163457;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1;\n  margin: 0 0 10px;\n}\n\n.Subtitle-module_subtitle__3qud- hr {\n  border: 0;\n  border-top: 2px dotted #9eb3c2;\n  margin: 0;\n  width: 50px;\n}\n";
var s$P = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","subtitle":"Subtitle-module_subtitle__3qud-"};
styleInject(css$P);

var Subtitle = function Subtitle(_ref) {
  var label = _ref.label,
      className = _ref.className;
  return React__default.createElement("div", {
    className: "".concat(s$P.subtitle, " ").concat(className)
  }, React__default.createElement("h2", null, label), React__default.createElement("hr", null));
};

Subtitle.defaultProps = {
  className: ''
};
Subtitle.propTypes = {
  label: PropTypes$1.string.isRequired,
  className: PropTypes$1.string
};

var css$Q = ".Title-module_title__gpPet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 30px;\n}\n\n.Title-module_title__gpPet .Title-module_element__1EYDR {\n  color: #163457;\n  font-size: 40px;\n  font-weight: 500;\n  line-height: 1;\n  margin: 0 0 10px;\n}\n\n.Title-module_newTitle__3v8No {\n  color: #32a0c5;\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n}\n\n.Title-module_title__gpPet .Title-module_horizontalRule__1wwO9 {\n  border: 0;\n  border-top: 2px solid #32a0c5;\n  margin: 0;\n  width: 50px;\n}\n\n@media (max-width: 480px) {\n  .Title-module_title__gpPet .Title-module_element__1EYDR, .Title-module_newTitle__3v8No {\n    font-size: 22px;\n  }\n}\n";
var s$Q = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","title":"Title-module_title__gpPet","element":"Title-module_element__1EYDR","newTitle":"Title-module_newTitle__3v8No","horizontalRule":"Title-module_horizontalRule__1wwO9"};
styleInject(css$Q);

var TitleVariants = {
  underlined: 'underlined',
  none: 'none'
};

var Title = function Title(_ref) {
  var label = _ref.label,
      className = _ref.className,
      htmlElement = _ref.htmlElement,
      testid = _ref.testid,
      variant = _ref.variant;

  if (variant === TitleVariants.underlined) {
    return React__default.createElement("div", {
      className: "".concat(s$Q.title, " ").concat(className),
      testid: testid
    }, React__default.createElement(htmlElement, {
      className: s$Q.element
    }, label), React__default.createElement("hr", {
      className: s$Q.horizontalRule
    }));
  }

  if (variant === TitleVariants.none) {
    return React__default.createElement(htmlElement, {
      className: [s$Q.newTitle, className].join(' ')
    }, label, testid);
  }

  return null;
};

Title.defaultProps = {
  className: '',
  htmlElement: 'h1',
  testid: '',
  variant: TitleVariants.underlined
};
Title.propTypes = {
  label: PropTypes$1.string.isRequired,
  className: PropTypes$1.string,
  htmlElement: PropTypes$1.string,
  testid: PropTypes$1.string,
  variant: PropTypes$1.oneOf(Object.keys(TitleVariants))
};

var css$R = "/**\n* This element has to be wrapped in a .steps div to increment the counter\n*/\n\n.TitleStep-module_steps__1Ryhp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  counter-reset: steps;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0:before,\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0 + .TitleStep-module_step_button__1xXOY:before,\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0 + .TitleStep-module_step_button__1xXOY + .TitleStep-module_step_button__1xXOY:before {\n  content: counter(steps);\n}\n\n.TitleStep-module_step_button__1xXOY {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #9eb3c2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  margin-right: 48px;\n  margin-right: 48px;\n  margin-right: 3rem;\n  position: relative;\n  background-color: transparent;\n  border: 0;\n  counter-increment: steps;\n  cursor: pointer;\n  font-weight: 300;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  opacity: 1\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0 {\n  color: #ffcd02;\n  cursor: default;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0:before {\n  background-color: #fefefe;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0:after {\n  border-right: 2px solid #fefefe;\n  content: '';\n  height: 35px;\n  left: 19px;\n  position: absolute;\n  top: 26px;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_done__1vIiB:before {\n  content: '\\2713';\n}\n\n.TitleStep-module_step_button__1xXOY:before {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #9eb3c2;\n  border-radius: 50%;\n  color: #163457;\n  content: '7';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 13px;\n  font-weight: bold;\n  height: 25px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 10px;\n  width: 25px;\n}\n\n.TitleStep-module_step_button__1xXOY:before, .TitleStep-module_step_button__1xXOY:after {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.TitleStep-module_step_button__1xXOY:hover {\n  color: #fefefe;\n}\n\n.TitleStep-module_step_button__1xXOY:hover:before, .TitleStep-module_step_button__1xXOY:hover:after {\n  background-color: #fefefe;\n}\n\n.TitleStep-module_step_button__1xXOY:hover:active {\n  -webkit-transition: all 0s ease-in-out;\n  transition: all 0s ease-in-out;\n  opacity: 0.6;\n}\n";
var s$R = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","steps":"TitleStep-module_steps__1Ryhp","step_button":"TitleStep-module_step_button__1xXOY","active":"TitleStep-module_active__3zKP0","done":"TitleStep-module_done__1vIiB"};
styleInject(css$R);

var TitleStep = function TitleStep(_ref) {
  var Active = _ref.Active,
      children = _ref.children,
      Done = _ref.Done,
      onClick = _ref.onClick,
      className = _ref.className;
  var classNameString = "\n        ".concat(s$R.step_button, "\n        ").concat(Done ? s$R.done : '', "\n        ").concat(Active ? s$R.active : '', "\n        ").concat(className, "\n    ");
  return React__default.createElement("button", {
    className: classNameString,
    onClick: onClick
  }, children);
};

TitleStep.defaultProps = {
  children: '',
  Done: false,
  className: ''
};
TitleStep.propTypes = {
  Active: PropTypes$1.bool.isRequired,
  children: PropTypes$1.node,
  Done: PropTypes$1.bool,
  onClick: PropTypes$1.func.isRequired,
  className: PropTypes$1.string
};

var css$S = ".Tooltip-module_tooltipContainer__15s8H {\n    font-size: 2em;\n    text-align: center;\n    position: relative\n}\n\n.Tooltip-module_tooltipContainer__15s8H:hover>.Tooltip-module_tooltipText__1buoM {\n    visibility: visible;\n}\n\n.Tooltip-module_tooltipContainer__15s8H > i {\n    font-size: 18px;\n}\n\n.Tooltip-module_tooltipContainer__15s8H > i:before {\n    color: #163457 !important;\n}\n\n.Tooltip-module_tooltipText__1buoM {\n    visibility: hidden;\n    display: block;\n    position: absolute;\n    z-index: 1;\n    padding: 10px;\n    border-radius: 8px;\n    text-align: left;\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, .25);\n            box-shadow: 0 0 10px rgba(0, 0, 0, .25);\n    background-color: #fefefe;\n    color: #163457;\n    font-size: 16px;\n}\n\n.Tooltip-module_tooltipText__1buoM:after {\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n    border-color: transparent;\n    border-width: 8px;\n}\n\n.Tooltip-module_right__1nw9g {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 30px;\n    top: 12px;\n}\n\n.Tooltip-module_tooltipText__1buoM.Tooltip-module_right__1nw9g:after {\n    right: 100%;\n    top: 50%;\n    margin-top: -8px;\n    border-right-color: #fefefe;\n}\n\n.Tooltip-module_left__3nypM {\n    -webkit-transform: translateY(-50%) translateX(-100%);\n            transform: translateY(-50%) translateX(-100%);\n    top: 12px;\n    left: -15px;\n}\n\n.Tooltip-module_tooltipText__1buoM.Tooltip-module_left__3nypM:after {\n    left: 100%;\n    top: 50%;\n    margin-top: -8px;\n    border-left-color: #fefefe;\n}\n\n.Tooltip-module_bottom__2SGDR {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 8px;\n    top: 35px;\n}\n\n.Tooltip-module_tooltipText__1buoM.Tooltip-module_bottom__2SGDR:after {\n    bottom: 100%;\n    left: 50%;\n    margin-left: -8px;\n    border-bottom-color: #fefefe;\n}\n\n.Tooltip-module_top__239MH {\n    -webkit-transform: translateX(-50%) translateY(-100%);\n            transform: translateX(-50%) translateY(-100%);\n    left: 8px;\n    top: -8px;\n}\n\n.Tooltip-module_tooltipText__1buoM.Tooltip-module_top__239MH:after {\n    top: 100%;\n    left: 50%;\n    margin-left: -8px;\n    border-top-color: #fefefe;\n}\n\n.Tooltip-module_xSmall__p7rPd {\n    width: 100px;\n}\n\n.Tooltip-module_small__1IS1m {\n    width: 200px;\n}\n\n.Tooltip-module_medium__hRcmQ {\n    width: 400px;\n}\n\n.Tooltip-module_large__paGda {\n    width: 600px;\n\n}\n";
var s$S = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","tooltipContainer":"Tooltip-module_tooltipContainer__15s8H","tooltipText":"Tooltip-module_tooltipText__1buoM","right":"Tooltip-module_right__1nw9g","left":"Tooltip-module_left__3nypM","bottom":"Tooltip-module_bottom__2SGDR","top":"Tooltip-module_top__239MH","xSmall":"Tooltip-module_xSmall__p7rPd","small":"Tooltip-module_small__1IS1m","medium":"Tooltip-module_medium__hRcmQ","large":"Tooltip-module_large__paGda"};
styleInject(css$S);

var Tooltip = function Tooltip(_ref) {
  var iconClassName = _ref.iconClassName,
      text = _ref.text,
      className = _ref.className,
      tooltipClassName = _ref.tooltipClassName,
      position = _ref.position,
      tooltipSize = _ref.tooltipSize,
      IconComponent = _ref.IconComponent;
  var computedTooltipClassName = [s$S.tooltipText, s$S[position], s$S[tooltipSize], tooltipClassName];
  return React__default.createElement("div", {
    className: [s$S.tooltipContainer, className].join(' ')
  }, IconComponent !== null && typeof IconComponent === 'function' && IconComponent() ? React__default.createElement(IconComponent, null) : React__default.createElement("i", {
    className: iconClassName
  }), React__default.createElement("span", {
    className: computedTooltipClassName.join(' ')
  }, text));
};

Tooltip.defaultProps = {
  className: '',
  tooltipClassName: '',
  position: 'bottom',
  tooltipSize: 'medium',
  IconComponent: null,
  iconClassName: ''
};
Tooltip.propTypes = {
  iconClassName: PropTypes$1.string,
  text: PropTypes$1.string.isRequired,
  className: PropTypes$1.string,
  tooltipClassName: PropTypes$1.string,
  position: PropTypes$1.oneOf(['left', 'top', 'right', 'bottom']),
  tooltipSize: PropTypes$1.oneOf(['xSmall', 'small', 'medium', 'large']),
  IconComponent: PropTypes$1.func
};

var css$T = ".RewardCard-module_card__1Znmy {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0;\n  max-height: 100%;\n  border-radius: 8px;\n  background-color: #fefefe;\n  -webkit-box-shadow: 0px 0px 38px -2px rgba(0, 0, 0, .15);\n          box-shadow: 0px 0px 38px -2px rgba(0, 0, 0, .15);\n}\n\n.RewardCard-module_left__3Vghj {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.RewardCard-module_imageContainer__ZBjX1 {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-bottom-right-radius: 8px;\n  border-top-right-radius: 8px;\n  width: 30px;\n}\n\n.RewardCard-module_imageContainerBig__7BCdx {\n  width: 65px;\n}\n\n@media (max-width: 480px) {\n  .RewardCard-module_imageContainer__ZBjX1 {\n    display: none;\n  }\n}\n";
var s$T = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card":"RewardCard-module_card__1Znmy","left":"RewardCard-module_left__3Vghj","imageContainer":"RewardCard-module_imageContainer__ZBjX1","imageContainerBig":"RewardCard-module_imageContainerBig__7BCdx"};
styleInject(css$T);

var RewardCardTextTypes = PropTypes$1.shape({
  rewardText: PropTypes$1.string,
  rewardTextMobile: PropTypes$1.string,
  footerButtonText: PropTypes$1.string,
  buttonTextLogin: PropTypes$1.string,
  loginText: PropTypes$1.string,
  rewardTooltip: PropTypes$1.string,
  updateExternalCard: PropTypes$1.string
});

var css$U = ".RewardCardHeader-module_header__16x0N {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  padding: 10px;\n}\n\n.RewardCardHeader-module_text__2_Rz0 {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.RewardCardHeader-module_textMobile__1E4IT {\n  display: none;\n}\n\n.RewardCardHeader-module_tooltip__26usu {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 10px;\n}\n\n.RewardCardHeader-module_rewardValue__1CNXp:after {\n  content: '\\A0';\n}\n\n@media (max-width: 1130px) {\n  .RewardCardHeader-module_textDesktop__14Q6S {\n    display: none;\n  }\n  .RewardCardHeader-module_textMobile__1E4IT {\n    display: inline;\n  }\n}\n";
var s$U = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","header":"RewardCardHeader-module_header__16x0N","text":"RewardCardHeader-module_text__2_Rz0","textMobile":"RewardCardHeader-module_textMobile__1E4IT","tooltip":"RewardCardHeader-module_tooltip__26usu","rewardValue":"RewardCardHeader-module_rewardValue__1CNXp","textDesktop":"RewardCardHeader-module_textDesktop__14Q6S"};
styleInject(css$U);

var RewardCardHeader = function RewardCardHeader(_ref) {
  var texts = _ref.texts,
      isSelected = _ref.isSelected,
      onRadioButtonChange = _ref.onRadioButtonChange,
      name = _ref.name,
      rewardValue = _ref.rewardValue,
      rewardTooltipIcon = _ref.rewardTooltipIcon;
  return React__default.createElement("div", {
    className: s$U.header
  }, React__default.createElement(RadioButton, {
    label: "\xA0",
    checked: isSelected,
    onSelect: onRadioButtonChange,
    name: name
  }), React__default.createElement("span", {
    className: s$U.text
  }, React__default.createElement("strong", {
    className: s$U.rewardValue
  }, rewardValue), React__default.createElement("span", {
    className: s$U.textDesktop
  }, texts.rewardText), React__default.createElement("span", {
    className: s$U.textMobile
  }, texts.rewardTextMobile), React__default.createElement(Tooltip, {
    className: s$U.tooltip,
    iconClassName: rewardTooltipIcon,
    text: texts.rewardTooltip
  })));
};

RewardCardHeader.propTypes = {
  name: PropTypes$1.string.isRequired,
  texts: RewardCardTextTypes.isRequired,
  isSelected: PropTypes$1.bool.isRequired,
  onRadioButtonChange: PropTypes$1.func.isRequired,
  rewardValue: PropTypes$1.string.isRequired,
  rewardTooltipIcon: PropTypes$1.string.isRequired
};

var css$V = ".RewardCardContent-module_content__2HvzU {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n}\n\n.RewardCardContent-module_content__2HvzU:empty {\n  display: none;\n}\n";
var s$V = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","content":"RewardCardContent-module_content__2HvzU"};
styleInject(css$V);

var RewardCardContent = function RewardCardContent(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return React__default.createElement("div", {
    className: [s$V.content, className].join(' ')
  }, children);
};

RewardCardContent.propTypes = {
  children: PropTypes$1.node,
  className: PropTypes$1.node
};
RewardCardContent.defaultProps = {
  children: null,
  className: undefined
};

var RewardCard = function RewardCard(_ref) {
  var name = _ref.name,
      image = _ref.image,
      rewardValue = _ref.rewardValue,
      rewardTooltipIcon = _ref.rewardTooltipIcon,
      onRadioButtonChange = _ref.onRadioButtonChange,
      prefixTestId = _ref.prefixTestId,
      isSelected = _ref.isSelected,
      selectedIcon = _ref.selectedIcon,
      isConnected = _ref.isConnected,
      texts = _ref.texts,
      hasExternalCard = _ref.hasExternalCard,
      children = _ref.children,
      isExternalCardUpdatable = _ref.isExternalCardUpdatable,
      onClickEditExternalCard = _ref.onClickEditExternalCard,
      editExternalCardClassName = _ref.editExternalCardClassName,
      fetching = _ref.fetching,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      cardProps = _objectWithoutProperties(_ref, ["name", "image", "rewardValue", "rewardTooltipIcon", "onRadioButtonChange", "prefixTestId", "isSelected", "selectedIcon", "isConnected", "texts", "hasExternalCard", "children", "isExternalCardUpdatable", "onClickEditExternalCard", "editExternalCardClassName", "fetching", "className", "contentClassName"]);

  return React__default.createElement("div", {
    className: [s$T.card, className].join(' ')
  }, React__default.createElement("div", {
    className: s$T.left
  }, React__default.createElement(RewardCardHeader, {
    texts: texts,
    isSelected: isSelected,
    onRadioButtonChange: onRadioButtonChange,
    name: name,
    rewardValue: rewardValue,
    rewardTooltipIcon: rewardTooltipIcon
  }), isSelected && React__default.createElement(RewardCardContent, {
    className: contentClassName
  }, children)), React__default.createElement("div", {
    className: [s$T.imageContainer, isSelected && children ? s$T.imageContainerBig : undefined].join(' '),
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  }));
};

RewardCard.propTypes = {
  name: PropTypes$1.string.isRequired,
  texts: RewardCardTextTypes.isRequired,
  image: PropTypes$1.string.isRequired,
  rewardValue: PropTypes$1.string.isRequired,
  onRadioButtonChange: PropTypes$1.func.isRequired,
  onClickEditExternalCard: PropTypes$1.func,
  children: PropTypes$1.node,
  prefixTestId: PropTypes$1.string,
  rewardTooltipIcon: PropTypes$1.string,
  isSelected: PropTypes$1.bool,
  selectedIcon: PropTypes$1.string,
  isConnected: PropTypes$1.bool,
  hasExternalCard: PropTypes$1.bool,
  isExternalCardUpdatable: PropTypes$1.bool,
  fetching: PropTypes$1.bool,
  editExternalCardClassName: PropTypes$1.string,
  className: PropTypes$1.string,
  contentClassName: PropTypes$1.string
};
RewardCard.defaultProps = {
  prefixTestId: '',
  rewardTooltipIcon: 'icon-ec-info',
  isSelected: false,
  selectedIcon: 'check',
  isConnected: false,
  children: null,
  hasExternalCard: true,
  isExternalCardUpdatable: true,
  fetching: false,
  editExternalCardClassName: '',
  className: undefined,
  contentClassName: undefined,
  onClickEditExternalCard: undefined
};

var css$W = ".RoundedButton-module_buttonContainer__1mUSj {\n  border: 2px solid;\n  border-radius: 15px;\n  padding: 5px 20px;\n  font-weight: bold;\n}\n\n.RoundedButton-module_fetching__1KXE5 {\n  background: none;\n  background-color: transparent !important;\n  color: transparent !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  overflow: hidden;\n  position: relative\n}\n\n.RoundedButton-module_fetching__1KXE5:hover {\n  background-color: transparent;\n}\n\n.RoundedButton-module_fetching__1KXE5:before {\n  background-color: #ffe8ad;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin-top: -2px;\n}\n\n.RoundedButton-module_fetching__1KXE5:after {\n  -webkit-animation: RoundedButton-module_fetching__1KXE5 3s linear infinite;\n          animation: RoundedButton-module_fetching__1KXE5 3s linear infinite;\n  background-color: #ffb201;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  margin-top: -2px;\n  left: 0;\n  width: 20%;\n}\n\n@-webkit-keyframes RoundedButton-module_fetching__1KXE5 {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n\n@keyframes RoundedButton-module_fetching__1KXE5 {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n";
var s$W = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","buttonContainer":"RoundedButton-module_buttonContainer__1mUSj","fetching":"RoundedButton-module_fetching__1KXE5"};
styleInject(css$W);

var RoundedButton = function RoundedButton(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      testid = _ref.testid,
      className = _ref.className,
      fetching = _ref.fetching;
  return React__default.createElement("button", {
    onClick: onClick,
    className: [s$W.buttonContainer, className, fetching ? s$W.fetching : undefined].join(' '),
    textid: testid
  }, text.toUpperCase());
};

RoundedButton.propTypes = {
  text: PropTypes$1.string.isRequired,
  onClick: PropTypes$1.func.isRequired,
  testid: PropTypes$1.string,
  className: PropTypes$1.string,
  fetching: PropTypes$1.bool
};
RoundedButton.defaultProps = {
  testid: '',
  className: '',
  fetching: false
};

var css$X = ".AddItemCard-module_addItemButton__3S4yl {\n  background-color: #eceff6;\n  padding: 5px;\n  border-radius: 8px;\n  margin-top: 25px;\n  margin-right: 25px;\n  position: relative\n}\n\n.AddItemCard-module_addItemButton__3S4yl:hover {\n  background-color: #ffcd02;\n}\n\n.AddItemCard-module_forPaymentMethod__pm0VB {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 185px;\n          flex: 0 0 185px;\n  border-radius: 8px;\n  width: 185px;\n}\n\n.AddItemCard-module_addItemButtonContent__16LVO {\n  background-color: #fefefe;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 16px !important;\n  padding: 16px !important;\n  padding: 1rem !important;\n}\n\n.AddItemCard-module_addItemButtonPlus__2wFvd {\n  color: #eceff6;\n  font-size: 80px;\n  font-weight: 700;\n  line-height: 0.9;\n  text-align: center\n}\n\n.AddItemCard-module_addItemButtonPlus__2wFvd.AddItemCard-module_smallButtonPlus__3q3hi {\n  font-size: 59px;\n  margin-bottom: 15px;\n}\n\n.AddItemCard-module_addItemButtonLink__2TXY8 {\n  justify-self: flex-end;\n  margin-bottom: 10px;\n}\n\n.AddItemCard-module_text__23fiP {\n  white-space: nowrap;\n}\n\n.AddItemCard-module_linkCenter__1V6Ss {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n\n@media (max-width: 480px) {\n  .AddItemCard-module_addItemButton__3S4yl {\n    margin-right: 0;\n  }\n\n  .AddItemCard-module_addItemButtonPlus__2wFvd {\n    font-size: 70px;\n  }\n}\n";
var s$X = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","addItemButton":"AddItemCard-module_addItemButton__3S4yl","forPaymentMethod":"AddItemCard-module_forPaymentMethod__pm0VB","addItemButtonContent":"AddItemCard-module_addItemButtonContent__16LVO","addItemButtonPlus":"AddItemCard-module_addItemButtonPlus__2wFvd","smallButtonPlus":"AddItemCard-module_smallButtonPlus__3q3hi","addItemButtonLink":"AddItemCard-module_addItemButtonLink__2TXY8","text":"AddItemCard-module_text__23fiP","linkCenter":"AddItemCard-module_linkCenter__1V6Ss"};
styleInject(css$X);

var AddItemCardFooter = function AddItemCardFooter(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      testid = _ref.testid,
      className = _ref.className;
  var linkClass = [s$X.addItemButtonLink, s$X.linkCenter];
  return React__default.createElement(LinkUnderlined, {
    testid: testid,
    className: [className, linkClass].join(' '),
    onClick: onClick,
    type: "button"
  }, React__default.createElement("span", null, label));
};

AddItemCardFooter.propTypes = {
  label: PropTypes$1.string,
  onClick: function onClick() {
    return null;
  },
  testid: PropTypes$1.string,
  className: PropTypes$1.string
};
AddItemCardFooter.defaultProps = {
  onClick: function onClick() {
    return null;
  },
  label: '',
  testid: '',
  className: undefined
};

var AddItemCardButtonPlus = function AddItemCardButtonPlus(_ref) {
  var isPending = _ref.isPending,
      onClick = _ref.onClick,
      loaderSize = _ref.loaderSize,
      className = _ref.className;
  return React__default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: [s$X.addItemButtonPlus, s$X.smallButtonPlus, className].join(' ')
  }, isPending ? React__default.createElement(Loader, {
    size: loaderSize
  }) : '+');
};

AddItemCardButtonPlus.propTypes = {
  isPending: PropTypes$1.bool,
  onClick: function onClick() {
    return null;
  },
  loaderSize: PropTypes$1.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes$1.string
};
AddItemCardButtonPlus.defaultProps = {
  onClick: function onClick() {
    return null;
  },
  isPending: false,
  loaderSize: 'small',
  className: undefined
};

var AddItemCard = function AddItemCard(_ref) {
  var label = _ref.label,
      isPending = _ref.isPending,
      onClick = _ref.onClick,
      children = _ref.children,
      testid = _ref.testid,
      loaderSize = _ref.loaderSize,
      buttonClassName = _ref.buttonClassName,
      linkClassName = _ref.linkClassName,
      isPaymentMethod = _ref.isPaymentMethod,
      cardProps = _objectWithoutProperties(_ref, ["label", "isPending", "onClick", "children", "testid", "loaderSize", "buttonClassName", "linkClassName", "isPaymentMethod"]);

  var buttonPlus = React__default.createElement(AddItemCardButtonPlus, {
    onClick: onClick,
    isPending: isPending,
    loaderSize: loaderSize,
    className: buttonClassName
  });
  var linkUnderlined = React__default.createElement(AddItemCardFooter, {
    onClick: onClick,
    testid: testid,
    label: label,
    className: linkClassName
  });
  var cardClassName = "\n    ".concat(s$X.addItemButtonContent, "\n    ").concat(isPaymentMethod ? s$X.forPaymentMethod : '', "\n  ");
  return React__default.createElement(Card, _extends({}, cardProps, {
    footerChildren: linkUnderlined,
    contentClassName: cardClassName
  }), children !== null ? children : null, children === null && buttonPlus, children === null && linkUnderlined);
};

AddItemCard.propTypes = {
  label: PropTypes$1.string,
  isPending: PropTypes$1.bool,
  onClick: function onClick() {
    return null;
  },
  children: PropTypes$1.node,
  testid: PropTypes$1.string,
  loaderSize: PropTypes$1.oneOf(['xSmall', 'small', 'medium', 'large']),
  buttonClassName: PropTypes$1.string,
  linkClassName: PropTypes$1.string,
  isPaymentMethod: PropTypes$1.bool
};
AddItemCard.defaultProps = {
  children: null,
  onClick: function onClick() {
    return null;
  },
  label: '',
  isPending: false,
  isPaymentMethod: false,
  testid: '',
  loaderSize: 'small',
  buttonClassName: undefined,
  linkClassName: undefined
};

var css$Y = ".RegistrationForm-module_columns__2mI8R {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.RegistrationForm-module_columns__2mI8R > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-spacing: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.RegistrationForm-module_columns__2mI8R > div> *  {\n  height: 50px;\n}\n\n.RegistrationForm-module_leftColumn__xhQap {\n  margin-right: 10px;\n}\n\n.RegistrationForm-module_columns__2mI8R:nth-child(2) {\n  margin-left: 20px;\n}\n\n.RegistrationForm-module_flex__mWQse {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.RegistrationForm-module_leftRadio__2Iq2n {\n  margin-right: 10px;\n}\n\n.RegistrationForm-module_inputLabel__3IYO_ {\n  margin-top: 40px;\n}\n\n.RegistrationForm-module_titleRadio__PjgBi {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.RegistrationForm-module_genderPicker__2I3dC {\n  margin-top: 10px;\n}\n\n.RegistrationForm-module_error__KWGdI {\n  text-align: left;\n  color: #ff5757;\n}\n\n.RegistrationForm-module_footerLabel__32y4D {\n  font-style: italic;\n  font-size: 11px;\n}\n\n.RegistrationForm-module_card__3j0bC {}\n\n.RegistrationForm-module_contentCard__rslWZ {}\n\n.RegistrationForm-module_emailInputLabel__1t3GN {}\n\n@media (max-width: 480px) {\n  .RegistrationForm-module_card__3j0bC {\n    background: transparent;\n    padding: 0;\n  }\n  .RegistrationForm-module_contentCard__rslWZ {\n    padding: 0;\n  }\n  .RegistrationForm-module_columns__2mI8R {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .RegistrationForm-module_columns__2mI8R > div > * {\n    height: auto;\n  }\n  .RegistrationForm-module_leftColumn__xhQap {\n    margin: 0 0 10px;\n  }\n  .RegistrationForm-module_inputLabel__3IYO_ {\n    margin-top: 10px;\n  }\n  .RegistrationForm-module_emailInputLabel__1t3GN {\n    display: none;\n  }\n}\n";
var s$Y = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","-webkit-columns":"RegistrationForm-module_columns__2mI8R","columns":"RegistrationForm-module_columns__2mI8R","leftColumn":"RegistrationForm-module_leftColumn__xhQap","-webkit-box-flex":"RegistrationForm-module_flex__mWQse","-ms-flex":"RegistrationForm-module_flex__mWQse","flex":"RegistrationForm-module_flex__mWQse","leftRadio":"RegistrationForm-module_leftRadio__2Iq2n","inputLabel":"RegistrationForm-module_inputLabel__3IYO_","titleRadio":"RegistrationForm-module_titleRadio__PjgBi","genderPicker":"RegistrationForm-module_genderPicker__2I3dC","error":"RegistrationForm-module_error__KWGdI","footerLabel":"RegistrationForm-module_footerLabel__32y4D","card":"RegistrationForm-module_card__3j0bC","contentCard":"RegistrationForm-module_contentCard__rslWZ","emailInputLabel":"RegistrationForm-module_emailInputLabel__1t3GN"};
styleInject(css$Y);

var RegistrationFormTextTypes = PropTypes$1.shape({
  firstName: PropTypes$1.string,
  lastName: PropTypes$1.string,
  postalCode: PropTypes$1.string,
  phone: PropTypes$1.string,
  email: PropTypes$1.string,
  password: PropTypes$1.string,
  passwordConfirmation: PropTypes$1.string,
  title: PropTypes$1.string
});
var defaultTexts$5 = {
  male: 'Mr',
  female: 'Mme',
  firstName: 'Prénom',
  lastName: 'Nom',
  postalCode: 'Code postal',
  phone: 'Téléphone mobile',
  email: 'Email',
  password: 'Mot de passe',
  passwordConfirmation: 'Confirmation de mot de passe',
  title: 'Civilité'
};
var radioDefaultValues = {
  male: 'Mr',
  female: 'Mme'
};
var ValuesType = PropTypes$1.shape({
  firstName: PropTypes$1.string,
  lastName: PropTypes$1.string,
  postalCode: PropTypes$1.string,
  phone: PropTypes$1.string,
  email: PropTypes$1.string,
  password: PropTypes$1.string,
  passwordConfirmation: PropTypes$1.string,
  title: PropTypes$1.string
});
var ErrorsType = PropTypes$1.shape({
  firstName: PropTypes$1.string,
  lastName: PropTypes$1.string,
  postalCode: PropTypes$1.string,
  phone: PropTypes$1.string,
  email: PropTypes$1.string,
  password: PropTypes$1.string,
  passwordConfirmation: PropTypes$1.string,
  title: PropTypes$1.string
});
var defaultValues = {
  firstName: '',
  lastName: '',
  postalCode: '',
  phone: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  title: ''
};
var defaultErrors = {
  firstName: null,
  lastName: null,
  postalCode: null,
  phone: null,
  email: null,
  password: null,
  passwordConfirmation: null,
  title: null
};

var RegistrationForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegistrationForm, _React$Component);

  function RegistrationForm(props) {
    var _this;

    _classCallCheck(this, RegistrationForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegistrationForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderLabelFooterPasswordComponent", function () {
      var labelFooterPassword = _this.props.labelFooterPassword;
      return labelFooterPassword ? React__default.createElement("div", {
        className: s$Y.footerLabel
      }, labelFooterPassword) : null;
    });

    _this.handleChangeGender = props.onChangeProperty.bind(_assertThisInitialized(_this), 'title');
    _this.handleChangeFirstName = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'firstName');
    _this.handleChangeLastName = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'lastName');
    _this.handleChangeEmail = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'email');
    _this.handleChangePhone = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'phone');
    _this.handleChangePostalCode = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'postalCode');
    _this.handleChangePassword = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'password');
    _this.handleChangePasswordConfirmation = _this.handleChangeProperty.bind(_assertThisInitialized(_this), 'passwordConfirmation');
    _this.genders = [{
      value: 'male',
      label: radioDefaultValues.male
    }, {
      value: 'female',
      label: radioDefaultValues.female
    }];
    return _this;
  }

  _createClass(RegistrationForm, [{
    key: "handleChangeProperty",
    value: function handleChangeProperty(field, event) {
      var onChangeProperty = this.props.onChangeProperty;
      onChangeProperty(field, event.currentTarget.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          RootComponent = _this$props.RootComponent,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          texts = _this$props.texts,
          phoneWithFlags = _this$props.phoneWithFlags,
          values = _this$props.values,
          errors = _this$props.errors,
          onKeyDownEmail = _this$props.onKeyDownEmail,
          countries = _this$props.countries,
          cardProps = _objectWithoutProperties(_this$props, ["RootComponent", "className", "contentClassName", "texts", "phoneWithFlags", "values", "errors", "onKeyDownEmail", "countries"]);

      var actualCardProps = _objectSpread({}, cardProps, {
        className: [s$Y.card, className].join(' '),
        contentClassName: [s$Y.contentCard, contentClassName].join(' ')
      });

      return React__default.createElement(RootComponent, actualCardProps, React__default.createElement("div", {
        className: s$Y.columns
      }, React__default.createElement("div", {
        className: s$Y.leftColumn
      }, React__default.createElement("div", {
        className: s$Y.titleRadio
      }, React__default.createElement("label", {
        htmlFor: "title"
      }, texts.title), React__default.createElement(GenderPicker, {
        className: s$Y.genderPicker,
        genders: this.genders,
        onSelect: this.handleChangeGender,
        selected: values.title || '',
        error: errors.title
      })), React__default.createElement(InputLabel, {
        id: "registrationFormFirstNameInput",
        className: s$Y.inputLabel,
        label: texts.firstName,
        onChange: this.handleChangeFirstName,
        value: values.firstName || '',
        error: errors.firstName,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormLastNameInput",
        className: s$Y.inputLabel,
        label: texts.lastName,
        onChange: this.handleChangeLastName,
        value: values.lastName || '',
        error: errors.lastName,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormPostalCodeInput",
        className: s$Y.inputLabel,
        label: texts.postalCode,
        onChange: this.handleChangePostalCode,
        value: values.postalCode || '',
        error: errors.postalCode
      })), React__default.createElement("div", null, React__default.createElement(PhoneInput, {
        id: "registrationFormPhoneInput",
        withFlag: phoneWithFlags,
        label: texts.phone,
        onChange: this.handleChangePhone,
        value: values.phone || '',
        error: errors.phone,
        countries: countries,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormEmailInput",
        className: [s$Y.inputLabel, s$Y.emailInputLabel].join(' '),
        label: texts.email,
        onChange: this.handleChangeEmail,
        value: values.email || '',
        error: errors.email,
        onKeyDown: onKeyDownEmail,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormPasswordInput",
        className: s$Y.inputLabel,
        label: texts.password,
        onChange: this.handleChangePassword,
        value: values.password || '',
        error: errors.password,
        LabelFooterComponent: this.renderLabelFooterPasswordComponent,
        type: "password",
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormPasswordConfirmationInput",
        className: s$Y.inputLabel,
        label: texts.passwordConfirmation,
        onChange: this.handleChangePasswordConfirmation,
        value: values.passwordConfirmation || '',
        error: errors.passwordConfirmation,
        type: "password",
        mandatory: true
      }))));
    }
  }]);

  return RegistrationForm;
}(React__default.Component);

RegistrationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: function RootComponent(_ref) {
    var children = _ref.children,
        cardProps = _objectWithoutProperties(_ref, ["children"]);

    return React__default.createElement(Card, cardProps, children);
  },
  className: undefined,
  contentClassName: undefined,
  texts: defaultTexts$5,
  phoneWithFlags: false,
  onChangeProperty: function onChangeProperty() {},
  values: defaultValues,
  errors: defaultErrors,
  onKeyDownEmail: function onKeyDownEmail() {},
  labelFooterPassword: 'Minimum 8 caractères',
  countries: DefaultCountries
};
RegistrationForm.propTypes = {
  RootComponent: PropTypes$1.func,
  className: PropTypes$1.string,
  contentClassName: PropTypes$1.string,
  texts: RegistrationFormTextTypes,
  phoneWithFlags: PropTypes$1.bool,
  onChangeProperty: PropTypes$1.func,
  values: ValuesType,
  errors: ErrorsType,
  labelFooterPassword: PropTypes$1.string,
  onKeyDownEmail: PropTypes$1.func,
  countries: PropTypes$1.shape(CountryPropType)
};

var css$Z = ".Picker-module_container__3AVzP {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #163457;\n  border: none;\n  border-radius: 5px;\n  display: block;\n  height: 50px;\n  padding: 0;\n  z-index: 1\n}\n\n.Picker-module_container__3AVzP.Picker-module_active__2IBbO {\n  z-index: 4;\n}\n\n.Picker-module_shadowWrapper__1yU5l {\n  background-color: #fefefe;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px 2px rgba(0, 0, 0, .5);\n          box-shadow: 0 4px 8px 2px rgba(0, 0, 0, .5);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  z-index: 2;\n}\n\n.Picker-module_pickerInputContainer__2EiaS {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 35px 0 15px;\n  width: 100%;\n  z-index: 2;\n}\n\n.Picker-module_pickerInput__1P5_a {\n  border-radius: 5px;\n  height: 50px;\n  padding: 0;\n  border: none;\n  margin-top: 0;\n  font-size: 15px;\n}\n\n.Picker-module_inputError__37bTz {\n  color: #c73637;\n}\n\n.Picker-module_splitPickerInputContainer__2QVF3 {\n  border-left: 1px solid rgba(191, 196, 212, .52);\n}\n\n.Picker-module_suggestionsContainer__20x1U {\n  min-height: 150px;\n  background-color: black;\n  position: absolute;\n  width: 150%;\n  top: 56px;\n  top: 56px;\n  top: 3.5rem;\n  left: -25%;\n  border-radius: 8px;\n  border-width: 1px;\n}\n\n.Picker-module_error__3Mp0C {\n  display: inline-table;\n  background-color: #c73637;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fefefe;\n  height: 45px;\n  left: 0;\n  opacity: 0;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  -webkit-transform: none;\n          transform: none;\n  -webkit-transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 700;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n}\n\n.Picker-module_errorVisible__3Fa-X {\n  opacity: 1;\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%);\n}\n";
var s$Z = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"Picker-module_container__3AVzP","active":"Picker-module_active__2IBbO","shadowWrapper":"Picker-module_shadowWrapper__1yU5l","pickerInputContainer":"Picker-module_pickerInputContainer__2EiaS","pickerInput":"Picker-module_pickerInput__1P5_a","inputError":"Picker-module_inputError__37bTz","splitPickerInputContainer":"Picker-module_splitPickerInputContainer__2QVF3","suggestionsContainer":"Picker-module_suggestionsContainer__20x1U","error":"Picker-module_error__3Mp0C","errorVisible":"Picker-module_errorVisible__3Fa-X"};
styleInject(css$Z);

var Picker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Picker, _React$PureComponent);

  function Picker() {
    var _this;

    _classCallCheck(this, Picker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Picker).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      suggestionsVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.containerRef.current && !_this.containerRef.current.contains(e.target)) {
        _this.setState({
          suggestionsVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        suggestionsVisible: true
      });
    });

    _this.containerRef = React__default.createRef();
    return _this;
  }

  _createClass(Picker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line no-undef
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // eslint-disable-next-line no-undef
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          split = _this$props.split,
          SuggestionsComponent = _this$props.SuggestionsComponent,
          FirstInputComponent = _this$props.FirstInputComponent,
          SecondInputComponent = _this$props.SecondInputComponent,
          firstValue = _this$props.firstValue,
          secondValue = _this$props.secondValue,
          className = _this$props.className,
          error = _this$props.error;
      var suggestionsVisible = this.state.suggestionsVisible;
      var hasError = error && error !== '';
      return React__default.createElement("div", {
        className: [s$Z.container, suggestionsVisible ? s$Z.active : undefined, className].join(' '),
        ref: this.containerRef
      }, React__default.createElement("div", {
        className: [s$Z.error, hasError ? s$Z.errorVisible : undefined].join(' ')
      }, error), React__default.createElement("div", {
        className: s$Z.shadowWrapper
      }, React__default.createElement(FirstInputComponent, {
        value: firstValue,
        className: [s$Z.pickerInput, hasError ? s$Z.inputError : undefined].join(' '),
        containerClassName: s$Z.pickerInputContainer,
        onFocus: this.handleFocus
      }), split && React__default.createElement(SecondInputComponent, {
        value: secondValue,
        className: [s$Z.pickerInput, hasError ? s$Z.inputError : undefined].join(' '),
        containerClassName: [s$Z.pickerInputContainer, s$Z.splitPickerInputContainer].join(' '),
        onFocus: this.handleFocus
      })), React__default.createElement(SuggestionsComponent, {
        visible: suggestionsVisible,
        split: split
      }));
    }
  }]);

  return Picker;
}(React__default.PureComponent);

Picker.defaultProps = {
  split: false,
  SuggestionsComponent: function SuggestionsComponent(props) {
    return React__default.createElement(PickerSuggestions, props);
  },
  FirstInputComponent: function FirstInputComponent(props) {
    return React__default.createElement(Input, props);
  },
  SecondInputComponent: function SecondInputComponent(props) {
    return React__default.createElement(Input, props);
  },
  firstValue: '',
  secondValue: '',
  className: undefined,
  error: undefined
};
Picker.propTypes = {
  split: PropTypes$1.bool,
  SuggestionsComponent: PropTypes$1.func,
  FirstInputComponent: PropTypes$1.func,
  SecondInputComponent: PropTypes$1.func,
  firstValue: PropTypes$1.string,
  secondValue: PropTypes$1.string,
  className: PropTypes$1.string,
  error: PropTypes$1.string
};

var positionToUnicodeCharacter = {
  top: "\u25B2",
  bottom: "\u25BC",
  right: "\u25B6",
  left: "\u25C0"
};

var Arrow = function Arrow(_ref) {
  var className = _ref.className,
      position = _ref.position;
  return React__default.createElement("span", {
    className: className
  }, positionToUnicodeCharacter[position]);
};

Arrow.defaultProps = {
  position: 'top',
  className: undefined
};
Arrow.propTypes = {
  position: PropTypes$1.oneOf(['top', 'bottom', 'left', 'right']),
  className: PropTypes$1.string
};

var css$_ = ".PickerSuggestions-module_container__1Oq6m {\n  background-color: #fefefe;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px 2px rgba(0, 0, 0, .5);\n          box-shadow: 0 4px 8px 2px rgba(0, 0, 0, .5);\n  height: 275px;\n  left: -10%;\n  min-height: 150px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 65px;\n  -webkit-transform: translateY(-50px);\n          transform: translateY(-50px);\n  -webkit-transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  width: 120%\n}\n\n.PickerSuggestions-module_container__1Oq6m.PickerSuggestions-module_visible__4ey8N {\n  opacity: 1;\n  pointer-events: initial;\n  -webkit-transform: none;\n          transform: none;\n}\n\n.PickerSuggestions-module_arrowContainer__2SiPV {\n  position: absolute;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  left: 0;\n  top: -15px;\n}\n\n.PickerSuggestions-module_arrow__JgXgd {\n  color: transparent\n}\n\n.PickerSuggestions-module_arrow__JgXgd.PickerSuggestions-module_visible__4ey8N {\n  color: #fefefe;\n  text-shadow: 0 -5px 15px rgb(206, 206, 206);\n}\n\n.PickerSuggestions-module_splitContainer__3P0nJ:before {\n  background-color: rgba(191, 196, 212, .52);\n  content: \"\";\n  height: calc(75% - 40px);\n  left: 50%;\n  position: absolute;\n  top: 20px;\n  width: 1px;\n}\n";
var s$_ = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"PickerSuggestions-module_container__1Oq6m","visible":"PickerSuggestions-module_visible__4ey8N","arrowContainer":"PickerSuggestions-module_arrowContainer__2SiPV","arrow":"PickerSuggestions-module_arrow__JgXgd","splitContainer":"PickerSuggestions-module_splitContainer__3P0nJ"};
styleInject(css$_);

var PickerSuggestions = function PickerSuggestions(_ref) {
  var visible = _ref.visible,
      children = _ref.children,
      className = _ref.className,
      ArrowComponent = _ref.ArrowComponent,
      split = _ref.split,
      rest = _objectWithoutProperties(_ref, ["visible", "children", "className", "ArrowComponent", "split"]);

  return React__default.createElement("div", _extends({
    className: [s$_.container, visible ? s$_.visible : undefined, split ? s$_.splitContainer : undefined, className].join(' ')
  }, rest), React__default.createElement("div", {
    className: s$_.arrowContainer
  }, React__default.createElement(ArrowComponent, {
    position: "top",
    className: [s$_.arrow, visible ? s$_.visible : undefined].join(' ')
  })), children);
};

PickerSuggestions.defaultProps = {
  visible: true,
  split: false,
  children: null,
  className: undefined,
  ArrowComponent: function ArrowComponent(props) {
    return React__default.createElement(Arrow, props);
  }
};
PickerSuggestions.propTypes = {
  visible: PropTypes$1.bool,
  children: PropTypes$1.any,
  // eslint-disable-line
  className: PropTypes$1.string,
  ArrowComponent: PropTypes$1.func,
  split: PropTypes$1.bool
};

var _ZoneTypesToIconName;
var ZoneTypes = {
  airport: 'airport',
  station: 'station',
  mixed: 'mixed'
};
var ZoneTypesToIconName = (_ZoneTypesToIconName = {}, _defineProperty(_ZoneTypesToIconName, ZoneTypes.airport, 'ec-airport'), _defineProperty(_ZoneTypesToIconName, ZoneTypes.station, 'ec-station'), _defineProperty(_ZoneTypesToIconName, ZoneTypes.mixed, 'ec-airport-station'), _ZoneTypesToIconName);
var Type = PropTypes$1.shape({
  name: PropTypes$1.string.isRequired,
  code: PropTypes$1.string.isRequired,
  type: PropTypes$1.oneOf(Object.keys(ZoneTypes)).isRequired
});

var css$$ = ".ZoneSuggestion-module_suggestion__nCTAf {\n  cursor: pointer;\n  display: block;\n  margin-bottom: 10px\n}\n\n.ZoneSuggestion-module_suggestion__nCTAf:last-child {\n  margin-bottom: 0;\n}\n\n.ZoneSuggestion-module_zoneName__2XBZo {\n  padding-left: 25px;\n}\n\n.ZoneSuggestion-module_selected__2jOH2, .ZoneSuggestion-module_hovered__1ETlf:hover {\n  font-weight: bold;\n}\n\n.ZoneSuggestion-module_disabled__1DHUU {\n  color: #939baa;\n}\n\n.ZoneSuggestion-module_icon__2Bikz {\n  margin-right: 10px;\n  position: relative;\n}\n\n.ZoneSuggestion-module_activeIcon__2XmM8 {\n  color: #163457;\n}\n\n.ZoneSuggestion-module_trainIcon__2zCRZ {\n  margin-left: 5px !important;\n}\n\n.ZoneSuggestion-module_mixedIcon__2-Jvz {\n  font-size: 19px;\n  margin-left: 0 !important;\n}\n\n.ZoneSuggestion-module_airportIcon__1yD1n {\n  margin-left: 2px !important;\n}\n";
var s$$ = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","suggestion":"ZoneSuggestion-module_suggestion__nCTAf","zoneName":"ZoneSuggestion-module_zoneName__2XBZo","selected":"ZoneSuggestion-module_selected__2jOH2","hovered":"ZoneSuggestion-module_hovered__1ETlf","disabled":"ZoneSuggestion-module_disabled__1DHUU","icon":"ZoneSuggestion-module_icon__2Bikz","activeIcon":"ZoneSuggestion-module_activeIcon__2XmM8","trainIcon":"ZoneSuggestion-module_trainIcon__2zCRZ","mixedIcon":"ZoneSuggestion-module_mixedIcon__2-Jvz","airportIcon":"ZoneSuggestion-module_airportIcon__1yD1n"};
styleInject(css$$);

var _iconNameToMarginClas;
var iconNameToMarginClassName = (_iconNameToMarginClas = {}, _defineProperty(_iconNameToMarginClas, ZoneTypesToIconName[ZoneTypes.station], s$$.trainIcon), _defineProperty(_iconNameToMarginClas, ZoneTypesToIconName[ZoneTypes.airport], s$$.airportIcon), _defineProperty(_iconNameToMarginClas, ZoneTypesToIconName[ZoneTypes.mixed], s$$.mixedIcon), _iconNameToMarginClas);

var IconComponent = function IconComponent(_ref) {
  var name = _ref.name,
      iconClassName = _ref.className;
  return React__default.createElement("i", {
    className: [iconNameToMarginClassName[name], "icon icon-".concat(name), iconClassName].join(' ')
  });
};

IconComponent.propTypes = {
  name: PropTypes$1.string.isRequired,
  className: PropTypes$1.string.isRequired
};

var ZoneSuggestion = function ZoneSuggestion(_ref2) {
  var value = _ref2.value,
      onClick = _ref2.onClick,
      selected = _ref2.selected,
      disabled = _ref2.disabled,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, ["value", "onClick", "selected", "disabled", "className"]);

  return React__default.createElement("span", _extends({
    role: "presentation",
    className: [s$$.suggestion, selected ? s$$.selected : undefined, disabled ? s$$.disabled : undefined, className].join(' '),
    onClick: onClick
  }, rest), React__default.createElement(Icon, {
    type: value.type,
    name: ZoneTypesToIconName[value.type],
    variant: disabled ? 'grey' : 'blue',
    position: "left",
    className: [s$$.icon, disabled ? s$$.disabled : s$$.activeIcon].join(' '),
    IconComponent: IconComponent
  }), React__default.createElement("span", {
    className: s$$.zoneName
  }, value.name));
};

ZoneSuggestion.defaultProps = {
  className: undefined,
  selected: false,
  disabled: false,
  onClick: function onClick() {
    return null;
  }
};
ZoneSuggestion.propTypes = {
  value: Type.isRequired,
  onClick: PropTypes$1.func,
  selected: PropTypes$1.bool,
  disabled: PropTypes$1.bool,
  className: PropTypes$1.string
};

var css$10 = ".ZonesPicker-module_suggestionsContainer__j1KTO {\n  position: relative;\n  height: 85%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row\n}\n\n.ZonesPicker-module_suggestionsContainer__j1KTO:before, .ZonesPicker-module_suggestionsContainer__j1KTO:after {\n  content: '';\n  height: 20px;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n}\n\n.ZonesPicker-module_suggestionsContainer__j1KTO:before {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(rgba(255, 255, 255, .1)));\n  background: linear-gradient(to bottom, #fefefe, rgba(255, 255, 255, .1));\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 0;\n}\n\n.ZonesPicker-module_suggestionsContainer__j1KTO:after {\n  background: -webkit-gradient(linear, left bottom, left top, from(#fefefe), to(rgba(255, 255, 255, .1)));\n  background: linear-gradient(to top, #fefefe, rgba(255, 255, 255, .1));\n  bottom: 0;\n}\n\n.ZonesPicker-module_suggestions__19igb {\n  position: relative;\n  overflow-x: scroll;\n  display: none;\n  width: 100%;\n  padding: 15px\n}\n\n.ZonesPicker-module_suggestions__19igb.ZonesPicker-module_visible__3Tlgg {\n  display: block;\n}\n\n.ZonesPicker-module_suggestionAction__29BOq {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n  padding-left: 15px;\n  height: 15%;\n  background-color: #eceff6;\n}\n\n.ZonesPicker-module_suggestionActionVisible__1bpa0 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.ZonesPicker-module_inputContainer__17GCF {\n  padding: 0 35px 0 15px;\n}\n\n.ZonesPicker-module_input__1qXay {\n  margin-right: 25px;\n}\n\n.ZonesPicker-module_input__1qXay::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.ZonesPicker-module_input__1qXay::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.input::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.input::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.ZonesPicker-module_input__1qXay::placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.ZonesPicker-module_inputImgIcon__2U4u7 {\n  height: 20px;\n}\n\n.ZonesPicker-module_inputIcon__lD2sz {\n  color: #163457;\n  font-size: 19.2px;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n}\n\n.ZonesPicker-module_leftInputIcon__3Azxc {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  left: 10px;\n  top: 0;\n  width: 30px;\n}\n\n.ZonesPicker-module_leftInputIcon__3Azxc + input {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 0 0 25px;\n}\n\n.ZonesPicker-module_rightInputIconContainer__1A3Zs {\n  right: 10px;\n}\n\n.ZonesPicker-module_rightInputIcon__WQQ5r {\n  height: 15px;\n  width: 15px;\n}\n\n.ZonesPicker-module_stationIcon__36JCs {\n  margin-left: 2px;\n}\n\n.ZonesPicker-module_inputAction__qyPpy {\n  cursor: pointer;\n}\n\n.ZonesPicker-module_toZoneSuggestion__23gxS:hover {\n  font-weight: bold;\n}\n";
var s$10 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","suggestionsContainer":"ZonesPicker-module_suggestionsContainer__j1KTO","suggestions":"ZonesPicker-module_suggestions__19igb","visible":"ZonesPicker-module_visible__3Tlgg","suggestionAction":"ZonesPicker-module_suggestionAction__29BOq","suggestionActionVisible":"ZonesPicker-module_suggestionActionVisible__1bpa0","inputContainer":"ZonesPicker-module_inputContainer__17GCF","input":"ZonesPicker-module_input__1qXay","inputImgIcon":"ZonesPicker-module_inputImgIcon__2U4u7","inputIcon":"ZonesPicker-module_inputIcon__lD2sz","leftInputIcon":"ZonesPicker-module_leftInputIcon__3Azxc","rightInputIconContainer":"ZonesPicker-module_rightInputIconContainer__1A3Zs","rightInputIcon":"ZonesPicker-module_rightInputIcon__WQQ5r","stationIcon":"ZonesPicker-module_stationIcon__36JCs","inputAction":"ZonesPicker-module_inputAction__qyPpy","toZoneSuggestion":"ZonesPicker-module_toZoneSuggestion__23gxS"};
styleInject(css$10);

var Suggestions = [{name:"Paris Orly",code:"ORY",type:"airport"},{name:"Paris CDG",code:"CDG",type:"airport"},{name:"Lyon",code:"ADL",type:"airport"},{name:"Gare de Lyon",code:"GDL",type:"station"},{name:"Marseille",code:"MAR",type:"airport"},{name:"Marseille2",code:"MAR2",type:"airport"},{name:"Marseille3",code:"MAR3",type:"airport"},{name:"Marseille4",code:"MAR4",type:"airport"},{name:"Marseille5",code:"MAR5",type:"airport"}];

var TextsType$6 = PropTypes$1.shape({
  inputPlaceholder: PropTypes$1.string,
  suggestionCheckboxLabel: PropTypes$1.string
});
var DefaultTexts$6 = {
  inputPlaceholder: 'Aéroport ou gare...',
  suggestionCheckboxLabel: 'Lieu de retour différent'
};

var _ref$5 =
/*#__PURE__*/
React__default.createElement("g", {
  transform: "translate(1 1)",
  stroke: "#BFC4D4",
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("ellipse", {
  cx: 9.401,
  cy: 6.448,
  rx: 6.39,
  ry: 6.448
}), React__default.createElement("path", {
  d: "M5.018 10.87L.185 15.746",
  strokeLinecap: "square"
}));

var iconSearch = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2218px%22%20height%3D%2218px%22%20viewBox%3D%220%200%2018%2018%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Esearch%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22search%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22icone%22%20transform%3D%22translate%281.000000%2C%201.000000%29%22%20stroke%3D%22%23BFC4D4%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cellipse%20id%3D%22Oval%22%20cx%3D%229.40079704%22%20cy%3D%226.447655%22%20rx%3D%226.39003302%22%20ry%3D%226.447655%22%3E%3C%2Fellipse%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5.01794004%2C10.8700343%20L0.18544561%2C15.7461056%22%20id%3D%22Line%22%20stroke-linecap%3D%22square%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$6 =
/*#__PURE__*/
React__default.createElement("g", {
  stroke: "#BFC4D4",
  fill: "none",
  fillRule: "evenodd",
  strokeLinecap: "square"
}, React__default.createElement("path", {
  d: "M1.173.56l7.485 7.485M8.827.56L1.342 8.045"
}));

var iconClear = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2210px%22%20height%3D%229px%22%20viewBox%3D%220%200%2010%209%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Eclear%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Page-1%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20stroke-linecap%3D%22square%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22clear%22%20transform%3D%22translate%28-338.000000%2C%20-338.000000%29%22%20stroke%3D%22%23BFC4D4%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Selected%22%20transform%3D%22translate%28338.000000%2C%20337.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22clear%22%20transform%3D%22translate%280.955078%2C%200.955078%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Line%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0.217729048%2C0.605090166%20L7.70248263%2C8.08984375%22%20id%3D%22Path%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0.38736137%2C0.605090166%20L7.87211495%2C8.08984375%22%20id%3D%22Path%22%20transform%3D%22translate%284.129738%2C%204.347467%29%20scale%28-1%2C%201%29%20translate%28-4.129738%2C%20-4.347467%29%20%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var getZoneSuggestionsFromValue = function getZoneSuggestionsFromValue(zoneSuggestions, value) {
  return zoneSuggestions.map(function (zone) {
    var zoneSuggestion = _objectSpread({}, zone, {
      disabled: value.length > 0,
      similarity: 1
    });

    if (zone.name.toLowerCase().includes(value.toLowerCase())) {
      zoneSuggestion.disabled = false;
      zoneSuggestion.similarity = Levenshtein.get(zone.name.toLowerCase(), value.toLowerCase(), {
        useCollator: true
      }) / zone.name.length;
    }

    return zoneSuggestion;
  }).sort(function (zoneSuggestionA, zoneSuggestionB) {
    if (zoneSuggestionA.similarity === zoneSuggestionB.similarity) {
      return 0;
    }

    return zoneSuggestionA.similarity > zoneSuggestionB.similarity ? 1 : -1;
  });
};

var ZonesPicker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ZonesPicker, _React$PureComponent);

  _createClass(ZonesPicker, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var fromZoneProp = nextProps.fromZone,
          toZoneProp = nextProps.toZone,
          fromZoneSuggestions = nextProps.fromZoneSuggestions,
          toZoneSuggestions = nextProps.toZoneSuggestions,
          propSplit = nextProps.split;
      var fromZoneValue = prevState.fromZoneValue,
          toZoneValue = prevState.toZoneValue,
          split = prevState.split;

      if (!fromZoneValue && fromZoneProp && fromZoneSuggestions.length) {
        var fromZone = fromZoneSuggestions.find(function (suggestion) {
          return suggestion.name === fromZoneProp.name;
        });
        fromZoneValue = fromZone ? fromZone.name : '';
      }

      if (!toZoneValue && toZoneProp && toZoneSuggestions.length) {
        var toZone = toZoneSuggestions.find(function (suggestion) {
          return suggestion.name === toZoneProp.name;
        });
        toZoneValue = toZone ? toZone.name : '';
      }

      if (typeof propSplit !== 'undefined') {
        split = propSplit;
      }

      return {
        split: split,
        fromZoneValue: fromZoneValue,
        toZoneValue: toZoneValue,
        fromZoneSuggestions: getZoneSuggestionsFromValue(fromZoneSuggestions, fromZoneValue),
        toZoneSuggestions: getZoneSuggestionsFromValue(toZoneSuggestions, toZoneValue)
      };
    }
  }]);

  function ZonesPicker() {
    var _this;

    _classCallCheck(this, ZonesPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZonesPicker).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      split: false,
      fromZoneValue: '',
      toZoneValue: '',
      fromZoneSuggestions: [],
      toZoneSuggestions: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleFromZoneClick", function (zone) {
      var onSelect = _this.props.onSelect;
      var split = _this.state.split;
      var newState = {};
      newState.fromZoneValue = zone.name;

      if (!split) {
        newState.toZoneValue = zone.name;

        _this.picker.current.handleClickOutside({});
      }

      _this.setState(newState);

      onSelect(zone, ZonesPicker.fromZone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleToZoneClick", function (zone) {
      var onSelect = _this.props.onSelect;
      var _this$state = _this.state,
          fromZoneValue = _this$state.fromZoneValue,
          fromZoneSuggestions = _this$state.fromZoneSuggestions;

      if (fromZoneValue && fromZoneSuggestions.find(function (suggestion) {
        return suggestion.name === fromZoneValue;
      })) {
        _this.picker.current.handleClickOutside({});
      }

      _this.setState({
        toZoneValue: zone.name
      });

      onSelect(zone, ZonesPicker.toZone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFromZoneChange", function (event) {
      var value = event.currentTarget.value;
      var onSelect = _this.props.onSelect;

      if (!value) {
        onSelect(undefined, ZonesPicker.fromZone);

        _this.setState(function () {
          return {
            fromZoneValue: ''
          };
        });
      } else {
        _this.setState({
          fromZoneValue: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleToZoneChange", function (event) {
      var value = event.currentTarget.value;
      var onSelect = _this.props.onSelect;

      if (!value) {
        _this.setState(function () {
          return {
            toZoneValue: ''
          };
        });

        onSelect(undefined, ZonesPicker.toZone);
      } else {
        _this.setState({
          toZoneValue: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFromZoneReset", function () {
      var onSelect = _this.props.onSelect;
      var _this$state2 = _this.state,
          split = _this$state2.split,
          toZoneValue = _this$state2.toZoneValue;
      var newState = {
        toZoneValue: toZoneValue,
        fromZoneValue: ''
      };

      if (!split) {
        newState.toZoneValue = '';
        onSelect(undefined, ZonesPicker.toZone);
      }

      _this.setState(newState);

      onSelect(undefined, ZonesPicker.fromZone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleToZoneReset", function () {
      var onSelect = _this.props.onSelect;

      _this.setState({
        toZoneValue: ''
      });

      onSelect(undefined, ZonesPicker.toZone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSplitSuggestions", function () {
      var onSplitSuggestions = _this.props.onSplitSuggestions;

      _this.setState(function (prevState) {
        var split = !prevState.split;
        onSplitSuggestions(split);
        return {
          split: split,
          toZoneValue: ''
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputLeftIconComponent", function (_ref) {
      var name = _ref.name,
          iconClassName = _ref.className;
      var className = ["icon icon-".concat(name), iconClassName].join(' ');

      if (name === ZoneTypesToIconName[ZoneTypes.station]) {
        className = [className, s$10.stationIcon].join(' ');
      }

      return React.createElement("i", {
        className: className
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputLeftComponent", function (_ref2) {
      var className = _ref2.className;
      var fromZone = _this.props.fromZone;

      if (!fromZone || !fromZone.type) {
        return null;
      }

      return React.createElement(Icon, {
        IconComponent: _this.renderFromInputLeftIconComponent,
        name: ZoneTypesToIconName[fromZone.type],
        variant: "yellow",
        className: [s$10.inputIcon, s$10.leftInputIcon, className].join(' ')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputRightComponent", function (_ref3) {
      var className = _ref3.className;
      var fromZoneValue = _this.state.fromZoneValue;

      if (fromZoneValue.length === 0) {
        return React.createElement(Icon, {
          src: iconSearch,
          className: [s$10.inputIcon, s$10.rightInputIconContainer, className].join(' '),
          iconClassName: s$10.rightInputIcon
        });
      }

      return React.createElement(Icon, {
        src: iconClear,
        role: "presentation",
        className: [s$10.inputAction, s$10.rightInputIconContainer, className].join(' '),
        iconClassName: s$10.rightInputIcon,
        onClick: _this.handleFromZoneReset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputComponent", function (_ref4) {
      var className = _ref4.className,
          inputProps = _objectWithoutProperties(_ref4, ["className"]);

      var texts = _this.props.texts;
      return React.createElement(Input, _extends({}, inputProps, {
        onChange: _this.handleFromZoneChange,
        placeholder: texts.inputPlaceholder,
        className: [s$10.input, className].join(' '),
        autoComplete: "off",
        LeftComponent: _this.renderFromInputLeftComponent,
        RightComponent: _this.renderFromInputRightComponent
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputLeftIconComponent", function (_ref5) {
      var name = _ref5.name,
          iconClassName = _ref5.className;
      var className = ["icon icon-".concat(name), iconClassName].join(' ');

      if (name === ZoneTypesToIconName[ZoneTypes.station]) {
        className = [className, s$10.stationIcon].join(' ');
      }

      return React.createElement("i", {
        className: className
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputLeftComponent", function (_ref6) {
      var className = _ref6.className;
      var toZone = _this.props.toZone;

      if (!toZone || !toZone.type) {
        return null;
      }

      return React.createElement(Icon, {
        IconComponent: _this.renderToInputLeftIconComponent,
        name: ZoneTypesToIconName[toZone.type],
        variant: "yellow",
        className: [s$10.inputIcon, s$10.leftInputIcon, className].join(' ')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputRightComponent", function (_ref7) {
      var className = _ref7.className;
      var toZoneValue = _this.state.toZoneValue;

      if (toZoneValue.length === 0) {
        return React.createElement(Icon, {
          src: iconSearch,
          className: [s$10.inputIcon, s$10.rightInputIconContainer, className].join(' '),
          iconClassName: s$10.rightInputIcon
        });
      }

      return React.createElement(Icon, {
        src: iconClear,
        role: "presentation",
        className: [s$10.inputAction, s$10.rightInputIconContainer, className].join(' '),
        iconClassName: s$10.rightInputIcon,
        onClick: _this.handleToZoneReset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputComponent", function (_ref8) {
      var className = _ref8.className,
          inputProps = _objectWithoutProperties(_ref8, ["className"]);

      var texts = _this.props.texts;
      return React.createElement(Input, _extends({}, inputProps, {
        onChange: _this.handleToZoneChange,
        placeholder: texts.inputPlaceholder,
        className: [s$10.input, className].join(' '),
        autocomplete: "off",
        LeftComponent: _this.renderToInputLeftComponent,
        RightComponent: _this.renderToInputRightComponent
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromZoneSuggestion", function (zone) {
      return React.createElement(ZoneSuggestion, {
        value: zone,
        key: zone.code,
        onClick: function onClick() {
          return _this.handleFromZoneClick(zone);
        },
        disabled: zone.disabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToZoneSuggestion", function (zone) {
      return React.createElement(ZoneSuggestion, {
        value: zone,
        key: zone.code,
        onClick: function onClick() {
          return _this.handleToZoneClick(zone);
        },
        disabled: zone.disabled,
        className: s$10.toZoneSuggestion
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsComponent", function (_ref9) {
      var visible = _ref9.visible,
          rest = _objectWithoutProperties(_ref9, ["visible"]);

      var texts = _this.props.texts;
      var _this$state3 = _this.state,
          split = _this$state3.split,
          fromZoneSuggestions = _this$state3.fromZoneSuggestions,
          toZoneSuggestions = _this$state3.toZoneSuggestions;
      return React.createElement(PickerSuggestions, _extends({
        visible: visible
      }, rest), React.createElement("div", {
        className: s$10.suggestionsContainer
      }, React.createElement("div", {
        className: [s$10.suggestions, visible ? s$10.visible : undefined].join(' ')
      }, fromZoneSuggestions.map(_this.renderFromZoneSuggestion)), React.createElement("div", {
        className: [s$10.suggestions, visible && split ? s$10.visible : undefined].join(' ')
      }, toZoneSuggestions.map(_this.renderToZoneSuggestion))), React.createElement("div", {
        className: [s$10.suggestionAction, visible ? s$10.suggestionActionVisible : undefined].join(' ')
      }, React.createElement(InputCheckbox, {
        onChange: _this.handleSplitSuggestions,
        checked: split
      }, texts.suggestionCheckboxLabel)));
    });

    _this.picker = React.createRef();
    return _this;
  }

  _createClass(ZonesPicker, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          split = _this$state4.split,
          fromZoneValue = _this$state4.fromZoneValue,
          toZoneValue = _this$state4.toZoneValue;
      var _this$props = this.props,
          error = _this$props.error,
          className = _this$props.className;
      return React.createElement(Picker, {
        ref: this.picker,
        split: split,
        FirstInputComponent: this.renderFromInputComponent,
        SecondInputComponent: this.renderToInputComponent,
        SuggestionsComponent: this.renderSuggestionsComponent,
        firstValue: fromZoneValue,
        secondValue: toZoneValue,
        error: error,
        className: className
      });
    }
  }]);

  return ZonesPicker;
}(React.PureComponent);

ZonesPicker.defaultProps = {
  onSelect: function onSelect() {
    return null;
  },
  fromZone: undefined,
  toZone: undefined,
  fromZoneSuggestions: Suggestions,
  toZoneSuggestions: Suggestions,
  texts: DefaultTexts$6,
  className: undefined,
  error: '',
  onSplitSuggestions: function onSplitSuggestions() {
    return null;
  },
  split: undefined
};
ZonesPicker.propTypes = {
  fromZoneSuggestions: PropTypes$1.arrayOf(Type),
  toZoneSuggestions: PropTypes$1.arrayOf(Type),
  onSelect: PropTypes$1.func,
  fromZone: Type,
  toZone: Type,
  texts: TextsType$6,
  className: PropTypes$1.string,
  error: PropTypes$1.string,
  onSplitSuggestions: PropTypes$1.func,
  split: PropTypes$1.bool
};
ZonesPicker.fromZone = 'from';
ZonesPicker.toZone = 'to';

var bgWhite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAAA/dJREFUSA291ttuVVUUxvFuOaiIKB7QYjkogpqgiZFEvdGH8IV8AV+Eay+8MMY7Q6LxgCYeEIECgqIFROVg2f5/q3s3paX1Rp3J37nXXHOOMb5vzFWcmfkPxng83rRR2NFGL9d7V9D7e/dXLI5Go9s9i7MjzDfi8bjYO7/XjM1rVlYtFHBbSxLcji0F+rN5Z7wVH8bxeCQOxDgMcTd19pf2Xx1WVvznrkknlW9p32LMxu6QbEGg5jfiYPQ4Pt9sz73xYDwUC3FPiL8m6Rp7JwlZNRe/xpF4NBQxH9vjULBQUSeCjfp4IexV2JW4Fl+m9lbz8ribUodfCFY9F5JT4eDeuBQCbg293R8PBJUfhAJuhmHPE3HWw3SwgEcrFav+q3CY0jMhqL7avysMz5BYEja+HntCj/Xd/stxx9g8Sbi1WTLJHw6BKN4X1jEbFErgN+X2sd1l00vKJNf/P0JCce4YU3tZSY2kLsjhEOTZEFwgCvXxo/gpXg4FPhaSXw/uiKOXEor3VCh2eQz29sQmB4xzofo3Q1AXR+DnQ48ll3Q+qNAzt9sFwtNhKFRSLoq3PDZ3s6iESq+34fdmjZdcEP1h333hW30tXJrvQ9HgitkdYD+1zrBYYXPFvTD5xmf01CKbb7UoqJsq8RfBQv1jn6qhkFdDop0xLUY/KdL/l4L6H2IhngznPo4h2VTptgqQUBGsZKN+CuJieMeNqeo9k3U2KlpyhXhm8VxQqjDFvLcUf3STvf52Cs4e/VMVRfrJWv1WiJ4LYChUXyXTUwkvBmslEMvM5k9DwVfLdaODI4dmeijvkJgqa5+HgwoQaKqYhVrwW1AtqFlh9lHmnSL81mP2ngkxqBkPSYeH0WixxFf6fSHMlL4SeqGnChKYYhZaOx0SUyuxT4q183EsvgtnriVMzGFQs3K4TGdbUJWZNapUPcuts01ifbZ+In4OlnsWXDt2hLUDsTtBLB7GstLpQi8pdCEo/iQkcmnYei4EVeyloO5yfB37g2q9dV4rpt+4Nr1b7NOJWlyd1Pd3ONgmKGvsORgCfROUzQYrF8Jlo15vFUYlVzyLZ+gvZ4axOqnDJ0P1Auya4M/aj3E2BHVRzofCuGAWdHrb9/bbp/VtUM9qAsQcVJinw23LgeGPhH992Khqlr4fDm+P46EI76nXLxZ6z4FTYc9nsS8kNuy/096SaTymg2qXRn+NU6HHlJkls+dIUEYhK+1XjBvuvP66K0QNKszrjtRSyjY302ezqeJYtfLfYSpZ/kzMxqF4JyijXkEnO6eAfx4snti84ebpnua98WJsif7nbGY0Pnq0+e3iLImk4l8bJaEMLobP6f8Zg7LxUuL1Mv4Nki9xooUuN/EAAAAASUVORK5CYII=";

var bgGrey = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAABmlJREFUSA21VltvHFUSrjqne26eGY89vkwmDsYJXljMLSEREisFhQceQUIov8c/gLd94BeglfK4D0hEKyxEVlmto11xMZc4sZMYjBl77p4Zz3SfU/tVJ7ZGBCX7AEea6e5zquqr+urSTfQ7r9XVVfM0k/w0gd86v3+/NbW4WGoen21ubqYnJyfD4XDoMplMQJTL12r36isrK6NjmfHrU73a3e3MqMK1a9esXjc2NlK5Qvhmrdm9vL/fO6WA2enTs8wTfwpz5VcB+Lw3bmlu7tlET3V+vX4zUgW4evWq29vbm5CguBKI+Nj4AY3iXhDYlFj7gRGZ98RfxkP3d5MOnrPeZclylYjb5HzPWdr3R92tarXafyro9vY2GJopWOsnmdn6wLzBjgzhnr3f8gGfsZ5exzML074I3SKRihFuevYpbIde6IDId+BU+1S58O2vQR+jN5vNWpuWF7wNZxJA4meYTYkM5zzbKfYwaljBWiKcY+K32fBfxNA7hjklYkbGy5CZbAiGjtMyDqygSvExzVypVHqeTIspNuypxoIf+7QqGZZpw4R77iB2p3osPkUkHdwW8Ax6pQinsGeLzvno0qVLoeqOr+DWrVuoNqJutyuotszI5ksmjo7E2HlsV8TIkDxn4dW0kHyPyE6zl1iY04YkhwgdiZkDeg5RvgzH7gtxiOceSCmur6/fU/vjK9ja2vLnz58Pps6ezQx71qZy/kW29hVQliOhBQj/hNyhOiVFbAre+zvqAHJ3CueTJDwDnrKQa0EmK15aQgY5pYECXb58OYNLT++P1wm1dxuNYtA1JpNPvQ0K30NOMshbBENHCXVwAJE2EOF14+QmgN6FM6/DwCKuPYAPIDuEzIZ35gsjrumtjJznRnWm8N0xoF41p6K/c9PTbTR8i2J/g8lfB+AQ2xO4IiI5IyzwmPM4e9ZZ+bMYUM4UgEqLMp5jkjIKKwP6FyBTxHkaDhljyO7u7uaAoQEmy2h1aZvgSTclCgxKXjBJpIsd2OQsItFC8vgh/+Y82uN9EcngMKl+RBeCgRDyIwA7NuZF0L+o+bdkljhVemmv0V2BfrKC2dlZzufz4c5OOxfHHo0mr8DwMsD68CKCceQDMbEUoeFYZA7GY9BZVgvwawRAsKIOySSuEcQvQPccHPgXaAxDIwvddvy3RBx/5sqVK67Vao2s7R2FxXSe2B+qoYd0wXRijCxiRqpBIeiEXhtOqBzmLxfhSIjzXbSXAyBolQLSEkD3Z1C9FXv+Tzo9OJnDSU6Xl5eHN27cGKZcpFWoSDV4qcZjeDpEOIiEO9gfwGBLZdA2PciMNFTI1HGNcK3hqY+NBkR+Qpoicua2FXkQhqHagwhJ0qO4SdZgIAcZ4c7ImrsZI3CA34LnExBNq1FEok404dUIJVgHcAnP30EGWUnaRnsbAdIDz/wDkzmMglG9OjX180OEh/9JIeitDnh9Xc3P52txd9iDsQcokLp6juNk+oDah1MIrQHgPM6/BsbXkDkEC8pGGzLApyEm1b7Xanbp+c16vbi2tnYSoHp1snZ2drIml5vxkvVo0nmU/Vmw9xJ8f0Pbg7xsqDCiCNAmd2Feq7yAQnoOhqZxhOlERQA3oXcHVXcbcmcQWeOo764tLBTrqn+Crm98zpXLVqgaOH+vdnD/m1Klsh+YdA6vmAXkDxNJ1hEhRiKjuqWftBZzCc/tpBI8WTgwgjNp8ajwRyFF4j+PovrJVBqPlPf2urPqSaVS2N856FeR1wsw9gKAJmDsAAWi1VhEGc+Bwh2NCOIXUL0oNjMPEIzjZHRCxX8C4D3IlvFm2mzy0Q/L5TJeDGgZ/Xu0ZDA46CggnsWO4qEXdwDtJmiuO3GfgdhDNP2+E/ovJsU34jmD89vYwxiUAd632quYvbQl3m8eHcb/jr25k9hvNLSXkzUOSktLS5izSVlTtVqsS9T/iozfNM5/G4ttezHNfjf650d//fAf7qhzR+LOdTcarjuRu3BMhzzKiAJDfiOmaCedppLu6VfHxMRE8rmTyOjfk9b2drOkja2fHXgNhhcvXowhj2BOFv9Y75/GED5tjT8L8l7z5D/muL+lH2jex9ko4vbNm5+2tUNOtJ508+iTcjz3j4mrMypXq9Xyu83m4i+/tM5BSHWS39raqhbsE208ZvT/3VDg8X5UPRTfHwM25hSvribF+USg/wHY1SIfW2EOKgAAAABJRU5ErkJggg==";

var bgBlue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAABmZJREFUSA21Vs1PXFUUP+e+L97wMcAUKNMW21KwLfUzTUw1LWKMSUlcGFOWLnXlwpUfC/PixpVxoRv9A4yBnZoutLFomzZqE7QI2g+qUMp3B2YYGGbmvXv83TfQUKjoQm943PfOvff8zsfvnDtE/8M4099v7aSWd1r8u7U3+i/5K4tumJ7+KgqCQGMfv/nNWJ1v5zg7Xygm0y1Nd3N69qPejuKDdPwjaPDllQQV/JCa5nR23nM+7Hu6EFz8PW2x/bKEPPhud/vw2+d+S3mu164skQqItjmMZqIV627Q25HbCmxvFax/c9A/4ozQSGQ1JltFrLSmtkJDCxXfunB1UrH9ApHqIIsEgFOe77QqIY+FallRUiJeFLaVVc1G/zbQB3kah6ra13vXdDnjcdVxVjqFjQ5puk1K1UB5JylpEpFIhG8yUxGzxUpmWEtKFN8VzVnN4fLUr7mRT187Xt7s3DZPg/PnLXL0EYJGX3kPC+u9APGEuEyWtEHpApRmSciFzAfgfmapJuZamPCtKCqy6BIhDEorK92ZbAHg5GZQtf5xz+OgpydapWhE4zCJzkDpBBRWgyshafhC1GzOMElIeBjAsUFCOWXxCRi4D9+NTFGDFgUWl5Y2A5p34ym/fvaGm/Ino6nrtZw6kqz3SPlKiwXAh3AwYtYRAFpJ1DRmG0FoxbkyMwBFHBZJwLAkCbvCyKFwQZSs2kovLBertpVPHN5UviQFp6063Zlj2+YOTXKMNSWJ1SEoLENhDgbAQ2kA2E/g6JyQegLe1kO+y4QZ6VhDuBBaqkZK8nhf0giv70V7cCaL596ohHd0IPTtiUpNSekOk3LgRTesrifFNbB8F04cBvhRzM1QPEesb+PbeNECgDQClhLmFOJ+INaOcLNEFnjgvvrJFSeWrf/D/vuH2bDnWLIXu3vhmVHigjQJYwALl4VkBvIRgIzh5HNQAGMIoedlrGUgz+P7C+wZh/eroinLOsxkZjMzpsYNmjItCzn10Flir9OdvgfWrQDkKp4lhNICeXwoh4NiPIMh/BQY+yRkJtxV2GO6kosHEUKVCj2KXJ8QUQfB9P3ado6iS3VhPR6qa3RUTE6p+0zCdBZyPXjFh6HGhA1koQhzAcD44wK8SOANpFFgaSzPgcErkCvsg9yAywHIHsfZFiVy0BJ+jLTWxjmgQlwZjPqEoLmeXGc3Kuxk3HFwCGRxQJQGhMrF5jqDjBnO8WVMhoinIKjCPIsQw3pCjaJaGSVGchnGX9QiHgpsOOg5dBP70LQqQ0bm58tFy40QQZtJ/4JgjkE5yMslw2C8m3ysAWAF82z8Dq1mxp58BVBWsW/ReA5jMUsGTF4slaIf4f9GO4RF62Ogry/yZkpZKuuZnOghhOMPuLMGvbXQ7CPkduyFABS1CMNQJjQOkB/wPS0sedgIBiOf2I8kD6NH3kBDKYXazgfPHJrbwLoHagRBX1c56OmYTJSny5FG6xIZgmcTeJYBAAcMe8mBMUXUqcmzYew0gOcNy2DgMuYs4mNBcR3aF05Je40bpdfzGeNu7RbI7VC97SZTGt5YaORoTIYg7QB0YARqODbCNAHUKsLJFKK5L2PdhlkmDRnMFtaXgDiL92ZQrN13Zabp9Mnc6MBATIQNryk4e6PWdtQxqBmn2eJC2MQly9UgC66xCjOvQcFNLboVdGhCOBdFdCM8dBAGpALXQaWs0NCQ/0pqsKxWS1KKa9SAxW1wA7XohugcfIty+SVqWtZk7W1GzPDoPOg4rZknAWJCVwXlU4QbBx7uw7MAsplwGwNwCag21GsiErqucFmgZuukxCXwxtQz3ZfT958/kqFzn88ELx5fxW0TIkgKhwzFs2Gov0bfn8RnHsqGI4ougyiGHNcAMGXyawBNBPD+J26oSwVZ/TmSaBLGjRswNKIYb2tOaXBwEGcq49mXXsmz4+eRX5QEyBOF06Wy3Flc5ZHEhc+ms37rolulb4vtJdEifVi3GzkFkWkijNSQrahgRWxrtmzPZfn49Cm0ScRyXf9OE6NTNXoZvWx+vnRRlwWWowHEIz7/zveju31RVdpxDgK8FaCd+YJ8wFUrqkbZdRLaibkVvvV3P9S2gZuevNGXty1uEmzsCS6Otb333dgj5uJY/ynK/ejvZt20MXPk33i6SfXOrzFwd3ect5gTO2//T1c5CO4n6FbtfwEFrR3m6cbijgAAAABJRU5ErkJggg==";

var bgYellow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAvCAYAAABUiRJEAAAAAXNSR0IArs4c6QAAEIZJREFUaAXVmul3VdUZh/c+uQmEAEGBgBFlEmupYj+46twuV1fbtbSf/Xvy9/RTP7hs7XKVWoeqhVpaJxwYJAQhjEnIRO7ZfZ733BtTGhIN0NoN556z99nDO/7ed++TnP4PSvlN6kkfp5JHUt0ltxxJvWkmbUyTaTr1p3Z+IS10333be/62He9mP5jrS/tg4Yk0AUHl5rXKYZjcmO5POU2k+TSX/pCupp/A/LZ0iL430mw6mzakq/kJnr9D+a8wDzd5Oaa6dJb30uMw9hhs/xPWxtIUQniRp04p76bNqQWjdapomuF3lLdt2H+EesYu5hg7li6lS/lX6Xp33Gr31modbud9aGxd2olex8qJNJdfTu2bBVHeSpsgfm/KlcwfTP31F2ld+gfrHnFtzHsb7VthvCdoqbCBkn6c1tPSRhCZf21G5PQAvSz/e+ZlElPczu8wBG1Oe1Jd/kptPl0Ouz6bzgWp69JT3GW8n7cYSPXD1Kqnymvpk3QNM67TLlq30CeG8VvQ/L20r6f9NLV53mXuPQhhS3k1nU8vpvmVLC3W5eeuaD4Aah/amIegXkitQ7vrIW47JI9Rn8PHW0DVBG+fSaXaAfntYCwxIlWH0r31LJp8AxonebeJt5m+PdFHK8j2wwoyIsqAne976Lc9HUivpZPpW5j/bTMfGj4CIzXmrTZaeOw8gFTSo5D3IAQOQtZF6lsgfpA+E7Tpu9vQ9V7a9e0Z7pp1xd1/A4w5SP0k9wEYk+293DVzx09HryoN0dbm3Tg9WrxT0INYXB90Ta+m/dtmPr2KR6f0Ixbuh9khiDraYfpZSNlM/WoQlejXaGw3bWOMmeUa5JpIpe5JVaXHGsoaw04VAqifpjbEu+Fo7anP8v5NevUx9zruDbuOqPlX8U/X6cctXkVAS0CTcf9R1sy8Gl8i2W3MPM/ysyy9jWsD9RqSQOHqHh5l8jrtaq6Paz31Pt5v4fkG13WeFaJtsuTzBsbu4u58m1IpAF2Fb9cH6DNO+zSsWhxjER90hRbtg+l9rGaV0gxfpdNyrxcZnwp/OwoBmu0N7pIyzXWaC+HWPgtKvmtD4AJ30hK8M+GvJQQBQtczzdWZQ1hLgd8mL8raGC4ePIIwhphHy5nmLtIv0LtxGVGhna7wbtUSzDvzzT2Xa7u5j3XDV36SCLsQzGp0AzTLqKb9YZCUqkHqmvRCEKpWM0Q3jNNMTcCTiVzbT2vQhPt5nkfb73JXiJtpw5K4O4dA2tCuZQmtFTMsoIZ11FctwfyiFpd0t00BlBEmpHSFIZLbFohuu8+H0XBNiNEcZagJbzthZ5S6gKbG7qPdLE0LUa/CmGHsXuqYOEBZmKdUG2nvuqOWc5E+WgnPBcEWwme1lz6Pcm3i2shMw/Q5yPM9zkB9Lo1wX6V0F1m2WwiAKcubTIpWyuudBOIgtX1pY3kbCc8DWBtAdaVdBC+01g7CdkCI4W0SovTPXTCGqdZa2Tjt6raXtn3U59D42VQDcgpK3ev3JV1GaGr5gYbxcB8EWe6jfQCLcJZR5tlB/UCqCY85Ik0rvYVQnmPtFYqErFhC40cwP1kQoWdgUz/ficb6YLgnQtj9EGzMnYVgBfoA2lFbgFR9nvbLXEMQaLYGoNWXYf5LxlKrnmbmruY19SaTC+bL/cyhq9iGoPLX3DVp4/xVBGmSM8WMk7Rc5y6Nl/idZNTn4Y403KqsqHkHhfZJTXnsQXe9GNoATzOQK4iplWEYGaZtW2iuMXn9U+SVGZHdd6K8Jo5Gqxupqu+B2K9g4E/cd/KOPAAr0CEaIToOgQV+GCmkgTlAfdtS1tW0tDHe6UQXoEGj19x76V2pOOmnvmxZkfnQ+ghTN0UflaBeyJSJy7B/BT1AULUbhGBzUuibFYqJjWSA4IQrCTcElrKJu7k547GMCjNdSMchWfNUWIY2GQbIiijuejIrkmvu1nUHNSzCm0eIK40TNUDpmwWUs5NYP7FSrF+R+ZDaCFN/UyYAt2mInYWUARZX8qch8hdcEohJF+9cWXNVE19zCVSmsMRr3onqpWM1FRprR4YGs/Wb8PkSfRuAa/rqEmrdkOdlZECwEfdJqurPqF1B6+uYxx2fxm8C1IeIdRHHLluU4HcqcWhwDqbVVgti2KgANK/D7GcYGQBFPM5ZTbvN1EwPcO2mvp56m8Vck9BUCH/VHtoPQbgbFTVuCPS91qYlqJzuXQtQ0wKr77GisoveWksK3Wv2st6YvqLayEbnlmFvRc3HpMv8dLamcfDAlpTU1DAF+CSzuSDeUSxazPS6oUwL0iWI2wjFEgIBBFO9m5o4sR2NiviNe4VvK0BMWBdqkNx+uBPtDbjO0+4Yc4sW1ACMkTHO87Sd1ad4t6z2WwRzzcj/S82b/k2JGP4G8uTkZOkBQ/d9LLkuQAdGa315P1MJhDKocGXW2K/G3Hy4iZFgLAHTzVkA7KVunNdVuNseLqKlON7trrFB7U/zbHtnM8SOUJzIhL2SjkGpeYFru6d01z+IgqSgnZ8IAfOqKS3gcFmmux0ibXmaxftSLwcLNROAtI2wGCiJbjcFMgHRTczXNKt1iW2STfP6xlTVioxMcpfRB2HU2LyTMaPctQyZ06wVoBqbiHtjLdIqY15aABgAaFYAbl0xX/04baeY+yoru8kSNZ6Dcdc9igv8eakCVzf7l5GdW9ZpJniFk5jDPMvqCa7tEFGnh2l5lMmNvW5irqF9trQZBA507uedxXzb9QQ9mTIn8LBD18ASCprME9xNVTVrmTN9vUIfi1FCEarhBvR0k4g0IXg3Qg8hgHkY1m1wheoH3Me5oKBuCYA8LB50rM48I9HTdaaYST8HqPqZeIG6xKv1hihzMkyykhGljFkW8nLCXgkBaC2arGbvs6BkOHTnpxYRmFrkKlnGAb7iIYXvBDzJdw2LkUCLEhgRcnmYfgKhsf8zph6CUeeVxotg0Se8fxvxzuJ4M0vde3XmR/DKF0htPSqeRAALAS47SG/Nq86HPnJFRodQmn02m48ALbehMqt/yoA+b6bW3L/xYRGeyJAv8U6d2kfixQnpc1MkowKe+YBtjrGPWIGLGT2gLJKj+hztYgoHHvWF6F+nPfT6uOuytNHFLGmVkkdYhNIZeINBZ8mb74PE9ZAwzCLm2GiAnVsVWtVXMXXCnj5cyjB1/ZqhYSkasUjtXcEY872L1oZILcftqjnCVur202U038u0aW3QnU/Dwj3UFew5LtyoPMT9A67jXM1IccVz3slAfZobxpkUzXzH4qDyHIu9k/ZDwn0s7pHVYbI1AWYfax5gSs1yjEsDB8yCOc3ZWC8zEiy4eT6nsPRRNSiC20/C7dsIpDmRFfXFCpWhYOiXTaqwMHN+3SzmPcPdzZX9fHYfcRWRaT1R5MGH78x8M5xfdafhzafPYFXfND8HycNnNVHP4QQ72TUOqzk17LMnP2xM0HojKLfCMBDmrNmbLygE+ygKmVZYtmsZUzC9g2dSZlyvmQca8hecEZtBepqjkDMfQo4J2EtNnvYoa2P+MFryIMG01E3tNP/Wx24KiZJupnwIovRDNaqZiux7ueuLZn4mHgKfGsQvM8yAxbnWXNF2/il329S2c2hd5u8Cald4or4RBgEWhGN2WX8edfcO5gsLfMVRy7f4krNoCkz67csbEDVHTj/LtvEJXOCPcZLzAQJ5g6WOdcDL+TQvgAdSBKOGcWtqF1QOATTon8vB2BVqS4kT/pI/4TL2e0ii5rUS59MCdBvNXNe4l4t/9V8Qz1e0KRyPt9zqrqjcNTGfAcH8fLrS/ThoHfI8eroEGYIWsTmrUYAoj1PX//Rftak5G8MVgO4BDaTBJZ/hSf83DwDV6095Ps2lcGRWR5N51zFJ0oq6J8NGBJ9t1xoMh4rLNW5ZVpTMLUfd9CI2DwP4oyfonqIlPjkFT3EAKcH6nxqXMS3AUCWiA4yYvMKIzDDMujmK9GNUrsnuKoTnJigAUTdRGApRDStQhbmV5dwcKWgVOsjMm7CNXdjQXnp9gUqmUZZrLpbbYh6uMjg/CBmbWFg8JeyxTBsQzDUWwNGSpzpNKBMUNV/WzCeIGRCvdYQg9F+mq0f5lSYFIJyK/oQ5s8VIZBASESoSIXZ0ccwV7qMrKKCdjHONHlzoae5SOJz66g+xm99S0y0Wy20xD4puhsTnWYD8On3K4iKvJ6wCk7n2KILglKd6CcWzY4s8nSSn/hj+iAwccUWCQm6uEIwIzdl+50xAK6mJApUaH+Ad0SJrSWhQlwrTdyOEu1QPEm7noMfo4+ZmOOas67cYe8q+KisAkIplzczzIdHPSHtgehQjPAnZk52t7mW+qWzBSCcwt3lWeJJ1RPBRBLCV9c9C7EmY4hwAazHWC1Kaa7Pjc0/+NTVDp2FNYPNdY7Lh04Wcgn1AlLKFm76ta4kDw4wHF2rdibVgvKSPcKxrSxnnHZOuocSx9VbMuUq7EcAcGD8h44tT9eCDC+GjMBtgZe5+BrmbqQlefqwQBKXANFazV2seXcmUJ0TU+UyV44xA33aE787ApxgBw4EF3LO7RjNFreIEc17gybX0/ccYN9QFZ7VPe5S1ad69WA3AeEraYqGf8YTDxsTvwEwL8OvhBCA0ztFz7OMBr5KMw8dpV9smKAoCbbEtTZzXN8rgcNP31R7quEr9d+4IinqzKdISvmAsqJ73cG+iS4kESKF6LN7PW5+fZKRfcK+psPjAgsS65r825s3HZvgg6XfXq4S9F1mAEmb1TJphE+TmRZBSE4Y1Mz3N9gjXDASpYU9k/eqiINjKQm7hjxIWSEd7SZvrYPo4bW6OMPv6FALA3Gv7EyI5xPBANOVPqCOIwglxeg+Dn2K8n7Nc/X3e9TLDNg67tAQjAy94Q1kT8x0T/8bMnalTkHDzNbYHLPCTdeEbXIWLmLvPovW++GojuCkQGbvIM3hQG8LGYUMmhmif5P4V9R20i+SuxzbYjxhxXo8l5PMIaRyhENfzRwjAI68LCFCL3M+Ya9yboy1jwE1lTczfNMfNVbcUX6IB9337eUY7lUI4SdsEetBplP11epjqXoTUY2ELo7jA3njnHv1vjNUVFJzH1Pg2LQl7848XuqmvH0cyVuLnslnAzV59zUabJ9dRbAu0mReE5qOdnzvOfCD+EQhpwabH036NaZNzu5Z/UXUDwFIbpp8zsI1AliYfWM5pxDPGu4INiN6XGGs0wME8pal+iSBJofn2lwqCybrOEWzmFGLxOH0zzPbwTwBUeM1f8yyT6t5x5lnsm73/CCHm11hBk4FtgZWvspjwVtjA/HJ/O7PUpXDM85wdHENrB8Lo4+CiPhqCiG9+RIIaC8J9PJsr78B6L7YzE/v7NiJW63y7AUeuh3tJ3mK5K8wvzs5D5sQUovyuMtZhLOVVPiB2xwtM5HMkMTCj+fqZbAF3aAFfpr8VwOgVewFGYRughTm+Wf0UbIsnbqRNbQOUo975WVOcXzrBis8HUysAUF/2IHQt5Slc4zQm/XssaBwr+F2EORH+BG5wnFkjZTV8aUm0nsrPAnqvkHj1pQtYmn/31UmI/p0Aoeeul26MvVMLBaP+LdBWsjnDZZXOY2GNlu/UIt/XeWTeA9Uy0vnDiO8roXeDrg7TG/2GEFZwNxb5vs8ZFoD210rnvwB30rb2N6C09gAAAABJRU5ErkJggg==";

var bgMelrose = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAABfFJREFUSA21lklvXEUQx//93iyeGdtjO14yzkYICUEJAaRIiEOChMQlV+QjcCGKkFAO+QT+BEGycvEpCsf4xoEDB8QBYQmBAjiWCNhZHCd2jD32eJ/lveZXz2MrIc5ygNb0dHd19b+Wrqp+0v/QBgZ8+DxY97zNZ+1dvuxzhYIaMzOKBgddLHk3PKz29YycX1S10K2e6pIeXbzoqrthpHYjPk4bHvZ5wBvQ4vZ2pS9dchvpojpdSh+VDul76GNXrqkL044UYnl1wuiVynUoHBryCwhefhzP5s8Q6t3goNLj44qUVWnfIfVHoTawafHLq34hG+osLjoapOSvXPMPQ6eSh9OFalOsYirQIieDTFuC/5TQXdy75SqX1X5fVTnM6TT+24OC6cDpvo/VyvyYnHoYIy9NOKcqCoXwzQbwMi6wrjQCrQabunnhgqvDu9OeshQLwyCjN+JAPsjpdUD3O4+9TnXmBxnnOV3BkRnvlAu8XsGdBQVqw4LvmFdRrGbWoGQmCNTHdHpHotG3FhxvNoRG5VjjLlIVF5Vjpym2CljT8F7IUK+xcqKR0ExwoBpKLNPfQ8EDLlAX+53GX6tpqQm9M2Cpd0NDypTLPiqV5KppdWRTypm7AD0UxIjecmMJDSsIrdFLaFkHNMeYZp1nLDKa9ctYuIGy6yixlErpqfRBqFQuyyOwYCFfSOkoACdxYxGA19g2ty5jgVnYA30Uc+cAfId1B+tu5jl4NjlnKVLAxas+0BJ8Lk5rH7QKfac13UvOZZIDqlX1AJA0LnofQANthamb8Tjd7rgX0DkUus/arOjDI/0I3APNAu6woSNwmStydq+kXdpo2w3eJ5sxBC06B+C5BAiXAZpHWAecMRY/YD7O/iTrD1gfZ11ivkIvw7uK27+m32O+TgpViJzyyrxmLcfhUcpK1pkzSuHiulWXRkNZ1FpD4O+AmQtLdncIcQhwiTVe7xKhRQKIUqAWeGP2M/CbRRYDp/BUP3FxJw61SA7vzXcnXviZPQUnTsjbnfb0KE+i7wnalAfMXGmhbvkVobFpCKY26Xn2itAOQNigL9PX2CXJVGQ/Qz/M/G0U7EPwq7j4LddQTIXKssfRpFGBripLtneg6l6On2HnaFOwad8JiIEZKGRW0igeSLE4y7yF8RGj5aelT4BAS7FR1j8wZjFk7LOP3YQdbwaS8+PfqE55iXBHikD5DcZJcycABlJHiQ0AzOI1E4DUTWgm3MZVE8hqnXOLieWiFDqVwVzE3z+RAtvlkMButpERF5WnVAmrmq1EugHAHQOkW6XJAZYCzCxZY1wGMMfePfpN1jPwr7Jn0XsKJYx/DNf+FaI0pXD180/cHHtJ2xFqK6pR/fx5N70RkJtxUrpuQJ5CwApAYCZ3nMYDVYSY1RaxE6z/ZkQ2a5cUEN4AtSOYn45QTvub9wnLThlM5skfr0hHd6Q+ys5sI9YvCBtnA48ToVZDXRLVS4DOQ2xwd0v0P1jPwjOHApOmEOes7rZygXs592GqVfu2H/ekIiXS+KMctvFsnWyQY/NTmqdK1XwueZ4sqIoA3wLQgsHysof1Iusu5hZsm/CYciE0tlh7njpmKLIe1hPPQP7XexoUla7VdTvTSIp0TB3pBaQXrVcBmMFX01gVcictjA+hz0O31LGXxwKtC54G40HGPK75E4H2WLTXW1QbGUm8tf3KJAroi09VXrivWd6/dQpFw6d4nUh7Dlbihr7lyDRCVjFnzDc0GtUph2Z9rIcgrJhAxh4Uugv9x2hNvyZn4iTgNDCwJe8J95ojCCb4t1qwodsRNRmhs0YB8S5DvV7RvFUwPl+yrlO3C4FOQ8/TD9LXCUJ7zG9FWeXSYRJ0GZ6iDiwts5/cl427NrOYoJzgG6jMHa/Y5wsVLMQLta0D3lJqk4+ycZfTZBTrrn26EDzHonXdCvlkqfJ4ZCkr1YplA+q/TBsc9IH1F/Fu8wx/5Q8OX/Vv2sPRjFZ3feA6ig4GuN8CbOvvRYAvu98UnChoMfGy5/4LPvuSfK5n/gFEf5dUj5TSQwAAAABJRU5ErkJggg==";

var css$11 = ".Icon-module_withBackground__EomNm {\n  position: relative;\n  z-index: 2;\n}\n\n.Icon-module_background__pjquz {\n  position: absolute;\n  z-index: 1;\n  height: 20.8px;\n  height: 20.8px;\n  height: 1.3rem;\n  margin-top: -0.65em;\n  top: 50%;\n}\n\n.Icon-module_withBackground__EomNm.Icon-module_left__2QZ0s {\n  margin-left: 10px;\n}\n";
var s$11 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","withBackground":"Icon-module_withBackground__EomNm","background":"Icon-module_background__pjquz","left":"Icon-module_left__2QZ0s"};
styleInject(css$11);

var _BackgroundImages;
var Backgrounds = {
  none: 'none',
  white: 'white',
  grey: 'grey',
  melrose: 'melrose',
  yellow: 'yellow',
  blue: 'blue'
};
var BackgroundImages = (_BackgroundImages = {}, _defineProperty(_BackgroundImages, Backgrounds.none, undefined), _defineProperty(_BackgroundImages, Backgrounds.white, bgWhite), _defineProperty(_BackgroundImages, Backgrounds.grey, bgGrey), _defineProperty(_BackgroundImages, Backgrounds.yellow, bgYellow), _defineProperty(_BackgroundImages, Backgrounds.blue, bgBlue), _defineProperty(_BackgroundImages, Backgrounds.melrose, bgMelrose), _BackgroundImages);
var Positions = ['left', 'right', 'top', 'bottom'];

var IconComponent$1 = function IconComponent(_ref) {
  var src = _ref.src,
      name = _ref.name,
      children = _ref.children,
      className = _ref.className;

  if (src) {
    return React__default.createElement("img", {
      src: src,
      alt: "icon",
      className: className
    });
  }

  if (name) {
    return React__default.createElement("i", {
      className: ["icon icon-".concat(name), className].join(' ')
    });
  }

  return children;
};

IconComponent$1.defaultProps = {
  src: undefined,
  name: undefined,
  children: undefined,
  className: null
};
IconComponent$1.propTypes = {
  src: PropTypes$1.string,
  name: PropTypes$1.string,
  className: PropTypes$1.string,
  separator: PropTypes$1.string,
  children: PropTypes$1.oneOfType([PropTypes$1.arrayOf(PropTypes$1.node), PropTypes$1.node]).isRequired
};

var Icon = function Icon(_ref2) {
  var variant = _ref2.variant,
      position = _ref2.position,
      src = _ref2.src,
      name = _ref2.name,
      children = _ref2.children,
      backgroundClassName = _ref2.backgroundClassName,
      Component = _ref2.IconComponent,
      iconClassName = _ref2.iconClassName,
      containerProps = _objectWithoutProperties(_ref2, ["variant", "position", "src", "name", "children", "backgroundClassName", "IconComponent", "iconClassName"]);

  var hasBackground = typeof BackgroundImages[variant] !== 'undefined';
  return React__default.createElement("span", containerProps, hasBackground ? React__default.createElement("img", {
    src: BackgroundImages[variant],
    alt: "icon background",
    className: [s$11.background, backgroundClassName].join(' ')
  }) : null, React__default.createElement(Component, {
    src: src,
    name: name,
    className: [hasBackground ? s$11.withBackground : undefined, position ? s$11[position] : undefined, iconClassName].join(' ')
  }, children));
};

Icon.defaultProps = {
  src: undefined,
  name: undefined,
  className: undefined,
  backgroundClassName: undefined,
  variant: Backgrounds.none,
  position: null,
  children: null,
  IconComponent: IconComponent$1,
  iconClassName: undefined
};
Icon.propTypes = {
  src: PropTypes$1.string,
  name: PropTypes$1.string,
  className: PropTypes$1.string,
  backgroundClassName: PropTypes$1.string,
  variant: PropTypes$1.oneOf(Object.keys(Backgrounds)),
  position: PropTypes$1.oneOfType([null, PropTypes$1.oneOf(Positions)]),
  children: PropTypes$1.arrayOf(PropTypes$1.element),
  IconComponent: PropTypes$1.func,
  iconClassName: PropTypes$1.string
};

var css$12 = ".DateTimePicker-module_calendar__1m3vk {\n  position: relative;\n  width: 100%;\n  height: 300px;\n}\n\n.DateTimePicker-module_calendarArrow__SvtwN {\n  display: none;\n}\n\n.DateTimePicker-module_datePickerPopper__2V2oe {\n  -webkit-transform: none !important;\n          transform: none !important;\n  width: 100%;\n  margin-top: 0 !important;\n}\n\n.DateTimePicker-module_hidden__OvFBm {\n  display: none !important;\n}\n\n.DateTimePicker-module_pickerSuggestions__38iqg {\n  width: 610px !important;\n  margin-left: -300px;\n  left: 50%;\n  height: 265px !important\n}\n\n.DateTimePicker-module_pickerSuggestions__38iqg:before {\n  display: none;\n}\n\n.DateTimePicker-module_suggestionsArrow__2RcKh {\n  margin-left: -9px;\n}\n\n.DateTimePicker-module_picker__3d7nO {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP {\n  background: none;\n  padding-left: 40px;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.datePickerInput::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.datePickerInput::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP::placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_fixedWidthDateInput__3lrKo {\n  min-width: 160px;\n  width: 160px;\n  max-width: 160px;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU {\n  border: none !important;\n  border-radius: 8px;\n  max-width: 100px;\n  padding-left: 35px;\n  margin-right: 1px;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.timePickerInput::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.timePickerInput::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU::placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_timePickerInputContainer__ROeTv::before {\n  background-color: rgba(191, 196, 212, .52);\n  content: '';\n  height: 20px;\n  margin-top: -10px;\n  position: absolute;\n  top: 50%;\n  width: 1px;\n}\n\n.DateTimePicker-module_timeSuggestions__3aCiQ {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: relative;\n}\n\n.DateTimePicker-module_timeSuggestionsContainer__3Pe8K:nth-child(1) {\n  width: 300px;\n  min-width: 300px;\n}\n\n.DateTimePicker-module_timeSuggestionsContainer__3Pe8K {\n  width: 100%;\n}\n\n.DateTimePicker-module_inputIcon__178Nw {\n  font-size: 19.2px;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  left: 10px;\n}\n\n.DateTimePicker-module_inputContainer__1FIAJ {\n  padding: 0;\n}\n\n.DateTimePicker-module_splitInputContainer__1fsjs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 50%\n}\n\n.DateTimePicker-module_splitInputContainer__1fsjs:first-child {\n  border-right: 1px solid rgba(191, 196, 212, .52);\n}\n\n.DateTimePicker-module_month__2AwNj {\n  color: #163457;\n}\n\n.DateTimePicker-module_hr__1p2EJ {\n  height: 85%;\n  width: 1px;\n  position: absolute;\n  left: 300px;\n  background-color: rgba(191, 196, 212, .52);\n  top: 7.5%;\n}\n";
var s$12 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","calendar":"DateTimePicker-module_calendar__1m3vk","calendarArrow":"DateTimePicker-module_calendarArrow__SvtwN","datePickerPopper":"DateTimePicker-module_datePickerPopper__2V2oe","hidden":"DateTimePicker-module_hidden__OvFBm","pickerSuggestions":"DateTimePicker-module_pickerSuggestions__38iqg","suggestionsArrow":"DateTimePicker-module_suggestionsArrow__2RcKh","picker":"DateTimePicker-module_picker__3d7nO","datePickerInput":"DateTimePicker-module_datePickerInput__1JwcP","fixedWidthDateInput":"DateTimePicker-module_fixedWidthDateInput__3lrKo","timePickerInput":"DateTimePicker-module_timePickerInput__1vkhU","timePickerInputContainer":"DateTimePicker-module_timePickerInputContainer__ROeTv","timeSuggestions":"DateTimePicker-module_timeSuggestions__3aCiQ","timeSuggestionsContainer":"DateTimePicker-module_timeSuggestionsContainer__3Pe8K","inputIcon":"DateTimePicker-module_inputIcon__178Nw","inputContainer":"DateTimePicker-module_inputContainer__1FIAJ","splitInputContainer":"DateTimePicker-module_splitInputContainer__1fsjs","month":"DateTimePicker-module_month__2AwNj","hr":"DateTimePicker-module_hr__1p2EJ"};
styleInject(css$12);

var TextsType$7 = PropTypes$1.shape({
  startPlaceholder: PropTypes$1.string,
  endPlaceholder: PropTypes$1.string,
  timePlaceholder: PropTypes$1.string,
  fromTimeTitle: PropTypes$1.string,
  fromTimeFirstDescription: PropTypes$1.string,
  fromTimeSecondDescription: PropTypes$1.string,
  toTimeTitle: PropTypes$1.string,
  toTimeFirstDescription: PropTypes$1.string,
  toTimeSecondDescription: PropTypes$1.string
});
var DefaultTexts$7 = {
  startPlaceholder: 'Départ',
  endPlaceholder: 'Retour',
  timePlaceholder: 'Heure',
  fromTimeTitle: 'Départ',
  fromTimeFirstDescription: 'Heure d\'arrivée',
  fromTimeSecondDescription: 'de votre avion',
  toTimeTitle: 'Retour',
  toTimeFirstDescription: 'Heure d\'arrivée',
  toTimeSecondDescription: 'au dépose minute'
};

var css$13 = ".TimeSuggestions-module_container__1FI_D {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.TimeSuggestions-module_timeContainer__cmXVx {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.TimeSuggestions-module_timeDescription__1KSio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 70%;\n  text-align: right;\n  padding-right: 15px;\n  padding-top: 20px;\n}\n\n.TimeSuggestions-module_timeDescriptionTitle__1CASr {\n  font-weight: bold;\n}\n";
var s$13 = {"container":"TimeSuggestions-module_container__1FI_D","timeContainer":"TimeSuggestions-module_timeContainer__cmXVx","timeDescription":"TimeSuggestions-module_timeDescription__1KSio","timeDescriptionTitle":"TimeSuggestions-module_timeDescriptionTitle__1CASr"};
styleInject(css$13);

var TimeSuggestions = function TimeSuggestions(_ref) {
  var className = _ref.className,
      texts = _ref.texts,
      onSelect = _ref.onSelect,
      startMinutes = _ref.startMinutes,
      startHour = _ref.startHour,
      endMinutes = _ref.endMinutes,
      endHour = _ref.endHour,
      containerClassName = _ref.containerClassName,
      fromHourRange = _ref.fromHourRange,
      fromMinuteRange = _ref.fromMinuteRange,
      toMinuteRange = _ref.toMinuteRange,
      toHourRange = _ref.toHourRange;

  var onSelectStartTime = function onSelectStartTime(timeUnits, value) {
    return onSelect(TimeSuggestions.startTime, timeUnits, value);
  };

  var onSelectEndTime = function onSelectEndTime(timeUnits, value) {
    return onSelect(TimeSuggestions.endTime, timeUnits, value);
  };

  var _fromMinuteRange = _slicedToArray(fromMinuteRange, 2),
      startFromMinuteRange = _fromMinuteRange[0],
      endFromMinuteRange = _fromMinuteRange[1];

  var _fromHourRange = _slicedToArray(fromHourRange, 2),
      startFromHourRange = _fromHourRange[0],
      endFromHourRange = _fromHourRange[1];

  var _toMinuteRange = _slicedToArray(toMinuteRange, 2),
      startToMinuteRange = _toMinuteRange[0],
      endToMinuteRange = _toMinuteRange[1];

  var _toHourRange = _slicedToArray(toHourRange, 2),
      startToHourRange = _toHourRange[0],
      endToHourRange = _toHourRange[1];

  return React__default.createElement("div", {
    className: [s$13.container, className].join(' ')
  }, React__default.createElement("div", {
    className: [s$13.timeContainer, containerClassName].join(' ')
  }, React__default.createElement("div", {
    className: s$13.timeDescription
  }, React__default.createElement("span", {
    className: s$13.timeDescriptionTitle
  }, texts.fromTimeTitle), React__default.createElement("span", null, texts.fromTimeFirstDescription), React__default.createElement("span", null, texts.fromTimeSecondDescription)), React__default.createElement(TimeRange, {
    onSelect: onSelectStartTime,
    hour: startHour,
    minutes: startMinutes,
    minutesInterval: 5,
    startMinute: startFromMinuteRange,
    endMinute: endFromMinuteRange,
    startHour: startFromHourRange,
    endHour: endFromHourRange
  })), React__default.createElement("div", {
    className: [s$13.timeContainer, containerClassName].join(' ')
  }, React__default.createElement("div", {
    className: s$13.timeDescription
  }, React__default.createElement("span", {
    className: s$13.timeDescriptionTitle
  }, texts.toTimeTitle), React__default.createElement("span", null, texts.toTimeFirstDescription), React__default.createElement("span", null, texts.toTimeSecondDescription)), React__default.createElement(TimeRange, {
    onSelect: onSelectEndTime,
    hour: endHour,
    minutes: endMinutes,
    minutesInterval: 5,
    startMinute: startToMinuteRange,
    endMinute: endToMinuteRange,
    startHour: startToHourRange,
    endHour: endToHourRange
  })));
};

TimeSuggestions.defaultProps = {
  className: undefined,
  onSelect: function onSelect() {
    return null;
  },
  texts: DefaultTexts$7,
  startMinutes: undefined,
  startHour: undefined,
  endMinutes: undefined,
  endHour: undefined,
  containerClassName: undefined,
  fromHourRange: [7, 24],
  fromMinuteRange: [0, 60],
  toHourRange: [7, 24],
  toMinuteRange: [0, 60]
};
TimeSuggestions.propTypes = {
  className: PropTypes$1.string,
  containerClassName: PropTypes$1.string,
  onSelect: PropTypes$1.func,
  startMinutes: PropTypes$1.string,
  startHour: PropTypes$1.string,
  endMinutes: PropTypes$1.string,
  endHour: PropTypes$1.string,
  texts: TextsType$7,
  fromHourRange: PropTypes$1.arrayOf(PropTypes$1.number),
  toHourRange: PropTypes$1.arrayOf(PropTypes$1.number),
  fromMinuteRange: PropTypes$1.arrayOf(PropTypes$1.number),
  toMinuteRange: PropTypes$1.arrayOf(PropTypes$1.number)
};
TimeSuggestions.startTime = 'startTime';
TimeSuggestions.endTime = 'endTime';

var iconCalendar = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%2015%2015%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Ecalendar%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22filters%22%20transform%3D%22translate%28-526.000000%2C%20-18.000000%29%22%20fill%3D%22%23BFC4D4%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%281.000000%2C%200.000000%29%22%20id%3D%22date%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28509.103631%2C%200.010000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22aller%22%20transform%3D%22translate%2816.000000%2C%2015.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M13.2633063%2C3.875%20L11.7457409%2C3.875%20L11.7457409%2C3.4375%20C11.7457409%2C3.195125%2011.5523597%2C3%2011.3121508%2C3%20C11.0719418%2C3%2010.8785607%2C3.196%2010.8785607%2C3.4375%20L10.8785607%2C3.875%20L3.94111888%2C3.875%20L3.94111888%2C3.4375%20C3.94111888%2C3.195125%203.74687051%2C3%203.50752877%2C3%20C3.26818703%2C3%203.07393866%2C3.196%203.07393866%2C3.4375%20L3.07393866%2C3.875%20L1.55637327%2C3.875%20C0.957151736%2C3.87675%200.474132353%2C4.364125%200.472397993%2C4.96875%20L0.472397993%2C15.90625%20C0.474132353%2C16.510875%200.957151736%2C16.99825%201.55637327%2C17%20L13.2633063%2C17%20C13.8625278%2C16.99825%2014.3455472%2C16.510875%2014.3472815%2C15.90625%20L14.3472815%2C4.96875%20C14.3455472%2C4.364125%2013.8625278%2C3.87675%2013.2633063%2C3.875%20Z%20M5.67547932%2C11.75%20L5.67547932%2C8.25%20L9.14420021%2C8.25%20L9.14420021%2C11.75%20L5.67547932%2C11.75%20Z%20M9.14420021%2C12.625%20L9.14420021%2C16.125%20L5.67547932%2C16.125%20L5.67547932%2C12.625%20L9.14420021%2C12.625%20Z%20M1.33957821%2C8.25%20L4.8082991%2C8.25%20L4.8082991%2C11.75%20L1.33957821%2C11.75%20L1.33957821%2C8.25%20Z%20M10.0113804%2C8.25%20L13.4801013%2C8.25%20L13.4801013%2C11.75%20L10.0113804%2C11.75%20L10.0113804%2C8.25%20Z%20M1.40288237%2C4.81475%20C1.44450702%2C4.7745%201.49653783%2C4.75%201.55637327%2C4.75%20L3.07393866%2C4.75%20L3.07393866%2C5.1875%20C3.07393866%2C5.429%203.26818703%2C5.625%203.50752877%2C5.625%20C3.74687051%2C5.625%203.94111888%2C5.429%203.94111888%2C5.1875%20L3.94111888%2C4.75%20L10.8785607%2C4.75%20L10.8785607%2C5.1875%20C10.8785607%2C5.429%2011.0719418%2C5.625%2011.3121508%2C5.625%20C11.5523597%2C5.625%2011.7457409%2C5.429%2011.7457409%2C5.1875%20L11.7457409%2C4.75%20L13.2633063%2C4.75%20C13.3231417%2C4.75%2013.3751725%2C4.773625%2013.4167972%2C4.81475%20C13.4566875%2C4.85675%2013.4801013%2C4.90925%2013.4801013%2C4.96875%20L13.4801013%2C7.375%20L1.33957821%2C7.375%20L1.33957821%2C4.96875%20C1.33957821%2C4.908375%201.36299208%2C4.85675%201.40288237%2C4.81475%20Z%20M1.40288237%2C16.061125%20C1.36299208%2C16.019125%201.33871103%2C15.966625%201.33871103%2C15.90625%20L1.33871103%2C12.625%20L4.80743192%2C12.625%20L4.80743192%2C16.125%20L1.55550609%2C16.125%20C1.49567065%2C16.125%201.44363984%2C16.101375%201.40288237%2C16.061125%20Z%20M13.4167972%2C16.061125%20C13.3751725%2C16.101375%2013.3231417%2C16.125%2013.2633063%2C16.125%20L10.0113804%2C16.125%20L10.0113804%2C12.625%20L13.4801013%2C12.625%20L13.4801013%2C15.90625%20C13.4801013%2C15.966625%2013.4566875%2C16.019125%2013.4167972%2C16.061125%20Z%22%20id%3D%22calendar%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$7 =
/*#__PURE__*/
React__default.createElement("g", {
  transform: "translate(1.396 1.01)",
  stroke: "#BFC4D4",
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("circle", {
  cx: 6.765,
  cy: 6.765,
  r: 6.765
}), React__default.createElement("path", {
  d: "M6.765 2.396v4.369-4.369zm2.947 6.57L6.765 6.764l2.947 2.2z",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));

var iconClock = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Eclock%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22filters%22%20transform%3D%22translate%28-883.000000%2C%20-18.000000%29%22%20stroke%3D%22%23BFC4D4%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%281.000000%2C%200.000000%29%22%20id%3D%22date%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28509.103631%2C%200.010000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22retour%22%20transform%3D%22translate%28237.396369%2C%2015.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22clock%22%20transform%3D%22translate%28136.896369%2C%204.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval%22%20cx%3D%226.76489258%22%20cy%3D%226.76489258%22%20r%3D%226.76489258%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M6.76489258%2C2.3962294%20L6.76489258%2C6.76489258%20L6.76489258%2C2.3962294%20Z%20M9.71221665%2C8.96526185%20L6.76489258%2C6.76489258%20L9.71221665%2C8.96526185%20Z%22%20id%3D%22Combined-Shape%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var now;

var DateTimePicker =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(DateTimePicker, _React$PureComponent);

  function DateTimePicker() {
    var _this;

    _classCallCheck(this, DateTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimePicker).call(this));

    _defineProperty(_assertThisInitialized(_this), "handleDateChange", function (_ref) {
      var startDate = _ref.startDate,
          datePickerEndDate = _ref.endDate;
      var _this$props = _this.props,
          onStartDateChange = _this$props.onStartDateChange,
          onEndDateChange = _this$props.onEndDateChange;
      var _this$state = _this.state,
          stateEndDate = _this$state.endDate,
          focusedDateInput = _this$state.focusedDateInput,
          visiblePicker = _this$state.visiblePicker;
      var endDate = datePickerEndDate;

      if (startDate && stateEndDate && stateEndDate.isBefore(startDate)) {
        endDate = undefined;
      }

      if (onStartDateChange) {
        onStartDateChange(startDate);
      }

      if (onEndDateChange) {
        onEndDateChange(endDate);
      }

      _this.setState({
        startDate: startDate,
        endDate: endDate,
        focusedDateInput: focusedDateInput === DateTimePicker.startDate && startDate ? DateTimePicker.endDate : DateTimePicker.startDate,
        visiblePicker: visiblePicker === DateTimePicker.datePicker && endDate && startDate ? DateTimePicker.timePicker : visiblePicker,
        showTimeInputs: !!(stateEndDate || endDate)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimeSelect", function (type, units, value) {
      var _unitsToStateVariable;

      var _this$props2 = _this.props,
          onStartTimeChange = _this$props2.onStartTimeChange,
          onEndTimeChange = _this$props2.onEndTimeChange;
      var unitsToStateVariable = (_unitsToStateVariable = {}, _defineProperty(_unitsToStateVariable, TimeRange.minutes, type === TimeSuggestions.startTime ? 'startMinutes' : 'endMinutes'), _defineProperty(_unitsToStateVariable, TimeRange.hour, type === TimeSuggestions.startTime ? 'startHour' : 'endHour'), _unitsToStateVariable);

      _this.setState(_defineProperty({}, unitsToStateVariable[units], value));

      if (type === TimeSuggestions.startTime) {
        onStartTimeChange(units, value);
      } else {
        onEndTimeChange(units, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isDayBlocked", function (day) {
      return day.startOf('day').isBefore(now.startOf('day'));
    });

    _defineProperty(_assertThisInitialized(_this), "isDayHighlighted", function (day) {
      var _this$state2 = _this.state,
          startDate = _this$state2.startDate,
          endDate = _this$state2.endDate;

      if (!startDate || !endDate) {
        return false;
      }

      return day.isBetween(startDate, endDate) && !day.isSame(startDate, 'day');
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimeFocus", function () {
      _this.ectorPicker.current.handleFocus();

      _this.setState({
        visiblePicker: DateTimePicker.timePicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocusChange", function (focusedDateInput) {
      _this.setState({
        focusedDateInput: focusedDateInput
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthElement", function (_ref2) {
      var month = _ref2.month;
      return React.createElement("div", {
        className: s$12.month
      }, month.format('MMMM YYYY'));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDateInputLeftElement", function (_ref3) {
      var className = _ref3.className,
          props = _objectWithoutProperties(_ref3, ["className"]);

      return React.createElement(Icon, _extends({}, props, {
        className: [s$12.inputIcon, className].join(' '),
        src: iconCalendar
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTimeInputLeftElement", function (_ref4) {
      var className = _ref4.className,
          props = _objectWithoutProperties(_ref4, ["className"]);

      return React.createElement(Icon, _extends({}, props, {
        className: [s$12.inputIcon, className].join(' '),
        src: iconClock
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderStartDateTimeInputComponent", function (_ref5) {
      var inputClassName = _ref5.className,
          inputProps = _objectWithoutProperties(_ref5, ["className"]);

      var _this$state3 = _this.state,
          startDate = _this$state3.startDate,
          showTimeInputs = _this$state3.showTimeInputs,
          startMinutes = _this$state3.startMinutes,
          startHour = _this$state3.startHour;
      var texts = _this.props.texts;
      return React.createElement("div", {
        className: s$12.splitInputContainer
      }, React.createElement(Input, _extends({}, inputProps, {
        onFocus: _this.handleStartDateFocus,
        className: [s$12.datePickerInput, showTimeInputs ? s$12.fixedWidthDateInput : undefined, inputClassName].join(' '),
        containerClassName: s$12.inputContainer,
        value: startDate ? startDate.format('ddd DD/MM/YYYY') : '',
        placeholder: texts.startPlaceholder,
        LeftComponent: _this.renderDateInputLeftElement
      })), showTimeInputs && React.createElement(Input, _extends({}, inputProps, {
        onFocus: _this.handleTimeFocus,
        containerClassName: s$12.timePickerInputContainer,
        className: [s$12.timePickerInput, inputClassName].join(' '),
        value: startHour ? "".concat(startHour, "h").concat(startMinutes || '') : '',
        placeholder: texts.timePlaceholder,
        LeftComponent: _this.renderTimeInputLeftElement
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEndDateTimeInputComponent", function (_ref6) {
      var inputClassName = _ref6.className,
          inputProps = _objectWithoutProperties(_ref6, ["className"]);

      var _this$state4 = _this.state,
          endDate = _this$state4.endDate,
          showTimeInputs = _this$state4.showTimeInputs,
          endHour = _this$state4.endHour,
          endMinutes = _this$state4.endMinutes;
      var texts = _this.props.texts;
      return React.createElement("div", {
        className: s$12.splitInputContainer
      }, React.createElement(Input, _extends({}, inputProps, {
        className: [s$12.datePickerInput, showTimeInputs ? s$12.fixedWidthDateInput : undefined, inputClassName].join(' '),
        containerClassName: s$12.inputContainer,
        onFocus: _this.handleEndDateFocus,
        value: endDate ? endDate.format('ddd DD/MM/YYYY') : '',
        placeholder: texts.endPlaceholder,
        LeftComponent: _this.renderDateInputLeftElement
      })), showTimeInputs && React.createElement(Input, _extends({}, inputProps, {
        containerClassName: s$12.timePickerInputContainer,
        className: [s$12.timePickerInput, inputClassName].join(' '),
        onFocus: _this.handleTimeFocus,
        value: endHour ? "".concat(endHour, "h").concat(endMinutes || '') : '',
        placeholder: texts.timePlaceholder,
        LeftComponent: _this.renderTimeInputLeftElement
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderPickerSuggestionsArrow", function (_ref7) {
      var className = _ref7.className,
          props = _objectWithoutProperties(_ref7, ["className"]);

      return React.createElement(Arrow, _extends({}, props, {
        className: [s$12.suggestionsArrow, className].join(' ')
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsComponent", function (_ref8) {
      var visible = _ref8.visible,
          className = _ref8.className,
          rest = _objectWithoutProperties(_ref8, ["visible", "className"]);

      var _this$state5 = _this.state,
          visiblePicker = _this$state5.visiblePicker,
          startDate = _this$state5.startDate,
          endDate = _this$state5.endDate,
          focusedDateInput = _this$state5.focusedDateInput,
          startHour = _this$state5.startHour,
          startMinutes = _this$state5.startMinutes,
          endHour = _this$state5.endHour,
          endMinutes = _this$state5.endMinutes;
      var _this$props3 = _this.props,
          texts = _this$props3.texts,
          fromHourRange = _this$props3.fromHourRange,
          toHourRange = _this$props3.toHourRange;
      return React.createElement(PickerSuggestions, _extends({}, rest, {
        visible: visible,
        className: [s$12.pickerSuggestions, className].join(' '),
        ArrowComponent: _this.renderPickerSuggestionsArrow
      }), visible && visiblePicker === DateTimePicker.datePicker && React.createElement(reactDates.DayPickerRangeController, {
        verticalBorderSpacing: 1,
        horizontalMonthPadding: 25,
        firstDayOfWeek: 1,
        daySize: 35,
        startDate: startDate,
        endDate: endDate,
        onDatesChange: _this.handleDateChange,
        hideKeyboardShortcutsPanel: true,
        numberOfMonths: 2,
        transitionDuration: 0,
        minimumNights: 0,
        noBorder: true,
        focusedInput: focusedDateInput,
        onFocusChange: _this.handleFocusChange,
        renderMonthElement: _this.renderMonthElement,
        isDayBlocked: _this.isDayBlocked,
        isDayHighlighted: _this.isDayHighlighted
      }), visible && React.createElement("div", {
        className: s$12.hr
      }), visible && visiblePicker === DateTimePicker.timePicker && React.createElement(TimeSuggestions, {
        className: s$12.timeSuggestions,
        containerClassName: s$12.timeSuggestionsContainer,
        onSelect: _this.handleTimeSelect,
        startMinutes: startMinutes,
        startHour: startHour,
        endMinutes: endMinutes,
        endHour: endHour,
        texts: texts,
        fromHourRange: fromHourRange,
        toHourRange: toHourRange
      }));
    });

    _this.ectorPicker = React.createRef();
    _this.handleStartDateFocus = _this.handleDateFocus.bind(_assertThisInitialized(_this), DateTimePicker.startDate);
    _this.handleEndDateFocus = _this.handleDateFocus.bind(_assertThisInitialized(_this), DateTimePicker.endDate);
    _this.state = {
      startDate: undefined,
      endDate: undefined,
      startHour: undefined,
      startMinutes: undefined,
      endHour: undefined,
      endMinutes: undefined,
      focusedDateInput: DateTimePicker.startDate,
      visiblePicker: DateTimePicker.datePicker,
      showTimeInputs: false
    };
    now = moment();
    return _this;
  }

  _createClass(DateTimePicker, [{
    key: "handleDateFocus",
    value: function handleDateFocus(focusedDateInput) {
      this.ectorPicker.current.handleFocus();
      this.setState({
        visiblePicker: DateTimePicker.datePicker,
        focusedDateInput: focusedDateInput
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          startDate = _this$state6.startDate,
          endDate = _this$state6.endDate,
          visiblePicker = _this$state6.visiblePicker,
          startHour = _this$state6.startHour,
          startMinutes = _this$state6.startMinutes,
          endMinutes = _this$state6.endMinutes,
          endHour = _this$state6.endHour;
      var extraData = {
        visiblePicker: visiblePicker,
        startDate: startDate,
        endDate: endDate,
        startMinutes: startMinutes,
        endMinutes: endMinutes,
        startHour: startHour,
        endHour: endHour
      };
      var _this$props4 = this.props,
          error = _this$props4.error,
          className = _this$props4.className;
      return React.createElement(Picker, {
        ref: this.ectorPicker,
        split: true,
        extraData: extraData,
        FirstInputComponent: this.renderStartDateTimeInputComponent,
        SecondInputComponent: this.renderEndDateTimeInputComponent,
        SuggestionsComponent: this.renderSuggestionsComponent,
        className: [s$12.picker, className].join(' '),
        error: error
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var propStartDate = props.startDate,
          propEndDate = props.endDate;
      var startDate = state.startDate,
          endDate = state.endDate,
          startMinutes = state.startMinutes,
          endMinutes = state.endMinutes,
          startHour = state.startHour,
          endHour = state.endHour,
          showTimeInputs = state.showTimeInputs;

      if (!startDate && propStartDate) {
        startDate = moment(propStartDate);
      }

      if (!endDate && propEndDate) {
        endDate = moment(propEndDate);
      }

      if (!startMinutes && !startHour && propStartDate) {
        startDate = moment(propStartDate);
        startMinutes = startDate.format('mm');
        startHour = startDate.format('HH');
        showTimeInputs = true;
      }

      if (!endMinutes && !endHour && propEndDate) {
        endDate = moment(propEndDate);
        endMinutes = endDate.format('mm');
        endHour = endDate.format('HH');
        showTimeInputs = true;
      }

      return {
        showTimeInputs: showTimeInputs,
        startDate: startDate,
        endDate: endDate,
        startMinutes: startMinutes,
        startHour: startHour,
        endMinutes: endMinutes,
        endHour: endHour
      };
    }
  }]);

  return DateTimePicker;
}(React.PureComponent);

_defineProperty(DateTimePicker, "startDate", 'startDate');

_defineProperty(DateTimePicker, "endDate", 'endDate');

_defineProperty(DateTimePicker, "timePicker", 'timePicker');

_defineProperty(DateTimePicker, "datePicker", 'datePicker');

DateTimePicker.propTypes = {
  error: PropTypes$1.string,
  className: PropTypes$1.string,
  texts: TextsType$7,
  startDate: PropTypes$1.string,
  endDate: PropTypes$1.string,
  onStartDateChange: PropTypes$1.func,
  onEndDateChange: PropTypes$1.func,
  onStartTimeChange: PropTypes$1.func,
  onEndTimeChange: PropTypes$1.func,
  fromHourRange: PropTypes$1.arrayOf(PropTypes$1.number),
  toHourRange: PropTypes$1.arrayOf(PropTypes$1.number)
};
DateTimePicker.defaultProps = {
  error: '',
  className: undefined,
  texts: DefaultTexts$7,
  startDate: undefined,
  endDate: undefined,
  onStartDateChange: function onStartDateChange() {
    return null;
  },
  onEndDateChange: function onEndDateChange() {
    return null;
  },
  onStartTimeChange: function onStartTimeChange() {
    return null;
  },
  onEndTimeChange: function onEndTimeChange() {
    return null;
  },
  fromHourRange: TimeSuggestions.defaultProps.fromHourRange,
  toHourRange: TimeSuggestions.defaultProps.toHourRange
};

var css$14 = ".TimeRange-module_container__qP7nK {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 100%;\n}\n\n.TimeRange-module_hours__9eQEI, .TimeRange-module_minutes__1mA4X {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: scroll;\n  position: relative;\n  margin: 0 5px\n}\n\n.TimeRange-module_hours__9eQEI::-webkit-scrollbar, .TimeRange-module_minutes__1mA4X::-webkit-scrollbar {\n  display: none;\n}\n\n.TimeRange-module_hour__XiHg6, .TimeRange-module_minute__32J9f {\n  min-width: 20px;\n  padding: 5px 10px;\n  text-align: center\n}\n\n.TimeRange-module_hour__XiHg6:hover, .TimeRange-module_hour__XiHg6.TimeRange-module_selected__1EEqQ, .TimeRange-module_minute__32J9f:hover, .TimeRange-module_minute__32J9f.TimeRange-module_selected__1EEqQ {\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bold;\n}\n\n.TimeRange-module_hour__XiHg6:hover, .TimeRange-module_minute__32J9f:hover {\n  background-color: rgb(255, 245, 204);\n}\n\n.TimeRange-module_hour__XiHg6.TimeRange-module_selected__1EEqQ, .TimeRange-module_minute__32J9f.TimeRange-module_selected__1EEqQ {\n  background-color: #ffcd02;\n}\n\n.TimeRange-module_hour__XiHg6.TimeRange-module_disabled__TxWjV, .TimeRange-module_minute__32J9f.TimeRange-module_disabled__TxWjV {\n  color: #939baa;\n}\n";
var s$14 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"TimeRange-module_container__qP7nK","hours":"TimeRange-module_hours__9eQEI","minutes":"TimeRange-module_minutes__1mA4X","hour":"TimeRange-module_hour__XiHg6","minute":"TimeRange-module_minute__32J9f","selected":"TimeRange-module_selected__1EEqQ","disabled":"TimeRange-module_disabled__TxWjV"};
styleInject(css$14);

var TimeNumber = function TimeNumber(_ref) {
  var value = _ref.value;
  return value < 10 ? "0".concat(value) : value.toString();
};

var TimeElement = function TimeElement(_ref2) {
  var className = _ref2.className,
      value = _ref2.value,
      selected = _ref2.selected,
      onSelect = _ref2.onSelect,
      disabled = _ref2.disabled;
  return (// eslint-disable-next-line jsx-a11y/role-supports-aria-props
    React__default.createElement("div", {
      className: [selected ? s$14.selected : undefined, disabled ? s$14.disabled : undefined, className].join(' '),
      role: "presentation",
      onClick: onSelect,
      "aria-selected": selected
    }, React__default.createElement(TimeNumber, {
      value: value
    }))
  );
};

TimeElement.propTypes = {
  className: PropTypes$1.string.isRequired,
  value: PropTypes$1.string.isRequired,
  selected: PropTypes$1.bool.isRequired,
  onSelect: PropTypes$1.func.isRequired,
  disabled: PropTypes$1.bool.isRequired
};

var getRange = function getRange(start, end) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Array.from(Array(end).keys()).slice(start).filter(function (nbr) {
    return nbr % interval === 0;
  });
};

var TimeRange =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(TimeRange, _React$PureComponent);

  function TimeRange(props) {
    var _this;

    _classCallCheck(this, TimeRange);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeRange).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleHourSelect", function (event) {
      var onSelect = _this.props.onSelect;
      onSelect(TimeRange.hour, event.currentTarget.innerHTML);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMinutesSelect", function (event) {
      var onSelect = _this.props.onSelect;
      onSelect(TimeRange.minutes, event.currentTarget.innerHTML);
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour", function (hour) {
      var selectedHour = _this.props.hour;
      var isSelected = +selectedHour === +hour;
      return React__default.createElement(TimeElement, {
        key: "h-".concat(hour),
        className: s$14.hour,
        value: hour,
        selected: isSelected,
        disabled: !isSelected && typeof selectedHour !== 'undefined',
        onSelect: _this.handleHourSelect
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMinutes", function (minutes) {
      var selectedMinutes = _this.props.minutes;
      var isSelected = +minutes === +selectedMinutes;
      return React__default.createElement(TimeElement, {
        key: "m-".concat(minutes),
        className: s$14.minute,
        value: minutes,
        selected: isSelected,
        disabled: !isSelected && typeof selectedMinutes !== 'undefined',
        onSelect: _this.handleMinutesSelect
      });
    });

    var startHour = props.startHour,
        endHour = props.endHour,
        minutesInterval = props.minutesInterval,
        startMinute = props.startMinute,
        endMinute = props.endMinute;
    _this.minutesRange = getRange(startMinute, endMinute, minutesInterval);
    _this.hoursRange = getRange(startHour, endHour);
    return _this;
  }

  _createClass(TimeRange, [{
    key: "render",
    value: function render() {
      return React__default.createElement("div", {
        className: s$14.container
      }, React__default.createElement("div", {
        className: s$14.hours
      }, this.hoursRange.map(this.renderHour)), React__default.createElement("div", {
        className: s$14.minutes
      }, this.minutesRange.map(this.renderMinutes)));
    }
  }]);

  return TimeRange;
}(React__default.PureComponent);

TimeRange.minutes = 'minutes';
TimeRange.hour = 'hour';
TimeRange.defaultProps = {
  startHour: 7,
  endHour: 24,
  minutesInterval: 1,
  onSelect: function onSelect() {
    return null;
  },
  hour: undefined,
  minutes: undefined,
  startMinute: 0,
  endMinute: 60
};
TimeRange.propTypes = {
  startHour: PropTypes$1.number,
  endHour: PropTypes$1.number,
  minutesInterval: PropTypes$1.number,
  onSelect: PropTypes$1.func,
  minutes: PropTypes$1.string,
  hour: PropTypes$1.string,
  startMinute: PropTypes$1.number,
  endMinute: PropTypes$1.number
};

var css$15 = ".FlightInformationForm-module_card__3HVvP {\n    width: 650px;\n}\n\n.FlightInformationForm-module_contentCard__2iuCz {}\n\n.FlightInformationForm-module_formContainer__38_9v {\n    margin-bottom: 20px;\n}\n\n.FlightInformationForm-module_title__3yTDe {\n    margin: 0;\n    font-weight: 300;\n    color: #32a0c5;\n}\n\n.FlightInformationForm-module_firstColumn__3dXcq {\n    padding-right: 20px;\n}\n\n.FlightInformationForm-module_secondColumn__1tg-R {\n    padding-left: 20px;\n}\n\n.FlightInformationForm-module_halfWidth__3iWMs {\n    width: 50%;\n}\n\n.FlightInformationForm-module_row__2j-tW {\n    margin-top: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.FlightInformationForm-module_noMargin__DF7_J {\n    margin: 0;\n}\n\n.FlightInformationForm-module_input__1QJpa {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n\n.FlightInformationForm-module_select__1KZ8b {\n    margin-top: 0;\n}\n\n.FlightInformationForm-module_defaultOption__MJRT6 {\n    color: #d5d6d7;\n}\n\n.FlightInformationForm-module_actionLink__nzpW1 {\n    margin-top: 5px;\n}\n\n.FlightInformationForm-module_flexStart__3he4R {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n}\n\n.FlightInformationForm-module_flexEnd__f47Mt {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n\n.FlightInformationForm-module_description__38HJs {\n    margin-top: 10px;\n}\n\n@media (max-width: 1130px) {\n    .FlightInformationForm-module_card__3HVvP {\n        width: -webkit-min-content;\n        width: -moz-min-content;\n        width: min-content;\n    }\n    .FlightInformationForm-module_input__1QJpa {\n        min-width: 275px;\n        max-width: 275px;\n        margin: 5px 10px 0 10px;\n    }\n    .FlightInformationForm-module_firstColumn__3dXcq, .FlightInformationForm-module_secondColumn__1tg-R {\n        padding: 0;\n    }\n    .FlightInformationForm-module_actionLink__nzpW1, .FlightInformationForm-module_description__38HJs {\n        margin-right: 10px;\n        margin-left: 10px;\n    }\n    .FlightInformationForm-module_title__3yTDe {\n        margin-left: 10px;\n    }\n    .FlightInformationForm-module_row__2j-tW {\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    }\n}\n\n@media (max-width: 825px) {\n    .FlightInformationForm-module_card__3HVvP {\n        width: 100%;\n    }\n    .FlightInformationForm-module_input__1QJpa {\n        max-width: none;\n    }\n\n}\n\n@media (max-width: 480px) {\n    .FlightInformationForm-module_card__3HVvP {\n        width: 100%;\n    }\n    .FlightInformationForm-module_contentCard__2iuCz {\n        padding: 20px;\n    }\n    .FlightInformationForm-module_halfWidth__3iWMs, .FlightInformationForm-module_input__1QJpa {\n        width: 100%;\n    }\n    .FlightInformationForm-module_input__1QJpa {\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none;\n        margin: 5px 0 0 0;\n        min-width: 0;\n    }\n    .FlightInformationForm-module_title__3yTDe, .FlightInformationForm-module_actionLink__nzpW1 {\n        margin: 0;\n    }\n    .FlightInformationForm-module_row__2j-tW {\n        margin: 0;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    }\n    .FlightInformationForm-module_firstColumn__3dXcq, .FlightInformationForm-module_secondColumn__1tg-R {\n        padding: 0;\n    }\n    .FlightInformationForm-module_title__3yTDe {\n        font-size: 22px;\n    }\n    .FlightInformationForm-module_description__38HJs {\n        margin: 15px 0;\n    }\n}\n";
var s$15 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","card":"FlightInformationForm-module_card__3HVvP","contentCard":"FlightInformationForm-module_contentCard__2iuCz","formContainer":"FlightInformationForm-module_formContainer__38_9v","title":"FlightInformationForm-module_title__3yTDe","firstColumn":"FlightInformationForm-module_firstColumn__3dXcq","secondColumn":"FlightInformationForm-module_secondColumn__1tg-R","halfWidth":"FlightInformationForm-module_halfWidth__3iWMs","row":"FlightInformationForm-module_row__2j-tW","noMargin":"FlightInformationForm-module_noMargin__DF7_J","input":"FlightInformationForm-module_input__1QJpa","select":"FlightInformationForm-module_select__1KZ8b","defaultOption":"FlightInformationForm-module_defaultOption__MJRT6","actionLink":"FlightInformationForm-module_actionLink__nzpW1","flexStart":"FlightInformationForm-module_flexStart__3he4R","flexEnd":"FlightInformationForm-module_flexEnd__f47Mt","description":"FlightInformationForm-module_description__38HJs"};
styleInject(css$15);

var ZoneTypes$1 = {
  airport: 'airport',
  station: 'station'
};
var SpotType = PropTypes$1.shape({
  shortName: PropTypes$1.string.isRequired,
  code: PropTypes$1.string.isRequired,
  type: PropTypes$1.oneOf(Object.keys(ZoneTypes$1)).isRequired
});

var TextsType$8 = PropTypes$1.shape({
  placeholderSpot: PropTypes$1.string,
  spotAirport: PropTypes$1.string,
  spotTrain: PropTypes$1.string,
  spotLabelAirport: PropTypes$1.string,
  inTitle: PropTypes$1.string,
  outTitle: PropTypes$1.string,
  travelingNumberToLabel: PropTypes$1.string,
  travelingNumberToPlaceholder: PropTypes$1.string,
  travelingNumberToLabelTrain: PropTypes$1.string,
  travelingNumberToPlaceholderTrain: PropTypes$1.string,
  returnFlightOriginLabel: PropTypes$1.string,
  returnFlightOriginPlaceholder: PropTypes$1.string,
  returnFlightCompanyLabel: PropTypes$1.string,
  returnFlightCompanyPlaceholder: PropTypes$1.string,
  unknown: PropTypes$1.string,
  spotLabelUnknown: PropTypes$1.string,
  switchMandatoryAirportDescription: PropTypes$1.string,
  switchMandatoryStationDescription: PropTypes$1.string,
  noResult: PropTypes$1.string
});
var DefaultTexts$8 = {
  placeholderSpot: 'Sélectionner',
  spotAirport: 'Terminal',
  spotTrain: 'Gare',
  spotLabelAirport: 'Terminal (lieu de rendez-vous)',
  inTitle: 'Aller',
  outTitle: 'Retour',
  travelingNumberToLabel: 'N° de vol',
  travelingNumberToPlaceholder: 'Ex: AFR123',
  travelingNumberToLabelTrain: 'N° de train',
  travelingNumberToPlaceholderTrain: 'Ex: INOUI 6633',
  returnFlightOriginLabel: 'Ville de provenance',
  returnFlightOriginPlaceholder: 'Ex: Londres',
  returnFlightCompanyLabel: 'Compagnie aérienne',
  returnFlightCompanyPlaceholder: 'Ex: Air France',
  unknown: 'Je ne le connais pas',
  spotLabelUnknown: 'Lieu de rendez-vous',
  switchMandatoryAirportDescription: 'Si vous ne connaissez pas votre numéro de vol, veuillez indiquer la compagnie aérienne et la ville de provenance de votre dernier vol.',
  switchMandatoryStationDescription: 'Si vous ne connaissez pas votre numéro de train, veuillez indiquer la ville de provenance de votre dernier train.',
  noResult: 'Aucun résultat'
};

var FlightInformationForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FlightInformationForm, _React$Component);

  function FlightInformationForm(props) {
    var _this;

    _classCallCheck(this, FlightInformationForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlightInformationForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (field, event) {
      var onChange = _this.props.onChange;
      onChange(field, event.currentTarget.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeSelect", function (field, option, _ref) {
      var action = _ref.action;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onClear = _this$props.onClear;

      if (action === 'clear') {
        onClear(field);
      } else {
        onChange(field, option.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderTerminalSelect", function (fromOrTo) {
      var _this$props2 = _this.props,
          spots = _this$props2["".concat(fromOrTo, "SpotsAvailable")],
          selectedSpot = _this$props2.values["".concat(fromOrTo, "Spot")],
          selectedSpotError = _this$props2.errors["".concat(fromOrTo, "Spot")],
          texts = _this$props2.texts;

      return React__default.createElement(InputSelect, {
        options: spots.map(function (spot) {
          return {
            value: spot,
            label: "".concat(spot.type === 'airport' ? texts.spotAirport : texts.spotTrain, " ").concat(spot.shortName)
          };
        }),
        value: selectedSpot ? {
          value: selectedSpot,
          label: "".concat(selectedSpot.type === 'airport' ? texts.spotAirport : texts.spotTrain, " ").concat(selectedSpot.shortName)
        } : null,
        placeholder: texts.placeholderSpot,
        onChange: fromOrTo === 'from' ? _this.onChangeFromSpot : _this.onChangeToSpot,
        isSearchable: false,
        isClearable: true,
        error: selectedSpotError
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderAirlinesSelect", function () {
      var _this$props3 = _this.props,
          airlines = _this$props3.airlines,
          returnFlightCompany = _this$props3.values.returnFlightCompany,
          returnFlightCompanyError = _this$props3.errors.returnFlightCompany,
          texts = _this$props3.texts;
      var shouldDisplayReturnFlightInformation = _this.state.shouldDisplayReturnFlightInformation;
      var selectedAirline = airlines.find(function (airline) {
        return airline.name === returnFlightCompany;
      });
      return React__default.createElement(InputSelect, {
        options: airlines,
        value: selectedAirline,
        placeholder: texts.returnFlightCompanyPlaceholder,
        onChange: _this.onChangeReturnFlightCompany,
        isClearable: true,
        isSearchable: true,
        noOptionsMessage: function noOptionsMessage() {
          return texts.noResult;
        },
        error: shouldDisplayReturnFlightInformation ? returnFlightCompanyError : null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showExtraFields", function () {
      return _this.setState({
        shouldDisplayReturnFlightInformation: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLabelSpot", function (spot) {
      var texts = _this.props.texts;

      if (!spot) {
        return texts.spotLabelUnknown;
      }

      return spot.type === 'airport' ? texts.spotLabelAirport : texts.spotLabelUnknown;
    });

    _this.renderFromZoneTerminal = _this.renderTerminalSelect.bind(_assertThisInitialized(_this), 'from');
    _this.renderToZoneTerminal = _this.renderTerminalSelect.bind(_assertThisInitialized(_this), 'to');
    _this.onChangeTravelingNumberTo = _this.onChange.bind(_assertThisInitialized(_this), 'travelingNumberTo');
    _this.onChangeReturnFlightOrigin = _this.onChange.bind(_assertThisInitialized(_this), 'returnFlightOrigin');
    _this.onChangeReturnFlightCompany = _this.onChangeSelect.bind(_assertThisInitialized(_this), 'returnFlightCompany');
    _this.onChangeFromSpot = _this.onChangeSelect.bind(_assertThisInitialized(_this), 'fromSpot');
    _this.onChangeToSpot = _this.onChangeSelect.bind(_assertThisInitialized(_this), 'toSpot');
    _this.state = {
      shouldDisplayReturnFlightInformation: false
    };
    return _this;
  }

  _createClass(FlightInformationForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var should = this.props.shouldDisplayReturnFlightInformation;
      var oldShould = prevProps.shouldDisplayReturnFlightInformation;

      if (oldShould !== should && should) {
        this.setState({
          shouldDisplayReturnFlightInformation: should
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          RootComponent = _this$props4.RootComponent,
          fromSpotsAvailable = _this$props4.fromSpotsAvailable,
          toSpotsAvailable = _this$props4.toSpotsAvailable,
          _this$props4$values = _this$props4.values,
          fromSpot = _this$props4$values.fromSpot,
          toSpot = _this$props4$values.toSpot,
          travelingNumberTo = _this$props4$values.travelingNumberTo,
          returnFlightCompany = _this$props4$values.returnFlightCompany,
          returnFlightOrigin = _this$props4$values.returnFlightOrigin,
          errors = _this$props4.errors,
          className = _this$props4.className,
          contentClassName = _this$props4.contentClassName,
          texts = _this$props4.texts,
          cardProps = _objectWithoutProperties(_this$props4, ["RootComponent", "fromSpotsAvailable", "toSpotsAvailable", "values", "errors", "className", "contentClassName", "texts"]);

      var shouldDisplayReturnFlightInformation = this.state.shouldDisplayReturnFlightInformation;

      var actualCardProps = _objectSpread({}, cardProps, {
        className: [s$15.card, className].join(' '),
        contentClassName: [s$15.contentCard, contentClassName].join(' ')
      });

      return React__default.createElement(RootComponent, actualCardProps, fromSpotsAvailable.length > 1 && React__default.createElement("div", {
        className: s$15.formContainer
      }, React__default.createElement("h2", {
        className: s$15.title
      }, texts.inTitle), React__default.createElement("div", {
        className: [s$15.row, s$15.halfWidth].join(' ')
      }, React__default.createElement(InputLabel, {
        label: this.getLabelSpot(fromSpot),
        value: fromSpot,
        mandatory: true,
        InputComponent: this.renderFromZoneTerminal,
        className: [s$15.input, s$15.firstColumn].join(' '),
        error: errors.fromSpot
      }))), React__default.createElement(React__default.Fragment, null, fromSpotsAvailable.length > 1 && React__default.createElement("h2", {
        className: s$15.title
      }, texts.outTitle), React__default.createElement("div", {
        className: [s$15.row, !toSpot || toSpotsAvailable.length <= 1 && toSpot.type !== 'station' ? s$15.halfWidth : undefined, fromSpotsAvailable.length <= 1 ? s$15.noMargin : undefined].join(' ')
      }, toSpotsAvailable.length > 1 && React__default.createElement(InputLabel, {
        label: this.getLabelSpot(toSpot),
        value: toSpot,
        mandatory: true,
        InputComponent: this.renderToZoneTerminal,
        className: [s$15.input, s$15.firstColumn].join(' '),
        error: errors.toSpot
      }), toSpot && React__default.createElement(InputLabel, {
        label: toSpot.type === 'airport' ? texts.travelingNumberToLabel : texts.travelingNumberToLabelTrain,
        placeholder: toSpot.type === 'airport' ? texts.travelingNumberToPlaceholder : texts.travelingNumberToPlaceholderTrain,
        value: travelingNumberTo,
        mandatory: !shouldDisplayReturnFlightInformation,
        className: [s$15.input, toSpotsAvailable.length > 1 ? s$15.secondColumn : s$15.firstColumn].join(' '),
        onChange: this.onChangeTravelingNumberTo,
        autoComplete: "off",
        error: !shouldDisplayReturnFlightInformation ? errors.travelingNumberTo : null
      }), toSpotsAvailable.length <= 1 && toSpot && toSpot.type === 'station' && React__default.createElement(InputLabel, {
        label: texts.returnFlightOriginLabel,
        placeholder: texts.returnFlightOriginPlaceholder,
        value: returnFlightOrigin,
        onChange: this.onChangeReturnFlightOrigin,
        className: [s$15.input, s$15.firstColumn].join(' '),
        mandatory: shouldDisplayReturnFlightInformation,
        autoComplete: "off",
        error: shouldDisplayReturnFlightInformation ? errors.returnFlightOrigin : null
      })), toSpot && !shouldDisplayReturnFlightInformation && React__default.createElement(ActionLink, {
        label: texts.unknown,
        className: [s$15.actionLink, toSpotsAvailable.length <= 1 ? s$15.flexStart : s$15.flexEnd].join(' '),
        onClick: this.showExtraFields
      }), toSpot && shouldDisplayReturnFlightInformation && React__default.createElement("div", {
        className: s$15.description
      }, React__default.createElement("span", null, toSpot.type === 'airport' ? texts.switchMandatoryAirportDescription : texts.switchMandatoryStationDescription)), toSpot && React__default.createElement("div", {
        className: [s$15.row, toSpot.type === 'station' ? s$15.halfWidth : undefined].join(' ')
      }, (toSpot.type !== 'station' || toSpotsAvailable.length > 1) && React__default.createElement(InputLabel, {
        label: texts.returnFlightOriginLabel,
        placeholder: texts.returnFlightOriginPlaceholder,
        value: returnFlightOrigin,
        onChange: this.onChangeReturnFlightOrigin,
        className: [s$15.input, s$15.firstColumn].join(' '),
        mandatory: shouldDisplayReturnFlightInformation,
        autoComplete: "off",
        error: shouldDisplayReturnFlightInformation ? errors.returnFlightOrigin : null
      }), toSpot.type === 'airport' && React__default.createElement(InputLabel, {
        label: texts.returnFlightCompanyLabel,
        value: returnFlightCompany,
        className: [s$15.input, toSpotsAvailable.length > 1 ? s$15.secondColumn : s$15.firstColumn].join(' '),
        InputComponent: this.renderAirlinesSelect,
        mandatory: shouldDisplayReturnFlightInformation,
        error: shouldDisplayReturnFlightInformation ? errors.returnFlightCompany : null
      }))));
    }
  }]);

  return FlightInformationForm;
}(React__default.Component);

FlightInformationForm.defaultProps = {
  // eslint-disable-next-line react/prop-types
  RootComponent: function RootComponent(_ref2) {
    var children = _ref2.children,
        cardProps = _objectWithoutProperties(_ref2, ["children"]);

    return React__default.createElement(Card, cardProps, children);
  },
  className: undefined,
  contentClassName: undefined,
  airlines: [],
  texts: DefaultTexts$8,
  shouldDisplayReturnFlightInformation: false
};
FlightInformationForm.propTypes = {
  RootComponent: PropTypes$1.func,
  className: PropTypes$1.string,
  contentClassName: PropTypes$1.string,
  fromSpotsAvailable: PropTypes$1.arrayOf(SpotType).isRequired,
  toSpotsAvailable: PropTypes$1.arrayOf(SpotType).isRequired,
  values: PropTypes$1.shape({
    fromSpot: SpotType.isRequired,
    toSpot: SpotType.isRequired,
    travelingNumberTo: PropTypes$1.string.isRequired,
    returnFlightCompany: PropTypes$1.string,
    returnFlightOrigin: PropTypes$1.string
  }).isRequired,
  errors: PropTypes$1.shape({
    fromSpot: PropTypes$1.string,
    toSpot: PropTypes$1.string,
    travelingNumberTo: PropTypes$1.string,
    returnFlightCompany: PropTypes$1.string,
    returnFlightOrigin: PropTypes$1.string
  }).isRequired,
  airlines: PropTypes$1.arrayOf(PropTypes$1.shape({
    value: PropTypes$1.string.isRequired,
    label: PropTypes$1.string.isRequired
  })),
  texts: TextsType$8,
  onChange: PropTypes$1.func.isRequired,
  onClear: PropTypes$1.func.isRequired,
  shouldDisplayReturnFlightInformation: PropTypes$1.bool
};

var shallowEqual = function shallowEqual(newValue, oldValue) {
  return newValue === oldValue;
};

var simpleIsEqual = function simpleIsEqual(newArgs, lastArgs) {
  return newArgs.length === lastArgs.length && newArgs.every(function (newArg, index) {
    return shallowEqual(newArg, lastArgs[index]);
  });
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* eslint-disable */
// murmurhash2 via https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash2_32_gc(str) {
  var l = str.length,
      h = l ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
}

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e, m).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        switch (d.constructor) {
          case Array:
            for (var c = 0, e = d.length; c < e; ++c) {
              T(d[c]);
            }

            break;

          case Function:
            S[A++] = d;
            break;

          case Boolean:
            Y = !!d | 0;
        }

    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var stylisRuleSheet = createCommonjsModule(function (module, exports) {
(function (factory) {
	module['exports'] = factory();
}(function () {

	return function (insertRule) {
		var delimiter = '/*|*/';
		var needle = delimiter+'}';

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}');
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet);
			}
		}
	}
}));
});

var hyphenateRegex = /[A-Z]|^ms/g;
var processStyleName = memoize(function (styleName) {
  return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue(key, value) {
  if (value == null || typeof value === 'boolean') {
    return '';
  }

  if (unitlessKeys[key] !== 1 && key.charCodeAt(1) !== 45 && // custom properties
  !isNaN(value) && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    return oldProcessStyleValue(key, value);
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'function':
        if (process.env.NODE_ENV !== 'production') {
          console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
        }

        toAdd = classnames([arg()]);
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};
var isBrowser = typeof document !== 'undefined';

/*

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance
- 'polyfills' on server side

// usage

import StyleSheet from 'glamor/lib/sheet'
let styleSheet = new StyleSheet()

styleSheet.inject()
- 'injects' the stylesheet into the page (or into memory if on server)

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function makeStyleTag(opts) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', opts.key || '');

  if (opts.nonce !== undefined) {
    tag.setAttribute('nonce', opts.nonce);
  }

  tag.appendChild(document.createTextNode('')) // $FlowFixMe
  ;
  (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = process.env.NODE_ENV === 'production'; // the big drawback here is that the css won't be editable in devtools

    this.tags = [];
    this.ctr = 0;
    this.opts = options;
  }

  var _proto = StyleSheet.prototype;

  _proto.inject = function inject() {
    if (this.injected) {
      throw new Error('already injected!');
    }

    this.tags[0] = makeStyleTag(this.opts);
    this.injected = true;
  };

  _proto.speedy = function speedy(bool) {
    if (this.ctr !== 0) {
      // cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})
      throw new Error("cannot change speedy now");
    }

    this.isSpeedy = !!bool;
  };

  _proto.insert = function insert(rule, sourceMap) {
    // this is the ultrafast version, works across browsers
    if (this.isSpeedy) {
      var tag = this.tags[this.tags.length - 1];
      var sheet = sheetForTag(tag);

      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn('illegal rule', rule); // eslint-disable-line no-console
        }
      }
    } else {
      var _tag = makeStyleTag(this.opts);

      this.tags.push(_tag);

      _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
    }

    this.ctr++;

    if (this.ctr % 65000 === 0) {
      this.tags.push(makeStyleTag(this.opts));
    }
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0; // todo - look for remnants in document.styleSheets

    this.injected = false;
  };

  return StyleSheet;
}();

function createEmotion(context, options) {
  if (context.__SECRET_EMOTION__ !== undefined) {
    return context.__SECRET_EMOTION__;
  }

  if (options === undefined) options = {};
  var key = options.key || 'css';

  if (process.env.NODE_ENV !== 'production') {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var current;

  function insertRule(rule) {
    current += rule;

    if (isBrowser) {
      sheet.insert(rule, currentSourceMap);
    }
  }

  var insertionPlugin = stylisRuleSheet(insertRule);
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var caches = {
    registered: {},
    inserted: {},
    nonce: options.nonce,
    key: key
  };
  var sheet = new StyleSheet(options);

  if (isBrowser) {
    // 🚀
    sheet.inject();
  }

  var stylis = new stylis_min(stylisOptions);
  stylis.use(options.stylisPlugins)(insertionPlugin);
  var currentSourceMap = '';

  function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
    if (interpolation == null) {
      return '';
    }

    switch (typeof interpolation) {
      case 'boolean':
        return '';

      case 'function':
        if (interpolation.__emotion_styles !== undefined) {
          var selector = interpolation.toString();

          if (selector === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          return selector;
        }

        if (this === undefined && process.env.NODE_ENV !== 'production') {
          console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        return handleInterpolation.call(this, this === undefined ? interpolation() : // $FlowFixMe
        interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);

      case 'object':
        return createStringFromObject.call(this, interpolation);

      default:
        var cached = caches.registered[interpolation];
        return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
    }
  }

  var objectToStringCache = new WeakMap();

  function createStringFromObject(obj) {
    if (objectToStringCache.has(obj)) {
      // $FlowFixMe
      return objectToStringCache.get(obj);
    }

    var string = '';

    if (Array.isArray(obj)) {
      obj.forEach(function (interpolation) {
        string += handleInterpolation.call(this, interpolation, false);
      }, this);
    } else {
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'object') {
          if (caches.registered[obj[key]] !== undefined) {
            string += key + "{" + caches.registered[obj[key]] + "}";
          } else {
            string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
            throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
          }

          if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
            obj[key].forEach(function (value) {
              string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
            });
          } else {
            string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
          }
        }
      }, this);
    }

    objectToStringCache.set(obj, string);
    return string;
  }

  var name;
  var stylesWithLabel;
  var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;

  var createClassName = function createClassName(styles, identifierName) {
    return murmurhash2_32_gc(styles + identifierName) + identifierName;
  };

  if (process.env.NODE_ENV !== 'production') {
    var oldCreateClassName = createClassName;
    var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

    createClassName = function createClassName(styles, identifierName) {
      return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
        currentSourceMap = sourceMap;
        return '';
      }), identifierName);
    };
  }

  var createStyles = function createStyles(strings) {
    var stringMode = true;
    var styles = '';
    var identifierName = '';

    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation.call(this, strings, false);
    } else {
      styles += strings[0];
    }

    for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    interpolations.forEach(function (interpolation, i) {
      styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46 // .
      );

      if (stringMode === true && strings[i + 1] !== undefined) {
        styles += strings[i + 1];
      }
    }, this);
    stylesWithLabel = styles;
    styles = styles.replace(labelPattern, function (match, p1) {
      identifierName += "-" + p1;
      return '';
    });
    name = createClassName(styles, identifierName);
    return styles;
  };

  if (process.env.NODE_ENV !== 'production') {
    var oldStylis = stylis;

    stylis = function stylis(selector, styles) {
      oldStylis(selector, styles);
      currentSourceMap = '';
    };
  }

  function insert(scope, styles) {
    if (caches.inserted[name] === undefined) {
      current = '';
      stylis(scope, styles);
      caches.inserted[name] = current;
    }
  }

  var css = function css() {
    var styles = createStyles.apply(this, arguments);
    var selector = key + "-" + name;

    if (caches.registered[selector] === undefined) {
      caches.registered[selector] = stylesWithLabel;
    }

    insert("." + selector, styles);
    return selector;
  };

  var keyframes = function keyframes() {
    var styles = createStyles.apply(this, arguments);
    var animation = "animation-" + name;
    insert('', "@keyframes " + animation + "{" + styles + "}");
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    var styles = createStyles.apply(this, arguments);
    insert('', styles);
  };

  function getRegisteredStyles(registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (caches.registered[className] !== undefined) {
        registeredStyles.push(className);
      } else {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }

  function merge(className, sourceMap) {
    var registeredStyles = [];
    var rawClassName = getRegisteredStyles(registeredStyles, className);

    if (registeredStyles.length < 2) {
      return className;
    }

    return rawClassName + css(registeredStyles, sourceMap);
  }

  function cx() {
    for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classNames[_key2] = arguments[_key2];
    }

    return merge(classnames(classNames));
  }

  function hydrateSingleId(id) {
    caches.inserted[id] = true;
  }

  function hydrate(ids) {
    ids.forEach(hydrateSingleId);
  }

  function flush() {
    if (isBrowser) {
      sheet.flush();
      sheet.inject();
    }

    caches.inserted = {};
    caches.registered = {};
  }

  if (isBrowser) {
    var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
    Array.prototype.forEach.call(chunks, function (node) {
      // $FlowFixMe
      sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]); // $FlowFixMe

      node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
    });
  }

  var emotion = {
    flush: flush,
    hydrate: hydrate,
    cx: cx,
    merge: merge,
    getRegisteredStyles: getRegisteredStyles,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    css: css,
    sheet: sheet,
    caches: caches
  };
  context.__SECRET_EMOTION__ = emotion;
  return emotion;
}

var context = typeof global !== 'undefined' ? global : {};

var _createEmotion = createEmotion(context),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css$16 = _createEmotion.css,
    sheet = _createEmotion.sheet,
    caches = _createEmotion.caches;

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};
raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var AutosizeInput_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizerStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	visibility: 'hidden',
	height: 0,
	overflow: 'scroll',
	whiteSpace: 'pre'
};

var INPUT_PROPS_BLACKLIST = ['extraWidth', 'injectStyles', 'inputClassName', 'inputRef', 'inputStyle', 'minWidth', 'onAutosize', 'placeholderIsMinWidth'];

var cleanInputProps = function cleanInputProps(inputProps) {
	INPUT_PROPS_BLACKLIST.forEach(function (field) {
		return delete inputProps[field];
	});
	return inputProps;
};

var copyStyles = function copyStyles(styles, node) {
	node.style.fontSize = styles.fontSize;
	node.style.fontFamily = styles.fontFamily;
	node.style.fontWeight = styles.fontWeight;
	node.style.fontStyle = styles.fontStyle;
	node.style.letterSpacing = styles.letterSpacing;
	node.style.textTransform = styles.textTransform;
};

var isIE = typeof window !== 'undefined' && window.navigator ? /MSIE |Trident\/|Edge\//.test(window.navigator.userAgent) : false;

var generateId = function generateId() {
	// we only need an auto-generated ID for stylesheet injection, which is only
	// used for IE. so if the browser is not IE, this should return undefined.
	return isIE ? '_' + Math.random().toString(36).substr(2, 12) : undefined;
};

var AutosizeInput = function (_Component) {
	_inherits(AutosizeInput, _Component);

	function AutosizeInput(props) {
		_classCallCheck(this, AutosizeInput);

		var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

		_this.inputRef = function (el) {
			_this.input = el;
			if (typeof _this.props.inputRef === 'function') {
				_this.props.inputRef(el);
			}
		};

		_this.placeHolderSizerRef = function (el) {
			_this.placeHolderSizer = el;
		};

		_this.sizerRef = function (el) {
			_this.sizer = el;
		};

		_this.state = {
			inputWidth: props.minWidth,
			inputId: props.id || generateId()
		};
		return _this;
	}

	_createClass(AutosizeInput, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.mounted = true;
			this.copyInputStyles();
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var id = nextProps.id;

			if (id !== this.props.id) {
				this.setState({ inputId: id || generateId() });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps, prevState) {
			if (prevState.inputWidth !== this.state.inputWidth) {
				if (typeof this.props.onAutosize === 'function') {
					this.props.onAutosize(this.state.inputWidth);
				}
			}
			this.updateInputWidth();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.mounted = false;
		}
	}, {
		key: 'copyInputStyles',
		value: function copyInputStyles() {
			if (!this.mounted || !window.getComputedStyle) {
				return;
			}
			var inputStyles = this.input && window.getComputedStyle(this.input);
			if (!inputStyles) {
				return;
			}
			copyStyles(inputStyles, this.sizer);
			if (this.placeHolderSizer) {
				copyStyles(inputStyles, this.placeHolderSizer);
			}
		}
	}, {
		key: 'updateInputWidth',
		value: function updateInputWidth() {
			if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
				return;
			}
			var newInputWidth = void 0;
			if (this.props.placeholder && (!this.props.value || this.props.value && this.props.placeholderIsMinWidth)) {
				newInputWidth = Math.max(this.sizer.scrollWidth, this.placeHolderSizer.scrollWidth) + 2;
			} else {
				newInputWidth = this.sizer.scrollWidth + 2;
			}
			// add extraWidth to the detected width. for number types, this defaults to 16 to allow for the stepper UI
			var extraWidth = this.props.type === 'number' && this.props.extraWidth === undefined ? 16 : parseInt(this.props.extraWidth) || 0;
			newInputWidth += extraWidth;
			if (newInputWidth < this.props.minWidth) {
				newInputWidth = this.props.minWidth;
			}
			if (newInputWidth !== this.state.inputWidth) {
				this.setState({
					inputWidth: newInputWidth
				});
			}
		}
	}, {
		key: 'getInput',
		value: function getInput() {
			return this.input;
		}
	}, {
		key: 'focus',
		value: function focus() {
			this.input.focus();
		}
	}, {
		key: 'blur',
		value: function blur() {
			this.input.blur();
		}
	}, {
		key: 'select',
		value: function select() {
			this.input.select();
		}
	}, {
		key: 'renderStyles',
		value: function renderStyles() {
			// this method injects styles to hide IE's clear indicator, which messes
			// with input size detection. the stylesheet is only injected when the
			// browser is IE, and can also be disabled by the `injectStyles` prop.
			var injectStyles = this.props.injectStyles;

			return isIE && injectStyles ? _react2.default.createElement('style', { dangerouslySetInnerHTML: {
					__html: 'input#' + this.state.inputId + '::-ms-clear {display: none;}'
				} }) : null;
		}
	}, {
		key: 'render',
		value: function render() {
			var sizerValue = [this.props.defaultValue, this.props.value, ''].reduce(function (previousValue, currentValue) {
				if (previousValue !== null && previousValue !== undefined) {
					return previousValue;
				}
				return currentValue;
			});

			var wrapperStyle = _extends({}, this.props.style);
			if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

			var inputStyle = _extends({
				boxSizing: 'content-box',
				width: this.state.inputWidth + 'px'
			}, this.props.inputStyle);

			var inputProps = _objectWithoutProperties(this.props, []);

			cleanInputProps(inputProps);
			inputProps.className = this.props.inputClassName;
			inputProps.id = this.state.inputId;
			inputProps.style = inputStyle;

			return _react2.default.createElement(
				'div',
				{ className: this.props.className, style: wrapperStyle },
				this.renderStyles(),
				_react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef })),
				_react2.default.createElement(
					'div',
					{ ref: this.sizerRef, style: sizerStyle },
					sizerValue
				),
				this.props.placeholder ? _react2.default.createElement(
					'div',
					{ ref: this.placeHolderSizerRef, style: sizerStyle },
					this.props.placeholder
				) : null
			);
		}
	}]);

	return AutosizeInput;
}(React__default.Component);

AutosizeInput.propTypes = {
	className: _propTypes2.default.string, // className for the outer element
	defaultValue: _propTypes2.default.any, // default field value
	extraWidth: _propTypes2.default.oneOfType([// additional width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	id: _propTypes2.default.string, // id to use for the input, can be set for consistent snapshots
	injectStyles: _propTypes2.default.bool, // inject the custom stylesheet to hide clear UI, defaults to true
	inputClassName: _propTypes2.default.string, // className for the input element
	inputRef: _propTypes2.default.func, // ref callback for the input element
	inputStyle: _propTypes2.default.object, // css styles for the input element
	minWidth: _propTypes2.default.oneOfType([// minimum width for input element
	_propTypes2.default.number, _propTypes2.default.string]),
	onAutosize: _propTypes2.default.func, // onAutosize handler: function(newWidth) {}
	onChange: _propTypes2.default.func, // onChange handler: function(event) {}
	placeholder: _propTypes2.default.string, // placeholder text
	placeholderIsMinWidth: _propTypes2.default.bool, // don't collapse size to less than the placeholder
	style: _propTypes2.default.object, // css styles for the outer element
	value: _propTypes2.default.any // field value
};
AutosizeInput.defaultProps = {
	minWidth: 1,
	injectStyles: true
};

exports.default = AutosizeInput;
});

var AutosizeInput = unwrapExports(AutosizeInput_1);

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var hasClass_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
});

unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = addClass;

var _hasClass = interopRequireDefault(hasClass_1);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
});

unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill$1(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  polyfill: polyfill$1
});

var PropTypes = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(PropTypes$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
});

unwrapExports(PropTypes);
var PropTypes_1 = PropTypes.classNamesShape;
var PropTypes_2 = PropTypes.timeoutsShape;

var _reactLifecyclesCompat = getCjsExportFromNamespace(reactLifecyclesCompat_es);

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes$2 = _interopRequireWildcard(PropTypes$1);

var _react = _interopRequireDefault(React__default);

var _reactDom = _interopRequireDefault(reactDom__default);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$2.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$2.oneOfType([PropTypes$2.func.isRequired, PropTypes$2.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$2.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$2.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$2.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$2.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$2.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$2.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = process.env.NODE_ENV !== "production" ? PropTypes.timeoutsShape : {};    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$2.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$2.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$2.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$2.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$2.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$2.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$2.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;
});

unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var CSSTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var PropTypes$2 = _interopRequireWildcard(PropTypes$1);

var _addClass = _interopRequireDefault(addClass_1);

var _removeClass = _interopRequireDefault(removeClass);

var _react = _interopRequireDefault(React__default);

var _Transition = _interopRequireDefault(Transition_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass$1 = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass$1(node, className);
    activeClassName && removeClass$1(node, activeClassName);
    doneClassName && removeClass$1(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or has finished the transition.
   * A single name can be provided and it will be suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`, `fade-enter-done`,
   * `fade-exit`, `fade-exit-active`, `fade-exit-done`, `fade-appear`, and `fade-appear-active`.
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply spread
   * them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes$2.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$2.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes$2.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes$2.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes$2.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes$2.func
}) : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(CSSTransition_1);

var ChildMapping = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;



/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React__default.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, React__default.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, React__default.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React__default.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
});

unwrapExports(ChildMapping);
var ChildMapping_1 = ChildMapping.getChildMapping;
var ChildMapping_2 = ChildMapping.mergeChildMappings;
var ChildMapping_3 = ChildMapping.getInitialChildMapping;
var ChildMapping_4 = ChildMapping.getNextChildMapping;

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(PropTypes$1);

var _react = _interopRequireDefault(React__default);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(TransitionGroup_1);

var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(PropTypes$1);

var _react = _interopRequireDefault(React__default);



var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, reactDom__default.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(ReplaceTransition_1);

var reactTransitionGroup = createCommonjsModule(function (module) {

var _CSSTransition = _interopRequireDefault(CSSTransition_1);

var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

var _Transition = _interopRequireDefault(Transition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};
});

unwrapExports(reactTransitionGroup);
var reactTransitionGroup_1 = reactTransitionGroup.Transition;
var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}

function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf$1(o);
}

function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf$1(o, p);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized$1(self);
}

function _toConsumableArray$1(arr) {
  return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _nonIterableSpread$1();
}

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray$1(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// ==============================
// NO OP
// ==============================
var noop = function noop() {};
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/

function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}

function classNames(prefix, cssKey, state, className) {
  var arr = [cssKey, className];

  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }

  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
} // ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (_typeof(value) === 'object' && value !== null) return [value];
  return [];
}; // ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var newValue = onInputChange(inputValue, actionMeta);
    if (typeof newValue === 'string') return newValue;
  }

  return inputValue;
} // ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
} // Normalized Scroll Top
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }

  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }

  el.scrollTop = top;
} // Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  var docEl = document.documentElement; // suck it, flow...

  if (style.position === 'fixed') return docEl;

  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);

    if (excludeStaticParent && style.position === 'static') {
      continue;
    }

    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }

  return docEl;
} // Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/

function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;

  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);

    if (currentTime < duration) {
      raf_1(animateScroll);
    } else {
      callback(element);
    }
  }

  animateScroll();
} // Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;

  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
} // ==============================
// Get bounding client object
// ==============================
// cannot get keys using array notation with DOMRect

function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
} // ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

function getMenuPlacement(_ref) {
  var maxHeight = _ref.maxHeight,
      menuEl = _ref.menuEl,
      minHeight = _ref.minHeight,
      placement = _ref.placement,
      shouldScroll = _ref.shouldScroll,
      isFixedPosition = _ref.isFixedPosition,
      theme = _ref.theme;
  var spacing = theme.spacing;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: maxHeight
  }; // something went wrong, return default state

  if (!menuEl || !menuEl.offsetParent) return defaultState; // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered

  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
      scrollHeight = _scrollParent$getBoun.height;

  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
      menuBottom = _menuEl$getBoundingCl.bottom,
      menuHeight = _menuEl$getBoundingCl.height,
      menuTop = _menuEl$getBoundingCl.top;

  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
      containerTop = _menuEl$offsetParent$.top;

  var viewHeight = window.innerHeight;
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;

  switch (placement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        } // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.


        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      } // 4. Forked beviour when there isn't enough space below
      // AUTO: flip the menu, render above


      if (placement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = maxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;

        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - spacing.controlHeight, maxHeight);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      } // BOTTOM: allow browser to increase scrollable area and immediately set scroll


      if (placement === 'bottom') {
        scrollTo(scrollParent, scrollDown);
        return {
          placement: 'bottom',
          maxHeight: maxHeight
        };
      }

      break;

    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 2: the menu will fit, if scrolled


      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: maxHeight
        };
      } // 3: the menu will fit, if constrained


      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = maxHeight; // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.

        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }

        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }

        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      } // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below


      return {
        placement: 'bottom',
        maxHeight: maxHeight
      };

    default:
      throw new Error("Invalid placement provided \"".concat(placement, "\"."));
  } // fulfil contract with flow: implicit return value of undefined


  return defaultState;
} // Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}

var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};

var menuCSS = function menuCSS(_ref2) {
  var _ref3;

  var placement = _ref2.placement,
      _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      spacing = _ref2$theme.spacing,
      colors = _ref2$theme.colors;
  return _ref3 = {}, _defineProperty$1(_ref3, alignToControl(placement), '100%'), _defineProperty$1(_ref3, "backgroundColor", colors.neutral0), _defineProperty$1(_ref3, "borderRadius", borderRadius), _defineProperty$1(_ref3, "boxShadow", '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)'), _defineProperty$1(_ref3, "marginBottom", spacing.menuGutter), _defineProperty$1(_ref3, "marginTop", spacing.menuGutter), _defineProperty$1(_ref3, "position", 'absolute'), _defineProperty$1(_ref3, "width", '100%'), _defineProperty$1(_ref3, "zIndex", 1), _ref3;
}; // NOTE: internal only

var MenuPlacer =
/*#__PURE__*/
function (_Component) {
  _inherits$1(MenuPlacer, _Component);

  function MenuPlacer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, MenuPlacer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(MenuPlacer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
      maxHeight: _this.props.maxMenuHeight,
      placement: null
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getPlacement", function (ref) {
      var _this$props = _this.props,
          minMenuHeight = _this$props.minMenuHeight,
          maxMenuHeight = _this$props.maxMenuHeight,
          menuPlacement = _this$props.menuPlacement,
          menuPosition = _this$props.menuPosition,
          menuShouldScrollIntoView = _this$props.menuShouldScrollIntoView,
          theme = _this$props.theme;
      var getPortalPlacement = _this.context.getPortalPlacement;
      if (!ref) return; // DO NOT scroll if position is fixed

      var isFixedPosition = menuPosition === 'fixed';
      var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
      var state = getMenuPlacement({
        maxHeight: maxMenuHeight,
        menuEl: ref,
        minHeight: minMenuHeight,
        placement: menuPlacement,
        shouldScroll: shouldScroll,
        isFixedPosition: isFixedPosition,
        theme: theme
      });
      if (getPortalPlacement) getPortalPlacement(state);

      _this.setState(state);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getUpdatedProps", function () {
      var menuPlacement = _this.props.menuPlacement;
      var placement = _this.state.placement || coercePlacement(menuPlacement);
      return _objectSpread$1({}, _this.props, {
        placement: placement,
        maxHeight: _this.state.maxHeight
      });
    });

    return _this;
  }

  _createClass$1(MenuPlacer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children({
        ref: this.getPlacement,
        placerProps: this.getUpdatedProps()
      });
    }
  }]);

  return MenuPlacer;
}(React.Component);

_defineProperty$1(MenuPlacer, "contextTypes", {
  getPortalPlacement: PropTypes$1.func
});

var Menu = function Menu(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  var cn = cx(
  /*#__PURE__*/
  css$16(getStyles('menu', props)), {
    menu: true
  }, className);
  return React__default.createElement("div", _extends$1({
    className: cn
  }, innerProps, {
    ref: innerRef
  }), children);
};
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4) {
  var maxHeight = _ref4.maxHeight,
      baseUnit = _ref4.theme.spacing.baseUnit;
  return {
    maxHeight: maxHeight,
    overflowY: 'auto',
    paddingBottom: baseUnit,
    paddingTop: baseUnit,
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  };
};
var MenuList = function MenuList(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isMulti = props.isMulti,
      innerRef = props.innerRef;
  return React__default.createElement("div", {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('menuList', props)), {
      'menu-list': true,
      'menu-list--is-multi': isMulti
    }, className),
    ref: innerRef
  }, children);
}; // ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5) {
  var _ref5$theme = _ref5.theme,
      baseUnit = _ref5$theme.spacing.baseUnit,
      colors = _ref5$theme.colors;
  return {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px"),
    textAlign: 'center'
  };
};

var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('noOptionsMessage', props)), {
      'menu-notice': true,
      'menu-notice--no-options': true
    }, className)
  }, innerProps), children);
};
NoOptionsMessage.defaultProps = {
  children: 'No options'
};
var LoadingMessage = function LoadingMessage(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('loadingMessage', props)), {
      'menu-notice': true,
      'menu-notice--loading': true
    }, className)
  }, innerProps), children);
};
LoadingMessage.defaultProps = {
  children: 'Loading...'
}; // ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref6) {
  var rect = _ref6.rect,
      offset = _ref6.offset,
      position = _ref6.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal =
/*#__PURE__*/
function (_Component2) {
  _inherits$1(MenuPortal, _Component2);

  function MenuPortal() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck$1(this, MenuPortal);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn$1(this, (_getPrototypeOf3 = _getPrototypeOf$1(MenuPortal)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this2)), "state", {
      placement: null
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this2)), "getPortalPlacement", function (_ref7) {
      var placement = _ref7.placement;
      var initialPlacement = coercePlacement(_this2.props.menuPlacement); // avoid re-renders if the placement has not changed

      if (placement !== initialPlacement) {
        _this2.setState({
          placement: placement
        });
      }
    });

    return _this2;
  }

  _createClass$1(MenuPortal, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        getPortalPlacement: this.getPortalPlacement
      };
    } // callback for occassions where the menu must "flip"

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          controlElement = _this$props2.controlElement,
          menuPlacement = _this$props2.menuPlacement,
          position = _this$props2.menuPosition,
          getStyles = _this$props2.getStyles;
      var isFixed = position === 'fixed'; // bail early if required elements aren't present

      if (!appendTo && !isFixed || !controlElement) {
        return null;
      }

      var placement = this.state.placement || coercePlacement(menuPlacement);
      var rect = getBoundingClientObj(controlElement);
      var scrollDistance = isFixed ? 0 : window.pageYOffset;
      var offset = rect[placement] + scrollDistance;
      var state = {
        offset: offset,
        position: position,
        rect: rect
      }; // same wrapper element whether fixed or portalled

      var menuWrapper = React__default.createElement("div", {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        css$16(getStyles('menuPortal', state))
      }, children);
      return appendTo ? reactDom.createPortal(menuWrapper, appendTo) : menuWrapper;
    }
  }]);

  return MenuPortal;
}(React.Component);

_defineProperty$1(MenuPortal, "childContextTypes", {
  getPortalPlacement: PropTypes$1.func
});

var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

function equal(a, b) {
  // fast-deep-equal index.js 2.0.1
  if (a === b) return true;

  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    } // end fast-deep-equal
    // Custom handling for React


    for (i = length; i-- !== 0;) {
      key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner.
        //  _owner contains circular references
        // and is not needed when comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of a react element
        continue;
      } else {
        // all other properties should be traversed as usual
        if (!equal(a[key], b[key])) return false;
      }
    } // fast-deep-equal index.js 2.0.1


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


function exportedEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (error.message && error.message.match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('Warning: react-fast-compare does not handle circular references.', error.name, error.message);
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
}

var diacritics = [{
  base: 'A',
  letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
}, {
  base: 'AA',
  letters: /[\uA732]/g
}, {
  base: 'AE',
  letters: /[\u00C6\u01FC\u01E2]/g
}, {
  base: 'AO',
  letters: /[\uA734]/g
}, {
  base: 'AU',
  letters: /[\uA736]/g
}, {
  base: 'AV',
  letters: /[\uA738\uA73A]/g
}, {
  base: 'AY',
  letters: /[\uA73C]/g
}, {
  base: 'B',
  letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
}, {
  base: 'C',
  letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
}, {
  base: 'D',
  letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
}, {
  base: 'DZ',
  letters: /[\u01F1\u01C4]/g
}, {
  base: 'Dz',
  letters: /[\u01F2\u01C5]/g
}, {
  base: 'E',
  letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
}, {
  base: 'F',
  letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
}, {
  base: 'G',
  letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
}, {
  base: 'H',
  letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
}, {
  base: 'I',
  letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
}, {
  base: 'J',
  letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
}, {
  base: 'K',
  letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
}, {
  base: 'L',
  letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
}, {
  base: 'LJ',
  letters: /[\u01C7]/g
}, {
  base: 'Lj',
  letters: /[\u01C8]/g
}, {
  base: 'M',
  letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
}, {
  base: 'N',
  letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
}, {
  base: 'NJ',
  letters: /[\u01CA]/g
}, {
  base: 'Nj',
  letters: /[\u01CB]/g
}, {
  base: 'O',
  letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
}, {
  base: 'OI',
  letters: /[\u01A2]/g
}, {
  base: 'OO',
  letters: /[\uA74E]/g
}, {
  base: 'OU',
  letters: /[\u0222]/g
}, {
  base: 'P',
  letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
}, {
  base: 'Q',
  letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
}, {
  base: 'R',
  letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
}, {
  base: 'S',
  letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
}, {
  base: 'T',
  letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
}, {
  base: 'TZ',
  letters: /[\uA728]/g
}, {
  base: 'U',
  letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
}, {
  base: 'V',
  letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
}, {
  base: 'VY',
  letters: /[\uA760]/g
}, {
  base: 'W',
  letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
}, {
  base: 'X',
  letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
}, {
  base: 'Y',
  letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
}, {
  base: 'Z',
  letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
}, {
  base: 'a',
  letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
}, {
  base: 'aa',
  letters: /[\uA733]/g
}, {
  base: 'ae',
  letters: /[\u00E6\u01FD\u01E3]/g
}, {
  base: 'ao',
  letters: /[\uA735]/g
}, {
  base: 'au',
  letters: /[\uA737]/g
}, {
  base: 'av',
  letters: /[\uA739\uA73B]/g
}, {
  base: 'ay',
  letters: /[\uA73D]/g
}, {
  base: 'b',
  letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
}, {
  base: 'c',
  letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
}, {
  base: 'd',
  letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
}, {
  base: 'dz',
  letters: /[\u01F3\u01C6]/g
}, {
  base: 'e',
  letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
}, {
  base: 'f',
  letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
}, {
  base: 'g',
  letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
}, {
  base: 'h',
  letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
}, {
  base: 'hv',
  letters: /[\u0195]/g
}, {
  base: 'i',
  letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
}, {
  base: 'j',
  letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
}, {
  base: 'k',
  letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
}, {
  base: 'l',
  letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
}, {
  base: 'lj',
  letters: /[\u01C9]/g
}, {
  base: 'm',
  letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
}, {
  base: 'n',
  letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
}, {
  base: 'nj',
  letters: /[\u01CC]/g
}, {
  base: 'o',
  letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
}, {
  base: 'oi',
  letters: /[\u01A3]/g
}, {
  base: 'ou',
  letters: /[\u0223]/g
}, {
  base: 'oo',
  letters: /[\uA74F]/g
}, {
  base: 'p',
  letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
}, {
  base: 'q',
  letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
}, {
  base: 'r',
  letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
}, {
  base: 's',
  letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
}, {
  base: 't',
  letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
}, {
  base: 'tz',
  letters: /[\uA729]/g
}, {
  base: 'u',
  letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
}, {
  base: 'v',
  letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
}, {
  base: 'vy',
  letters: /[\uA761]/g
}, {
  base: 'w',
  letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
}, {
  base: 'x',
  letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
}, {
  base: 'y',
  letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
}, {
  base: 'z',
  letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
}];
var stripDiacritics = function stripDiacritics(str) {
  for (var i = 0; i < diacritics.length; i++) {
    str = str.replace(diacritics[i].letters, diacritics[i].base);
  }

  return str;
};

var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};

var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};

var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    var _ignoreCase$ignoreAcc = _objectSpread$1({
      ignoreCase: true,
      ignoreAccents: true,
      stringify: defaultStringify,
      trim: true,
      matchFrom: 'any'
    }, config),
        ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
        ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
        stringify = _ignoreCase$ignoreAcc.stringify,
        trim = _ignoreCase$ignoreAcc.trim,
        matchFrom = _ignoreCase$ignoreAcc.matchFrom;

    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);

    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
      candidate = stripDiacritics(candidate);
    }

    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var A11yText = function A11yText(props) {
  return React__default.createElement("span", _extends$1({
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    css$16({
      zIndex: 9999,
      border: 0,
      clip: 'rect(1px, 1px, 1px, 1px)',
      height: 1,
      width: 1,
      position: 'absolute',
      overflow: 'hidden',
      padding: 0,
      whiteSpace: 'nowrap',
      backgroundColor: 'red',
      color: 'blue'
    })
  }, props));
};

var DummyInput =
/*#__PURE__*/
function (_Component) {
  _inherits$1(DummyInput, _Component);

  function DummyInput() {
    _classCallCheck$1(this, DummyInput);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(DummyInput).apply(this, arguments));
  }

  _createClass$1(DummyInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inProp = _this$props.in,
          out = _this$props.out,
          onExited = _this$props.onExited,
          appear = _this$props.appear,
          enter = _this$props.enter,
          exit = _this$props.exit,
          innerRef = _this$props.innerRef,
          emotion = _this$props.emotion,
          props = _objectWithoutProperties$1(_this$props, ["in", "out", "onExited", "appear", "enter", "exit", "innerRef", "emotion"]);

      return React__default.createElement("input", _extends$1({
        ref: innerRef
      }, props, {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        css$16({
          // get rid of any default styles
          background: 0,
          border: 0,
          fontSize: 'inherit',
          outline: 0,
          padding: 0,
          // important! without `width` browsers won't allow focus
          width: 1,
          // remove cursor on desktop
          color: 'transparent',
          // remove cursor on mobile whilst maintaining "scroll into view" behaviour
          left: -100,
          opacity: 0,
          position: 'relative',
          transform: 'scale(0)'
        })
      }));
    }
  }]);

  return DummyInput;
}(React.Component);

var NodeResolver =
/*#__PURE__*/
function (_Component) {
  _inherits$1(NodeResolver, _Component);

  function NodeResolver() {
    _classCallCheck$1(this, NodeResolver);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(NodeResolver).apply(this, arguments));
  }

  _createClass$1(NodeResolver, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.innerRef(reactDom.findDOMNode(this));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.innerRef(null);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return NodeResolver;
}(React.Component);

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};

function preventTouchMove(e) {
  e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;

  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
} // `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;

var ScrollLock =
/*#__PURE__*/
function (_Component) {
  _inherits$1(ScrollLock, _Component);

  function ScrollLock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, ScrollLock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(ScrollLock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "originalStyles", {});

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "listenerOptions", {
      capture: false,
      passive: false
    });

    return _this;
  }

  _createClass$1(ScrollLock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!canUseDOM) return;
      var _this$props = this.props,
          accountForScrollbars = _this$props.accountForScrollbars,
          touchScrollTarget = _this$props.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style;

      if (accountForScrollbars) {
        // store any styles already applied to the body
        STYLE_KEYS.forEach(function (key) {
          var val = targetStyle && targetStyle[key];
          _this2.originalStyles[key] = val;
        });
      } // apply the lock styles and padding if this is the first scroll lock


      if (accountForScrollbars && activeScrollLocks < 1) {
        var currentPadding = parseInt(this.originalStyles.paddingRight, 10) || 0;
        var clientWidth = document.body ? document.body.clientWidth : 0;
        var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
        Object.keys(LOCK_STYLES).forEach(function (key) {
          var val = LOCK_STYLES[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });

        if (targetStyle) {
          targetStyle.paddingRight = "".concat(adjustedPadding, "px");
        }
      } // account for touch devices


      if (target && isTouchDevice()) {
        // Mobile Safari ignores { overflow: hidden } declaration on the body.
        target.addEventListener('touchmove', preventTouchMove, this.listenerOptions); // Allow scroll on provided target

        if (touchScrollTarget) {
          touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.addEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      } // increment active scroll locks


      activeScrollLocks += 1;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      if (!canUseDOM) return;
      var _this$props2 = this.props,
          accountForScrollbars = _this$props2.accountForScrollbars,
          touchScrollTarget = _this$props2.touchScrollTarget;
      var target = document.body;
      var targetStyle = target && target.style; // safely decrement active scroll locks

      activeScrollLocks = Math.max(activeScrollLocks - 1, 0); // reapply original body styles, if any

      if (accountForScrollbars && activeScrollLocks < 1) {
        STYLE_KEYS.forEach(function (key) {
          var val = _this3.originalStyles[key];

          if (targetStyle) {
            targetStyle[key] = val;
          }
        });
      } // remove touch listeners


      if (target && isTouchDevice()) {
        target.removeEventListener('touchmove', preventTouchMove, this.listenerOptions);

        if (touchScrollTarget) {
          touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, this.listenerOptions);
          touchScrollTarget.removeEventListener('touchmove', allowTouchMove, this.listenerOptions);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return ScrollLock;
}(React.Component);

_defineProperty$1(ScrollLock, "defaultProps", {
  accountForScrollbars: true
});

// NOTE:
// We shouldn't need this after updating to React v16.3.0, which introduces:
// - createRef() https://reactjs.org/docs/react-api.html#reactcreateref
// - forwardRef() https://reactjs.org/docs/react-api.html#reactforwardref
var ScrollBlock =
/*#__PURE__*/
function (_PureComponent) {
  _inherits$1(ScrollBlock, _PureComponent);

  function ScrollBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, ScrollBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(ScrollBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
      touchScrollTarget: null
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getScrollTarget", function (ref) {
      if (ref === _this.state.touchScrollTarget) return;

      _this.setState({
        touchScrollTarget: ref
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "blurSelectInput", function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });

    return _this;
  }

  _createClass$1(ScrollBlock, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isEnabled = _this$props.isEnabled;
      var touchScrollTarget = this.state.touchScrollTarget; // bail early if not enabled

      if (!isEnabled) return children;
      /*
       * Div
       * ------------------------------
       * blocks scrolling on non-body elements behind the menu
        * NodeResolver
       * ------------------------------
       * we need a reference to the scrollable element to "unlock" scroll on
       * mobile devices
        * ScrollLock
       * ------------------------------
       * actually does the scroll locking
       */

      return React__default.createElement("div", null, React__default.createElement("div", {
        onClick: this.blurSelectInput,
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        css$16({
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          top: 0
        })
      }), React__default.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, children), touchScrollTarget ? React__default.createElement(ScrollLock, {
        touchScrollTarget: touchScrollTarget
      }) : null);
    }
  }]);

  return ScrollBlock;
}(React.PureComponent);

var ScrollCaptor =
/*#__PURE__*/
function (_Component) {
  _inherits$1(ScrollCaptor, _Component);

  function ScrollCaptor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, ScrollCaptor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(ScrollCaptor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "isBottom", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "isTop", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "scrollTarget", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "touchStart", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "cancelScroll", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleEventDelta", function (event, delta) {
      var _this$props = _this.props,
          onBottomArrive = _this$props.onBottomArrive,
          onBottomLeave = _this$props.onBottomLeave,
          onTopArrive = _this$props.onTopArrive,
          onTopLeave = _this$props.onTopLeave;
      var _this$scrollTarget = _this.scrollTarget,
          scrollTop = _this$scrollTarget.scrollTop,
          scrollHeight = _this$scrollTarget.scrollHeight,
          clientHeight = _this$scrollTarget.clientHeight;
      var target = _this.scrollTarget;
      var isDeltaPositive = delta > 0;
      var availableScroll = scrollHeight - clientHeight - scrollTop;
      var shouldCancelScroll = false; // reset bottom/top flags

      if (availableScroll > delta && _this.isBottom) {
        if (onBottomLeave) onBottomLeave(event);
        _this.isBottom = false;
      }

      if (isDeltaPositive && _this.isTop) {
        if (onTopLeave) onTopLeave(event);
        _this.isTop = false;
      } // bottom limit


      if (isDeltaPositive && delta > availableScroll) {
        if (onBottomArrive && !_this.isBottom) {
          onBottomArrive(event);
        }

        target.scrollTop = scrollHeight;
        shouldCancelScroll = true;
        _this.isBottom = true; // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        if (onTopArrive && !_this.isTop) {
          onTopArrive(event);
        }

        target.scrollTop = 0;
        shouldCancelScroll = true;
        _this.isTop = true;
      } // cancel scroll


      if (shouldCancelScroll) {
        _this.cancelScroll(event);
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onWheel", function (event) {
      _this.handleEventDelta(event, event.deltaY);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchStart", function (event) {
      // set touch start so we can calculate touchmove delta
      _this.touchStart = event.changedTouches[0].clientY;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchMove", function (event) {
      var deltaY = _this.touchStart - event.changedTouches[0].clientY;

      _this.handleEventDelta(event, deltaY);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getScrollTarget", function (ref) {
      _this.scrollTarget = ref;
    });

    return _this;
  }

  _createClass$1(ScrollCaptor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListening(this.scrollTarget);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListening(this.scrollTarget);
    }
  }, {
    key: "startListening",
    value: function startListening(el) {
      // bail early if no scroll available
      if (!el) return;
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.addEventListener === 'function') {
        el.addEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "stopListening",
    value: function stopListening(el) {
      // bail early if no scroll available
      if (el.scrollHeight <= el.clientHeight) return; // all the if statements are to appease Flow 😢

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('wheel', this.onWheel, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchstart', this.onTouchStart, false);
      }

      if (typeof el.removeEventListener === 'function') {
        el.removeEventListener('touchmove', this.onTouchMove, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement(NodeResolver, {
        innerRef: this.getScrollTarget
      }, this.props.children);
    }
  }]);

  return ScrollCaptor;
}(React.Component);

var ScrollCaptorSwitch =
/*#__PURE__*/
function (_Component2) {
  _inherits$1(ScrollCaptorSwitch, _Component2);

  function ScrollCaptorSwitch() {
    _classCallCheck$1(this, ScrollCaptorSwitch);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(ScrollCaptorSwitch).apply(this, arguments));
  }

  _createClass$1(ScrollCaptorSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isEnabled = _this$props2.isEnabled,
          props = _objectWithoutProperties$1(_this$props2, ["isEnabled"]);

      return isEnabled ? React__default.createElement(ScrollCaptor, props) : this.props.children;
    }
  }]);

  return ScrollCaptorSwitch;
}(React.Component);

_defineProperty$1(ScrollCaptorSwitch, "defaultProps", {
  isEnabled: true
});

var instructionsAriaMessage = function instructionsAriaMessage(event) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isSearchable = context.isSearchable,
      isMulti = context.isMulti,
      label = context.label,
      isDisabled = context.isDisabled;

  switch (event) {
    case 'menu':
      return "Use Up and Down to choose options".concat(isDisabled ? '' : ', press Enter to select the currently focused option', ", press Escape to exit the menu, press Tab to select the option and exit the menu.");

    case 'input':
      return "".concat(label ? label : 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '');

    case 'value':
      return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
  }
};
var valueEventAriaMessage = function valueEventAriaMessage(event, context) {
  var value = context.value,
      isDisabled = context.isDisabled;
  if (!value) return;

  switch (event) {
    case 'deselect-option':
    case 'pop-value':
    case 'remove-value':
      return "option ".concat(value, ", deselected.");

    case 'select-option':
      return isDisabled ? "option ".concat(value, " is disabled. Select another option.") : "option ".concat(value, ", selected.");
  }
};
var valueFocusAriaMessage = function valueFocusAriaMessage(_ref) {
  var focusedValue = _ref.focusedValue,
      getOptionLabel = _ref.getOptionLabel,
      selectValue = _ref.selectValue;
  return "value ".concat(getOptionLabel(focusedValue), " focused, ").concat(selectValue.indexOf(focusedValue) + 1, " of ").concat(selectValue.length, ".");
};
var optionFocusAriaMessage = function optionFocusAriaMessage(_ref2) {
  var focusedOption = _ref2.focusedOption,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options;
  return "option ".concat(getOptionLabel(focusedOption), " focused").concat(focusedOption.isDisabled ? ' disabled' : '', ", ").concat(options.indexOf(focusedOption) + 1, " of ").concat(options.length, ".");
};
var resultsAriaMessage = function resultsAriaMessage(_ref3) {
  var inputValue = _ref3.inputValue,
      screenReaderMessage = _ref3.screenReaderMessage;
  return "".concat(screenReaderMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
};

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isRtl = _ref.isRtl;
  return {
    direction: isRtl ? 'rtl' : null,
    pointerEvents: isDisabled ? 'none' : null,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isDisabled = props.isDisabled,
      isRtl = props.isRtl;
  return React__default.createElement("div", _extends$1({
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('container', props)), {
      '--is-disabled': isDisabled,
      '--is-rtl': isRtl
    }, className)
  }, innerProps), children);
}; // ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px"),
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  };
};
var ValueContainer =
/*#__PURE__*/
function (_Component) {
  _inherits$1(ValueContainer, _Component);

  function ValueContainer() {
    _classCallCheck$1(this, ValueContainer);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(ValueContainer).apply(this, arguments));
  }

  _createClass$1(ValueContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          cx = _this$props.cx,
          isMulti = _this$props.isMulti,
          getStyles = _this$props.getStyles,
          hasValue = _this$props.hasValue;
      return React__default.createElement("div", {
        className: cx(
        /*#__PURE__*/
        css$16(getStyles('valueContainer', this.props)), {
          'value-container': true,
          'value-container--is-multi': isMulti,
          'value-container--has-value': hasValue
        }, className)
      }, children);
    }
  }]);

  return ValueContainer;
}(React.Component); // ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles;
  return React__default.createElement("div", {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('indicatorsContainer', props)), {
      'indicators': true
    }, className)
  }, children);
};

// ==============================
// Dropdown & Clear Icons
// ==============================
var Svg = function Svg(_ref) {
  var size = _ref.size,
      props = _objectWithoutProperties$1(_ref, ["size"]);

  return React__default.createElement("svg", _extends$1({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    css$16({
      display: 'inline-block',
      fill: 'currentColor',
      lineHeight: 1,
      stroke: 'currentColor',
      strokeWidth: 0
    })
  }, props));
};

var CrossIcon = function CrossIcon(props) {
  return React__default.createElement(Svg, _extends$1({
    size: 20
  }, props), React__default.createElement("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return React__default.createElement(Svg, _extends$1({
    size: 20
  }, props), React__default.createElement("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}; // ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref2) {
  var isFocused = _ref2.isFocused,
      _ref2$theme = _ref2.theme,
      baseUnit = _ref2$theme.spacing.baseUnit,
      colors = _ref2$theme.colors;
  return {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  };
};

var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('dropdownIndicator', props)), {
      'indicator': true,
      'dropdown-indicator': true
    }, className)
  }), children || React__default.createElement(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('clearIndicator', props)), {
      'indicator': true,
      'clear-indicator': true
    }, className)
  }), children || React__default.createElement(CrossIcon, null));
}; // ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref3) {
  var isDisabled = _ref3.isDisabled,
      _ref3$theme = _ref3.theme,
      baseUnit = _ref3$theme.spacing.baseUnit,
      colors = _ref3$theme.colors;
  return {
    alignSelf: 'stretch',
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2,
    width: 1
  };
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return React__default.createElement("span", _extends$1({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('indicatorSeparator', props)), {
      'indicator-separator': true
    }, className)
  }));
}; // ==============================
// Loading
// ==============================

var keyframesName = 'react-select-loading-indicator';
var keyframesInjected = false;
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref4) {
  var isFocused = _ref4.isFocused,
      size = _ref4.size,
      _ref4$theme = _ref4.theme,
      colors = _ref4$theme.colors,
      baseUnit = _ref4$theme.spacing.baseUnit;
  return {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    display: 'flex',
    padding: baseUnit * 2,
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  };
};

var LoadingDot = function LoadingDot(_ref5) {
  var color = _ref5.color,
      delay = _ref5.delay,
      offset = _ref5.offset;
  return React__default.createElement("span", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    css$16({
      animationDuration: '1s',
      animationDelay: "".concat(delay, "ms"),
      animationIterationCount: 'infinite',
      animationName: keyframesName,
      animationTimingFunction: 'ease-in-out',
      backgroundColor: color,
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : null,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    })
  });
};

var LoadingIndicator = function LoadingIndicator(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps,
      isFocused = props.isFocused,
      isRtl = props.isRtl,
      colors = props.theme.colors;
  var color = isFocused ? colors.neutral80 : colors.neutral20;

  if (!keyframesInjected) {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal("@keyframes ", keyframesName, "{0%,80%,100%{opacity:0;}40%{opacity:1;}};");
    keyframesInjected = true;
  }

  return React__default.createElement("div", _extends$1({}, innerProps, {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('loadingIndicator', props)), {
      'indicator': true,
      'loading-indicator': true
    }, className)
  }), React__default.createElement(LoadingDot, {
    color: color,
    delay: 0,
    offset: isRtl
  }), React__default.createElement(LoadingDot, {
    color: color,
    delay: 160,
    offset: true
  }), React__default.createElement(LoadingDot, {
    color: color,
    delay: 320,
    offset: !isRtl
  }));
};
LoadingIndicator.defaultProps = {
  size: 4
};

var css$1$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      _ref$theme = _ref.theme,
      colors = _ref$theme.colors,
      borderRadius = _ref$theme.borderRadius,
      spacing = _ref$theme.spacing;
  return {
    alignItems: 'center',
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : null,
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms',
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  };
};

var Control = function Control(props) {
  var children = props.children,
      cx = props.cx,
      getStyles = props.getStyles,
      className = props.className,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      innerRef = props.innerRef,
      innerProps = props.innerProps,
      menuIsOpen = props.menuIsOpen;
  return React__default.createElement("div", _extends$1({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('control', props)), {
      'control': true,
      'control--is-disabled': isDisabled,
      'control--is-focused': isFocused,
      'control--menu-is-open': menuIsOpen
    }, className)
  }, innerProps), children);
};

var groupCSS = function groupCSS(_ref) {
  var spacing = _ref.theme.spacing;
  return {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};

var Group = function Group(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      headingProps = props.headingProps,
      label = props.label,
      theme = props.theme,
      selectProps = props.selectProps;
  return React__default.createElement("div", {
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('group', props)), {
      'group': true
    }, className)
  }, React__default.createElement(Heading, _extends$1({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    cx: cx
  }), label), React__default.createElement("div", null, children));
};

var groupHeadingCSS = function groupHeadingCSS(_ref2) {
  var spacing = _ref2.theme.spacing;
  return {
    color: '#999',
    cursor: 'default',
    display: 'block',
    fontSize: '75%',
    fontWeight: '500',
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  };
};
var GroupHeading = function GroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      theme = props.theme,
      selectProps = props.selectProps,
      cleanProps = _objectWithoutProperties$1(props, ["className", "cx", "getStyles", "theme", "selectProps"]);

  return React__default.createElement("div", _extends$1({
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('groupHeading', _objectSpread$1({
      theme: theme
    }, cleanProps))), {
      'group-heading': true
    }, className)
  }, cleanProps));
};

var inputCSS = function inputCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    visibility: isDisabled ? 'hidden' : 'visible',
    color: colors.neutral80
  };
};

var inputStyle = function inputStyle(isHidden) {
  return {
    background: 0,
    border: 0,
    fontSize: 'inherit',
    opacity: isHidden ? 0 : 1,
    outline: 0,
    padding: 0,
    color: 'inherit'
  };
};

var Input$1 = function Input(_ref2) {
  var className = _ref2.className,
      cx = _ref2.cx,
      getStyles = _ref2.getStyles,
      innerRef = _ref2.innerRef,
      isHidden = _ref2.isHidden,
      isDisabled = _ref2.isDisabled,
      theme = _ref2.theme,
      selectProps = _ref2.selectProps,
      props = _objectWithoutProperties$1(_ref2, ["className", "cx", "getStyles", "innerRef", "isHidden", "isDisabled", "theme", "selectProps"]);

  return React__default.createElement("div", {
    className:
    /*#__PURE__*/

    /*#__PURE__*/
    css$16(getStyles('input', _objectSpread$1({
      theme: theme
    }, props)))
  }, React__default.createElement(AutosizeInput, _extends$1({
    className: cx(null, {
      'input': true
    }, className),
    inputRef: innerRef,
    inputStyle: inputStyle(isHidden),
    disabled: isDisabled
  }, props)));
};

var multiValueCSS = function multiValueCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      borderRadius = _ref$theme.borderRadius,
      colors = _ref$theme.colors;
  return {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    display: 'flex',
    margin: spacing.baseUnit / 2,
    minWidth: 0 // resolves flex/text-overflow bug

  };
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2) {
  var _ref2$theme = _ref2.theme,
      borderRadius = _ref2$theme.borderRadius,
      colors = _ref2$theme.colors,
      cropWithEllipsis = _ref2.cropWithEllipsis;
  return {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    overflow: 'hidden',
    padding: 3,
    paddingLeft: 6,
    textOverflow: cropWithEllipsis ? 'ellipsis' : null,
    whiteSpace: 'nowrap'
  };
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3) {
  var _ref3$theme = _ref3.theme,
      spacing = _ref3$theme.spacing,
      borderRadius = _ref3$theme.borderRadius,
      colors = _ref3$theme.colors,
      isFocused = _ref3.isFocused;
  return {
    alignItems: 'center',
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused && colors.dangerLight,
    display: 'flex',
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  };
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
      innerProps = _ref4.innerProps;
  return React__default.createElement("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
var MultiValueRemove =
/*#__PURE__*/
function (_Component) {
  _inherits$1(MultiValueRemove, _Component);

  function MultiValueRemove() {
    _classCallCheck$1(this, MultiValueRemove);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(MultiValueRemove).apply(this, arguments));
  }

  _createClass$1(MultiValueRemove, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerProps = _this$props.innerProps;
      return React__default.createElement("div", innerProps, children || React__default.createElement(CrossIcon, {
        size: 14
      }));
    }
  }]);

  return MultiValueRemove;
}(React.Component);

var MultiValue =
/*#__PURE__*/
function (_Component2) {
  _inherits$1(MultiValue, _Component2);

  function MultiValue() {
    _classCallCheck$1(this, MultiValue);

    return _possibleConstructorReturn$1(this, _getPrototypeOf$1(MultiValue).apply(this, arguments));
  }

  _createClass$1(MultiValue, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          components = _this$props2.components,
          cx = _this$props2.cx,
          data = _this$props2.data,
          getStyles = _this$props2.getStyles,
          innerProps = _this$props2.innerProps,
          isDisabled = _this$props2.isDisabled,
          removeProps = _this$props2.removeProps,
          selectProps = _this$props2.selectProps;
      var Container = components.Container,
          Label = components.Label,
          Remove = components.Remove;

      var containerInnerProps = _objectSpread$1({
        className: cx(
        /*#__PURE__*/
        css$16(getStyles('multiValue', this.props)), {
          'multi-value': true,
          'multi-value--is-disabled': isDisabled
        }, className)
      }, innerProps);

      var labelInnerProps = {
        className: cx(
        /*#__PURE__*/
        css$16(getStyles('multiValueLabel', this.props)), {
          'multi-value__label': true
        }, className)
      };

      var removeInnerProps = _objectSpread$1({
        className: cx(
        /*#__PURE__*/
        css$16(getStyles('multiValueRemove', this.props)), {
          'multi-value__remove': true
        }, className)
      }, removeProps);

      return React__default.createElement(Container, {
        data: data,
        innerProps: containerInnerProps,
        selectProps: selectProps
      }, React__default.createElement(Label, {
        data: data,
        innerProps: labelInnerProps,
        selectProps: selectProps
      }, children), React__default.createElement(Remove, {
        data: data,
        innerProps: removeInnerProps,
        selectProps: selectProps
      }));
    }
  }]);

  return MultiValue;
}(React.Component);

_defineProperty$1(MultiValue, "defaultProps", {
  cropWithEllipsis: true
});

var optionCSS = function optionCSS(_ref) {
  var isDisabled = _ref.isDisabled,
      isFocused = _ref.isFocused,
      isSelected = _ref.isSelected,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: isSelected ? colors.primary : colors.primary50
    }
  };
};

var Option = function Option(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({
    ref: innerRef,
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('option', props)), {
      'option': true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className)
  }, innerProps), children);
};

var placeholderCSS = function placeholderCSS(_ref) {
  var _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var Placeholder = function Placeholder(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('placeholder', props)), {
      'placeholder': true
    }, className)
  }, innerProps), children);
};

var css$2$1 = function css$$1(_ref) {
  var isDisabled = _ref.isDisabled,
      _ref$theme = _ref.theme,
      spacing = _ref$theme.spacing,
      colors = _ref$theme.colors;
  return {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2,
    maxWidth: "calc(100% - ".concat(spacing.baseUnit * 2, "px)"),
    overflow: 'hidden',
    position: 'absolute',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    top: '50%',
    transform: 'translateY(-50%)'
  };
};

var SingleValue = function SingleValue(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      innerProps = props.innerProps;
  return React__default.createElement("div", _extends$1({
    className: cx(
    /*#__PURE__*/
    css$16(getStyles('singleValue', props)), {
      'single-value': true,
      'single-value--is-disabled': isDisabled
    }, className)
  }, innerProps), children);
};

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option,
  Placeholder: Placeholder,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return _objectSpread$1({}, components, props.components);
};

var defaultStyles = {
  clearIndicator: clearIndicatorCSS,
  container: containerCSS,
  control: css$1$1,
  dropdownIndicator: dropdownIndicatorCSS,
  group: groupCSS,
  groupHeading: groupHeadingCSS,
  indicatorsContainer: indicatorsContainerCSS,
  indicatorSeparator: indicatorSeparatorCSS,
  input: inputCSS,
  loadingIndicator: loadingIndicatorCSS,
  loadingMessage: loadingMessageCSS,
  menu: menuCSS,
  menuList: menuListCSS,
  menuPortal: menuPortalCSS,
  multiValue: multiValueCSS,
  multiValueLabel: multiValueLabelCSS,
  multiValueRemove: multiValueRemoveCSS,
  noOptionsMessage: noOptionsMessageCSS,
  option: optionCSS,
  placeholder: placeholderCSS,
  singleValue: css$2$1,
  valueContainer: valueContainerCSS
}; // Merge Utility

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4;
var baseUnit = 4;
/* Used to calculate consistent margin/padding on elements */

var controlHeight = 38;
/* The minimum height of the control */

var menuGutter = baseUnit * 2;
/* The amount of space between the control and menu */

var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  backspaceRemovesValue: true,
  blurInputOnSelect: isTouchCapable(),
  captureMenuScroll: !isTouchCapable(),
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel,
  getOptionValue: getOptionValue,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !isMobileDevice(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: '0',
  tabSelectsValue: true
};
var instanceId = 1;

var Select$1 =
/*#__PURE__*/
function (_Component) {
  _inherits$1(Select, _Component);

  // Misc. Instance Properties
  // ------------------------------
  // TODO
  // Refs
  // ------------------------------
  // Lifecycle
  // ------------------------------
  function Select(_props) {
    var _this;

    _classCallCheck$1(this, Select);

    _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Select).call(this, _props));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
      ariaLiveSelection: '',
      ariaLiveContext: '',
      focusedOption: null,
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      isComposing: false,
      menuOptions: {
        render: [],
        focusable: []
      },
      selectValue: []
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "blockOptionHover", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "clearFocusValueOnUpdate", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "commonProps", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "components", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "hasGroups", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "initialTouchX", 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "initialTouchY", 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "inputIsHiddenAfterUpdate", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "instancePrefix", '');

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "openAfterFocus", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "scrollToFocusedOptionOnUpdate", false);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "userIsDragging", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "controlRef", null);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getControlRef", function (ref) {
      _this.controlRef = ref;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "focusedOptionRef", null);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getFocusedOptionRef", function (ref) {
      _this.focusedOptionRef = ref;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "menuListRef", null);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getMenuListRef", function (ref) {
      _this.menuListRef = ref;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "inputRef", null);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getInputRef", function (ref) {
      _this.inputRef = ref;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "cacheComponents", function (components$$1) {
      _this.components = defaultComponents({
        components: components$$1
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "focus", _this.focusInput);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "blur", _this.blurInput);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onChange", function (newValue, actionMeta) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      onChange(newValue, _objectSpread$1({}, actionMeta, {
        name: name
      }));
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "setValue", function (newValue) {
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set-value';
      var option = arguments.length > 2 ? arguments[2] : undefined;
      var _this$props2 = _this.props,
          closeMenuOnSelect = _this$props2.closeMenuOnSelect,
          isMulti = _this$props2.isMulti;

      _this.onInputChange('', {
        action: 'set-value'
      });

      if (closeMenuOnSelect) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } // when the select value should change, we should reset focusedValue


      _this.clearFocusValueOnUpdate = true;

      _this.onChange(newValue, {
        action: action,
        option: option
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "selectOption", function (newValue) {
      var _this$props3 = _this.props,
          blurInputOnSelect = _this$props3.blurInputOnSelect,
          isMulti = _this$props3.isMulti;
      var selectValue = _this.state.selectValue;

      if (isMulti) {
        if (_this.isOptionSelected(newValue, selectValue)) {
          var candidate = _this.getOptionValue(newValue);

          _this.setValue(selectValue.filter(function (i) {
            return _this.getOptionValue(i) !== candidate;
          }), 'deselect-option', newValue);

          _this.announceAriaLiveSelection({
            event: 'deselect-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          if (!_this.isOptionDisabled(newValue, selectValue)) {
            _this.setValue([].concat(_toConsumableArray$1(selectValue), [newValue]), 'select-option', newValue);

            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue)
              }
            });
          } else {
            // announce that option is disabled
            _this.announceAriaLiveSelection({
              event: 'select-option',
              context: {
                value: _this.getOptionLabel(newValue),
                isDisabled: true
              }
            });
          }
        }
      } else {
        if (!_this.isOptionDisabled(newValue, selectValue)) {
          _this.setValue(newValue, 'select-option');

          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue)
            }
          });
        } else {
          // announce that option is disabled
          _this.announceAriaLiveSelection({
            event: 'select-option',
            context: {
              value: _this.getOptionLabel(newValue),
              isDisabled: true
            }
          });
        }
      }

      if (blurInputOnSelect) {
        _this.blurInput();
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "removeValue", function (removedValue) {
      var selectValue = _this.state.selectValue;

      var candidate = _this.getOptionValue(removedValue);

      _this.onChange(selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      }), {
        action: 'remove-value',
        removedValue: removedValue
      });

      _this.announceAriaLiveSelection({
        event: 'remove-value',
        context: {
          value: removedValue ? _this.getOptionLabel(removedValue) : ''
        }
      });

      _this.focusInput();
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "clearValue", function () {
      var isMulti = _this.props.isMulti;

      _this.onChange(isMulti ? [] : null, {
        action: 'clear'
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "popValue", function () {
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];

      _this.announceAriaLiveSelection({
        event: 'pop-value',
        context: {
          value: lastSelectedValue ? _this.getOptionLabel(lastSelectedValue) : ''
        }
      });

      _this.onChange(selectValue.slice(0, selectValue.length - 1), {
        action: 'pop-value',
        removedValue: lastSelectedValue
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getOptionLabel", function (data) {
      return _this.props.getOptionLabel(data);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getOptionValue", function (data) {
      return _this.props.getOptionValue(data);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getStyles", function (key, props) {
      var base = defaultStyles[key](props);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getElementId", function (element) {
      return "".concat(_this.instancePrefix, "-").concat(element);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getActiveDescendentId", function () {
      var menuIsOpen = _this.props.menuIsOpen;
      var _this$state = _this.state,
          menuOptions = _this$state.menuOptions,
          focusedOption = _this$state.focusedOption;
      if (!focusedOption || !menuIsOpen) return undefined;
      var index = menuOptions.focusable.indexOf(focusedOption);
      var option = menuOptions.render[index];
      return option && option.key;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "announceAriaLiveSelection", function (_ref2) {
      var event = _ref2.event,
          context = _ref2.context;

      _this.setState({
        ariaLiveSelection: valueEventAriaMessage(event, context)
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "announceAriaLiveContext", function (_ref3) {
      var event = _ref3.event,
          context = _ref3.context;

      _this.setState({
        ariaLiveContext: instructionsAriaMessage(event, _objectSpread$1({}, context, {
          label: _this.props['aria-label']
        }))
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuMouseDown", function (event) {
      if (event.button !== 0) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();

      _this.focusInput();
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuMouseMove", function (event) {
      _this.blockOptionHover = false;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onControlMouseDown", function (event) {
      var openMenuOnClick = _this.props.openMenuOnClick;

      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }

        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        //$FlowFixMe
        if (event.target.tagName !== 'INPUT') {
          _this.onMenuClose();
        }
      } //$FlowFixMe


      if (event.target.tagName !== 'INPUT') {
        event.preventDefault();
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onDropdownIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
          isMulti = _this$props4.isMulti,
          menuIsOpen = _this$props4.menuIsOpen;

      _this.focusInput();

      if (menuIsOpen) {
        _this.inputIsHiddenAfterUpdate = !isMulti;

        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }

      event.preventDefault();
      event.stopPropagation();
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onClearIndicatorMouseDown", function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }

      _this.clearValue();

      event.stopPropagation();
      _this.openAfterFocus = false;
      setTimeout(function () {
        return _this.focusInput();
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onScroll", function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && isDocumentElement(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onCompositionStart", function () {
      _this.setState({
        isComposing: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onCompositionEnd", function () {
      _this.setState({
        isComposing: false
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchStart", function (_ref4) {
      var touches = _ref4.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchMove", function (_ref5) {
      var touches = _ref5.touches;
      var touch = touches.item(0);

      if (!touch) {
        return;
      }

      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onTouchEnd", function (event) {
      if (_this.userIsDragging) return; // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).

      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      } // reset move vars


      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onControlTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onControlMouseDown(event);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onClearIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onClearIndicatorMouseDown(event);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onDropdownIndicatorTouchEnd", function (event) {
      if (_this.userIsDragging) return;

      _this.onDropdownIndicatorMouseDown(event);
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleInputChange", function (event) {
      var inputValue = event.currentTarget.value;
      _this.inputIsHiddenAfterUpdate = false;

      _this.onInputChange(inputValue, {
        action: 'input-change'
      });

      _this.onMenuOpen();
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onInputFocus", function (event) {
      var _this$props5 = _this.props,
          isSearchable = _this$props5.isSearchable,
          isMulti = _this$props5.isMulti;

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      _this.inputIsHiddenAfterUpdate = false;

      _this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });

      _this.setState({
        isFocused: true
      });

      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }

      _this.openAfterFocus = false;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onInputBlur", function (event) {
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();

        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.onInputChange('', {
        action: 'input-blur'
      });

      _this.onMenuClose();

      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onOptionHover", function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }

      _this.setState({
        focusedOption: focusedOption
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "shouldHideSelectedOptions", function () {
      var _this$props6 = _this.props,
          hideSelectedOptions = _this$props6.hideSelectedOptions,
          isMulti = _this$props6.isMulti;
      if (hideSelectedOptions === undefined) return isMulti;
      return hideSelectedOptions;
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onKeyDown", function (event) {
      var _this$props7 = _this.props,
          isMulti = _this$props7.isMulti,
          backspaceRemovesValue = _this$props7.backspaceRemovesValue,
          escapeClearsValue = _this$props7.escapeClearsValue,
          inputValue = _this$props7.inputValue,
          isClearable = _this$props7.isClearable,
          isDisabled = _this$props7.isDisabled,
          menuIsOpen = _this$props7.menuIsOpen,
          onKeyDown = _this$props7.onKeyDown,
          tabSelectsValue = _this$props7.tabSelectsValue,
          openMenuOnFocus = _this$props7.openMenuOnFocus;
      var _this$state2 = _this.state,
          isComposing = _this$state2.isComposing,
          focusedOption = _this$state2.focusedOption,
          focusedValue = _this$state2.focusedValue,
          selectValue = _this$state2.selectValue;
      if (isDisabled) return;

      if (typeof onKeyDown === 'function') {
        onKeyDown(event);

        if (event.defaultPrevented) {
          return;
        }
      } // Block option hover events when the user has just pressed a key


      _this.blockOptionHover = true;

      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;

          _this.focusValue('previous');

          break;

        case 'ArrowRight':
          if (!isMulti || inputValue) return;

          _this.focusValue('next');

          break;

        case 'Delete':
        case 'Backspace':
          if (inputValue) return;

          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;

            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }

          break;

        case 'Tab':
          if (isComposing) return;

          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption || // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }

          _this.selectOption(focusedOption);

          break;

        case 'Enter':
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (isComposing) return;

            _this.selectOption(focusedOption);

            break;
          }

          return;

        case 'Escape':
          if (menuIsOpen) {
            _this.inputIsHiddenAfterUpdate = false;

            _this.onInputChange('', {
              action: 'menu-close'
            });

            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }

          break;

        case ' ':
          // space
          if (inputValue) {
            return;
          }

          if (!menuIsOpen) {
            _this.openMenu('first');

            break;
          }

          if (!focusedOption) return;

          _this.selectOption(focusedOption);

          break;

        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }

          break;

        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }

          break;

        case 'PageUp':
          if (!menuIsOpen) return;

          _this.focusOption('pageup');

          break;

        case 'PageDown':
          if (!menuIsOpen) return;

          _this.focusOption('pagedown');

          break;

        case 'Home':
          if (!menuIsOpen) return;

          _this.focusOption('first');

          break;

        case 'End':
          if (!menuIsOpen) return;

          _this.focusOption('last');

          break;

        default:
          return;
      }

      event.preventDefault();
    });

    var value = _props.value;
    _this.cacheComponents = index(_this.cacheComponents, exportedEqual).bind(_assertThisInitialized$1(_assertThisInitialized$1(_this)));

    _this.cacheComponents(_props.components);

    _this.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);

    var _selectValue = cleanValue(value);

    var _menuOptions = _this.buildMenuOptions(_props, _selectValue);

    _this.state.menuOptions = _menuOptions;
    _this.state.selectValue = _selectValue;
    return _this;
  }

  _createClass$1(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();

      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }

      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props8 = this.props,
          options = _this$props8.options,
          value = _this$props8.value,
          inputValue = _this$props8.inputValue; // re-cache custom components

      this.cacheComponents(nextProps.components); // rebuild the menu options

      if (nextProps.value !== value || nextProps.options !== options || nextProps.inputValue !== inputValue) {
        var selectValue = cleanValue(nextProps.value);
        var menuOptions = this.buildMenuOptions(nextProps, selectValue);
        var focusedValue = this.getNextFocusedValue(selectValue);
        var focusedOption = this.getNextFocusedOption(menuOptions.focusable);
        this.setState({
          menuOptions: menuOptions,
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedValue: focusedValue
        });
      } // some updates should toggle the state of the input visibility


      if (this.inputIsHiddenAfterUpdate != null) {
        this.setState({
          inputIsHidden: this.inputIsHiddenAfterUpdate
        });
        delete this.inputIsHiddenAfterUpdate;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props9 = this.props,
          isDisabled = _this$props9.isDisabled,
          menuIsOpen = _this$props9.menuIsOpen;
      var isFocused = this.state.isFocused;

      if ( // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled || // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      } // scroll the focused option into view if necessary


      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        scrollIntoView(this.menuListRef, this.focusedOptionRef);
      }

      this.scrollToFocusedOptionOnUpdate = false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }
  }, {
    key: "onMenuOpen",
    // ==============================
    // Consumer Handlers
    // ==============================
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      var _this$props10 = this.props,
          isSearchable = _this$props10.isSearchable,
          isMulti = _this$props10.isMulti;
      this.announceAriaLiveContext({
        event: 'input',
        context: {
          isSearchable: isSearchable,
          isMulti: isMulti
        }
      });
      this.onInputChange('', {
        action: 'menu-close'
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    } // ==============================
    // Methods
    // ==============================

  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    } // aliased for consumers

  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this$state3 = this.state,
          menuOptions = _this$state3.menuOptions,
          selectValue = _this$state3.selectValue,
          isFocused = _this$state3.isFocused;
      var isMulti = this.props.isMulti;
      var openAtIndex = focusOption === 'first' ? 0 : menuOptions.focusable.length - 1;

      if (!isMulti) {
        var selectedIndex = menuOptions.focusable.indexOf(selectValue[0]);

        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      } // only scroll if the menu isn't already open


      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.inputIsHiddenAfterUpdate = false;
      this.onMenuOpen();
      this.setState({
        focusedValue: null,
        focusedOption: menuOptions.focusable[openAtIndex]
      });
      this.announceAriaLiveContext({
        event: 'menu'
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$props11 = this.props,
          isMulti = _this$props11.isMulti,
          isSearchable = _this$props11.isSearchable;
      var _this$state4 = this.state,
          selectValue = _this$state4.selectValue,
          focusedValue = _this$state4.focusedValue; // Only multiselects support value focusing

      if (!isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);

      if (!focusedValue) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'value'
        });
      }

      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;

      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }

          break;

        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }

          break;
      }

      if (nextFocus === -1) {
        this.announceAriaLiveContext({
          event: 'input',
          context: {
            isSearchable: isSearchable,
            isMulti: isMulti
          }
        });
      }

      this.setState({
        inputIsHidden: nextFocus === -1 ? false : true,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var _this$state5 = this.state,
          focusedOption = _this$state5.focusedOption,
          menuOptions = _this$state5.menuOptions;
      var options = menuOptions.focusable;
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'

      var focusedIndex = options.indexOf(focusedOption);

      if (!focusedOption) {
        focusedIndex = -1;
        this.announceAriaLiveContext({
          event: 'menu'
        });
      }

      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }

      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null
      });
      this.announceAriaLiveContext({
        event: 'menu',
        context: {
          isDisabled: isOptionDisabled(options[nextFocus])
        }
      });
    }
  }, {
    key: "getTheme",
    // ==============================
    // Getters
    // ==============================
    value: function getTheme() {
      // Use the default theme if there are no customizations.
      if (!this.props.theme) {
        return defaultTheme;
      } // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.


      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      } // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.


      return _objectSpread$1({}, defaultTheme, this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
          getStyles = this.getStyles,
          setValue = this.setValue,
          selectOption = this.selectOption,
          props = this.props;
      var classNamePrefix = props.classNamePrefix,
          isMulti = props.isMulti,
          isRtl = props.isRtl,
          options = props.options;
      var selectValue = this.state.selectValue;
      var hasValue = this.hasValue();

      var getValue = function getValue() {
        return selectValue;
      };

      var cx = classNames.bind(null, classNamePrefix);
      return {
        cx: cx,
        clearValue: clearValue,
        getStyles: getStyles,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        setValue: setValue,
        selectProps: props,
        theme: this.getTheme()
      };
    }
  }, {
    key: "getNextFocusedValue",
    value: function getNextFocusedValue(nextSelectValue) {
      if (this.clearFocusValueOnUpdate) {
        this.clearFocusValueOnUpdate = false;
        return null;
      }

      var _this$state6 = this.state,
          focusedValue = _this$state6.focusedValue,
          lastSelectValue = _this$state6.selectValue;
      var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);

      if (lastFocusedIndex > -1) {
        var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);

        if (nextFocusedIndex > -1) {
          // the focused value is still in the selectValue, return it
          return focusedValue;
        } else if (lastFocusedIndex < nextSelectValue.length) {
          // the focusedValue is not present in the next selectValue array by
          // reference, so return the new value at the same index
          return nextSelectValue[lastFocusedIndex];
        }
      }

      return null;
    }
  }, {
    key: "getNextFocusedOption",
    value: function getNextFocusedOption(options) {
      var lastFocusedOption = this.state.focusedOption;
      return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.state.menuOptions.render.length;
    }
  }, {
    key: "countOptions",
    value: function countOptions() {
      return this.state.menuOptions.focusable.length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props12 = this.props,
          isClearable = _this$props12.isClearable,
          isMulti = _this$props12.isMulti; // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable

      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled$$1(option, selectValue) {
      return typeof this.props.isOptionDisabled === 'function' ? this.props.isOptionDisabled(option, selectValue) : false;
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      var _this2 = this;

      if (selectValue.indexOf(option) > -1) return true;

      if (typeof this.props.isOptionSelected === 'function') {
        return this.props.isOptionSelected(option, selectValue);
      }

      var candidate = this.getOptionValue(option);
      return selectValue.some(function (i) {
        return _this2.getOptionValue(i) === candidate;
      });
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return this.props.filterOption ? this.props.filterOption(option, inputValue) : true;
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var inputValue = this.props.inputValue;
        var selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: inputValue,
          selectValue: selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel$$1(data) {
      return this.props.formatGroupLabel(data);
    } // ==============================
    // Mouse Handlers
    // ==============================

  }, {
    key: "startListeningComposition",
    // ==============================
    // Composition Handlers
    // ==============================
    value: function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    // ==============================
    // Touch Handlers
    // ==============================
    value: function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "buildMenuOptions",
    // ==============================
    // Menu Options
    // ==============================
    value: function buildMenuOptions(props, selectValue) {
      var _this3 = this;

      var _props$inputValue = props.inputValue,
          inputValue = _props$inputValue === void 0 ? '' : _props$inputValue,
          options = props.options;

      var toOption = function toOption(option, id) {
        var isDisabled = _this3.isOptionDisabled(option, selectValue);

        var isSelected = _this3.isOptionSelected(option, selectValue);

        var label = _this3.getOptionLabel(option);

        var value = _this3.getOptionValue(option);

        if (_this3.shouldHideSelectedOptions() && isSelected || !_this3.filterOption({
          label: label,
          value: value,
          data: option
        }, inputValue)) {
          return;
        }

        var onHover = isDisabled ? undefined : function () {
          return _this3.onOptionHover(option);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this3.selectOption(option);
        };
        var optionId = "".concat(_this3.getElementId('option'), "-").concat(id);
        return {
          innerProps: {
            id: optionId,
            onClick: onSelect,
            onMouseMove: onHover,
            onMouseOver: onHover,
            tabIndex: -1
          },
          data: option,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: 'option',
          value: value
        };
      };

      return options.reduce(function (acc, item, itemIndex) {
        if (item.options) {
          // TODO needs a tidier implementation
          if (!_this3.hasGroups) _this3.hasGroups = true;
          var items = item.options;
          var children = items.map(function (child, i) {
            var option = toOption(child, "".concat(itemIndex, "-").concat(i));
            if (option) acc.focusable.push(child);
            return option;
          }).filter(Boolean);

          if (children.length) {
            var groupId = "".concat(_this3.getElementId('group'), "-").concat(itemIndex);
            acc.render.push({
              type: 'group',
              key: groupId,
              data: item,
              options: children
            });
          }
        } else {
          var option = toOption(item, "".concat(itemIndex));

          if (option) {
            acc.render.push(option);
            acc.focusable.push(item);
          }
        }

        return acc;
      }, {
        render: [],
        focusable: []
      });
    } // ==============================
    // Renderers
    // ==============================

  }, {
    key: "constructAriaLiveMessage",
    value: function constructAriaLiveMessage() {
      var _this$state7 = this.state,
          ariaLiveContext = _this$state7.ariaLiveContext,
          selectValue = _this$state7.selectValue,
          focusedValue = _this$state7.focusedValue,
          focusedOption = _this$state7.focusedOption;
      var _this$props13 = this.props,
          options = _this$props13.options,
          menuIsOpen = _this$props13.menuIsOpen,
          inputValue = _this$props13.inputValue,
          screenReaderStatus = _this$props13.screenReaderStatus; // An aria live message representing the currently focused value in the select.

      var focusedValueMsg = focusedValue ? valueFocusAriaMessage({
        focusedValue: focusedValue,
        getOptionLabel: this.getOptionLabel,
        selectValue: selectValue
      }) : ''; // An aria live message representing the currently focused option in the select.

      var focusedOptionMsg = focusedOption && menuIsOpen ? optionFocusAriaMessage({
        focusedOption: focusedOption,
        getOptionLabel: this.getOptionLabel,
        options: options
      }) : ''; // An aria live message representing the set of focusable results and current searchterm/inputvalue.

      var resultsMsg = resultsAriaMessage({
        inputValue: inputValue,
        screenReaderMessage: screenReaderStatus({
          count: this.countOptions()
        })
      });
      return "".concat(focusedValueMsg, " ").concat(focusedOptionMsg, " ").concat(resultsMsg, " ").concat(ariaLiveContext);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this$props14 = this.props,
          isDisabled = _this$props14.isDisabled,
          isSearchable = _this$props14.isSearchable,
          inputId = _this$props14.inputId,
          inputValue = _this$props14.inputValue,
          tabIndex = _this$props14.tabIndex;
      var Input = this.components.Input;
      var inputIsHidden = this.state.inputIsHidden;
      var id = inputId || this.getElementId('input');

      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return React__default.createElement(DummyInput, {
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: noop,
          onFocus: this.onInputFocus,
          readOnly: true,
          disabled: isDisabled,
          tabIndex: tabIndex,
          value: ""
        });
      } // aria attributes makes the JSX "noisy", separated for clarity


      var ariaAttributes = {
        'aria-autocomplete': 'list',
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby']
      };
      var _this$commonProps = this.commonProps,
          cx = _this$commonProps.cx,
          theme = _this$commonProps.theme,
          selectProps = _this$commonProps.selectProps;
      return React__default.createElement(Input, _extends$1({
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        cx: cx,
        getStyles: this.getStyles,
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        selectProps: selectProps,
        spellCheck: "false",
        tabIndex: tabIndex,
        theme: theme,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this4 = this;

      var _this$components = this.components,
          MultiValue = _this$components.MultiValue,
          MultiValueContainer = _this$components.MultiValueContainer,
          MultiValueLabel = _this$components.MultiValueLabel,
          MultiValueRemove = _this$components.MultiValueRemove,
          SingleValue = _this$components.SingleValue,
          Placeholder = _this$components.Placeholder;
      var commonProps = this.commonProps;
      var _this$props15 = this.props,
          controlShouldRenderValue = _this$props15.controlShouldRenderValue,
          isDisabled = _this$props15.isDisabled,
          isMulti = _this$props15.isMulti,
          inputValue = _this$props15.inputValue,
          placeholder = _this$props15.placeholder;
      var _this$state8 = this.state,
          selectValue = _this$state8.selectValue,
          focusedValue = _this$state8.focusedValue,
          isFocused = _this$state8.isFocused;

      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : React__default.createElement(Placeholder, _extends$1({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused
        }), placeholder);
      }

      if (isMulti) {
        var selectValues = selectValue.map(function (opt) {
          var isFocused = opt === focusedValue;
          return React__default.createElement(MultiValue, _extends$1({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isFocused,
            isDisabled: isDisabled,
            key: _this4.getOptionValue(opt),
            removeProps: {
              onClick: function onClick() {
                return _this4.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this4.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
                e.stopPropagation();
              }
            },
            data: opt
          }), _this4.formatOptionLabel(opt, 'value'));
        });
        return selectValues;
      }

      if (inputValue) {
        return null;
      }

      var singleValue = selectValue[0];
      return React__default.createElement(SingleValue, _extends$1({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var ClearIndicator = this.components.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props16 = this.props,
          isDisabled = _this$props16.isDisabled,
          isLoading = _this$props16.isLoading;
      var isFocused = this.state.isFocused;

      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }

      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return React__default.createElement(ClearIndicator, _extends$1({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var LoadingIndicator = this.components.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props17 = this.props,
          isDisabled = _this$props17.isDisabled,
          isLoading = _this$props17.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return React__default.createElement(LoadingIndicator, _extends$1({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$components2 = this.components,
          DropdownIndicator = _this$components2.DropdownIndicator,
          IndicatorSeparator = _this$components2.IndicatorSeparator; // separator doesn't make sense without the dropdown indicator

      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return React__default.createElement(IndicatorSeparator, _extends$1({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var DropdownIndicator = this.components.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return React__default.createElement(DropdownIndicator, _extends$1({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this5 = this;

      var _this$components3 = this.components,
          Group = _this$components3.Group,
          GroupHeading = _this$components3.GroupHeading,
          Menu$$1 = _this$components3.Menu,
          MenuList$$1 = _this$components3.MenuList,
          MenuPortal$$1 = _this$components3.MenuPortal,
          LoadingMessage$$1 = _this$components3.LoadingMessage,
          NoOptionsMessage$$1 = _this$components3.NoOptionsMessage,
          Option = _this$components3.Option;
      var commonProps = this.commonProps;
      var _this$state9 = this.state,
          focusedOption = _this$state9.focusedOption,
          menuOptions = _this$state9.menuOptions;
      var _this$props18 = this.props,
          captureMenuScroll = _this$props18.captureMenuScroll,
          inputValue = _this$props18.inputValue,
          isLoading = _this$props18.isLoading,
          loadingMessage = _this$props18.loadingMessage,
          minMenuHeight = _this$props18.minMenuHeight,
          maxMenuHeight = _this$props18.maxMenuHeight,
          menuIsOpen = _this$props18.menuIsOpen,
          menuPlacement = _this$props18.menuPlacement,
          menuPosition = _this$props18.menuPosition,
          menuPortalTarget = _this$props18.menuPortalTarget,
          menuShouldBlockScroll = _this$props18.menuShouldBlockScroll,
          menuShouldScrollIntoView = _this$props18.menuShouldScrollIntoView,
          noOptionsMessage = _this$props18.noOptionsMessage,
          onMenuScrollToTop = _this$props18.onMenuScrollToTop,
          onMenuScrollToBottom = _this$props18.onMenuScrollToBottom;
      if (!menuIsOpen) return null; // TODO: Internal Option Type here

      var render = function render(props) {
        // for performance, the menu options in state aren't changed when the
        // focused option changes so we calculate additional props based on that
        var isFocused = focusedOption === props.data;
        props.innerRef = isFocused ? _this5.getFocusedOptionRef : undefined;
        return React__default.createElement(Option, _extends$1({}, commonProps, props, {
          isFocused: isFocused
        }), _this5.formatOptionLabel(props.data, 'menu'));
      };

      var menuUI;

      if (this.hasOptions()) {
        menuUI = menuOptions.render.map(function (item) {
          if (item.type === 'group') {
            var type = item.type,
                group = _objectWithoutProperties$1(item, ["type"]);

            var headingId = "".concat(item.key, "-heading");
            return React__default.createElement(Group, _extends$1({}, commonProps, group, {
              Heading: GroupHeading,
              headingProps: {
                id: headingId
              },
              label: _this5.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option);
            }));
          } else if (item.type === 'option') {
            return render(item);
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = React__default.createElement(LoadingMessage$$1, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });

        if (_message === null) return null;
        menuUI = React__default.createElement(NoOptionsMessage$$1, commonProps, _message);
      }

      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = React__default.createElement(MenuPlacer, _extends$1({}, commonProps, menuPlacementProps), function (_ref6) {
        var ref = _ref6.ref,
            _ref6$placerProps = _ref6.placerProps,
            placement = _ref6$placerProps.placement,
            maxHeight = _ref6$placerProps.maxHeight;
        return React__default.createElement(Menu$$1, _extends$1({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this5.onMenuMouseDown,
            onMouseMove: _this5.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), React__default.createElement(ScrollCaptorSwitch, {
          isEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom
        }, React__default.createElement(ScrollBlock, {
          isEnabled: menuShouldBlockScroll
        }, React__default.createElement(MenuList$$1, _extends$1({}, commonProps, {
          innerRef: _this5.getMenuListRef,
          isLoading: isLoading,
          maxHeight: maxHeight
        }), menuUI))));
      }); // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`

      return menuPortalTarget || menuPosition === 'fixed' ? React__default.createElement(MenuPortal$$1, _extends$1({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this6 = this;

      var _this$props19 = this.props,
          delimiter = _this$props19.delimiter,
          isDisabled = _this$props19.isDisabled,
          isMulti = _this$props19.isMulti,
          name = _this$props19.name;
      var selectValue = this.state.selectValue;
      if (!name || isDisabled) return;

      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this6.getOptionValue(opt);
          }).join(delimiter);
          return React__default.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return React__default.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this6.getOptionValue(opt)
            });
          }) : React__default.createElement("input", {
            name: name,
            type: "hidden"
          });
          return React__default.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';

        return React__default.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      if (!this.state.isFocused) return null;
      return React__default.createElement(A11yText, {
        "aria-live": "assertive"
      }, React__default.createElement("p", {
        id: "aria-selection-event"
      }, "\xA0", this.state.ariaLiveSelection), React__default.createElement("p", {
        id: "aria-context"
      }, "\xA0", this.constructAriaLiveMessage()));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$components4 = this.components,
          Control = _this$components4.Control,
          IndicatorsContainer = _this$components4.IndicatorsContainer,
          SelectContainer = _this$components4.SelectContainer,
          ValueContainer = _this$components4.ValueContainer;
      var _this$props20 = this.props,
          className = _this$props20.className,
          id = _this$props20.id,
          isDisabled = _this$props20.isDisabled,
          menuIsOpen = _this$props20.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return React__default.createElement(SelectContainer, _extends$1({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), React__default.createElement(Control, _extends$1({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), React__default.createElement(ValueContainer, _extends$1({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), React__default.createElement(IndicatorsContainer, _extends$1({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }]);

  return Select;
}(React.Component);

_defineProperty$1(Select$1, "defaultProps", defaultProps);

var defaultProps$1 = {
  defaultInputValue: '',
  defaultMenuIsOpen: false,
  defaultValue: null
};

var manageState = function manageState(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits$1(StateManager, _Component);

    function StateManager() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck$1(this, StateManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(StateManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "select", void 0);

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
        inputValue: _this.props.inputValue !== undefined ? _this.props.inputValue : _this.props.defaultInputValue,
        menuIsOpen: _this.props.menuIsOpen !== undefined ? _this.props.menuIsOpen : _this.props.defaultMenuIsOpen,
        value: _this.props.value !== undefined ? _this.props.value : _this.props.defaultValue
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onChange", function (value, actionMeta) {
        _this.callProp('onChange', value, actionMeta);

        _this.setState({
          value: value
        });
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onInputChange", function (value, actionMeta) {
        // TODO: for backwards compatibility, we allow the prop to return a new
        // value, but now inputValue is a controllable prop we probably shouldn't
        var newValue = _this.callProp('onInputChange', value, actionMeta);

        _this.setState({
          inputValue: newValue !== undefined ? newValue : value
        });
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuOpen", function () {
        _this.callProp('onMenuOpen');

        _this.setState({
          menuIsOpen: true
        });
      });

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onMenuClose", function () {
        _this.callProp('onMenuClose');

        _this.setState({
          menuIsOpen: false
        });
      });

      return _this;
    }

    _createClass$1(StateManager, [{
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      } // FIXME: untyped flow code, return any

    }, {
      key: "getProp",
      value: function getProp(key) {
        return this.props[key] !== undefined ? this.props[key] : this.state[key];
      } // FIXME: untyped flow code, return any

    }, {
      key: "callProp",
      value: function callProp(name) {
        if (typeof this.props[name] === 'function') {
          var _this$props;

          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          return (_this$props = this.props)[name].apply(_this$props, args);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props2 = this.props,
            defaultInputValue = _this$props2.defaultInputValue,
            defaultMenuIsOpen = _this$props2.defaultMenuIsOpen,
            defaultValue = _this$props2.defaultValue,
            props = _objectWithoutProperties$1(_this$props2, ["defaultInputValue", "defaultMenuIsOpen", "defaultValue"]);

        return React__default.createElement(SelectComponent, _extends$1({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          inputValue: this.getProp('inputValue'),
          menuIsOpen: this.getProp('menuIsOpen'),
          onChange: this.onChange,
          onInputChange: this.onInputChange,
          onMenuClose: this.onMenuClose,
          onMenuOpen: this.onMenuOpen,
          value: this.getProp('value')
        }));
      }
    }]);

    return StateManager;
  }(React.Component), _defineProperty$1(_class, "defaultProps", defaultProps$1), _temp;
};

var defaultProps$2 = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits$1(Async, _Component);

    function Async(props) {
      var _this;

      _classCallCheck$1(this, Async);

      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Async).call(this));

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "select", void 0);

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "lastRequest", void 0);

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "mounted", false);

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "optionsCache", {});

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "handleInputChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = handleInputChange(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      });

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true ? true : false,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    _createClass$1(Async, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.mounted = true;
        var defaultOptions = this.props.defaultOptions;
        var inputValue = this.state.inputValue;

        if (defaultOptions === true) {
          this.loadOptions(inputValue, function (options) {
            if (!_this2.mounted) return;
            var isLoading = !!_this2.lastRequest;

            _this2.setState({
              defaultOptions: options || [],
              isLoading: isLoading
            });
          });
        }
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        // if the cacheOptions prop changes, clear the cache
        if (nextProps.cacheOptions !== this.props.cacheOptions) {
          this.optionsCache = {};
        }

        if (nextProps.defaultOptions !== this.props.defaultOptions) {
          this.setState({
            defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "loadOptions",
      value: function loadOptions(inputValue, callback) {
        var loadOptions = this.props.loadOptions;
        if (!loadOptions) return callback();
        var loader = loadOptions(inputValue, callback);

        if (loader && typeof loader.then === 'function') {
          loader.then(callback, function () {
            return callback();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            loadOptions = _this$props2.loadOptions,
            props = _objectWithoutProperties$1(_this$props2, ["loadOptions"]);

        var _this$state = this.state,
            defaultOptions = _this$state.defaultOptions,
            inputValue = _this$state.inputValue,
            isLoading = _this$state.isLoading,
            loadedInputValue = _this$state.loadedInputValue,
            loadedOptions = _this$state.loadedOptions,
            passEmptyOptions = _this$state.passEmptyOptions;
        var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
        return React__default.createElement(SelectComponent, _extends$1({}, props, {
          ref: function ref(_ref) {
            _this3.select = _ref;
          },
          options: options,
          isLoading: isLoading,
          onInputChange: this.handleInputChange
        }));
      }
    }]);

    return Async;
  }(React.Component), _defineProperty$1(_class, "defaultProps", defaultProps$2), _temp;
};
var SelectState = manageState(Select$1);
var Async = makeAsyncSelect(SelectState);

var compareOption = function compareOption() {
  var inputValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var option = arguments.length > 1 ? arguments[1] : undefined;
  var candidate = String(inputValue).toLowerCase();
  var optionValue = String(option.value).toLowerCase();
  var optionLabel = String(option.label).toLowerCase();
  return optionValue === candidate || optionLabel === candidate;
};

var builtins = {
  formatCreateLabel: function formatCreateLabel(inputValue) {
    return "Create \"".concat(inputValue, "\"");
  },
  isValidNewOption: function isValidNewOption(inputValue, selectValue, selectOptions) {
    return !(!inputValue || selectValue.some(function (option) {
      return compareOption(inputValue, option);
    }) || selectOptions.some(function (option) {
      return compareOption(inputValue, option);
    }));
  },
  getNewOptionData: function getNewOptionData(inputValue, optionLabel) {
    return {
      label: optionLabel,
      value: inputValue,
      __isNew__: true
    };
  }
};
var defaultProps$3 = _objectSpread$1({
  allowCreateWhileLoading: false,
  createOptionPosition: 'last'
}, builtins);
var makeCreatableSelect = function makeCreatableSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inherits$1(Creatable, _Component);

    function Creatable(props) {
      var _this;

      _classCallCheck$1(this, Creatable);

      _this = _possibleConstructorReturn$1(this, _getPrototypeOf$1(Creatable).call(this, props));

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "select", void 0);

      _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "onChange", function (newValue, actionMeta) {
        var _this$props = _this.props,
            getNewOptionData = _this$props.getNewOptionData,
            inputValue = _this$props.inputValue,
            isMulti = _this$props.isMulti,
            onChange = _this$props.onChange,
            onCreateOption = _this$props.onCreateOption,
            value = _this$props.value;

        if (actionMeta.action !== 'select-option') {
          return onChange(newValue, actionMeta);
        }

        var newOption = _this.state.newOption;
        var valueArray = Array.isArray(newValue) ? newValue : [newValue];

        if (valueArray[valueArray.length - 1] === newOption) {
          if (onCreateOption) onCreateOption(inputValue);else {
            var newOptionData = getNewOptionData(inputValue, inputValue);
            var newActionMeta = {
              action: 'create-option'
            };

            if (isMulti) {
              onChange([].concat(_toConsumableArray$1(cleanValue(value)), [newOptionData]), newActionMeta);
            } else {
              onChange(newOptionData, newActionMeta);
            }
          }
          return;
        }

        onChange(newValue, actionMeta);
      });

      var options = props.options || [];
      _this.state = {
        newOption: undefined,
        options: options
      };
      return _this;
    }

    _createClass$1(Creatable, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var allowCreateWhileLoading = nextProps.allowCreateWhileLoading,
            createOptionPosition = nextProps.createOptionPosition,
            formatCreateLabel = nextProps.formatCreateLabel,
            getNewOptionData = nextProps.getNewOptionData,
            inputValue = nextProps.inputValue,
            isLoading = nextProps.isLoading,
            isValidNewOption = nextProps.isValidNewOption,
            value = nextProps.value;
        var options = nextProps.options || [];
        var newOption = this.state.newOption;

        if (isValidNewOption(inputValue, cleanValue(value), options)) {
          newOption = getNewOptionData(inputValue, formatCreateLabel(inputValue));
        } else {
          newOption = undefined;
        }

        this.setState({
          newOption: newOption,
          options: (allowCreateWhileLoading || !isLoading) && newOption ? createOptionPosition === 'first' ? [newOption].concat(_toConsumableArray$1(options)) : [].concat(_toConsumableArray$1(options), [newOption]) : options
        });
      }
    }, {
      key: "focus",
      value: function focus() {
        this.select.focus();
      }
    }, {
      key: "blur",
      value: function blur() {
        this.select.blur();
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = _extends$1({}, this.props);

        var options = this.state.options;
        return React__default.createElement(SelectComponent, _extends$1({}, props, {
          ref: function ref(_ref) {
            _this2.select = _ref;
          },
          options: options,
          onChange: this.onChange
        }));
      }
    }]);

    return Creatable;
  }(React.Component), _defineProperty$1(_class, "defaultProps", defaultProps$3), _temp;
}; // TODO: do this in package entrypoint

var SelectCreatable = makeCreatableSelect(Select$1);
var Creatable = manageState(SelectCreatable);

var SelectCreatable$1 = makeCreatableSelect(Select$1);
var SelectCreatableState = manageState(SelectCreatable$1);
var AsyncCreatable = makeAsyncSelect(SelectCreatableState);

// strip transition props off before spreading onto select component
// note we need to be explicit about innerRef for flow
var AnimatedInput = function AnimatedInput(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        appear = _ref.appear,
        enter = _ref.enter,
        exit = _ref.exit,
        props = _objectWithoutProperties$1(_ref, ["in", "onExited", "appear", "enter", "exit"]);

    return React__default.createElement(WrappedComponent, props);
  };
};

var Fade = function Fade(_ref) {
  var Tag = _ref.component,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 1 : _ref$duration,
      inProp = _ref.in,
      onExited = _ref.onExited,
      props = _objectWithoutProperties$1(_ref, ["component", "duration", "in", "onExited"]);

  var transition = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(duration, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return React__default.createElement(reactTransitionGroup_1, {
    mountOnEnter: true,
    unmountOnExit: true,
    in: inProp,
    timeout: duration
  }, function (state) {
    var innerProps = {
      style: _objectSpread$1({}, transition[state])
    };
    return React__default.createElement(Tag, _extends$1({
      innerProps: innerProps
    }, props));
  });
}; // ==============================
// Collapse Transition
// ==============================

var collapseDuration = 260;
// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits$1(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck$1(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn$1(this, (_getPrototypeOf2 = _getPrototypeOf$1(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "duration", collapseDuration);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "rafID", void 0);

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "state", {
      width: 'auto'
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "transition", {
      exiting: {
        width: 0,
        transition: "width ".concat(_this.duration, "ms ease-out")
      },
      exited: {
        width: 0
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getWidth", function (ref) {
      if (ref && isNaN(_this.state.width)) {
        /*
          Here we're invoking requestAnimationFrame with a callback invoking our
          call to getBoundingClientRect and setState in order to resolve an edge case
          around portalling. Certain portalling solutions briefly remove children from the DOM
          before appending them to the target node. This is to avoid us trying to call getBoundingClientrect
          while the Select component is in this state.
        */
        // cannot use `offsetWidth` because it is rounded
        _this.rafID = window.requestAnimationFrame(function () {
          var _ref$getBoundingClien = ref.getBoundingClientRect(),
              width = _ref$getBoundingClien.width;

          _this.setState({
            width: width
          });
        });
      }
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getStyle", function (width) {
      return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: width
      };
    });

    _defineProperty$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), "getTransition", function (state) {
      return _this.transition[state];
    });

    return _this;
  }

  _createClass$1(Collapse, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.rafID) {
        window.cancelAnimationFrame(this.rafID);
      }
    } // width must be calculated; cannot transition from `undefined` to `number`

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          inProp = _this$props.in;
      var width = this.state.width;
      return React__default.createElement(reactTransitionGroup_1, {
        enter: false,
        mountOnEnter: true,
        unmountOnExit: true,
        in: inProp,
        timeout: this.duration
      }, function (state) {
        var style = _objectSpread$1({}, _this2.getStyle(width), _this2.getTransition(state));

        return React__default.createElement("div", {
          ref: _this2.getWidth,
          style: style
        }, children);
      });
    }
  }]);

  return Collapse;
}(React.Component);

var AnimatedMultiValue = function AnimatedMultiValue(WrappedComponent) {
  return function (_ref) {
    var inProp = _ref.in,
        onExited = _ref.onExited,
        props = _objectWithoutProperties$1(_ref, ["in", "onExited"]);

    return React__default.createElement(Collapse, {
      in: inProp,
      onExited: onExited
    }, React__default.createElement(WrappedComponent, _extends$1({
      cropWithEllipsis: inProp
    }, props)));
  };
};

var AnimatedPlaceholder = function AnimatedPlaceholder(WrappedComponent) {
  return function (props) {
    return React__default.createElement(Fade, _extends$1({
      component: WrappedComponent,
      duration: props.isMulti ? collapseDuration : 1
    }, props));
  };
};

var AnimatedSingleValue = function AnimatedSingleValue(WrappedComponent) {
  return function (props) {
    return React__default.createElement(Fade, _extends$1({
      component: WrappedComponent
    }, props));
  };
};

// make ValueContainer a transition group
var AnimatedValueContainer = function AnimatedValueContainer(WrappedComponent) {
  return function (props) {
    return React__default.createElement(reactTransitionGroup_2, _extends$1({
      component: WrappedComponent
    }, props));
  };
};

var makeAnimated = function makeAnimated() {
  var externalComponents = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var components$$1 = defaultComponents({
    components: externalComponents
  });

  var Input = components$$1.Input,
      MultiValue = components$$1.MultiValue,
      Placeholder = components$$1.Placeholder,
      SingleValue = components$$1.SingleValue,
      ValueContainer = components$$1.ValueContainer,
      rest = _objectWithoutProperties$1(components$$1, ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"]);

  return _objectSpread$1({
    Input: AnimatedInput(Input),
    MultiValue: AnimatedMultiValue(MultiValue),
    Placeholder: AnimatedPlaceholder(Placeholder),
    SingleValue: AnimatedSingleValue(SingleValue),
    ValueContainer: AnimatedValueContainer(ValueContainer)
  }, rest);
};

var AnimatedComponents = makeAnimated();
var Input$1$1 = AnimatedComponents.Input;
var MultiValue$1 = AnimatedComponents.MultiValue;
var Placeholder$1 = AnimatedComponents.Placeholder;
var SingleValue$1 = AnimatedComponents.SingleValue;
var ValueContainer$1 = AnimatedComponents.ValueContainer;
var index$1 = index(makeAnimated, exportedEqual);

var index$1$1 = manageState(Select$1);

var css$17 = ".InputSelect-module_select__1hsvG {\n  width: 100%;\n}\n\n.InputSelect-module_defaultClassName__1OTDJ {\n  width: 200px;\n}\n";
var s$16 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","select":"InputSelect-module_select__1hsvG","defaultClassName":"InputSelect-module_defaultClassName__1OTDJ"};
styleInject(css$17);

var css$18 = "\n";
var Colors$1 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12"};
styleInject(css$18);

var ectorTheme = function ectorTheme(theme) {
  return _objectSpread({}, theme, {
    colors: _objectSpread({}, theme.colors, {
      primary: Colors$1.yellow,
      primary25: Colors$1.white,
      primary50: Colors$1.white,
      neutral20: Colors$1.metalGrey,
      neutral30: Colors$1.metalGrey,
      neutral40: Colors$1.metalGrey,
      neutral50: Colors$1.metalGrey,
      neutral60: Colors$1.deepBlue,
      neutral70: Colors$1.deepBlue,
      neutral80: Colors$1.deepBlue,
      neutral90: Colors$1.deepBlue
    })
  });
};

var InputSelect = function InputSelect(_ref) {
  var options = _ref.options,
      classname = _ref.classname,
      onChange = _ref.onChange,
      value = _ref.value,
      error = _ref.error,
      props = _objectWithoutProperties(_ref, ["options", "classname", "onChange", "value", "error"]);

  var ectorStyles = {
    option: function option(styles, _ref2) {
      var isSelected = _ref2.isSelected,
          isFocused = _ref2.isFocused;
      return _objectSpread({}, styles, {
        color: Colors$1.deepBlue,
        fontWeight: isSelected || isFocused ? 'bold' : undefined,
        backgroundColor: Colors$1.white
      });
    },
    control: function control(styles) {
      return _objectSpread({}, styles, {
        borderColor: error ? Colors$1.red : styles.borderColor,
        borderWidth: 2,
        boxShadow: 'none',
        '&:hover': {
          borderColor: error ? Colors$1.red : styles.borderColor
        }
      });
    },
    placeholder: function placeholder(styles) {
      return _objectSpread({}, styles, {
        opacity: 0.8,
        fontWeight: 500
      });
    }
  };
  return React__default.createElement(index$1$1, _extends({
    className: [s$16.select, classname].join(' '),
    options: options,
    theme: ectorTheme,
    styles: ectorStyles,
    value: value,
    onChange: onChange
  }, props));
};

InputSelect.defaultProps = {
  options: [],
  classname: undefined,
  value: undefined,
  error: null
};
InputSelect.propTypes = {
  options: PropTypes$1.arrayOf(PropTypes$1.shape({
    value: PropTypes$1.string.isRequired,
    label: PropTypes$1.string.isRequired
  })),
  value: PropTypes$1.shape({
    value: PropTypes$1.string.isRequired,
    label: PropTypes$1.string.isRequired
  }),
  error: PropTypes$1.string,
  classname: PropTypes$1.string,
  onChange: PropTypes$1.func.isRequired
};

var css$19 = ".RatingStars-module_container__3pCeB {\n  position: relative;\n}\n\n.RatingStars-module_activeStars__1LEHa {\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n}\n";
var s$17 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"RatingStars-module_container__3pCeB","activeStars":"RatingStars-module_activeStars__1LEHa"};
styleInject(css$19);

var stars = _toConsumableArray(Array(5).keys());

var RatingStars = function RatingStars(props) {
  var value = props.value,
      className = props.className,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor;
  return React__default.createElement("div", {
    className: [s$17.container, className].join(' ')
  }, stars.map(function () {
    return React__default.createElement("span", {
      style: {
        color: inactiveColor
      },
      className: ['icon icon-ec-google-star', s$17.inactiveStar].join(' ')
    });
  }), React__default.createElement("div", {
    className: s$17.activeStars,
    style: {
      width: "".concat(value * 20, "%")
    }
  }, stars.map(function () {
    return React__default.createElement("span", {
      style: {
        color: activeColor
      },
      className: ['icon icon-ec-google-star', s$17.activeStar].join(' ')
    });
  })));
};

RatingStars.defaultProps = {
  value: 4,
  className: undefined,
  activeColor: Colors$1.yellow,
  inactiveColor: Colors$1.metalGrey
};
RatingStars.propTypes = {
  value: PropTypes$1.number,
  className: PropTypes$1.string,
  activeColor: PropTypes$1.string,
  inactiveColor: PropTypes$1.string
};

var _ref$8 =
/*#__PURE__*/
React__default.createElement("g", {
  transform: "translate(1 1)",
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("path", {
  d: "M7.884 10.06v-.12c0-.744.144-1.176.864-1.656l.564-.372c.468-.312.672-.624.672-1.128 0-.576-.384-.936-.936-.936-.672 0-1.164.372-1.164 1.248h-1.92c0-1.524.996-2.712 3.144-2.712 1.656 0 2.82.816 2.82 2.316 0 1.044-.564 1.632-1.188 2.1l-.492.36c-.36.276-.468.444-.468.756v.144H7.884zm.948 3.048a1.237 1.237 0 0 1-1.248-1.236c0-.672.54-1.224 1.248-1.224.696 0 1.248.552 1.248 1.224 0 .672-.552 1.236-1.248 1.236z",
  fill: "#153457"
}), React__default.createElement("circle", {
  stroke: "#153457",
  strokeWidth: 1.5,
  fillRule: "nonzero",
  cx: 9,
  cy: 9,
  r: 9
}));

var faqIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2220px%22%20height%3D%2220px%22%20viewBox%3D%220%200%2020%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22help%22%20transform%3D%22translate%28-7.000000%2C%20-5.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%288.000000%2C%206.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M7.884%2C10.06%20L7.884%2C9.94%20C7.884%2C9.196%208.028%2C8.764%208.748%2C8.284%20L9.312%2C7.912%20C9.78%2C7.6%209.984%2C7.288%209.984%2C6.784%20C9.984%2C6.208%209.6%2C5.848%209.048%2C5.848%20C8.376%2C5.848%207.884%2C6.22%207.884%2C7.096%20L5.964%2C7.096%20C5.964%2C5.572%206.96%2C4.384%209.108%2C4.384%20C10.764%2C4.384%2011.928%2C5.2%2011.928%2C6.7%20C11.928%2C7.744%2011.364%2C8.332%2010.74%2C8.8%20L10.248%2C9.16%20C9.888%2C9.436%209.78%2C9.604%209.78%2C9.916%20L9.78%2C10.06%20L7.884%2C10.06%20Z%20M8.832%2C13.108%20C8.124%2C13.108%207.584%2C12.544%207.584%2C11.872%20C7.584%2C11.2%208.124%2C10.648%208.832%2C10.648%20C9.528%2C10.648%2010.08%2C11.2%2010.08%2C11.872%20C10.08%2C12.544%209.528%2C13.108%208.832%2C13.108%20Z%22%20id%3D%22%3F%22%20fill%3D%22%23153457%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval%22%20stroke%3D%22%23153457%22%20stroke-width%3D%221.5%22%20fill-rule%3D%22nonzero%22%20cx%3D%229%22%20cy%3D%229%22%20r%3D%229%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$9 =
/*#__PURE__*/
React__default.createElement("g", {
  fillRule: "nonzero",
  fill: "none"
}, React__default.createElement("path", {
  d: "M3.007 20.266h14.65a2.442 2.442 0 0 0 2.441-2.441V7.245a2.442 2.442 0 0 0-2.442-2.442h-3.255V3.175A2.442 2.442 0 0 0 11.96.734H8.704a2.442 2.442 0 0 0-2.441 2.441v1.628H3.007A2.442 2.442 0 0 0 .566 7.245v10.58a2.442 2.442 0 0 0 2.441 2.441zM7.89 3.176c0-.45.365-.814.814-.814h3.256c.45 0 .813.364.813.813v1.628H7.89V3.175zM3.007 6.43h14.65c.449 0 .813.364.813.814v10.241a1 1 0 0 1-1 1H3.194a1 1 0 0 1-1-1V7.245c0-.45.364-.814.813-.814z",
  fill: "#153457"
}), React__default.createElement("path", {
  fill: "#163457",
  d: "M8 10.727H1.74v.549H8zM18.748 10.727H12v.549h6.748z"
}), React__default.createElement("path", {
  d: "M8.832 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm.5 1.5v1h2v-1h-2z",
  fill: "#153457"
}));

var businessIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2221px%22%20height%3D%2221px%22%20viewBox%3D%220%200%2021%2021%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22business%22%20transform%3D%22translate%28-3.000000%2C%20-3.000000%29%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22icon%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%20transform%3D%22translate%283.565863%2C%203.733942%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M2.44151458%2C19.5321166%20L17.090602%2C19.5321166%20C18.4390133%2C19.5321166%2019.5321166%2C18.4390133%2019.5321166%2C17.090602%20L19.5321166%2C6.51070554%20C19.5321166%2C5.16229427%2018.4390133%2C4.06919096%2017.090602%2C4.06919096%20L13.8352493%2C4.06919096%20L13.8352493%2C2.44151458%20C13.8352493%2C1.09310331%2012.742146%2C9.035419e-17%2011.3937347%2C0%20L8.13838193%2C0%20C6.78997066%2C-9.035419e-17%205.69686735%2C1.09310331%205.69686735%2C2.44151458%20L5.69686735%2C4.06919096%20L2.44151458%2C4.06919096%20C1.09310331%2C4.06919096%209.66518829e-13%2C5.16229427%209.66338121e-13%2C6.51070554%20L9.66338121e-13%2C17.090602%20C9.66518829e-13%2C18.4390133%201.09310331%2C19.5321166%202.44151458%2C19.5321166%20Z%20M7.32454373%2C2.44151458%20C7.32454373%2C1.99204416%207.6889115%2C1.62767639%208.13838193%2C1.62767639%20L11.3937347%2C1.62767639%20C11.8432051%2C1.62767639%2012.2075729%2C1.99204416%2012.2075729%2C2.44151458%20L12.2075729%2C4.06919096%20L7.32454373%2C4.06919096%20L7.32454373%2C2.44151458%20Z%20M2.44151458%2C5.69686735%20L17.090602%2C5.69686735%20C17.5400725%2C5.69686735%2017.9044402%2C6.06123512%2017.9044402%2C6.51070554%20L17.9044402%2C16.7524805%20C17.9044402%2C17.3047652%2017.456725%2C17.7524805%2016.9044402%2C17.7524805%20L2.62767639%2C17.7524805%20C2.07539164%2C17.7524805%201.62767639%2C17.3047652%201.62767639%2C16.7524805%20L1.62767639%2C6.51070554%20C1.62767639%2C6.06123512%201.99204416%2C5.69686735%202.44151458%2C5.69686735%20Z%22%20id%3D%22Shape%22%20fill%3D%22%23153457%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22Rectangle-5%22%20fill%3D%22%23163457%22%20transform%3D%22translate%284.304010%2C%2010.267345%29%20scale%28-1%2C%201%29%20translate%28-4.304010%2C%20-10.267345%29%20%22%20points%3D%221.1738831%209.99307634%207.434137%209.99307634%207.434137%2010.5416139%201.1738831%2010.5416139%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpolygon%20id%3D%22Rectangle-5%22%20fill%3D%22%23163457%22%20transform%3D%22translate%2814.808283%2C%2010.267345%29%20scale%28-1%2C%201%29%20translate%28-14.808283%2C%20-10.267345%29%20%22%20points%3D%2211.434137%209.99307634%2018.182428%209.99307634%2018.182428%2010.5416139%2011.434137%2010.5416139%22%3E%3C%2Fpolygon%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M8.26605831%2C8.26605831%20L11.2660583%2C8.26605831%20C11.8183431%2C8.26605831%2012.2660583%2C8.71377356%2012.2660583%2C9.26605831%20L12.2660583%2C11.2660583%20C12.2660583%2C11.8183431%2011.8183431%2C12.2660583%2011.2660583%2C12.2660583%20L8.26605831%2C12.2660583%20C7.71377356%2C12.2660583%207.26605831%2C11.8183431%207.26605831%2C11.2660583%20L7.26605831%2C9.26605831%20C7.26605831%2C8.71377356%207.71377356%2C8.26605831%208.26605831%2C8.26605831%20Z%20M8.76605831%2C9.76605831%20L8.76605831%2C10.7660583%20L10.7660583%2C10.7660583%20L10.7660583%2C9.76605831%20L8.76605831%2C9.76605831%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%23153457%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var _ref$a =
/*#__PURE__*/
React__default.createElement("g", {
  transform: "translate(1 1)",
  fillRule: "nonzero",
  fill: "none"
}, React__default.createElement("circle", {
  stroke: "#153457",
  strokeWidth: 1.5,
  cx: 9,
  cy: 9,
  r: 9
}), React__default.createElement("path", {
  d: "M9 12.999a3.874 3.874 0 0 1-2.868-1.161.5.5 0 1 1 .736-.676c.567.558 1.337.86 2.132.837a2.917 2.917 0 0 0 2.132-.837.5.5 0 0 1 .736.676A3.873 3.873 0 0 1 9 12.998zM5 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm7 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2z",
  fill: "#153457"
}));

var headIcon = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%2220px%22%20height%3D%2220px%22%20viewBox%3D%220%200%2020%2020%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3EGroup%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Symbols%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%22connect%22%20transform%3D%22translate%28-5.000000%2C%20-5.000000%29%22%20fill-rule%3D%22nonzero%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22Group%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%286.000000%2C%206.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ccircle%20id%3D%22Oval%22%20stroke%3D%22%23153457%22%20stroke-width%3D%221.5%22%20cx%3D%229%22%20cy%3D%229%22%20r%3D%229%22%3E%3C%2Fcircle%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M9.00004992%2C12.9986693%20C7.92412857%2C13.0267946%206.88502652%2C12.6062468%206.13189953%2C11.8378723%20C5.94500976%2C11.6346888%205.95832853%2C11.3185745%206.16164902%2C11.1318106%20C6.36496951%2C10.9450468%206.68129704%2C10.9583566%206.86818681%2C11.1615401%20C7.43466303%2C11.719776%208.20480373%2C12.0224416%209.00004999%2C11.9993606%20C9.79525826%2C12.0224148%2010.565363%2C11.719751%2011.1318132%2C11.1615401%20C11.318703%2C10.9583566%2011.6350305%2C10.9450468%2011.838351%2C11.1318106%20C12.0416715%2C11.3185745%2012.0549902%2C11.6346888%2011.8681005%2C11.8378723%20C11.1150424%2C12.6063727%2010.0759413%2C13.0268498%209.00004992%2C12.9986693%20Z%22%20id%3D%22Path%22%20fill%3D%22%23153457%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5%2C6.99999985%20C4.99999992%2C6.447715%205.447715%2C6%206%2C6%20C6.552285%2C5.99999992%207%2C6.447715%207%2C7%20C7.00000008%2C7.552285%206.552285%2C8%206%2C8%20C5.44771504%2C8.00000011%205.00000004%2C7.552285%205.00000004%2C7%20Z%20M12%2C8%20C11.447715%2C7.99999998%2011%2C7.552285%2011%2C7%20C11%2C6.447715%2011.447715%2C6%2012%2C6%20C12.552285%2C6.00000002%2013%2C6.447715%2013%2C7%20C13%2C7.55228496%2012.552285%2C7.99999996%2012%2C7.99999996%20Z%22%20id%3D%22Combined-Shape%22%20fill%3D%22%23153457%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var logoEctor = "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20width%3D%22101px%22%20height%3D%2223px%22%20viewBox%3D%220%200%20101%2023%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%20%20%20%20%3Ctitle%3Elogo-ector.svg%3C%2Ftitle%3E%20%20%20%20%3Cdesc%3ECreated%20with%20Sketch.%3C%2Fdesc%3E%20%20%20%20%3Cg%20id%3D%22Homepage%22%20stroke%3D%22none%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%20id%3D%2200_home%22%20transform%3D%22translate%28-116.000000%2C%20-29.000000%29%22%20fill%3D%22%23163457%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22hero%22%20transform%3D%22translate%28-4.000000%2C%20-2.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20id%3D%22logo-ector%22%20transform%3D%22translate%28120.000000%2C%2031.000000%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%2C0%20L0%2C10.0396825%20L16.9367016%2C10.0396825%20L16.9367016%2C8.0863642%20L2.1094771%2C8.0863642%20L2.1094771%2C1.95259968%20L16.9367016%2C1.95259968%20L16.9367016%2C0%20L0%2C0%20Z%20M0%2C11.9764717%20L0%2C22.0161542%20L16.9367016%2C22.0161542%20L16.9367016%2C20.0628359%20L2.1094771%2C20.0628359%20L2.1094771%2C13.9290714%20L16.9367016%2C13.9290714%20L16.9367016%2C11.975753%20L0%2C11.975753%20L0%2C11.9764717%20Z%20M93.7488872%2C13.1371079%20L88.3903139%2C13.1371079%20L88.3903139%2C2.42907137%20L93.7481709%2C2.42907137%20C96.8769301%2C2.42907137%2098.8589074%2C4.88617048%2098.8589074%2C7.78524559%20C98.8589074%2C10.6843207%2096.8769301%2C13.1407012%2093.7481709%2C13.1407012%20L93.7488872%2C13.1371079%20Z%20M86.2844183%2C22.5249656%20L88.3903139%2C22.5249656%20L88.3903139%2C15.0918635%20L93.7173704%2C15.0918635%20L98.3324335%2C22.5264029%20L100.782149%2C22.5264029%20L95.919249%2C14.7454693%20C98.9948223%2C13.8545729%20101.082211%2C10.9915754%20100.997036%2C7.78093363%20C101.053209%2C5.83219557%20100.308847%2C3.94590255%2098.9383071%2C2.56389965%20C97.5677677%2C1.18189676%2095.6914589%2C0.425598364%2093.7488872%2C0.47215973%20L86.2844183%2C0.47215973%20L86.2844183%2C22.5249656%20Z%20M70.7824477%2C21.0445257%20C65.2075545%2C21.0445257%2061.8288097%2C16.4451006%2061.8288097%2C11.4985627%20C61.8288097%2C6.55202475%2065.2054057%2C1.95331834%2070.7824477%2C1.95331834%20C76.3265403%2C1.95331834%2079.7360856%2C6.55274341%2079.7360856%2C11.4985627%20C79.7360856%2C16.444382%2076.3286892%2C21.0445257%2070.7824477%2C21.0445257%20L70.7824477%2C21.0445257%20Z%20M70.7824477%2C22.997844%20C77.7204427%2C22.997844%2081.9329502%2C17.4526622%2081.9329502%2C11.4992813%20C81.9329502%2C5.54590051%2077.7175775%2C0%2070.7824477%2C0%20C63.8473179%2C0%2059.6319451%2C5.54446319%2059.6319451%2C11.4985627%20C59.6319451%2C17.4526622%2063.8444527%2C22.9971254%2070.7824477%2C22.9971254%20L70.7824477%2C22.997844%20Z%20M50.1074232%2C22.524247%20L52.2133188%2C22.524247%20L52.2133188%2C2.42547807%20L58.098366%2C2.42547807%20L58.098366%2C0.47215973%20L44.2839771%2C0.47215973%20L44.2839771%2C2.42547807%20L50.1074232%2C2.42547807%20L50.1074232%2C22.5249656%20L50.1074232%2C22.524247%20Z%20M39.7777901%2C16.0347457%20C38.5680484%2C19.0978274%2035.5969039%2C21.0916257%2032.3133213%2C21.043807%20C26.3351563%2C21.043807%2022.8969593%2C16.6333896%2022.8969593%2C11.4669416%20C22.8969593%2C6.5204037%2026.2112379%2C1.95259968%2031.9100494%2C1.95259968%20C36.3703937%2C1.95259968%2039.0958811%2C4.53618298%2039.9017085%2C7.90669916%20L42.100722%2C7.90669916%20C41.2332935%2C3.46466067%2037.7950966%2C0.00143732033%2031.662929%2C0.00143732033%20C24.8796529%2C0.00143732033%2020.7294626%2C5.51499813%2020.7294626%2C11.4690976%20C20.7294626%2C17.6438258%2025.0035712%2C23%2032.0654846%2C23%20C37.1139038%2C23%2040.9238558%2C19.9751594%2042.100722%2C16.0369016%20L39.7777901%2C16.0369016%20L39.7777901%2C16.0347457%20Z%22%20id%3D%22logo-ector.svg%22%3E%3C%2Fpath%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E";

var css$1a = ".Header-module_wrapper__3Yuwe {\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 5;\n}\n\n.Header-module_container__2FRMu {\n  max-width: 1232px;\n  width: 100%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.Header-module_menuItemsContainer__2hK2f {\n  width: 410px;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.Header-module_middleMenuItemsContainer__11RHW {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Header-module_menuItemContainer__3AND5 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.Header-module_visible__sHCWg, .Header-module_menuItemContainer__3AND5:hover, .Header-module_suggestion__3LyBf:hover {\n  font-weight: 700;\n}\n\n.Header-module_menuItemLinkIcon__15Cmp {\n  height: 20px;\n  margin-right: 10px;\n  width: 20px;\n}\n\n.Header-module_menuItemText__2n_In {\n  color: #163457;\n  margin-left: 10px;\n}\n\n.Header-module_suggestions__SwEEy {\n  width: 180px;\n  height: auto;\n  padding: 20px;\n  min-height: 0;\n  left: 0;\n  top: calc(100% + 11px);\n}\n\n.Header-module_helpSuggestions__K31H9 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.Header-module_suggestion__3LyBf {\n  margin: 10px 0;\n  color: #163457;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n";
var s$18 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","wrapper":"Header-module_wrapper__3Yuwe","container":"Header-module_container__2FRMu","menuItemsContainer":"Header-module_menuItemsContainer__2hK2f","middleMenuItemsContainer":"Header-module_middleMenuItemsContainer__11RHW","menuItemContainer":"Header-module_menuItemContainer__3AND5","visible":"Header-module_visible__sHCWg","suggestion":"Header-module_suggestion__3LyBf","menuItemLinkIcon":"Header-module_menuItemLinkIcon__15Cmp","menuItemText":"Header-module_menuItemText__2n_In","suggestions":"Header-module_suggestions__SwEEy","helpSuggestions":"Header-module_helpSuggestions__K31H9"};
styleInject(css$1a);

var TextsType$9 = PropTypes$1.shape({
  business: PropTypes$1.string,
  needHelp: PropTypes$1.string,
  login: PropTypes$1.string,
  faq: PropTypes$1.string,
  customerService: PropTypes$1.string
});
var DefaultTexts$9 = {
  business: 'Ector Business',
  needHelp: "Besoin d'aides ?",
  login: 'Connexion',
  faq: 'Questions fréquentes',
  customerService: 'Service client'
};

var DefaultRightComponent = function DefaultRightComponent(_ref) {
  var texts = _ref.texts,
      className = _ref.className;

  var renderHelpButton = function renderHelpButton(_ref2) {
    var isActive = _ref2.isActive;
    return React__default.createElement(TextIcon, {
      imageUrl: faqIcon,
      variant: isActive ? 'yellow' : 'white',
      position: "right"
    }, texts.needHelp);
  };

  var renderConnectionButton = function renderConnectionButton(_ref3) {
    var isActive = _ref3.isActive;
    return React__default.createElement(TextIcon, {
      imageUrl: headIcon,
      variant: isActive ? 'yellow' : 'white'
    }, texts.login);
  };

  renderHelpButton.propTypes = {
    isActive: PropTypes$1.bool.isRequired
  };
  renderConnectionButton.propTypes = {
    isActive: PropTypes$1.bool.isRequired
  };

  var renderSuggestions = function renderSuggestions() {
    return React__default.createElement("div", {
      className: s$18.helpSuggestions
    }, React__default.createElement("button", {
      className: s$18.suggestion
    }, texts.faq), React__default.createElement("button", {
      className: s$18.suggestion
    }, texts.customerService));
  };

  return React__default.createElement("div", {
    className: [s$18.menuItemsContainer, className].join(' ')
  }, React__default.createElement(MenuButton, {
    LabelComponent: renderHelpButton,
    SuggestionsComponent: renderSuggestions
  }), React__default.createElement(MenuButton, {
    LabelComponent: renderConnectionButton
  }));
};

DefaultRightComponent.defaultProps = {
  texts: DefaultTexts$9,
  className: undefined
};
DefaultRightComponent.propTypes = {
  texts: TextsType$9,
  className: PropTypes$1.string
};

var DefaultMiddleComponent = function DefaultMiddleComponent(_ref4) {
  var texts = _ref4.texts,
      className = _ref4.className;

  var renderBusinessButton = function renderBusinessButton(_ref5) {
    var isActive = _ref5.isActive;
    return React__default.createElement(TextIcon, {
      imageUrl: businessIcon,
      variant: isActive ? 'yellow' : 'melrose',
      position: "right"
    }, texts.business);
  };

  renderBusinessButton.propTypes = {
    isActive: PropTypes$1.bool.isRequired
  }; // eslint-disable-next-line

  var onClick = function onClick() {
    return window.open('https://business.ectorparking.com', '_blank');
  };

  return React__default.createElement("div", {
    className: [s$18.middleMenuItemsContainer, className].join(' ')
  }, React__default.createElement(MenuButton, {
    LabelComponent: renderBusinessButton,
    onClick: onClick
  }));
};

DefaultMiddleComponent.defaultProps = {
  texts: DefaultTexts$9,
  className: undefined
};
DefaultMiddleComponent.propTypes = {
  texts: TextsType$9,
  className: PropTypes$1.string
};

var Header = function Header(_ref6) {
  var className = _ref6.className,
      containerClassName = _ref6.containerClassName,
      logoClassName = _ref6.logoClassName,
      middleComponentClassName = _ref6.middleComponentClassName,
      rightComponentClassName = _ref6.rightComponentClassName,
      LogoComponent = _ref6.LogoComponent,
      MiddleComponent = _ref6.MiddleComponent,
      RightComponent = _ref6.RightComponent,
      texts = _ref6.texts,
      onClickLogo = _ref6.onClickLogo;
  return React__default.createElement("div", {
    className: [s$18.wrapper, className].join(' ')
  }, React__default.createElement("div", {
    className: [s$18.container, containerClassName].join(' ')
  }, React__default.createElement(LogoComponent, {
    className: logoClassName,
    onClick: onClickLogo
  }), React__default.createElement(MiddleComponent, {
    texts: texts,
    className: middleComponentClassName
  }), React__default.createElement(RightComponent, {
    texts: texts,
    className: rightComponentClassName
  })));
};

Header.defaultProps = {
  className: undefined,
  containerClassName: undefined,
  logoClassName: undefined,
  middleComponentClassName: undefined,
  rightComponentClassName: undefined,
  LogoComponent: function LogoComponent(props) {
    return React__default.createElement("button", props, React__default.createElement("img", {
      src: logoEctor,
      alt: "logo"
    }));
  },
  MiddleComponent: DefaultMiddleComponent,
  RightComponent: DefaultRightComponent,
  texts: DefaultTexts$9,
  onClickLogo: function onClickLogo() {
    return null;
  }
};
Header.propTypes = {
  LogoComponent: PropTypes$1.func,
  MiddleComponent: PropTypes$1.func,
  RightComponent: PropTypes$1.func,
  className: PropTypes$1.string,
  containerClassName: PropTypes$1.string,
  logoClassName: PropTypes$1.string,
  middleComponentClassName: PropTypes$1.string,
  rightComponentClassName: PropTypes$1.string,
  texts: TextsType$9,
  onClickLogo: PropTypes$1.func
};

var css$1b = ".MenuButton-module_container__3f-Es {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.MenuButton-module_button__2FZz3 {\n  color: #163457;\n  padding: 0;\n}\n\n.MenuButton-module_button__2FZz3:hover {\n  font-weight: 700;\n}\n\n.MenuButton-module_suggestions__3pzou {\n  top: 100%;\n  width: 220px;\n  padding: 20px;\n  margin-top: 20px;\n  left: calc(50% - 130px);\n  min-height: 0;\n  height: auto;\n}\n";
var s$19 = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"MenuButton-module_container__3f-Es","button":"MenuButton-module_button__2FZz3","suggestions":"MenuButton-module_suggestions__3pzou"};
styleInject(css$1b);

var MenuButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MenuButton, _React$PureComponent);

  function MenuButton(props) {
    var _this;

    _classCallCheck(this, MenuButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuButton).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.containerRef.current && !_this.containerRef.current.contains(e.target)) {
        _this.setState({
          visible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var onClick = _this.props.onClick;

      _this.setState({
        visible: true
      });

      onClick();
    });

    _defineProperty(_assertThisInitialized(_this), "onHover", function () {
      _this.setState({
        isMouseHover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLeave", function () {
      _this.setState({
        isMouseHover: false
      });
    });

    _this.containerRef = React__default.createRef();
    _this.state = {
      visible: false,
      isMouseHover: false
    };
    return _this;
  }

  _createClass(MenuButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line no-undef
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // eslint-disable-next-line no-undef
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          LabelComponent = _this$props.LabelComponent,
          SuggestionsComponent = _this$props.SuggestionsComponent,
          className = _this$props.className,
          buttonClassName = _this$props.buttonClassName,
          suggestionsClassName = _this$props.suggestionsClassName;
      var _this$state = this.state,
          visible = _this$state.visible,
          isMouseHover = _this$state.isMouseHover;
      return React__default.createElement("div", {
        className: [s$19.container, className].join(' '),
        ref: this.containerRef
      }, React__default.createElement("button", {
        className: [s$19.button, buttonClassName].join(' '),
        onClick: this.handleClick,
        onMouseEnter: this.onHover,
        onMouseLeave: this.onLeave
      }, React__default.createElement(LabelComponent, {
        isActive: !!SuggestionsComponent && visible || isMouseHover
      })), SuggestionsComponent && React__default.createElement(PickerSuggestions, {
        visible: visible,
        className: [s$19.suggestions, suggestionsClassName].join(' ')
      }, React__default.createElement(SuggestionsComponent, null)));
    }
  }]);

  return MenuButton;
}(React__default.PureComponent);

MenuButton.defaultProps = {
  className: undefined,
  buttonClassName: undefined,
  suggestionsClassName: undefined,
  SuggestionsComponent: null,
  onClick: function onClick() {
    return null;
  }
};
MenuButton.propTypes = {
  LabelComponent: PropTypes$1.func.isRequired,
  SuggestionsComponent: PropTypes$1.func,
  onClick: PropTypes$1.func,
  className: PropTypes$1.string,
  buttonClassName: PropTypes$1.string,
  suggestionsClassName: PropTypes$1.string
};

var css$1c = ".TextIcon-module_container__3uZXq {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.TextIcon-module_icon__3DoI9 {\n  height: 2em;\n  width: 2em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.TextIcon-module_text__1v24r {}";
var s$1a = {"deepBlue":"#163457","yellow":"#ffcd02","grey":"#4b4b50","blue":"#32a0c5","melrose":"#9ca3ff","green":"#59c871","white":"#fefefe","metalGrey":"#d5d6d7","lightMetalGrey":"#dededf","aquaHazeGrey":"#9eb3c2","darkGrey":"#939baa","lightGrey":"#eceff6","red":"#ff5757","orange":"#f39c12","container":"TextIcon-module_container__3uZXq","icon":"TextIcon-module_icon__3DoI9","text":"TextIcon-module_text__1v24r"};
styleInject(css$1c);

var TextIcon = function TextIcon(_ref) {
  var children = _ref.children,
      imageUrl = _ref.imageUrl,
      className = _ref.className,
      iconClassName = _ref.iconClassName,
      iconProps = _objectWithoutProperties(_ref, ["children", "imageUrl", "className", "iconClassName"]);

  return React__default.createElement("div", {
    className: [s$1a.container, className].join(' ')
  }, React__default.createElement(Icon, _extends({
    src: imageUrl,
    className: [s$1a.icon, iconClassName].join(' ')
  }, iconProps)), children);
};

TextIcon.defaultProps = {
  className: undefined,
  iconClassName: undefined
};
TextIcon.propTypes = {
  children: PropTypes$1.node.isRequired,
  imageUrl: PropTypes$1.string.isRequired,
  className: PropTypes$1.string,
  iconClassName: PropTypes$1.string
};

var index$2 = './components';

exports.ActionLink = ActionLink;
exports.AddItemCard = AddItemCard;
exports.Alert = Alert;
exports.AlternativeTimeCard = AlternativeTimeCard;
exports.ApplicationCard = ApplicationCard;
exports.Arrow = Arrow;
exports.BookingCard = BookingCard;
exports.BookingModificationSummary = BookingModificationSummary;
exports.BookingSteps = BookingSteps;
exports.Button = Button;
exports.CarCard = CarCard;
exports.Card = Card;
exports.CardTitle = CardTitle;
exports.CardTravelInformation = CardTravelInformation;
exports.ColorPicker = ColorPicker;
exports.ContactCard = ContactCard;
exports.ContactForm = ContactForm;
exports.DateTimePicker = DateTimePicker;
exports.FlightInformationForm = FlightInformationForm;
exports.GenderPicker = GenderPicker;
exports.Header = Header;
exports.HtmlPrice = HtmlPrice;
exports.Icon = Icon;
exports.Input = Input;
exports.InputButton = InputButton;
exports.InputCheckbox = InputCheckbox;
exports.InputLabel = InputLabel;
exports.InputSelect = InputSelect;
exports.Label = Label;
exports.LinkUnderlined = LinkUnderlined;
exports.Loader = Loader;
exports.LoginForm = LoginForm;
exports.MenuButton = MenuButton;
exports.PaymentMethodCard = PaymentMethodCard;
exports.PhoneInput = PhoneInput;
exports.Picker = Picker;
exports.PickerSuggestions = PickerSuggestions;
exports.PricingSummary = PricingSummary;
exports.RadioButton = RadioButton;
exports.RatingStars = RatingStars;
exports.ReferralCard = ReferralCard;
exports.RegistrationForm = RegistrationForm;
exports.RewardCard = RewardCard;
exports.RideSummary = RideSummary;
exports.RoundedButton = RoundedButton;
exports.Select = Select;
exports.ServiceCard = ServiceCard;
exports.Subtitle = Subtitle;
exports.TextIcon = TextIcon;
exports.TimeRange = TimeRange;
exports.Title = Title;
exports.TitleStep = TitleStep;
exports.Tooltip = Tooltip;
exports.ZonesPicker = ZonesPicker;
exports.default = index$2;
//# sourceMappingURL=ector-ui.js.map
