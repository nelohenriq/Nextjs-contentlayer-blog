import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <div>
      <Link
        href={link}
        className={cx(
          "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border border-light hover:scale-105 transition-all duration-200 ease",
          props.className
        )}
      >
        {name}
      </Link>
    </div>
  );
};

export default Tag;
