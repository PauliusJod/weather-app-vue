export const formatDate = (data: object): string[] => {
  const result: string[] = []
  const values = Object.values(data)
  for (let i = 0; i < values.length; i++) {
    const date = new Date(values[i])
    const time = date.toLocaleString('default', {
      hour: '2-digit',
      hour12: false,
    })
    result.push(`${time}:00`)
  }
  return result
}

export const sortArrays = (array: string[]) => {
  if (array == undefined) return null
  const result: object[] = []
  const itemsPerChunk = 23
  const totalChunks = 7
  for (let index = 1; index <= totalChunks; index++) {
    const chunk = array.filter(
      (_, i) =>
        itemsPerChunk * (index - 1) + (index - 1) <= i &&
        i < itemsPerChunk * index + index - 1,
    )
    result.push(chunk)
  }
  return result
}
