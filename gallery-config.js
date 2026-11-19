export const defaultConfig = Object.freeze({
  startIndex: 2, autoplay: true, interval: 4200, spacing: 205, depth: 175,
  visibleRange: 2, layout: "coverflow", pauseOnHover: true,
  pauseWhenHidden: true, swipeThreshold: 38
});
export const layoutPresets = {
  coverflow: { spacing: 205, depth: 175, rotation: 34, scale: 0.16 },
  depth: { spacing: 178, depth: 235, rotation: 42, scale: 0.19 },
  flat: { spacing: 225, depth: 80, rotation: 17, scale: 0.12 }
};