// COMPONENTS
import AntdTable from 'components/antdComponents/AntdTable';
// DATA
import { browseLists, browseStockColumns } from '../BrowseData';
// STYLES
import '../Browse.scss';
// HELPERS
import { useEffect, useState } from 'react';
import { addRank } from 'helpers/object.helpers';
// SERVICES
import { investmentListServices } from 'services/investment';
import { useNavigate } from 'react-router-dom';

const StockBrowse = () => {
  const [listType, setListType] = useState('gainers');
  const [tableData, setTableData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    investmentListServices('stock', listType)
      .then((res) => addRank(res))
      .then((res) => setTableData(res))
      .catch((err) => console.log(err));
  }, [listType]);

  const browseTabs = browseLists.map(({ title, url }) => (
    <div className='single-browse-tab' onClick={() => setListType(url)} key={title}>
      {title}
    </div>
  ));

  const rowLogic = (record) => {
    return {
      onClick: () => navigate(`/details/${record.symbol}`),
    };
  };

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <div className='browse-tabs'>{browseTabs}</div>
        <AntdTable data={tableData} columns={browseStockColumns} row={rowLogic} />
      </div>
    </div>
  );
};

export default StockBrowse;
