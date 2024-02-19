import styles from "../assets/css/components/form.module.css"

function Form({ name, type, value, placeholder, icon }) {

    return(
        <div className={styles.form}>
            <label htmlFor={name} className={styles.invisible_label}>{name}</label>
                <input name={name} type={type} value={value} placeholder={placeholder} />

            <div className={styles.form_icon}>
                {icon}
            </div>
            
        </div>
    );
};

export default Form;