import { planCardsData } from "../assets/data";
import PlansCard from "./plansCard";

const ContractStart = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="w-full mt-8">
        <div className="bg-[#C51E00] py-4 rounded-xl">
          <p className="text-white uppercase font-semibold">
            Contract Starts in:
          </p>
          <h1 className="text-3xl text-white font-semibold ">
            01 Days 22 Hours 08 Minutes 25 Seconds
          </h1>
        </div>
        <div className="w-full text-left ">
          <h1 className="text-3xl text-black font-semibold mt-4">
            Choose your plan
          </h1>
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 justify-items-stretch grid-flow-row">
            {planCardsData?.map((data, index) => {
              return (
                <div key={index}>
                  <PlansCard
                    plan={data.plan}
                    percentage={data.percentage}
                    duration={data.duration}
                    roi={data.roi}
                    invest={data.invest}
                    get={data.get}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContractStart;
