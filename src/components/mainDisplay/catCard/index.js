import "./styles.css";
import LoadableImg from "../LoadableImg";


const CatCard = ({img_url}) => {

    return (
        <div className={"cat-card"}>
            <LoadableImg src={img_url} alt={'#'}/>
        </div>
    );
};

export default CatCard;