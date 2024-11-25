import React from 'react';
import styles from './index.module.css';
import { useTranslation } from '../../hooks/useTranslation';

interface Testimonial {
  author: string;
  location: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    author: 'hrithik',
    location: 'US',
    content: "I've been using it for months and it's been really good. It's free and open source, plus they have a PWA too.",
    avatar: '/testimonials/1.jpg'
  },
  {
    author: 'Sarah',
    location: 'UK',
    content: "The performance is incredible. We process millions of rows without any memory issues.",
    avatar: '/testimonials/2.jpg'
  },
  {
    author: 'Michael',
    location: 'DE',
    content: "Best Excel processing library I've ever used. The API is so intuitive!",
    avatar: '/testimonials/3.jpg'
  },
  {
    author: 'Jessica',
    location: 'CA',
    content: "The Chat to Excel feature saved us countless hours of manual work.",
    avatar: '/testimonials/4.jpg'
  },
  // 添加更多评论以确保滚动效果连续
  // ... 复制更多评论
];

// 复制评论以确保滚动效果连续
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("testimonials.title")}</h2>
      <p className={styles.subtitle}>
        {t("testimonials.subtitle")}
      </p>

      <div className={styles.scrollContainer}>
        {/* 向左滚动的行 */}
        <div className={styles.scrollRow}>
          <div className={styles.scrollTrack}>
            {extendedTestimonials.map((testimonial, index) => (
              <div key={`row1-${index}`} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className={styles.avatar}
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.author}>{testimonial.author}</div>
                    <div className={styles.location}>{testimonial.location}</div>
                  </div>
                </div>
                <p className={styles.content}>{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 向右滚动的行 */}
        <div className={styles.scrollRow}>
          <div className={`${styles.scrollTrack} ${styles.reverse}`}>
            {extendedTestimonials.map((testimonial, index) => (
              <div key={`row2-${index}`} className={styles.testimonialCard}>
                <div className={styles.testimonialHeader}>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className={styles.avatar}
                  />
                  <div className={styles.authorInfo}>
                    <div className={styles.author}>{testimonial.author}</div>
                    <div className={styles.location}>{testimonial.location}</div>
                  </div>
                </div>
                <p className={styles.content}>{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 