function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import * as React from 'react';
import { TabRouter, StackActions, SceneView, createNavigator, SwitchActions } from 'react-navigation';
export default function createTabNavigator(TabView) {
  class NavigationView extends React.Component {
    constructor() {
      super(...arguments);
      _defineProperty(this, "_renderScene", _ref => {
        let {
          route
        } = _ref;
        const {
          screenProps,
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const TabComponent = descriptor.getComponent();
        return /*#__PURE__*/React.createElement(SceneView, {
          screenProps: screenProps,
          navigation: descriptor.navigation,
          component: TabComponent
        });
      });
      _defineProperty(this, "_renderIcon", _ref2 => {
        let {
          route,
          focused,
          tintColor,
          horizontal = false
        } = _ref2;
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        if (options.tabBarIcon) {
          return typeof options.tabBarIcon === 'function' ? options.tabBarIcon({
            focused,
            tintColor,
            horizontal
          }) : options.tabBarIcon;
        }
        return null;
      });
      _defineProperty(this, "_getLabelText", _ref3 => {
        let {
          route
        } = _ref3;
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        if (options.tabBarLabel) {
          return options.tabBarLabel;
        }
        if (typeof options.title === 'string') {
          return options.title;
        }
        return route.routeName;
      });
      _defineProperty(this, "_getAccessibilityLabel", _ref4 => {
        let {
          route
        } = _ref4;
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        if (typeof options.tabBarAccessibilityLabel !== 'undefined') {
          return options.tabBarAccessibilityLabel;
        }
        const label = this._getLabelText({
          route
        });
        if (typeof label === 'string') {
          const {
            routes
          } = this.props.navigation.state;
          return `${label}, tab, ${routes.indexOf(route) + 1} of ${routes.length}`;
        }
        return undefined;
      });
      _defineProperty(this, "_getTestID", _ref5 => {
        let {
          route
        } = _ref5;
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const options = descriptor.options;
        return options.tabBarTestID;
      });
      _defineProperty(this, "_makeDefaultHandler", _ref6 => {
        let {
          route,
          navigation
        } = _ref6;
        return () => {
          if (navigation.isFocused()) {
            if (route.hasOwnProperty('index') && route.index > 0) {
              // If current tab has a nested navigator, pop to top
              navigation.dispatch(StackActions.popToTop({
                key: route.key
              }));
            } else {
              navigation.emit('refocus');
            }
          } else {
            this._jumpTo(route.routeName);
          }
        };
      });
      _defineProperty(this, "_handleTabPress", _ref7 => {
        let {
          route
        } = _ref7;
        this._isTabPress = true;

        // After tab press, handleIndexChange will be called synchronously
        // So we reset it in promise callback
        Promise.resolve().then(() => this._isTabPress = false);
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const {
          navigation,
          options
        } = descriptor;
        const defaultHandler = this._makeDefaultHandler({
          route,
          navigation
        });
        if (options.tabBarOnPress) {
          options.tabBarOnPress({
            navigation,
            defaultHandler
          });
        } else {
          defaultHandler();
        }
      });
      _defineProperty(this, "_handleTabLongPress", _ref8 => {
        let {
          route
        } = _ref8;
        const {
          descriptors
        } = this.props;
        const descriptor = descriptors[route.key];
        const {
          navigation,
          options
        } = descriptor;
        const defaultHandler = this._makeDefaultHandler({
          route,
          navigation
        });
        if (options.tabBarOnLongPress) {
          options.tabBarOnLongPress({
            navigation,
            defaultHandler
          });
        } else {
          defaultHandler();
        }
      });
      _defineProperty(this, "_handleIndexChange", index => {
        if (this._isTabPress) {
          this._isTabPress = false;
          return;
        }
        this._jumpTo(this.props.navigation.state.routes[index].routeName);
      });
      _defineProperty(this, "_jumpTo", routeName => {
        const {
          navigation
        } = this.props;
        navigation.dispatch(SwitchActions.jumpTo({
          routeName,
          key: navigation.state.key
        }));
      });
      _defineProperty(this, "_isTabPress", false);
    }
    render() {
      const {
        descriptors,
        navigation,
        screenProps,
        navigationConfig
      } = this.props;
      const {
        state
      } = navigation;
      const route = state.routes[state.index];
      const descriptor = descriptors[route.key];
      return (
        /*#__PURE__*/
        // TODO: don't have time to fix it right now
        // @ts-ignore
        React.createElement(TabView, _extends({}, navigationConfig, descriptor.options, {
          getLabelText: this._getLabelText,
          getAccessibilityLabel: this._getAccessibilityLabel,
          getTestID: this._getTestID,
          renderIcon: this._renderIcon,
          renderScene: this._renderScene,
          onIndexChange: this._handleIndexChange,
          onTabPress: this._handleTabPress,
          onTabLongPress: this._handleTabLongPress,
          navigation: navigation,
          descriptors: descriptors,
          screenProps: screenProps
        }))
      );
    }
  }
  return function (routes) {
    let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const router = TabRouter(routes, config);
    return createNavigator(NavigationView, router, config);
  };
}
//# sourceMappingURL=createTabNavigator.js.map