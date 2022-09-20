import HomeCard from './HomeCard';
import Row from 'react-bootstrap/Row';

function HomeCards() {
    const x = ['hello', 'JOIN', 'Top 10']
    //add key, obvi
    const homeCardsToDisplay = x.map((x) => <HomeCard x={x}/>)
  return (
    <div>
      <Row sm={1} md={3}>
        {homeCardsToDisplay}
      </Row>
    </div>
  )
};

export default HomeCards;