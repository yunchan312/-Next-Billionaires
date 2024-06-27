import AssetCard from "./asset-card";

export const API_URL = " https://billions-api.nomadcoders.workers.dev/";

async function getBillionDetail(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillionDetails({ id }: { id: string }) {
  const detail = await getBillionDetail(id);
  return (
    <div className="py-8 gap-3 flex flex-col">
      <div
        className="w-96 h-96 bg-center bg-cover"
        style={{
          backgroundImage: `url(${detail.squareImage})`,
        }}
      />
      <div className="font-bold text-3xl">{detail.name}</div>
      <div>Country: {detail.country}</div>
      <div>Industry: {detail.industries.map((i) => i)}</div>
      <div>{detail.bio.map((i) => i)}</div>

      <div className="mt-12">
        <div className="font-bold text-3xl mb-3">Financial Assets</div>
        <div className="flex flex-wrap gap-5">
          {detail.financialAssests ? (
            detail.financialAssets.map((a, i) => {
              return <AssetCard key={i} assets={a} />;
            })
          ) : (
            <div>No Infomations</div>
          )}
        </div>
      </div>
    </div>
  );
}
