import "../../assets/style/Comentarios.css";
import SliderComentarios from "./SliderComentarios";

const Comentarios = () => {
    return (
        <div className="container">
            <h2 className="display-4 fw-bold text-color">Comentarios</h2>
            <div className="container-slider mt-4">
                <SliderComentarios></SliderComentarios>
            </div>
        </div>
    );
};

export default Comentarios;