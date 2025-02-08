export const simulatePrice = (currentPrice) => {
  const change = (Math.random() - 0.5) * 1000;
  return Math.max(1000, currentPrice + change);
};
