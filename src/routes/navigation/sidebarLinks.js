import { ACCEUIL_PATH, PRODUCTS_PATH, CONNEXION } from "./navigationPaths";
import { MdDashboard } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";

/*
|--------------------------------------------------------------------------
! Sidebar Items
|--------------------------------------------------------------------------
|
| Ici se trouve tous les liens et icons qui doivent etre sur le sidebar
| de SplitShell
*/
export const links = [
  { path: ACCEUIL_PATH, icon: MdDashboard, label: "Dashboard" },
  { path: PRODUCTS_PATH, icon: IoSchoolSharp, label: "Classes" },
  { path: PRODUCTS_PATH, icon: MdDashboard, label: "Frais de scolarité" },
  { path: CONNEXION, icon: MdDashboard, label: "Inscription" },
];
