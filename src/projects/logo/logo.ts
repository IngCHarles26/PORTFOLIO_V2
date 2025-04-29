import { append, createElement } from "../../utils/create";

const stlyeLogo = 'font-Cal_Sans text-xl flex flex-col items-center py-1 px-2 hover:scale-105 hover:animate-pulse transition-all cursor-pointer'

export function nameMarkLogo() {
  const div = createElement('div',stlyeLogo + ' rounded-xl border-3 border-neutral-300')

  const styleP = 'h-5 flex items-center text-neutral-300'
  const p1 = createElement('p',styleP,'Carlos')
  const p2 = createElement('p',styleP,'CoDev')

  append(div,p1)
  append(div,p2)

  return div
}

export function faceLogo() {
  const div = createElement('div','flex items-center bg-[#1A64C3] h-10 pb-2 px-1 rounded-md cursor-pointer hover:scale-110 transition-all')

  const style2 = 'font-Tuffy text-2xl scale-y-150 scale-x-75 font-bold'
  const style = 'font-Oswald text-3xl h-8 '
  const p1 = createElement('p',style2,'<')
  const p2 = createElement('p',style,'C_C')
  const p3 = createElement('p',style2,'>')

  append(div,p1)
  append(div,p2)
  append(div,p3)

  return div
}

export function nameLogo() {
  const div = createElement('div',stlyeLogo)

  const style = 'h-5 flex items-center text-neutral-300'
  const p1 = createElement('p',style,'Carlos')
  const p2 = createElement('p',style,'CoDev')

  append(div,p1)
  append(div,p2)

  return div
}