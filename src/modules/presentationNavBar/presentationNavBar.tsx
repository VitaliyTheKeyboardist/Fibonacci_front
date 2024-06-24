import { IPresentationNavBar } from "../../types/components/presentationNavBar"
import MinimaNavBar from "./components/minimaNavBar/minimaNavBar"

const PresentationNavBar = ({ presentation }: IPresentationNavBar) => {
  switch (presentation.template) {
    case "1":
      return <MinimaNavBar presentation={presentation} />
  }
}

export default PresentationNavBar
