import { portfolio } from './projects/portfolio/portfolio'
import './style.css'

export const D = document
export const app = D.getElementById('app')!
//< class=''></>
//rounded-xl border-3 border-neutral-300
const logo = D.createElement('div')

// logo.className = 'flex items-center gap-0'


logo.innerHTML = `
<div class='flex items-center bg-[#1A64C3] h-10 pb-2 px-1 rounded-md'>
  <p class='font-Oswald text-3xl h-8 scale-y-200 scale-x-75'>&lt;</p>
  <p class='font-Oswald text-3xl h-8'>C_C</p>
  <p class='font-Oswald text-3xl h-8 scale-y-200 scale-x-75'>&gt;</p>
</div>
<!-- <div class='font-Cal_Sans text-xl flex flex-col items-center  py-1 px-2 hover:scale-105 hover:animate-pulse transition-all hover:cursor-pointer'>
  <p class='h-5 flex items-center text-neutral-300'>CarLos</p>
  <p class='h-5 flex items-center text-neutral-300'>CoDev</p>
</div> -->
`

// app?.appendChild(logo)

portfolio()