const Footer = () => {
  return (
    <div className="bg-k-lighterblue border-t">
      <div className="xl:max-w-screen-xl mx-auto grid lg:grid-cols-3">
        <div className="p-8">
          <p className="font-primary-bold text-[22px] leading-[30px]">
            Vietnam Office
          </p>
          <p className="text-k-done text-sm mt-5">
            14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city
          </p>
          <p className="text-k-done text-sm mt-4">
            Business resigtration: 0315421202
          </p>
          <p className="text-k-done text-sm mt-4">Tel: 028-3520-2367</p>
          <p className="text-k-done text-sm mt-4">
            Copyright 2021 DaouKiwoom Innocation C0., Ltd
          </p>
        </div>
        <div className="p-8 border-l-2 border-r-2">
          <p className="font-primary-bold text-[22px] leading-[30px]">
            Indonesia Office
          </p>
          <p className="text-k-done text-sm mt-5">
            Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI
            Jakarta 12190, Indonsia
          </p>
          <p className="text-k-done text-sm mt-5">Tel: +62-21-5082-0038</p>
        </div>
        <div className="p-8">
          <p className="font-primary-bold text-[22px] leading-[30px]">
            Korea Office
          </p>
          <p className="text-k-done text-sm mt-5">
            5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si,
            Gyeonggi-do, Korea
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
