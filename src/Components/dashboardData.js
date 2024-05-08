import dashboard from "../assets/dashboard.svg";
import myOrders from "../assets/myOrders.svg";
import myServices from "../assets/myServices.svg";
import hotlineServices from "../assets/hotlineServices.svg";
import billing from "../assets/billing.svg";
import settings from "../assets/settings.svg";
import help from "../assets/help.svg";
import logout from "../assets/logout.svg";

const dashboardData = [
  {
    id: 1,
    name: "Dashboard",
    iconSrc: dashboard,
    showArrowIcon: false,
  },
  {
    id: 2,
    name: "My Orders",
    iconSrc: myOrders,
    showArrowIcon: false,
  },
  {
    id: 3,
    name: "My Services",
    iconSrc: myServices,
    showArrowIcon: true,

    subItems: [
      {
        id: 31,
        name: "All Services",
      },
      {
        id: 32,
        name: "Privacy Services",
      },
      {
        id: 33,
        name: "Regulascope",
      },
      {
        id: 34,
        name: "Decisions",
      },
      {
        id: 35,
        name: "Training",
      },
      {
        id: 36,
        name: "Document Warehouse",
      },
      {
        id: 37,
        name: "Tickets Services",
      },
    ],
  },
  {
    id: 4,
    name: "Hotline Services",
    iconSrc: hotlineServices,
    showArrowIcon: true,
    subItems: [
      {
        id: 41,
        name: "Privacy Services",
      },
    ],
  },
  {
    id: 5,
    name: "Billing and Invoicing",
    iconSrc: billing,
    showArrowIcon: false,
  },
  {
    id: 6,
    name: "General Settings",
    iconSrc: settings,
    showArrowIcon: false,
  },
  {
    id: 7,
    name: "Support/Help Desk",
    iconSrc: help,
    showArrowIcon: false,
  },
  {
    id: 8,
    name: "Logout",
    iconSrc: logout,
    showArrowIcon: false,
  },
];

export default dashboardData;
