import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './download.module.css';

const DownloadCard: React.FC<{
  image: string;
  title: string;
  years: string;
  href: string;
  caption?: string;
}> = ({ image, title, years, href, caption }) => {
  const img = useBaseUrl(image);
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={img} alt={title} className={styles.img} />
        {caption ? <div className={styles.caption}>{caption}</div> : null}
      </div>
      <div className={styles.content}>
        <h2 style={{ margin: 0 }}>{title}</h2>
        <div className={styles.years}>{years}</div>
        <a className={`button button--primary ${styles.downloadButton}`} href={href} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </div>
    </div>
  );
};

export default function DownloadPage(): JSX.Element {
  const driveFolder = 'https://drive.google.com/drive/folders/1qlMSLMCHQ6xGWxkSN7LUMiECTXHj2-Rb?usp=drive_link';

  return (
    <Layout title="World Downloads">
      <main style={{ padding: '2rem 1rem', maxWidth: 960, margin: '0 auto' }}>
        <h1>World Downloads</h1>
        <p>Download the world files for our maps.</p>

        <DownloadCard
          image={'img/map8.png'}
          title={'Map 8'}
          years={'March 15th, 2025 – May 23rd, 2026'}
          href={'https://drive.usercontent.google.com/download?id=1ismLWK8M9MvIhlLq83r95kNwCXePzsoK&export=download'}
        />
        <DownloadCard
          image={'img/map7.png'}
          title={'Map 7'}
          years={'May 4th, 2024 – March 15th, 2025'}
          href={'https://drive.usercontent.google.com/download?id=1nhYW-0X10hLM4CvD2rvcxuLenGQ1FN_H&export=download'}
        />
        <DownloadCard
          image={'img/map6.png'}
          title={'Map 6'}
          years={'September 30th, 2023 – May 3rd, 2024'}
          href={'6'}
        />
        <DownloadCard
          image={'img/map5.png'}
          title={'Map 5'}
          years={'April 7th, 2023 – September 28th, 2023'}
          href={'5'}
        />
        <DownloadCard
          image={'img/map4.png'}
          title={'Map 4'}
          years={'July 30th, 2021 – April 6th, 2023'} // Seems really long considering there are 9 maps and the server is 6 years old. https://web.archive.org/web/20220121175300/http://ogcraft.org/forum/topic/60-ogcraft-august-2021-map-reset/
          href={'4'}
        />
        <DownloadCard
          image={'img/map3.png'}
          title={'Map 3'}
          years={'January 15th,2021 – July 30th, 2021'} // https://web.archive.org/web/20210509073232/https://ogcraft.org/forum/topic/4-ogcraft-reset-january-2020/
          href={'3'}
        />

        <p style={{ marginTop: '2rem', color: '#666' }}>
          If you have trouble downloading, visit our <a href="/Discord">Discord</a> for help.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <a href={driveFolder} target="_blank" rel="noopener noreferrer" className="button button--secondary">Other Downloads</a>
        </div>
      </main>
    </Layout>
  );
}
