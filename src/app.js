const React = require('react');
const { Provider } = require('react-redux');

const MathInput = require('./math-input');
const MathKeyboard = require('./math-keyboard');
const store = require('./store');

const App = React.createClass({
    render() {
        return <div>
            <MathInput currentValue="1+2"/>
            <Provider store={store}>
                <MathKeypad />
            </Provider>
        </div>;
    }
});

module.exports = App;
