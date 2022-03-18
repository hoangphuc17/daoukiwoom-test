import classNames from "classnames";
import { useState } from "react";
import { TABS } from "./data";
import { IInfoTab } from "models/IHome";

const TabHead = ({
  text,
  active,
  setTab,
}: {
  text: string;
  active: boolean;
  setTab: Function;
}) => {
  return (
    <span
      className={classNames(
        "font-primary-bold text-[22px] text-white mx-10 cursor-pointer pb-4",
        {
          "text-opacity-50": !active,
          "border-b border-white": active,
        }
      )}
      onClick={() => setTab()}
    >
      {text}
    </span>
  );
};
const TabInfo = ({
  data,
  className = "",
}: {
  data: IInfoTab[];
  className?: string;
}) => {
  return (
    <div className={classNames("flex justify-center text-white", className)}>
      {data.map((inf, index) => (
        <div className="text-center w-[140px] mx-[50px]" key={`info-${index}`}>
          <p className="text-[64px] leading-[88px] font-primary-bold">
            {inf.number}
          </p>
          <p className="text-[20px] leading-[27px]">{inf.info}</p>
        </div>
      ))}
    </div>
  );
};

const BoxFeatured = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="grid lg:grid-cols-auto-1fr">
      <div className="w-full lg:w-[36vw] pl-20 pr-10 relative">
        <div className="flex justify-between items-center mt-9">
          <img src="/images/logo.png" alt="logo" className="w-[176px]" />
          <span className="inline-flex">
            <img src="/icons/home.svg" alt="" />
            <span className="text-sm font-primary-bold ml-3">Home</span>
          </span>
        </div>
        <h1 className="font-primary-bold text-[56px] leading-[76px] absolute top-1/2 -translate-y-1/2">
          Asia IT <br /> Market Place
        </h1>
      </div>
      <div className="relative">
        <img src="/images/bg.png" alt="" />
        <div className="absolute w-full h-full top-0 left-0">
          <div className="inline-block mt-9 relative">
            <div className="flex text-sm text-white py-[5px]">
              <a href="/" className="mx-9">
                Auto Homepage
              </a>
              <a href="/" className="mx-9">
                Sales
              </a>
              <a href="/" className="mx-9">
                CRM
              </a>
              <a href="/" className="mx-9">
                Electronic office
              </a>
              <a href="/" className="mx-9">
                Cloud ERP
              </a>
              <a href="/" className="mx-9">
                SSL
              </a>
            </div>
            <div className="absolute -top-9 right-0 flex justify-end text-k-lightblue text-sm py-2">
              <span className="flex items-center mx-9">
                <span className="mr-3">EN</span>
                <img src="/icons/chevron.svg" alt="icon" />
              </span>
              <span className="flex items-center mx-9">
                <span className="mr-3">Company</span>
                <img src="/icons/chevron.svg" alt="icon" />
              </span>
              <span className="flex items-center mx-9">
                <span className="mr-3">Partner Market Place</span>
                <img src="/icons/chevron.svg" alt="icon" />
              </span>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full">
            <div className="flex justify-center">
              {TABS.map((t, index) => (
                <TabHead
                  key={`tab-head-${index}`}
                  text={t.text}
                  active={tab === index}
                  setTab={() => setTab(index)}
                />
              ))}
            </div>
            {TABS.map((t, index) => (
              <TabInfo
                key={`tab-info-${index}`}
                data={t.data}
                className={classNames("mt-10", {
                  hidden: tab !== index,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BoxFeatured;
