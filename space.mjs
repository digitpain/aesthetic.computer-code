// Space, 24.02.21.17.34
// The most basic multiplayer space.

const world = { width: 128, height: 128 };

function paint({ ink }, world) {
  ink("brown").box(0, 0, world.width, world.height);
  ink("yellow").write("welcome to my room", { center: "xy" });
}

function background({ wipe }) {
  wipe("blue");
}

export { paint, background, world };
export const system = "world";