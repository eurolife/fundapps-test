import React from 'react';
import './App.css';
import {testData} from '../data/testData';
import ArticlesList from './ArticlesList';
import Message from './Message';
import Button from './Button';
import Filter from './Filter';
import Spinner from './Spinner';
import newsapi from '../api/newsapi';
import {compare} from '../helpers';

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
        this.setData(response.data)
      }
     
    }

  }
  setData = (data) => {
    this.setState({ 
      articles: data.articles,
      filteredArticles: data.articles,
      totalResults: data.totalResults,
      sourceList: this.setSourceList(data.articles),
    })
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
    let list = Array.from(new Set(articles.map(a => a.source.name)))
    .map(s => {
      return articles.find(a => a.source.name === s)
    })
    // sort it alphabetically
    return list.sort((a, b) => compare(a.source.name, b.source.name));
  }
  componentDidMount() {
    this.getArticles();

    // Use this to run tests
    //this.setData(testData); 

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
          <div className="mt-8">
            <Button onButtonClick={this.onLoadMore}/>
          </div>
          }
        </div>
        
      )
    }
    return (
      <div className="bg-grey-100 h-screen md:h-auto">
        <Message message="I heard the news today oh boy!"/>
        <Spinner />
      </div>
    
    )
  }

  render() {

    return (
      <div className="bg-gray-100 md:bg-white h-full flex justify-center md:h-auto container">
        <div className="bg-gray-100 p-4 mt-4 sm:pb-8 sm:w-3/4 lg:w-1/2 xl:w-1/2">
          {this.renderContent()}
        </div>
      </div>
      
      );
  }
}

export default App;
