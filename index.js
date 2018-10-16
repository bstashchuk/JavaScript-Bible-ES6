class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickedQty: 0 };
  }

  render() {
    return React.createElement(
      window["material-ui"].Button,
      {
        variant: "contained",
        color: this.props.color,
        onClick: () =>
          this.setState({
            clickedQty: ++this.state.clickedQty
          })
      },
      this.state.clickedQty > 0
        ? `Button was clicked ${
            this.state.clickedQty
          } times`
        : "Click me!!!"
    );
  }
}

const button1 = React.createElement(LikeButton, {
  color: "primary"
});

const buttonContainer1 = document.getElementById("button1");

ReactDOM.render(button1, buttonContainer1);
