export class MiSegEtiqueta extends HTMLElement{

    connectedCallback(){
        const div = document.createElement("div")
        div.textContent = "Soy el div en mi MiSegEtiqueta"
        this.appendChild(div)

        const titulo = document.createElement("h2")
        titulo.textContent = "Soy el titulo de MiSegEtiqueta"
        div.appendChild(titulo)
    }

}

customElements.define("mi-segunda-etiqueta", MiSegEtiqueta)