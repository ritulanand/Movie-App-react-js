import {Component} from "react";

class MovieCard extends Component{
    constructor(){
        super();
        console.log("this", this);
        this.state = {
            title : "The Avengers !!",
            plot : "Supernatural power shown in movie",
            price : 199,
            rating : 8.9,
            stars : 0
        }
        // this.addStars = this.addStars.bind(this);  other way to bind event handler
    }
    


    substractStars = () => {
        if(this.state.stars > 0){
            this.setState({
                stars : this.state.stars - .5
            })
        }
    }

     addStars = () => { 
        
        // console.log("this.state", this);

        //setState use to set/change the state and also render the component
        //form1
        // this.setState({
        //     stars : this.state.stars + .5
        // })

        // onclikc one time change use form1

        //form2
    //     this.setState(prevState => {
    //        return  {
    //             stars: prevState.stars+.5
    //         }
    //  }
        
    //     )

        this.setState(prevState => 
            (  {
                 stars: prevState.stars+.5
             }
            )
         
         )

        // clasisc expmaple use form 2

        // this.state.stars += .5;
        // console.log("this.state.stars", this.state.stars);

     }
     

    render(){

        const {title, plot, price, rating, stars} = this.state;
        return (
            <div className="main">
            <div className="movie-card">
                <div className="left">
            <img alt="poster" src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZlbmdlcnxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
                <div className="right">
                    <div className="title">
                        {this.state.title}
                    </div>
                    <div className="plot">
                    {plot}
                    </div>
                    <div className="price">
                        Rs.{price}
                    </div>
                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img 
                            onClick={this.substractStars}
                            src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" className="str-btn" alt="decrease" />

                            
                                <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" alt="star" />

                                <img 
                                onClick={this.addStars}
                                src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" alt="increase" />

                                <span>{stars}</span>
                                
                                
                           
                        </div>
                        <button className="favourite-btn">Favourite</button>
                        <button className="cart-btn">Add to cart</button>
                         
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default MovieCard;