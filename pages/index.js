import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Why I Chose My IT Specialization</h2>

<p>
  I chose Data Analytics as my IT specialization because I am interested
  in how data can be used to understand problems and make better decisions.
  Today, many organizations collect large amounts of data, and I want to
  learn how to turn that data into useful information.
</p>

<p>
  What made me interested in Data Analytics is its growing importance in
  different industries. Businesses use data to understand customers,
  identify trends, improve services, and make informed decisions.
</p>

<p>
  I want to develop my skills in collecting, organizing, analyzing, and
  visualizing data. I believe these skills will help me solve real-world
  problems and prepare me for a career in the IT industry.
</p>
         <p>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}