import { FormEvent, MouseEventHandler, useRef } from "react";

type propType = {
  label: string;
  value: string;
  onChangeFunc: (e: FormEvent) => void;
  icon: string | undefined;
};

function Input(props: propType) {
  const { label, value, onChangeFunc, icon } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const selectTextOnClick = () => {
    inputRef.current?.select();
  }

  return (
    <>
      <label
        className="block pb-1 text-gray-600 text-sm"
        htmlFor={`txt${label}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={value}
          ref={inputRef}
          onClick={() => selectTextOnClick()}
          onChange={(e) => onChangeFunc(e)}
          id={`txt${label}`}
          className="w-full py-3 outline-1 outline-greenc-200 pl-10 pr-5 font-semibold text-right rounded-lg bg-gray-100"
        />
        {icon !== undefined && (
          <img
            src={icon}
            className="w-6 h-6 absolute top-3 left-2"
            alt={`the ${label} icon`}
          />
        )}
      </div>
    </>
  );
}

export default Input;
