import { useEffect, useState } from 'react';
// COMPONENTS
import AntdTable from 'components/antdComponents/AntdTable';
// DATA
import { browseCommoditiesColumns } from '../BrowseData';
// SERVICES
import { investmentListServices } from 'services/investment';
// STYLES
import '../Browse.scss';

const CommoditiesBrowse = () => {

  const [commoditiesData, setCommoditiesData] = useState([]);

  useEffect(() => {
    investmentListServices('commodities')
      .then((res) => setCommoditiesData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <AntdTable data={commoditiesData} columns={browseCommoditiesColumns} pagination={false}/>
      </div>
    </div>
  );
};

export default CommoditiesBrowse;
