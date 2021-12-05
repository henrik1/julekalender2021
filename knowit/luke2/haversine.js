export const haversine = (pt1, pt2) => {
  const [lon1, lat1] = pt1;
  const [lon2, lat2] = pt2;
  const R = 6371e3;
  const φ1 = lat1 * Math.PI/180;
  const φ2 = lat2 * Math.PI/180;
  const Δφ = (lat2-lat1) * Math.PI/180;
  const Δλ = (lon2-lon1) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

export const findClosest = (origin, points) => points.reduce((prev, next, idx) => {
  const distance = haversine(origin, next);
  return {
    idx: distance < prev.distance ? idx : prev.idx,
    distance: Math.min(distance, prev.distance)
  }
}, { idx: null, distance: Infinity });
