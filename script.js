document.getElementById("formAgendamento").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const hora = document.getElementById("hora").value;
  const especialidade = document.getElementById("especialidade").value;

  const lista = document.getElementById("listaConsultas");

  const item = document.createElement("li");
  item.textContent = `Paciente: ${nome} | Data: ${data} | Hora: ${hora} | Especialidade: ${especialidade}`;
  lista.appendChild(item);

  document.getElementById("formAgendamento").reset();
});
