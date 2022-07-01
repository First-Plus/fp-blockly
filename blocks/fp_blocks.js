Blockly.Blocks['fp_encoder'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Encoder:")
      .appendField(new Blockly.FieldTextInput("myEncoder"), "NAME")
      .appendField(new Blockly.FieldDropdown([["GP2", "GP2"], ["GP3", "GP3"], ["GP4", "GP4"], ["GP5", "GP5"]]), "PIN_A")
      .appendField(new Blockly.FieldDropdown([["GP2", "GP2"], ["GP3", "GP3"], ["GP4", "GP4"], ["GP5", "GP5"]]), "PIN_B")
      .appendField("Reversed?")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "REVERSED");
    this.setOutput(true, null);
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fp_motor'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Motor:")
      .appendField(new Blockly.FieldTextInput("myMotor"), "NAME")
      .appendField(new Blockly.FieldDropdown([["GP8", "GP8"], ["GP9", "GP9"], ["GP10", "GP10"], ["GP11", "GP11"]]), "PIN_A")
      .appendField(new Blockly.FieldDropdown([["GP8", "GP8"], ["GP9", "GP9"], ["GP10", "GP10"], ["GP11", "GP11"]]), "PIN_B")
      .appendField("Reversed?")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "REVERSED");
    this.appendValueInput("ENCODER")
      .setCheck("fp_encoder")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Encoder");
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip("Add encoder block");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fp_drivebase'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Drivebase:")
      .appendField(new Blockly.FieldTextInput("myDrivebase"), "NAME");
    this.appendValueInput("MOTOR_1")
      .setCheck("fp_motor")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Motor 1");
    this.appendValueInput("MOTOR_2")
      .setCheck("fp_motor")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Motor 2");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['fp_motor_pos'] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("fp_motor")
      .appendField("Get Position");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};