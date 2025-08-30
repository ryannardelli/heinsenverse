export const loadMoreItems = (
  setState: React.Dispatch<React.SetStateAction<number>>,
  increment: number = 20
) => {
  setState(prev => prev + increment);
};
