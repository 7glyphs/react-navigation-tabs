"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withDimensions;
exports.isOrientationLandscape = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const isOrientationLandscape = _ref => {
  let {
    width,
    height
  } = _ref;
  return width > height;
};
exports.isOrientationLandscape = isOrientationLandscape;
function withDimensions(WrappedComponent) {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);
      _defineProperty(this, "handleOrientationChange", _ref2 => {
        let {
          window
        } = _ref2;
        const {
          width,
          height
        } = window;
        this.setState({
          dimensions: {
            width,
            height
          },
          isLandscape: isOrientationLandscape({
            width,
            height
          })
        });
      });
      const {
        width: _width,
        height: _height
      } = _reactNative.Dimensions.get('window');
      this.state = {
        dimensions: {
          width: _width,
          height: _height
        },
        isLandscape: isOrientationLandscape({
          width: _width,
          height: _height
        })
      };
    }
    componentDidMount() {
      _reactNative.Dimensions.addEventListener('change', this.handleOrientationChange);
    }
    componentWillUnmount() {
      _reactNative.Dimensions.removeEventListener('change', this.handleOrientationChange);
    }
    render() {
      // @ts-ignore
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, this.state));
    }
  }

  // @ts-ignore
  _defineProperty(EnhancedComponent, "displayName", `withDimensions(${WrappedComponent.displayName})`);
  return (0, _hoistNonReactStatics.default)(EnhancedComponent, WrappedComponent);
}
//# sourceMappingURL=withDimensions.js.map