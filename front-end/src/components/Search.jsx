import { useEffect} from 'react'
import "../App.css"; 
const navvv = document.querySelector(".firstDiv");
const btn = document.querySelector(".btn");
const s_icon = document.querySelector(".s-icon");
const navBar = document.querySelector(".navBar"); 
import { CiSearch } from "react-icons/ci";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Search() {
  useEffect(() => {
    function handleScroll() {
      console.log('Scrolled!');
      // Add your scroll event logic here 
        if (window.scrollY >= 50) {
          s_icon.classList.remove("s-icon");
          navvv.classList.add("navvv");
          btn.classList.add("btn-none");
          navBar.classList.add("back");
        } else {
          navvv.classList.remove("navvv");
          s_icon.classList.add("s-icon");
          btn.classList.remove("btn-none");
          navBar.classList.remove("back");
        } 
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="searchDiv lg:w-[100%] sm:w-full md:w-full   m-auto grid gp-10 app rounded-[10px] p-[3rem] pt-[100px] ">
      <form action="" className="mt-10 " method="post">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-[rgba(0.00,0.00,0.00,0.5)] p-5 shadow-lg  shadow-gray">
          <div className="flex gap-2 items-center">
            {/* group h-3 */}
            <CiSearch className="text-[25px] icon" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search jobs here..."
              className="bg-transparent text-orange-500 focus:outline-none w-[100%]"
            />
            <AiOutlineCloseCircle className=" text-[30px] text-gray hover:text-textColor" />
            {/* hidden group-hover:block */}
          </div>
          <div className="flex gap-2 items-center">
            {/* group h-3 */}
            <CiSearch className="text-[25px] icon" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search jobs here..."
              className="bg-transparent text-orange-500 focus:outline-none w-[100%]"
            />
            <AiOutlineCloseCircle className=" text-[30px] text-gray hover:text-textColor" />
            {/* hidden group-hover:block */}
          </div>

          <div className="flex gap-2 items-center">
            {/* group h-3 */}
            <CiSearch className="text-[25px] icon" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search jobs here..."
              className="bg-transparent text-orange-500 focus:outline-none w-[100%]"
            />
            <AiOutlineCloseCircle className=" text-[30px] text-gray hover:text-textColor" />
            {/* hidden group-hover:block */}
          </div>

          <button className=" btn bg-orangeColor h-full rounded-[10px] text-white cursor-pointer px-10 p-4 hover:bg-orangeColor/75">
            Search
          </button>
          <button className="s-icon flex items-center text-orangeColor p-2 ">
            <b>Search</b>
            <CiSearch className=" w-[80px] h-10 " />
          </button>
        </div>
      </form>
      <button className="bg-transparent border-[2px]  border-orangeColor w-fit   absolute left-[55%] top-[130%] rounded-[10px] text-white hover:text-white cursor-pointer px-20 p-4 hover:bg-orangeColor">
        Find jobs
      </button>
    </div>
  );
}

export default Search;
