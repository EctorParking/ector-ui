import 'react-dates/initialize';
import moment from 'moment';
import React__default, { Fragment, Component, PureComponent, createElement, createRef } from 'react';
import PropTypes from 'prop-types';
import Levenshtein from 'fast-levenshtein';
import { DayPickerRangeController } from 'react-dates';

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
var s = {"container":"ActionLink-module_container__1snmH","commonLabelStyle":"ActionLink-module_commonLabelStyle__3qrLp","labelWithIcon":"ActionLink-module_labelWithIcon__370D_","labelWithoutIcon":"ActionLink-module_labelWithoutIcon__1-sRR"};
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
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string
};

var css$1 = ".Alert-module_alert__r0hVZ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fefefe;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-bottom: 30px;\n  padding: 20px;\n  width: 100%;\n}\n\n.Alert-module_alert__r0hVZ.Alert-module_success__1d-9F {\n  background-color: #59c871;\n}\n\n.Alert-module_alert__r0hVZ.Alert-module_error__1M0Mz {\n  background-color: #ff5757;\n}\n\n.Alert-module_alert__r0hVZ.Alert-module_warning__25grb {\n  background-color: #f39c12;\n}\n\n.Alert-module_icon__MG7hJ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 50%;\n  border: 2px solid #fefefe;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 150%;\n  height: 40px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 20px;\n  width: 40px;\n}\n\n.Alert-module_title__8QSrA {\n  display: block;\n  margin-bottom: 5px;\n}\n\n.Alert-module_alert__r0hVZ p {\n  margin: 0;\n}\n";
var s$1 = {"alert":"Alert-module_alert__r0hVZ","success":"Alert-module_success__1d-9F","error":"Alert-module_error__1M0Mz","warning":"Alert-module_warning__25grb","icon":"Alert-module_icon__MG7hJ","title":"Alert-module_title__8QSrA"};
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
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string
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

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var css$2 = ".Card-module_card__3FjBB {\n  background-color: #eceff6;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-radius: 0.5rem;\n  padding: 4.8px;\n  padding: 4.8px;\n  padding: 0.3rem;\n  position: relative;\n}\n\n.Card-module_card_selected__2gCWh {\n  background-color: #ffcd02;\n}\n\n.Card-module_card_clickable__2aWr0:hover {\n  cursor: pointer;\n  background-color: #ffcd02;\n}\n\n.Card-module_card_clickable__2aWr0:hover:active {\n  cursor: default;\n}\n\n.Card-module_card_content__3eV9O {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  background-color: white;\n  border-radius: 0.3rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 32px 24px;\n  padding: 32px 24px;\n  padding: 2rem 1.5rem;\n}\n\n.Card-module_card_footer__3Nao4 {\n  background-color: transparent;\n  height: 48px;\n  height: 48px;\n  height: 3rem;\n  position: relative;\n}\n\n.Card-module_footerComponent__2kcfz {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n\n.Card-module_label__EcoX3 {\n  position: absolute;\n  top: -10px;\n  right: 20px;\n}\n";
var s$2 = {"card":"Card-module_card__3FjBB","card_selected":"Card-module_card_selected__2gCWh","card_clickable":"Card-module_card_clickable__2aWr0","card_content":"Card-module_card_content__3eV9O","card_footer":"Card-module_card_footer__3Nao4","footerComponent":"Card-module_footerComponent__2kcfz","label":"Card-module_label__EcoX3"};
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
  FooterChildren: PropTypes.node,
  className: PropTypes.string
};

var CardHeader = function CardHeader(_ref2) {
  var HeaderChildren = _ref2.HeaderChildren;
  return React__default.createElement("div", null, HeaderChildren);
};

CardHeader.defaultProps = {
  HeaderChildren: null
};
CardHeader.propTypes = {
  HeaderChildren: PropTypes.node
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  FooterChildren: PropTypes.node,
  HeaderChildren: PropTypes.node,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  footerClassName: PropTypes.string,
  testid: PropTypes.string,
  LabelComponent: PropTypes.func,
  FooterComponent: PropTypes.func,
  RootComponent: PropTypes.func
};

var AlternativeTimeCardTextsType = {
  select: PropTypes.string
};

var css$3 = ".LinkUnderlined-module_link_underlined__4pJUb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  padding: 0 2px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0s ease-in-out;\n  transition: all 0s ease-in-out\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: -1px;\n  width: 100%;\n  height: 8px;\n  background-color: #ffcd02;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transition: all 0.3s ease-in;\n  transition: all 0.3s ease-in;\n  -webkit-transform: translate3d(0, 0, 0) scaleY(1);\n          transform: translate3d(0, 0, 0) scaleY(1);\n  z-index: -1;\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:hover:before {\n  -webkit-transform: translate3d(0, 4px, 0) scaleY(0.6);\n          transform: translate3d(0, 4px, 0) scaleY(0.6);\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:hover:active {\n  opacity: 0.6\n}\n\n.LinkUnderlined-module_link_underlined__4pJUb:hover:active:before {\n  -webkit-transform: translate3d(0, 4px, 0) scaleY(0.2);\n          transform: translate3d(0, 4px, 0) scaleY(0.2);\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s;\n}\n\n.LinkUnderlined-module_link_underlined_fetching__3nZHt:before {\n  background-color: transparent;\n  cursor: not-allowed;\n}\n\n.LinkUnderlined-module_link_underlined_fetching__3nZHt:hover:active {\n  opacity: 1;\n}\n\n.LinkUnderlined-module_fetching__30v4g {\n  background: none;\n  background-color: transparent !important;\n  color: transparent !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  overflow: hidden;\n  position: relative\n}\n\n.LinkUnderlined-module_fetching__30v4g:hover {\n  background-color: transparent;\n}\n\n.LinkUnderlined-module_fetching__30v4g:before {\n  background-color: #ffe8ad;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin-top: -2px;\n}\n\n.LinkUnderlined-module_fetching__30v4g:after {\n  -webkit-animation: LinkUnderlined-module_fetching__30v4g 3s linear infinite;\n          animation: LinkUnderlined-module_fetching__30v4g 3s linear infinite;\n  background-color: #ffb201;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  margin-top: -2px;\n  left: 0;\n  width: 20%;\n}\n\n@-webkit-keyframes LinkUnderlined-module_fetching__30v4g {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n\n@keyframes LinkUnderlined-module_fetching__30v4g {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n";
var s$3 = {"link_underlined":"LinkUnderlined-module_link_underlined__4pJUb","link_underlined_fetching":"LinkUnderlined-module_link_underlined_fetching__3nZHt","fetching":"LinkUnderlined-module_fetching__30v4g"};
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
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  fetching: PropTypes.bool
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
  mode: PropTypes.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes.func.isRequired,
  testid: PropTypes.string
};
AlternativeTimeCardFooter.defaultProps = {
  testid: ''
};

var AlternativeTimeCardAlternativeType = {
  date: PropTypes.string,
  time: PropTypes.string,
  spot: PropTypes.string
};

var css$4 = ".AlternativeTimeCard-module_container__1P0Nm {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: auto;\n  min-width: auto;\n\n  * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n}\n\n.AlternativeTimeCard-module_content__1Eblg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 20px 30px;\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.AlternativeTimeCard-module_content__1Eblg i {\n  margin-right: 10px;\n}\n\n.AlternativeTimeCard-module_header__3hEI6 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  line-height: 1;\n  padding: 5px 10px 10px;\n}\n\n.AlternativeTimeCard-module_footerContainer__2mb4P {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 31px;\n  line-height: 1;\n  padding: 5px;\n  margin-top: 3px;\n}\n";
var s$4 = {"container":"AlternativeTimeCard-module_container__1P0Nm","content":"AlternativeTimeCard-module_content__1Eblg","header":"AlternativeTimeCard-module_header__3hEI6","footerContainer":"AlternativeTimeCard-module_footerContainer__2mb4P"};
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
  mode: PropTypes.oneOf(['normal', 'selectedWithFooter', 'selectedWithoutFooter']).isRequired,
  onSelect: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string
};
AlternativeTimeCard.defaultProps = {
  testid: '',
  className: '',
  texts: {
    select: 'Sélectionner'
  }
};

var ApplicationCardUrlsType = PropTypes.shape({
  googlePlay: PropTypes.string,
  appStore: PropTypes.string
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
var s$5 = {"applicationCard":"ApplicationCard-module_applicationCard__2no43","icons":"ApplicationCard-module_icons__1tF4n"};
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urls: ApplicationCardUrlsType.isRequired,
  className: PropTypes.string
};

var BookingStepsTextsType = PropTypes.shape({
  pickup: PropTypes.string,
  return: PropTypes.string
});
var defaultTexts = {
  pickup: 'Prise en charge',
  return: 'Restitution'
};

var PricingSummaryOptionType = PropTypes.shape({
  label: PropTypes.string,
  price: PropTypes.number
});

var PricingSummaryTextsType = PropTypes.shape({
  addOption: PropTypes.string,
  total: PropTypes.string
});
var defaultTexts$1 = {
  addOption: 'Ajouter une option',
  total: 'Total TTC'
};

var css$6 = ".BookingCardFooter-module_footer__1HSax {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  padding: 0 20px;\n}\n\n.BookingCardFooter-module_left__1VzXV {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.BookingCardFooter-module_left__1VzXV > * {\n  margin-right: 20px;\n}\n\n.BookingCardFooter-module_left__1VzXV > *:last-child {\n  margin-right: 0;\n}\n";
var s$6 = {"footer":"BookingCardFooter-module_footer__1HSax","left":"BookingCardFooter-module_left__1VzXV"};
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
  leftActions: PropTypes.arrayOf(PropTypes.node),
  rightAction: PropTypes.node
};

var css$7 = ".BookingCard-module_container__rtGKa {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.BookingCard-module_bookingSteps__3Vsng {\n  margin-right: 30px;\n}\n\n.BookingCard-module_pricingSummary__1RKl- {\n  margin-left: 30px;\n}\n";
var s$7 = {"container":"BookingCard-module_container__rtGKa","bookingSteps":"BookingCard-module_bookingSteps__3Vsng","pricingSummary":"BookingCard-module_pricingSummary__1RKl-"};
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
  fromSpot: PropTypes.string.isRequired,
  toSpot: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  bookingStepsTexts: BookingStepsTextsType,
  options: PropTypes.arrayOf(PricingSummaryOptionType).isRequired,
  pricingSummaryTexts: PricingSummaryTextsType.isRequired,
  leftActions: PropTypes.arrayOf(PropTypes.node),
  rightAction: PropTypes.node,
  className: PropTypes.string
};

var css$8 = ".BookingSteps-module_bookingSteps__6TCaf {\n  padding-left: 30px;\n  font-size: 16px;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf > div:first-child {\n  padding-bottom: 30px;\n  position: relative;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf > div:first-child:before {\n  content: '';\n  position: absolute;\n  top: 10px;\n  left: -20px;\n  margin-left: 4px;\n  bottom: -10px;\n  border-right: 2px dotted #32a0c5;\n}\n\n.BookingSteps-module_stepName__3dA-f {\n  font-size: 1.2em;\n  font-weight: 500;\n  color: #32a0c5;\n  margin: 0;\n  position: relative;\n}\n\n.BookingSteps-module_stepName__3dA-f:before {\n  position: absolute;\n  content: '';\n  width: 10px;\n  height: 10px;\n  top: 50%;\n  left: -20px;\n  border-radius: 50%;\n  background-color: #32a0c5;\n  margin-top: -5px;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf div span {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.9em;\n}\n\n.BookingSteps-module_bookingSteps__6TCaf div span i {\n  /* margin-right: var(--marginSmall); */\n  font-size: 0.7em;\n  width: 30px;\n}\n";
var s$8 = {"bookingSteps":"BookingSteps-module_bookingSteps__6TCaf","stepName":"BookingSteps-module_stepName__3dA-f"};
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
  fromSpot: PropTypes.string.isRequired,
  toSpot: PropTypes.string.isRequired,
  startAt: PropTypes.string.isRequired,
  endAt: PropTypes.string.isRequired,
  texts: BookingStepsTextsType.isRequired,
  className: PropTypes.string
};

var css$9 = ".Button-module_button__6y6Zv {\n  background-color: #ffcd02;\n  border-radius: 8px;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1;\n  margin: 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0.8em 1.1em;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-transition: background-color 0.2s ease-in-out;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.Button-module_button__6y6Zv span {\n  position: relative;\n}\n\n.Button-module_button__6y6Zv .Button-module_track__n1eRD {\n  -webkit-animation: Button-module_outFromFetching__2D1oh 0.2s linear forwards;\n          animation: Button-module_outFromFetching__2D1oh 0.2s linear forwards;\n  background-color: #ffcd02;\n  border-radius: 8px;\n  content: '';\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 0%;\n}\n\n.Button-module_button__6y6Zv[disabled] {\n  background-color: #7890a3;\n  cursor: not-allowed\n}\n\n.Button-module_button__6y6Zv[disabled]:hover {\n  background-color: #7890a3;\n}\n\n.Button-module_button__6y6Zv.Button-module_fetching__1tCOO {\n  background-color: rgba(255, 205, 2, .41961);\n}\n\n.Button-module_track__n1eRD.Button-module_fetchingTrack__SjURZ {\n  -webkit-animation: Button-module_fetching__1tCOO 3s cubic-bezier(.33,.6,.3,.69) forwards;\n          animation: Button-module_fetching__1tCOO 3s cubic-bezier(.33,.6,.3,.69) forwards;\n  opacity: 1;\n}\n\n@-webkit-keyframes Button-module_fetching__1tCOO {\n    from {\n      width: 0%;\n    }\n\n    to {\n      width: 100%;\n    }\n}\n\n@keyframes Button-module_fetching__1tCOO {\n    from {\n      width: 0%;\n    }\n\n    to {\n      width: 100%;\n    }\n}\n\n@-webkit-keyframes Button-module_outFromFetching__2D1oh {\n    from {\n      opacity: 1;\n      width: 100%;\n    }\n\n    to {\n      opacity: 0;\n      width: 100%;\n    }\n}\n\n@keyframes Button-module_outFromFetching__2D1oh {\n    from {\n      opacity: 1;\n      width: 100%;\n    }\n\n    to {\n      opacity: 0;\n      width: 100%;\n    }\n}\n";
var s$9 = {"button":"Button-module_button__6y6Zv","track":"Button-module_track__n1eRD","outFromFetching":"Button-module_outFromFetching__2D1oh","fetching":"Button-module_fetching__1tCOO","fetchingTrack":"Button-module_fetchingTrack__SjURZ"};
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
  animationDuration: PropTypes.number,
  fetchingDelay: PropTypes.number,
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  fetching: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  component: PropTypes.oneOf([PropTypes.string, PropTypes.node])
};

var css$a = ".BookingModificationSummaryRow-module_summaryRow__3yRUL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 5px 0;\n}\n\n.BookingModificationSummaryRow-module_summaryRowText__3WlNz {\n  color: #163457;\n  font-size: 16px;\n  margin: 0;\n}\n\n.BookingModificationSummaryRow-module_summaryRowPrice__Zr9Jr {\n  margin: 0;\n  font-size: 22px;\n}\n";
var s$a = {"summaryRow":"BookingModificationSummaryRow-module_summaryRow__3yRUL","summaryRowText":"BookingModificationSummaryRow-module_summaryRowText__3WlNz","summaryRowPrice":"BookingModificationSummaryRow-module_summaryRowPrice__Zr9Jr"};
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
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isExtra: PropTypes.bool,
  textClassName: PropTypes.string,
  priceClassName: PropTypes.string,
  className: PropTypes.string,
  count: PropTypes.number
};

var bookingModificationSummaryTextType = PropTypes.shape({
  initialPrice: PropTypes.string,
  routingFee: PropTypes.string,
  parkingFee: PropTypes.string,
  administrativeFee: PropTypes.string,
  leftToPay: PropTypes.string
});
var defaultTexts$2 = {
  initialPrice: 'Prix initial',
  routingFee: 'Acheminement',
  parkingFee: 'Durée de stationnement supplémentaire',
  administrativeFee: 'Frais de dossier*',
  total: 'Total reste à payer'
};

var FeePropType = PropTypes.oneOf(PropTypes.string, PropTypes.number);
var BookingModificationSummaryPriceType = PropTypes.shape({
  initialPrice: PropTypes.string,
  routingFee: FeePropType,
  parkingFee: FeePropType,
  administrativeFee: FeePropType,
  countRoutingFee: PropTypes.number,
  countParkingFee: PropTypes.number,
  countAdministrativeFee: PropTypes.number,
  total: PropTypes.string
});

var css$b = ".BookingModificationSummary-module_bookingModificationSummaryContainer__m75Sd {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.BookingModificationSummary-module_horizontalRule__zXT2f {\n  border: 0;\n  border-top: 2px solid #163457;\n  margin: 8px 0;\n  width: 100%;\n}\n\n.BookingModificationSummary-module_totalSummaryRow__2aMiu > .BookingModificationSummary-module_price__3elbC {\n  font-size: 22px;\n}\n\n.BookingModificationSummary-module_bold__8CWuB {\n  font-weight: 700;\n}\n\n.BookingModificationSummary-module_bigText__ykaTn {\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.BookingModificationSummary-module_bigPrice__39KvY {\n  font-size: 32px;\n}\n";
var s$b = {"bookingModificationSummaryContainer":"BookingModificationSummary-module_bookingModificationSummaryContainer__m75Sd","horizontalRule":"BookingModificationSummary-module_horizontalRule__zXT2f","totalSummaryRow":"BookingModificationSummary-module_totalSummaryRow__2aMiu","price":"BookingModificationSummary-module_price__3elbC","bold":"BookingModificationSummary-module_bold__8CWuB","bigText":"BookingModificationSummary-module_bigText__ykaTn","bigPrice":"BookingModificationSummary-module_bigPrice__39KvY"};
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
  className: PropTypes.string,
  bookingModificationSummaryPrice: BookingModificationSummaryPriceType.isRequired
};

var css$c = ".CarCard-module_carName__3U28- {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n}\n\n.CarCard-module_footer__2tcPB {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-left: 0.5em;\n}\n\n.CarCard-module_carImage__2VNnU {\n  margin-top: -0.5em;\n  width: 100px;\n}\n\n.CarCard-module_checkIcon__2K1Lg {\n  color: #fefefe;\n  font-size: 22px;\n}\n\n.CarCard-module_editIcon__1JUFI {\n  margin-right: -0.75em;\n}\n\n.CarCard-module_editButton__4jhVF {\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n.CarCard-module_pendingDeletion__1KStd {\n  background-color: #eceff6;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n}\n\n.CarCard-module_pendingModification__2FzfP {\n  padding: 20px;\n}\n\n.CarCard-module_deletionAlert__2nLFJ {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.CarCard-module_deletionAlert__2nLFJ p {\n  margin: 10px 0;\n}\n\n.CarCard-module_deletionButtons__3RyZ- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n}\n";
var s$c = {"carName":"CarCard-module_carName__3U28-","footer":"CarCard-module_footer__2tcPB","carImage":"CarCard-module_carImage__2VNnU","checkIcon":"CarCard-module_checkIcon__2K1Lg","editIcon":"CarCard-module_editIcon__1JUFI","editButton":"CarCard-module_editButton__4jhVF","pendingDeletion":"CarCard-module_pendingDeletion__1KStd","pendingModification":"CarCard-module_pendingModification__2FzfP","deletionAlert":"CarCard-module_deletionAlert__2nLFJ","deletionButtons":"CarCard-module_deletionButtons__3RyZ-"};
styleInject(css$c);

var CarType = PropTypes.shape({
  name: PropTypes.string,
  numberPlate: PropTypes.string
});

