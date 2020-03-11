import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
                this.props.quotes.map(quote => {
                  return <QuoteCard key={quote.id} quote={quote} upvote={this.props.upvote} downvote={this.props.downvote} delete={this.props.delete} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  upvote: quoteId => dispatch(upvoteQuote(quoteId)),
  downvote: quoteId => dispatch(downvoteQuote(quoteId)),
  delete: quoteId => dispatch(removeQuote(quoteId))
})

//add arguments to connect as needed
export default connect(state => ({ quotes: state.quotes }), mapDispatchToProps)(Quotes);
