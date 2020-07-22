import styled from "styled-components"

const StyledAbout = styled.div`
  margin-top: 100px;
  width: 550px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 90%;
  }

  .about-description {
    margin-top: 40px;
    magin-top: 80px;
    font-weight: 600;
    width: 300px;
    @media (max-width: 768px) {
      width: 100%;
    }

    .about-text {
      margin-top: 10px;
      color: white;
      font-size: 0.9rem;
      line-height: 1.8rem;
      font-weight: 300;
    }
    .about-link {
      color: var(--green-fluo);
    }
  }
`
export default StyledAbout
