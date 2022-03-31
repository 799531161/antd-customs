import { useRoutes } from "react-router-dom";
import routers from "./routers";
const Apps = () => {
  const element = useRoutes(routers);
  return element;
};

export default Apps;
