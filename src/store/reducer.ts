import * as actionTypes from './actionTypes';

const initialState: ArticleState = {
  articles: [],
};

const reducer = (
  state: ArticleState = initialState,
  action: ArticleAction,
): ArticleState => {
  switch (action.type) {
    case actionTypes.ADD_ARTICLE:
      const newArticle: IArticle = {
        id: Math.random(),
        answer1: action.article.answer1,
        answer2: action.article.answer2,
        answer3: action.article.answer3,
        answer4: action.article.answer4,
      };
      return {
        ...state,
        articles: state.articles.concat(newArticle),
      };
    case actionTypes.REMOVE_ARTICLE:
      const updatedArticles: IArticle[] = state.articles.filter(
        (article) => article.id !== action.article.id,
      );
      return {
        ...state,
        articles: updatedArticles,
      };
  }
  return state;
};

export default reducer;
