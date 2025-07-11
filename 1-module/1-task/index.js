function factorial(n) {
  if (n < 0) return NaN;
    if (n === 0) return 1;
    let a = 1;
    for (let b=2; b<=n; b++)
      {a = a * b;}
    return a;
    
}