import React from 'react';
import './App.css';
import {testData} from '../data/testData';
import ArticlesList from './ArticlesList';
import Message from './Message';
import Button from './Button';
import Filter from './Filter';
import newsapi from '../api/newsapi';

class App extends React.Component {
 
  state = {
    articles: [],
    filteredArticles: [],
    totalResults: 0,
    errorMessage: '',
    limitTo: 5,
    source: 'All',
    sourceList: [],
  }
  getArticles = async () => {
    let response = {};
    let ok = true;
    try {
      response = await newsapi.get('/top-headlines', {
        params: { country: 'gb' },
      });
    } catch(err) {
      ok = false;
      this.setState({ errorMessage: 'Oops! There was an error, please try again.'});

    } finally {
      if(ok) {
        this.setState({ 
          articles: response.data.articles,
          filteredArticles: response.data.articles,
          totalResults: response.data.totalResults,
          sourceList: this.setSourceList(response.data.articles),
          errorMessage: response.message,
        })
      }
     
    }

  }
  onLoadMore = () => {
    this.setState({
       limitTo: this.state.limitTo + 5
    });
  }
  onFilterChange = (e) => {
    this.setState({
      source: e.currentTarget.value
    })
    this.filterList(e.currentTarget.value);
  }
  filterList = (val) => {
    let articles = this.state.articles;
    const newList = articles.filter((item) => {
      
      return val === item.source.name || val === 'All';
    })
    this.setState({
      filteredArticles: newList,
      limitTo: 5
    })
  }
  setSourceList(articles) {
    return Array.from(new Set(articles.map(a => a.source.name)))
    .map(s => {
      return articles.find(a => a.source.name === s)
    })
  }
  componentDidMount() {
    this.getArticles();

  }

  renderContent() {
    if(this.state.errorMessage) {
      return <Message message={this.state.errorMessage}/>
    }
    if(!this.state.errorMessage && this.state.articles.length) {
      return (
        <div>

          <Filter 
          source={this.state.source} 
          sourceList={this.state.sourceList}
          onFilterChange={this.onFilterChange} 
           />

          <ArticlesList 
          articles={this.state.filteredArticles} 
          totalResults={this.state.totalResults} 
          limitTo={this.state.limitTo} 
          source={this.state.source}

           />

          { this.state.limitTo < this.state.filteredArticles.length &&
            <Button onButtonClick={this.onLoadMore}/>
          }
        </div>
        
      )
    }
    return <Message message="Loading..."/>
  }

  render() {

    return (
      <div>
        {this.renderContent()}
      </div>
      );
  }
}

export default App;
