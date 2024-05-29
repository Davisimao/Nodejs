import InfoPc from "./InfoPc.js";
import Write from "./writetxt.js";

setInterval(() => {
  console.log(Write(InfoPc()))
}, 1000);