var TextsType = PropTypes.shape({
  modify: PropTypes.string,
  save: PropTypes.string,
  confirmDeletionTitle: PropTypes.string,
  confirmDeletionSentence: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string
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
var s$d = {"deletionAlert":"CarCardDeletionAlert-module_deletionAlert__1X4X3","deletionButtons":"CarCardDeletionAlert-module_deletionButtons__2ZjMT"};
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
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

var css$e = ".CarCardHeader-module_name__FBdn8 {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n}\n\n.CarCardHeader-module_editIcon__3m80I:before, .CarCardHeader-module_deleteIcon__3YQd_:before {\n  color: #32a0c5;\n}\n\n.CarCardHeader-module_editButton__1G4OQ {\n  background: none;\n  border: 0;\n  margin: 0;\n  margin-right: -0.75em;\n  padding: 0;\n}\n";
var s$e = {"name":"CarCardHeader-module_name__FBdn8","editIcon":"CarCardHeader-module_editIcon__3m80I","deleteIcon":"CarCardHeader-module_deleteIcon__3YQd_","editButton":"CarCardHeader-module_editButton__1G4OQ"};
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
  editable: PropTypes.bool.isRequired,
  deletable: PropTypes.bool.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  pendingModification: PropTypes.bool.isRequired,
  texts: TextsType,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

var css$f = ".CarCardFooter-module_footer__3Rxvl {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 16px;\n  padding: 0 16px;\n  padding: 0 1rem;\n}\n\n.CarCardFooter-module_carImage__1jNWG {\n  margin-top: -0.5em;\n  width: 100px;\n}\n\n.CarCardFooter-module_checkIcon__35HXC {\n  color: #fefefe;\n  font-size: 22px;\n}\n";
var s$f = {"footer":"CarCardFooter-module_footer__3Rxvl","carImage":"CarCardFooter-module_carImage__1jNWG","checkIcon":"CarCardFooter-module_checkIcon__35HXC"};
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
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  id: PropTypes.string.isRequired
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
  id: PropTypes.string.isRequired
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
  onChangeNumberPlate: PropTypes.func.isRequired,
  onChangeColor: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
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
  editable: PropTypes.bool,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingModification: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: TextsType,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  onChangeNumberPlate: PropTypes.func,
  onChangeColor: PropTypes.func,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  onConfirmDeletion: PropTypes.func,
  onCancelDeletion: PropTypes.func,
  idPrefix: PropTypes.string
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
var s$i = {"card_title":"CardTitle-module_card_title__3ZJs5"};
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
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

var TextsType$1 = PropTypes.shape({
  title: PropTypes.string,
  travelingNumberFromPlaceholder: PropTypes.string,
  travelingNumberFromLabel: PropTypes.string,
  travelingNumberToPlaceholder: PropTypes.string,
  travelingNumberToLabel: PropTypes.string,
  businessTravel: PropTypes.string,
  unknownFlightNumber: PropTypes.string,
  returnFlightCompany: PropTypes.string,
  returnFlightOrigin: PropTypes.string,
  blank: PropTypes.string,
  updateReturnFlightCompany: PropTypes.string,
  travelingNumberTo: PropTypes.string
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

var css$j = ".CardTravelInformation-module_inputsRow__3ttBe {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: auto;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.CardTravelInformation-module_travelingNumberFromInputLabel__2Yk1d {\n  margin: 16px 8px 16px 0;\n  margin: 16px 8px 16px 0;\n  margin: 1rem 0.5rem 1rem 0;\n}\n\n.CardTravelInformation-module_travelingNumberToInputLabel__1_lTU {\n  margin: 16px 0 16px 8px;\n  margin: 16px 0 16px 8px;\n  margin: 1rem 0 1rem 0.5rem;\n}\n\n.CardTravelInformation-module_mandatorySentence__2URs8 {\n  margin-top: 10px;\n  margin-left: 10px;\n}\n\n.CardTravelInformation-module_unknownTravelingNumberTo__3-nIa {\n  display: inline-block\n}\n\n.CardTravelInformation-module_unknownTravelingNumberTo__3-nIa>.CardTravelInformation-module_unknownTravelingNumberToButton__16oLN {\n  float: right;\n}\n\n@media (max-width: 768px) {\n  .CardTravelInformation-module_travelingNumberFromInputLabel__2Yk1d, .CardTravelInformation-module_travelingNumberToInputLabel__1_lTU {\n    margin: 10px auto;\n  }\n}\n\n@media (max-width: 480px) {\n  .CardTravelInformation-module_inputsRow__3ttBe {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n";
var s$j = {"inputsRow":"CardTravelInformation-module_inputsRow__3ttBe","travelingNumberFromInputLabel":"CardTravelInformation-module_travelingNumberFromInputLabel__2Yk1d","travelingNumberToInputLabel":"CardTravelInformation-module_travelingNumberToInputLabel__1_lTU","mandatorySentence":"CardTravelInformation-module_mandatorySentence__2URs8","unknownTravelingNumberTo":"CardTravelInformation-module_unknownTravelingNumberTo__3-nIa","unknownTravelingNumberToButton":"CardTravelInformation-module_unknownTravelingNumberToButton__16oLN"};
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

      return React__default.createElement(Fragment, null, React__default.createElement("div", null, texts.travelingNumberTo, "\xA0:\xA0", values.travelingNumberTo || texts.blank), React__default.createElement("div", null, texts.returnFlightCompany, "\xA0:\xA0", values.returnFlightCompany), React__default.createElement("div", null, texts.returnFlightOrigin, "\xA0:\xA0", values.returnFlightOrigin || texts.blank));
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
}(Component);

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
  values: PropTypes.shape({
    travelingNumberFrom: PropTypes.string,
    travelingNumberTo: PropTypes.string,
    returnFlightCompany: PropTypes.string,
    returnFlightOrigin: PropTypes.string
  }),
  errors: PropTypes.shape({
    travelingNumberFrom: PropTypes.string,
    travelingNumberTo: PropTypes.string
  }),
  texts: TextsType$1,
  className: PropTypes.string,
  onChangeProperty: PropTypes.func,
  inputClassName: PropTypes.string,
  onClickUnknownTravelingNumberTo: PropTypes.func,
  unknownTravelingNumberToClassName: PropTypes.string,
  travelingNumberToClassName: PropTypes.string,
  travelingNumberFromClassName: PropTypes.string
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
var ColorPropsType = PropTypes.shape({
  label: PropTypes.string,
  hexadecimalCode: PropTypes.string
});

var css$k = ".ColorPicker-module_colorPicker__1nGRp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  max-width: 300px;\n}\n\n.ColorPicker-module_badge__2yfcC {\n  background: none;\n  border-radius: 15px;\n  border: 1px solid #163457;\n  height: 30px;\n  margin: 15px;\n  overflow: hidden;\n  position: relative;\n  width: 30px;\n}\n\n.ColorPicker-module_badgeSelected__19Xx9 {\n  border-color: #ffcd02;\n  border-width: 3px;\n}\n\n.ColorPicker-module_transparent__3Lbn6:before,\n.ColorPicker-module_transparent__3Lbn6:after {\n  background-color: #ff5757;\n  content: '';\n  height: 1px;\n  position: absolute;\n  top: 15px;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  width: 150%;\n}\n\n.ColorPicker-module_transparent__3Lbn6:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  left: -5px;\n}\n\n.ColorPicker-module_transparent__3Lbn6:after {\n  right: -5px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.ColorPicker-module_tooltip__2BRme {\n  position: relative\n}\n\n.ColorPicker-module_tooltip__2BRme:hover>.ColorPicker-module_tooltipText__EMozF {\n  visibility: visible;\n}\n\n.ColorPicker-module_tooltipText__EMozF {\n  -webkit-transform: translateX(-50%) !important;\n          transform: translateX(-50%) !important;\n  left: 30px !important;\n  top: 50px !important;\n}\n";
var s$k = {"colorPicker":"ColorPicker-module_colorPicker__1nGRp","badge":"ColorPicker-module_badge__2yfcC","badgeSelected":"ColorPicker-module_badgeSelected__19Xx9","transparent":"ColorPicker-module_transparent__3Lbn6","tooltip":"ColorPicker-module_tooltip__2BRme","tooltipText":"ColorPicker-module_tooltipText__EMozF"};
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
}(PureComponent);

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
  showTooltip: PropTypes.bool,
  badgeClassName: PropTypes.string,
  tooltipClassName: PropTypes.string,
  tooltipSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  colorsList: PropTypes.arrayOf(ColorPropsType),
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string,
  testid: PropTypes.string
};

var css$l = ".ContactCard-module_pendingDeletion__1MWPo {\n  background-color: #eceff6;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n}\n\n.ContactCard-module_pendingModification__2gi3N {\n  padding: 20px;\n}\n\n.ContactCard-module_pendingDeletion__1MWPo p {\n  text-align: center;\n}\n";
var s$l = {"pendingDeletion":"ContactCard-module_pendingDeletion__1MWPo","pendingModification":"ContactCard-module_pendingModification__2gi3N"};
styleInject(css$l);

var ContactType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  title: PropTypes.oneOf(['male', 'female'])
});
var ContactFormValuesType = PropTypes.shape({
  email: PropTypes.string,
  phone: PropTypes.string
});
var ContactFormErrorsType = PropTypes.shape({
  email: PropTypes.string,
  phone: PropTypes.string
});

var TextsType$2 = PropTypes.shape({
  modify: PropTypes.string,
  delete: PropTypes.string,
  save: PropTypes.string,
  confirmDeletionTitle: PropTypes.string,
  confirmDeletionSentence: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string
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
var s$m = {"deletionAlert":"ContactCardDeletionAlert-module_deletionAlert__3yCFY","deletionButtons":"ContactCardDeletionAlert-module_deletionButtons__3_jUz"};
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
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

var css$n = ".ContactCardHeader-module_name__33JVE {\n  color: #32a0c5;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 22px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: -0.75em;\n}\n\n.ContactCardHeader-module_editIcon__1sOu6:before, .ContactCardHeader-module_deleteIcon__35WZv:before {\n  color: #32a0c5;\n}\n\n.ContactCardHeader-module_editButton__5yJha {\n  background: none;\n  border: 0;\n  margin: 0;\n  margin-right: -0.75em;\n  padding: 0;\n}\n";
var s$n = {"name":"ContactCardHeader-module_name__33JVE","editIcon":"ContactCardHeader-module_editIcon__1sOu6","deleteIcon":"ContactCardHeader-module_deleteIcon__35WZv","editButton":"ContactCardHeader-module_editButton__5yJha"};
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
  editable: PropTypes.bool.isRequired,
  deletable: PropTypes.bool.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  pendingModification: PropTypes.bool.isRequired,
  texts: TextsType$2.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

var css$o = ".ContactCardFooter-module_footer__2NOL8 {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 0 32px;\n  padding: 0 32px;\n  padding: 0 2rem;\n  height: 32px;\n  height: 32px;\n  height: 2rem;\n}\n\n.ContactCardFooter-module_checkIcon__4bk-O {\n  color: #fefefe;\n  font-size: 22px;\n}\n";
var s$o = {"footer":"ContactCardFooter-module_footer__2NOL8","checkIcon":"ContactCardFooter-module_checkIcon__4bk-O"};
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
  mode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
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
  id: PropTypes.string.isRequired
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
  onChangeEmail: PropTypes.func.isRequired,
  onChangePhoneNumber: PropTypes.func.isRequired,
  values: ContactFormValuesType.isRequired,
  errors: ContactFormErrorsType.isRequired,
  id: PropTypes.string.isRequired
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
  editable: PropTypes.bool,
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingModification: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: TextsType$2,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  onSubmit: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePhoneNumber: PropTypes.func,
  formValues: ContactFormValuesType,
  formErrors: ContactFormErrorsType,
  onCancelDeletion: PropTypes.func,
  onConfirmDeletion: PropTypes.func,
  idPrefix: PropTypes.string,
  children: PropTypes.node
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
var s$r = {"title":"ContactForm-module_title__3ved4","hidden":"ContactForm-module_hidden__qeLf1","-webkit-columns":"ContactForm-module_columns__2X9Q2","columns":"ContactForm-module_columns__2X9Q2","firstSection":"ContactForm-module_firstSection__2-PaO","secondSection":"ContactForm-module_secondSection__3Tyz5","footer":"ContactForm-module_footer__1tHfE","leftGenderPickerField":"ContactForm-module_leftGenderPickerField__35PAF","topGenderPickerField":"ContactForm-module_topGenderPickerField__4HrA9","genderPickerInputs":"ContactForm-module_genderPickerInputs__JKZh-","contactFormInput":"ContactForm-module_contactFormInput__2qQIC","postalCodeInput":"ContactForm-module_postalCodeInput__2kGf4","phoneInput":"ContactForm-module_phoneInput__AIWcI"};
styleInject(css$r);

var TextsType$3 = PropTypes.shape({
  newDriver: PropTypes.string,
  addDriver: PropTypes.string,
  civility: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  firstNamePlaceholder: PropTypes.string,
  lastNamePlaceholder: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  postCode: PropTypes.string,
  notMandatory: PropTypes.string,
  emailPlaceholder: PropTypes.string,
  postCodePlaceholder: PropTypes.string,
  male: PropTypes.string,
  female: PropTypes.string
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
var CountryPropType = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string,
  image: PropTypes.string
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
  onChangeProperty: PropTypes.func,
  values: PropTypes.shape({
    title: PropTypes.oneOf(['male', 'female', null, '']),
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string
  }),
  errors: PropTypes.shape({
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    postalCode: PropTypes.string
  }),
  onInputFocus: PropTypes.func,
  onInputBlur: PropTypes.func,
  selected: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['top', 'left']),
  onSubmit: PropTypes.func,
  countries: PropTypes.arrayOf(CountryPropType),
  contentClassName: PropTypes.string,
  firstSectionClassName: PropTypes.string,
  secondSectionClassName: PropTypes.string,
  withCountryFlag: PropTypes.bool,
  renderInput: PropTypes.func,
  FooterComponent: PropTypes.func,
  RootComponent: PropTypes.func
};

var GenderType = PropTypes.shape({
  value: PropTypes.string,
  label: PropTypes.string
});

var css$s = ".RadioButton-module_radioButton__2iRZ- * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.RadioButton-module_radioButton__2iRZ- {\n  position: relative;\n}\n\n.RadioButton-module_radioButton__2iRZ- input {\n  position: absolute;\n  opacity: 0;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span:before,\n.RadioButton-module_radioButton__2iRZ- > span:after {\n  display: block;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span:before {\n  border-radius: 50%;\n  border: 2px solid rgb(206, 206, 206);\n  content: '';\n  height: 10px;\n  margin-right: 10px;\n  width: 10px;\n}\n\n.RadioButton-module_radioButton__2iRZ- > span:after {\n  background-color: #ffcd02;\n  border-radius: 50%;\n  content: '';\n  display: none;\n  height: 6px;\n  left: 4px;\n  position: absolute;\n  top: 8px;\n  width: 6px;\n}\n\n.RadioButton-module_radioButton__2iRZ- input[type=\"radio\"]:checked + span:after {\n  display: block;\n}\n";
var s$s = {"radioButton":"RadioButton-module_radioButton__2iRZ-"};
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  labelClassName: PropTypes.string
};

var css$t = ".GenderPicker-module_genderPicker__damb5 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.GenderPicker-module_genderPicker__damb5 label {\n  margin-right: 20px;\n}\n\n.GenderPicker-module_genderPicker__damb5 label:last-child {\n  margin-right: 0;\n}\n\n.GenderPicker-module_error__22EzG {\n  text-align: left;\n  color: #ff5757;\n}\n";
var s$t = {"genderPicker":"GenderPicker-module_genderPicker__damb5","error":"GenderPicker-module_error__22EzG"};
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
  selected: PropTypes.string,
  genders: PropTypes.arrayOf(GenderType).isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  error: PropTypes.string
};

var css$u = ".Input-module_container__y-kIk {\n  position: relative;\n}\n\n.Input-module_input__1TjxO {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #163457;\n  border: 2px solid #d5d6d7;\n  border-radius: 3px;\n  display: block;\n  height: 40px;\n  height: 40px;\n  height: 2.5rem;\n  padding: 8px;\n  padding: 8px;\n  padding: 0.5rem;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n  margin-top: 4px;\n  margin-top: 4px;\n  margin-top: 0.25rem\n}\n\n.Input-module_input__1TjxO::-webkit-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.Input-module_input__1TjxO::-ms-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.input::-webkit-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.input::-ms-input-placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.Input-module_input__1TjxO::placeholder {\n  opacity: 0.8;\n  color: #d5d6d7;\n}\n\n.Input-module_input__1TjxO:focus {\n  border-color: #ffcd02;\n}\n\n.Input-module_inputWithError__q0fcE {\n  border-color: #ff5757 !important;\n}\n\n.Input-module_inputPrepend__36mBv {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #939baa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 32px;\n  font-size: 32px;\n  font-size: 2rem;\n  height: 100%;\n  left: 5px;\n  position: absolute;\n  top: 0;\n}\n\n.Input-module_inputAppend__2lJtU {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #939baa;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 32px;\n  font-size: 32px;\n  font-size: 2rem;\n  height: 100%;\n  position: absolute;\n  right: 5px;\n  top: 0;\n}\n";
var s$u = {"container":"Input-module_container__y-kIk","input":"Input-module_input__1TjxO","inputWithError":"Input-module_inputWithError__q0fcE","inputPrepend":"Input-module_inputPrepend__36mBv","inputAppend":"Input-module_inputAppend__2lJtU"};
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
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  onKeyDown: PropTypes.func,
  LeftComponent: PropTypes.func,
  RightComponent: PropTypes.func,
  containerClassName: PropTypes.string
};

var css$v = ".InputButton-module_inputButtonContainerClassName__2OzTt {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.InputButton-module_inputContainerClassName__2wy9a {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.InputButton-module_input__3lwQJ {\n  width: 100%;\n  margin: 0 auto;\n}\n\n.InputButton-module_input__3lwQJ, .InputButton-module_button__3YbuH {\n  height: 40px;\n}\n\n.InputButton-module_helpTextClassname__3BmMr {\n  color: #d5d6d7;\n  font-style: italic;\n  margin: 0;\n}\n\n.InputButton-module_error__3au5y {\n  text-align: left;\n  color: #ff5757;\n}\n\n@media (min-width: 480px){\n  .InputButton-module_input__3lwQJ {\n    border-bottom-right-radius: 0;\n    border-right: 0;\n    border-top-right-radius: 0;\n  }\n  .InputButton-module_button__3YbuH {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n  }\n}\n\n@media (max-width: 480px) {\n  .InputButton-module_inputButtonContainerClassName__2OzTt {\n    display: block;\n  }\n  .InputButton-module_inputContainerClassName__2wy9a {\n    margin-bottom: 20px;\n  }\n  .InputButton-module_button__3YbuH {\n    margin: 0 auto;\n  }\n}\n";
var s$v = {"inputButtonContainerClassName":"InputButton-module_inputButtonContainerClassName__2OzTt","inputContainerClassName":"InputButton-module_inputContainerClassName__2wy9a","input":"InputButton-module_input__3lwQJ","button":"InputButton-module_button__3YbuH","helpTextClassname":"InputButton-module_helpTextClassname__3BmMr","error":"InputButton-module_error__3au5y"};
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
      ButtonComponent = _ref.ButtonComponent,
      SubTextComponent = _ref.SubTextComponent,
      inputProps = _objectWithoutProperties(_ref, ["id", "placeholder", "buttonText", "inputClassName", "inputContainerClassName", "inputButtonContainerClassName", "inputType", "hasError", "ButtonComponent", "SubTextComponent"]);

  return React__default.createElement("div", {
    className: [s$v.inputButtonContainerClassName, inputButtonContainerClassName].join(' ')
  }, React__default.createElement("div", {
    className: [s$v.inputContainerClassName, inputContainerClassName].join(' ')
  }, React__default.createElement(Input, _extends({
    placeholder: placeholder,
    className: [s$v.input, inputClassName].join(' '),
    id: id,
    type: inputType,
    hasError: hasError
  }, inputProps)), React__default.createElement(SubTextComponent, null)), React__default.createElement(ButtonComponent, {
    className: s$v.button
  }, buttonText));
};

InputButton.defaultProps = {
  inputButtonContainerClassName: '',
  id: 'InputButton',
  placeholder: '',
  inputClassName: '',
  hasError: false,
  inputType: 'text',
  inputContainerClassName: '',
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
  id: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  inputButtonContainerClassName: PropTypes.string,
  hasError: PropTypes.bool,
  ButtonComponent: PropTypes.func,
  SubTextComponent: PropTypes.func
};

var css$w = "/* The input_checkbox */\n\n.InputCheckbox-module_input_checkbox__cqwzW {\n  display: block;\n  position: relative;\n  padding-left: 32px;\n  padding-left: 32px;\n  padding-left: 2rem;\n  padding-top: 2px;\n  cursor: pointer;\n  font-size: 16px;\n  font-size: 16px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: 24px;\n  height: 24px;\n  height: 1.5rem\n}\n\n.InputCheckbox-module_input_checkbox__cqwzW:active {\n  opacity: 0.6;\n}\n\n/* Hide the browser's default checkbox */\n\n.InputCheckbox-module_input_checkbox__cqwzW input {\n  position: absolute;\n  border: 2.4px solid transparent;\n  border: 2.4px solid transparent;\n  border: 0.15rem solid transparent;\n  opacity: 0;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  height: 22px;\n  margin-top: 0;\n  width: 100%;\n  z-index: 1;\n}\n\n/* Create a custom checkbox */\n\n.InputCheckbox-module_checkmark__QSyLA {\n  background-color: #fefefe;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 22px;\n  width: 22px;\n  border-radius: 0.25rem;\n  border: 2.4px solid #d5d6d7;\n  border: 2.4px solid #d5d6d7;\n  border: 0.15rem solid #d5d6d7;\n}\n\n/* On mouse-over, add a grey background color */\n\n.InputCheckbox-module_input_checkbox__cqwzW:hover input ~ .InputCheckbox-module_checkmark__QSyLA {\n  border-color: rgb(206, 206, 206);\n}\n\n/* When the checkbox is checked, add a blue background */\n\n.InputCheckbox-module_input_checkbox__cqwzW input:checked ~ .InputCheckbox-module_checkmark__QSyLA {\n  background-color: transparent;\n  border-color: rgb(206, 206, 206);\n}\n\n/* Create the checkmark/indicator (hidden when not checked) */\n\n.InputCheckbox-module_checkmark__QSyLA:after {\n  content: '';\n  position: absolute;\n  display: none;\n}\n\n/* Show the checkmark when checked */\n\n.InputCheckbox-module_input_checkbox__cqwzW input:checked ~ .InputCheckbox-module_checkmark__QSyLA:after {\n  display: block;\n}\n\n/* Style the checkmark/indicator */\n\n.InputCheckbox-module_input_checkbox__cqwzW .InputCheckbox-module_checkmark__QSyLA:after {\n  left: 3px;\n  top: 3px;\n  border-radius: 0.15rem;\n  width: 12px;\n  height: 12px;\n  background-color: #ffcd02;\n}\n";
var s$w = {"input_checkbox":"InputCheckbox-module_input_checkbox__cqwzW","checkmark":"InputCheckbox-module_checkmark__QSyLA"};
styleInject(css$w);

var InputCheckbox = function InputCheckbox(_ref) {
  var id = _ref.id,
      children = _ref.children,
      onChange = _ref.onChange,
      checked = _ref.checked,
      className = _ref.className,
      restOfProps = _objectWithoutProperties(_ref, ["id", "children", "onChange", "checked", "className"]);

  return React__default.createElement("label", {
    htmlFor: "".concat(id),
    className: "".concat(s$w.input_checkbox, " ").concat(className)
  }, children, React__default.createElement("input", _extends({
    type: "checkbox",
    id: "".concat(id),
    onChange: onChange,
    checked: checked
  }, restOfProps)), React__default.createElement("span", {
    className: s$w.checkmark
  }));
};

