export const getDeathOrder = (totalPositions: number, positionsToSkip = 2) => {
  const allPositions: Array<number> = new Array(totalPositions)
    .fill(null)
    .map((_, index) => index + 1)

  const deathOrder = []

  while (allPositions.length !== 1) {
    for (let skip = 1; skip < positionsToSkip; skip++) {
      const lastElement = allPositions.shift()

      if (lastElement) {
        allPositions.push(lastElement)
      }
    }

    const lastElement = allPositions.shift()

    if (lastElement) {
      deathOrder.push(lastElement)
    }
  }

  return deathOrder
}
