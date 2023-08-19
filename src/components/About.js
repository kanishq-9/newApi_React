import React, { Component } from "react";

export class About extends Component {
  triggerring = () => {
    setTimeout(() => this.props.newProgress(100), 2000);
  };

  render() {
    return (
      <div onLoad={this.triggerring}>
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3 text-center my-5">Discover Our Story</h1>
            <p>
              Welcome to AllNewsPress, where journalism meets innovation. We are
              a dynamic and forward-thinking team dedicated to bringing you the
              latest news, insightful analyses, and thought-provoking stories
              from around the world. With a commitment to excellence, integrity,
              and accuracy, we strive to deliver content that informs,
              enlightens, and empowers our readers. <br />
              <br />
              Our journey began with a shared passion for journalism's power to
              shape societies and drive conversations. AllNewsPress was born out
              of the desire to provide a platform that transcends traditional
              news delivery methods. Through our cutting-edge React app, we've
              reimagined the newspaper reading experience, making it more
              interactive, user-friendly, and tailored to your preferences.{" "}
              <br />
              <br />
              At AllNewsPress, we believe in the importance of diverse
              perspectives and unbiased reporting. Our team of seasoned
              journalists and writers comes from various backgrounds, ensuring a
              comprehensive and inclusive coverage of events. Whether it's
              breaking news, in-depth features, or insightful op-eds, we're here
              to keep you informed and engaged. <br />
              <br />
              Explore our About Us page to learn more about the faces behind the
              bylines, our editorial philosophy, and the technology that drives
              our app's seamless functionality. We're not just a news source;
              we're a community that values open dialogue, critical thinking,
              and the exchange of ideas. Join us on this exciting journey as we
              redefine the way you experience news. <br />
              <br />
              Thank you for being a part of the AllNewsPress family. Together,
              we're shaping the future of journalism, one click at a time.
            </p>
          </div>
        </div>

        <div className="container" style={{ marginTop: "3rem" }}>
          <div className="row my-4 border rounded">
            <div className="col-md-4">
              <h2>Real-Time Data</h2>
              <p>
                Stay ahead of the curve with our real-time data feature.
                Experience news as it unfolds, with updates delivered straight
                to your device the moment they are verified. From breaking
                stories to live events, you'll have access to the freshest
                information at your fingertips. With AllNewsPress, you're always
                in tune with the pulse of the world.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Explore Diverse Categories</h2>
              <p>
                Dive into a world of knowledge by exploring our diverse
                categories. Whether you're passionate about politics, science,
                arts, or sports, our React app offers a rich array of topics to
                explore. Tailor your news journey to your interests, and with
                just a few clicks, immerse yourself in in-depth coverage that
                broadens your perspective and enriches your understanding.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Unparalleled Source Variety</h2>
              <p>
                Experience news from multiple angles with our variety of
                sources. We curate content from reputable and diverse sources,
                ensuring a well-rounded view of the stories that matter. Our
                commitment to unbiased reporting means you can access different
                viewpoints and draw your own conclusions. Trust in a platform
                that values information integrity and empowers you to make
                informed decisions.
              </p>
            </div>
          </div>

          <hr />
        </div>
      </div>
    );
  }
}

export default About;
