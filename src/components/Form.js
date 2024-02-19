function Form({ id, name, type, placeholder, onChange, icon}) {
    return(
        <div className="form">
            <label htmlFor={name} className="invisible-label">{name}</label>
                <input id={id} name={name} type={type} placeholder={placeholder} onChange={onChange} />

            <div className="form-icon">
                {icon}
            </div>
        </div>
    );
};

export default Form;