/* SCRIBBLE GUIDE
   This file builds the line's shape and places it beside "complex".
   CSS controls its thickness, visibility, and drawing animation.
   The gradient colors are defined in index.html.
*/
// Run this setup once. The wrapper keeps these variable names local to this file.
(() => {
  // Find the hero section, then the SVG drawing and its line.
  const hero = document.querySelector('.hero-yarn');
  if (!hero) return; // Stop quietly if this page has no hero section.
  const svg = hero.querySelector('.yarn-drawing');
  const path = svg.querySelector('.yarn-path');

  // draw() recalculates the drawing from the current page layout.
  function draw() {
    // h = hero bounds, w = word bounds, p = portrait bounds.
    // Each rectangle gives the element's position and size in the browser window.
    const h = hero.getBoundingClientRect();
    const w = hero.querySelector('.complex-word').getBoundingClientRect();
    const p = hero.querySelector('.portrait').getBoundingClientRect();
    // Match the drawing's coordinate system to the hero's width and height.
    svg.setAttribute('viewBox', `0 0 ${h.width} ${h.height}`);
    // POSITION: anchor the scribble near the final "x" in "complex".
    // Subtract the hero's position to get coordinates within the hero section.
    // Add to cx to move right; add to cy to move down.
    const cx = w.right - h.left - w.width * .08;
    const cy = w.top - h.top + w.height * .55;
    // SIZE: shrink when the word is narrower than 145px; otherwise use full size.
    // Multiply this expression by 1.2 for 20% larger, or .8 for 20% smaller.
    const scale = Math.min(1, w.width / 145);
    // point(x, y) scales a drawing coordinate, adds the anchor position,
    // and formats the result as the "x y" text that SVG expects.
    const point = (x, y) => `${(cx + x * scale).toFixed(2)} ${(cy + y * scale).toFixed(2)}`;
    // SHAPE: each row is one curved segment, continuing from the last endpoint.
    // [first handle x, y, second handle x, y, endpoint x, y]
    // The handles pull the curve into shape; the line need not pass through them.
    // Negative x goes left of the anchor; negative y goes above it.
    // The segments overlap to create the loops. No randomness is used.
    const curves = [
      [-78,-35, -25,-65, 14,-39],
      [55,-10, -47,27, -66,4],
      [-89,-24, 41,-64, 70,-35],
      [100,-5, -16,51, -43,26],
      [-73,-2, 42,-35, 83,-13],
      [113,12, -7,73, -43,48],
      [-72,24, 30,-22, 60,0],
      [91,23, 21,61, 0,38],
      [-25,9, 62,-51, 76,-31],
      [98,0, -65,65, -84,39],
      [-105,12, 24,-5, 50,28],
      [78,64, -18,68, -24,42],
      [-32,10, 57,2, 83,35]
    ];
    // Build the SVG path instructions in a string called d.
    // M = move to the starting point without drawing.
    let d = `M ${point(-93,-20)}`;
    // C = draw a cubic curve using two handles and an endpoint.
    for (const c of curves) d += ` C ${point(c[0],c[1])} ${point(c[2],c[3])} ${point(c[4],c[5])}`;
    // Add the final strand toward a point inside the portrait.
    // Its destination is 55% across and 65% down the portrait's rectangle.
    d += ` C ${point(110,52)} ${p.left-h.left-15} ${cy+95} ${p.left-h.left+p.width*.55} ${p.top-h.top+p.height*.65}`;
    // Send the completed shape to the SVG. CSS handles the reveal animation.
    path.setAttribute('d', d);
    // Align the color transition from the scribble's anchor toward the portrait.
    // These set its direction; edit the actual colors in index.html.
    const gradient = svg.querySelector('linearGradient');
    gradient.setAttribute('x1', cx);
    gradient.setAttribute('y1', cy);
    gradient.setAttribute('x2', p.left-h.left+p.width*.55);
    gradient.setAttribute('y2', p.top-h.top+p.height*.65);
  }
  // Wait for fonts so the measured word has its final size, then draw once.
  document.fonts.ready.then(draw);
  // Reposition the line whenever the browser window changes size.
  window.addEventListener('resize', draw);
})();