InputCheckbox.defaultProps = {
  id: 'InputStart',
  onChange: function onChange() {},
  checked: false,
  className: ''
};
InputCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  className: PropTypes.string
};

var css$x = ".InputLabel-module_container__204V9 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.InputLabel-module_leftContainer__VGF5O {\n  display: grid;\n  grid-template-columns: 10em auto;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.InputLabel-module_leftLabel__2ToOM {\n  padding-right: 1em;\n}\n\n.InputLabel-module_input__2fkjR {\n  display: block;\n  width: 100%;\n  margin-top: 0;\n}\n\n.InputLabel-module_error__2vD-d {\n  text-align: left;\n  color: #ff5757;\n}\n\n.InputLabel-module_mandatory__2bVGW {\n  font-weight: 700;\n}\n\n.InputLabel-module_mandatory__2bVGW:after {\n  content: '*';\n}\n\n.InputLabel-module_leftText__1seAt {\n  grid-column-start: 2;\n}\n";
var s$x = {"container":"InputLabel-module_container__204V9","leftContainer":"InputLabel-module_leftContainer__VGF5O","leftLabel":"InputLabel-module_leftLabel__2ToOM","input":"InputLabel-module_input__2fkjR","error":"InputLabel-module_error__2vD-d","mandatory":"InputLabel-module_mandatory__2bVGW","leftText":"InputLabel-module_leftText__1seAt"};
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
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  mandatory: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType(['text', 'number']),
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputContainerClassName: PropTypes.string,
  error: PropTypes.string,
  left: PropTypes.bool,
  children: PropTypes.node,
  InputComponent: PropTypes.func,
  LabelComponent: PropTypes.func,
  LabelFooterComponent: PropTypes.func,
  errorClassName: PropTypes.string,
  onKeyDown: PropTypes.func
};

var css$y = ".Label-module_labelContainer__22ERg {\n    border-radius: 3px;\n    color: #fefefe;\n    font-size: 11px;\n    padding: 0 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.Label-module_text__147Rh {\n    padding: 0 5px;\n    font-weight: 500;\n    letter-spacing: 1px;\n}\n\n.Label-module_deepBlue__3TrYV {\n    background-color: #163457;\n}\n\n.Label-module_green__nYXKb {\n    background-color: #59c871;\n}\n\n.Label-module_red__3mvqV {\n    background-color: #ff5757;\n}\n\n.Label-module_melrose__2BUjT {\n    background-color: #9ca3ff;\n}\n\n.Label-module_blue__1dBeq {\n    background-color: #32a0c5;\n}\n\n.Label-module_lightGrey__13k9A {\n    background-color: #eceff6;\n}\n\n.Label-module_metalGrey__1giIv {\n    background-color: #d5d6d7;\n}\n\n.Label-module_darkMetalGrey__GhZE1 {\n    background-color: rgb(206, 206, 206);\n}\n\n.Label-module_aquaHazeGrey__22AvE {\n    background-color: #9eb3c2;\n}\n\n.Label-module_orange__2AKhU {\n    background-color: #f39c12;\n}\n";
var s$y = {"labelContainer":"Label-module_labelContainer__22ERg","text":"Label-module_text__147Rh","deepBlue":"Label-module_deepBlue__3TrYV","green":"Label-module_green__nYXKb","red":"Label-module_red__3mvqV","melrose":"Label-module_melrose__2BUjT","blue":"Label-module_blue__1dBeq","lightGrey":"Label-module_lightGrey__13k9A","metalGrey":"Label-module_metalGrey__1giIv","darkMetalGrey":"Label-module_darkMetalGrey__GhZE1","aquaHazeGrey":"Label-module_aquaHazeGrey__22AvE","orange":"Label-module_orange__2AKhU"};
styleInject(css$y);

var Label = function Label(_ref) {
  var label = _ref.label,
      logo = _ref.logo,
      className = _ref.className,
      color = _ref.color;
  return React__default.createElement("div", {
    className: [s$y.labelContainer, className, s$y[color]].join(' ')
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
  logo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired
};

var css$z = ".Loader-module_loader__N9Oko {\n    border: 16px solid #32a0c5;\n    border-top: 16px solid #163457;\n    border-radius: 50%;\n    -webkit-animation: Loader-module_spin__MH2Fo 2s linear infinite;\n            animation: Loader-module_spin__MH2Fo 2s linear infinite;\n    -ms-flex-item-align: center;\n        align-self: center;\n    margin: 15px auto;\n}\n\n.Loader-module_large__9YkjD {\n    width: 120px;\n    height: 120px;\n    border-width: 16px;\n}\n\n.Loader-module_medium__TWZ7Q {\n    width: 60px;\n    height: 60px;\n    border-width: 8px;\n}\n\n.Loader-module_small__3uXVP {\n    width: 30px;\n    height: 30px;\n    border-width: 4px;\n}\n\n.Loader-module_xSmall__3N8aP {\n    width: 15px;\n    height: 15px;\n    border-width: 2px;\n}\n\n@-webkit-keyframes Loader-module_spin__MH2Fo {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes Loader-module_spin__MH2Fo {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n";
var s$z = {"loader":"Loader-module_loader__N9Oko","spin":"Loader-module_spin__MH2Fo","large":"Loader-module_large__9YkjD","medium":"Loader-module_medium__TWZ7Q","small":"Loader-module_small__3uXVP","xSmall":"Loader-module_xSmall__3N8aP"};
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
  size: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes.string,
  testid: PropTypes.string
};

var css$A = ".LoginForm-module_card__3_T4d {\n  width: 400px;\n}\n\n.LoginForm-module_contentCard__2LMaI {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding: 16px 32px;\n  padding: 16px 32px;\n  padding: 1rem 2rem;\n}\n\n.LoginForm-module_input__3Vyuc {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.LoginForm-module_button__2JEzi {\n  margin: 10px 0;\n}\n\n.LoginForm-module_error__2-jaK {\n  color: #ff5757;\n}\n\n.LoginForm-module_inputError__1QmRY {\n  border-color: #ff5757;\n}\n\n.LoginForm-module_forgottenPasswordLink__3N7WZ {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n";
var s$A = {"card":"LoginForm-module_card__3_T4d","contentCard":"LoginForm-module_contentCard__2LMaI","input":"LoginForm-module_input__3Vyuc","button":"LoginForm-module_button__2JEzi","error":"LoginForm-module_error__2-jaK","inputError":"LoginForm-module_inputError__1QmRY","forgottenPasswordLink":"LoginForm-module_forgottenPasswordLink__3N7WZ"};
styleInject(css$A);

var TextsType$4 = PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string,
  submitButton: PropTypes.string,
  onClickPasswordForgottenLabel: PropTypes.string
});
var DefaultTexts$4 = {
  email: 'Email',
  password: 'Mot de passe',
  submitButton: 'Se connecter',
  onClickPasswordForgottenLabel: 'je l\'ai oublié'
};

var LoginFormValuesType = PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string
});
var LoginFormErrorsType = PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string
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
  errorLogin: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  texts: TextsType$4,
  className: PropTypes.string,
  emailInputClassName: PropTypes.string,
  passwordInputClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
  fetching: PropTypes.bool,
  buttonTestid: PropTypes.string,
  RootComponent: PropTypes.func,
  SubmitButtonComponent: PropTypes.func,
  onClickPasswordForgotten: PropTypes.func,
  shouldDisplayEmailField: PropTypes.bool
};

var css$B = ".PaymentMethodCard-module_card__1P35E {\n  position: relative;\n}\n\n.PaymentMethodCard-module_cardContent__CnD6V {\n  padding: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.PaymentMethodCard-module_header__pGvBe {\n  position: absolute;\n  width: 100%;\n  top: 20px;\n  right: 20px;\n}\n\n.PaymentMethodCard-module_pendingDeletion__-WJj3 {\n  background-color: #eceff6;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 20px;\n  text-align: center;\n}\n\n.PaymentMethodCard-module_footer__2mmr8 {\n  display: block;\n}\n";
var s$B = {"card":"PaymentMethodCard-module_card__1P35E","cardContent":"PaymentMethodCard-module_cardContent__CnD6V","header":"PaymentMethodCard-module_header__pGvBe","pendingDeletion":"PaymentMethodCard-module_pendingDeletion__-WJj3","footer":"PaymentMethodCard-module_footer__2mmr8"};
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
var TextsType$5 = PropTypes.shape({
  update: PropTypes.string,
  remove: PropTypes.string,
  save: PropTypes.string,
  confirmDeletionTitle: PropTypes.string,
  confirmDeletionSentence: PropTypes.string,
  cancel: PropTypes.string,
  confirm: PropTypes.string,
  expireAt: PropTypes.string
});

var PaymentMethodType = PropTypes.shape({
  last4digits: PropTypes.string,
  brand: PropTypes.oneOf(['visa', 'mastercard', 'american', 'cb']),
  type: PropTypes.oneOf(['card', 'account', 'sepa']),
  expireAt: PropTypes.string
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
var s$C = {"content":"PaymentMethodCardContentRead-module_content__2127O","brandIcon":"PaymentMethodCardContentRead-module_brandIcon__3r5qJ"};
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
  return React__default.createElement(Fragment, null, paymentMethod.type === 'card' && React__default.createElement("img", {
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
var s$D = {"container":"PaymentmethodCardContentDelete-module_container__2q5zt","sentence":"PaymentmethodCardContentDelete-module_sentence__4dwCI","buttons":"PaymentmethodCardContentDelete-module_buttons__1lGiu"};
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
  onConfirmDeletion: PropTypes.func.isRequired,
  onCancelDeletion: PropTypes.func.isRequired
};

var PaymentMethodCardContent = function PaymentMethodCardContent(_ref) {
  var pendingDeletion = _ref.pendingDeletion,
      contentProps = _objectWithoutProperties(_ref, ["pendingDeletion"]);

  return pendingDeletion ? React__default.createElement(PaymentmethodCardContentDelete, contentProps) : React__default.createElement(PaymentMethodCardContentRead, contentProps);
};

PaymentMethodCardContent.propTypes = {
  paymentMethod: PaymentMethodType.isRequired,
  texts: TextsType$5.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  onConfirmDeletion: PropTypes.func.isRequired,
  onCancelDeletion: PropTypes.func.isRequired
};

var css$E = ".PaymentMethodCardFooter-module_container__iE-kv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.PaymentMethodCardFooter-module_checkIcon__xbtB2 {\n  color: #fefefe;\n  font-size: 22px;\n}\n";
var s$E = {"container":"PaymentMethodCardFooter-module_container__iE-kv","checkIcon":"PaymentMethodCardFooter-module_checkIcon__xbtB2"};
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
  className: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  texts: TextsType$5.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string
};

var css$F = ".PaymentMethodCardHeader-module_container__1NB8- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 22px;\n}\n\n.PaymentMethodCardHeader-module_icon__Rh3J2 {\n  -webkit-text-fill-color: #32a0c5;\n  fill: #32a0c5;\n}\n\n.PaymentMethodCardHeader-module_button__L01aa {\n  background: none;\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n";
var s$F = {"container":"PaymentMethodCardHeader-module_container__1NB8-","icon":"PaymentMethodCardHeader-module_icon__Rh3J2","button":"PaymentMethodCardHeader-module_button__L01aa"};
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
  onDelete: PropTypes.func.isRequired,
  texts: TextsType$5.isRequired,
  pendingDeletion: PropTypes.bool.isRequired,
  className: PropTypes.string
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
  deletable: PropTypes.bool,
  selected: PropTypes.bool,
  pendingDeletion: PropTypes.bool,
  texts: TextsType$5,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
  onCancelDeletion: PropTypes.func,
  onConfirmDeletion: PropTypes.func,
  idPrefix: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  FooterComponent: PropTypes.func,
  contentClassName: PropTypes.string,
  testid: PropTypes.string
};

var css$G = ".PhoneInput-module_phoneInput__28kFN {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.PhoneInput-module_phoneInputCountryCode__1qz3Z {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 50px;\n          flex: 1 0 50px;\n}\n\n.PhoneInput-module_phoneInput__28kFN input {\n  margin-left: 10px;\n}\n\n.PhoneInput-module_selectImage__2afak {\n  margin-right: 10px;\n  max-height: 24px;\n  max-width: 24px;\n}\n\n";
var s$G = {"phoneInput":"PhoneInput-module_phoneInput__28kFN","phoneInputCountryCode":"PhoneInput-module_phoneInputCountryCode__1qz3Z","selectImage":"PhoneInput-module_selectImage__2afak"};
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
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
  left: PropTypes.bool,
  className: PropTypes.string,
  countries: PropTypes.shape(CountryPropType),
  withFlag: PropTypes.bool,
  inputClassName: PropTypes.string
};

var css$H = ".PricingSummaryOption-module_option__1G-X7 {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #163457;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.PricingSummaryOption-module_label__goVjq {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.PricingSummaryOption-module_label__goVjq i {\n  font-size: 0.9em;\n  margin-left: 10px;\n}\n\n.PricingSummaryOption-module_label__goVjq i:before {\n  color: #163457;\n}\n\n.PricingSummaryOption-module_price__2ZK97 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-weight: 700;\n}\n\n.PricingSummaryOption-module_currency-after__3ttKX {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.PricingSummaryOption-module_currency-before__1lVgh {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n";
var s$H = {"option":"PricingSummaryOption-module_option__1G-X7","label":"PricingSummaryOption-module_label__goVjq","price":"PricingSummaryOption-module_price__2ZK97","currency-after":"PricingSummaryOption-module_currency-after__3ttKX","currency-before":"PricingSummaryOption-module_currency-before__1lVgh"};
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
  currency: PropTypes.string.isRequired,
  currencyPosition: PropTypes.oneOf(['before', 'after']),
  option: PricingSummaryOptionType.isRequired
};

var css$I = ".PricingSummary-module_pricingSummary__2eJwY {\n  width: 250px;\n}\n\n.PricingSummary-module_total__2vek1 {\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 20px;\n}\n\n.PricingSummary-module_totalLabel__2o3Rh {\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.PricingSummary-module_totalPrice__1_-UG {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  font-size: 40px;\n  line-height: 1;\n}\n\n.PricingSummary-module_currency-after__27MYY {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.PricingSummary-module_currency-before__345FN {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse;\n}\n\n.PricingSummary-module_add__2494l {\n  border: 0;\n  color: rgb(206, 206, 206);\n  padding: 0;\n  margin: 0;\n  background: transparent;\n}\n\n.PricingSummary-module_add__2494l span {\n  margin-left: 5px;\n  text-decoration: underline;\n}\n";
var s$I = {"pricingSummary":"PricingSummary-module_pricingSummary__2eJwY","total":"PricingSummary-module_total__2vek1","totalLabel":"PricingSummary-module_totalLabel__2o3Rh","totalPrice":"PricingSummary-module_totalPrice__1_-UG","currency-after":"PricingSummary-module_currency-after__27MYY","currency-before":"PricingSummary-module_currency-before__345FN","add":"PricingSummary-module_add__2494l"};
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
  currency: PropTypes.string.isRequired,
  currencyPosition: PropTypes.oneOf(['before', 'after']),
  options: PropTypes.arrayOf(PricingSummaryOptionType).isRequired,
  texts: PricingSummaryTextsType,
  onAddClick: PropTypes.func,
  className: PropTypes.string
};

var ReferralCardTextsType = PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string
});
var defaultTexts$3 = {
  title: 'Aidez Ector à conquérir le monde',
  description: 'Devenez parrain Ector et faites profiter à votre filleul de 10€ offert lors de sa première réservation'
};

var css$J = ".ReferralCard-module_referralCard__2OSJ1 {\n  background-color: #eceff6;\n  border-radius: 8px;\n  color: #163457;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 320px;\n  padding: 20px;\n}\n\n.ReferralCard-module_referralCard__2OSJ1 i {\n  margin-right: 20px;\n}\n\n.ReferralCard-module_referralCard__2OSJ1 p {\n  margin: 0;\n}\n";
var s$J = {"referralCard":"ReferralCard-module_referralCard__2OSJ1"};
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
  className: PropTypes.string
};

var RideSummaryTextType = PropTypes.shape({
  title: PropTypes.string,
  date: PropTypes.string,
  spot: PropTypes.string,
  travelingNumber: PropTypes.string
});
var defaultTexts$4 = {
  title: 'Aller',
  date: 'Mer. 26 septembre 2018 à 12:00',
  spot: 'Roissy CDG T1',
  travelingNumber: 'N° Vol/Train: Non Renseigné'
};

var css$K = ".RideSummary-module_rideSummary__2oiET {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.RideSummary-module_rideSummaryTitle__1uusE {\n  color: #32a0c5;\n  font-size: 22px;\n  margin: 0;\n}\n\n.RideSummary-module_rideSummaryText__1cZNU {\n  margin: 0;\n  color: #163457;\n}\n";
var s$K = {"rideSummary":"RideSummary-module_rideSummary__2oiET","rideSummaryTitle":"RideSummary-module_rideSummaryTitle__1uusE","rideSummaryText":"RideSummary-module_rideSummaryText__1cZNU"};
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
  className: PropTypes.string
};

var SelectValueType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string,
  image: PropTypes.string
});

var css$L = ".Select-module_select__3oApo {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 3px;\n  border: 2px solid #d5d6d7;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #163457;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 40px;\n  height: 40px;\n  height: 2.5rem;\n  margin-top: 4px;\n  margin-top: 4px;\n  margin-top: 0.25rem;\n  padding: 8px;\n  padding: 8px;\n  padding: 0.5rem;\n  position: relative;\n}\n\n.Select-module_select__3oApo:after {\n  content: '\\E954';\n  font-family: 'icomoon';\n  font-size: 80%;\n  margin-left: 10px;\n}\n\n.Select-module_select__3oApo select {\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.Select-module_select__3oApo select:disabled {\n  cursor: not-allowed;\n}\n\n.Select-module_disabled__1fHPm {\n  background-color: #eceff6;\n}\n";
var s$L = {"select":"Select-module_select__3oApo","disabled":"Select-module_disabled__1fHPm"};
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
  options: PropTypes.arrayOf(SelectValueType).isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  renderOption: PropTypes.func,
  disabled: PropTypes.bool
};

var css$M = ".ServiceCard-module_card__2WAwR {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    background-color: #eceff6;\n    border-radius: 8px;\n    padding: 5px;\n    margin-top: 25px;\n    position: relative;\n    width: 250px;\n    height: 260px;\n}\n\n.ServiceCard-module_optionCardContainerSelected__1EDYO {\n    background-color: #ffcd02;\n}\n\n.ServiceCard-module_labelContainer__14NKR {\n    position: absolute;\n    top: -10px;\n    right: 8%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n@media (max-width: 1232px) {\n    .ServiceCard-module_card__2WAwR {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n        height: auto;\n        margin-right: 0;\n        width: 100%;\n    }\n}\n";
var s$M = {"card":"ServiceCard-module_card__2WAwR","optionCardContainerSelected":"ServiceCard-module_optionCardContainerSelected__1EDYO","labelContainer":"ServiceCard-module_labelContainer__14NKR"};
styleInject(css$M);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
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
var s$N = {"cardContent":"ServiceCardBody-module_cardContent__1u4QW","title":"ServiceCardBody-module_title__18Brj","description":"ServiceCardBody-module_description__3F2b6","icon":"ServiceCardBody-module_icon__3pkKY","knowMore":"ServiceCardBody-module_knowMore__3FUFJ","punctuationKnowMore":"ServiceCardBody-module_punctuationKnowMore__1aKtN"};
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
  image: PropTypes.node,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contentClassName: PropTypes.string,
  openShowMore: PropTypes.func,
  knowMoreLabel: PropTypes.string
};

var css$O = ".ServiceCardFooter-module_footerContainer__3xZao {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 20px 10px;\n}\n\n.ServiceCardFooter-module_price__1o6fm {\n    color: #163457;\n    font-size: 35px;\n    font-weight: 500;\n}\n\n.ServiceCardFooter-module_deleteButton__W6dqf {\n    background: none;\n    border: 0;\n    color: #32a0c5;\n    padding: 0;\n    text-decoration: underline;\n    font-style: italic;\n    font-weight: 300;\n    text-align: end;\n}\n\n@media (max-width: 1232px) {\n    .ServiceCardFooter-module_footerContainer__3xZao {\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-flex: 3;\n            -ms-flex: 3;\n                flex: 3;\n        height: auto;\n        height: initial;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        padding: 10px;\n    }\n\n    .ServiceCardFooter-module_price__1o6fm {\n        font-size: 22px;\n        line-height: 1;\n    }\n\n    .ServiceCardFooter-module_price__1o6fm small {\n        font-size: 70%;\n    }\n}\n";
var s$O = {"footerContainer":"ServiceCardFooter-module_footerContainer__3xZao","price":"ServiceCardFooter-module_price__1o6fm","deleteButton":"ServiceCardFooter-module_deleteButton__W6dqf"};
styleInject(css$O);

