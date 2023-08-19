import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="card">
        <img
          src={
            urlToImage
              ? urlToImage
              : "https://www.livemint.com/lm-img/img/2023/08/16/600x338/chandrayaan3_1692172386402_1692172415019.jpg"
          }
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 22) : "-"}...
            <span className="badge rounded-pill text-bg-secondary">
              {source}
            </span>
          </h5>

          <p className="card-text">
            {description ? description.slice(0, 32) : "-"}...
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"}, Published at{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={
              newsUrl
                ? newsUrl
                : "https://www.livemint.com/lm-img/img/2023/08/16/600x338/chandrayaan3_1692172386402_1692172415019.jpg"
            }
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItems;
