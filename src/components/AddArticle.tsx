import * as React from 'react';

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();

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
      <input
        type="text"
        id="answer1"
        placeholder="Who?"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="answer2"
        placeholder="What?"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="answer3"
        placeholder="When?"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="answer4"
        placeholder="Where?"
        onChange={handleArticleData}
      />
      <button disabled={article === undefined ? true : false}>
        Make Sentence
      </button>
    </form>
  );
};
