import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    :root {

        --color-main: #FF577F;
        --color-main-focus: #FF427F;
        --color-main-negative: #59323F;

        --color-grey4: #121214;
        --color-grey3: #212529;
        --color-grey2: #343B41;
        --color-grey1: #868E96;
        --color-grey0: #F8F9FA;

        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        --font-main:  'Inter', sans-serif;

        --toastify-color-dark: #343B41;
    }

    body {
        max-width: 100vw;
        min-height: 100vh;
        font-family: var(--font-main);
        background-color: var(--color-grey4);
    }
`