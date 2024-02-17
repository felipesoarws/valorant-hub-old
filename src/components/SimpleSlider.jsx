import { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';

import cardAgentBG from '../assets/card_bg.webp';

class SimpleSlider extends Component {
  state = {
    agents: [],
  };
  componentDidMount() {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((agentsList) => {
        this.setState({ agents: agentsList.data });
      });
  }

  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 3, pagination: false },
      { width: 768, itemsToShow: 3, itemsToScroll: 4 },
      { width: 850, itemsToShow: 3, itemsToScroll: 3 },
      { width: 910, itemsToShow: 4, itemsToScroll: 3 },
      { width: 1024, itemsToShow: 5, itemsToScroll: 3 },
      { width: 1070, itemsToShow: 5, itemsToScroll: 3 },
      { width: 1150, itemsToShow: 5, itemsToScroll: 4 },
      { width: 1450, itemsToShow: 6 },
      { width: 1750, itemsToShow: 7 },
    ];
  }

  render() {
    let arr = [];
    const { agents } = this.state;
    for (let x = 0; x < agents.length; x++) {
      agents[x].displayName = agents[x].displayName.replace('/', '-');
      if (agents[x].isPlayableCharacter) {
        arr.push(agents[x]);
      }
    }

    return (
      <Carousel breakPoints={this.breakPoints} itemPadding={[0, 0]}>
        {arr.map((agent, index) => (
          <Link
            to={`/agents/${agent.displayName.toLowerCase()}/${agent.uuid}`}
            key={index}
          >
            <div className="main__agent" key={index}>
              <div className="main__agent__bg">
                <img src={cardAgentBG} alt="" />
              </div>
              <div className="main__agent__portait">
                <img src={agent.fullPortrait} alt="" />
              </div>
              <div className="main__agent__title">
                <h1>{agent.displayName}</h1>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    );
  }
}

export default SimpleSlider;
