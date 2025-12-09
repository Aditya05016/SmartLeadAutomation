const LeadTable = ({ leads }) => {
  if (!leads || leads.length === 0) {
    return <p className="text-center mt-4">No leads yet...</p>;
  }

  return (
    <table className="w-full mt-4 border">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="p-2">Name</th>
          <th className="p-2">Country</th>
          <th className="p-2">Probability</th>
          <th className="p-2">Status</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id} className="border-t">
            <td className="p-2">{lead.name}</td>
            <td className="p-2">{lead.country}</td>
            <td className="p-2">{lead.probability.toFixed(2)}</td>
            <td className="p-2">
              <span
                className={
                  lead.status === "Verified"
                    ? "text-green-600"
                    : "text-yellow-600"
                }
              >
                {lead.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;
