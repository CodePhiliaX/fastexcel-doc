import React from 'react';
import styles from './index.module.css';
import { useTranslation } from '../../hooks/useTranslation';
import { useRouter } from 'next/router';

interface Testimonial {
  author: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    author: 'Thomas',
    content: "EasyExcel太方便用了，强烈推荐",
    avatar: '/testimonials/thomas.png'
  },
  {
    author: 'Ashlyn.da',
    content: "EasyExcel不亏是最好用的Excel导入导出工具，性能很棒，用起来真优雅",
    avatar: '/testimonials/ashlyn.png'
  },
  {
    author: 'Developer_Xr',
    content: "EasyExcel能让你不再烦恼",
    avatar: '/testimonials/developer_xr.png'
  },
  {
    author: 'Jerry',
    content: "EasyExcel的性能和易用性都非常出色，让Excel处理变得轻松自如，期待未来会有更多惊喜的功能！",
    avatar: '/testimonials/jerry.png'
  },
  {
    author: 'dwave',
    content: "刚用EasyExcel好好，就想到发布了，这下得换plus版了",
    avatar: '/testimonials/dwave.png'
  },
  {
    author: 'A leaf',
    content: "前排占坑,深感重生",
    avatar: '/testimonials/aleaf.png'
  },
  {
    author: 'blackboy',
    content: "优秀的工具，占坑支持有机会会贡献",
    avatar: '/testimonials/blackboy.png'
  },
  {
    author: 'linht12',
    content: "看到easyexcel停更的消息，惨了下，幸好有fastexcel,甚是期待",
    avatar: '/testimonials/linht12.png'
  },
  {
    author: 'peaceliu',
    content: "期待，正徘徊切换其他工具呐",
    avatar: '/testimonials/peaceliu.png'
  },
  {
    author: 'September Dibbert',
    content: "实实在在解决了我的业务问题,感谢作者!!",
    avatar: '/testimonials/september.png'
  },
  {
    author: 'Zhang Miao',
    content: "对新的开源项目希望可以尽点力",
    avatar: '/testimonials/zhang_miao.png'
  },
  {
    author: 'FuGuiLiu',
    content: "加油工具帮到了很多人",
    avatar: '/testimonials/fuguiliu.png'
  },
  {
    author: 'Joue',
    content: "期待做大做强",
    avatar: '/testimonials/joue.png'
  },
  {
    author: 'kurt',
    content: "make easyexcel great again！#YMCA",
    avatar: '/testimonials/kurt.png'
  },
  {
    author: 'xiaofengstu',
    content: "伟大无需多言",
    avatar: '/testimonials/xiaofengstu.png'
  },
  {
    author: 'Parker',
    content: "冲冲冲 为开源发光发热",
    avatar: '/testimonials/parker.png'
  },
  {
    author: 'aa912719',
    content: "乘舟侧畔千帆过 病树前头万木春",
    avatar: '/testimonials/aa912719.png'
  },
  {
    author: 'wushanru',
    content: "easyexcel浴火重生，fastexcel 加油",
    avatar: '/testimonials/wushanru.png'
  },
  {
    author: 'Elara',
    content: "fastexcel 加油💪",
    avatar: '/testimonials/elara.png'
  }
];

// 添加速度控制常量
const SCROLL_SPEED_MULTIPLIER = 0.4; // 减小这个值会降低滚动速度

// 优化重复数组的创建
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const { basePath } = useRouter();
  // 提取卡片组件以提高可复用性
  const TestimonialCard = React.memo(({ testimonial, index, rowId }: {
    testimonial: Testimonial;
    index: number;
    rowId: string;
  }) => (
    <div key={`${rowId}-${index}`} className={styles.testimonialCard}>
      <div className={styles.testimonialHeader}>
        <img 
          src={`${basePath}${testimonial.avatar}`} 
          alt={testimonial.author} 
          className={styles.avatar}
          loading="lazy" // 添加懒加载
        />
        <div className={styles.authorInfo}>
          <div className={styles.author}>{testimonial.author}</div>
        </div>
      </div>
      <p className={styles.content}>{testimonial.content}</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t("testimonials.title")}</h2>
      <p className={styles.subtitle}>
        {t("testimonials.subtitle")}
      </p>

      <div className={styles.scrollContainer}>
        {/* 向左滚动的行 */}
        <div className={styles.scrollRow}>
          <div className={styles.scrollTrack} style={{ animationDuration: `${60 / SCROLL_SPEED_MULTIPLIER}s` }}>
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`row1-${index}`}
                testimonial={testimonial}
                index={index}
                rowId="row1"
              />
            ))}
          </div>
        </div>

        {/* 向右滚动的行 */}
        <div className={styles.scrollRow}>
          <div 
            className={`${styles.scrollTrack} ${styles.reverse}`}
            style={{ animationDuration: `${60 / SCROLL_SPEED_MULTIPLIER}s` }}
          >
            {extendedTestimonials.reverse().map((testimonial, index) => (
              <TestimonialCard 
                key={`row2-${index}`}
                testimonial={testimonial}
                index={index}
                rowId="row2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 