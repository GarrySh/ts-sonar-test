import { useState } from "react";
import styles from "./List.module.css";

import { generateData } from "../../utils/generateData";
import { ListItem } from "../ListItem/ListItem";
import { StrangeItem } from "../StrangeItem/StrangeItem";

export const List = () => {
  const [items] = useState(generateData);

  return (
    <section className={styles.section}>
      {items.map((item, index) =>
        index % 2 === 0 ? <ListItem item={item} /> : <StrangeItem item={item}/>
      )}
    </section>
  );
};
