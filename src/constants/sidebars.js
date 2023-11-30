import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { QuestionMark } from "@mui/icons-material";
import LogoutIcon from '@mui/icons-material/Logout';
import * as ROUTES from "./routes";

export const sidebars = [
  {
    title: "Main sidebar",
    icon: <QuestionMark />,
    children: [
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
    ],
  },
  {
    title: "Setting",
    icon: <QuestionMark />,
    children: [
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
      {
        title: "Sensor",
        icon: <QuestionMark />,
        path: ROUTES.SENSOR,
      },
    ],
  },
  {
    title: "Home",
    icon: <HomeIcon />,
    path: ROUTES.HOME,
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    path: ROUTES.LOGIN,
  },
];
