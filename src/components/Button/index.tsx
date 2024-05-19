import { ButtonContainer } from './style'

interface ButtonProps{
  label:string;
  onClick:(event: React.MouseEvent) => void
}


const Button: React.FC <ButtonProps> = ({label, onClick}) => {

  return (
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}

export default Button
