function Form({ id, name, type, placeholder, icon}) {
    return(
        <div className="form">
            <label htmlFor={name} className="invisible-label">{name}</label>
                <input id={id} name={name} type={type} placeholder={placeholder} />

            <div className="form-icon">
                {icon}
            </div>
        </div>
    );
};

export default Form;