import { useLocation, useParams } from "react-router-dom";
import { DetailContainer, DetailDescription, DetailImage, DetailInfo, DetailTitle } from "./Detail.style";
import defaultImg from "../../assets/book.jpg"

const Detail = () => {
  const {state} = useLocation();
  const {id}= useParams();
  // console.log(id);
  // console.log(state);
  return (
    <DetailContainer>
      <DetailTitle>{state?.volumeInfo?.title}</DetailTitle>
      <DetailImage>
        <img src={state?.volumeInfo?.imageLinks?.smallThumbnail || defaultImg} alt={state.volumeInfo.title} />
      </DetailImage>
      <DetailDescription>{state?.volumeInfo?.description}</DetailDescription>
      <DetailInfo>{state?.volumeInfo?.authors.map((item)=> <span key={item}>Author:{item}</span>)}</DetailInfo>
      <DetailInfo>{state?.volumeInfo?.publishedDate}</DetailInfo>
      <DetailInfo>{state?.volumeInfo?.publisher}</DetailInfo>
    </DetailContainer>
  )
}

export default Detail;