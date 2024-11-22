import '../style.css';

type Car = 'toyota' | 'ford';

type typeA = {
  car: 'ford';
  title: string;
  gears: number;
};

type typeB = {
  car: 'toyota';
  title: string;
  gears: string;
  origin: string;
};

type ConditionalComponentProps = typeA | typeB;

type Props =
  | {
      car: 'ford';
      title: string;
      gears: number;
    }
  | {
      car: 'toyota';
      title: string;
      gears: string;
      origin: string;
    };

export const ConditionalComponent: React.FC<typeA | typeB> = (props) => {
  console.log('types', typeof props.car);
  if (props.car === 'toyota') {
    return (
      <div>
        <h2>Car Info</h2>
        <span className="block">{props.car}</span>
        <span className="block">Title: {props.title}</span>
        <span className="block">Gears: {props.gears}</span>
        <span className="block">Origin: {props.origin}</span>
      </div>
    );
  }

  if (props.car === 'ford') {
    return (
      <div>
        <h2>Car Info</h2>
        <span className="block">{props.car}</span>
        <span className="block">Title: {props.title}</span>
        <span className="block">Gears: {props.gears}</span>
      </div>
    );
  }

  return null;
};
