import { getByPlaceholderText } from "@testing-library/react";
import React from "react";
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function OrderPage() {

  const toppings = ['Pepperoni', 'Sarımsak', 'Soğan', 'Kabak', 'Jalepeno', 'Tavuk Izgara', 'Ananas', 'Sucuk', 'Kanada Jambonu', 'Sucuk', 'Mısır', 'Sosis', 'Biber', 'Domates']
  const [pizzaPrice, setPizzaPrice] = useState(85.50);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null); 
  const [doughSelection, setDoughSelection] = useState("hamur seçiniz")
  const [toppingSelection, setToppingSelection] = useState([]);


  const decreaseQuantity=(e)=>{
   e.preventDefault();
   pizzaQuantity > 1 ? setPizzaQuantity(pizzaQuantity-1) : setPizzaQuantity(pizzaQuantity);
  }

  const increaseQuantity =(e)=>{
  e.preventDefault();
  setPizzaQuantity(pizzaQuantity+1);
  }

   const handleSizeChange = (e)=>{
    setSelectedSize(e.target.value);
   }

   const handleThicknessChange = (e) =>{
    setDoughSelection(e.target.value)
   }

  useEffect(()=>{

    setPizzaPrice(pizzaQuantity * 85.50)

  },[pizzaQuantity])

  if(selectedSize === "small"){
  useEffect(()=>{
      console.log("pizza boyutu küçük")
    },[selectedSize])
  }else if(selectedSize === "medium"){
    useEffect(()=>{
      console.log("pizza boyutu orta")
    },[selectedSize])
  }else{
    useEffect(()=>{
      console.log("pizza boyutu büyük")
    },[selectedSize])
  }

  if(doughSelection === "thin"){
    useEffect(()=>{
        console.log("ince seçim")
      },[doughSelection])
    }else if(doughSelection === "standart"){
      useEffect(()=>{
        console.log("standart seçim")
      },[doughSelection])
    }else{
      useEffect(()=>{
        console.log("kalın seçim")
      },[doughSelection])
    }
  
  return (
    <div>
      <div className="orderPageHeader">
        <h1>Teknolojik Yemekler</h1>
        <div>
          Anasayfa -{" "}
          <span style={{ color: "white", fontWeight: "bold" }}>
            Sipariş Oluştur
          </span>
        </div>
      </div>

      <div className="form-container">
        <div className="form-wrapper">
          <h2>Position Absolute Acı Pizza</h2>
          <div className="price-rating-container">
            <h2>{pizzaPrice}₺</h2>
            <div className="rating-wrapper">
              <span>4.9</span>
              <span>(200)</span>
            </div>
          </div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <form>
            <div className="size-dough-selection">
              <div className="size-selection">
                <h3>
                  Boyut Seç <span style={{ color: "red" }}>*</span>
                </h3>

                <div className="radio-size-selection">
                  <label>
                    <input type="radio"
                           name="size"
                           value="small"
                           checked={selectedSize === "small"}
                           onChange={handleSizeChange}
                    ></input>
                    Küçük
                  </label>
                  <label>
                    <input type="radio"
                           name="size"
                           value="medium"
                           checked={selectedSize === "medium"}
                           onChange={handleSizeChange}
                    ></input>
                    Orta
                  </label>
                  <label>
                    <input type="radio"
                           name="size"
                           value="big"
                           checked={selectedSize === "big"}
                           onChange={handleSizeChange}
                    ></input>
                    Büyük
                  </label>
                </div>
              </div>
              <div className="dough-selection">
                <h3>
                  Hamur Seç <span style={{ color: "red" }}>*</span>
                </h3>
                <label>
                  <select name="thickness"
                          value={selectedSize}
                          onChange={handleThicknessChange}>
                    <option>Hamur seçiniz</option>
                    <option value="thin">İnce</option>
                    <option value="standart">Standart</option>
                    <option value="thick">Kalın</option>
                  </select>
                </label>
              </div>
            </div>
            <div>
              <h3>Ek Malzemeler</h3>
              <p>En fazla 10 malzeme seçebilirsiniz.</p>
            </div>
            <div className="extra-checkbox-selection">
              
              <label>
                <input type="checkbox"
                       Name="topping" /> Pepperoni{" "}
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Tavuk Izgara
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Mısır
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Sarımsak{" "}
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Ananas
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Sosis
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Soğan
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Sucuk
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Biber{" "}
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Kabak
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Kanada Jambonu
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Domates{" "}
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Jalepeno
              </label>
              <label>
                <input type="checkbox"
                Name="topping" /> Sucuk
              </label>
            </div>
            <div>
              <h3>Sipariş Notu</h3>
              <label>
                <input
                  type="text"
                  placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                  className="order-note"
                ></input>
              </label>
            </div>
            <div className="hr-style">
              <hr></hr>
            </div>
            <div className="result">
              <div className="quantify">
                <button onClick={decreaseQuantity}>-</button>
                <span>{pizzaQuantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              
              <div className="totalPrice">
                <h3>Sipariş Toplamı</h3>

                <div className="price-area">
                  <div>
                    Seçimler <span>25.50Tl</span>
                  </div>
                  <div>
                    Toplam <span>{pizzaPrice}Tl</span>
                  </div>
                </div>

                <button>SİPARİŞ VER</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
