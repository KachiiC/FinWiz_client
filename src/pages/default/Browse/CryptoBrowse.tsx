import { useEffect, useState } from 'react';
import AntdTable from 'components/antdComponents/AntdTable';
import { bestCryptoColumns, cryptoLists } from './BrowseData';
import './Browse.scss';

const CryptoBrowse = () => {
  const [listType, setListType] = useState('top');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/crypto-list/${listType}`)
      .then((res) => res.json())
      .then((res) => setTableData(res))
      .catch((err) => console.log(err));
  }, [listType]);

  const browseTabs = cryptoLists.map(({ title, url }) => (
    <div className='single-browse-tab' onClick={() => setListType(url)} key={title}>
      {title}
    </div>
  ));

  return (
    <div className='genericContainer'>
      <div className='genericInnerContainer'>
        <div className='browse-tabs'>{browseTabs}</div>
        <AntdTable data={tableData} columns={bestCryptoColumns} />
      </div>
    </div>
  );
};

export default CryptoBrowse;
