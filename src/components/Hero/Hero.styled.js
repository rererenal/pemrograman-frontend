import styled from "styled-components";

const StyledHero = styled.div`
  background-color: #CEE7E6;
  color: #5BAEAB;
  padding: 1rem;

  section {
    text-align: center;
  }


  p {
    margin: 1rem 0;
  }

  img {
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
    margin-top: 1rem;
  }
 

  @media screen and (min-width: 768px) {
    section {
      min-height: 400px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: left;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .poster {
      flex-basis: 50%;
    }
    .info {
      flex-basis: 50%;
    }
  }
`;

export default StyledHero;
