import styled from "styled-components"

const StyledHeaderChart = styled.div`
  border-bottom: 1px solid #5d6069;
  display: flex;
  justify-content: space-between;
  height: 45px;
  align-items: center;
  .label {
    font-size: 20px;
    color: var(--white);
    font-weight: 800;
  }
  .links {
    display: flex;
    margin-bottom: 1rem;
  }
`
export default StyledHeaderChart
