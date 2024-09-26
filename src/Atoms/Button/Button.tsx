import { StyledButton } from './styled';

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
};

function Button({ handleClick, text }: ButtonProps) {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
}

export default Button;
