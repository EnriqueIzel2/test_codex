export class RectanglePoints {
  constructor(coordinates) {
    this.x1 = coordinates[0];
    this.y1 = coordinates[1];
    this.x2 = coordinates[2];
    this.y2 = coordinates[3];
  }
}

export function intersects(rec1, rec2) {
  if (rec1.x1 > rec2.x2 || rec2.x1 > rec1.x2) {
    return false;
  }
  if (rec1.y1 > rec2.y2 || rec2.y1 > rec1.y2) {
    return false;
  }

  return true;
}
