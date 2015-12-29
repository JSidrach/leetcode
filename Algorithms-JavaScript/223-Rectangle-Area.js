/*
Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.
(A,B): Lower left vertex of the first rectangle
(C,D): Upper right vertex of the first rectangle
(E,F): Lower left vertex of the second rectangle
(G,H): Upper right vertex of the second rectangle

Rectangle Area
Assume that the total area is never beyond the maximum possible value of int.
*/

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  'use strict';

  const A1 = (C - A) * (D - B);
  const A2 = (G - E) * (H - F);

  if ((C <= E) || (G <= A) || (H <= B) || (D <= F)) {
    return A1 + A2;
  }

  const V1X = (A < E) ? E : A;
  const V1Y = (B < F) ? F : B;
  const V2X = (C < G) ? C : G;
  const V2Y = (D < H) ? D : H;

  const A1A2 = (V2X - V1X) * (V2Y - V1Y);

  return A1 + A2 - A1A2;
};
