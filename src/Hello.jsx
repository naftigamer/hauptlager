function Hello() {
  return <div> Hello {this.props.name}</div>;
}

export default Hello;

class HelloMessage extends React.Component {
  render() {
    return <div>Hier isz der man {this.props.name}</div>;
  }
}
root.render(<HelloMessage name="Taylor" />);
