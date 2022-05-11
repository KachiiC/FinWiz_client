import { Tabs } from 'antd';

interface AntdTabProps {
  data: {
    title: string;
    content: JSX.Element;
  }[];
}

const AntdTabs = (props: AntdTabProps) => {
  const { TabPane } = Tabs;

  const diplayedTabs = props.data.map((tab) => (
    <TabPane tab={tab.title} key={tab.title}>
      {tab.content}
    </TabPane>
  ));

  return <Tabs>{diplayedTabs}</Tabs>;
};

export default AntdTabs;
