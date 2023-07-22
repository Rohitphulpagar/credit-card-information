import React,{ useState } from 'react';
import bgDesktop from "./images/bg-main-desktop.png";
import logo from "./images/card-logo.svg";
import {format} from "date-fns";
export default function App() {

  const [confirmed, setConfirmed]=useState(false);
  const [name,setName]=useState("");
  const[cardNumber,setCardNumber]=useState("");
  const[date, setDate]=useState("01/01");
  const[cvc, setCvc]=useState("");

  return <>
   <section>
<div>
  <picture className='back'>
      <img src={bgDesktop} alt='' /> 
  </picture>
</div>

<div className='mains'>
 <div className='First'> 
 <article className='front-card'>
<img className='img-1' src={logo}></img>

<div className='infos'>
  <h2 className='names'>
    {cardNumber}
  </h2>

  <ul className='infos2'>
    <li className='names1'>{name}</li>
    <li className='names2'>{format(new Date(date), "MM/yy")}</li>
  </ul>
</div>
 </article>
<article className='back-card'>
  <p className='cvcs'>{cvc}</p>
</article>
 </div>

 <div className='Second'>
{ !confirmed &&
  <form className='forms'>
<div>
  <label htmlFor="cardholder_name">CARDHOLDER NAME</label>
  <input type='text' name="cardholder_name" id="cardholder_name" placeholder='e.g. Jane Appleseed' required
  value={name} onChange={(e) => setName(e.target.value)}></input>
</div>

<div>
  <label htmlFor="card_number">CARD NUMBER</label>
  <input type='text' name="card_number" id="card_number" placeholder='e.g. 1234 5678 9123 0000' maxLength={19} required
  value={cardNumber.replace(/\s/g, "").replace(/(\d{4})/g,"$1 ").trim()} 
  onChange={(e) => setCardNumber(e.target.value)}></input>
</div>

<article className='date_cvc'>
<div>
  <label htmlFor="expiry_date">Exp. Date (MM/YY)</label>
  <input className='mon' type='month' name="expiry_date" id="expiry_date" placeholder='MM YY' required
  value={date} onChange={(e) => setDate(e.target.value)}></input>
</div>

<div>
  <label htmlFor="cvc">CVC</label>
  <input className="cv" type='text' name="cvc" id="cvc" placeholder='e.g. 123' maxLength={3} required
  value={cvc} onChange={(e) => setCvc(e.target.value)}></input>
</div>
</article>
<button onclick={()=> setConfirmed(true)} className='btn'>Confirm</button>
  </form>
}
{confirmed && <Thanku setConfirmed={setConfirmed}/>}
 </div>
</div>
   </section>
  </>;
}


function  Thanku(setConfirmed) {
  return(
    <>
    </>
  )
}

