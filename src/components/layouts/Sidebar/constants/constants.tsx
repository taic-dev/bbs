
import { SidebarItemsType } from "../types"
import { HomeSvg } from "@/components/elements/Svg/HomeSvg"
import { ModalSvg } from "@/components/elements/Svg/ModalSvg"
import { TableSvg } from "@/components/elements/Svg/TableSvg"
import { CardSvg } from "@/components/elements/Svg/CardSvg"

export const SIDEBAR_ITEMS: SidebarItemsType[] = [
  { itemName: 'HOME', svgComponent: <HomeSvg />, link: "/" },
  { itemName: 'CARD', svgComponent: <CardSvg />, link: "/card" },
  { itemName: 'TABLE', svgComponent: <TableSvg />, link: "/table" },
  { itemName: 'MODAL', svgComponent: <ModalSvg />, link: "/modal" },
]