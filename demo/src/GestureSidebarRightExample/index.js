// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable no-return-assign */

// import React, { Component } from 'react'
// import { Flipper, Flipped } from '../../../src/gesture'
// import backgroundImg from './assets/nighttime.jpg'
// import './styles.css'

// class PaymentSidebar extends Component {
//   state = { collapsed: true }
//   toggleCollapsed = () => {
//     this.setState({ collapsed: !this.state.collapsed })
//   }
//   render() {
//     const { collapsed } = this.state
//     const sidebarClassName = `sidebar ${collapsed ? 'sidebarCollapsed' : ''}`

//     return (
//       <Flipper flipKey={collapsed} element="nav" className="foo">
//         <Flipped
//           flipId="container"
//           flipOnSwipe={{
//             initFLIP: this.toggleCollapsed,
//             cancelFLIP: this.toggleCollapsed,
//             direction: collapsed ? 'down' : 'up',
//             onChange: args => {
//               console.log(args)
//             }
//           }}
//         >
//           <div className={sidebarClassName}>
//             <Flipped inverseFlipId="container">
//               <div className="sidebarContentContainer">
//                 <Flipped flipId="sidebarImg">
//                   <div
//                     className="decorativeImg"
//                     style={{ backgroundImage: `url(${backgroundImg})` }}
//                   />
//                 </Flipped>

//                 <div className="sidebarBody">
//                   <Flipped flipId="sidebarHeader">
//                     <h1 className="sidebarHeader">
//                       Lorem ipsum dolor sit amet consectetur
//                     </h1>
//                   </Flipped>
//                   <div className="sidebarContent">
//                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                     Molestiae deleniti reprehenderit est necessitatibus qui iste
//                     maiores enim amet atque nostrum? Facere ad eveniet
//                     cupiditate molestiae, repellendus nisi consectetur quasi
//                     adipisci.
//                   </div>
//                 </div>
//               </div>
//             </Flipped>
//           </div>
//         </Flipped>
//       </Flipper>
//     )
//   }
// }

// export default PaymentSidebar