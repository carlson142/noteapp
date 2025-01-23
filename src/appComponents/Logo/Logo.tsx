"use client";

import { FaFeatherAlt } from "react-icons/fa";

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center text-2xl">
      <FaFeatherAlt className="text-primaryDarkViolet" />
      <span className="ml-1 font-macondo">Notes</span>
    </div>
  );
};
