// Blank, 24.01.29.20.07 
// A blank aesthetic.computer piece. 

/* #region ⭐️ Setup
  - Install the `aesthetic.computer` extension to the left.
  - Tap the new 🌀 Spiral icon and follow the instructions in the panel.
*/

/* #region 📚 README 
  - Welcome to your first aesthetic.computer piece.
  - You can `console.log(api);` to explore,
    and then destructure additional api commands
    to try them out!
  - Top-level commands make up each piece's application flow.
    Uncomment and export them to invoke their behavior and use their apis.
  - Enter `help` for the AC #help and ping @helper for additional explanation.
#endregion */

/* #region 🏁 TODO 
  - [] Draw a purple line.
#endregion */

function boot({ wipe }) {
  // Runs once at the start.
  wipe("blue"); // Clear's the screen. Can use R, G, B or CSS colors.
}

function paint({ api, ink, line, pen, box }) {
  // ink("red").line(0, 0, 100, 100); // Would draw a diagonal line.
  // return false; // Uncomment for proce55ing's "noLoop" functionality.
}

// function act({ event: e }) {
//  // Respond to user input here.
// }

// function sim() {
//  // Runs once per logic frame. (120fps locked.)
// }

// function beat() {
//   // Runs once per metronomic BPM.
// }

// function leave() {
//  // Runs once before the piece is unloaded.
// }

function meta() {
  return {
    title: "Blank",
    desc: "A blank aesthetic.computer piece.",
  };
}

// function preview({ ink, wipe }) {
// Render a custom thumbnail image.
// }

// function icon() {
// Render an application icon, aka favicon.
// }

export { boot, paint, meta };

// 📚 Library
//   (Useful functions used throughout the piece)
