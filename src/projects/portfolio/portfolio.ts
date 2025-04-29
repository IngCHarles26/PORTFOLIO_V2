import { app } from "../../main";
import { append } from "../../utils/create";
import { headerPortfolio } from "./components/header";

/*
  header
  info
  about
  projects
  skils
  contact
  footer
*/




export function portfolio() {
  const header = headerPortfolio()

  append(app,header)
}