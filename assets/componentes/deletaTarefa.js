const BotaoDeleta = () => {
  const botaoDeleta = document.createElement('i')
  botaoDeleta.classList.add('delete-button')
  // botaoDeleta.innerText = 'Excluir'
  botaoDeleta.addEventListener('click', deletarTarefa)
  return botaoDeleta
}

const deletarTarefa = evento => {
  const botaoDeleta = evento.target
  const tarefaCompleta = botaoDeleta.parentElement

  //validar se esta concluido

  if (!evento.target.parentElement.classList.contains('done')) {
    swal('Tarefa não concluida para excluir!')
  } else {
    swal('Tarefa excluida com sucesso!')
    tarefaCompleta.remove()
    return botaoDeleta
  }
}

export default BotaoDeleta
