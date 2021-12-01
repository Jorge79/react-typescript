export function tempoSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");

  const horaSegundos = Number(horas) * 3600;
  const minutoSegundos = Number(minutos) * 60;

  return horaSegundos + minutoSegundos + Number(segundos);
}
