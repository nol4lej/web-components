export class MiEtiqueta extends HTMLElement{

    constructor(){
        super()
        this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = `
            <style>
                h1{
                    color: blue;
                }
            </style>
            <h1>Estoy en la etiqueta</h1>
        `
    }
}

customElements.define("mi-etiqueta", MiEtiqueta)