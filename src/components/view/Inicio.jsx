import "../../assets/style/Inicio.css";
import PortadaInicio from '../ui/PortadaInicio';
import Presentacion from '../ui/Presentacion';
import Bodas from '../ui/Bodas';
import Servicios from '../ui/Servicios';
import Comentarios from "../ui/Comentarios";
import BodaImg from "../../assets/img/boda.jpg";

const Inicio = () => {
    return (
        <main>
            <section>
                <article>
                    <PortadaInicio></PortadaInicio>
                </article>
                <article className='mt-5'>
                    <Presentacion></Presentacion>
                </article>
                <article className='mt-5 pt-5'>
                    <Bodas></Bodas>
                </article>
                <article className='mt-5'>
                    <Servicios></Servicios>
                </article>
                <article className="mt-5 pt-5">
                    <div className='portada-secundaria'>
                        <div className="capa-portada-secundaria">
                            <div>
                                <h4 className="display-1 fw-bold"><span className="text-color">MAGIC</span> FILMS</h4>
                                <p>TE ACOMPAÑA EN LA FIESTA DE TUS SUEÑOS</p>
                            </div>
                        </div>

                    </div>
                </article>
                <article className="my-5">
                    <Comentarios></Comentarios>
                </article>
                <article>
                    <div className="contacto">
                       <div className="text-contacto pt-5 px-5">
                          <h4 className="fw-bold display-5">LISTA PARA TRABAJAR JUNTAS?</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
                          <button className="btn-contacto mt-4">CONTACTANOS</button>
                       </div>
                       <div className="img-contacto">
                          <img src={BodaImg} alt="" />
                       </div>
                    </div>
                </article>
            </section>

        </main>
    );
};

export default Inicio;