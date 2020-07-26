import React from "react"
import PeriodicElements from "./PeriodicElement"
import StyledMenuContact from "../elements/StyledMenuContact"
import { Mail, GitHub, Linkedin, Facebook } from "react-feather"

const contact = [
  {
    href: "https://www.facebook.com/lila.guillermic",
    symbol: <Facebook color="white" size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/lila-guillermic-66542476/",
    symbol: <Linkedin color="white" size={20} />,
  },
  {
    href: "https://github.com/LilaGuill",
    symbol: <GitHub color="white" size={20} />,
  },
  {
    href: "mailto:lila.guillermic@gmail.com",
    symbol: <Mail color="white" size={20} />,
  },
]

const MenuContact = () => {
  return (
    <StyledMenuContact>
      {contact.map(({ href, symbol }, index) => {
        return (
          <a key={index} href={href} target="_blank" rel="noopener noreferrer">
            <PeriodicElements symbol={symbol} component={"contact"} />
          </a>
        )
      })}
    </StyledMenuContact>
  )
}

export default MenuContact
