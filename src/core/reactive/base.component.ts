export default class BaseComponent extends HTMLElement {
    protected static selector = "base-component"; // Nome dinâmico do componente
  
    // Atributos observados para detectar mudanças
    static get observedAttributes(): string[] {
      return ["title"];
    }
  
    // Registrando o componente
    static register(): void {
      customElements.define(this.selector, this);
    }
  
    // Shadow DOM para encapsulamento
    //protected shadow: ShadowRoot;
  
    // Construtor do componente
    constructor() {
      super();
      //this.shadow = this.attachShadow({ mode: "open" });
    }
  
    // Quando o componente é montado no DOM
    connectedCallback(): void {
      this.render();
    }
  
    // Quando um atributo muda
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
      if (oldValue !== newValue) {
        this.render();
      }
    }
  
    // Método a ser sobrescrito pelos filhos para adicionar html personalizados
    protected customHtml(): string {
      return "";
    }
  
    // Método protegido para renderizar o conteúdo HTML
    protected render(): void {
      const html = this.customHtml();
      this.innerHTML = `${html}`;
  
      this.attachEvents();
    }
  
    // Método para adicionar eventos
    protected attachEvents(): void {
      const button = this.querySelector("#alertButton") as HTMLButtonElement;
      button?.addEventListener("click", () => {
        alert(`Você clicou no botão do "${this.getAttribute("title") || "Meu Componente"}"!`);
      });
    }
  }