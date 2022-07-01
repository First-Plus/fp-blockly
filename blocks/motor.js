// Blockly.Blocks["motor_init"] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Motor")
//             .appendField(new Blockly.FieldDropdown([["A", "A"], ["B", "B"]]), "PORT")
//             .appendField(new Blockly.FieldTextInput("motor"), "NAME")
//             .appendField(new Blockly.FieldCheckbox("FALSE"), "REVERSE");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setColour(Blockly.Msg.MOTOR_HUE);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['fp_motor'] = {
//     init: function () {
//         this.appendDummyInput().appendField("motor");
//         this.setColour(3);
//         this.setOutput(true, "Boolean");
//     }
// }


// Blockly.Python["motor_init"] = function (block) {
//     var dropdown_port = block.getFieldValue("PORT");
//     var text_name = block.getFieldValue("NAME");
//     var checked = block.getFieldValue("REVERSE") == "TRUE";
//     var code = `motor${dropdown_port} = Motor(${text_name}, ${checked})`;
//     return code;
// }