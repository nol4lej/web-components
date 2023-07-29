export class MiEtiqueta extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
            <h1>Estoy en la etiqueta</h1>
        `
    }

}

customElements.define("mi-etiqueta", MiEtiqueta)