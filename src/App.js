import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    /* Bilgi
    yapı oluşturulurken bind işlemi yapılmazsa  fonksiyonlar 
    içinde this Windowsu döndürür. Eğer fonksiyonları arrow 
    fonksiyon yaparsak kendini bind ettiğinden this, componenti 
    döndürür.
    // this.incrementCount = this.incrementCount.bind(this);
    //this.decrementCount = this.decrementCount.bind(this);
  */
  }
  //fonksiyonlar arrow fonksiyona döndürülerek bind edilmesi sağlandı.
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <button onClick={this.decrementCount}> - </button>
        {count}
        <button onClick={this.incrementCount}> + </button>
      </div>
    );
  }
}
