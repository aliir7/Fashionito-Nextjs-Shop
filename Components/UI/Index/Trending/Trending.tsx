import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrendingSlider from "./TrendingSlider";

function Trending() {
  return (
    <section>
      <div className="wrapper py-20">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="">
            <h3 className="text-3xl font-medium">What's Trending now</h3>
            <p className="text-lg mt-2">
              Discover the most trending products in Fashion
              <span className="text-secondary">ito</span>
            </p>
          </div>
          <div>
            <button
              type="button"
              className="btn bg-black px-6 py-3 text-lg text-white rounded-md transition-all duration-300 cursor-pointer"
            >
              مشاهده همه
            </button>
          </div>
        </div>
        <TrendingSlider />
      </div>
      <ToastContainer position="top-left" autoClose={1500} />
    </section>
  );
}

export default Trending;
