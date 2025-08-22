import { useEffect } from "react"

const CENTRO_X = window.innerWidth / 2
const CENTRO_Y = window.innerHeight / 2

export function Circulito({ x, y }) {


    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            console.log(`se movio el mouse (x:${e.clientX};y:${e.clientY})`)
            console.log(`el centro de la pantalla es: ${CENTRO_X} , ${CENTRO_Y}`)
            const x = CENTRO_X - e.clientX
            const y = CENTRO_Y - e.clientY
            const difuminado = Math.sqrt(x ** 2 + y ** 2)

            const circulito = document.querySelector("#circulito")
            circulito.style.boxShadow = `${x}px ${y}px ${difuminado}px black`

        })
    }, [])

    return (
        <div class="centrado" id="circulito">
            <h1 className="playwrite-ca">Esta es mi pagina web</h1>
        </div>
    )
}