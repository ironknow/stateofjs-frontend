import styled from "styled-components"

const StyledLink = styled.div`
  border: 1px solid var(--white);
  color: var(--white);
  padding: 0.5rem 0.5rem;
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    color: var(--red);
    border: 1px solid var(--red);
  }
`

export default StyledLink
