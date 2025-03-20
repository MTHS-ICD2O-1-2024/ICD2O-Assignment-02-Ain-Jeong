// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Do math
 */
function calculateVolumeOfCuboid() {
  // input
  const cuboidLength = parseFloat(document.getElementById("length").value)
  const cuboidWidth = parseFloat(document.getElementById("width").value)
  const cuboidHeight = parseFloat(document.getElementById("height").value)

  // calculate volume
  const volume = cuboidLength * cuboidWidth * cuboidHeight

  // output
  document.getElementById("volume-of-cuboid").innerHTML =
    "If your cuboid has the length of " +
    cuboidLength +
    " cm, the width of " +
    cuboidWidth +
    " cm, and the height of " +
    cuboidHeight +
    " cm, the volume of your cuboid is: " +
    volume +
    " cm³"
}
