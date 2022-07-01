Blockly.Python['fp_encoder'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_pin_a = block.getFieldValue('PIN_A');
  var dropdown_pin_b = block.getFieldValue('PIN_B');
  var checkbox_reversed = block.getFieldValue('REVERSED') === 'TRUE';
  var code = `enc.encoder(a=board${dropdown_pin_a}, b=board.${dropdown_pin_a}, ticksPerRev=144, doFlip=${checkbox_reversed ? 'True' : 'False'})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fp_motor'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  var dropdown_pin_a = block.getFieldValue('PIN_A');
  var dropdown_pin_b = block.getFieldValue('PIN_B');
  var checkbox_reversed = block.getFieldValue('REVERSED') === 'TRUE';
  var value_encoder = Blockly.Python.valueToCode(block, 'ENCODER', Blockly.Python.ORDER_ATOMIC);
  var value_encoder = Blockly.Python.valueToCode(block, 'ENCODER', Blockly.Python.ORDER_ATOMIC);
  var code = `em.encoded_motor(encL, board.${dropdown_pin_a}, board.${dropdown_pin_b}, ${text_name}, doFlip=${checkbox_reversed ? 'True' : 'False'})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fp_drivebase'] = function (block) {
  var text_name = block.getFieldValue('NAME');
  var value_motor_1 = Blockly.Python.valueToCode(block, 'MOTOR_1', Blockly.Python.ORDER_ATOMIC);
  var value_motor_2 = Blockly.Python.valueToCode(block, 'MOTOR_2', Blockly.Python.ORDER_ATOMIC);
  // var value_motor_1 = block.inputList[0].connection.targetBlock().getFieldValue('NAME');
  // var value_motor_2 = block.inputList[1].connection.targetBlock().getFieldValue('NAME');
  var code = `drv.drive(${value_motor_1}, ${value_motor_2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fp_drivebase_effort'] = function (block) {
  var number_effort1 = block.getFieldValue('EFFORT1');
  var number_effort2 = block.getFieldValue('EFFORT2');
  var value_drivebase = Blockly.Python.valueToCode(block, 'DRIVEBASE', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_drivebase}.setEffort(${number_effort1}, ${number_effort2})`;;
  return code;
};

Blockly.Python['fp_getpos'] = function (block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_name}.getPos()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['fp_reset_drivebase'] = function (block) {
  var value_drivebase = Blockly.Python.valueToCode(block, 'DRIVEBASE', Blockly.Python.ORDER_ATOMIC);
  var code = `${value_drivebase}.setPos()`;
  return code;
};