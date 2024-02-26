import styles from "../../assets/css/components/userAccountTittle.module.css";

import { HiArrowSmallLeft } from "react-icons/hi2";

function UserAccountTittle({ sectionTittle, tittle }) {

    if(sectionTittle === "transactions") {
        return(
            <section className={styles.section_tyttle}>
                <h1>{tittle}</h1>
            </section>
        );
    }else {
        return(
            <section className={styles.section_tyttle}>
               <a href="/userTransactions"><HiArrowSmallLeft /></a> <h1>{tittle}</h1>
            </section>
        );
    };
};

export default UserAccountTittle;