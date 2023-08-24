const BotaoConclui = () => {
  const botaoConclui = document.createElement('i')
  botaoConclui.classList.add('check-button')
  botaoConclui.addEventListener('click', concluirTarefa)
  return botaoConclui
}

const concluirTarefa = evento => {
  const botaoConclui = evento.target
  const tarefaCompleta = botaoConclui.parentElement
  tarefaCompleta.classList.toggle('done')
}
export default BotaoConclui
