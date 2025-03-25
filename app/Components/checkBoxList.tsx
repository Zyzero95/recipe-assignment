import styles from "./checkBoxList.module.css";

export default function CheckBoxList({items}: {items: string[]}){
    return (<>{items.map(item => <li className={styles.item}><input type="checkbox"/>{item}</li>)}</>)
}