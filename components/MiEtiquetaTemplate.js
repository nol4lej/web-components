const template = () => {
    const template = document.createElement("template")
    template.innerHTML = `
        <style>
            h1{
                color: red;
            }
        </style>
        <div>
            <h1 id="titulo">Mi template</h1>
            <button id="btn">Click</button>
        </div>
    `
    return template
}

export class MiEtiquetaTemplate extends HTMLElement{

    static contador = 0

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.renderizar()
        this.manejarBoton()
    }

    renderizar(){
        const html = template().content.cloneNode((true))
        this.shadowRoot.appendChild(html)
    }

    manejarBoton(){
        const btn = this.shadowRoot.querySelector("#btn")
        btn.addEventListener("click", () => {
            MiEtiquetaTemplate.contador++
            const titulo = this.shadowRoot.querySelector("#titulo")
            titulo.textContent = `Hice click: ${MiEtiquetaTemplate.contador}`
        })
    }
}

customElements.define("mi-etiqueta-template", MiEtiquetaTemplate)