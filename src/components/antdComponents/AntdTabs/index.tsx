// COMPONENTS
import { Tabs } from 'antd';
// INTERFACES
import { AntdTabProps } from './AntdTabsInterface';
// STYLES
import './AntdTabs.scss';

const AntdTabs = ({ data }: AntdTabProps) => {
  const { TabPane } = Tabs;

  const diplayedTabs = data.map(({ title, content }) => (
    <TabPane tab={title} key={title}>
      {content}
    </TabPane>
  ));

  return <Tabs type='card'>{diplayedTabs}</Tabs>;
};

export default AntdTabs;
