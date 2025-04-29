import { append, createElement,  } from "../../../utils/create";
import { faceLogo } from "../../logo/logo";


export function headerPortfolio(){
  const header = createElement('header','flex justify-center')
  
  const navBar = createElement('nav','flex justify-between items-center w-full max-w-[60rem] p-2')
  
  const items = createElement('div','w-1/2 flex justify-between')
  
  const text_options = ['About','Projects','Skills']
  
  const logo = faceLogo()
  const options = text_options.map( option => createElement('p','cursor-pointer hover:scale-110 font-bold transition-all',option)) 
  const contact = createElement('p','bg-[#3B82F6] p-2 font-bold rounded-md cursor-pointer hover:scale-110 transition-all','CONTACT')

  options.forEach( option => append(items,option))

  append(navBar,logo)
  append(navBar,items)
  append(navBar,contact)
  
  append(header,navBar)

  return header
}