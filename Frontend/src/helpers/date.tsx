export const dateFormatConverter = (date: string) => {
  const dateFormatted = date.split("T")[0]
  const timeFormatted = date.split("T")[1]
  return formattDate(dateFormatted, timeFormatted)
}

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

const formattDate = (date: any, time: any) => {
  const dateParts = date.split('-');
  const data = new Date(dateParts);
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear()

  const timeParts = time.split(':');

  return [data.getDate() + ' de ' + mes.toLowerCase() + ' de ' + ano + ' às ' + timeParts[0] + ':' + timeParts[1]];
}
