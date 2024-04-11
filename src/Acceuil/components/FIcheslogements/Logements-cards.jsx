import { useParams, Navigate} from 'react-router-dom'
import LogementData from '../../../data/logement.json'
import Collapse from '../../components/Collapse.jsx'
import '../../assets/collapse.scss'
import Slider from './Cards'
import Name from './Name-logement'
import '../../assets/logement.scss'
import Rate from './Rate'
import Tags from './Tag'
import Host from './Host'

const Cardslogements = () => {
    const { id } = useParams();
    const FicheLog = LogementData.find((logement) => logement.id === id);


    if (!FicheLog) {
        return <Navigate replace to="/404" />;
    }

    const equipmentsList = FicheLog.equipments.map((equipment, i) => (
        <ul key={i}>
            <li>{equipment}</li>
        </ul>
    ));

    return (
        <div className='card-container'>
            <div className='container-slides'>
                <Slider slides={FicheLog?.pictures}/>
            </div>
            <div className='title'>
                <Name location={FicheLog?.location} nom={FicheLog?.title}/>
                <Host  name={FicheLog?.host.name} picture={FicheLog?.host.picture}/>
            </div>
            <div className='tag-rat-container'>
                <Tags tags={FicheLog?.tags}/>
            <Rate  ratingScale= {FicheLog?.rating} />
            </div>
            <div className='collapse-container'>
                <div className='col-2'>
                    <Collapse 
                        title="Description"
                        content={FicheLog.description}
                    />
                </div>
                <div className='col-2'>
                    <Collapse
                        title="Equipement"
                        content={equipmentsList}
                    />
                </div>
            </div>
        </div>
    );
}


export default Cardslogements;