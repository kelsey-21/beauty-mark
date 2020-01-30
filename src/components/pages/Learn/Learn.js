import React from 'react';

import LearnData from '../../../helpers/data/learnData';
import SingleLearn from '../../shared/SingleLearn/SingleLearn';
import LearnDetail from '../../shared/LearnDetail/LearnDetail';

import './Learn.scss';

class Learn extends React.Component {
  state = {
    learns: [],
    selectedLearn: {},
  }

  componentDidMount() {
    this.getAllLearns();
  }

  getAllLearns = () => {
    LearnData.getAllLearns()
      .then((learns) => this.setState({ learns }))
      .catch((error) => console.error(error));
  }

  setSingleLearn = (learn) => {
    this.setState({ selectedLearn: learn });
  }

  render() {
    const riskCard = this.state.learns.map((learn) => <SingleLearn key={learn.id} learn={learn} setSingleLearn={this.setSingleLearn} />);

    const { selectedLearn } = this.state;

    return (
      <div className="Learn">
        <h1>Learn More</h1>
        <div className="d-flex justify-content-center learn-more-icons flex-wrap">
          {riskCard}
        </div>
        <div className="d-flex justify-content-center selected-learn-more">
          {
          (selectedLearn.id)
            ? (<LearnDetail selectedLearn={selectedLearn} />) : ''}
        </div>
        <div className="credit-div">
        <div className="text-muted">Icons made by the following authors from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          <ul>
            <li><a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a></li>
            <li><a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a></li>
            <li><a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a></li>
            <li><a href="https://www.flaticon.com/authors/surang" title="surang">surang</a></li>
            <li><a href="https://www.flaticon.com/authors/mynamepong" title="mynamepong">mynamepong</a></li>
          </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default Learn;
