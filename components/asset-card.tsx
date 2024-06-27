interface Asset {
  exchange?: string;
  ticker?: string;
  companyName?: string;
  numberOfShares?: number;
  exerciseOptionPrice?: number;
  sharePrice?: number;
  currencyCode?: string;
  exchangeRate?: number;
  interactive?: boolean;
  currentPrice?: number;
}

export default function AssetCard({ assets }: { assets: Asset }) {
  return (
    <div className="px-3 text-xl py-5 border-[1px] rounded-md w-[240px] h-[130px] ">
      <div>{assets.ticker ? `Ticker: ${assets.ticker}` : null}</div>
      <div>
        {assets.numberOfShares
          ? `Shares: ${formatNumber(assets.numberOfShares)}`
          : null}
      </div>
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
