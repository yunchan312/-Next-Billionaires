import Link from "next/link";
import { API_URL } from "./billion_detail";

async function getBillion() {
  const response = await fetch(`${API_URL}`);
  return response.json();
}

function convertToBillions(number: number) {
  const billions = number / 1000;
  return `${billions.toFixed(0)} Billions`;
}

export default async function Billions() {
  const billions = await getBillion();
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 h-full overflow-y-scroll py-5 no-scrollbar">
      {billions.map((b) => {
        return (
          <Link
            href={`/person/${b.id}`}
            key={b.id}
            className="cursor-pointer w-[300px] h-[390px] bg-slate-900 group overflow-hidden group"
          >
            <div
              className="w-[300px] h-[300px] bg-center bg-cover group-hover:blur-md"
              style={{
                backgroundImage: `url(${b.squareImage})`,
              }}
            />
            <div className="p-2">
              <div className="text-[20px] font-bold">{b.name}</div>
              <div className="text-[15px]">
                <span>{convertToBillions(b.netWorth)} | </span>
                {b.industries.map((i) => i)}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
