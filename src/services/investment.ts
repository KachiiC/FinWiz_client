export const investmentListServices = (type: 'stock' | 'crypto', listType: string) => {

  return fetch(`http://127.0.0.1:8000/${type}-list/${listType}`)
    .then((res) => res.json() );
};