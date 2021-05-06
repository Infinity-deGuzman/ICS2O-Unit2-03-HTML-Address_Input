// Copyright (c) 2021 Infinity de Guzman All rights reserved
//
// Created by: Infinity de Guzman
// Created on: May 2021
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets users street number and street name and shows it back to user

  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById('address').innerHTML = 'Your address is: ' + streetNumber + ' ' + streetName + '.'
}
