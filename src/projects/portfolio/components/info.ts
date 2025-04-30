import { append, createElement } from "../../../utils/create";
import { nameLogo } from "../../logo/logo";


export function infoPortfolio () {
  const section = createElement('section','flex flex-col items-center')

  const logo = nameLogo()
  logo.classList.add('scale-[300%]','animate-pulse','pb-5','mt-20','mb-5')

  const name = createElement('p','text-xl my-6 text-[#3B82F6]','Junior Backend Developer')

  const message = createElement('p','text-center mb-5','Creating backend solutions with a strong focus on logic, performance,\n and long-term maintainability.')
  
  const cont = createElement('div','flex gap-5')
  append(cont,github())
  append(cont,link())

  append(section,logo)
  append(section,name)
  append(section,message)
  append(section,cont)

  return section
}


const github = () => {
  const git = createElement('a','')

  git.innerHTML = `
   <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github cursor-pointer hover:scale-110"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>`

  return git
}

const link = () => {
  const edin = createElement('a','')

  edin.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin cursor-pointer hover:scale-110"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>`

  return edin
}