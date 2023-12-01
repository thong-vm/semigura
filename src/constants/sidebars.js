import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { QuestionMark } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import * as ROUTES from "./routes";

export const sidebars = [
  {
    title: "Main sidebar",
    icon: <QuestionMark />,
    children: [
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
    ],
  },
  {
    title: "Setting",
    icon: <QuestionMark />,
    children: [
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
      {
        title: ROUTES.SENSOR.TITLE,
        icon: <QuestionMark />,
        path: ROUTES.SENSOR.PATH,
      },
    ],
  },
  {
    title: ROUTES.HOME.TITLE,
    icon: <HomeIcon />,
    path: ROUTES.HOME.PATH,
  },
  {
    title: ROUTES.LOGOUT.TITLE,
    icon: <LogoutIcon />,
    path: ROUTES.LOGOUT.PATH,
  },
];
