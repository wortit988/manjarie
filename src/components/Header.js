import homeIcon from "../assets/home.svg";
import icon from "../assets/cartIcon.svg";
import userIcon from "../assets/userIcon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalQuanity = useSelector((store) => store.cart.totalQuanity);
  return (
    <div className="flex justify-between items-center p-5 shadow-lg fixed top-0 left-0 right-0 mb-4 bg-white">
      <div className="">
        <Link to="/">
          <img className="h-8 mx-3" alt="logo" src={homeIcon} />
        </Link>
      </div>
      <div>
        <h1 className="font-serif font-bold text-3xl">
          Manjarie - Where Every Find Is Special!
        </h1>
      </div>
      <div className="flex flex-row gap-12">
        <Link to={"/cart"}>
          <div className="relative text-2xl font-bold">
            <img className="h-8 mx-3" alt="icon" src={icon} />
            {!!totalQuanity && (
              <div
                className="absolute bg-orange-500 border p-2"
                style={{ top: "-20px", right: "-12px", borderRadius: "50%" }}
              >
                <h4 className="text-sm text-white	">{totalQuanity}</h4>
              </div>
            )}
          </div>
        </Link>
        <div className="">
          <img className="h-8" alt="user" src={userIcon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
