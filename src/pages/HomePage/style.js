import { styled } from "styled-components";

export const StyledHomePage = styled.div`
    width: 100%;
    height: 100%;

    >header {
        width: 100%;
        border-bottom: 1px solid var(--color-grey2);
        padding: 2rem 1rem 3rem;

        >div {
            width: 100%;
            max-width: 70rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;

            >img{
                width: 2.5rem;
            }
        }
    }

    >.bannerContainer {
        width: 100%;
        border-bottom: 1px solid var(--color-grey2);
        padding: 3rem 1rem 3rem;
    }

    >main {
        width: 100%;
    }
`