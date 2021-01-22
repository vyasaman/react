import React from 'react';
import info1 from './details';
import './index.css';
function Card() {
    return (
        <div>
            <div className='card1'>
                <div id='cardImage1'></div>
                <div id='details1'>
                    <h3>Name : {info1[0].name}</h3>
                    <h3>Age : {info1[0].age}</h3>
                    <h3>City : {info1[0].city}</h3>
                </div>
            </div>
            <div className='card2'>
                <div id='cardImage2'></div>
                <div id='details2'>
                    <h3>Name : {info1[1].name}</h3>
                    <h3>Age : {info1[1].age}</h3>
                    <h3>City : {info1[1].city}</h3>
                </div>
            </div>
            <div className='card3'>
                <div id='cardImage3'></div>
                <div id='details3'>
                    <h3>Name : {info1[2].name}</h3>
                    <h3>Age : {info1[2].age}</h3>
                    <h3>City : {info1[2].city}</h3>
                </div>
            </div>
            <div className='card4'>
                <div id='cardImage4'></div>
                <div id='details4'>
                    <h3>Name : {info1[3].name}</h3>
                    <h3>Age : {info1[3].age}</h3>
                    <h3>City : {info1[3].city}</h3>
                </div>
            </div>
        </div>
    );
};
export default Card;