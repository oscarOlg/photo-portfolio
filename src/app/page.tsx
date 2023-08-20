import { HeaderComponent } from "./components/Navbar/HeaderComponent";
import { MainContainerComponent } from "./components/MainContainer/MainContainerComponent";
import { FooterComponent } from "./components/Footer/FooterComponent";

export default function Home() {
  return (
    <div className="h-full flex">
      <HeaderComponent />
      <div className="w-full flex flex-col items-center mr-5 my-3 bg-stone-950 rounded-2xl">
        <MainContainerComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
