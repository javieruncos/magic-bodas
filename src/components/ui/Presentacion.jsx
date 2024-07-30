import "../../assets/style/Presentacion.css";
import estefania from "../../assets/img/EstefiSandoval-17.jpg";
import estefania2 from "../../assets/img/EstefiSandoval-18.jpg";
const Presentacion = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="containerImg-presentacion my-3">
                        <img src={estefania} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="my-3 text-descripcion">
                        <h3 className="fs-1 fw-bold text-color">¿QUIEN SOY?</h3>
                        <p>
                            Me llamo Estefi y me conocen como @soyestefisandoval. Soy profesora de Artes Visuales, Filmmaker en Eventos Sociales, Creadora de contenido para Bodas y Creadora de contenido para redes sociales. Fundadora de @magicfilmsok CONTENIDO AUDIOVISUAL.
                            He capturado los momentos más mágicos de bodas durante más de 3 años.
                            Amo que las cosas sean simples pero creativas y, por supuesto, memorables.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="text-descripcion">
                            <h3 className="fs-2 fw-bold text-color">¿QUE HAGO COMO CREADORA DE CONTENIDO PARA BODAS?</h3>
                            <p>
                                Como creadora de contenido para bodas profesional me dedico a
                                la creación y edición de contenido audiovisual para bodas y eventos
                                sociales en FORMATO VERTICAL. Mi objetivo es capturar los mome
                                ntos más importantes de tu dia y resumirlos en formato reels de alta
                                calidad para que los disfrutes a las 24hs de terminado tu evento
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="containerImg-presentacion">
                            <img src={estefania2} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Presentacion;