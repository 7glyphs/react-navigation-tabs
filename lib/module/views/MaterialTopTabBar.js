function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
export default class TabBarTop extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "_renderLabel", _ref => {
      let {
        route,
        focused,
        color
      } = _ref;
      const {
        showLabel,
        upperCaseLabel,
        labelStyle,
        allowFontScaling
      } = this.props;
      if (showLabel === false) {
        return null;
      }
      const label = this.props.getLabelText({
        route
      });
      if (typeof label === 'string') {
        return /*#__PURE__*/React.createElement(Animated.Text, {
          style: [styles.label, {
            color
          }, labelStyle],
          allowFontScaling: allowFontScaling
        }, upperCaseLabel ? label.toUpperCase() : label);
      }
      if (typeof label === 'function') {
        return label({
          focused,
          tintColor: color
        });
      }
      return label;
    });
    _defineProperty(this, "_renderIcon", _ref2 => {
      let {
        route,
        focused,
        color
      } = _ref2;
      const {
        renderIcon,
        showIcon,
        iconStyle
      } = this.props;
      if (showIcon === false) {
        return null;
      }
      return /*#__PURE__*/React.createElement(View, {
        style: [styles.icon, iconStyle]
      }, renderIcon({
        route,
        focused,
        tintColor: color
      }));
    });
  }
  render() {
    const {
      navigation,
      activeTintColor,
      inactiveTintColor,
      /* eslint-disable @typescript-eslint/no-unused-vars */
      renderIcon,
      getLabelText,
      allowFontScaling,
      showLabel,
      showIcon,
      upperCaseLabel,
      tabBarPosition,
      screenProps,
      iconStyle,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...rest
    } = this.props;
    return /*#__PURE__*/React.createElement(TabBar, _extends({}, rest, {
      activeColor: activeTintColor,
      inactiveColor: inactiveTintColor,
      navigationState: navigation.state,
      renderIcon: this._renderIcon,
      renderLabel: this._renderLabel
    }));
  }
}
_defineProperty(TabBarTop, "defaultProps", {
  activeTintColor: 'rgba(255, 255, 255, 1)',
  inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
  showIcon: false,
  showLabel: true,
  upperCaseLabel: true,
  allowFontScaling: true
});
const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24
  },
  label: {
    textAlign: 'center',
    fontSize: 13,
    margin: 4,
    backgroundColor: 'transparent'
  }
});
//# sourceMappingURL=MaterialTopTabBar.js.map