// Blank, 24.01.29.20.07
// A blank aesthetic.computer piece.

/* #region 📚 README 
  1.) Tap 🪟 Extensions icon on the left sidebar and install
      the `aesthetic.computer` extension.
  2.) Tap the added 🌀 Spiral icon to open the `prompt`.
  3.) Code below, saving the file to run the piece.

  ❓  Enter `help` for the AC #help and ping @helper for additional explanation.
#endregion */

export { boot, paint, act };

// @jeffrey/2024.2.09.17.15.55.202
let painting;

function boot({ get }) {
  // get
  //   .painting("jeffreyface")
  //   .by("@jeffrey")
  //   .then(({ img }) => {
  //     painting = img;
  //   });
}

function paint($) {
  $.wipe("red");
  $.ink("lime").line(); // Would draw a diagonal line.
  $.paste(painting, $.pen.x, $.pen.y);
}

function act({ event: e, jump }) {
  if (e.is("keyboard:down:f")) {
    jump("@reas/blank");
  }
}

// function sim() {
//  // Runs once per logic frame. (120fps locked.)
// }

// function beat() {
//   // Runs once per metronomic BPM.
// }

// function leave() {
//  // Runs once before the piece is unloaded.
// }

// function meta() {
//   return {
//     title: "Blank",
//     desc: "A blank aesthetic.computer piece.",
//   };
// }

// function preview({ ink, wipe }) {
// Render a custom thumbnail image.
// }

// function icon() {
// Render an application icon, aka favicon.
// }

// export { boot, meta };

// 📚 Library
//   (Useful functions used throughout the piece)
