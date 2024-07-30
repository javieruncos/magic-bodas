import "../../assets/style/Inicio.css";
import PortadaInicio from '../ui/PortadaInicio';
import Presentacion from '../ui/Presentacion';
import Bodas from '../ui/Bodas';
import Servicios from '../ui/Servicios';
import Comentarios from "../ui/Comentarios";

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
                <article className='mt-5'>
                    <Bodas></Bodas>
                </article>
                <article className='mt-5'>
                    <Servicios></Servicios>
                </article>
                <article className="mt-5 pt-5">
                    <div className='portada-secundaria'>
                         
                    </div>
                </article>
                <article className="mt-5">
                    <Comentarios></Comentarios>
                </article>
            </section>
            
        </main>
    );
};

export default Inicio;