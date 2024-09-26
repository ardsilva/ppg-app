import { StyledSpan } from "./styled";

type TypographyProps = {
  text: string;
}

function Typography({text}: TypographyProps) {
  return (<StyledSpan dangerouslySetInnerHTML={{ __html: text }} />)
}

export default Typography;