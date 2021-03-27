// // import React from 'react';
// /* eslint-disable jsx-a11y/alt-text */
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import { Input, FormBtn, FormBtnOutline } from '../components/Form/Form'\import {useLogin, useLogout} from '../utils/auth';
import {useLogout} from '../utils/auth';
import './Profile';
import './Signup';

function handleInputChange() {
  // const { name, value } = event.target;
  // setFormObject({...formObject, [name]: value})
}

function handleFormClear(e) {
  e.preventDefault();
  // history.push('/');
};

function handleFormSubmit() {
// submit form function
// include display aler
// clearform after submitting
}

const Profile = () => {
  return (
    <Container py="-5">
      <div className="container">
        <h1>This Page will be re-done, per group decision [Frederick will take care of it.]
        </h1>
        <h1 className="text-center"> Profile </h1>
        <Row py="-5">
          <Col size="md-4 sm-12">
            <img
              className="img-fluid pr-4 mt-3"
              src="./assets/img/profile.jpg"
            />
          </Col>

          <Col size="md-8 sm-12">
            <form>
              <h5>Name</h5>
              <Input
                onChange={handleInputChange}
                name="Name"
              />

              <h5>Email</h5>
              <Input
                onChange={handleInputChange}
                name="type"
              />

              <h5>Location</h5>
              <Input
                onChange={handleInputChange}
                name="location"
                />

              <h5>Phone</h5>
              <Input onChange={handleInputChange} name="phone" />

              <h5>Place holder for artwork for sale list</h5>
              <Input onChange={handleInputChange} name="phone" placeholder="List of artwork for sale" /> 
              <Input onChange={handleInputChange} name="phone" placeholder="List of artwork for sale" />
              <Input onChange={handleInputChange} name="phone" placeholder="List of artwork for sale" /> 

              <FormBtnOutline onClick={handleFormClear}>Sell Artwork</FormBtnOutline>

              <FormBtn onClick={handleFormSubmit}>Update Profile</FormBtn>
            </form>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Profile

// ANDREW, BELOW IS THE ORIGINAL CODE, WHICH WAS COMMENTED OUT; AND ABOVE THIS LINE, IS YOUR CODE + MY BOTH OF OUR IMPORTS. //
// PLEASE FEEL FREE TO MAKE THE CODE HOW YOU SEE FIT. //
// function handleInputChange() {
//   // const { name, value } = event.target;
//   // setFormObject({...formObject, [name]: value})
// }

// function handleFormClear(e) {
//   e.preventDefault();
//   // history.push('/'); // // USE MODAL INSTEAD, using the functionality to Pass the User's data from Sign.tsx to Profile.tsx;and then history.push('/account')
// };

// function handleFormSubmit() {
// // submit form function
// // include display aler
// // clearform after submitting
// }

// const Profile = () => {
//   return (
//     <Container py="-5">
//       <div className="container">
//         <h1>This Page will be re-done, per group decision [Frederick will take care of it.]
//         </h1>
//         <h1 className="text-center"> Profile </h1>
//         <Row py="-5">
//           <Col size="md-4 sm-12">
//             <img
//               className="img-fluid pr-4 mt-3"
//               src="./assets/img/profile.jpg"
//             />
//           </Col>

//           {/* Passing the User's data from Sign.tsx to Profile.tsx */}
//           <Link to={{pathname: "/Signup", state: data}}>
//             this.props.history.push(
//               {
//                 pathname: '/Signup',
//                 state: data // Data is the array of {handleFormSubmit} //
//               }
//             )

//             render() {
              
//               const { state } = this.props.Name;
//               const { state } = this.props.email;
//               const { state } = this.props.phone;
//               const { state } = this.props.location;
              
//               return (
//                 <Col size="md-8 sm-12">
//                   <div className='py-2 mx-1 px-4' style={{width:'auto'}}>
//                     <div className='row align-items-center justify-content-center'>
//                         <h5>First Name:</h5>
//                         &nbsp;&nbsp;&nbsp;
//                         <p>TBD</p>
//                     </div>


//                     <div className='row align-items-center justify-content-center'>
//                         <h5>Last Name:</h5>
//                         &nbsp;&nbsp;&nbsp;
//                         <p>TBD</p>
//                     </div>


//                     <div className='row align-items-center justify-content-center'>
//                         <h5>Email:</h5>
//                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                         <p>TBD</p>
//                     </div>


//                     <div className='row align-items-center justify-content-center'>
//                       <h5>Phone:</h5>
//                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                       <p>TBD</p>
//                   </div>


//                     <div className='row align-items-center justify-content-center'>   
//                       <h5>Location:</h5>
//                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                       <p>TBD</p>
//                   </div>
//                   </div>
//                 </Col>
//               )
//             }
//           </Link>
            
//             <form>
//               <h5>This the h5 tag that says Place holder for artwork for sale list</h5>
//               <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" /> 
//               <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />
//               <Input onChange={handleInputChange} name="phone" placeHolder="List of artwork for sale" />

//               <FormBtnOutline onClick={handleFormClear}>
//                 Sell Artwork
//               </FormBtnOutline>

//               <FormBtn onClick={handleFormSubmit}>
//                 Update Profile
//               </FormBtn>
//             </form>
//           </Col>
//         </Row>
//       </div>
//     </Container>
//   )
// }

// export default Profile
