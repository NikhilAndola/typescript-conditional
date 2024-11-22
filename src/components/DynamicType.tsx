// Define types for the props based on the value of `type`
type Props =
  | {
      type: 'user';
      data: {
        name: string;
        age: number;
      };
    }
  | {
      type: 'product';
      data: {
        productName: string;
        price: number;
      };
    };

// Component
const InfoDisplay: React.FC<Props> = (props) => {
  if (props.type === 'user') {
    // TypeScript knows `props.data` is `{ name: string; age: number }`
    return (
      <div>
        <h1>User Info</h1>
        <p>Name: {props.data.name}</p>
        <p>Age: {props.data.age}</p>
      </div>
    );
  }

  if (props.type === 'product') {
    // TypeScript knows `props.data` is `{ productName: string; price: number }`
    return (
      <div>
        <h1>Product Info</h1>
        <p>Product Name: {props.data.productName}</p>
        <p>Price: ${props.data.price}</p>
      </div>
    );
  }

  return null; // Handle cases if `type` has other unexpected values
};

export default InfoDisplay;
