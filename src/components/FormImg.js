import FormImgDinamic from "../assets/img/img-pages/adventure_map_login_img.png"

function FormImg({ tittle, phrase }) {
    return(
        <div className="form-img">
            <img src={FormImgDinamic} alt="img_adventure-form-login" />

            <div className="form-description">
                <h1>{tittle}</h1>
                <p>{phrase}</p>
            </div>
        </div>
    );
};

export default FormImg;