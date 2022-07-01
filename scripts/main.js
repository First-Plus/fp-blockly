var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    { 'toolbox': document.getElementById('toolbox'), });
var onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

/* Load blocks to workspace. */
var workspaceBlocks = document.getElementById("workspaceBlocks");
if (workspaceBlocks) {
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
}


function myUpdateFunction(event) {
    var code = Blockly.Python.workspaceToCode(workspace);
    processCode(code);
    document.getElementById('codeLine').innerHTML = code;
}
// workspace.addChangeListener(myUpdateFunction);


/* Code Cleaning and Formatting */
function processCode(code) {
    console.log("Processing Code");
    if (code.includes('encoded_motor')) {
        console.log("Found encoded_motor");
    }
    // TODO: Add code cleaning and formatting here
}

// const createFlyoutSensor = function (workspace) {
//     let xmlList = [];
//     // Add your button and give it a callback name.
//     const button = document.createElement('button');
//     button.setAttribute('text', 'Create Sensor');
//     button.setAttribute('callbackKey', 'callbackName');

//     xmlList.push(button);

//     // This gets all the variables that the user creates and adds them to the
//     // flyout.
//     const blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);
//     xmlList = xmlList.concat(blockList);
//     return xmlList;
// };

// workspace.registerToolboxCategoryCallback('CREATE_SENSOR_CAT', createFlyoutSensor);

// const typedVarModalSensor = new TypedVariableModal(workspace, 'callbackName',
//     [
//         ["LINE_FOLLOW_SENSOR", "Line Follow Sensor"],
//         ["ULTRASONIC_SENSOR", "Ultrasonic Sensor"],
//         ["ANALOG_SENSOR", "Analog Sensor"]
//     ]);
// typedVarModalSensor.init();


// const createFlyoutMotor = function (workspace) {
//     let xmlList = [];
//     // Add your button and give it a callback name.
//     const button = document.createElement('button');
//     button.setAttribute('text', 'Create Motor');
//     button.setAttribute('callbackKey', 'callbackName');

//     xmlList.push(button);

//     // This gets all the variables that the user creates and adds them to the
//     // flyout.
//     const blockList = Blockly.VariablesDynamic.flyoutCategoryBlocks(workspace);
//     xmlList = xmlList.concat(blockList);
//     xmlList.push({
//         'kind': 'block',
//         'type': 'motor_init',
//     })

//     return xmlList;
// };

// workspace.registerToolboxCategoryCallback('CREATE_MOTOR_CAT', createFlyoutMotor);

// const typedVarModalMotor = new TypedVariableModal(workspace, 'callbackName',
//     [
//         ["M1", "Motor1"],
//         ["M2", "Motor2"],
//     ]);
// typedVarModalMotor.init();