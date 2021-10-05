import type { Item } from "../../utils/generateData";
import styles from "./StrangeItem.module.css";

interface Props {
  item: Item;
}

export const StrangeItem = ({ item }: Props) => {
  const { name, value } = item;
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{name}</h3>
      <span className={styles.value}>{`some value ${value}`}</span>
    </div>
  );
};
