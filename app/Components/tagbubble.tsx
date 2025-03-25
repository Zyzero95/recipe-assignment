import styles from "./tagbubble.module.css";

export default function TagBubble({tagName, color}: {tagName: string, color: string}){
    return(<li className={styles.bubble} style={{backgroundColor: color}}>{tagName}</li>)
}