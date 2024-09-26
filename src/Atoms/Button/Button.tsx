import { StyledButton } from "./styled"

type ButtonProps = {
  handleClick: any,
  text: string,
}

function Button({handleClick, text}: ButtonProps) {
  return (
    <StyledButton onClick={handleClick}>{text}</StyledButton>
  )
}

export default Button