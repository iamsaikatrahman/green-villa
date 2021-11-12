import { FaStar } from "react-icons/fa";
const Ratings = ({ value }) => {
  return (
    <div>
      {[...Array(5)].map((ignore, ind) => {
        return (
          <span key={ind}>
            {value >= ind + 1 && (
              <FaStar className="inline text-yellow-300 text-xl" />
            )}
          </span>
        );
      })}
    </div>
  );
};
export default Ratings;
