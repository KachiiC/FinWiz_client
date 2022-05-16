import { useEffect, useState } from 'react';
// COMPONENTS
import AntdTable from 'components/antdComponents/AntdTable';
// DATA
import { browseCryptoColumns } from '../BrowseData';
// SERVICES
import { investmentListServices } from 'services/investment';
// STYLES
import '../Browse.scss';
import AntdTabs from 'components/antdComponents/AntdTabs';
import { useNavigate } from 'react-router-dom';

const CryptoBrowse = () => {

  const navigate = useNavigate();
 
  const [topData, setTopData] = useState([]);
  const [oldestData, setOldestData] = useState([]);
  const [newestData, setNewestData] = useState([]);

  useEffect(() => {
    investmentListServices('crypto', 'top')
      .then((res) => setTopData(res))
      .catch((err) => console.log(err));
    investmentListServices('crypto', 'oldest')
      .then((res) => setOldestData(res))
      .catch((err) => console.log(err));
    investmentListServices('crypto', 'newest')
      .then((res) => setNewestData(res))
      .catch((err) => console.log(err));
  }, []);


  const cryptoTableTabs = [
    {
      title: 'Top',
      data: topData,
      columns: browseCryptoColumns,
    },
    {
      title: 'Oldest',
      data: oldestData,
      columns: browseCryptoColumns,
    },
    {
      title: 'Newest',
      data: newestData,
      columns: browseCryptoColumns,
    }
  ];

  const rowLogic = (record) => {
    return {
      onClick: () => navigate(`/details/${record.symbol}`),
    };
  };

  const tabsData = cryptoTableTabs.map((inv) => {
    const { columns, data, title } = inv;
    return {
      title,
      content: <AntdTable data={data} columns={columns} row={rowLogic} />,
    };
  });

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <AntdTabs data={tabsData} />
      </div>
    </div>
  );
};

export default CryptoBrowse;
