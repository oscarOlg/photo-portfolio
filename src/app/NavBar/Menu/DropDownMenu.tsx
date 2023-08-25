import React from "react";
import { TabsComponent } from "../Tabs/TabsComponent";
import { SocialsComponent } from "../Socials/SocialsComponent";

export const DropDownMenu = () => {
  return (
    <div className="h-full w-screen fixed top-0 left-0 z-10 from-stone-200 bg-gradient-to-b">
      <div className="w-[95vw] m-auto h-full mt-[80px] mb-5 flex flex-col gap-3 items-center">
        <TabsComponent isMobile={true} />
        <SocialsComponent />
      </div>
    </div>
  );
};
