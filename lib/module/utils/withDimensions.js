function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { Dimensions } from 'react-native';
import hoistNonReactStatic from 'hoist-non-react-statics';
export const isOrientationLandscape = _ref => {
  let {
    width,
    height
  } = _ref;
  return width > height;
};
export default function withDimensions(WrappedComponent) {
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
      } = Dimensions.get('window');
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
      Dimensions.addEventListener('change', this.handleOrientationChange);
    }
    componentWillUnmount() {
      Dimensions.removeEventListener('change', this.handleOrientationChange);
    }
    render() {
      // @ts-ignore
      return /*#__PURE__*/React.createElement(WrappedComponent, _extends({}, this.props, this.state));
    }
  }

  // @ts-ignore
  _defineProperty(EnhancedComponent, "displayName", `withDimensions(${WrappedComponent.displayName})`);
  return hoistNonReactStatic(EnhancedComponent, WrappedComponent);
}
//# sourceMappingURL=withDimensions.js.map