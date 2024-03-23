const PlansCard = ({ plan, percentage, duration, roi, invest, get }) => {
  return (
    <div className="w-[400px] md:w-full h-[auto] min-h-[350px] bg-white p-2 divide-y divide-y-reverse divide-[#C51E00] rounded-xl flex flex-col justify-around">
      <div>
        <p className="text-[#C51E00] font-semibold text-center text-lg uppercase">
          Plan {plan}
        </p>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center pb-2">
          {percentage}% Daily
        </h1>
      </div>
      <div className="w-full flex justify-between py-4 ">
        <div>
          <p className="font-semibold">Duration</p>
        </div>
        <div>
          <p className="font-semibold">{duration} Days</p>
        </div>
      </div>
      <div className="w-full flex justify-between py-4">
        <div>
          <p className="font-semibold">ROI</p>
        </div>
        <div>
          <p className="font-semibold">{roi}%</p>
        </div>
      </div>
      <div className="w-full flex justify-between py-3 bg-[#F6F9FB] rounded-lg">
        <div>
          <p className="font-semibold">minimum {invest}ETH</p>
        </div>
        <div>
          <p className="font-semibold bg-white py-2 px-2 rounded-lg mr-2">
            Return: {get}ETH
          </p>
        </div>
      </div>
      <div className="w-full mt-4 border-none">
        <button className="w-full bg-[#C51E00] text-white text-lg font-semibold rounded-xl py-2 transition duration-300 hover:scale-105">
          Contracts not Started
        </button>
      </div>
    </div>
  );
};
export default PlansCard;
