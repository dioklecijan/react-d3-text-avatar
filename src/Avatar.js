import React from "react";
import * as d3 from "d3";

export default class Avatar extends React.Component {
  componentDidMount() {
    this.draw();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { r, bgColor, text, width, height } = this.props;
    if (
      nextProps.width !== width ||
      nextProps.height !== height ||
      nextProps.r !== r ||
      nextProps.bgColor !== bgColor ||
      nextProps.text !== text
    )
      return true;
    return false;
  }

  componentDidUpdate() {
    this.draw();
  }

  draw = props => {
    const { r, bgColor, text } = props || this.props;
    const svg = d3.select(this.svg);
    svg.selectAll("*").remove();

    let width = svg.attr("width");
    let height = svg.attr("height");
    let clr = bgColor || "blue";
    const clrText = d3.hsl(clr).l > 0.5 ? "black" : "white";

    let c = svg
      .append("circle")
      .attr("r", r)
      .attr("cy", height / 2)
      .attr("cx", width / 2)
      .attr("fill", bgColor || "blue");

    let t = svg
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
