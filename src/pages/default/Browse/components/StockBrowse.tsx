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

  const [stockData, setStockData] = useState({
    gainers: [],
    losers: [],
    mostActive: [],
  });

  const { gainers, losers, mostActive } = stockData;

  useEffect(() => {
    investmentListServices('stock')
      .then((res) => {
        const dataTypes = Object.keys(res);
        dataTypes.forEach((key) => {
          res[key] = res[key].map((obj, index) => {
            obj.rank = index + 1;
            return obj;
          });
        });
        return res;
      })
      .then((res) => setStockData(res))
      .catch((err) => console.log(err));
  }, []);

  const stocksTableTabs = [
    {
      title: 'Gainers',
      data: gainers,
    },
    {
      title: 'Losers',
      data: losers,
    },
    {
      title: 'Most Active',
      data: mostActive,
    },
  ];

  const rowLogic = (record) => {
    return {
      onClick: () => navigate(`/details/${record.symbol}`),
    };
  };

  const tabsData = stocksTableTabs.map((inv) => {
    const { data, title } = inv;
    return {
      title,
      content: <AntdTable data={data} columns={browseStockColumns} row={rowLogic} />,
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
