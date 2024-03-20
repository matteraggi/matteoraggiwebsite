const ContactItems = (props: any) => {
  return (
    <div className="item-box">
      <span>
        <img src={props.image} alt={props.heading}></img>
      </span>
      <div className="item-info">
        <h3 className="item-headline">{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default ContactItems;
