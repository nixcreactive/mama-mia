import React           from 'react';
import CardDanger      from '../components/cards/CardDanger';
import CardSuccess     from '../components/cards/CardSuccess';
import IngredientsIcon from '../assets/icons/IngredientsIcon';
import SearchBoxIcon   from '../assets/icons/SearchBoxIcon';
import DoneIcon        from '../assets/icons/DoneIcon';

const Home = () => {
  return (
    <div className="Home">
      <CardDanger/>
      {cards.map((card, index) => {
        return (
          <CardSuccess
            icon={card.icon}
            title={card.title}
            desc={card.desc}
            tag={card.tag}
            key={index}
          />
        );
      })}
    </div>
  );
};

const cards = [{
  icon: <IngredientsIcon/>,
  title: "ONE",
  desc: "Open your fridge and choose a main ingredient for your dish.",
  tag: "2 minutes",
}, {
  icon: <SearchBoxIcon/>,
  title: "TWO",
  desc: "Put your ingredient into our search box to find a perfect dish.",
  tag: "1 minute",
}, {
  icon: <DoneIcon/>,
  title: "THREE",
  desc: "Select one of our carefully selected dishes, open up tutorial video and get crackin'!",
  tag: "DONE!",
}];

export default Home;