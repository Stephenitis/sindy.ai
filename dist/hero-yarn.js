(() => {
  const hero = document.querySelector('.hero-yarn');
  if (!hero) return;
  const svg = hero.querySelector('.yarn-drawing');
  const path = svg.querySelector('.yarn-path');

  function draw() {
    const h = hero.getBoundingClientRect();
    const w = hero.querySelector('.complex-word').getBoundingClientRect();
    const p = hero.querySelector('.portrait').getBoundingClientRect();
    svg.setAttribute('viewBox', `0 0 ${h.width} ${h.height}`);
    // Anchor the loose tangle to the x, with room for each loop to breathe.
    const cx = w.right - h.left - w.width * .08;
    const cy = w.top - h.top + w.height * .55;
    const scale = Math.min(1, w.width / 145);
    const point = (x, y) => `${(cx + x * scale).toFixed(2)} ${(cy + y * scale).toFixed(2)}`;
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
    let d = `M ${point(-93,-20)}`;
    for (const c of curves) d += ` C ${point(c[0],c[1])} ${point(c[2],c[3])} ${point(c[4],c[5])}`;
    d += ` C ${point(110,52)} ${p.left-h.left-15} ${cy+95} ${p.left-h.left+p.width*.55} ${p.top-h.top+p.height*.65}`;
    path.setAttribute('d', d);
    const gradient = svg.querySelector('linearGradient');
    gradient.setAttribute('x1', cx);
    gradient.setAttribute('y1', cy);
    gradient.setAttribute('x2', p.left-h.left+p.width*.55);
    gradient.setAttribute('y2', p.top-h.top+p.height*.65);
  }
  document.fonts.ready.then(draw);
  window.addEventListener('resize', draw);
})();
