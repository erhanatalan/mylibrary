import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from "./Header.style";

const Header = ({setQuery,setSelectType, getData}) => {
  const printType = ['all', 'books', 'magazines']
  const handleSubmit=(e)=>{
    e.preventDefault()
    getData()
  }

  return (
    <HeaderContainer>
      <HeaderTitle>Find Your Books or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput type='text' placeholder="NAME" onChange={(e)=> setQuery(e.target.value)} />
        <SelectBox onChange={(e)=> setSelectType(e.target.value)}>
          {printType.map((item)=>{
            return <option key={item} value={item}>{item}</option>
          })}
        </SelectBox>
        <HeaderButton type="submit">
          Search
        </HeaderButton>

      </HeaderForm>

    </HeaderContainer>
  )
}

export default Header;