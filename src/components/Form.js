// Importando as regras de estilos
import styles from "../assets/css/components/form.module.css"

function Form({ name, type, placeholder, onChange, icon }) {
    return(
        <div className={styles.form}>
            <label htmlFor={name} className={styles.invisible_label}>{name}</label>
                <input name={name} type={type} placeholder={placeholder} onChange={onChange} />

            <div className={styles.form_icon}>
                {icon}
            </div>
            
        </div>
    );
};

export default Form;