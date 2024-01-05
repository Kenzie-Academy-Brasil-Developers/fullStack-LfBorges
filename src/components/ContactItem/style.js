import { styled } from "styled-components";

export const StyledContactItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    gap: 1rem;

    >.nameContainer{
        display: flex;
        gap: 0.5rem;

        >div{
            width: 250px;
            line-break: normal;
            text-align: start;
        }
    }

    >.iconContainer{
        display: flex;
        gap: 1.5rem;
        >svg{
            cursor: pointer;
            color: var(--color-grey1);
            transition: color 0.5s ease-in-out;

            &:hover{
                color: var(--color-grey0);
            }
        }
    }
`