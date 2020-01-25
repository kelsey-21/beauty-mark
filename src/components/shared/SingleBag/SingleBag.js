import React from 'react';
import {
  Card, CardBody, Button,
  CardTitle, CardText, CardImg,
} from 'reactstrap';

import shapes from '../../../helpers/props/shapes';

class SingleBag extends React.Component {
  static propTypes = {
    userProduct: shapes.userProductShape,
  }

  render() {
    const { userProduct } = this.props;
    // if (!userProduct.name) { return ''; }

    return (
      <div className="SingleBag">
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{userProduct.name}</CardTitle>
            <CardText>{userProduct.brand}</CardText>
            <CardText>
              <small className="text-muted">{userProduct.ingredients}</small>
            </CardText>
            <Button>Delete</Button>
            <Button>Switch product</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default SingleBag;
