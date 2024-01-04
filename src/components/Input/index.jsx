import { forwardRef } from "react";
import { StyledInput } from "./styles.js";

const Input = forwardRef(({label, id, placeholder, type, helper, ...rest}, ref) => {
    return (
        <StyledInput>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder}
                ref={ref}
                {...rest} 
            />
            {helper ? <p>{helper}</p> : null}
        </StyledInput>
    )
});

export default Input;