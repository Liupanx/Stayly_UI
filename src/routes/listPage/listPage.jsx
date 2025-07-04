import './listPage.scss'
import { listData } from '../../lib/dummydata';
import Filter from '../../components/filter/filter';
import Card from '../../components/card/card';
import LeafMap from '../../components/map/Map';

function ListPage() {
    const data = listData;

    return <div className='listPage'>
        <div className="listContainer">
            <div className="wrapper">
                <Filter />
                {data.map(item => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
        <div className="mapContainer">
            <LeafMap items={data} />
        </div>
    </div>;

}

export default ListPage;