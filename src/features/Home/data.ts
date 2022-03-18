import { IBoxPrice, IBoxService, ITab } from "models/IHome";

export const TABS: ITab[] = [
  {
    text: "Now",
    data: [
      {
        number: "6",
        info: "different IT Software Networks",
      },
      {
        number: "32",
        info: "partners",
      },
      {
        number: "4",
        info: "countries",
      },
    ],
  },
  {
    text: "Future",
    data: [
      {
        number: "10",
        info: "different IT Software Networks",
      },
      {
        number: "90",
        info: "partners",
      },
      {
        number: "7",
        info: "countries",
      },
    ],
  },
];

export const BOX_SERVICES_DATA: IBoxService[] = [
  {
    i: 0,
    name: "Assets",
    image: "/images/assets.png",
    tags: [
      {
        tagName: "G-Book",
        desc: "Inventory Management",
      },
    ],
  },
  {
    i: 1,
    name: "Accounting",
    image: "/images/accounting.png",
    tags: [
      {
        tagName: "G-Book",
        desc: "Accounting",
      },
    ],
  },
  {
    i: 2,
    name: "HR & Admin",
    image: "/images/hr.png",
    tags: [
      {
        tagName: "E-Office",
        desc: "Webmail",
      },
      {
        tagName: "E-Office",
        desc: "E-Apporval",
      },
      {
        tagName: "E-Office",
        desc: "E-Document",
      },
      {
        tagName: "E-Office",
        desc: "E-Check in.out",
      },
      {
        tagName: "E-Office",
        desc: "Co-work/Project",
      },
    ],
  },
  {
    i: 3,
    name: "Sales",
    image: "/images/sales.png",
    tags: [
      {
        tagName: "Fieldmake",
        desc: "Create Homepage <br/> Youtube & Instagram",
      },
    ],
  },
  {
    i: 4,
    name: "Customer",
    image: "/images/customer.png",
    tags: [
      {
        tagName: "OQUFIE",
        desc: "Customer Request Management",
      },
    ],
  },
  {
    i: 5,
    name: "Security",
    image: "/images/security.png",
    tags: [
      {
        tagName: "SECTIGO",
        desc: "SSL server",
      },
    ],
  },
];

export const PRICES_DATA: IBoxPrice[] = [
  {
    name: "Free Test",
    desc: "Organize across all apps by hand",
    price: "0",
    unit: "usd",
  },
  {
    name: "Low Price",
    desc: "Monthly Fixed Amount",
    price: "200.000",
    unit: "usd",
  },
  {
    name: "Easy Using Methods",
    desc: "Various Manuals",
    price: "200.000",
    unit: "usd",
  },
  {
    name: "Verified IT Service",
    desc: "On sale in 4 countries",
    price: "300.000",
    unit: "vnd",
  },
];
