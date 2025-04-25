import './style.css'

export const D = document

export const app = D.getElementById('app')
//< class=''></>
const logo = D.createElement('div')

logo.className = 'flex gap-2 items-center p-2'
logo.innerHTML = /*html*/ `
<div class='h-16 w-16 rounded-xl flex justify-center items-center bg-[#1A64C3]'>
  <p class='font-Tuffy text-2xl pb-2 font-bold'>&lt; </p>
  <p class='font-Oswald text-3xl h-min pb-1'>C_C</p>
  <p class='font-Tuffy text-2xl pb-2 font-bold'>&gt;</p>
</div>
<div class='font-Cal_Sans text-xl font-bold'>
  <p class=''>Carlos</p>
  <p class=''>CoDev</p>
</div>
`




app?.appendChild(logo)