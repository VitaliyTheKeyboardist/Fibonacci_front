import { IPresentationNavBar } from "../../types/components/presentationNavBar"
import ClassicNavBar from "./components/classicNavBar/classicNavBar"
import KfuNavBar from "./components/kfuNavBar/kfuNavBar"
import MinimaNavBar from "./components/minimaNavBar/minimaNavBar"
import StyleNavBar from "./components/styleNavBar/styleNavBar"

const PresentationNavBar = ({ presentation }: IPresentationNavBar) => {
  switch (presentation.template) {
    case "minima":
      return <MinimaNavBar presentation={presentation} />
    case "classic":
      return <ClassicNavBar presentation={presentation} />
    case "kfu":
      return <KfuNavBar presentation={presentation} />
    case "style":
      return <StyleNavBar presentation={presentation} />
  }
}

export default PresentationNavBar
