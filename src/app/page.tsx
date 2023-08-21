import { NavBarComponent } from "./components/Navbar/NavBarComponent";
import { MainContainerComponent } from "./components/MainContainer/MainContainerComponent";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <NavBarComponent />
      <MainContainerComponent />
    </div>
  );
}
