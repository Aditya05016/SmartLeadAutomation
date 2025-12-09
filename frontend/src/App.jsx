import { useState } from "react";
import LeadForm from "./components/leadform";
import LeadTable from "./components/leadTable";
import FilterButtons from "./components/filterButton";

function App() {
  const [leads, setLeads] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const handleResults = (data) => {
    setLeads(data);
    setFiltered(data); // show all by default
  };

  const handleFilter = (filter) => {
    if (filter === "all") {
      setFiltered(leads);
    } else {
      setFiltered(leads.filter((lead) => lead.status === filter));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Smart Lead Automation
      </h1>

      <LeadForm onResult={handleResults} />

      <FilterButtons onFilter={handleFilter} />

      <LeadTable leads={filtered} />
    </div>
  );
}

export default App;
