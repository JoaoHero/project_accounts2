import styles from "../assets/css/pages/userAccount/userAccount.module.css";
import Container from "../components/Container";
import SectionUser from "../components/SectionUser";

function UserAccount() {
    return(
        <Container>
            <main className={styles.main}>
                <SectionUser />

                <div>
                    
                </div>

            </main>
        </Container>
    );
};

export default UserAccount;