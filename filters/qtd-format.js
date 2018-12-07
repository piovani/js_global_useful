export function qtdFormat (number) {
  if (parseInt(number) > 1000) {
    let rawQuotient = Math.floor(parseInt(number) / 1000)
    let remainder = parseInt(number) % 1000
    let decimal = Math.floor(parseInt(remainder) / 100)

    return String(rawQuotient) + '.' + String(decimal) + 'K'
  }

  return parseInt(number) < 10 ? '0' + String(number) : number
}
