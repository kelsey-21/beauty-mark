import React from 'react';
import {
  Card, CardBody, Button,
  CardTitle, CardText, CardImg,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faRandom } from '@fortawesome/free-solid-svg-icons';

import shapes from '../../../helpers/props/shapes';

import './SingleBag.scss';

class SingleBag extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    userProduct: shapes.userProductShape,
  }

  render() {
    const { userProduct } = this.props;

    // const toggle = () => this.setState({ isOpen: !this.state.isOpen });

    return (
      <div className="SingleBagCard">
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{userProduct.name}</CardTitle>
            <CardText>{userProduct.brand}</CardText>


                <CardText>
                  <small className="text-muted">{userProduct.ingredients}</small>
                </CardText>

            <Button color="link"><FontAwesomeIcon icon={faTimes} size="sm"/></Button>
            <Button color="link"><FontAwesomeIcon icon={faRandom} size="sm"/></Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBag;
