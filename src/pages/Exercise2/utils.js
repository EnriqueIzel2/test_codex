export function intersects(rec1, rec2) {
  let x = rec1[0];
  let y = rec1[1];
  let a = rec1[2];
  let b = rec1[3];

  let x2 = rec2[0];
  let y2 = rec2[1];
  let a2 = rec2[2];
  let b2 = rec2[3];

  if (a < x2 || a2 < x || b < y2 || b2 < y) {
    false;
  } else {
    true;
  }
}
