import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Gallery from "./Gallery";

class Global extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: []
    };
  }

  search(event) {
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${BASE_URL}${this.state.query}`, { method: "GET" })
      .then(resp => resp.json())
      .then(json => {
          let {items} = json;
          this.setState({items});
      });
  }

  render() {
    return (
      <div className="Global">
        <h2>Book Explorer!</h2>
        
        {/* Search section */}
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search book"
              onChange={event => this.setState({ query: event.target.value })}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={event => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        
        {/* Gallery section */}
        <Gallery items={this.state.items} />
      </div>
    );
  }
}

export default Global;
