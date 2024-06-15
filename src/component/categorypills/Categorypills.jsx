const Categorypills = () => {
  const button = [
    "app",
    "game",
    "cricket",
    "coading",
    "music",
    "Songs",
    "mobile",
    "sells",
    "show",
    "javascript",
    "logic",
    "maths",
    "rhyms",
    "south ",
    "old",
    "saregama",
    "KBC",
    "jokes",
    "Study",
    "Caa",
    "Upsc",
    "preprations",
  ];
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex flex-nowrap">
        {button.map((btn) => (
          <button
            key={btn}
            className="px-2 py-1 bg-gray-200 rounded-md mx-1 mb-2"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categorypills;
