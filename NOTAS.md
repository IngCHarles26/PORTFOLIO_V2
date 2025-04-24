### NOTAS DOM

## Seleccionar elementos

```javascript
  const query = document.querySelector('') // los selectores tienen la misma sintaxis que css
  const byId = document.getElementById('') // los 
  const htmlElement = query || byId
  htmlElement.textContent = 'Texto contenido de elemento' // forma de variar el contenido de un elemento

  const query = document.querySelectorAll('') // Retorna todos los elementos html que coinciden con el selector en forma de array
  const htmlElement = query[0]

  htmlElement.clasList.append('holi')
```


## Generar codigo HTML con JS

```javascript
  const nuevoEnlace = document.createElement('a') 
  nuevoEnlace.href = 'www.google.com'
  nuevoEnlace.textContent = 'nuevo enlace'
  nuevoEnlace.classList.add('nuevaclase')
  // <a href="ww.google.com" class="nuevaclase">Nuevo enlace</a>

  const navegacion = document.getElementById('navbar')

  navegacion.appendChild(nuevoEnlace)

```

## Eventos DOCUMENT y WINDOW

```javascript
  console.log('log afuera antes')

  // 'load' espera a que js, css y archivos esten listos para ejecutarse
  window.addEventListener('load', () => {
    console.log('log window load')
  })
  window.onload = () => {
    console.log('log similar a window load')
  }

  // Espera a que se descargue el HTML
  document.addEventListener('DOMContentLoaded', () => {
    console.log('log document load')
  })

  console.log('log afuera despues')

  /* ORDEN DE EJECUCION DE LOGS
    'log afuera antes'
    'log afuera despues'
    'log document load'
    'log window load'
    'log similar a window load'
  */
```

## Eventos Elementos HTML
```javascript
  const elemento = document.querySelector('#idElemento')
  elemento.addEventListener('click', (event) => {
    console.log('Evento click en elemento')
    console.log(event) // informacion del evento
  })

  const elementoInput = document.querySelector('#inputUser')
  elementoInput.addEventListener('change', () => {
    console.log('Evento que se ejecuta cuando termino de editar un input')
  })
  elementoInput.addEventListener('input', (e) => {
    console.log('Evento que se ejecuta en cada cambio de valor del input')
  })

  const datosForm = {}
  const changeData = (e) => {
    datosForm[e.target.name] = e.target.value
  }

```
