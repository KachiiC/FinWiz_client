import { useEffect, useState } from 'react';
// COMPONENTS
import AntdTable from 'components/antdComponents/AntdTable';
// DATA
import { browseCryptoColumns, cryptoLists } from '../BrowseData';
// SERVICES
import { investmentListServices } from 'services/investment';
// STYLES
import '../Browse.scss';

const CryptoBrowse = () => {
  const [listType, setListType] = useState('top');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    investmentListServices('crypto', listType)
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
        <AntdTable data={tableData} columns={browseCryptoColumns} />
      </div>
    </div>
  );
};

export default CryptoBrowse;
