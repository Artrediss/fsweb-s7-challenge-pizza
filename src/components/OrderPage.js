import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function OrderPage() {
  const history = useHistory();
  const toppings = [
    "Pepperoni",
    "tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Zeytin",
    "Biber",
    "Kabak",
    "Kanada Jambon",
    "Domates",
    "Jalepeno",
    "Sucuk",
  ];

  const [pizzaPrice, setPizzaPrice] = useState(85.5);
  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [doughSelection, setDoughSelection] = useState("hamur seçiniz");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [totalToppingCost, setTotalToppingCost] = useState(0);
  const [textNote, setTextNote] = useState("");
  const [formData, setFormData] = useState({
    pizzaSize: selectedSize,
    doughType: doughSelection,
    toppings: selectedToppings,
    note: textNote,
    quantity: pizzaQuantity,
    totalCost:((85.5 + totalToppingCost) * pizzaQuantity),
  });

  const handleCheckboxChange = (topping) => {
    const isSelected = selectedToppings.includes(topping);

    if (isSelected) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      selectedToppings.length < 10
        ? setSelectedToppings([...selectedToppings, topping])
        : setSelectedToppings(selectedToppings);
    }

    if (!isSelected) {
      selectedToppings.length <= 10
        ? setTotalToppingCost(selectedToppings.length * 5 + 5)
        : setTotalToppingCost(totalToppingCost);
    } else {
      setTotalToppingCost(totalToppingCost - 5);
    }
  };

  const handleTextChange = (e) => {
    e.preventDefault();
    setTextNote(e.target.value);
  };

  const decreaseQuantity = (e) => {
    e.preventDefault();
    pizzaQuantity > 1
      ? setPizzaQuantity(pizzaQuantity - 1)
      : setPizzaQuantity(pizzaQuantity);
  };

  const increaseQuantity = (e) => {
    e.preventDefault();
    setPizzaQuantity(pizzaQuantity + 1);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleThicknessChange = (e) => {
    setDoughSelection(e.target.value);
  };

  useEffect(() => {
    setPizzaPrice(pizzaQuantity * 85.5);
  }, [pizzaQuantity]);

  useEffect(() => {
    console.log(textNote);
  }, [textNote]);

  useEffect(() => {
    if (selectedSize === "small") {
      console.log("pizza boyutu küçük");
    } else if (selectedSize === "medium") {
      console.log("pizza boyutu orta");
    } else {
      console.log("pizza boyutu büyük");
    }
  }, [selectedSize]);

  useEffect(() => {
    if (doughSelection === "thin") {
      console.log("ince seçim");
    } else if (doughSelection === "standart") {
      console.log("standart seçim");
    } else {
      console.log("kalın seçim");
    }
  }, [doughSelection]);

  useEffect(() => {
    console.log(selectedToppings);
  }, [selectedToppings]);

  
  useEffect(() => {
    console.log(formData);
  }, [formData]);
 
  const handleFormChange = () => {
    setFormData({
      "size": selectedSize,
      "doughType": doughSelection,
      "toppings": selectedToppings,
      "note": textNote,
      "quantity": pizzaQuantity,
      "totalCost": parseFloat((85.5 + totalToppingCost) * pizzaQuantity),
    });
    postFormData();
  };

  const postFormData = async () => {

    const url = "https://reqres.in/api/users";
    try {
      const response = await axios.post(
        url,
        formData
      );
      console.log("Response from the server:", response.data);
    } catch (error) {
      console.error("Error while posting data:", error);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleFormChange();
    history.push("/success");
  };

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
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
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
                    <input
                      type="radio"
                      name="size"
                      value="small"
                      checked={selectedSize === "small"}
                      onChange={handleSizeChange}
                    ></input>
                    Küçük
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      value="medium"
                      checked={selectedSize === "medium"}
                      onChange={handleSizeChange}
                    ></input>
                    Orta
                  </label>
                  <label>
                    <input
                      type="radio"
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
                  <select
                    name="thickness"
                    value={doughSelection}
                    onChange={handleThicknessChange}
                  >
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
              {toppings.map((topping, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="topping"
                    value={topping}
                    checked={selectedToppings.includes(topping)}
                    onChange={() => handleCheckboxChange(topping)}
                  />
                  {topping}
                </label>
              ))}
            </div>

            <div>
              <h3>Sipariş Notu</h3>
              <label>
                <input
                  type="text"
                  placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
                  className="order-note"
                  onChange={handleTextChange}
                ></input>
              </label>
            </div>
            <div className="hr-style">
              <hr></hr>
            </div>
            <div className="result">
              <div className="quantify">
                <button class="quantity-button" onClick={decreaseQuantity}>
                  -
                </button>
                <span>{pizzaQuantity}</span>
                <button class="quantity-button" onClick={increaseQuantity}>
                  +
                </button>
              </div>

              <div className="totalPrice">
                <h3>Sipariş Toplamı</h3>

                <div className="price-area">
                  <div class="price-to-right" style={{ color: "#5F5F5F" }}>
                    Seçimler <span>{totalToppingCost}₺</span>
                  </div>
                  <div class="price-to-right" style={{ color: "red" }}>
                    Toplam{" "}
                    <span>{(85.5 + totalToppingCost) * pizzaQuantity}₺</span>
                  </div>
                </div>
                <Link
                  to="/success"
                  className="button-orderpage"
                  onClick={handleFormSubmit}
                >
                  SİPARİŞ VER
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
