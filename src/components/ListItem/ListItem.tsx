import type { Item } from "../../utils/generateData";
import styles from "./ListItem.module.css";

interface Props {
  item: Item;
}

export const ListItem = ({ item }: Props) => {
  const { name, value } = item;
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.value}>{`counter ${value}`}</span>
    </div>
  );
};
