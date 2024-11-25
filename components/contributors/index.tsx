import React from 'react';
import styles from './index.module.css';
import { useTranslation } from '../../hooks/useTranslation';

interface Contributor {
  name: string;
  avatar: string;
}

const contributors: Contributor[] = [
  { name: '小磊', avatar: '/avatars/1.jpg' },
  { name: '阿超', avatar: '/avatars/2.jpg' },
  { name: 'Husky', avatar: '/avatars/3.jpg' },
  { name: '温良森', avatar: '/avatars/4.jpg' },
  { name: 'IxSkye', avatar: '/avatars/5.jpg' },
  { name: '小轩', avatar: '/avatars/6.jpg' },
  { name: 'Lvinn', avatar: '/avatars/7.jpg' },
  { name: 'wushanru', avatar: '/avatars/8.jpg' },
  { name: 'TICKurt', avatar: '/avatars/9.jpg' },
  { name: 'Aricsun', avatar: '/avatars/10.jpg' },
  { name: '魅七', avatar: '/avatars/11.jpg' },
  { name: '洛奕', avatar: '/avatars/12.jpg' },
  { name: '劲宇', avatar: '/avatars/13.jpg' },
  { name: '贺喜', avatar: '/avatars/14.jpg' },
  { name: '玉骨', avatar: '/avatars/15.jpg' },
  { name: '墨迹', avatar: '/avatars/16.jpg' },
  { name: '静静', avatar: '/avatars/17.jpg' },
  { name: 'Ashyln', avatar: '/avatars/18.jpg' },
];

export const Contributors: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("contributors.title")}</h2>
      <p className={styles.subtitle}>
        {t("contributors.subtitle")}
      </p>
      
      <div className={styles.contributorGrid}>
        {contributors.map((contributor, index) => (
          <div key={index} className={styles.contributorItem}>
            <img 
              src={contributor.avatar} 
              alt={contributor.name} 
              className={styles.avatar}
            />
            <span className={styles.name}>{contributor.name}</span>
          </div>
        ))}
      </div>

      <a 
        href="https://github.com/CodePhiliaX/easyexcel-plus" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.githubButton}
      >
        {t("contributors.githubButton")} →
      </a>
    </div>
  );
}; 