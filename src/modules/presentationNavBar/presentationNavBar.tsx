import { IPresentationNavBar } from "../../types/components/presentationNavBar"
import ClassicNavBar from "./components/classicNavBar/classicNavBar"
import KfuNavBar from "./components/kfuNavBar/kfuNavBar"
import MinimaNavBar from "./components/minimaNavBar/minimaNavBar"

const PresentationNavBar = ({ presentation }: IPresentationNavBar) => {
  switch (presentation.template) {
    case "1":
      return <MinimaNavBar presentation={presentation} />
    case "classic":
      return <ClassicNavBar presentation={presentation} />
    case "kfu":
      return <KfuNavBar presentation={presentation} />
  }
}

export default PresentationNavBar
