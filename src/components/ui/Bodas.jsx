import "../../assets/style/Bodas.css";
import boda from "../../assets/img/boda.jpg";

const Bodas = () => {
    return (
        <div className="container">
            <h2 className="display-5 fw-bold text-color">Que Momentos podemos grabar?</h2>
            <div className="row my-5">
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="containerImg-bodas my-3">
                   <img src={boda} alt="" />
                   <div className="capaimg-bodas">
                       <span className="text-color fw-bold">PRE</span>
                   </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="containerImg-bodas my-3">
                   <img src={boda} alt="" />
                   <div className="capaimg-bodas">
                       <span className="text-color fw-bold">IGLESIA</span>
                   </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <div className="containerImg-bodas my-3">
                   <img src={boda} alt="" />
                   <div className="capaimg-bodas">
                       <span className="text-color fw-bold">FIESTA</span>
                   </div>
                  </div>
                </div>
            </div>
            <div className="item-descripcion">
              <img src={boda} alt="" />
              <div className="capa-item-descripcion">
                  <ul>
                    <li>Te ayudo a elegir reels en tendencia sobre bodas para hacerlos juntas en tu gran dia</li>
                    <li>Tus preparativos: Desde el make-up, el peinado</li>
                    <li>Llegada y Ceremonia</li>
                    <li>Recepcion y entrada al salòn</li>
                    <li>Fiesta</li>
                    <li>Baile</li>
                    <li>Despedida</li>
                  </ul>
              </div>
            </div>
        </div>
    );
};

export default Bodas;