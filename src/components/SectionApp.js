// eslint-disable-next-line
import sectionAppCss from "../assets/css/utils/sectionApp.css";

import iphoneImg from "../assets/img/img-pages/Iphones.png";
import badgeAppleImg from "../assets/img/img-pages/badgeApple.png";
import badgeAndroidImg from "../assets/img/img-pages/badgeAndroid.png";

function SectionApp() {
    return(
        <section className="section-app">
            <div className="section-app-left">
                <img src={iphoneImg} alt="img-iphone" />
            </div>

            <div className="section-app-right">
                <div className="section-right-description">
                    <h1>Pronto para começar?</h1>
                    <p>Baixe nosso aplicativo agora</p>
                </div>

                <div className="section-right-img">
                    <a href="/about"><img src={badgeAppleImg} alt="img-app-download-apple" /></a>
                    <a href="/about"><img src={badgeAndroidImg} alt="img-app-download-android" /></a>
                </div>

            </div>
        </section>
    );
};

export default SectionApp;