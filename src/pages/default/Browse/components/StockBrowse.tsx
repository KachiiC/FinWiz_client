// COMPONENTS
import AntdTable from 'components/antdComponents/AntdTable';
import { useNavigate } from 'react-router-dom';
// DATA
import { browseStockColumns } from '../BrowseData';
// STYLES
import '../Browse.scss';
// HELPERS
import { useEffect, useState } from 'react';
// SERVICES
import { investmentListServices } from 'services/investment';
import AntdTabs from 'components/antdComponents/AntdTabs';

const StockBrowse = () => {

  const navigate = useNavigate();

  const [gainersData, setTopData] = useState([]);
  const [losersData, setOldestData] = useState([]);
  const [mostactiveData, setNewestData] = useState([]);

  useEffect(() => {
    investmentListServices('stock', 'gainers')
      .then((res) => {console.log(res); setTopData(res);})
      .catch((err) => console.log(err));
    investmentListServices('stock', 'losers')
      .then((res) => setOldestData(res))
      .catch((err) => console.log(err));
    investmentListServices('stock', 'mostactive')
      .then((res) => setNewestData(res))
      .catch((err) => console.log(err));
  }, []);

  
  const stocksTableTabs = [
    {
      title: 'Gainers',
      data: gainersData,
      columns: browseStockColumns,
    },
    {
      title: 'Losers',
      data: losersData,
      columns: browseStockColumns,
    },
    {
      title: 'Most Active',
      data: mostactiveData,
      columns: browseStockColumns,
    }
  ];

  const rowLogic = (record) => {
    return {
      onClick: () => navigate(`/details/${record.symbol}`),
    };
  };
  
  const tabsData = stocksTableTabs.map((inv) => {
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

export default StockBrowse;
