export function selectorSteps(start: number, stop: number) {
  return Array.from({ length: stop - start + 1 }, (_, i) => start + i);
}

export function listWords(word: string, i: number, array: Array<string>) {
  const capitalWord = word[0].toUpperCase() + word.slice(1);
  if (i === array.length - 2) return `${capitalWord} and `;
  if (i === array.length - 1) return capitalWord;
  if (i !== array.length - 1 || +i !== array.length - 2)
    return `${capitalWord}, `;
}

export function removeUnderscore(array: Array<string>) {
  if (!array) return "";
  return array.map((sentance, i) =>
    i === array.length - 1
      ? sentance.replaceAll("_", " ")
      : `${sentance.replaceAll("_", " ")}, `
  );
}

export function colourFinder(letter: string, darkMode: boolean) {
  if (letter === "i") return darkMode ? "bg-green-800" : "bg-green-100";
  if (letter === "r") return darkMode ? "bg-gray-700" : "bg-gray-300";
  if (letter === "y") return darkMode ? "bg-yellow-1000" : "bg-yellow-100";
  if (letter === "o") return darkMode ? "bg-orange-800" : "bg-orange-200";
  if (letter === "p") return darkMode ? "bg-pink-800" : "bg-pink-200";
  if (letter === "e") return darkMode ? "bg-orange-300" : "bg-orange-600";
  if (letter === "c") return darkMode ? "bg-purple-800" : "bg-purple-200";
  if (letter === "b") return darkMode ? "bg-amber-300" : "bg-amber-600";
}

export function distance(distance: Array<object> | unknown) {
  if (!Array.isArray(distance)) return [distance];
  return distance.reduce(
    (acc: string[], el: { nodes: string[]; pay: number }) => {
      console.log(el.nodes.length - 1);
      const nodes = el.nodes
        .map((node: string, i: number) =>
          i === +el?.nodes?.length - 1 ? `${node}` : `${node}/`
        )
        .join("");
      return [...acc, ` ${nodes}: ${el.pay}`] as string[];
    },
    []
  );
}
export function phaseColour(tileset: Array<string>) {
  if (tileset.find((el) => el.includes("gray")))
    return "rgba(128, 128, 128, 0.4)";
  if (tileset.find((el) => el.includes("brown")))
    return "rgba(131, 60, 28, 0.4)";
  if (tileset.find((el) => el.includes("green")))
    return "rgba(14, 122, 50, 0.4)";
  if (tileset.find((el) => el.includes("yellow")))
    return "rgba(246, 246, 6, 0.4)";
  return "rgba(131, 90, 28, 0.4)";
}
