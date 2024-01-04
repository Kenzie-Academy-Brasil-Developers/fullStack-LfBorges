import { styled } from "styled-components";

export const StyledHomePage = styled.div`
    width:100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const StyledHomePageHeader = styled.header`
    width: 100%;
    padding: 1.25rem 0;
    border-bottom: 1px solid var(--color-grey3);

    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export  const StyledHomePageContainer = styled.div`
    width: 100%;
    max-width: 48.75rem;
    padding: 0 .75rem;
    margin: 0 auto;
`

export const StyledHomePageUserContainer = styled.div`
    width: 100%;
    padding-top: clamp(1.25rem, 3vw,2.8125rem);
    padding-bottom: clamp(1.25rem, 3vw,2.8125rem);
    border-bottom: 1px solid var(--color-grey3);
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: .625rem;
    }
`