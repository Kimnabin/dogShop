import { useContext, useState } from 'react';
import { cartContext } from '../../Contexts/CartContext';
const DogsCart = (props) => {
    const {
        id,
        name,
        breed,
        description,
        price,
        imageUrl
    } = props;

    const {addToCart, setTotal} = useContext(cartContext);
    const [isAdded, setIsAdded] = useState(false);
    const handeClick = () => {
        setIsAdded(!isAdded);
        const newItems = {
            name : name,
            price: price,
            imageUrl: imageUrl
        };
        addToCart((prev) => [...prev, newItems]);
        setTotal((total) => (total += Number(price)));
    };
    return ( 
        <>
        <section className='dogs'> 
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-img-container">
                <img src={imageUrl} alt={`picture of: ${name}`} className="dog-img" />
            </div>
            <div className="dogs-desc">{description}</div>
            <div className="dogs-price">{price}</div>
            {isAdded ? (
                <button className="dogs-btn-disabled">ADDED</button>
            ) : (
                <button className="dogs-btn" onClick={handeClick}>ADD TO CARD</button>
            )}
            
        </section>
        </>
     );
}
 
export default DogsCart;