var formatPrice = function formatPrice(price, showDecimals) {
  var countDecimals;

  if (typeof showDecimals === 'undefined') {
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
      className = _ref.className;
  var priceSplited = "".concat(formatPrice(price, showDecimals)).split('.');
  return priceSplited[1] ? React__default.createElement("span", {
    className: className
  }, priceSplited[0], React__default.createElement("small", null, ".".concat(priceSplited[1]).concat(currency))) : React__default.createElement("span", {
    className: className
  }, "".concat(priceSplited[0]).concat(currency));
};

HtmlPrice.defaultProps = {
  currency: '€',
  className: ''
};
HtmlPrice.propTypes = {
  price: PropTypes.string.isRequired,
  showDecimals: PropTypes.bool.isRequired,
  currency: PropTypes.string,
  className: PropTypes.string
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
  price: PropTypes.number.isRequired,
  actionFooter: PropTypes.func.isRequired,
  buttonLabelFooter: PropTypes.string.isRequired,
  isSubscribed: PropTypes.bool.isRequired,
  testid: PropTypes.string,
  showButton: PropTypes.bool
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
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  actionFooter: PropTypes.func.isRequired,
  openShowMore: PropTypes.func,
  isSubscribed: PropTypes.bool,
  buttonLabelFooter: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  labelLogo: PropTypes.string,
  labelColor: PropTypes.string,
  id: PropTypes.string,
  showButton: PropTypes.bool,
  knowMoreLabel: PropTypes.string
};

var css$P = ".Subtitle-module_subtitle__3qud- {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 30px;\n}\n\n.Subtitle-module_subtitle__3qud- h2 {\n  color: #163457;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1;\n  margin: 0 0 10px;\n}\n\n.Subtitle-module_subtitle__3qud- hr {\n  border: 0;\n  border-top: 2px dotted #9eb3c2;\n  margin: 0;\n  width: 50px;\n}\n";
var s$P = {"subtitle":"Subtitle-module_subtitle__3qud-"};
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
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

var css$Q = ".Title-module_title__gpPet {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 30px;\n}\n\n.Title-module_title__gpPet .Title-module_element__1EYDR {\n  color: #163457;\n  font-size: 40px;\n  font-weight: 500;\n  line-height: 1;\n  margin: 0 0 10px;\n}\n\n.Title-module_title__gpPet .Title-module_horizontalRule__1wwO9 {\n  border: 0;\n  border-top: 2px solid #32a0c5;\n  margin: 0;\n  width: 50px;\n}\n\n@media (max-width: 480px) {\n  .Title-module_title__gpPet .Title-module_element__1EYDR {\n    font-size: 22px;\n  }\n}\n";
var s$Q = {"title":"Title-module_title__gpPet","element":"Title-module_element__1EYDR","horizontalRule":"Title-module_horizontalRule__1wwO9"};
styleInject(css$Q);

var Title = function Title(_ref) {
  var label = _ref.label,
      className = _ref.className,
      htmlElement = _ref.htmlElement,
      testid = _ref.testid;
  return React__default.createElement("div", {
    className: "".concat(s$Q.title, " ").concat(className),
    testid: testid
  }, React__default.createElement(htmlElement, {
    className: s$Q.element
  }, label), React__default.createElement("hr", {
    className: s$Q.horizontalRule
  }));
};

Title.defaultProps = {
  className: '',
  htmlElement: 'h1',
  testid: ''
};
Title.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlElement: PropTypes.string,
  testid: PropTypes.string
};

var css$R = "/**\n* This element has to be wrapped in a .steps div to increment the counter\n*/\n\n.TitleStep-module_steps__1Ryhp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  counter-reset: steps;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0:before,\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0 + .TitleStep-module_step_button__1xXOY:before,\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0 + .TitleStep-module_step_button__1xXOY + .TitleStep-module_step_button__1xXOY:before {\n  content: counter(steps);\n}\n\n.TitleStep-module_step_button__1xXOY {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #9eb3c2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 17.6px;\n  font-size: 17.6px;\n  font-size: 1.1rem;\n  margin-right: 48px;\n  margin-right: 48px;\n  margin-right: 3rem;\n  position: relative;\n  background-color: transparent;\n  border: 0;\n  counter-increment: steps;\n  cursor: pointer;\n  font-weight: 300;\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n  opacity: 1\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0 {\n  color: #ffcd02;\n  cursor: default;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0:before {\n  background-color: white;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_active__3zKP0:after {\n  border-right: 2px solid white;\n  content: '';\n  height: 35px;\n  left: 19px;\n  position: absolute;\n  top: 26px;\n}\n\n.TitleStep-module_step_button__1xXOY.TitleStep-module_done__1vIiB:before {\n  content: '\\2713';\n}\n\n.TitleStep-module_step_button__1xXOY:before {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #9eb3c2;\n  border-radius: 50%;\n  color: #163457;\n  content: '7';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 13px;\n  font-weight: bold;\n  height: 25px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-right: 10px;\n  width: 25px;\n}\n\n.TitleStep-module_step_button__1xXOY:before, .TitleStep-module_step_button__1xXOY:after {\n  -webkit-transition: all 0.3s ease-in-out;\n  transition: all 0.3s ease-in-out;\n}\n\n.TitleStep-module_step_button__1xXOY:hover {\n  color: white;\n}\n\n.TitleStep-module_step_button__1xXOY:hover:before, .TitleStep-module_step_button__1xXOY:hover:after {\n  background-color: white;\n}\n\n.TitleStep-module_step_button__1xXOY:hover:active {\n  -webkit-transition: all 0s ease-in-out;\n  transition: all 0s ease-in-out;\n  opacity: 0.6;\n}\n";
var s$R = {"steps":"TitleStep-module_steps__1Ryhp","step_button":"TitleStep-module_step_button__1xXOY","active":"TitleStep-module_active__3zKP0","done":"TitleStep-module_done__1vIiB"};
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
  Active: PropTypes.bool.isRequired,
  children: PropTypes.node,
  Done: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
};

var css$S = ".Tooltip-module_tooltipContainer__15s8H {\n    font-size: 2em;\n    text-align: center;\n    position: relative\n}\n\n.Tooltip-module_tooltipContainer__15s8H:hover>.Tooltip-module_tooltipText__1buoM {\n    visibility: visible;\n}\n\n.Tooltip-module_tooltipContainer__15s8H > i {\n    font-size: 16px;\n}\n\n.Tooltip-module_tooltipContainer__15s8H > i:before {\n    color: #163457 !important;\n}\n\n.Tooltip-module_tooltipText__1buoM {\n    visibility: hidden;\n    display: block;\n    position: absolute;\n    z-index: 1;\n    padding: 5px;\n    border-radius: 8px;\n    text-align: center;\n    background-color: #163457;\n    color: #fefefe;\n    font-size: 16px;\n}\n\n.Tooltip-module_right__1nw9g {\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    left: 24px;\n    top: 12px;\n}\n\n.Tooltip-module_left__3nypM {\n    -webkit-transform: translateY(-50%) translateX(-100%);\n            transform: translateY(-50%) translateX(-100%);\n    top: 12px;\n    left: -8px;\n}\n\n.Tooltip-module_bottom__2SGDR {\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    left: 8px;\n    top: 30px;\n}\n\n.Tooltip-module_top__239MH {\n    -webkit-transform: translateX(-50%) translateY(-100%);\n            transform: translateX(-50%) translateY(-100%);\n    left: 8px;\n    top: -8px;\n}\n\n.Tooltip-module_xSmall__p7rPd {\n    width: 100px;\n}\n\n.Tooltip-module_small__1IS1m {\n    width: 200px;\n}\n\n.Tooltip-module_medium__hRcmQ {\n    width: 400px;\n}\n\n.Tooltip-module_large__paGda {\n    width: 600px;\n\n}\n";
var s$S = {"tooltipContainer":"Tooltip-module_tooltipContainer__15s8H","tooltipText":"Tooltip-module_tooltipText__1buoM","right":"Tooltip-module_right__1nw9g","left":"Tooltip-module_left__3nypM","bottom":"Tooltip-module_bottom__2SGDR","top":"Tooltip-module_top__239MH","xSmall":"Tooltip-module_xSmall__p7rPd","small":"Tooltip-module_small__1IS1m","medium":"Tooltip-module_medium__hRcmQ","large":"Tooltip-module_large__paGda"};
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
  iconClassName: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
  position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  tooltipSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  IconComponent: PropTypes.func
};

var css$T = ".RewardCard-module_card__1Znmy {\n  display: block;\n  padding: 0;\n  max-width: 272px;\n  max-width: 272px;\n  max-width: 17rem;\n  max-height: 100%;\n  border-radius: 1rem;\n  background-color: #fefefe;\n  -webkit-box-shadow: 0px 0px 38px -2px rgba(0, 0, 0, .15);\n          box-shadow: 0px 0px 38px -2px rgba(0, 0, 0, .15);\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n}\n\n.RewardCard-module_card__1Znmy:hover{\n  -webkit-transform: scale(1.09);\n          transform: scale(1.09);\n}\n\n.RewardCard-module_scaledCard__1-sNY {\n  -webkit-transform: scale(1.09);\n          transform: scale(1.09);\n}\n\n.RewardCard-module_content__2QTte {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 20px;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.RewardCard-module_footer__UGXDV {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 5px;\n}\n\n.RewardCard-module_footerButton__319wl {\n  color: #ffcd02;\n  border-color: #ffcd02;\n}\n";
var s$T = {"card":"RewardCard-module_card__1Znmy","scaledCard":"RewardCard-module_scaledCard__1-sNY","content":"RewardCard-module_content__2QTte","footer":"RewardCard-module_footer__UGXDV","footerButton":"RewardCard-module_footerButton__319wl"};
styleInject(css$T);

var css$U = ".RewardCardHeader-module_headerContainer__3wgBg {\n  border-radius: 1rem;\n  background-color: #fefefe;\n}\n\n.RewardCardHeader-module_image__3zQb9 {\n  width: 100%;\n}\n\n.RewardCardHeader-module_desktopImage__1v4Vb {\n  display: block;\n}\n\n.RewardCardHeader-module_mobileImage__2FL62 {\n  display: none;\n}\n\n@media (max-width: 480px) {\n  .RewardCardHeader-module_desktopImage__1v4Vb {\n    display: none;\n  }\n\n  .RewardCardHeader-module_mobileImage__2FL62 {\n    display: block;\n  }\n}\n";
var s$U = {"headerContainer":"RewardCardHeader-module_headerContainer__3wgBg","image":"RewardCardHeader-module_image__3zQb9","desktopImage":"RewardCardHeader-module_desktopImage__1v4Vb","mobileImage":"RewardCardHeader-module_mobileImage__2FL62"};
styleInject(css$U);

var RewardCardHeader = function RewardCardHeader(_ref) {
  var headerImage = _ref.headerImage,
      mobileHeaderImage = _ref.mobileHeaderImage;
  return React__default.createElement("div", {
    className: s$U.headerContainer
  }, React__default.createElement("img", {
    src: headerImage,
    className: [s$U.image, s$U.desktopImage].join(' '),
    alt: "Reward"
  }), React__default.createElement("img", {
    src: mobileHeaderImage,
    className: [s$U.image, s$U.mobileImage].join(' '),
    alt: "Reward"
  }));
};

RewardCardHeader.propTypes = {
  headerImage: PropTypes.string.isRequired,
  mobileHeaderImage: PropTypes.string
};
RewardCardHeader.defaultProps = {
  mobileHeaderImage: ''
};

var css$V = ".RewardCardContent-module_contentContainer__2AlWV {\n  margin: 0 0 5px;\n  text-align: center;\n}\n\n.RewardCardContent-module_rewardValue__A333b {\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.RewardCardContent-module_rewardText__3565E {\n  display: inline-block;\n  margin-top: 10px;\n  line-height: 17px;\n}\n\n.RewardCardContent-module_tooltip__1BGpd {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n.RewardCardContent-module_rewardLoginForm__3y4NP {\n  width: 100%;\n  text-align: left;\n}\n\n.RewardCardContent-module_submitButton__2RS1K {\n  text-align: center;\n  padding-bottom: 5px;\n}\n";
var s$V = {"contentContainer":"RewardCardContent-module_contentContainer__2AlWV","rewardValue":"RewardCardContent-module_rewardValue__A333b","rewardText":"RewardCardContent-module_rewardText__3565E","tooltip":"RewardCardContent-module_tooltip__1BGpd","rewardLoginForm":"RewardCardContent-module_rewardLoginForm__3y4NP","submitButton":"RewardCardContent-module_submitButton__2RS1K"};
styleInject(css$V);

var RewardCardTextTypes = PropTypes.shape({
  rewardText: PropTypes.string,
  footerButtonText: PropTypes.string,
  buttonTextLogin: PropTypes.string,
  loginText: PropTypes.string,
  rewardTooltip: PropTypes.string,
  updateExternalCard: PropTypes.string
});

var RewardCardContent = function RewardCardContent(_ref) {
  var rewardValue = _ref.rewardValue,
      iconClassName = _ref.iconClassName,
      texts = _ref.texts,
      isExternalCardUpdatable = _ref.isExternalCardUpdatable,
      onClickEditExternalCard = _ref.onClickEditExternalCard,
      editExternalCardClassName = _ref.editExternalCardClassName;
  return React__default.createElement("div", {
    className: s$V.contentContainer
  }, React__default.createElement("span", {
    className: s$V.rewardValue
  }, rewardValue), React__default.createElement("span", {
    className: s$V.rewardText
  }, texts.rewardText, isExternalCardUpdatable && texts.updateExternalCard && onClickEditExternalCard && React__default.createElement("button", {
    className: editExternalCardClassName,
    onClick: onClickEditExternalCard
  }, texts.updateExternalCard), texts.rewardTooltip && React__default.createElement(Tooltip, {
    className: s$V.tooltip,
    text: texts.rewardTooltip,
    iconClassName: iconClassName
  })));
};

RewardCardContent.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  rewardValue: PropTypes.string.isRequired,
  onClickEditExternalCard: PropTypes.func.isRequired,
  iconClassName: PropTypes.string,
  isExternalCardUpdatable: PropTypes.bool,
  editExternalCardClassName: PropTypes.string
};
RewardCardContent.defaultProps = {
  iconClassName: 'icon-ec-info',
  isExternalCardUpdatable: false,
  editExternalCardClassName: ''
};

var css$W = ".RewardCardFooter-module_selected__2ROF6 {\n  border-radius: 100%;\n  color: #fefefe;\n  background-color: #ffcd02;\n  width: 27px;\n  height: 27px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n";
var s$W = {"selected":"RewardCardFooter-module_selected__2ROF6"};
styleInject(css$W);

var css$X = ".RoundedButton-module_buttonContainer__1mUSj {\n  border: 2px solid;\n  border-radius: 15px;\n  padding: 5px 20px;\n  font-weight: bold;\n}\n\n.RoundedButton-module_fetching__1KXE5 {\n  background: none;\n  background-color: transparent !important;\n  color: transparent !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  overflow: hidden;\n  position: relative\n}\n\n.RoundedButton-module_fetching__1KXE5:hover {\n  background-color: transparent;\n}\n\n.RoundedButton-module_fetching__1KXE5:before {\n  background-color: #ffe8ad;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin-top: -2px;\n}\n\n.RoundedButton-module_fetching__1KXE5:after {\n  -webkit-animation: RoundedButton-module_fetching__1KXE5 3s linear infinite;\n          animation: RoundedButton-module_fetching__1KXE5 3s linear infinite;\n  background-color: #ffb201;\n  border-radius: 2px;\n  content: '';\n  height: 4px;\n  position: absolute;\n  top: 50%;\n  margin-top: -2px;\n  left: 0;\n  width: 20%;\n}\n\n@-webkit-keyframes RoundedButton-module_fetching__1KXE5 {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n\n@keyframes RoundedButton-module_fetching__1KXE5 {\n  from {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n  }\n\n  to {\n    -webkit-transform: translateX(500%);\n            transform: translateX(500%);\n  }\n}\n";
var s$X = {"buttonContainer":"RoundedButton-module_buttonContainer__1mUSj","fetching":"RoundedButton-module_fetching__1KXE5"};
styleInject(css$X);

var RoundedButton = function RoundedButton(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      testid = _ref.testid,
      className = _ref.className,
      fetching = _ref.fetching;
  return React__default.createElement("button", {
    onClick: onClick,
    className: [s$X.buttonContainer, className, fetching ? s$X.fetching : undefined].join(' '),
    textid: testid
  }, text.toUpperCase());
};

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testid: PropTypes.string,
  className: PropTypes.string,
  fetching: PropTypes.bool
};
RoundedButton.defaultProps = {
  testid: '',
  className: '',
  fetching: false
};

var RewardCardFooter = function RewardCardFooter(_ref) {
  var onClick = _ref.onClick,
      prefixTestid = _ref.prefixTestid,
      buttonClassName = _ref.buttonClassName,
      isSelected = _ref.isSelected,
      isConnected = _ref.isConnected,
      selectedIcon = _ref.selectedIcon,
      texts = _ref.texts,
      hasExternalCard = _ref.hasExternalCard,
      isExternalCardUpdatable = _ref.isExternalCardUpdatable,
      fetching = _ref.fetching;
  return React__default.createElement(Fragment, null, isConnected && isSelected && hasExternalCard && isExternalCardUpdatable ? React__default.createElement("i", {
    className: "icon-".concat(selectedIcon, " ").concat(s$W.selected)
  }) : React__default.createElement(RoundedButton, {
    onClick: onClick,
    text: texts.footerButtonText,
    testid: "".concat(prefixTestid, "RewardCardFooterButton"),
    className: !fetching ? buttonClassName : undefined,
    fetching: fetching
  }));
};

RewardCardFooter.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  onClick: PropTypes.func,
  prefixTestid: PropTypes.string,
  buttonClassName: PropTypes.string,
  isSelected: PropTypes.bool,
  isConnected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  hasExternalCard: PropTypes.bool,
  isExternalCardUpdatable: PropTypes.bool,
  fetching: PropTypes.bool
};
RewardCardFooter.defaultProps = {
  prefixTestid: '',
  buttonClassName: '',
  onClick: function onClick() {},
  isSelected: false,
  isConnected: false,
  selectedIcon: "\u2713",
  hasExternalCard: true,
  isExternalCardUpdatable: true,
  fetching: false
};

var RewardCard = function RewardCard(_ref) {
  var headerImage = _ref.headerImage,
      mobileHeaderImage = _ref.mobileHeaderImage,
      rewardValue = _ref.rewardValue,
      rewardTooltipIcon = _ref.rewardTooltipIcon,
      footerOnClick = _ref.footerOnClick,
      prefixTestId = _ref.prefixTestId,
      footerButtonClassName = _ref.footerButtonClassName,
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
      cardProps = _objectWithoutProperties(_ref, ["headerImage", "mobileHeaderImage", "rewardValue", "rewardTooltipIcon", "footerOnClick", "prefixTestId", "footerButtonClassName", "isSelected", "selectedIcon", "isConnected", "texts", "hasExternalCard", "children", "isExternalCardUpdatable", "onClickEditExternalCard", "editExternalCardClassName", "fetching", "className"]);

  var header = React__default.createElement(RewardCardHeader, {
    headerImage: headerImage,
    mobileHeaderImage: mobileHeaderImage
  });
  var footer = React__default.createElement(RewardCardFooter, {
    onClick: footerOnClick,
    buttonClassName: footerButtonClassName,
    prefixTestid: prefixTestId,
    isSelected: isSelected,
    isConnected: isConnected,
    selectedIcon: selectedIcon,
    texts: texts,
    hasExternalCard: hasExternalCard,
    isExternalCardUpdatable: isExternalCardUpdatable,
    fetching: fetching
  });
  return React__default.createElement(Card, _extends({}, cardProps, {
    className: [s$T.card, isSelected ? s$T.scaledCard : null, className].join(' '),
    HeaderChildren: header,
    FooterChildren: !isConnected && isSelected ? null : footer,
    footerClassName: s$T.footer,
    contentClassName: s$T.content
  }), children || React__default.createElement(RewardCardContent, {
    texts: texts,
    rewardValue: rewardValue,
    isConnected: isConnected,
    isSelected: isSelected,
    isExternalCardUpdatable: isExternalCardUpdatable,
    onClickEditExternalCard: onClickEditExternalCard,
    editExternalCardClassName: editExternalCardClassName
  }));
};

RewardCard.propTypes = {
  texts: RewardCardTextTypes.isRequired,
  headerImage: PropTypes.string.isRequired,
  mobileHeaderImage: PropTypes.string,
  rewardValue: PropTypes.string.isRequired,
  footerOnClick: PropTypes.func.isRequired,
  onClickEditExternalCard: PropTypes.func,
  children: PropTypes.node,
  prefixTestId: PropTypes.string,
  footerButtonClassName: PropTypes.string,
  rewardTooltipIcon: PropTypes.string,
  isSelected: PropTypes.bool,
  selectedIcon: PropTypes.string,
  isConnected: PropTypes.bool,
  hasExternalCard: PropTypes.bool,
  isExternalCardUpdatable: PropTypes.bool,
  fetching: PropTypes.bool,
  editExternalCardClassName: PropTypes.string,
  className: PropTypes.string
};
RewardCard.defaultProps = {
  mobileHeaderImage: '',
  prefixTestId: '',
  footerButtonClassName: '',
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
  onClickEditExternalCard: undefined
};

