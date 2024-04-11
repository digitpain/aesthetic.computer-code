// Filter, 24.04.11.00.43 
// The most basic filter. 

let color;

// 🥤️ Filter
function filter({ params, num, pen, flood,  }) {
  // TODO: Show an example of how to manipulate the raw pixel buffer here.
  color ||= num.parseColor(params);
  flood(pen.x, pen.y, color);
}

export { filter };