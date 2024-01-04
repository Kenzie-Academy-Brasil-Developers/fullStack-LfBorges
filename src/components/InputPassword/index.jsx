import { forwardRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { StyledInputPassword } from './styles';

const InputPassword = forwardRef(({label, id, placeholder, helper, ...rest}, ref) => {
    const[isHiddenPassword, setIsHiddenPassword] = useState(true);

    return (
        <StyledInputPassword>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <div>
                <input 
                type={isHiddenPassword ? "password" : "text"} 
                id={id} 
                name={id} 
                placeholder={placeholder}
                ref={ref}
                {...rest}
                />
                {isHiddenPassword ? 
                    <FaEye className="eye" size={12} color="#868E96" onClick={() => {setIsHiddenPassword(false)}} /> : 
                    <FaEyeSlash className="eyeSlash" size={12} color="#868E96" onClick={() => {setIsHiddenPassword(true)}}/> 
                }
            </div>
            {helper ? <p>{helper}</p> : null}
        </StyledInputPassword>
    )
})

export default InputPassword;