export default function AssetCard({ assets }: { assets: object }) {
  return (
    <div className="px-3 text-xl py-5 border-[1px] rounded-md w-[240px] h-[130px] ">
      <div>Ticker: {assets.ticker}</div>
      <div>Shares: {formatNumber(assets.numberOfShares)}</div>
      <div>
        {assets.exerciseOptionPrice
          ? `Exercise Price: $${assets.exerciseOptionPrice}`
          : null}
      </div>
    </div>
  );
}

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}
