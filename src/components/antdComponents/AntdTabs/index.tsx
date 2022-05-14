// Imports
import { Tabs } from 'antd';
// Local Imports
import { AntdTabProps } from '../interfaces/IAntdForm';

const AntdTabs = (props: AntdTabProps) => {
  const { TabPane } = Tabs;

  const diplayedTabs = props.data.map((tab) => (
    <TabPane tab={tab.title} key={tab.title}>
      {tab.content}
    </TabPane>
  ));

  return (
    <Tabs type="card">{diplayedTabs}</Tabs>
  );
};

export default AntdTabs;