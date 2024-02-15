function Form( {type, placeholder, icon} ) {
    return(
        <div className="form">
            <label>
                <input type={type} placeholder={placeholder} />
            </label>

            <div className="form-icon">
                {icon}
            </div>
        </div>
    );
};

export default Form;