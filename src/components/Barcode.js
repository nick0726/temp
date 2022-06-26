import React, { useEffect } from "react";
import bwipjs from "bwip-js";

function Barcode() {
  useEffect(() => {
    try {
      // The return value is the canvas element
      let canvas = bwipjs.toCanvas("mycanvas", {
        bcid: "gs1-128", // Barcode type
        text: "(01)08809881090009(10)100022ZS25(21)NRES22ZS0001", // Text to encode
        scale: 1, // 3x scaling factor
        height: 13, // Bar height, in millimeters
        includetext: true, // Show human-readable text
        textxalign: "center", // Always good to set this
      });
    } catch (e) {
      // `e` may be a string or Error object
    }
  });
  return (
    <>
      <canvas id='mycanvas'></canvas>
    </>
  );
}
export default Barcode;
