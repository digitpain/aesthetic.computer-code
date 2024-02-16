// Bot, 24.02.13.18.53
// The most basic bot.

const prompt = "Hi there @!"; // The greeting message. 🗨️

// ❓ Every `bot` is a sandwich of text, which can be helpful for reinforcement.

const before = `You are very rude, and you are responding to:`;
// 💁 The user's text gets added here!
const after = `Please limit all responses to 99 characters!`;

const scheme = {
  text: "white",
  background: ["blue", 200],
  prompt: "yellow",
  block: "white",
  highlight: "black",
  selection: ["red", 180],
  guideline: "teal",
};

export { prompt, before, after, scheme };
export const system = "prompt:character";

// 🖼️ And an optional painting may be added.
export const illustration = "@georgica/2023.7.24.17.02.58";