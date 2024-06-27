import { Suspense } from "react";
import Billions from "../../components/billions";

export default function Home() {
  return (
    <div className="bg-slate-800 h-full px-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Billions />
      </Suspense>
    </div>
  );
}
