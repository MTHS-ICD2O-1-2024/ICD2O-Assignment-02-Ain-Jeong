// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Do math
 */
function enterClicked() {
  // input
  const triangleHeight = parseInt(document.getElementById("height").value)
  const triangleBase = parseInt(document.getElementById("base").value)

  // calculate area
  const area = (triangleHeight * triangleBase) / 2

  // output
  document.getElementById("math").innerHTML =
    "Your right triangle's area is: " + area + "cm²"
}
