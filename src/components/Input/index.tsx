import { InputContainer } from "./style"
interface Valor{
    value:string;
}

const Input: React.FC <Valor> = ({value}) =>{
    return(
        <InputContainer>
            <input disabled value={value}/>
        </InputContainer>
    )
}

export default Input