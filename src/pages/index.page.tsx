import { useEffect, useState } from 'react'
import { getCirclesPosition } from 'utils/getCirclesPosition'
import { getDeathOrder } from 'utils/getDeathOrder'
import scss from './Home.module.scss'

const POSITIONS_AMOUNT = 6

const INITIAL_STATE: boolean[] = new Array(POSITIONS_AMOUNT).fill(true)

const DEATHS_ORDER = getDeathOrder(POSITIONS_AMOUNT)
const CIRCLES_STYLES = getCirclesPosition({
  circlesAmount: POSITIONS_AMOUNT,
  parentHeight: 150,
})

const Home = () => {
  const [alivePositions, setAlivePositions] = useState(INITIAL_STATE)

  const classJoined = [scss.circle, scss.active].join(' ')

  useEffect(() => {
    function disableCircle(position: number) {
      const positionIndex = position - 1

      setAlivePositions((prevState) => {
        const newArray = [...prevState]

        newArray[positionIndex] = false

        return newArray
      })
    }

    let currentRound = 0

    const interval = setInterval(() => {
      disableCircle(DEATHS_ORDER[currentRound])

      currentRound++

      if (currentRound === POSITIONS_AMOUNT) {
        clearInterval(interval)
      }
    }, 500)
  }, [])

  return (
    <div className={scss.container}>
      <div className={scss.parentDiv}>
        {new Array(POSITIONS_AMOUNT).fill(null).map((_, index) => {
          return (
            <div
              key={Math.random()}
              className={alivePositions[index] ? classJoined : scss.circle}
              style={CIRCLES_STYLES[index]}
            >
              {index + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
