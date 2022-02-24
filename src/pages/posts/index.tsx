import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creatinf a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aperiam reprehenderit iusto velit vero ullam?</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creatinf a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aperiam reprehenderit iusto velit vero ullam?</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creatinf a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex aperiam reprehenderit iusto velit vero ullam?</p>
          </a>
        </div>
      </main>
    </>
  )
}