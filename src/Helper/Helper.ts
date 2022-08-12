export const Round = (value: number, precision = 2) =>
  Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision)

export const GetAvrage = (data: number[]) => {
  let arr = data.filter(function (el?: number) {
    return el != null
  })
  const avg = arr.reduce((p, c) => p + c, 0) / arr.length
  return Math.round(avg * 100) / 100
}
