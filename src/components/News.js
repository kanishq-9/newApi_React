import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import propTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    pageSize: 9,
    country: "in",
  };
  static propTypes = {
    pageSize: propTypes.number,
    country: propTypes.string,
  };
  updateName = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.updateName(this.props.category)} - AllNewsPress`;
  }

  handlePrev = async () => {
    this.setState({ loading: true });
    let newUrl = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.api}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.props.newProgress(40);
    let data = await fetch(newUrl);
    let parsedData = await data.json();
    this.props.newProgress(70);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
    this.props.newProgress(100);
  };

  handleNext = async () => {
    this.setState({ loading: true });
    let newUrl = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.api}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.props.newProgress(40);
    let data = await fetch(newUrl);
    let parsedData = await data.json();
    this.props.newProgress(70);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
    this.props.newProgress(100);
  };

  async componentDidMount() {
    this.setState({ loading: true });
    let newUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
    this.props.newProgress(40);
    let data = await fetch(newUrl);
    let parsedData = await data.json();
    this.props.newProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.newProgress(100);
  }

  render() {
    return (
      <div className="container">
        <div className="text-center" style={{ margin: "40px 0px" }}>
          <h1>AllNewsPress - Top Highlights</h1>
          {this.state.loading && <Spinner />}
        </div>

        <div className="row my-5">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4 my-3" key={e.url}>
                  <NewsItems
                    title={e.title}
                    description={e.description}
                    urlToImage={e.urlToImage}
                    newsUrl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handlePrev}
            disabled={this.state.page <= 1}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
