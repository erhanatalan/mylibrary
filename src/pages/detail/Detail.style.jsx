import styled from "styled-components";
import Flex from "../../styles/Flex"

export const DetailContainer = styled(Flex)`
    flex-direction:column;
    padding:1rem;
`
export const DetailTitle = styled.h1`
    text-align:center;
    margin:25px;
`
export const DetailImage =styled.div`
    margin:2rem;
    display:flex;
    justify-content:center;
    img{
        width:45%;
        max-width:200px;
        /* height:50vh; */
        border-radius:1rem;
    }
`

export const DetailDescription = styled.div`
    min-width:40%;
    text-align:justify;
    font-size:1.5rem;
    margin:1rem 2rem;

`
export const DetailInfo = styled.div`
    min-width:40%;
    text-align:center;
    font-size:1.4rem;
    margin: 1rem;
    span{
        margin:1rem;
    }
`

