import { StyledLoadingPage } from "./styles";
import loadingImg from "../../assets/img/loading.gif";
import loadingText from "../../assets/img/loadingText.gif";


const LoadingPage = () => {
    return (
        <StyledLoadingPage>
            <img src={loadingImg} />
            <img src={loadingText} />
        </StyledLoadingPage>
    )
}

export default LoadingPage;