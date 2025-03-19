import styles from "./tagbubble.module.css";

export default function TagBubble({tagName}: {tagName: string}){
    return(<li className={styles.bubble}>{tagName}</li>)
}