import React from "react"
import PeriodicElements from "../../components/PeriodicElement"
import StyledHeaderMenu from "../../elements/StyledHeaderMenu"
const elements = [
  {
    stars: 0,
    symbol: "St",
  },
  {
    stars: 1,
    symbol: "Js",
  },
  {
    stars: 2,
    symbol: "20",
  },
  {
    stars: 3,
    symbol: "19",
  },
]

const HeaderMenu = () => {
  return (
    <StyledHeaderMenu>
      {elements.map(({ stars, symbol }, index) => {
        return (
          <div key={index}>
            <PeriodicElements
              stars={stars}
              symbol={symbol}
              index={index}
              component={"header"}
            />
          </div>
        )
      })}
    </StyledHeaderMenu>
  )
}

export default HeaderMenu
