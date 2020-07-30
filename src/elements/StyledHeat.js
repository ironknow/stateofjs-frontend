import styled, { css } from "styled-components"

export const StyledHeat = styled.div`

  width: 100%;
  height: 340px;
  display:flex;
  flex-direction:column;
  margin-top:2rem;

  .legend{
    display:flex;
    width:100%,
    height:50px;
    align-items:center;
    justify-content:space-between;
 
    .graph{
      display:flex;
    }
    .title{
      font-size:14px;
      line-height:24px;
      font-weight:800;  
    }
    .key{
      width:68px;
      height:60px;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:14px;
      line-height:24px;
      font-weight:800;
      @media (max-width: 968px) {
  
        width: 40px;
        height: 20px;
        font-size: 10px;
      }
      
    }
  }
  .def{
    display:flex;
    justify-content:flex-end;
    width:100%
    height:50px;
    margin-top:1rem;
    padding-right:25px;
    @media (max-width: 968px) {
      display:none;
    }

    .item{
      width:40px;
      height:40px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
     
    }
    span{
      font-size:14px;
    }
    .color{
      height:0.3rem;
      width:40px;
      height:0.2rem;
    }

  }
`

export const StyledLine = styled.div`
  display:flex;
  width:100%,
  height:50px;
  align-items:center;
  justify-content:space-between;
  padding-left:1rem;
  cursor:pointer;

 
  ${({ index, hover }) =>
    hover !== null &&
    index === hover &&
    css`
      background: #2a2d33;
    `}

  ${({ index, hover }) =>
    hover !== null &&
    index !== hover &&
    css`
      background: #484848;
      opacity: 0.1;
    `}

    ${({ index, hover }) =>
      index === 0 &&
      !hover &&
      css`
        background: #2a2d33;
      `}

    ${({ index, hover }) =>
      index === 2 &&
      !hover &&
      css`
        background: #2a2d33;
      `}

    ${({ index, hover }) =>
      index === 4 &&
      !hover &&
      css`
        background: #2a2d33;
      `}

  .title{
    height:40px;
    font-size:14px;
    line-height:24px;
    text-transform:capitalize;
    display:flex;
    align-items:center;
   
  }
  
  .graph{
    display:flex;
  }


`

export const StyledData = styled.div`
  width: 68px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: black;
  @media (max-width: 968px) {
  
    width: 40px;
    height: 20px;
    font-size: 10px;
  }

  ${({ data }) =>
    data < 1 &&
    css`
      background: #2f555a;
    `}
  ${({ data }) =>
    data >= 1 &&
    data < 10 &&
    css`
      background: #336b6f;
      opacity: 0.8;
    `}
    ${({ data }) =>
      data >= 10 &&
      data < 20 &&
      css`
        background: #368385;
        opacity: 0.8;
      `}
    ${({ data }) =>
      data >= 20 &&
      data < 30 &&
      css`
        background: #368385;
        opacity: 0.8;
      `}
    ${({ data }) =>
      data >= 30 &&
      css`
        background: #3cb1b2;
        opacity: 0.8;
      `}
`
