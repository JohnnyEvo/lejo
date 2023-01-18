import '@/styles/reset.css';
import * as css from '@/styles/index.css';
import * as fontCss from "@/styles/fonts.css";
import {themeClass} from "@/styles/theme.css";
import {sprinkles} from "@/styles/sprinkles.css";
import MainTitle from "@/components/mainTitle";
import QuestionZone from "@/components/questionZone";

const Home = () => {
  return(
      <div className={`${themeClass} ${fontCss.fontText} ${sprinkles({fontSize: 'normal', color: 'content'})}`}>
        <div className={`${css.container}`}>
          <div className={sprinkles({
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontSize: 'large',
            flexDirection: 'column'
          })}>
            <MainTitle />
          </div>
          <div className={sprinkles({
            display: 'flex',
            flexDirection: 'column'
          })}>
            <QuestionZone />
          </div>
        </div>
      </div>
  )
}

export default Home;