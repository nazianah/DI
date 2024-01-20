import React from "react";
//part 1
// class ColorChanger extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         favoriteColor: "red",
//       };
//     }
  
//     shouldComponentUpdate() {
//       return true; // Set to true to allow updates
//     }
  
//     changeColor = () => {
//       this.setState({ favoriteColor: "blue" });
//     };
  
//     render() {
//       return (
//         <div>
//           <button onClick={this.changeColor}>Change Color</button>
//           <div style={{ border: "1px solid grey", padding: "10px" }}>
//             {this.state.favoriteColor}
//           </div>
//         </div>
//       );
//     }
//   }
  

//part 2

// class ColorChanger extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         favoriteColor: "red",
//       };
//     }
  
//     componentDidMount() {
//       // Simulate a timer changing the color after mounting
//       setTimeout(() => {
//         this.setState({ favoriteColor: "yellow" });
//       }, 3000);
//     }
  
//     componentDidUpdate() {
//       console.log("after update");
//     }
  
//     render() {
//       return (
//         <div>
//           <div style={{ border: "1px solid grey", padding: "10px" }}>
//             {this.state.favoriteColor}
//           </div>
//         </div>
//       );
//     }
//   }
  
//part 3

class ColorChanger extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favoriteColor: "red",
      };
    }
  
    componentDidMount() {
      // Simulate a timer changing the color after mounting
      setTimeout(() => {
        this.setState({ favoriteColor: "yellow" });
      }, 1000);
    }
  
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log("in getSnapshotBeforeUpdate");
      return null; // You can return a value to be passed to componentDidUpdate
    }
  
    componentDidUpdate() {
      console.log("after update");
    }
  
    render() {
      return (
        <div>
          <div style={{ border: "1px solid grey", padding: "10px" }}>
            {this.state.favoriteColor}
          </div>
        </div>
      );
    }
  }
  
  export default ColorChanger;