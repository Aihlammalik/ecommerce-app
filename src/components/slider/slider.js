import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div>
        
//         <Slider {...settings}>
//           <div>
//           <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" />

//           </div>
//           <div>
          

//           </div>
//           <div>
//           <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt=""  />

//           </div>
//           <div>
          

//           </div>
//           <div>
//           <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" />

//           </div>
//           <div>
         

//           </div>
//           <div>
//           <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg"  />

//           </div>
//           <div>
         

//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
 

    return (
     
     <div>
        <Slider {...settings}>
          <div>

          <img src='https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg' alt=""  width="100%"/>
          </div>
          <div>
          <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" width="100%" />
          </div>
          <div>
          <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" width="100%" />
          </div>
          <div>
          <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" width="100%" />
          </div>
          <div>
          <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" width="100%" />
          </div>
          <div>
          <img src="https://static.pakwheels.com/2021/01/Tesla-Model-X-1.jpg" alt="" width="100%" />
          </div>
        </Slider>
      </div>
    );
  }
}