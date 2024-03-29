import { useState } from "react";
import useStore from "../../hooks/weatherHook";
import formatString from "../../utils/formatString";

const SearchList = () => {
  const { searchList, city } = useStore();
  const [isHovered, setIsHovered] = useState(-1);
  return (
    <ul className="w-full flex flex-col gap-3 max-w-[352px]">
      {searchList.length > 0 &&
        searchList.map((query, index) => (
          <li
            key={index}
            onClick={(e) => console.log(e.currentTarget.textContent)}
            className="px-3 py-5 hover:border border-border-color flex justify-between items-center cursor-pointer"
            onMouseEnter={(e) => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
          >
            {formatString(query.query)}
            {isHovered === index && (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            )}
          </li>
        ))}
    </ul>
  );
};

export default SearchList;
