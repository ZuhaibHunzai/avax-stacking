const Earning = () => {
  return (
    <div className="w-full pb-4">
      <h1 className="text-3xl text-black font-semibold mt-4 text-left">
        Earnings
      </h1>
      <div className="flex justify-between mt-5 flex-col lg:flex-row">
        <div className="w-full md:w-[400px]   h-[auto] min-h-[350px] bg-[#C51E00] text-white rounded-lg text-left p-2 divide-y divide-y-reverse divide-white">
          <div className="divide-y divide-y-reverse divide-white py-4">
            <p className="text-xl font-semibold  ">Total Deposits</p>
            <p className="text-2xl font-bold  pb-4">0.0000ETH</p>
          </div>
          <div className="py-4">
            <p className="text-xl font-semibold  ">Dividends</p>
            <p className="text-2xl font-bold  ">0.0000ETH</p>
          </div>
          <div className=" py-4">
            <p className="text-xl font-semibold  ">
              Available (Referral + Dividend)
            </p>
            <p className="text-2xl font-bold  ">0.0000ETH</p>
          </div>
          <div className="border-none mt-8">
            <button className="w-full bg-[#F6F9FB] text-black text-lg font-semibold rounded-xl py-2 border-none transition duration-300 hover:scale-105">
              Nothing to Withdraw
            </button>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="w-full md:w-[850px]  h-[auto] min-h-[350px] bg-white rounded-lg text-left p-2 divide-y divide-y-reverse divide-[#C51E00]">
            <div className="divide-y divide-y-reverse divide-[#C51E00] py-4">
              <div>
                <p className="text-xl font-semibold  ">Referral link</p>
              </div>
              <div className="flex">
                <div>
                  <p className="text-xl font-bold   pb-4">
                    https://avax.finance/?ref=123423423123123
                  </p>
                </div>
                <div>
                  <div>
                    <button className=" ml-2 bg-[#2664EB] px-1 rounded-lg text-white">
                      copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <p className="text-xl font-semibold  ">Referral Count</p>
              <p className="text-2xl font-bold  ">
                Tier 1: <span className="text-[#C51E00]">0</span> (Rate:5%) Tier
                2: <span className="text-[#C51E00]">0</span> (Rate:3%) Tier 3 :{" "}
                <span className="text-[#C51E00]">0</span> (Rate:2%)
              </p>
            </div>
            <div className=" py-4">
              <p className="text-xl font-semibold  ">
                Available referral earning
              </p>
              <p className="text-2xl font-bold  ">0.0000ETH</p>
            </div>
            <div className=" py-4">
              <p className="text-xl font-semibold  ">Total referral earning</p>
              <p className="text-2xl font-bold  ">0.0000ETH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Earning;
