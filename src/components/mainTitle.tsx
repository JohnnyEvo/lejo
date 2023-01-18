import me from "../assets/me.png";
import {sprinkles} from "@/styles/sprinkles.css";
import * as fontCss from "@/styles/fonts.css";
import * as mainTitleCss from './mainTitle.css';

const MainTitle = () => {
    return <>
        <div className={sprinkles({position: 'relative'})}>
            <img src={me.src} alt="Alexis Jeanniard" className={mainTitleCss.img} />
            <div className={mainTitleCss.backgroundImg}></div>
        </div>
        <div className={sprinkles({position: 'relative'})}>
            <h1 className={`${fontCss.fontTitle} ${mainTitleCss.title}`}>Alexis</h1>
            <h1 className={`${fontCss.fontTitle} ${mainTitleCss.backgroundTitle}`}>Alexis</h1>
            <aside className={`${mainTitleCss.secondText}`}>vous répond</aside>
        </div>
    </>
}

export default MainTitle;