var css$Y = ".AddItemCard-module_addItemButton__3S4yl {\n  background-color: #eceff6;\n  padding: 5px;\n  border-radius: 8px;\n  margin-top: 25px;\n  margin-right: 25px;\n  position: relative\n}\n\n.AddItemCard-module_addItemButton__3S4yl:hover {\n  background-color: #ffcd02;\n}\n\n.AddItemCard-module_forPaymentMethod__pm0VB {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 185px;\n          flex: 0 0 185px;\n  border-radius: 8px;\n  width: 185px;\n}\n\n.AddItemCard-module_addItemButtonContent__16LVO {\n  background-color: #fefefe;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 16px !important;\n  padding: 16px !important;\n  padding: 1rem !important;\n}\n\n.AddItemCard-module_addItemButtonPlus__2wFvd {\n  color: #eceff6;\n  font-size: 80px;\n  font-weight: 700;\n  line-height: 0.9;\n  text-align: center\n}\n\n.AddItemCard-module_addItemButtonPlus__2wFvd.AddItemCard-module_smallButtonPlus__3q3hi {\n  font-size: 59px;\n  margin-bottom: 15px;\n}\n\n.AddItemCard-module_addItemButtonLink__2TXY8 {\n  justify-self: flex-end;\n  margin-bottom: 10px;\n}\n\n.AddItemCard-module_text__23fiP {\n  white-space: nowrap;\n}\n\n.AddItemCard-module_linkCenter__1V6Ss {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n\n@media (max-width: 480px) {\n  .AddItemCard-module_addItemButton__3S4yl {\n    margin-right: 0;\n  }\n\n  .AddItemCard-module_addItemButtonPlus__2wFvd {\n    font-size: 70px;\n  }\n}\n";
var s$Y = {"addItemButton":"AddItemCard-module_addItemButton__3S4yl","forPaymentMethod":"AddItemCard-module_forPaymentMethod__pm0VB","addItemButtonContent":"AddItemCard-module_addItemButtonContent__16LVO","addItemButtonPlus":"AddItemCard-module_addItemButtonPlus__2wFvd","smallButtonPlus":"AddItemCard-module_smallButtonPlus__3q3hi","addItemButtonLink":"AddItemCard-module_addItemButtonLink__2TXY8","text":"AddItemCard-module_text__23fiP","linkCenter":"AddItemCard-module_linkCenter__1V6Ss"};
styleInject(css$Y);

var AddItemCardFooter = function AddItemCardFooter(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      testid = _ref.testid,
      className = _ref.className;
  var linkClass = [s$Y.addItemButtonLink, s$Y.linkCenter];
  return React__default.createElement(LinkUnderlined, {
    testid: testid,
    className: [className, linkClass].join(' '),
    onClick: onClick,
    type: "button"
  }, React__default.createElement("span", null, label));
};

AddItemCardFooter.propTypes = {
  label: PropTypes.string,
  onClick: function onClick() {
    return null;
  },
  testid: PropTypes.string,
  className: PropTypes.string
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
    className: [s$Y.addItemButtonPlus, s$Y.smallButtonPlus, className].join(' ')
  }, isPending ? React__default.createElement(Loader, {
    size: loaderSize
  }) : '+');
};

AddItemCardButtonPlus.propTypes = {
  isPending: PropTypes.bool,
  onClick: function onClick() {
    return null;
  },
  loaderSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  className: PropTypes.string
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
  var cardClassName = "\n    ".concat(s$Y.addItemButtonContent, "\n    ").concat(isPaymentMethod ? s$Y.forPaymentMethod : '', "\n  ");
  return React__default.createElement(Card, _extends({}, cardProps, {
    footerChildren: linkUnderlined,
    contentClassName: cardClassName
  }), children !== null ? children : null, children === null && buttonPlus, children === null && linkUnderlined);
};

