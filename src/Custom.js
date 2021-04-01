import React from "react";
import "./style.css";

function Custom() {
  return (
    <div className="custom">
      <div>
        <div>
          <h2>Customize Your pizza!!</h2>
        </div>
        <div>
          <form>
            <p>Choose crust</p>
            <div className="option">
              <input
                type="radio"
                id="OriginalThinCrust	"
                name="base"
                value="Original Thin Crust	"
              />
              <label htmlFor="base">Original Thin Crust </label>
              <br />
              <input
                type="radio"
                id="Gluten_free"
                name="base"
                value="Gluten-Free	"
              />
              <label htmlFor="base">Gluten-Free </label>
              <br />
            </div>

            <p>Pizza Sauce </p>
            <div className="option">
              <input
                type="radio"
                id="White Sauce"
                name="sauce"
                value="White Sauce"
              />
              <label htmlFor="Sauce">White Sauce</label>
              <br />
              <input
                type="radio"
                id="Tomato Sauce"
                name="sauce"
                value="Tomato"
              />
              <label htmlFor="Sauce">Tomato Sauce</label>
              <br />
              <input
                type="radio"
                id="Pepper Sauce"
                name="sauce"
                value="Pepper Sauce"
              />
              <label htmlFor="Sauce">White Sauce</label>
              <br />
              <input
                type="radio"
                id="BBQ Sauce"
                name="sauce"
                value="BBQ Sauce"
              />
              <label htmlFor="Sauce">BBQ Sauce</label>
              <br />
            </div>

            <p>choose Cheese</p>
            <div className="option">
              <input
                type="radio"
                id="MozzarellaCheese"
                name="cheese"
                value="MozzarellaCheese"
              />
              <label htmlFor="cheese">Mozzarella Cheese</label>
              <br />
              <input
                type="radio"
                id="Provolone Cheese"
                name="cheese"
                value="Provolone Cheese"
              />
              <label htmlFor="cheese">Provolone Cheese</label>
              <br />
              <input
                type="radio"
                id="Cheddar Cheese"
                name="cheese"
                value="Cheddar Cheese"
              />
              <label htmlFor="cheese">Cheddar Cheese</label>
              <br />
            </div>

            <p>choose veggies</p>
            <div className="option">
              <input
                type="radio"
                id="Black Olive"
                name="veggies"
                value="Black Olive"
              />
              <label htmlFor="veggies">Black Olive</label>
              <br />
              <input
                type="radio"
                id="Fresh Tomato"
                name="veggies"
                value="Fresh Tomato"
              />
              <label htmlFor="veggies">Fresh Tomato</label>
              <br />
              <input
                type="radio"
                id="Fresh Bell Pepper"
                name="veggies"
                value="Fresh Bell Pepper"
              />
              <label htmlFor="veggies">Fresh Bell Pepper</label>
              <br />
              <input
                type="radio"
                id="Fresh Zucchini"
                name="veggies"
                value="Fresh Zucchini"
              />
              <label htmlFor="veggies">Fresh Zucchini</label>
              <br />
            </div>

            <p>Choose Meat</p>
            <div className="option">
              <input
                type="radio"
                id="Pepperoni"
                name="meat"
                value="Pepperoni"
              />
              <label htmlFor="meat">Pepperoni</label>
              <br />
              <input type="radio" id="Chicken" name="meat" value="Chicken" />
              <label htmlFor="meat">Chicken</label>
              <br />
              <input type="radio" id="Meatball" name="meat" value="Meatball" />
              <label htmlFor="meat">Meatball</label>
              <br />

              <input
                type="radio"
                id="Chile Verde Pork"
                name="meat"
                value="Chile Verde Pork"
              />
              <label htmlFor="meat">Chile Verde Pork</label>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Custom;
