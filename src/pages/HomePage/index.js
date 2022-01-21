import React from 'react';
import styles from './styles.module.scss';
import mainPhoto from '../../images/mainPhoto.png'
import PortButton from '../../components/button/PortButton';

const HomePage = () => {
  return (
    <div className={styles.homeSection}>
      <div className={styles.homeContent}>
        <div>
          <img className={styles.homeImage} src={mainPhoto} alt="Igor" width={335} height={335}/>
        </div>
        <div className={styles.homeText}>
          <h2 className={styles.topTitle}>Привет!</h2>
          <h2 className={styles.bottomTitle}>Меня зовут Игорь</h2>
          <p>Обучаюсь Web-разработке более 2-х лет. Конкретно интересует направление frontend
            разработки. На данный момент углубленно изучаю React JS. Буду рад работать
            над интересными проектами в дружном коллективе.</p>
          <div>
            <PortButton>Обо мне</PortButton>
            <PortButton>Контакты</PortButton>
          </div>
        </div>


      </div>
    </div>
  );
};

export default HomePage;
