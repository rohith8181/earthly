import React,{useState,useRef} from 'react'

import { images } from '../data';
import Img from './Img';

function Hero2() {
  const specref = useRef(null);
  const featref = useRef(null);
  const specref1 = useRef(null);
  const featref1 = useRef(null);

  const [Mainimg , setMainimg] = useState(images[0])
  const largeimg = (item)=>{
     setMainimg(item);
  }

  const spec = ()=>{
    featref.current.classList.remove("new-feat");
    featref1.current.classList.remove("new-feat1");
    specref.current.classList.remove("new-spec");
    specref1.current.classList.remove("new-spec1");
  }
  const feat = ()=>{
    featref.current.classList.add("new-feat");
    featref1.current.classList.add("new-feat1");
    specref.current.classList.add("new-spec");
    specref1.current.classList.add("new-spec1");
  }

  return (
    <div className="product">
      <div className="left">
        <div className="large">
              <img src={Mainimg.image} alt={Mainimg.alt}/>
        </div>
        <div className="small">
          <ul>
            {
              images.map((item) => {
                return <Img item={item} getdata={largeimg} />
              })
            }
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="title">
          <h2>Sustainability Starter Kit</h2>
          <span>Available in stock</span>
        </div>
        <div className="price">
          <p>€9.8</p>
          {/* <br /> */}
        </div>
        <div className="producttimeline">
          <span onClick={spec} ref={specref1} className="spec1">Specifications</span>
          <span onClick={feat} ref={featref1} className="feat1">Features</span>
          <span>Reviews</span>
        </div>
        <br />
        <div className="productinfo">
          <div className="spec" ref={specref}>
            <p>2 Bamboo Straws <br />
          1 Plant Based Reusable Cup with 2 lids <br />
          1 Natural Loofah <br />
          1 box of 50 Bamboo Cotton Eartips <br />
          1 Bamboo Toothbrush.</p> 
          </div>
          <div className="feat" ref={featref}>
              <p>
            <b>1.</b> Govt Approved, Tested, and approved
           <br />  in TUV Rhineland, Germany <br />
            <b>2.</b> 100% recyclable and non-toxic <br />
            <b>3.</b> Leak-Proof <br />
            <b>4.</b> Odorless tasteless and doesn't react with hot beverages <br />
            <b>5.</b> Lightweight <br />
            <b>6.</b> Microwavable <br />
          </p>
          </div>
        
        </div>
        <br />
        <div className="addcart">
          <input type="number" placeholder='0' className='imput'/>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  )
}

export default Hero2