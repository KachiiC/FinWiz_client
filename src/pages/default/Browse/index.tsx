import { useEffect, useState } from 'react';
import AntdTable from 'components/antdComponents/AntdTable';
import { browseLists, browseStockColumns } from './BrowseData';
import './Browse.scss';
import { addRank } from 'helpers/object.helpers';
import { useNavigate } from 'react-router-dom';

const Browse = () => {
  const [listType, setListType] = useState('gainers');
  const [tableData, setTableData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/stock-list-${listType}`)
      .then((res) => res.json())
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
    <div className="genericContainer">
      <div className="genericInnerContainer">
        <div className='browse-tabs'>{browseTabs}</div>
        <AntdTable data={tableData} columns={browseStockColumns} row={rowLogic} />
      </div>
    </div>
  );
};

export default Browse;
