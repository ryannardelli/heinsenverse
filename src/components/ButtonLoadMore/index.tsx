import styles from './styles.module.css';

type ButtonLoadMoreProps = {
    hasMore: boolean,
    onLoadMore: () => void,
    label: string,
}

export function ButtonLoadMore({
  hasMore,
  onLoadMore,
  label,
}: ButtonLoadMoreProps) {
  if (!hasMore) return null;

  return (
    <div className={styles.loadingContainer}>
      <button onClick={onLoadMore} className={styles.loading}>
        {label}
      </button>
    </div>
  );
}
