import styles from "../../assets/css/components/sectionApp.module.css"

import iphoneImg from "../../assets/img/img-pages/Iphones.png";
import badgeAppleImg from "../../assets/img/img-pages/badgeApple.png";
import badgeAndroidImg from "../../assets/img/img-pages/badgeAndroid.png";

function SectionApp() {
    return(
        <section className={styles.section_app}>
            <div className={styles.section_app_left}>
                <img src={iphoneImg} alt="img-iphone" />
            </div>

            <div className={styles.section_app_right}>
                <div className={styles.section_right_description}>
                    <h1>Pronto para começar?</h1>
                    <p>Baixe nosso aplicativo agora</p>
                </div>

                <div className="section_right_img">
                    <a href="/about"><img src={badgeAppleImg} alt="img-app-download-apple" /></a>
                    <a href="/about"><img src={badgeAndroidImg} alt="img-app-download-android" /></a>
                </div>

            </div>
        </section>
    );
};

export default SectionApp;