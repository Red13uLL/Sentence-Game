import * as React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './styles.css';
import { Article } from './components/Article';
import { AddArticle } from './components/AddArticle';
import { addArticle, removeArticle } from './store/actionCreators';
import { Dispatch } from 'redux';

const App: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual,
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch],
  );
  const myStyle = {
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/modern-futuristic-neon-lights-old-grunge-brick-wall-room-background-3d-rendering_79443-2226.jpg?w=1480')",
    height: '100vh',
    maxWidth: '100%',
    marginTop: '-70px',
    backgroundSize: 'cover',
    color: 'white',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <main style={myStyle}>
      <h1>Sentence game</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default App;
