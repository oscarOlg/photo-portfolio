import type { StaticImageData } from "next/image";

export interface MainLayoutComponentProps extends React.PropsWithChildren {
  className?: string;
  navbarClassName?: string;
}

export type MasonryComponentPorops = {
  images: { src: string; name: string }[] | StaticImageData[];
  className?: string;
};
