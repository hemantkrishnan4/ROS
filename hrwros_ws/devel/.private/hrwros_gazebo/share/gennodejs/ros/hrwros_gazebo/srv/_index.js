
"use strict";

let ConveyorBeltControl = require('./ConveyorBeltControl.js')
let AGVControl = require('./AGVControl.js')
let VacuumGripperControl = require('./VacuumGripperControl.js')
let GetMaterialLocations = require('./GetMaterialLocations.js')
let PopulationControl = require('./PopulationControl.js')
let SubmitTray = require('./SubmitTray.js')

module.exports = {
  ConveyorBeltControl: ConveyorBeltControl,
  AGVControl: AGVControl,
  VacuumGripperControl: VacuumGripperControl,
  GetMaterialLocations: GetMaterialLocations,
  PopulationControl: PopulationControl,
  SubmitTray: SubmitTray,
};
