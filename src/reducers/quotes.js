export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, {
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: action.quote.votes
      }]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId) {
          return { ...quote, votes: quote.votes + 1 }
        }
        return quote
      })
    case 'DOWNVOTE_QUOTE':
      return state.map(quote => {
        if (quote.id === action.quoteId && quote.votes !== 0) {
          return { ...quote, votes: quote.votes - 1 }
        } else {
          return quote
        }
      })
    default:
      return state;
  }
}
