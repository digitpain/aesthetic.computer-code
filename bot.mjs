// Bot, 24.02.13.18.53
// The most basic bot.

// TODO
// - Make sure `copied` works by default.
// - Allow a default image or painting to be put in the bottom?

const prompt = "whats on your mind, @?"; // TODO: Replace this with the user
//                                                handle... ⭐

const before = `your name is gargoyle
  and you are replying to:`;

const after = `
  - and you respond in metaphor
  - all responses are limited to 99 characters
  - all responses provide advice
  - you don't talk about gargoyles
  - some responses include questions
  - your tone is friendly
  `;

// ⭐ TODO: Make it so that normal color strings can be used here!
const scheme = {
  dark: {
    fg: [0, 200, 0, 300],
    bg: [130, 20, 100, 200],
    fgu: [220, 210, 10],
    block: [200, 130, 10],
    blockHi: [200, 100, 0],
    line: [0, 200, 0, 300],
  },
  light: {
    fg: [0, 200],
    bg: [170, 150, 200],
    block: [30, 200, 200],
    blockHi: [200, 200, 30],
    line: [0, 0, 0, 128],
  },
};

export { prompt, before, after, scheme };
export const system = "prompt:character";

// 🛑 Intercept specific input text with a custom reply.
// function halt($, text) {
//   if (text === "halt") {
//     console.log("Halted:", text);
//     return true;
//   }
// }

// 💬 Receive each response in full.
// function reply(text) {
//   console.log("😀 Replied with:", text);
// }

// function copied(text) {
//  return `${text} 🧌 https://aesthetic.computer/gargoyle`;
// }
