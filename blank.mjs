// Blank, 24.01.29.20.07 
// A blank aesthetic.computer piece. 

/* #region 📚 README 
  1.) Tap 🪟 Extensions icon and install the `aesthetic.computer` extension.
  2.) Tap the added 🌀 Spiral icon to open the `prompt`.
  3.) Code below, saving the file to run the piece.

  ❓  Enter `help` for the AC #help and ping @helper for additional explanation.
#endregion */

function boot({ wipe }) {
  wipe("blue");
}

// function paint({ ink, line, box, pen }) {
  // ink("red").line(0, 0, 100, 100); // Would draw a diagonal line.
  // return false; // Uncomment for proce55ing's "noLoop" functionality.
// }

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

export { boot, meta };

// 📚 Library
//   (Useful functions used throughout the piece)
