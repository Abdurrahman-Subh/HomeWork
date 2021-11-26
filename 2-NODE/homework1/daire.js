const pi = Math.PI;

const daireAlani = (r) => {
  const alan = (pi * r ** 2).toFixed(2);
  console.log(`Yaricapi ${r} olan daire alani: ${alan}`);
};
daireAlani(15);