import React, {  useState } from "react";
import Link from "next/link";

function Toc({ headings }) {
  const [active, setActive] = useState("");

  return (
    <nav className="sticky top-32 overflow-auto toc-inner p-3 rounded-md bg-[#CECFC9] dark:bg-[#1B263B] ">
      <ul>
        {headings.map((heading) => (
          <li
            key={heading.uid}
            className="mt-4 text-lg text-gray-700 dark:text-gray-400 hover:bg-[#b6b7ae] dark:hover:bg-[#151E2D] py-1 px-2 rounded-md"
            style={{
              paddingLeft: heading.level === 3 ? "1rem" : "",
              color: heading.id === active ? "#6366f1" : "",
            }}
            onClick={(e) => {
              setActive(heading.id);
            }}
          >
            <Link href={`#${heading.id}`}>{heading.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Toc;