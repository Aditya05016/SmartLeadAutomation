import { useState } from "react";
import axios from "axios";

const LeadForm = ({ onResult }) => {
  const [names, setNames] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!names) return;

    const response = await axios.post("http://localhost:5000/api/leads", {
      names,
    });

    onResult(response.data.data);
    setNames("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center p-4 bg-gray-100 rounded"
    >
      <input
        type="text"
        value={names}
        onChange={(e) => setNames(e.target.value)}
        placeholder="Enter names, separated by comma"
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadForm;
