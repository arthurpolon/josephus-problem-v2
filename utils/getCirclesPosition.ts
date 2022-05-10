import { IGetCirclesProps } from './types'

export const getCirclesPosition = ({
  circlesAmount,
  parentHeight,
}: IGetCirclesProps) => {
  const baseRadian = (2 * Math.PI) / circlesAmount
  const radius = parentHeight
  const offsetToParentCenter = parentHeight / 2
  const offsetToChildCenter = 20
  const totalOffset = offsetToParentCenter - offsetToChildCenter

  const createCircle = (index: number) => {
    const realIndex = index

    const x = -Math.sin(baseRadian * realIndex) * radius
    const y = Math.cos(baseRadian * realIndex) * radius

    return {
      top: `${totalOffset - y}px`,
      left: `${totalOffset - x}px`,
    }
  }

  const circles = new Array(circlesAmount)
    .fill(null)
    .map((_, index) => createCircle(index))

  return circles
}
