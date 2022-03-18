import classNames from "classnames";
import BoxFeatured from "./BoxFeatured";
import BoxPrice from "./BoxPrice";
import BoxService from "./BoxService";
import { BOX_SERVICES_DATA, PRICES_DATA } from "./data";

function Home() {
  return (
    <div className="">
      <BoxFeatured />
      <p className="py-10 bg-k-lightpink text-2xl text-center">
        You are now viewing an{" "}
        <span className="font-primary-bold">IT Software</span> that has been
        verified by{" "}
        <span className="font-primary-bold">over 1 million users</span>.
      </p>
      <p className="text-center font-primary-bold text-[48px] leading-[65px] pt-20 pb-10">
        IT CLOUD SEA’S IT SERVICE
      </p>
      {BOX_SERVICES_DATA.map((serviceData, index) => (
        <BoxService
          key={`service-${index}`}
          className={classNames({
            "bg-k-lightgray": index % 2 !== 0,
          })}
          {...serviceData}
        />
      ))}
      <div className="bg-k-lighterblue py-32">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-4 md:gap-x-4 xl:gap-x-8 mx-auto max-w-screen-xl">
          {PRICES_DATA.map((priceData, index) => (
            <BoxPrice
              key={`box-price-${index}`}
              className={classNames("border-2 border-transparent", {
                "border-k-pink": index === 2,
                "border-k-pink bg-k-pink": index === 3,
              })}
              {...priceData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
