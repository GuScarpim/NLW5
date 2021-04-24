export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = duration % 60

  //Adiciona o 0 na frete se tiver apenas 1 caractere
  const finalResult = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return finalResult
}