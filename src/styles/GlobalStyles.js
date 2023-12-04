import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    max-width: 100vw;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background: var(--color-grey-4);
} 

:root {
    --color-color-primary: #027fe9;
    --color-color-primary-50: #559feb;
    --color-color-primary-disable: #c0dff8;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343b41;
    --color-grey-1: #868e96;
    --color-grey-0: #f8f9fa;
    --color-sucess: #3fe864;
    --color-negative: #e83f5b;
}

`