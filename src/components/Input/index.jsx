import { forwardRef, useState } from "react";
import { StyledInput } from "./style";
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';

export const Input = forwardRef(({label, id,helper, password, ...rest}, ref) => {

    const [isHidden, setIsHidden] = useState(true)
    return (
        <StyledInput>
            {label ? <label htmlFor={id}>{label}</label> : null}
            <div>
                <input type={password ? (isHidden ? "password" : "text") : rest.type} id={id} ref={ref} {...rest} />
                {password ? (
                    isHidden ? (
                        <FaRegEyeSlash size={12} color="#868E96" onClick={() => setIsHidden(false)} />
                    ) : (
                        <FaRegEye size={12} color="#868E96" onClick={() => setIsHidden(true)} />
                    )
                ) : null}
            </div>
            { helper ? <span>{helper}</span> : null}
        </StyledInput>
    )
})