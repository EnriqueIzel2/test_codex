import { describe, expect, it } from "vitest";
import { intersects } from "../pages/Exercice2/utils";

const recA = [3, 5, 11, 11];
const recB = [7, 2, 13, 7];
const recC = [11, 11, 13, 13];

describe("check if two rectangles intersect", () => {
  it("should return true if the rectangle A intersects the rectangle B", () => {
    expect(intersects(recA, recB)).toBe(true);
  });

  it("should return true if the rectangle A intersects the rectangle C", () => {
    expect(intersects(recA, recB)).toBe(true);
  });

  it("should return false if the rectangle B doesn't intersect the rectangle C", () => {
    expect(intersects(recB, recC)).toBe(true);
  });
});
