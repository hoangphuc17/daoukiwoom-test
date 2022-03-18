import classNames from "classnames";
import { IBoxPrice } from "models/IHome";

const BoxPrice = (props: IBoxPrice) => {
  const { className = "", desc, name, price, unit } = props;
  return (
    <div
      className={classNames(
        "shadow-price rounded-[10px] py-10 pl-10",
        className
      )}
    >
      <p className="font-third-bold text-[22px] leading-[33px]">{name}</p>
      <p className="font-third-bold text-xs">{desc}</p>
      <div className="mt-8 flex">
        <p
          className={classNames(
            "font-primary-bold leading-[65px] text-k-black",
            {
              "text-[64px]": price === "0",
              "text-[36px]": price !== "0",
            }
          )}
        >
          {price}
        </p>
        <div className="ml-[10px]">
          <p className="font-third-bold text-[22px] leading-[33px]">
            {unit === "usd" ? "$" : "VND"}
          </p>
          <p className="font-third-bold text-xs">Per month</p>
        </div>
      </div>
    </div>
  );
};
export default BoxPrice;
