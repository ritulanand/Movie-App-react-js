import {Component} from "react";

function Moviecard(props){
    // constructor(){
    //     super();
    //     console.log("this", this);
    //     this.state = {
    //         title : "The Avengers !!",
    //         plot : "Supernatural power shown in movie",
    //         price : 199,
    //         rating : 8.9,
    //         stars : 0,
    //         fav : false,
    //         cart : false
    //     }
    //     // this.addStars = this.addStars.bind(this);  other way to bind event handler
    // }
    // handleCart = () =>{
    //     this.setState({
    //         cart : !this.state.cart
    //     })
    // }


    // handlefav = () => {
    //     this.setState({
    //         fav : !this.state.fav
    //     })
    // }
    


    // substractStars = () => {
    //     if(this.state.stars > 0){
    //         this.setState({
    //             stars : this.state.stars - .5
    //         })
    //     }
    // }

    //  addStars = () => { 
        
    //     // console.log("this.state", this);

    //     //setState use to set/change the state and also render the component
    //     //form1
    //     // this.setState({
    //     //     stars : this.state.stars + 9
    //     // })
    //     // this.setState({
    //     //     stars : this.state.stars + 1
    //     // })
    //     // this.setState({
    //     //     stars : this.state.stars + 2
    //     // })
    //     // this.setState({
    //     //     stars : this.state.stars + 12
    //     // })
        

    //     // onclikc one time change use form1

    //     //form2
    // //     this.setState(prevState => {
    // //        return  {
    // //             stars: prevState.stars+.5
    // //         }
    // //  }
        
    // //     )
    // if(this.state.stars < 5){

    
    //     this.setState(prevState => 
    //         (  {
    //              stars: prevState.stars+.5
    //          }
    //         )
         
    //      )

        

    //      console.log("satte", this.state.stars);
    //     }



    //     // clasisc expmaple use form 2

    //     // this.state.stars += .5;
    //     console.log("this.state.stars", this.state.stars);

    //  }
     
    
        // console.log("props", this.props);
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  props
        const {title, plot, poster, price, rating,stars,fav,isInCart} =  props.movies;
        
                
        return(
            //Movie Card
            <div className="movie-card">
                
                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                
                {/**Right section Movie Card */}
                <div className="right">

                    {/**Title, plot, price of the movie */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    {/**Footer starts here with ratings, stars and buttons */}
                    <div className="footer">
                        <div className="rating">{rating}</div>

                        {/**Star image with increase and decrease buttons and star count */}
                        <div className="star-dis">
                            <img className="str-btn" 
                                alt="Decrease" 
                                src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                onClick={() => onDecStars(movies)}
                            />
                            <img className="stars" 
                                    alt="stars" 
                                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"    
                            />
                            <img className="str-btn" 
                                alt="increase" 
                                src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png" 
                                // No binding required as addStars() is an arrow function
                                onClick={() => onIncStars(movies)}
                            />
                            <span className="starCount">{stars}</span>
                        </div>

                        {/**conditional rendering on Favourite button */}
                        <button className={fav?"unfavourite-btn":"favourite-btn"}  
                                onClick={() => onClickFav(movies)}> 
                                    {/* // lifting state up - child to parent state update  */}
                                    {fav ? "Un-favourite":"Favourite"}

                        </button>
                            
                        {/**Conditional Rendering on Add to Cart Button */}
                        <button className={isInCart?"unfavourite-btn":"cart-btn"}  
                                onClick={() => onClickAddtocart(movies)}>
                                    
                                        {isInCart ? "Remove from Cart":"Add to Cart"}

                        </button>
                        
                    </div>
                </div>

            </div>
          
        )
    
}

export default Moviecard;