
import Routes from "./routes/app.routes";
import { useFonts } from "expo-font";
import FONTS from './constants/fonts'

const Main = () => {

  const [isLoaded] = useFonts(FONTS);
  if (isLoaded) {
    return <Routes/>
  }

};

export default Main;
