import "./styles.css"


const CatCard = ({img_url}) => {

 return (
     <div className={"cat-card"}>
            <img src={img_url}/>
     </div>
 )
};

export default CatCard;