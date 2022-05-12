interface NewsColumn {
  data : {
    className?: string,
    key: number,
    content?: JSX.Element;
  }[];
}

export type {
  NewsColumn,
};