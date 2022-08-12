'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
/**
 * An autogenerated component that renders the EXP_2 iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Exp2 = function (_React$Component) {
    _inherits(Exp2, _React$Component);

    function Exp2() {
        _classCallCheck(this, Exp2);

        return _possibleConstructorReturn(this, (Exp2.__proto__ || Object.getPrototypeOf(Exp2)).apply(this, arguments));
    }

    _createClass(Exp2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { width: '48', height: '48', viewBox: '0 0 48 48' },
                React.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                    React.createElement('path', { d: 'M14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22zM33.67 23v-1.5h-2.44c1.66-1.16 2.39-2.03 2.39-3.05 0-1.34-1.13-2.22-2.7-2.22-.93 0-1.99.33-2.7 1.11l.95 1.14c.48-.45 1.04-.73 1.78-.73.49 0 .92.24.92.7 0 .66-.54 1.12-3.43 3.21V23h5.23z', fill: this.props.color })
                )
            );
        }
    }]);

    return Exp2;
}(React.Component);

Exp2.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = Exp2;