import styled from "styled-components"

const StyledFooter = styled.footer`
  margin-top: 40px;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }

  .footer-link {
    color: var(--green-fluo);
  }
`

export default StyledFooter
