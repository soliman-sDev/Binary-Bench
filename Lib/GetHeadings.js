export async function getHeadings(source) {
  const headingLines = source.split("\n").filter((line) => {
    return line.match(/^###*\s/);
  });


  let uid = 1000;
  return headingLines.map((raw) => {
    const text = raw
      .replace(/^###*\s/, "")
      .replace(/ *\{[^)]*\} */g, "")
      .trim();

    const id = text
      .replace(/[&\/\\#,+()$~%'":*?<>{}]/g, "")
      .trim()
      .split(" ")
      .join("-");

    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    uid++;
    return { text, level, id, uid };
  });
}