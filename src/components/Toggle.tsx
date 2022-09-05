function Toggle() {
  return (
    <label
      htmlFor="toggle"
      className="flex relative items-ce1nter cursor-pointer mx-5"
    >
      <input
        type="checkbox"
        id="toggle"
        className="sr-only peer"
      />
      <div className="w-[3.5rem] h-8 shadow-md shadow-turquoise-100 bg-turquoise-200 outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-200 after:border after:rounded-full after:h-6 after:w-6 border-gray-600 peer-checked:bg-turquoise-300"></div>
    </label>
  );
}

export default Toggle;
