import BoxContainer from "../../../components/layout/BoxContainer";
import type { Clearing } from "../../../types/clearings";
import type { OrganizationType } from "../../../types/organization";

interface ClearingTableProps {
  data: Clearing[];
  organizations: OrganizationType[];
}

export default function Table({ data, organizations }: ClearingTableProps) {
  const getOrgName = (orgId: Clearing["organizationId"]): string => {
    const org = organizations.find((o) => o.id === orgId);
    return org ? org.name : "Unknown";
  };

  return (
    <BoxContainer title={`Showing ${data.length} results`}>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] uppercase text-gray-500 border-b border-gray-800">
            <th className="py-4 px-2">ID</th>
            <th className="py-4 px-2">Organization</th>
            <th className="py-4 px-2 text-right">Amount</th>
            <th className="py-4 px-2 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-800/50 hover:bg-[#1A1A1A]"
            >
              <td className="py-4 px-2 text-xs text-gray-500">#{item.id}</td>
              <td className="py-4 px-2">
                <span className="text-sm font-medium">
                  {getOrgName(item.organizationId)}
                </span>
              </td>
              <td className="py-4 px-2 text-right font-bold text-sm">
                {item.currency} {item.grossAmount.toLocaleString()}
              </td>
              <td className="py-4 px-2 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold border ${
                    item.status === "CLEARED"
                      ? "bg-green-500/10 text-green-500 border-green-500/20"
                      : "bg-orange-500/10 text-orange-500 border-orange-500/20"
                  }`}
                >
                  {item.status === "CLEARED" ? "CLEARED" : "TO BE CLEARED"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </BoxContainer>
  );
}
