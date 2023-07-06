import styles from './NotFound.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Не надйено такого
      </h1>
      <p className={styles.discription}>к сожалению нихренашечки не написал я такую страницу</p>
    </div>
  );
};

export default NotFoundBlock;
