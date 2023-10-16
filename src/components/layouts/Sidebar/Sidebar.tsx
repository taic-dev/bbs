import * as React from "react";
import styled from "@emotion/styled";
import { SIDEBAR_ITEMS } from "./constants/constants";
import { SidebarItemsType } from "./types";

export function Sidebar() {
  const SidebarItem = styled.li`
    display: flex;
    justify-content: center;

    span {
      margin-right: 10px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 2rem 0;
      text-align: center;
      transition: 0.5s;
      :hover {
        color: #333;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
          rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        transition: 0.3s;
      }
    }
  `;

  return (
    <ul>
      {SIDEBAR_ITEMS.map(
        ({ itemName, svgComponent, link }: SidebarItemsType ,index) => (
          <SidebarItem key={index}>
            <a href={link}>
              <span>{svgComponent}</span>
              <p>{itemName}</p>
            </a>
          </SidebarItem>
        )
      )}
    </ul>
  );
}
