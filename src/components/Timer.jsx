import PropTypes from "prop-types";

const Timer = ({ date }) => {
  return <p className="font-semibold text-xl p-4">{date}</p>;
};

Timer.propTypes = {
  date: PropTypes.string,
};

export default Timer;
