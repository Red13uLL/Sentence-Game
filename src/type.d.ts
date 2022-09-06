interface IArticle {
  id: number;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

type ArticleState = {
  articles: IArticle[];
};

type ArticleAction = {
  type: string;
  article: IArticle;
};

type DispatchType = (args: ArticleAction) => ArticleAction;
