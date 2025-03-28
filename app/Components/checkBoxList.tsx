import styles from "./checkBoxList.module.css";

export default function CheckBoxList({items, name}: {items: string[], name: string}){
    let counter = 0;
    return (<>{items.map(item => <li className={styles.item} key={`checkboxlist-${name}-${++counter}`}><input type="checkbox"/>{item}</li>)}</>)
}