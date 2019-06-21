for (let i = 1; i <= 12; i++) {
  const outer = [];
  for (let j = 2; j <= 12; j++) {
    outer.push(i * j);
  }
  console.log(...outer);
}
