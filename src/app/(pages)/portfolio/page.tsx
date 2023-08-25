import React from "react";
import { MainLayoutComponent } from "../../components/MainLayoutComponent";
import { MasonryComponent } from "../../components/MasonryComponent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/clientApp";

const PortfolioPage = async () => {
  const colRef = collection(db, "photos");
  const snapshots = await getDocs(colRef);
  const docs = snapshots.docs.map((doc) => doc.data());
  console.log(docs);

  return (
    <MainLayoutComponent>
      <div className="w-[95vw] h-full mt-[80px] mb-5 bg-stone-950 rounded-xl overflow-y-auto md:overflow-y-scroll">
        <MasonryComponent images={docs} />
      </div>
    </MainLayoutComponent>
  );
};

export default PortfolioPage;
