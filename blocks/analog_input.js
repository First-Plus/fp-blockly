Blockly.Blocks['analog_input'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Analog Input:")
      .appendField(new Blockly.FieldTextInput("analog_in"), "NAME")
      .appendField("Pin:")
      .appendField(new Blockly.FieldDropdown([["GP2", "GP2"], ["GP3", "GP3"], ["GP4", "GP4"], ["GP5", "GP5"], ["A1", "A1"], ["A0", "A0"]]), "PIN");
    this.setColour(290);
    this.setTooltip("Name your analog input and select a pin");
    this.setHelpUrl("");
  }
};

Blockly.Python['analog_input'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_pin = block.getFieldValue('PIN');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};