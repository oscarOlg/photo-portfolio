import React from "react";
import { MainLayoutComponent } from "../../components/MainLayoutComponent";
import { MasonryComponent } from "../../components/MasonryComponent";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase/clientApp";

import image1 from "../../../../public/images/home/DSC_2377.jpg";
import image2 from "../../../../public/images/home/DSC_2461.jpg";
import image3 from "../../../../public/images/home/DSC_2668.jpg";
import image4 from "../../../../public/images/home/DSC_3200.jpg";
import image5 from "../../../../public/images/home/DSC_3236.jpg";
import image6 from "../../../../public/images/home/DSC_3239.jpg";
import image8 from "../../../../public/images/home/DSCF0272.jpg";
import image9 from "../../../../public/images/home/DSCF0291.jpg";
import image10 from "../../../../public/images/home/DSCF0296.jpg";
import image11 from "../../../../public/images/home/DSCF0352.jpg";

const images = [
  image11,
  image10,
  image9,
  image8,
  image6,
  image5,
  image4,
  image3,
  image2,
  image1,
];

const PortraitsPage = async () => {
  // const colRef = collection(db, "photos");
  // const snapshots = await getDocs(colRef);
  // const docs = snapshots.docs.map((doc) => doc.data());
  // console.log(docs);

  return (
    <MainLayoutComponent>
      <div className="w-[95vw] h-full mt-[100px] mb-5 bg-stone-950 rounded-xl overflow-y-auto md:overflow-y-scroll">
        <MasonryComponent
          className="max-w-[1200px] w-11/12 p-2 sm:p-4 my-5 mx-auto"
          images={images}
        />
      </div>
    </MainLayoutComponent>
  );
};

export default PortraitsPage;
