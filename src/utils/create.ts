import { D } from "../main";

type Tag = 'div' | 'p' | 'header' | 'nav' | 'button' | 'a' | 'section' | 'svg'


export const createElement = (tag:Tag,style:string,text?:string):HTMLElement => {
  const element = D.createElement(tag)
  element.className = style
  if(text) element.innerText = text

  return element
}

export const append = (father:HTMLElement,son:HTMLElement) => father.appendChild(son) 

export const addEvent = (component:HTMLElement,type:string,event:EventListener) => component.addEventListener(type,event)
