import { useEffect, useRef, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const refForClosing = useRef();

  useEffect(() => {
    let outsideClickHandler = (e) => {
      !refForClosing.current.contains(e.target) && setOpen(false);
    };
    document.addEventListener("mousedown", outsideClickHandler);
    return () => {
      document.removeEventListener("mousedown", outsideClickHandler);
    };
  });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-transparent hover:bg-gray-100  focus:ring-1 focus:outline-none font-medium text-lg text-center inline-flex items-center "
        type="button"
        onClick={handleClick}
        ref={refForClosing}
      >
        ...
      </button>
      {open && (
        <div
          id="dropdown"
          className="bg-white divide-y divide-gray-100 rounded-lg shadow z-10 absolute"
        >
          <ul
            className="py-2 text-sm text-gray-700"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 ">
                Edit
              </button>
            </li>
            <li>
              <button className="block px-4 py-2 hover:bg-gray-100 text-red-600 font-bold">
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
