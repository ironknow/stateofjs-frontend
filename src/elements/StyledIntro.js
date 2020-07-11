import styled from "styled-components"

const StyledDescription = styled.div`
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    margin-top: 85px;
    width: 550px;
    height: 500px;
    border: solid 2px white;
    background-color: var(--dark);
  }
  .description-header {
    height: 98px;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
  }
  .description-header-square {
    position: relative;
    width: 100px;
    height: 98px;
    background-color: var(--dark);
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 500;
    font-size: 3rem;
  }
  .description-header-title {
    font-size: 1.3rem;
    font-weight: 600;
    width: 400px;
    margin-left: 20px;
    line-height: 34px;
  }

  .description-content {
    color: white;
    font-size: 19px;
    foont-weight: 300px;
    text-align: justify;
    padding: 30px 42px;
    line-height: 30px;
    font-weight: 200;
  }
  .view-results {
    width: 250px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid white;
    color: white;
    font-size: 1.3rem;
    font-weight: 600;
    margin: 35px auto 0 auto;
    background-color: var(--dark);
    &:hover {
      cursor: pointer;
      color: var(--red);
      border: 2px solid var(--red);
    }
  }
`

export default StyledDescription
