"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _reactNativeTabView = require("react-native-tab-view");
var _createTabNavigator = _interopRequireDefault(require("../utils/createTabNavigator"));
var _MaterialTopTabBar = _interopRequireDefault(require("../views/MaterialTopTabBar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class MaterialTabView extends React.PureComponent {
  constructor() {
    super(...arguments);
    _defineProperty(this, "renderTabBar", props => {
      const {
        state
      } = this.props.navigation;
      const route = state.routes[state.index];
      const {
        descriptors
      } = this.props;
      const descriptor = descriptors[route.key];
      const options = descriptor.options;
      const tabBarVisible = options.tabBarVisible == null ? true : options.tabBarVisible;
      const {
        navigation,
        getLabelText,
        getAccessibilityLabel,
        getTestID,
        renderIcon,
        onTabPress,
        onTabLongPress,
        tabBarComponent: TabBarComponent = _MaterialTopTabBar.default,
        tabBarPosition,
        tabBarOptions,
        screenProps
      } = this.props;
      if (TabBarComponent === null || !tabBarVisible) {
        return null;
      }
      return /*#__PURE__*/React.createElement(TabBarComponent, _extends({}, tabBarOptions, props, {
        tabBarPosition: tabBarPosition,
        screenProps: screenProps,
        navigation: navigation,
        getLabelText: getLabelText,
        getAccessibilityLabel: getAccessibilityLabel,
        getTestID: getTestID,
        renderIcon: renderIcon,
        onTabPress: onTabPress,
        onTabLongPress: onTabLongPress
      }));
    });
  }
  render() {
    const {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      getLabelText,
      getAccessibilityLabel,
      getTestID,
      renderIcon,
      onTabPress,
      onTabLongPress,
      screenProps,
      tabBarComponent,
      tabBarOptions,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      lazyPlaceholderComponent,
      pagerComponent,
      navigation,
      descriptors,
      ...rest
    } = this.props;
    const {
      state
    } = navigation;
    const route = state.routes[state.index];
    const descriptor = descriptors[route.key];
    const options = descriptor.options;
    let swipeEnabled =
    // @ts-ignore
    options.swipeEnabled == null ? this.props.swipeEnabled : options.swipeEnabled;
    if (typeof swipeEnabled === 'function') {
      swipeEnabled = swipeEnabled(state);
    }
    return /*#__PURE__*/React.createElement(_reactNativeTabView.TabView, _extends({}, rest, {
      navigationState: navigation.state,
      swipeEnabled: swipeEnabled,
      renderTabBar: this.renderTabBar,
      renderLazyPlaceholder: lazyPlaceholderComponent !== undefined ? props => /*#__PURE__*/React.createElement(lazyPlaceholderComponent, props) : undefined,
      renderPager: pagerComponent !== undefined ? props => /*#__PURE__*/React.createElement(pagerComponent, props) : undefined
    }));
  }
}
var _default = (0, _createTabNavigator.default)(MaterialTabView);
exports.default = _default;
//# sourceMappingURL=createMaterialTopTabNavigator.js.map