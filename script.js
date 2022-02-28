
/*
Hands-on Project 7-4

Author: Jose Gonzalez
Date: 2/26/22   

Filename: script.js
*/

"use strict";
var delivSummary = document.getElementById("deliverTo");

function processDeliveryInfo() {
  var delivInfo = {};
  delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;
    delivInfo.innerHTML = '';
    for (var prop in delivInfo) {
      delivInfo.innerHTML += "<p>" + delivInfo[prop] + "</p>";
    }
  document.getElementById("summaryPane").insertAdjacentHTML('beforeend', delivInfo.innerHTML);
}
function previewOrder() {
    processDeliveryInfo();
    document.getElementById("summaryPane").style.display = "block";
}
function createEventListener() {
    var previewButton = document.getElementById("previewBtn");
    if (previewButton.addEventListener) {
        previewButton.addEventListener("click", previewOrder, false);
    } else if (previewButton.attachEvent) {
        previewButton.attachEvent("onclick", previewOrder);
    }
}
if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}