export interface NewsColumn {
    data: SingleNews[];
}

export interface SingleNews {
    className?: string,
    key: number,
    content?: JSX.Element;
};