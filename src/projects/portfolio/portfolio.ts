import { app } from "../../main";
import { append } from "../../utils/create";
import { headerPortfolio } from "./components/header";
import { infoPortfolio } from "./components/info";

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
  const info = infoPortfolio()

  append(app,header)
  append(app,info)
}