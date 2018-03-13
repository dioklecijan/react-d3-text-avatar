import React from "react";
import * as d3 from "d3";

export default class Avatar extends React.Component {
  componentDidMount() {
    this.draw();
  }

  componentWillUpdate() {
    this.draw();
  }

  draw = () => {
    const { r, bgColor, text } = this.props;
    const svg = d3.select(this.svg);
    let width = svg.attr("width");
    let height = svg.attr("height");
    let clr = bgColor || "blue";
    const clrText = d3.hsl(clr).l > 0.5 ? "black" : "white";

    svg
      .append("circle")
      .attr("r", r)
      .attr("cy", height / 2)
      .attr("cx", width / 2)
      .attr("fill", bgColor || "blue");

    svg
      .append("text")
      .attr("y", height / 2)
      .attr("x", width / 2)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("fill", clrText)
      .style("font-size", r + "px")
      .style("font-family", "sans-serif")
      .style("font-weight", "200")
      .text(text.substr(0, 2));
  };

  render() {
    return (
      <svg
        width={this.props.width || 2 * this.props.r}
        height={this.props.height || 2 * this.props.r}
        ref={e => (this.svg = e)}
      />
    );
  }
}
