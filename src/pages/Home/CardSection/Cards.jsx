import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const { id, img, title, time, category } = card;
  return (
    <div className="">
      <div className=" p-4 shadow-md rounded-md bg-emerald-100 text-black dark:text-gray-800">
        <div className="">
          <div className="">
            <img
              src={img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-[200px] dark:bg-gray-500"
            />
          </div>
          <div className="">
            <h3 className="text-xl font-bold ">{title}</h3>

            <div className="flex justify-between">
              <p className="leading-snug dark:text-gray-600">{category}</p>
              <p>Time: {time}</p>
            </div>
            <Link to={`/details/${id}`}>
              <button className="btn border-none w-full bg-emerald-600 hover:bg-emerald-800 text-white mt-4">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
