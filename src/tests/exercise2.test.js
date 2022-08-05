import { describe, expect, it } from "vitest";

import { intersects, RectanglePoints } from "../pages/Exercise2/utils";

const recA = new RectanglePoints([3, 5, 11, 11]);
const recB = new RectanglePoints([7, 2, 13, 7]);
const recC = new RectanglePoints([11, 11, 13, 13]);
const recD = new RectanglePoints([5, 5, 7, 7]);
const recE = new RectanglePoints([6, 15, 8, 8]);

describe("check if two rectangles intersect", () => {
  it("should return true if the rectangle A intersects the rectangle B", () => {
    expect(intersects(recA, recB)).toBe(true);
  });

  it("should return true if the rectangle A intersects the rectangle C", () => {
    expect(intersects(recA, recB)).toBe(true);
  });

  it("should return false if the rectangle B doesn't intersect the rectangle C", () => {
    expect(intersects(recB, recC)).toBe(false);
  });

  it("should return false if the rectangle D doesn't intersect the rectangle E", () => {
    expect(intersects(recD, recE)).toBe(false);
  });
});
