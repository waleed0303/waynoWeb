import { Outlet } from "react-router-dom";
import NavBar from "../../componnets/navBar/navBar";
import Footer from "../../componnets/footer/footer";
interface Props {}
const Home: React.FC<Props> = () => {
  return (
    <div id="detail">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
