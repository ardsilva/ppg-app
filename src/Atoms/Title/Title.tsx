import { StyledTitle } from "./styled"

type TitleProps = {
  title: string | undefined,
}

function Title({title}: TitleProps) {
  return (
      <StyledTitle>{title}</StyledTitle>
  )
}

export default Title