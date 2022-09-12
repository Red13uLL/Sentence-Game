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

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();

    saveArticle(article);
  };

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <label htmlFor="answer1">Who?</label>
      <input
        type="text"
        id="answer1"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
      />
      <label htmlFor="answer2">What?</label>
      <input
        type="text"
        id="answer2"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
      />
      <label htmlFor="answer3">When?</label>
      <input
        type="text"
        id="answer3"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
      />
      <label htmlFor="answer1">Where?</label>
      <input
        type="text"
        id="answer4"
        placeholder="Type your answer here..."
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Make Sentence
      </button>
    </form>
  );
};
