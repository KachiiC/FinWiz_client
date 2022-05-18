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

  const [cryptoData, setCryptoData] = useState({
    top: [],
    oldest: [],
    newest: [],
  });

  const { top, oldest, newest } = cryptoData;
  useEffect(() => {
    investmentListServices('crypto')
      .then((res) => setCryptoData(res))
      .catch((err) => console.log(err));
  }, []);

  const cryptoTableTabs = [
    {
      title: 'Top',
      data: top,
    },
    {
      title: 'Oldest',
      data: oldest,
    },
    {
      title: 'Newest',
      data: newest,
    },
  ];

  const rowLogic = (record) => {
    return {
      onClick: () => navigate(`/crypto-details/${record.symbol}`),
    };
  };

  const tabsData = cryptoTableTabs.map((inv) => {
    const { data, title } = inv;
    return {
      title,
      content: <AntdTable data={data} columns={browseCryptoColumns} row={rowLogic} />,
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
