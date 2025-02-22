import React, { Component } from 'react';
import styled from "styled-components";


const Nav = styled.div`
width: 100%;
  height: 70px;
  background-color: green;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
font-size: 30px;
  color:  red;
  font-weight: 600;
  font-family : "Montessarat", sans-serif;
  text-transform : uppercase;
  margin-left : 20px;
  &:hover {color: #0f0};

`

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`

const CartIconContainer = styled.div`
position : relative;
cursor: pointer;
`


const CartCount = styled.div`
background-color: ${(props) => props.color};
border-radius: 50%;
padding: 4px 8px;
position : absolute;
right: 10px;
top: -5px;
font-size: 12px;
visibility : ${(props) => props.show ? "visible" : "hidden"};
`

function Navbar(props){
    // constructor(){
    //     super();
    //     console.log("this", this);
    //     this.state = {
    //         title : "The Avengers !!",
    //         plot : "Supernatural power shown in movie",
    //         price : 199,
    //         rating : 8.9,
    //         stars : 0
    //     }
    //     // this.addStars = this.addStars.bind(this);  other way to bind event handler
    // }


    // addStars = () => { 
        

    //  }


    console.log("cart", props);
    const {cartCount} = props;
    return (
      <>
      <Nav>
        <Title> Movie App</Title>
        <CartIconContainer>
          <CartImg alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" style={styles.cartIcon}/>
          <CartCount color="blue" show={true}>{cartCount}</CartCount>
        </CartIconContainer>
      </Nav>
        {/* <h1>Navbar</h1> */}
      </>
    )
  
}

export default Navbar;

const styles ={
 nav : {
  width: "100%", height: 70, backgroundColor : "red", display: "flex", justifyContent: "space-between"
 },
 title : {
  fontSize: 30,
  color:  '#fff',
  fontWeight: 600,
  fontFamily : '"Montessarat", sans-serif',
  textTransform : "uppercase",
  marginLeft : 20
 },
 cartContainer : {
  position : "relative",
  cursor: "pointer"
 },
 cartIcon : {
  height: 48,
  marginRight: 20
 },
  cartCount : {
    background : "orange",
    borderRadius : "50%",
    padding : "4px 8px",
    position : "absolute",
    right: 10,
    top : -5,
    fontSize: 12
  }
 
}