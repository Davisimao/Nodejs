import os from 'os';

function InfoPc() {
  const nameOS = os.platform()
  const arch = os.arch()
  const processor = os.cpus()
  const memoryfree = os.freemem()
  const memory = os.totalmem()
  const date = new Date()

  return `
  ====================================
  Segundos: ${date.getSeconds()}
  Nome do sistema Operacional = ${nameOS}
  Arquitetura do sistema = ${arch}
  Nome do processador= ${processor[0].model} 
  Uso da memoria = ${(memory - memoryfree) / 1024 / 1024 / 1024} GB 
  `
}







export default InfoPc