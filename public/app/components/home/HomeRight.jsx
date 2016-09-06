import 'React' from 'react';

var images = './images/home/';

export default class HomeRight extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <img src={images + 'home-right-container'} />
      </div>
    )
  }
}
