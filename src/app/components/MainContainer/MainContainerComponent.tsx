import React from "react";
import { MasonryComponent } from "./Masonry/MasonryComponent";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/clientApp";
import { TempComponent } from "./Masonry/TempComponent";

export const MainContainerComponent = async () => {
  const colRef = collection(db, "photos");
  const snapshots = await getDocs(colRef);
  const docs = snapshots.docs.map((doc) => doc.data());

  return (
    <main className="w-[95vw] h-full mt-[80px] mb-5 bg-stone-950 rounded-xl overflow-y-auto md:overflow-y-scroll">
      <TempComponent />
      <MasonryComponent data={docs} />
    </main>
  );
};
