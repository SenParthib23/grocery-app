import { Link } from "react-router-dom";

const Category = (props) => {
    const { catName, catId, catImage } = props.data;
    return (
        <div class="col-sm-3">
            <div class="card">
                <img src={'http://rjtmobile.com/grocery/images/'+catImage} alt="" className="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">{catName}</h5>

                    <Link to={'/products/'+ catId} class="btn btn-primary btn-block">Select</Link>
                </div>
            </div>
        </div>
    )
}
export default Category;