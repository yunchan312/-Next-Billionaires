import { Suspense } from "react";
import BillionDetails from "../../../components/billion_detail";

export default function Detail({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="bg-slate-800 h-full px-5 flex flex-col justify-center items-center">
      <div className="w-[55%] overflow-y-scroll no-scrollbar">
        <Suspense fallback={<h1>Loading...</h1>}>
          <BillionDetails id={id} />
        </Suspense>
      </div>
    </div>
  );
}
