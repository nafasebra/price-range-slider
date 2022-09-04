function Toggle() {
  return (
    <label
      htmlFor="default-toggle"
      className="flex relative items-center cursor-pointer mx-5"
    >
      <input
        type="checkbox"
        id="default-toggle"
        className="sr-only peer"
      />
      <div className="w-[3.75rem] h-8 bg-turquoise-200 outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-7 after:w-7 border-gray-600 peer-checked:bg-turquoise-300"></div>
    </label>
  );
}

export default Toggle;