AddItemCard.propTypes = {
  label: PropTypes.string,
  isPending: PropTypes.bool,
  onClick: function onClick() {
    return null;
  },
  children: PropTypes.node,
  testid: PropTypes.string,
  loaderSize: PropTypes.oneOf(['xSmall', 'small', 'medium', 'large']),
  buttonClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  isPaymentMethod: PropTypes.bool
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

var css$Z = ".RegistrationForm-module_columns__2mI8R {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.RegistrationForm-module_columns__2mI8R > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-spacing: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.RegistrationForm-module_columns__2mI8R > div> *  {\n  height: 50px;\n}\n\n.RegistrationForm-module_leftColumn__xhQap {\n  margin-right: 10px;\n}\n\n.RegistrationForm-module_columns__2mI8R:nth-child(2) {\n  margin-left: 20px;\n}\n\n.RegistrationForm-module_flex__mWQse {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.RegistrationForm-module_leftRadio__2Iq2n {\n  margin-right: 10px;\n}\n\n.RegistrationForm-module_inputLabel__3IYO_ {\n  margin-top: 40px;\n}\n\n.RegistrationForm-module_titleRadio__PjgBi {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.RegistrationForm-module_genderPicker__2I3dC {\n  margin-top: 10px;\n}\n\n.RegistrationForm-module_error__KWGdI {\n  text-align: left;\n  color: #ff5757;\n}\n\n.RegistrationForm-module_footerLabel__32y4D {\n  font-style: italic;\n  font-size: 11px;\n}\n\n.RegistrationForm-module_card__3j0bC {}\n\n.RegistrationForm-module_contentCard__rslWZ {}\n\n.RegistrationForm-module_emailInputLabel__1t3GN {}\n\n@media (max-width: 480px) {\n  .RegistrationForm-module_card__3j0bC {\n    background: transparent;\n    padding: 0;\n  }\n  .RegistrationForm-module_contentCard__rslWZ {\n    padding: 0;\n  }\n  .RegistrationForm-module_columns__2mI8R {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .RegistrationForm-module_columns__2mI8R > div > * {\n    height: auto;\n  }\n  .RegistrationForm-module_leftColumn__xhQap {\n    margin: 0 0 10px;\n  }\n  .RegistrationForm-module_inputLabel__3IYO_ {\n    margin-top: 10px;\n  }\n  .RegistrationForm-module_emailInputLabel__1t3GN {\n    display: none;\n  }\n}\n";
var s$Z = {"-webkit-columns":"RegistrationForm-module_columns__2mI8R","columns":"RegistrationForm-module_columns__2mI8R","leftColumn":"RegistrationForm-module_leftColumn__xhQap","-webkit-box-flex":"RegistrationForm-module_flex__mWQse","-ms-flex":"RegistrationForm-module_flex__mWQse","flex":"RegistrationForm-module_flex__mWQse","leftRadio":"RegistrationForm-module_leftRadio__2Iq2n","inputLabel":"RegistrationForm-module_inputLabel__3IYO_","titleRadio":"RegistrationForm-module_titleRadio__PjgBi","genderPicker":"RegistrationForm-module_genderPicker__2I3dC","error":"RegistrationForm-module_error__KWGdI","footerLabel":"RegistrationForm-module_footerLabel__32y4D","card":"RegistrationForm-module_card__3j0bC","contentCard":"RegistrationForm-module_contentCard__rslWZ","emailInputLabel":"RegistrationForm-module_emailInputLabel__1t3GN"};
styleInject(css$Z);

var RegistrationFormTextTypes = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string
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
var ValuesType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string
});
var ErrorsType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  postalCode: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  title: PropTypes.string
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
        className: s$Z.footerLabel
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
        className: [s$Z.card, className].join(' '),
        contentClassName: [s$Z.contentCard, contentClassName].join(' ')
      });

      return React__default.createElement(RootComponent, actualCardProps, React__default.createElement("div", {
        className: s$Z.columns
      }, React__default.createElement("div", {
        className: s$Z.leftColumn
      }, React__default.createElement("div", {
        className: s$Z.titleRadio
      }, React__default.createElement("label", {
        htmlFor: "title"
      }, texts.title), React__default.createElement(GenderPicker, {
        className: s$Z.genderPicker,
        genders: this.genders,
        onSelect: this.handleChangeGender,
        selected: values.title || '',
        error: errors.title
      })), React__default.createElement(InputLabel, {
        id: "registrationFormFirstNameInput",
        className: s$Z.inputLabel,
        label: texts.firstName,
        onChange: this.handleChangeFirstName,
        value: values.firstName || '',
        error: errors.firstName,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormLastNameInput",
        className: s$Z.inputLabel,
        label: texts.lastName,
        onChange: this.handleChangeLastName,
        value: values.lastName || '',
        error: errors.lastName,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormPostalCodeInput",
        className: s$Z.inputLabel,
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
        className: [s$Z.inputLabel, s$Z.emailInputLabel].join(' '),
        label: texts.email,
        onChange: this.handleChangeEmail,
        value: values.email || '',
        error: errors.email,
        onKeyDown: onKeyDownEmail,
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormPasswordInput",
        className: s$Z.inputLabel,
        label: texts.password,
        onChange: this.handleChangePassword,
        value: values.password || '',
        error: errors.password,
        LabelFooterComponent: this.renderLabelFooterPasswordComponent,
        type: "password",
        mandatory: true
      }), React__default.createElement(InputLabel, {
        id: "registrationFormPasswordConfirmationInput",
        className: s$Z.inputLabel,
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
  RootComponent: PropTypes.func,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  texts: RegistrationFormTextTypes,
  phoneWithFlags: PropTypes.bool,
  onChangeProperty: PropTypes.func,
  values: ValuesType,
  errors: ErrorsType,
  labelFooterPassword: PropTypes.string,
  onKeyDownEmail: PropTypes.func,
  countries: PropTypes.shape(CountryPropType)
};

var css$_ = ".Picker-module_container__3AVzP {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #163457;\n  border: none;\n  border-radius: 5px;\n  display: block;\n  height: 50px;\n  padding: 0;\n}\n\n.Picker-module_shadowWrapper__1yU5l {\n  background-color: #fefefe;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 0 15px 2px rgb(206, 206, 206);\n          box-shadow: 0 0 15px 2px rgb(206, 206, 206);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  z-index: 2;\n}\n\n.Picker-module_pickerInputContainer__2EiaS {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 35px 0 15px;\n  width: 100%;\n  z-index: 2;\n}\n\n.Picker-module_pickerInput__1P5_a {\n  border-radius: 5px;\n  height: 50px;\n  padding: 0;\n  border: none;\n  margin-top: 0;\n  font-size: 15px;\n}\n\n.Picker-module_splitPickerInputContainer__2QVF3 {\n  border-left: 1px solid rgba(191, 196, 212, .52);\n}\n\n.Picker-module_suggestionsContainer__20x1U {\n  min-height: 150px;\n  background-color: black;\n  position: absolute;\n  width: 150%;\n  top: 56px;\n  top: 56px;\n  top: 3.5rem;\n  left: -25%;\n  border-radius: 8px;\n  border-width: 1px;\n}\n\n.Picker-module_error__3Mp0C {\n  background-color: #ff5757;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fefefe;\n  height: 45px;\n  left: 0;\n  opacity: 0;\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  -webkit-transform: none;\n          transform: none;\n  -webkit-transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  width: 100%;\n}\n\n.Picker-module_errorVisible__3Fa-X {\n  opacity: 1;\n  -webkit-transform: translateY(-40px);\n          transform: translateY(-40px);\n}\n";
var s$_ = {"container":"Picker-module_container__3AVzP","shadowWrapper":"Picker-module_shadowWrapper__1yU5l","pickerInputContainer":"Picker-module_pickerInputContainer__2EiaS","pickerInput":"Picker-module_pickerInput__1P5_a","splitPickerInputContainer":"Picker-module_splitPickerInputContainer__2QVF3","suggestionsContainer":"Picker-module_suggestionsContainer__20x1U","error":"Picker-module_error__3Mp0C","errorVisible":"Picker-module_errorVisible__3Fa-X"};
styleInject(css$_);

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
      return React__default.createElement("div", {
        className: [s$_.container, className].join(' '),
        ref: this.containerRef
      }, React__default.createElement("div", {
        className: [s$_.error, error !== '' ? s$_.errorVisible : undefined].join(' ')
      }, error), React__default.createElement("div", {
        className: s$_.shadowWrapper
      }, React__default.createElement(FirstInputComponent, {
        value: firstValue,
        className: s$_.pickerInput,
        containerClassName: s$_.pickerInputContainer,
        onFocus: this.handleFocus
      }), split && React__default.createElement(SecondInputComponent, {
        value: secondValue,
        className: s$_.pickerInput,
        containerClassName: [s$_.pickerInputContainer, s$_.splitPickerInputContainer].join(' '),
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
  error: ''
};
Picker.propTypes = {
  split: PropTypes.bool,
  SuggestionsComponent: PropTypes.func,
  FirstInputComponent: PropTypes.func,
  SecondInputComponent: PropTypes.func,
  firstValue: PropTypes.string,
  secondValue: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string
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
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  className: PropTypes.string
};

var css$$ = ".PickerSuggestions-module_container__1Oq6m {\n  background-color: #fefefe;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 0 15px 2px rgb(206, 206, 206);\n          box-shadow: 0 0 15px 2px rgb(206, 206, 206);\n  height: 275px;\n  left: -25%;\n  min-height: 150px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 65px;\n  -webkit-transform: translateY(-50px);\n          transform: translateY(-50px);\n  -webkit-transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n  width: 150%\n}\n\n.PickerSuggestions-module_container__1Oq6m.PickerSuggestions-module_visible__4ey8N {\n  opacity: 1;\n  pointer-events: initial;\n  -webkit-transform: none;\n          transform: none;\n}\n\n.PickerSuggestions-module_arrowContainer__2SiPV {\n  position: absolute;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  left: 0;\n  top: -15px;\n}\n\n.PickerSuggestions-module_arrow__JgXgd {\n  color: transparent\n}\n\n.PickerSuggestions-module_arrow__JgXgd.PickerSuggestions-module_visible__4ey8N {\n  color: #fefefe;\n  text-shadow: 0 -5px 15px rgb(206, 206, 206);\n}\n\n.PickerSuggestions-module_splitContainer__3P0nJ:before {\n  background-color: rgba(191, 196, 212, .52);\n  content: \"\";\n  height: calc(75% - 40px);\n  left: 50%;\n  position: absolute;\n  top: 20px;\n  width: 1px;\n}\n";
var s$$ = {"container":"PickerSuggestions-module_container__1Oq6m","visible":"PickerSuggestions-module_visible__4ey8N","arrowContainer":"PickerSuggestions-module_arrowContainer__2SiPV","arrow":"PickerSuggestions-module_arrow__JgXgd","splitContainer":"PickerSuggestions-module_splitContainer__3P0nJ"};
styleInject(css$$);

var PickerSuggestions = function PickerSuggestions(_ref) {
  var visible = _ref.visible,
      children = _ref.children,
      className = _ref.className,
      ArrowComponent = _ref.ArrowComponent,
      split = _ref.split,
      rest = _objectWithoutProperties(_ref, ["visible", "children", "className", "ArrowComponent", "split"]);

  return React__default.createElement("div", _extends({
    className: [s$$.container, visible ? s$$.visible : undefined, split ? s$$.splitContainer : undefined, className].join(' ')
  }, rest), React__default.createElement("div", {
    className: s$$.arrowContainer
  }, React__default.createElement(ArrowComponent, {
    position: "top",
    className: [s$$.arrow, visible ? s$$.visible : undefined].join(' ')
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
  visible: PropTypes.bool,
  children: PropTypes.any,
  // eslint-disable-line
  className: PropTypes.string,
  ArrowComponent: PropTypes.func,
  split: PropTypes.bool
};

var _ZoneTypesToIconName;
var ZoneTypes = {
  airport: 'airport',
  station: 'station'
};
var ZoneTypesToIconName = (_ZoneTypesToIconName = {}, _defineProperty(_ZoneTypesToIconName, ZoneTypes.airport, 'ec-plane'), _defineProperty(_ZoneTypesToIconName, ZoneTypes.station, 'ec-station'), _ZoneTypesToIconName);
var Type = PropTypes.shape({
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ZoneTypes)).isRequired
});

var css$10 = ".ZoneSuggestion-module_suggestion__nCTAf {\n  cursor: pointer;\n  margin-bottom: 10px\n}\n\n.ZoneSuggestion-module_suggestion__nCTAf:last-child {\n  margin-bottom: 0;\n}\n\n.ZoneSuggestion-module_zoneName__2XBZo {\n  padding-left: 25px;\n}\n\n.ZoneSuggestion-module_selected__2jOH2, .ZoneSuggestion-module_hovered__1ETlf:not(.ZoneSuggestion-module_disabled__1DHUU):hover {\n  font-weight: bold;\n}\n\n.ZoneSuggestion-module_disabled__1DHUU {\n  color: #eceff6;\n  cursor: not-allowed;\n}\n\n.ZoneSuggestion-module_icon__2Bikz {\n  margin-right: 10px;\n}\n\n.ZoneSuggestion-module_activeIcon__2XmM8 {\n  color: #163457;\n}\n\n.ZoneSuggestion-module_trainIcon__2zCRZ {\n  margin-left: 3px;\n}\n";
var s$10 = {"suggestion":"ZoneSuggestion-module_suggestion__nCTAf","zoneName":"ZoneSuggestion-module_zoneName__2XBZo","selected":"ZoneSuggestion-module_selected__2jOH2","hovered":"ZoneSuggestion-module_hovered__1ETlf","disabled":"ZoneSuggestion-module_disabled__1DHUU","icon":"ZoneSuggestion-module_icon__2Bikz","activeIcon":"ZoneSuggestion-module_activeIcon__2XmM8","trainIcon":"ZoneSuggestion-module_trainIcon__2zCRZ"};
styleInject(css$10);

var IconComponent = function IconComponent(_ref) {
  var name = _ref.name,
      iconClassName = _ref.className;
  return React__default.createElement("i", {
    className: ["icon icon-".concat(name), iconClassName, name === ZoneTypesToIconName[ZoneTypes.station] ? s$10.trainIcon : undefined].join(' ')
  });
};

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
};

var ZoneSuggestion = function ZoneSuggestion(_ref2) {
  var value = _ref2.value,
      onClick = _ref2.onClick,
      split = _ref2.split,
      selected = _ref2.selected,
      disabled = _ref2.disabled,
      rest = _objectWithoutProperties(_ref2, ["value", "onClick", "split", "selected", "disabled"]);

  return React__default.createElement("span", _extends({
    role: "presentation",
    className: [s$10.suggestion, split ? undefined : s$10.hovered, selected ? s$10.selected : undefined, disabled ? s$10.disabled : undefined].join(' '),
    onClick: onClick
  }, rest), React__default.createElement(Icon, {
    name: ZoneTypesToIconName[value.type],
    variant: disabled ? 'grey' : 'blue',
    position: "left",
    className: [s$10.icon, disabled ? s$10.disabled : s$10.activeIcon].join(' '),
    IconComponent: IconComponent
  }), React__default.createElement("span", {
    className: s$10.zoneName
  }, value.name));
};

ZoneSuggestion.defaultProps = {
  selected: false,
  disabled: false,
  split: false,
  onClick: function onClick() {
    return null;
  }
};
ZoneSuggestion.propTypes = {
  value: Type.isRequired,
  onClick: PropTypes.func,
  split: PropTypes.bool,
  selected: PropTypes.bool,
  disabled: PropTypes.bool
};

var css$11 = ".ZonesPicker-module_suggestionsContainer__j1KTO {\n  position: relative;\n  height: 75%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row\n}\n\n.ZonesPicker-module_suggestionsContainer__j1KTO:before, .ZonesPicker-module_suggestionsContainer__j1KTO:after {\n  content: '';\n  height: 20px;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n}\n\n.ZonesPicker-module_suggestionsContainer__j1KTO:before {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(rgba(255, 255, 255, .1)));\n  background: linear-gradient(to bottom, #fefefe, rgba(255, 255, 255, .1));\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 0;\n}\n\n.ZonesPicker-module_suggestionsContainer__j1KTO:after {\n  background: -webkit-gradient(linear, left bottom, left top, from(#fefefe), to(rgba(255, 255, 255, .1)));\n  background: linear-gradient(to top, #fefefe, rgba(255, 255, 255, .1));\n  bottom: 0;\n}\n\n.ZonesPicker-module_suggestions__19igb {\n  position: relative;\n  overflow-x: scroll;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  padding: 15px\n}\n\n.ZonesPicker-module_suggestions__19igb.ZonesPicker-module_visible__3Tlgg {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.ZonesPicker-module_suggestionAction__29BOq {\n  display: none;\n  padding-left: 15px;\n  height: 25%;\n  background-color: #eceff6;\n}\n\n.ZonesPicker-module_suggestionActionVisible__1bpa0 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.ZonesPicker-module_inputContainer__17GCF {\n  padding: 0 35px 0 15px;\n}\n\n.ZonesPicker-module_input__1qXay {\n  margin-right: 25px;\n}\n\n.ZonesPicker-module_input__1qXay::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.ZonesPicker-module_input__1qXay::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.input::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.input::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.ZonesPicker-module_input__1qXay::placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.ZonesPicker-module_inputImgIcon__2U4u7 {\n  height: 20px;\n}\n\n.ZonesPicker-module_inputIcon__lD2sz {\n  color: #163457;\n  font-size: 19.2px;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n}\n\n.ZonesPicker-module_leftInputIcon__3Azxc {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  left: 10px;\n  top: 0;\n  width: 30px;\n}\n\n.ZonesPicker-module_leftInputIcon__3Azxc + input {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0 0 0 25px;\n}\n\n.ZonesPicker-module_rightInputIcon__WQQ5r {\n  right: 10px;\n}\n\n.ZonesPicker-module_stationIcon__36JCs {\n  margin-left: 2px;\n}\n\n.ZonesPicker-module_inputAction__qyPpy {\n  cursor: pointer;\n}\n";
var s$11 = {"suggestionsContainer":"ZonesPicker-module_suggestionsContainer__j1KTO","suggestions":"ZonesPicker-module_suggestions__19igb","visible":"ZonesPicker-module_visible__3Tlgg","suggestionAction":"ZonesPicker-module_suggestionAction__29BOq","suggestionActionVisible":"ZonesPicker-module_suggestionActionVisible__1bpa0","inputContainer":"ZonesPicker-module_inputContainer__17GCF","input":"ZonesPicker-module_input__1qXay","inputImgIcon":"ZonesPicker-module_inputImgIcon__2U4u7","inputIcon":"ZonesPicker-module_inputIcon__lD2sz","leftInputIcon":"ZonesPicker-module_leftInputIcon__3Azxc","rightInputIcon":"ZonesPicker-module_rightInputIcon__WQQ5r","stationIcon":"ZonesPicker-module_stationIcon__36JCs","inputAction":"ZonesPicker-module_inputAction__qyPpy"};
styleInject(css$11);

var Suggestions = [{name:"Paris Orly",code:"ORY",type:"airport"},{name:"Paris CDG",code:"CDG",type:"airport"},{name:"Lyon",code:"ADL",type:"airport"},{name:"Gare de Lyon",code:"GDL",type:"station"},{name:"Marseille",code:"MAR",type:"airport"},{name:"Marseille2",code:"MAR2",type:"airport"},{name:"Marseille3",code:"MAR3",type:"airport"},{name:"Marseille4",code:"MAR4",type:"airport"},{name:"Marseille5",code:"MAR5",type:"airport"}];

var TextsType$6 = PropTypes.shape({
  inputPlaceholder: PropTypes.string,
  suggestionCheckboxLabel: PropTypes.string
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
          toZoneSuggestions = nextProps.toZoneSuggestions;

      if (!fromZoneProp && !toZoneProp) {
        return _objectSpread({}, prevState, {
          fromZoneSuggestions: getZoneSuggestionsFromValue(fromZoneSuggestions, prevState.fromZoneValue),
          toZoneSuggestions: getZoneSuggestionsFromValue(toZoneSuggestions, prevState.toZoneValue)
        });
      }

      var fromZone = fromZoneProp ? fromZoneSuggestions.find(function (suggestion) {
        return suggestion.name === fromZoneProp.name;
      }) : undefined;
      var toZone = toZoneProp ? toZoneSuggestions.find(function (suggestion) {
        return suggestion.name === toZoneProp.name;
      }) : undefined;
      var newState = {
        fromZoneValue: fromZone && fromZone.length >= prevState.fromZoneValue.length ? fromZone : prevState.fromZoneValue,
        toZoneValue: toZone && toZone.length >= prevState.toZoneValue.length ? toZone : prevState.toZoneValue
      };
      return _objectSpread({}, newState, {
        fromZoneSuggestions: getZoneSuggestionsFromValue(fromZoneSuggestions, newState.fromZoneValue),
        toZoneSuggestions: getZoneSuggestionsFromValue(toZoneSuggestions, newState.toZoneValue)
      });
    }
  }]);

  function ZonesPicker() {
    var _this;

    _classCallCheck(this, ZonesPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZonesPicker).call(this));

    _defineProperty(_assertThisInitialized(_this), "state", {
      split: false,
      fromZoneValue: '',
      fromZoneType: undefined,
      toZoneValue: '',
      toZoneType: undefined,
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

      _this.setState({
        fromZoneValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToZoneChange", function (event) {
      var value = event.currentTarget.value;

      _this.setState({
        toZoneValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFromZoneReset", function () {
      var onSelect = _this.props.onSelect;

      _this.setState(function (prevState) {
        return {
          fromZoneValue: '',
          toZoneValue: prevState.split ? prevState.toZoneValue : ''
        };
      });

      onSelect({}, ZonesPicker.fromZone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleToZoneReset", function () {
      var onSelect = _this.props.onSelect;

      _this.setState({
        toZoneValue: ''
      });

      onSelect({}, ZonesPicker.toZone);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSplitSuggestions", function () {
      _this.setState(function (prevState) {
        var onSelect = _this.props.onSelect;
        var toZoneValue = prevState.split ? prevState.toZoneValue : '';
        onSelect(toZoneValue, ZonesPicker.toZone);
        return {
          split: !prevState.split,
          toZoneValue: toZoneValue
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputLeftIconComponent", function (_ref) {
      var name = _ref.name,
          iconClassName = _ref.className;
      var className = ["icon icon-".concat(name), iconClassName].join(' ');

      if (name === ZoneTypesToIconName[ZoneTypes.station]) {
        className = [className, s$11.stationIcon].join(' ');
      }

      return createElement("i", {
        className: className
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputLeftComponent", function (_ref2) {
      var className = _ref2.className;
      var fromZone = _this.props.fromZone;

      if (!fromZone || !fromZone.type) {
        return null;
      }

      return createElement(Icon, {
        IconComponent: _this.renderFromInputLeftIconComponent,
        name: ZoneTypesToIconName[fromZone.type],
        variant: "blue",
        className: [s$11.inputIcon, s$11.leftInputIcon, className].join(' ')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputRightComponent", function (_ref3) {
      var className = _ref3.className;
      var fromZoneValue = _this.state.fromZoneValue;

      if (fromZoneValue.length === 0) {
        return createElement(Icon, {
          src: iconSearch,
          className: [s$11.inputIcon, s$11.rightInputIcon, className].join(' ')
        });
      }

      return createElement(Icon, {
        src: iconClear,
        role: "presentation",
        className: [s$11.inputAction, s$11.rightInputIcon, className].join(' '),
        onClick: _this.handleFromZoneReset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromInputComponent", function (_ref4) {
      var className = _ref4.className,
          inputProps = _objectWithoutProperties(_ref4, ["className"]);

      var texts = _this.props.texts;
      return createElement(Input, _extends({}, inputProps, {
        onChange: _this.handleFromZoneChange,
        placeholder: texts.inputPlaceholder,
        className: [s$11.input, className].join(' '),
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
        className = [className, s$11.stationIcon].join(' ');
      }

      return createElement("i", {
        className: className
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputLeftComponent", function (_ref6) {
      var className = _ref6.className;
      var toZone = _this.props.toZone;

      if (!toZone || !toZone.type) {
        return null;
      }

      return createElement(Icon, {
        IconComponent: _this.renderToInputLeftIconComponent,
        name: ZoneTypesToIconName[toZone.type],
        variant: "blue",
        className: [s$11.inputIcon, s$11.leftInputIcon, className].join(' ')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputRightComponent", function (_ref7) {
      var className = _ref7.className;
      var toZoneValue = _this.state.toZoneValue;

      if (toZoneValue.length === 0) {
        return createElement(Icon, {
          src: iconSearch,
          className: [s$11.inputIcon, s$11.rightInputIcon, className].join(' ')
        });
      }

      return createElement(Icon, {
        src: iconClear,
        role: "presentation",
        className: [s$11.inputAction, s$11.rightInputIcon, className].join(' '),
        onClick: _this.handleToZoneReset
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToInputComponent", function (_ref8) {
      var className = _ref8.className,
          inputProps = _objectWithoutProperties(_ref8, ["className"]);

      var texts = _this.props.texts;
      return createElement(Input, _extends({}, inputProps, {
        onChange: _this.handleToZoneChange,
        placeholder: texts.inputPlaceholder,
        className: [s$11.input, className].join(' '),
        autocomplete: "off",
        LeftComponent: _this.renderToInputLeftComponent,
        RightComponent: _this.renderToInputRightComponent
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderFromZoneSuggestion", function (zone) {
      var split = _this.state.split;
      return createElement(ZoneSuggestion, {
        value: zone,
        key: zone.code,
        split: split,
        onClick: function onClick() {
          return _this.handleFromZoneClick(zone);
        },
        disabled: zone.disabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderToZoneSuggestion", function (zone) {
      return createElement(ZoneSuggestion, {
        value: zone,
        key: zone.code,
        split: true,
        onClick: function onClick() {
          return _this.handleToZoneClick(zone);
        },
        disabled: zone.disabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsComponent", function (_ref9) {
      var visible = _ref9.visible,
          rest = _objectWithoutProperties(_ref9, ["visible"]);

      var texts = _this.props.texts;
      var _this$state2 = _this.state,
          split = _this$state2.split,
          fromZoneSuggestions = _this$state2.fromZoneSuggestions,
          toZoneSuggestions = _this$state2.toZoneSuggestions;
      return createElement(PickerSuggestions, _extends({
        visible: visible
      }, rest), createElement("div", {
        className: s$11.suggestionsContainer
      }, createElement("div", {
        className: [s$11.suggestions, visible ? s$11.visible : undefined].join(' ')
      }, fromZoneSuggestions.map(_this.renderFromZoneSuggestion)), createElement("div", {
        className: [s$11.suggestions, s$11.splitSuggestions, visible && split ? s$11.visible : undefined].join(' ')
      }, toZoneSuggestions.map(_this.renderToZoneSuggestion))), createElement("div", {
        className: [s$11.suggestionAction, visible ? s$11.suggestionActionVisible : undefined].join(' ')
      }, createElement(InputCheckbox, {
        onChange: _this.handleSplitSuggestions,
        checked: split
      }, texts.suggestionCheckboxLabel)));
    });

    _this.picker = createRef();
    return _this;
  }

  _createClass(ZonesPicker, [{
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          split = _this$state3.split,
          fromZoneValue = _this$state3.fromZoneValue,
          toZoneValue = _this$state3.toZoneValue;
      var _this$props = this.props,
          error = _this$props.error,
          className = _this$props.className;
      return createElement(Picker, {
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
}(PureComponent);

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
  error: ''
};
ZonesPicker.propTypes = {
  fromZoneSuggestions: PropTypes.arrayOf(Type),
  toZoneSuggestions: PropTypes.arrayOf(Type),
  onSelect: PropTypes.func,
  fromZone: Type,
  toZone: Type,
  texts: TextsType$6,
  className: PropTypes.string,
  error: PropTypes.string
};
ZonesPicker.fromZone = 'from';
ZonesPicker.toZone = 'to';

var bgWhite = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAAA/dJREFUSA291ttuVVUUxvFuOaiIKB7QYjkogpqgiZFEvdGH8IV8AV+Eay+8MMY7Q6LxgCYeEIECgqIFROVg2f5/q3s3paX1Rp3J37nXXHOOMb5vzFWcmfkPxng83rRR2NFGL9d7V9D7e/dXLI5Go9s9i7MjzDfi8bjYO7/XjM1rVlYtFHBbSxLcji0F+rN5Z7wVH8bxeCQOxDgMcTd19pf2Xx1WVvznrkknlW9p32LMxu6QbEGg5jfiYPQ4Pt9sz73xYDwUC3FPiL8m6Rp7JwlZNRe/xpF4NBQxH9vjULBQUSeCjfp4IexV2JW4Fl+m9lbz8ribUodfCFY9F5JT4eDeuBQCbg293R8PBJUfhAJuhmHPE3HWw3SwgEcrFav+q3CY0jMhqL7avysMz5BYEja+HntCj/Xd/stxx9g8Sbi1WTLJHw6BKN4X1jEbFErgN+X2sd1l00vKJNf/P0JCce4YU3tZSY2kLsjhEOTZEFwgCvXxo/gpXg4FPhaSXw/uiKOXEor3VCh2eQz29sQmB4xzofo3Q1AXR+DnQ48ll3Q+qNAzt9sFwtNhKFRSLoq3PDZ3s6iESq+34fdmjZdcEP1h333hW30tXJrvQ9HgitkdYD+1zrBYYXPFvTD5xmf01CKbb7UoqJsq8RfBQv1jn6qhkFdDop0xLUY/KdL/l4L6H2IhngznPo4h2VTptgqQUBGsZKN+CuJieMeNqeo9k3U2KlpyhXhm8VxQqjDFvLcUf3STvf52Cs4e/VMVRfrJWv1WiJ4LYChUXyXTUwkvBmslEMvM5k9DwVfLdaODI4dmeijvkJgqa5+HgwoQaKqYhVrwW1AtqFlh9lHmnSL81mP2ngkxqBkPSYeH0WixxFf6fSHMlL4SeqGnChKYYhZaOx0SUyuxT4q183EsvgtnriVMzGFQs3K4TGdbUJWZNapUPcuts01ifbZ+In4OlnsWXDt2hLUDsTtBLB7GstLpQi8pdCEo/iQkcmnYei4EVeyloO5yfB37g2q9dV4rpt+4Nr1b7NOJWlyd1Pd3ONgmKGvsORgCfROUzQYrF8Jlo15vFUYlVzyLZ+gvZ4axOqnDJ0P1Auya4M/aj3E2BHVRzofCuGAWdHrb9/bbp/VtUM9qAsQcVJinw23LgeGPhH992Khqlr4fDm+P46EI76nXLxZ6z4FTYc9nsS8kNuy/096SaTymg2qXRn+NU6HHlJkls+dIUEYhK+1XjBvuvP66K0QNKszrjtRSyjY302ezqeJYtfLfYSpZ/kzMxqF4JyijXkEnO6eAfx4snti84ebpnua98WJsif7nbGY0Pnq0+e3iLImk4l8bJaEMLobP6f8Zg7LxUuL1Mv4Nki9xooUuN/EAAAAASUVORK5CYII=";

var bgGrey = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAABmlJREFUSA21VltvHFUSrjqne26eGY89vkwmDsYJXljMLSEREisFhQceQUIov8c/gLd94BeglfK4D0hEKyxEVlmto11xMZc4sZMYjBl77p4Zz3SfU/tVJ7ZGBCX7AEea6e5zquqr+urSTfQ7r9XVVfM0k/w0gd86v3+/NbW4WGoen21ubqYnJyfD4XDoMplMQJTL12r36isrK6NjmfHrU73a3e3MqMK1a9esXjc2NlK5Qvhmrdm9vL/fO6WA2enTs8wTfwpz5VcB+Lw3bmlu7tlET3V+vX4zUgW4evWq29vbm5CguBKI+Nj4AY3iXhDYlFj7gRGZ98RfxkP3d5MOnrPeZclylYjb5HzPWdr3R92tarXafyro9vY2GJopWOsnmdn6wLzBjgzhnr3f8gGfsZ5exzML074I3SKRihFuevYpbIde6IDId+BU+1S58O2vQR+jN5vNWpuWF7wNZxJA4meYTYkM5zzbKfYwaljBWiKcY+K32fBfxNA7hjklYkbGy5CZbAiGjtMyDqygSvExzVypVHqeTIspNuypxoIf+7QqGZZpw4R77iB2p3osPkUkHdwW8Ax6pQinsGeLzvno0qVLoeqOr+DWrVuoNqJutyuotszI5ksmjo7E2HlsV8TIkDxn4dW0kHyPyE6zl1iY04YkhwgdiZkDeg5RvgzH7gtxiOceSCmur6/fU/vjK9ja2vLnz58Pps6ezQx71qZy/kW29hVQliOhBQj/hNyhOiVFbAre+zvqAHJ3CueTJDwDnrKQa0EmK15aQgY5pYECXb58OYNLT++P1wm1dxuNYtA1JpNPvQ0K30NOMshbBENHCXVwAJE2EOF14+QmgN6FM6/DwCKuPYAPIDuEzIZ35gsjrumtjJznRnWm8N0xoF41p6K/c9PTbTR8i2J/g8lfB+AQ2xO4IiI5IyzwmPM4e9ZZ+bMYUM4UgEqLMp5jkjIKKwP6FyBTxHkaDhljyO7u7uaAoQEmy2h1aZvgSTclCgxKXjBJpIsd2OQsItFC8vgh/+Y82uN9EcngMKl+RBeCgRDyIwA7NuZF0L+o+bdkljhVemmv0V2BfrKC2dlZzufz4c5OOxfHHo0mr8DwMsD68CKCceQDMbEUoeFYZA7GY9BZVgvwawRAsKIOySSuEcQvQPccHPgXaAxDIwvddvy3RBx/5sqVK67Vao2s7R2FxXSe2B+qoYd0wXRijCxiRqpBIeiEXhtOqBzmLxfhSIjzXbSXAyBolQLSEkD3Z1C9FXv+Tzo9OJnDSU6Xl5eHN27cGKZcpFWoSDV4qcZjeDpEOIiEO9gfwGBLZdA2PciMNFTI1HGNcK3hqY+NBkR+Qpoicua2FXkQhqHagwhJ0qO4SdZgIAcZ4c7ImrsZI3CA34LnExBNq1FEok404dUIJVgHcAnP30EGWUnaRnsbAdIDz/wDkzmMglG9OjX180OEh/9JIeitDnh9Xc3P52txd9iDsQcokLp6juNk+oDah1MIrQHgPM6/BsbXkDkEC8pGGzLApyEm1b7Xanbp+c16vbi2tnYSoHp1snZ2drIml5vxkvVo0nmU/Vmw9xJ8f0Pbg7xsqDCiCNAmd2Feq7yAQnoOhqZxhOlERQA3oXcHVXcbcmcQWeOo764tLBTrqn+Crm98zpXLVqgaOH+vdnD/m1Klsh+YdA6vmAXkDxNJ1hEhRiKjuqWftBZzCc/tpBI8WTgwgjNp8ajwRyFF4j+PovrJVBqPlPf2urPqSaVS2N856FeR1wsw9gKAJmDsAAWi1VhEGc+Bwh2NCOIXUL0oNjMPEIzjZHRCxX8C4D3IlvFm2mzy0Q/L5TJeDGgZ/Xu0ZDA46CggnsWO4qEXdwDtJmiuO3GfgdhDNP2+E/ovJsU34jmD89vYwxiUAd632quYvbQl3m8eHcb/jr25k9hvNLSXkzUOSktLS5izSVlTtVqsS9T/iozfNM5/G4ttezHNfjf650d//fAf7qhzR+LOdTcarjuRu3BMhzzKiAJDfiOmaCedppLu6VfHxMRE8rmTyOjfk9b2drOkja2fHXgNhhcvXowhj2BOFv9Y75/GED5tjT8L8l7z5D/muL+lH2jex9ko4vbNm5+2tUNOtJ508+iTcjz3j4mrMypXq9Xyu83m4i+/tM5BSHWS39raqhbsE208ZvT/3VDg8X5UPRTfHwM25hSvribF+USg/wHY1SIfW2EOKgAAAABJRU5ErkJggg==";

var bgBlue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAABmZJREFUSA21Vs1PXFUUP+e+L97wMcAUKNMW21KwLfUzTUw1LWKMSUlcGFOWLnXlwpUfC/PixpVxoRv9A4yBnZoutLFomzZqE7QI2g+qUMp3B2YYGGbmvXv83TfQUKjoQm943PfOvff8zsfvnDtE/8M4099v7aSWd1r8u7U3+i/5K4tumJ7+KgqCQGMfv/nNWJ1v5zg7Xygm0y1Nd3N69qPejuKDdPwjaPDllQQV/JCa5nR23nM+7Hu6EFz8PW2x/bKEPPhud/vw2+d+S3mu164skQqItjmMZqIV627Q25HbCmxvFax/c9A/4ozQSGQ1JltFrLSmtkJDCxXfunB1UrH9ApHqIIsEgFOe77QqIY+FallRUiJeFLaVVc1G/zbQB3kah6ra13vXdDnjcdVxVjqFjQ5puk1K1UB5JylpEpFIhG8yUxGzxUpmWEtKFN8VzVnN4fLUr7mRT187Xt7s3DZPg/PnLXL0EYJGX3kPC+u9APGEuEyWtEHpApRmSciFzAfgfmapJuZamPCtKCqy6BIhDEorK92ZbAHg5GZQtf5xz+OgpydapWhE4zCJzkDpBBRWgyshafhC1GzOMElIeBjAsUFCOWXxCRi4D9+NTFGDFgUWl5Y2A5p34ym/fvaGm/Ino6nrtZw6kqz3SPlKiwXAh3AwYtYRAFpJ1DRmG0FoxbkyMwBFHBZJwLAkCbvCyKFwQZSs2kovLBertpVPHN5UviQFp6063Zlj2+YOTXKMNSWJ1SEoLENhDgbAQ2kA2E/g6JyQegLe1kO+y4QZ6VhDuBBaqkZK8nhf0giv70V7cCaL596ohHd0IPTtiUpNSekOk3LgRTesrifFNbB8F04cBvhRzM1QPEesb+PbeNECgDQClhLmFOJ+INaOcLNEFnjgvvrJFSeWrf/D/vuH2bDnWLIXu3vhmVHigjQJYwALl4VkBvIRgIzh5HNQAGMIoedlrGUgz+P7C+wZh/eroinLOsxkZjMzpsYNmjItCzn10Flir9OdvgfWrQDkKp4lhNICeXwoh4NiPIMh/BQY+yRkJtxV2GO6kosHEUKVCj2KXJ8QUQfB9P3ado6iS3VhPR6qa3RUTE6p+0zCdBZyPXjFh6HGhA1koQhzAcD44wK8SOANpFFgaSzPgcErkCvsg9yAywHIHsfZFiVy0BJ+jLTWxjmgQlwZjPqEoLmeXGc3Kuxk3HFwCGRxQJQGhMrF5jqDjBnO8WVMhoinIKjCPIsQw3pCjaJaGSVGchnGX9QiHgpsOOg5dBP70LQqQ0bm58tFy40QQZtJ/4JgjkE5yMslw2C8m3ysAWAF82z8Dq1mxp58BVBWsW/ReA5jMUsGTF4slaIf4f9GO4RF62Ogry/yZkpZKuuZnOghhOMPuLMGvbXQ7CPkduyFABS1CMNQJjQOkB/wPS0sedgIBiOf2I8kD6NH3kBDKYXazgfPHJrbwLoHagRBX1c56OmYTJSny5FG6xIZgmcTeJYBAAcMe8mBMUXUqcmzYew0gOcNy2DgMuYs4mNBcR3aF05Je40bpdfzGeNu7RbI7VC97SZTGt5YaORoTIYg7QB0YARqODbCNAHUKsLJFKK5L2PdhlkmDRnMFtaXgDiL92ZQrN13Zabp9Mnc6MBATIQNryk4e6PWdtQxqBmn2eJC2MQly9UgC66xCjOvQcFNLboVdGhCOBdFdCM8dBAGpALXQaWs0NCQ/0pqsKxWS1KKa9SAxW1wA7XohugcfIty+SVqWtZk7W1GzPDoPOg4rZknAWJCVwXlU4QbBx7uw7MAsplwGwNwCag21GsiErqucFmgZuukxCXwxtQz3ZfT958/kqFzn88ELx5fxW0TIkgKhwzFs2Gov0bfn8RnHsqGI4ougyiGHNcAMGXyawBNBPD+J26oSwVZ/TmSaBLGjRswNKIYb2tOaXBwEGcq49mXXsmz4+eRX5QEyBOF06Wy3Flc5ZHEhc+ms37rolulb4vtJdEifVi3GzkFkWkijNSQrahgRWxrtmzPZfn49Cm0ScRyXf9OE6NTNXoZvWx+vnRRlwWWowHEIz7/zveju31RVdpxDgK8FaCd+YJ8wFUrqkbZdRLaibkVvvV3P9S2gZuevNGXty1uEmzsCS6Otb333dgj5uJY/ynK/ejvZt20MXPk33i6SfXOrzFwd3ect5gTO2//T1c5CO4n6FbtfwEFrR3m6cbijgAAAABJRU5ErkJggg==";

var bgYellow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAvCAYAAABUiRJEAAAAAXNSR0IArs4c6QAAEIZJREFUaAXVmul3VdUZh/c+uQmEAEGBgBFlEmupYj+46twuV1fbtbSf/Xvy9/RTP7hs7XKVWoeqhVpaJxwYJAQhjEnIRO7ZfZ733BtTGhIN0NoN556z99nDO/7ed++TnP4PSvlN6kkfp5JHUt0ltxxJvWkmbUyTaTr1p3Z+IS10333be/62He9mP5jrS/tg4Yk0AUHl5rXKYZjcmO5POU2k+TSX/pCupp/A/LZ0iL430mw6mzakq/kJnr9D+a8wDzd5Oaa6dJb30uMw9hhs/xPWxtIUQniRp04p76bNqQWjdapomuF3lLdt2H+EesYu5hg7li6lS/lX6Xp33Gr31modbud9aGxd2olex8qJNJdfTu2bBVHeSpsgfm/KlcwfTP31F2ld+gfrHnFtzHsb7VthvCdoqbCBkn6c1tPSRhCZf21G5PQAvSz/e+ZlElPczu8wBG1Oe1Jd/kptPl0Ouz6bzgWp69JT3GW8n7cYSPXD1Kqnymvpk3QNM67TLlq30CeG8VvQ/L20r6f9NLV53mXuPQhhS3k1nU8vpvmVLC3W5eeuaD4Aah/amIegXkitQ7vrIW47JI9Rn8PHW0DVBG+fSaXaAfntYCwxIlWH0r31LJp8AxonebeJt5m+PdFHK8j2wwoyIsqAne976Lc9HUivpZPpW5j/bTMfGj4CIzXmrTZaeOw8gFTSo5D3IAQOQtZF6lsgfpA+E7Tpu9vQ9V7a9e0Z7pp1xd1/A4w5SP0k9wEYk+293DVzx09HryoN0dbm3Tg9WrxT0INYXB90Ta+m/dtmPr2KR6f0Ixbuh9khiDraYfpZSNlM/WoQlejXaGw3bWOMmeUa5JpIpe5JVaXHGsoaw04VAqifpjbEu+Fo7anP8v5NevUx9zruDbuOqPlX8U/X6cctXkVAS0CTcf9R1sy8Gl8i2W3MPM/ysyy9jWsD9RqSQOHqHh5l8jrtaq6Paz31Pt5v4fkG13WeFaJtsuTzBsbu4u58m1IpAF2Fb9cH6DNO+zSsWhxjER90hRbtg+l9rGaV0gxfpdNyrxcZnwp/OwoBmu0N7pIyzXWaC+HWPgtKvmtD4AJ30hK8M+GvJQQBQtczzdWZQ1hLgd8mL8raGC4ePIIwhphHy5nmLtIv0LtxGVGhna7wbtUSzDvzzT2Xa7u5j3XDV36SCLsQzGp0AzTLqKb9YZCUqkHqmvRCEKpWM0Q3jNNMTcCTiVzbT2vQhPt5nkfb73JXiJtpw5K4O4dA2tCuZQmtFTMsoIZ11FctwfyiFpd0t00BlBEmpHSFIZLbFohuu8+H0XBNiNEcZagJbzthZ5S6gKbG7qPdLE0LUa/CmGHsXuqYOEBZmKdUG2nvuqOWc5E+WgnPBcEWwme1lz6Pcm3i2shMw/Q5yPM9zkB9Lo1wX6V0F1m2WwiAKcubTIpWyuudBOIgtX1pY3kbCc8DWBtAdaVdBC+01g7CdkCI4W0SovTPXTCGqdZa2Tjt6raXtn3U59D42VQDcgpK3ev3JV1GaGr5gYbxcB8EWe6jfQCLcJZR5tlB/UCqCY85Ik0rvYVQnmPtFYqErFhC40cwP1kQoWdgUz/ficb6YLgnQtj9EGzMnYVgBfoA2lFbgFR9nvbLXEMQaLYGoNWXYf5LxlKrnmbmruY19SaTC+bL/cyhq9iGoPLX3DVp4/xVBGmSM8WMk7Rc5y6Nl/idZNTn4Y403KqsqHkHhfZJTXnsQXe9GNoATzOQK4iplWEYGaZtW2iuMXn9U+SVGZHdd6K8Jo5Gqxupqu+B2K9g4E/cd/KOPAAr0CEaIToOgQV+GCmkgTlAfdtS1tW0tDHe6UQXoEGj19x76V2pOOmnvmxZkfnQ+ghTN0UflaBeyJSJy7B/BT1AULUbhGBzUuibFYqJjWSA4IQrCTcElrKJu7k547GMCjNdSMchWfNUWIY2GQbIiijuejIrkmvu1nUHNSzCm0eIK40TNUDpmwWUs5NYP7FSrF+R+ZDaCFN/UyYAt2mInYWUARZX8qch8hdcEohJF+9cWXNVE19zCVSmsMRr3onqpWM1FRprR4YGs/Wb8PkSfRuAa/rqEmrdkOdlZECwEfdJqurPqF1B6+uYxx2fxm8C1IeIdRHHLluU4HcqcWhwDqbVVgti2KgANK/D7GcYGQBFPM5ZTbvN1EwPcO2mvp56m8Vck9BUCH/VHtoPQbgbFTVuCPS91qYlqJzuXQtQ0wKr77GisoveWksK3Wv2st6YvqLayEbnlmFvRc3HpMv8dLamcfDAlpTU1DAF+CSzuSDeUSxazPS6oUwL0iWI2wjFEgIBBFO9m5o4sR2NiviNe4VvK0BMWBdqkNx+uBPtDbjO0+4Yc4sW1ACMkTHO87Sd1ad4t6z2WwRzzcj/S82b/k2JGP4G8uTkZOkBQ/d9LLkuQAdGa315P1MJhDKocGXW2K/G3Hy4iZFgLAHTzVkA7KVunNdVuNseLqKlON7trrFB7U/zbHtnM8SOUJzIhL2SjkGpeYFru6d01z+IgqSgnZ8IAfOqKS3gcFmmux0ibXmaxftSLwcLNROAtI2wGCiJbjcFMgHRTczXNKt1iW2STfP6xlTVioxMcpfRB2HU2LyTMaPctQyZ06wVoBqbiHtjLdIqY15aABgAaFYAbl0xX/04baeY+yoru8kSNZ6Dcdc9igv8eakCVzf7l5GdW9ZpJniFk5jDPMvqCa7tEFGnh2l5lMmNvW5irqF9trQZBA507uedxXzb9QQ9mTIn8LBD18ASCprME9xNVTVrmTN9vUIfi1FCEarhBvR0k4g0IXg3Qg8hgHkY1m1wheoH3Me5oKBuCYA8LB50rM48I9HTdaaYST8HqPqZeIG6xKv1hihzMkyykhGljFkW8nLCXgkBaC2arGbvs6BkOHTnpxYRmFrkKlnGAb7iIYXvBDzJdw2LkUCLEhgRcnmYfgKhsf8zph6CUeeVxotg0Se8fxvxzuJ4M0vde3XmR/DKF0htPSqeRAALAS47SG/Nq86HPnJFRodQmn02m48ALbehMqt/yoA+b6bW3L/xYRGeyJAv8U6d2kfixQnpc1MkowKe+YBtjrGPWIGLGT2gLJKj+hztYgoHHvWF6F+nPfT6uOuytNHFLGmVkkdYhNIZeINBZ8mb74PE9ZAwzCLm2GiAnVsVWtVXMXXCnj5cyjB1/ZqhYSkasUjtXcEY872L1oZILcftqjnCVur202U038u0aW3QnU/Dwj3UFew5LtyoPMT9A67jXM1IccVz3slAfZobxpkUzXzH4qDyHIu9k/ZDwn0s7pHVYbI1AWYfax5gSs1yjEsDB8yCOc3ZWC8zEiy4eT6nsPRRNSiC20/C7dsIpDmRFfXFCpWhYOiXTaqwMHN+3SzmPcPdzZX9fHYfcRWRaT1R5MGH78x8M5xfdafhzafPYFXfND8HycNnNVHP4QQ72TUOqzk17LMnP2xM0HojKLfCMBDmrNmbLygE+ygKmVZYtmsZUzC9g2dSZlyvmQca8hecEZtBepqjkDMfQo4J2EtNnvYoa2P+MFryIMG01E3tNP/Wx24KiZJupnwIovRDNaqZiux7ueuLZn4mHgKfGsQvM8yAxbnWXNF2/il329S2c2hd5u8Cald4or4RBgEWhGN2WX8edfcO5gsLfMVRy7f4krNoCkz67csbEDVHTj/LtvEJXOCPcZLzAQJ5g6WOdcDL+TQvgAdSBKOGcWtqF1QOATTon8vB2BVqS4kT/pI/4TL2e0ii5rUS59MCdBvNXNe4l4t/9V8Qz1e0KRyPt9zqrqjcNTGfAcH8fLrS/ThoHfI8eroEGYIWsTmrUYAoj1PX//Rftak5G8MVgO4BDaTBJZ/hSf83DwDV6095Ps2lcGRWR5N51zFJ0oq6J8NGBJ9t1xoMh4rLNW5ZVpTMLUfd9CI2DwP4oyfonqIlPjkFT3EAKcH6nxqXMS3AUCWiA4yYvMKIzDDMujmK9GNUrsnuKoTnJigAUTdRGApRDStQhbmV5dwcKWgVOsjMm7CNXdjQXnp9gUqmUZZrLpbbYh6uMjg/CBmbWFg8JeyxTBsQzDUWwNGSpzpNKBMUNV/WzCeIGRCvdYQg9F+mq0f5lSYFIJyK/oQ5s8VIZBASESoSIXZ0ccwV7qMrKKCdjHONHlzoae5SOJz66g+xm99S0y0Wy20xD4puhsTnWYD8On3K4iKvJ6wCk7n2KILglKd6CcWzY4s8nSSn/hj+iAwccUWCQm6uEIwIzdl+50xAK6mJApUaH+Ad0SJrSWhQlwrTdyOEu1QPEm7noMfo4+ZmOOas67cYe8q+KisAkIplzczzIdHPSHtgehQjPAnZk52t7mW+qWzBSCcwt3lWeJJ1RPBRBLCV9c9C7EmY4hwAazHWC1Kaa7Pjc0/+NTVDp2FNYPNdY7Lh04Wcgn1AlLKFm76ta4kDw4wHF2rdibVgvKSPcKxrSxnnHZOuocSx9VbMuUq7EcAcGD8h44tT9eCDC+GjMBtgZe5+BrmbqQlefqwQBKXANFazV2seXcmUJ0TU+UyV44xA33aE787ApxgBw4EF3LO7RjNFreIEc17gybX0/ccYN9QFZ7VPe5S1ad69WA3AeEraYqGf8YTDxsTvwEwL8OvhBCA0ztFz7OMBr5KMw8dpV9smKAoCbbEtTZzXN8rgcNP31R7quEr9d+4IinqzKdISvmAsqJ73cG+iS4kESKF6LN7PW5+fZKRfcK+psPjAgsS65r825s3HZvgg6XfXq4S9F1mAEmb1TJphE+TmRZBSE4Y1Mz3N9gjXDASpYU9k/eqiINjKQm7hjxIWSEd7SZvrYPo4bW6OMPv6FALA3Gv7EyI5xPBANOVPqCOIwglxeg+Dn2K8n7Nc/X3e9TLDNg67tAQjAy94Q1kT8x0T/8bMnalTkHDzNbYHLPCTdeEbXIWLmLvPovW++GojuCkQGbvIM3hQG8LGYUMmhmif5P4V9R20i+SuxzbYjxhxXo8l5PMIaRyhENfzRwjAI68LCFCL3M+Ya9yboy1jwE1lTczfNMfNVbcUX6IB9337eUY7lUI4SdsEetBplP11epjqXoTUY2ELo7jA3njnHv1vjNUVFJzH1Pg2LQl7848XuqmvH0cyVuLnslnAzV59zUabJ9dRbAu0mReE5qOdnzvOfCD+EQhpwabH036NaZNzu5Z/UXUDwFIbpp8zsI1AliYfWM5pxDPGu4INiN6XGGs0wME8pal+iSBJofn2lwqCybrOEWzmFGLxOH0zzPbwTwBUeM1f8yyT6t5x5lnsm73/CCHm11hBk4FtgZWvspjwVtjA/HJ/O7PUpXDM85wdHENrB8Lo4+CiPhqCiG9+RIIaC8J9PJsr78B6L7YzE/v7NiJW63y7AUeuh3tJ3mK5K8wvzs5D5sQUovyuMtZhLOVVPiB2xwtM5HMkMTCj+fqZbAF3aAFfpr8VwOgVewFGYRughTm+Wf0UbIsnbqRNbQOUo975WVOcXzrBis8HUysAUF/2IHQt5Slc4zQm/XssaBwr+F2EORH+BG5wnFkjZTV8aUm0nsrPAnqvkHj1pQtYmn/31UmI/p0Aoeeul26MvVMLBaP+LdBWsjnDZZXOY2GNlu/UIt/XeWTeA9Uy0vnDiO8roXeDrg7TG/2GEFZwNxb5vs8ZFoD210rnvwB30rb2N6C09gAAAABJRU5ErkJggg==";

var bgMelrose = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAaCAYAAABLlle3AAAAAXNSR0IArs4c6QAABfFJREFUSA21lklvXEUQx//93iyeGdtjO14yzkYICUEJAaRIiEOChMQlV+QjcCGKkFAO+QT+BEGycvEpCsf4xoEDB8QBYQmBAjiWCNhZHCd2jD32eJ/lveZXz2MrIc5ygNb0dHd19b+Wrqp+0v/QBgZ8+DxY97zNZ+1dvuxzhYIaMzOKBgddLHk3PKz29YycX1S10K2e6pIeXbzoqrthpHYjPk4bHvZ5wBvQ4vZ2pS9dchvpojpdSh+VDul76GNXrqkL044UYnl1wuiVynUoHBryCwhefhzP5s8Q6t3goNLj44qUVWnfIfVHoTawafHLq34hG+osLjoapOSvXPMPQ6eSh9OFalOsYirQIieDTFuC/5TQXdy75SqX1X5fVTnM6TT+24OC6cDpvo/VyvyYnHoYIy9NOKcqCoXwzQbwMi6wrjQCrQabunnhgqvDu9OeshQLwyCjN+JAPsjpdUD3O4+9TnXmBxnnOV3BkRnvlAu8XsGdBQVqw4LvmFdRrGbWoGQmCNTHdHpHotG3FhxvNoRG5VjjLlIVF5Vjpym2CljT8F7IUK+xcqKR0ExwoBpKLNPfQ8EDLlAX+53GX6tpqQm9M2Cpd0NDypTLPiqV5KppdWRTypm7AD0UxIjecmMJDSsIrdFLaFkHNMeYZp1nLDKa9ctYuIGy6yixlErpqfRBqFQuyyOwYCFfSOkoACdxYxGA19g2ty5jgVnYA30Uc+cAfId1B+tu5jl4NjlnKVLAxas+0BJ8Lk5rH7QKfac13UvOZZIDqlX1AJA0LnofQANthamb8Tjd7rgX0DkUus/arOjDI/0I3APNAu6woSNwmStydq+kXdpo2w3eJ5sxBC06B+C5BAiXAZpHWAecMRY/YD7O/iTrD1gfZ11ivkIvw7uK27+m32O+TgpViJzyyrxmLcfhUcpK1pkzSuHiulWXRkNZ1FpD4O+AmQtLdncIcQhwiTVe7xKhRQKIUqAWeGP2M/CbRRYDp/BUP3FxJw61SA7vzXcnXviZPQUnTsjbnfb0KE+i7wnalAfMXGmhbvkVobFpCKY26Xn2itAOQNigL9PX2CXJVGQ/Qz/M/G0U7EPwq7j4LddQTIXKssfRpFGBripLtneg6l6On2HnaFOwad8JiIEZKGRW0igeSLE4y7yF8RGj5aelT4BAS7FR1j8wZjFk7LOP3YQdbwaS8+PfqE55iXBHikD5DcZJcycABlJHiQ0AzOI1E4DUTWgm3MZVE8hqnXOLieWiFDqVwVzE3z+RAtvlkMButpERF5WnVAmrmq1EugHAHQOkW6XJAZYCzCxZY1wGMMfePfpN1jPwr7Jn0XsKJYx/DNf+FaI0pXD180/cHHtJ2xFqK6pR/fx5N70RkJtxUrpuQJ5CwApAYCZ3nMYDVYSY1RaxE6z/ZkQ2a5cUEN4AtSOYn45QTvub9wnLThlM5skfr0hHd6Q+ys5sI9YvCBtnA48ToVZDXRLVS4DOQ2xwd0v0P1jPwjOHApOmEOes7rZygXs592GqVfu2H/ekIiXS+KMctvFsnWyQY/NTmqdK1XwueZ4sqIoA3wLQgsHysof1Iusu5hZsm/CYciE0tlh7njpmKLIe1hPPQP7XexoUla7VdTvTSIp0TB3pBaQXrVcBmMFX01gVcictjA+hz0O31LGXxwKtC54G40HGPK75E4H2WLTXW1QbGUm8tf3KJAroi09VXrivWd6/dQpFw6d4nUh7Dlbihr7lyDRCVjFnzDc0GtUph2Z9rIcgrJhAxh4Uugv9x2hNvyZn4iTgNDCwJe8J95ojCCb4t1qwodsRNRmhs0YB8S5DvV7RvFUwPl+yrlO3C4FOQ8/TD9LXCUJ7zG9FWeXSYRJ0GZ6iDiwts5/cl427NrOYoJzgG6jMHa/Y5wsVLMQLta0D3lJqk4+ycZfTZBTrrn26EDzHonXdCvlkqfJ4ZCkr1YplA+q/TBsc9IH1F/Fu8wx/5Q8OX/Vv2sPRjFZ3feA6ig4GuN8CbOvvRYAvu98UnChoMfGy5/4LPvuSfK5n/gFEf5dUj5TSQwAAAABJRU5ErkJggg==";

var css$12 = ".Icon-module_withBackground__EomNm {\n  position: absolute;\n  z-index: 2;\n}\n\n.Icon-module_background__pjquz {\n  position: absolute;\n  z-index: 1;\n  height: 20.8px;\n  height: 20.8px;\n  height: 1.3rem;\n}\n\n.Icon-module_withBackground__EomNm.Icon-module_left__2QZ0s {\n  margin-left: 10px;\n}\n";
var s$12 = {"withBackground":"Icon-module_withBackground__EomNm","background":"Icon-module_background__pjquz","left":"Icon-module_left__2QZ0s"};
styleInject(css$12);

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
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

var Icon = function Icon(_ref2) {
  var variant = _ref2.variant,
      position = _ref2.position,
      src = _ref2.src,
      name = _ref2.name,
      children = _ref2.children,
      Component = _ref2.IconComponent,
      containerProps = _objectWithoutProperties(_ref2, ["variant", "position", "src", "name", "children", "IconComponent"]);

  var hasBackground = !!BackgroundImages[variant];
  return React__default.createElement("span", containerProps, hasBackground ? React__default.createElement("img", {
    src: BackgroundImages[variant],
    alt: "icon background",
    className: s$12.background
  }) : null, React__default.createElement(Component, {
    src: src,
    name: name,
    className: [hasBackground ? s$12.withBackground : undefined, position ? s$12[position] : undefined].join(' ')
  }, children));
};

Icon.defaultProps = {
  src: undefined,
  name: undefined,
  className: undefined,
  variant: Backgrounds.none,
  position: null,
  children: null,
  IconComponent: IconComponent$1
};
Icon.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(Backgrounds)),
  position: PropTypes.oneOfType([null, PropTypes.oneOf(Positions)]),
  children: PropTypes.arrayOf(PropTypes.element),
  IconComponent: PropTypes.func
};

var css$13 = ".DateTimePicker-module_calendar__1m3vk {\n  position: relative;\n  width: 100%;\n  height: 300px;\n}\n\n.DateTimePicker-module_calendarArrow__SvtwN {\n  display: none;\n}\n\n.DateTimePicker-module_datePickerPopper__2V2oe {\n  -webkit-transform: none !important;\n          transform: none !important;\n  width: 100%;\n  margin-top: 0 !important;\n}\n\n.DateTimePicker-module_hidden__OvFBm {\n  display: none !important;\n}\n\n.DateTimePicker-module_pickerSuggestions__38iqg {\n  width: 620px !important;\n  margin-left: -300px;\n  left: 50%\n}\n\n.DateTimePicker-module_pickerSuggestions__38iqg:before {\n  display: none;\n}\n\n.DateTimePicker-module_suggestionsArrow__2RcKh {\n  margin-left: -19px;\n}\n\n.DateTimePicker-module_picker__3d7nO {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP {\n  background: none;\n  padding-left: 40px;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.datePickerInput::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.datePickerInput::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_datePickerInput__1JwcP::placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_fixedWidthDateInput__3lrKo {\n  max-width: 160px;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU {\n  border: none !important;\n  max-width: 100px;\n  padding-left: 35px;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.timePickerInput::-webkit-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.timePickerInput::-ms-input-placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_timePickerInput__1vkhU::placeholder {\n  color: #939baa;\n  font-style: italic;\n}\n\n.DateTimePicker-module_timePickerInputContainer__ROeTv {\n  margin-left: 10px;\n}\n\n.DateTimePicker-module_timePickerInputContainer__ROeTv::before {\n  background-color: rgba(191, 196, 212, .52);\n  content: '';\n  height: 20px;\n  margin-top: -10px;\n  position: absolute;\n  top: 50%;\n  width: 1px;\n}\n\n.DateTimePicker-module_timeSuggestions__3aCiQ {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: relative\n}\n\n.DateTimePicker-module_timeSuggestions__3aCiQ:before, .DateTimePicker-module_timeSuggestions__3aCiQ:after {\n  content: '';\n  height: 20px;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n}\n\n.DateTimePicker-module_timeSuggestions__3aCiQ:before {\n  background: -webkit-gradient(linear, left top, left bottom, from(#fefefe), to(rgba(255, 255, 255, .1)));\n  background: linear-gradient(to bottom, #fefefe, rgba(255, 255, 255, .1));\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  top: 0;\n}\n\n.DateTimePicker-module_timeSuggestions__3aCiQ:after {\n  background: -webkit-gradient(linear, left bottom, left top, from(#fefefe), to(rgba(255, 255, 255, .1)));\n  background: linear-gradient(to top, #fefefe, rgba(255, 255, 255, .1));\n  bottom: 0;\n}\n\n.DateTimePicker-module_timeSuggestionsContainer__3Pe8K:nth-child(1) {\n  width: 300px;\n  min-width: 300px;\n}\n\n.DateTimePicker-module_timeSuggestionsContainer__3Pe8K {\n  width: 100%;\n}\n\n.DateTimePicker-module_inputIcon__178Nw {\n  font-size: 19.2px;\n  font-size: 19.2px;\n  font-size: 1.2rem;\n  left: 10px;\n}\n\n.DateTimePicker-module_inputContainer__1FIAJ {\n  padding: 0;\n}\n\n.DateTimePicker-module_splitInputContainer__1fsjs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 50%\n}\n\n.DateTimePicker-module_splitInputContainer__1fsjs:first-child {\n  border-right: 1px solid rgba(191, 196, 212, .52);\n}\n\n.DateTimePicker-module_month__2AwNj {\n  color: #163457;\n}\n\n.DateTimePicker-module_hr__1p2EJ {\n  height: 85%;\n  width: 1px;\n  position: absolute;\n  left: 300px;\n  background-color: rgba(191, 196, 212, .52);\n  top: 7.5%;\n}\n";
var s$13 = {"calendar":"DateTimePicker-module_calendar__1m3vk","calendarArrow":"DateTimePicker-module_calendarArrow__SvtwN","datePickerPopper":"DateTimePicker-module_datePickerPopper__2V2oe","hidden":"DateTimePicker-module_hidden__OvFBm","pickerSuggestions":"DateTimePicker-module_pickerSuggestions__38iqg","suggestionsArrow":"DateTimePicker-module_suggestionsArrow__2RcKh","picker":"DateTimePicker-module_picker__3d7nO","datePickerInput":"DateTimePicker-module_datePickerInput__1JwcP","fixedWidthDateInput":"DateTimePicker-module_fixedWidthDateInput__3lrKo","timePickerInput":"DateTimePicker-module_timePickerInput__1vkhU","timePickerInputContainer":"DateTimePicker-module_timePickerInputContainer__ROeTv","timeSuggestions":"DateTimePicker-module_timeSuggestions__3aCiQ","timeSuggestionsContainer":"DateTimePicker-module_timeSuggestionsContainer__3Pe8K","inputIcon":"DateTimePicker-module_inputIcon__178Nw","inputContainer":"DateTimePicker-module_inputContainer__1FIAJ","splitInputContainer":"DateTimePicker-module_splitInputContainer__1fsjs","month":"DateTimePicker-module_month__2AwNj","hr":"DateTimePicker-module_hr__1p2EJ"};
styleInject(css$13);

var TextsType$7 = PropTypes.shape({
  startPlaceholder: PropTypes.string,
  endPlaceholder: PropTypes.string,
  timePlaceholder: PropTypes.string
});
var DefaultTexts$7 = {
  startPlaceholder: 'Départ',
  endPlaceholder: 'Retour',
  timePlaceholder: 'Heure'
};

var css$14 = ".TimeSuggestions-module_container__1FI_D {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.TimeSuggestions-module_timeContainer__cmXVx {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.TimeSuggestions-module_timeDescription__1KSio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 70%;\n  text-align: right;\n  padding-right: 15px;\n  padding-top: 20px;\n}\n\n.TimeSuggestions-module_timeDescriptionTitle__1CASr {\n  font-weight: bold;\n}\n";
var s$14 = {"container":"TimeSuggestions-module_container__1FI_D","timeContainer":"TimeSuggestions-module_timeContainer__cmXVx","timeDescription":"TimeSuggestions-module_timeDescription__1KSio","timeDescriptionTitle":"TimeSuggestions-module_timeDescriptionTitle__1CASr"};
styleInject(css$14);

var TimeSuggestions = function TimeSuggestions(_ref) {
  var className = _ref.className,
      texts = _ref.texts,
      onSelect = _ref.onSelect,
      startMinutes = _ref.startMinutes,
      startHour = _ref.startHour,
      endMinutes = _ref.endMinutes,
      endHour = _ref.endHour,
      containerClassName = _ref.containerClassName;

  var onSelectStartTime = function onSelectStartTime(timeUnits, value) {
    return onSelect(TimeSuggestions.startTime, timeUnits, value);
  };

  var onSelectEndTime = function onSelectEndTime(timeUnits, value) {
    return onSelect(TimeSuggestions.endTime, timeUnits, value);
  };

  return React__default.createElement("div", {
    className: [s$14.container, className].join(' ')
  }, React__default.createElement("div", {
    className: [s$14.timeContainer, containerClassName].join(' ')
  }, React__default.createElement("div", {
    className: s$14.timeDescription
  }, React__default.createElement("span", {
    className: s$14.timeDescriptionTitle
  }, texts.fromTimeTitle), React__default.createElement("span", null, texts.fromTimeFirstDescription), React__default.createElement("span", null, texts.fromTimeSecondDescription)), React__default.createElement(TimeRange, {
    onSelect: onSelectStartTime,
    hour: startHour,
    minutes: startMinutes,
    minutesInterval: 5
  })), React__default.createElement("div", {
    className: [s$14.timeContainer, containerClassName].join(' ')
  }, React__default.createElement("div", {
    className: s$14.timeDescription
  }, React__default.createElement("span", {
    className: s$14.timeDescriptionTitle
  }, texts.toTimeTitle), React__default.createElement("span", null, texts.toTimeFirstDescription), React__default.createElement("span", null, texts.toTimeSecondDescription)), React__default.createElement(TimeRange, {
    onSelect: onSelectEndTime,
    hour: endHour,
    minutes: endMinutes,
    minutesInterval: 5
  })));
};

TimeSuggestions.defaultProps = {
  className: undefined,
  onSelect: function onSelect() {
    return null;
  },
  texts: {
    fromTimeTitle: 'Départ',
    fromTimeFirstDescription: 'Heure d\'arrivée',
    fromTimeSecondDescription: 'de votre avion',
    toTimeTitle: 'Retour',
    toTimeFirstDescription: 'Heure d\'arrivée',
    toTimeSecondDescription: 'au dépose minute'
  },
  startMinutes: undefined,
  startHour: undefined,
  endMinutes: undefined,
  endHour: undefined,
  containerClassName: undefined
};
TimeSuggestions.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  onSelect: PropTypes.func,
  startMinutes: PropTypes.string,
  startHour: PropTypes.string,
  endMinutes: PropTypes.string,
  endHour: PropTypes.string,
  texts: PropTypes.shape({
    fromTimeTitle: PropTypes.string,
    fromTimeFirstDescription: PropTypes.string,
    fromTimeSecondDescription: PropTypes.string,
    toTimeTitle: PropTypes.string,
    toTimeFirstDescription: PropTypes.string,
    toTimeSecondDescription: PropTypes.string
  })
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

var now = moment();

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
          endDate = _ref.endDate;

      _this.setState(function (prevState) {
        return {
          startDate: startDate,
          endDate: endDate,
          focusedDateInput: prevState.focusedDateInput === DateTimePicker.startDate && startDate ? DateTimePicker.endDate : DateTimePicker.startDate,
          visiblePicker: prevState.visiblePicker === DateTimePicker.datePicker && endDate && startDate ? DateTimePicker.timePicker : prevState.visiblePicker,
          showTimeInputs: !!(endDate || prevState.endDate)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimeSelect", function (type, units, value) {
      var _unitsToStateVariable;

      var unitsToStateVariable = (_unitsToStateVariable = {}, _defineProperty(_unitsToStateVariable, TimeRange.minutes, type === TimeSuggestions.startTime ? 'startMinutes' : 'endMinutes'), _defineProperty(_unitsToStateVariable, TimeRange.hour, type === TimeSuggestions.startTime ? 'startHour' : 'endHour'), _unitsToStateVariable);

      _this.setState(_defineProperty({}, unitsToStateVariable[units], value));
    });

    _defineProperty(_assertThisInitialized(_this), "isDayBlocked", function (day) {
      return day.isBefore(now);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTimeFocus", function () {
      _this.ectorPicker.current.handleFocus();

      _this.setState({
        visiblePicker: DateTimePicker.timePicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderMonthElement", function (_ref2) {
      var month = _ref2.month;
      return createElement("div", {
        className: s$13.month
      }, month.format('MMMM YYYY'));
    });

    _defineProperty(_assertThisInitialized(_this), "renderDateInputLeftElement", function (_ref3) {
      var className = _ref3.className,
          props = _objectWithoutProperties(_ref3, ["className"]);

      return createElement(Icon, _extends({}, props, {
        className: [s$13.inputIcon, className].join(' '),
        src: iconCalendar
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderTimeInputLeftElement", function (_ref4) {
      var className = _ref4.className,
          props = _objectWithoutProperties(_ref4, ["className"]);

      return createElement(Icon, _extends({}, props, {
        className: [s$13.inputIcon, className].join(' '),
        src: iconClock
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderStartDateTimeInputComponent", function (_ref5) {
      var inputClassName = _ref5.className,
          inputProps = _objectWithoutProperties(_ref5, ["className"]);

      var _this$state = _this.state,
          startDate = _this$state.startDate,
          showTimeInputs = _this$state.showTimeInputs,
          startMinutes = _this$state.startMinutes,
          startHour = _this$state.startHour;
      var texts = _this.props.texts;
      return createElement("div", {
        className: s$13.splitInputContainer
      }, createElement(Input, _extends({}, inputProps, {
        onFocus: _this.handleStartDateFocus,
        className: [s$13.datePickerInput, showTimeInputs ? s$13.fixedWidthDateInput : undefined, inputClassName].join(' '),
        containerClassName: s$13.inputContainer,
        value: startDate ? startDate.format('ddd DD/MM/YYYY') : '',
        placeholder: texts.startPlaceholder,
        LeftComponent: _this.renderDateInputLeftElement
      })), showTimeInputs && createElement(Input, _extends({}, inputProps, {
        onFocus: _this.handleTimeFocus,
        containerClassName: s$13.timePickerInputContainer,
        className: [s$13.timePickerInput, inputClassName].join(' '),
        value: startHour ? "".concat(startHour, "h").concat(startMinutes || '') : '',
        placeholder: texts.timePlaceholder,
        LeftComponent: _this.renderTimeInputLeftElement
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEndDateTimeInputComponent", function (_ref6) {
      var inputClassName = _ref6.className,
          inputProps = _objectWithoutProperties(_ref6, ["className"]);

      var _this$state2 = _this.state,
          endDate = _this$state2.endDate,
          showTimeInputs = _this$state2.showTimeInputs,
          endHour = _this$state2.endHour,
          endMinutes = _this$state2.endMinutes;
      var texts = _this.props.texts;
      return createElement("div", {
        className: s$13.splitInputContainer
      }, createElement(Input, _extends({}, inputProps, {
        className: [s$13.datePickerInput, showTimeInputs ? s$13.fixedWidthDateInput : undefined, inputClassName].join(' '),
        containerClassName: s$13.inputContainer,
        onFocus: _this.handleEndDateFocus,
        value: endDate ? endDate.format('ddd DD/MM/YYYY') : '',
        placeholder: texts.endPlaceholder,
        LeftComponent: _this.renderDateInputLeftElement
      })), showTimeInputs && createElement(Input, _extends({}, inputProps, {
        containerClassName: s$13.timePickerInputContainer,
        className: [s$13.timePickerInput, inputClassName].join(' '),
        onFocus: _this.handleTimeFocus,
        value: endHour ? "".concat(endHour, "h").concat(endMinutes || '') : '',
        placeholder: texts.timePlaceholder,
        LeftComponent: _this.renderTimeInputLeftElement
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderPickerSuggestionsArrow", function (_ref7) {
      var className = _ref7.className,
          props = _objectWithoutProperties(_ref7, ["className"]);

      return createElement(Arrow, _extends({}, props, {
        className: [s$13.suggestionsArrow, className].join(' ')
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsComponent", function (_ref8) {
      var visible = _ref8.visible,
          className = _ref8.className,
          rest = _objectWithoutProperties(_ref8, ["visible", "className"]);

      var _this$state3 = _this.state,
          visiblePicker = _this$state3.visiblePicker,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate,
          focusedDateInput = _this$state3.focusedDateInput,
          startHour = _this$state3.startHour,
          startMinutes = _this$state3.startMinutes,
          endHour = _this$state3.endHour,
          endMinutes = _this$state3.endMinutes;
      return createElement(PickerSuggestions, _extends({}, rest, {
        visible: visible,
        className: [s$13.pickerSuggestions, className].join(' '),
        ArrowComponent: _this.renderPickerSuggestionsArrow
      }), visible && visiblePicker === DateTimePicker.datePicker && createElement(DayPickerRangeController, {
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
        noBorder: true,
        focusedInput: focusedDateInput,
        renderMonthElement: _this.renderMonthElement,
        isDayBlocked: _this.isDayBlocked
      }), visible && createElement("div", {
        className: s$13.hr
      }), visible && visiblePicker === DateTimePicker.timePicker && createElement(TimeSuggestions, {
        className: s$13.timeSuggestions,
        containerClassName: s$13.timeSuggestionsContainer,
        onSelect: _this.handleTimeSelect,
        startMinutes: startMinutes,
        startHour: startHour,
        endMinutes: endMinutes,
        endHour: endHour
      }));
    });

    _this.ectorPicker = createRef();
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
      var _this$state4 = this.state,
          startDate = _this$state4.startDate,
          endDate = _this$state4.endDate,
          visiblePicker = _this$state4.visiblePicker,
          startHour = _this$state4.startHour,
          startMinutes = _this$state4.startMinutes,
          endMinutes = _this$state4.endMinutes,
          endHour = _this$state4.endHour;
      var extraData = {
        visiblePicker: visiblePicker,
        startDate: startDate,
        endDate: endDate,
        startMinutes: startMinutes,
        endMinutes: endMinutes,
        startHour: startHour,
        endHour: endHour
      };
      var _this$props = this.props,
          error = _this$props.error,
          className = _this$props.className;
      return createElement(Picker, {
        ref: this.ectorPicker,
        split: true,
        extraData: extraData,
        FirstInputComponent: this.renderStartDateTimeInputComponent,
        SecondInputComponent: this.renderEndDateTimeInputComponent,
        SuggestionsComponent: this.renderSuggestionsComponent,
        className: [s$13.picker, className].join(' '),
        error: error
      });
    }
  }]);

  return DateTimePicker;
}(PureComponent);

_defineProperty(DateTimePicker, "startDate", 'startDate');

_defineProperty(DateTimePicker, "endDate", 'endDate');

_defineProperty(DateTimePicker, "timePicker", 'timePicker');

_defineProperty(DateTimePicker, "datePicker", 'datePicker');

DateTimePicker.propTypes = {
  error: PropTypes.string,
  className: PropTypes.string,
  texts: TextsType$7
};
DateTimePicker.defaultProps = {
  error: '',
  className: undefined,
  texts: DefaultTexts$7
};

var css$15 = ".TimeRange-module_container__qP7nK {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 100%;\n}\n\n.TimeRange-module_hours__9eQEI, .TimeRange-module_minutes__1mA4X {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: scroll;\n  position: relative;\n  padding: 0 5px;\n}\n\n.TimeRange-module_hour__XiHg6, .TimeRange-module_minute__32J9f {\n  min-width: 20px;\n  padding: 5px 10px;\n  text-align: center\n}\n\n.TimeRange-module_hour__XiHg6:hover, .TimeRange-module_hour__XiHg6.TimeRange-module_selected__1EEqQ, .TimeRange-module_minute__32J9f:hover, .TimeRange-module_minute__32J9f.TimeRange-module_selected__1EEqQ {\n  border-radius: 5px;\n  cursor: pointer;\n  font-weight: bolder;\n}\n\n.TimeRange-module_hour__XiHg6:hover, .TimeRange-module_minute__32J9f:hover {\n  background-color: rgb(255, 245, 204);\n}\n\n.TimeRange-module_hour__XiHg6.TimeRange-module_selected__1EEqQ, .TimeRange-module_minute__32J9f.TimeRange-module_selected__1EEqQ {\n  background-color: #ffcd02;\n}\n\n.TimeRange-module_hour__XiHg6.TimeRange-module_disabled__TxWjV, .TimeRange-module_minute__32J9f.TimeRange-module_disabled__TxWjV {\n  color: #939baa;\n}\n";
var s$15 = {"container":"TimeRange-module_container__qP7nK","hours":"TimeRange-module_hours__9eQEI","minutes":"TimeRange-module_minutes__1mA4X","hour":"TimeRange-module_hour__XiHg6","minute":"TimeRange-module_minute__32J9f","selected":"TimeRange-module_selected__1EEqQ","disabled":"TimeRange-module_disabled__TxWjV"};
styleInject(css$15);

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
      className: [selected ? s$15.selected : undefined, disabled ? s$15.disabled : undefined, className].join(' '),
      role: "presentation",
      onClick: onSelect,
      "aria-selected": selected
    }, React__default.createElement(TimeNumber, {
      value: value
    }))
  );
};

TimeElement.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

var getHoursRange = function getHoursRange(start, end) {
  return Array.from(Array(end).keys()).slice(start);
};

var getMinutesRange = function getMinutesRange(interval) {
  return Array.from(Array(60).keys()).filter(function (nbr) {
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

    _defineProperty(_assertThisInitialized(_this), "focusSelectedHour", function () {
      // eslint-disable-next-line
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.hoursContainer.current.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var child = _step.value;
          var isSelected = child.getAttribute('aria-selected');

          if (isSelected) {
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusSelectedMinutes", function () {
      // eslint-disable-next-line
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _this.minutesContainer.current.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var child = _step2.value;
          var isSelected = child.getAttribute('aria-selected');

          if (isSelected) {
            break;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderHour", function (hour) {
      var selectedHour = _this.props.hour;
      var isSelected = +selectedHour === +hour;
      return React__default.createElement(TimeElement, {
        key: "h-".concat(hour),
        className: s$15.hour,
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
        className: s$15.minute,
        value: minutes,
        selected: isSelected,
        disabled: !isSelected && typeof selectedMinutes !== 'undefined',
        onSelect: _this.handleMinutesSelect
      });
    });

    var startHour = props.startHour,
        endHour = props.endHour,
        minutesInterval = props.minutesInterval;
    _this.minutesContainer = React__default.createRef();
    _this.hoursContainer = React__default.createRef();
    _this.minutesRange = getMinutesRange(minutesInterval);
    _this.hoursRange = getHoursRange(startHour, endHour);
    return _this;
  }

  _createClass(TimeRange, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevHour = prevProps.hour,
          prevMinutes = prevProps.minutes;
      var _this$props = this.props,
          currentHour = _this$props.hour,
          currentMinutes = _this$props.minutes;

      if (prevHour !== currentHour) {
        this.focusSelectedHour();
      }

      if (prevMinutes !== currentMinutes) {
        this.focusSelectedMinutes();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.createElement("div", {
        className: s$15.container
      }, React__default.createElement("div", {
        className: s$15.hours,
        ref: this.hoursContainer
      }, this.hoursRange.map(this.renderHour)), React__default.createElement("div", {
        className: s$15.minutes,
        ref: this.minutesContainer
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
  minutes: undefined
};
TimeRange.propTypes = {
  startHour: PropTypes.number,
  endHour: PropTypes.number,
  minutesInterval: PropTypes.number,
  onSelect: PropTypes.func,
  minutes: PropTypes.string,
  hour: PropTypes.string
};

var index = './components';

export default index;
export { ActionLink, AddItemCard, Alert, AlternativeTimeCard, ApplicationCard, Arrow, BookingCard, BookingModificationSummary, BookingSteps, Button, CarCard, Card, CardTitle, CardTravelInformation, ColorPicker, ContactCard, ContactForm, DateTimePicker, GenderPicker, HtmlPrice, Icon, Input, InputButton, InputCheckbox, InputLabel, Label, LinkUnderlined, Loader, LoginForm, PaymentMethodCard, PhoneInput, Picker, PickerSuggestions, PricingSummary, RadioButton, ReferralCard, RegistrationForm, RewardCard, RideSummary, RoundedButton, Select, ServiceCard, Subtitle, TimeRange, Title, TitleStep, Tooltip, ZonesPicker };
//# sourceMappingURL=ector-ui.es.js.map
