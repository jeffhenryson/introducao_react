// Frase.js
import styles from '../components/Frase.module.css';

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseTexto}>Este é um exemplo de frase estilizada com CSS Modules.</p>
    </div>
  );
}

export default Frase;
