import styled from "styled-components";

function Footer() {

    const StyledFooter = styled.footer`
        background-color: #CEE7E6;
        padding: 1rem;
        color: #5BAEAB;
        text-align: center;
    `

    return (
        <StyledFooter>
            <h2>Movie App</h2>
            <p>Develop by Mowwie</p>
        </StyledFooter>
    );
}

export default Footer;