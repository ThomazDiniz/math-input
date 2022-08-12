'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropTypes = require('prop-types');
/**
 * An autogenerated component that renders the EXP_3 iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Exp3 = function (_React$Component) {
    _inherits(Exp3, _React$Component);

    function Exp3() {
        _classCallCheck(this, Exp3);

        return _possibleConstructorReturn(this, (Exp3.__proto__ || Object.getPrototypeOf(Exp3)).apply(this, arguments));
    }

    _createClass(Exp3, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { width: '48', height: '48', viewBox: '0 0 48 48' },
                React.createElement(
                    'g',
                    { fill: 'none', fillRule: 'evenodd' },
                    React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                    React.createElement('path', { d: 'M14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22zM30.92 23.12c1.66 0 2.76-.81 2.76-1.98 0-.96-.86-1.51-1.57-1.58.79-.13 1.46-.72 1.46-1.5 0-1.1-.95-1.83-2.65-1.83-1.23 0-2.11.45-2.67 1.08l.83 1.08c.47-.42 1.05-.64 1.66-.64.64 0 1.12.19 1.12.61 0 .35-.39.52-1.08.52-.25 0-.77 0-.9-.01v1.53c.1-.01.61-.01.9-.01.91 0 1.19.18 1.19.56 0 .37-.38.65-1.12.65-.58 0-1.34-.23-1.82-.7l-.87 1.17c.52.6 1.48 1.05 2.76 1.05z', fill: this.props.color })
                )
            );
        }
    }]);

    return Exp3;
}(React.Component);

Exp3.propTypes = {
    color: PropTypes.string.isRequired
};


module.exports = Exp3;