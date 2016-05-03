/**
 * A keypad that includes the basic digits. No frills.
 */

const React = require('react');

const { View } = require('../fake-react-native-web');
const Keypad = require('./keypad');
const TouchableKeypadButton = require('./touchable-keypad-button');
const { row } = require('./styles');
const { borderStyles } = require('../consts');

const KeyConfigs = require('../data/key-configs');

const NumberKeypad = React.createClass({
    render() {
        return <Keypad>
            <View style={row}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.NUM_7}
                    borders={borderStyles.BOTTOM}
                />
                <TouchableKeypadButton keyConfig={KeyConfigs.NUM_8} />
                <TouchableKeypadButton keyConfig={KeyConfigs.NUM_9} />
            </View>
            <View style={row}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.NUM_4}
                    borders={borderStyles.BOTTOM}
                />
                <TouchableKeypadButton keyConfig={KeyConfigs.NUM_5} />
                <TouchableKeypadButton keyConfig={KeyConfigs.NUM_6} />
            </View>
            <View style={row}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.NUM_1}
                    borders={borderStyles.BOTTOM}
                />
                <TouchableKeypadButton keyConfig={KeyConfigs.NUM_2} />
                <TouchableKeypadButton keyConfig={KeyConfigs.NUM_3} />
            </View>
            <View style={row}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.BACKSPACE}
                    borders={borderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.NUM_0}
                    borders={borderStyles.LEFT}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.DISMISS}
                    borders={borderStyles.LEFT}
                />
            </View>
        </Keypad>;
    },
});

module.exports = NumberKeypad;