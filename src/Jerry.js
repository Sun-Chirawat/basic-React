const Jerry = ({jerry}) => {
    // console.log(props);
    // const {img, text} = props;

    return ( 
        <div className="avatar">
              <img src={jerry.img} alt={jerry.text} />
              <div className="name">{jerry.text}</div>
            </div>
     );
}
 
export default Jerry;