import * as React from 'react';

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  let articles = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
  };

  const [article, setArticle] = React.useState(articles);
  const [error] = React.useState(['']);

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();

    checkInputs(article);

    saveArticle(article);
  };

  const checkInputs = (article: any) => {
    for (let key in article) {
      if (article[key] === '') {
        error.push(key);
      } else if (article[key] !== '') {
        error.filter((e) => {
          error.splice(article[key]);
        });
      }
    }
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <label htmlFor="answer1">Who?</label>
      <input
        type="text"
        id="answer1"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
        style={{
          backgroundColor: error.find((item) => item === 'answer1')
            ? '#d34b4b'
            : 'white',
        }}
      />
      <label htmlFor="answer2">What?</label>
      <input
        type="text"
        id="answer2"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
        style={{
          backgroundColor: error.find((item) => item === 'answer2')
            ? '#d34b4b'
            : 'white',
        }}
      />
      <label htmlFor="answer3">When?</label>
      <input
        type="text"
        id="answer3"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
        style={{
          backgroundColor: error.find((item) => item === 'answer3')
            ? '#d34b4b'
            : 'white',
        }}
      />
      <label htmlFor="answer1">Where?</label>
      <input
        type="text"
        id="answer4"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
        style={{
          backgroundColor: error.find((item) => item === 'answer4')
            ? '#d34b4b'
            : 'white',
        }}
      />
      <button disabled={article === undefined ? true : false}>
        Make Sentence
      </button>
    </form>
  );
};
