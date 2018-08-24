import React from "react";

class Gallery extends React.Component {
  render() {
    const MISSING_IMAGE =
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
    return (
      <div>
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a key={index} className="book"
                href={infoLink}
                target="_blank">
              <img
                src={imageLinks ? imageLinks.thumbnail : MISSING_IMAGE}
                alt="book image"
                className="book-img"/>
              <div className="book-text">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
