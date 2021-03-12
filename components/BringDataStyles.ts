import styled from 'styled-components'

export const BringDataStyles = styled.div`
height:100vh;
width:100%;

display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

h1 {
    margin-top:0;
    margin-bottom:0;
    font-size:5rem;
    font-family: 'Montserrat', sans-serif;
    text-align:center;
}

h3 {
    margin-top:0;
    margin-bottom:1.5rem;
    font-size:1.8rem;
    font-family: 'Montserrat', sans-serif;
    text-align:center;
}

.mainContainer {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;

    div {

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    height:10rem;
    width:12rem;
    margin:1rem 1rem;
    padding:0.4rem 0.2rem;

    font-size:1.4rem;
    font-family: 'Montserrat', sans-serif;
    text-align:center;
    
    box-shadow:0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4);

        :hover{
            background-color: #4953b8;
            color: #fff;
        }

    p {
        font-size:1.8rem;
        font-weight:600;
        font-family: 'Montserrat', sans-serif;
        text-align:center;
    }

}

}
`