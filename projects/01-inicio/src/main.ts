import "./style.css";

// NOTE: Ejercicios
// import "./clean-code/01-names";
// import "./clean-code/02-name-types";
// import "./clean-code/03-functions";
// import "./clean-code/04-homework";
// import "./clean-code/05-dry";
// import "./clean-code/06-classes-a";
// import "./clean-code/06-classes-b";
// import "./clean-code/06-classes-c";
// import "./clean-code/07-tarea";
// import "./solid/01-single-responsibility-principle-srp";
// import "./solid/02-open-close-principle-ocp-a";
// import "./solid/03-liskov-substitution-principle-lsp-a";
// import "./solid/04-interface-segregation-principle-isp";
import "./solid/05-dependency-inversion-principle-dip-a";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
