import { useEffect, useState } from 'react';
import AntdTable from 'components/antdComponents/AntdTable';
import { browseLists, browseStockColumns } from './BrowseData';
import './Browse.css';

const Browse = () => {
  const [listType, setListType] = useState('losers');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/stock-list-${listType}`)
      .then((res) => res.json())
      .then((res) =>
        res.map((res: { rank: number; }, index: number) => {
          res.rank = index + 1;
          return res;
        }),
      )
      .then((res) => setTableData(res))
      .catch((err) => console.log(err));
  }, [listType]);

  const browseTabs = browseLists.map(({ title, url }) => (
    <div className='single-browse-tab' onClick={() => setListType(url)} key={title}>
      {title}
    </div>
  ));

  return (
    <div className='browse-container'>
      <div className='browse-tabs'>{browseTabs}</div>
      <AntdTable data={tableData} columns={browseStockColumns} />
    </div>
  );
};

export default Browse;
