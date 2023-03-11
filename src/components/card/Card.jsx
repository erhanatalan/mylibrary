import CardHeader from "react-bootstrap/esm/CardHeader";
import { CardButton, CardContainer, CardImg } from "./Card.style";
import defaultImg from "../../assets/book.jpg"
import { useNavigate } from "react-router-dom";

const Card = ({item}) => {
  const navigate = useNavigate()

  return (
    <CardContainer>
      <CardHeader>{item?.volumeInfo?.title}</CardHeader>
      <CardImg src={item?.volumeInfo?.imageLinks?.thumbnail || defaultImg} alt={item?.volumeInfo?.title} />
      <CardButton onClick={()=> navigate(`/detail/${item.id}`, {state:item})}>View More</CardButton>

    </CardContainer>
  )
}

export default Card;