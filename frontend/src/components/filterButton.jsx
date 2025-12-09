const FilterButtons = ({ onFilter }) => {
  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={() => onFilter("all")}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        All
      </button>

      <button
        onClick={() => onFilter("Verified")}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Verified
      </button>

      <button
        onClick={() => onFilter("To Check")}
        className="px-4 py-2 bg-yellow-500 text-white rounded"
      >
        To Check
      </button>
    </div>
  );
};

export default FilterButtons;
