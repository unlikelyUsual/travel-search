import React from "react";
import cities from "../helper/indian_cities.json";
import no_of_travelers from "../helper/travelers.json";
import budget from "../helper/budget.json";

const TripForm = () => {
  const [formField, setFormField] = React.useState({
    name: "",
    email: "",
    phone: "",
    duration: "",
    when: "",
    stage: "",
    destination: "",
    interest: "",
    travelers: "",
    budgetPerPerson: "",
  });

  const formFieldHandler = (e: { target: { name: any; value: any } }) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormField({ ...formField, [name]: value });
  };

  const onSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(formField);
  };

  return (
    <>
      <div className='d-flex travel-form-sm'>
        <select className='form-select mr-2' aria-label='Default select example' defaultValue=''>
          <option value=''>Where do you want to go?</option>
          {cities.map((item) => (
            <option key={item.id} value={item.name} selected={item.name === formField.destination}>
              {item.name}
            </option>
          ))}
        </select>
        <select className='form-select mr-2' aria-label='Default select example'>
          <option selected>Your interest?</option>
          <option value='1'>Adventure</option>
          <option value='2'>Heritage</option>
          <option value='3'>Safari</option>
          <option value='3'>Wine & Food</option>
          <option value='3'>Beaches</option>
        </select>
        <select className='form-select mr-2' aria-label='Default select example'>
          <option selected>No. Of Traveler</option>
          {no_of_travelers.map((item) => (
            <option key={item.id} value={item.value} selected={item.value === formField.travelers}>
              {item.value}
            </option>
          ))}
        </select>
        <select className='form-select mr-2' aria-label='Default select example'>
          <option selected>Budget Per Person</option>
          {budget.map((item) => (
            <option key={item.id} value={item.value} selected={item.value === formField.budgetPerPerson}>
              {item.value}
            </option>
          ))}
        </select>
        <button type='button' className='btn btn-primary w-25' data-bs-toggle='modal' data-bs-target='#exampleModal'>
          Create My Trip
        </button>

        <div className='modal fade' id='exampleModal' aria-labelledby='exampleModalLabel' aria-hidden='true'>
          <div className='modal-dialog  modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-body trip-form-body'>
                <h4>Almost There!</h4>
                <p>We need a bit more info to create your itinerary:</p>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                <form className='row g-3 p-2' onSubmit={onSubmitHandler}>
                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Full Name*'
                      name='name'
                      value={formField.name}
                      onChange={formFieldHandler}
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      placeholder='Email Address*'
                      value={formField.email}
                      onChange={formFieldHandler}
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <input
                      type='text'
                      className='form-control'
                      id='phone'
                      name='phone'
                      placeholder='Phone Number*'
                      value={formField.phone}
                      onChange={formFieldHandler}
                      required
                    />
                  </div>
                  <div className='col-md-6'>
                    <input
                      type='number'
                      className='form-control'
                      id='duration'
                      name='duration'
                      placeholder='Trip Duration(days)'
                      value={formField.duration}
                      onChange={formFieldHandler}
                    />
                  </div>
                  <div className='col-md-6'>
                    <select id='when' className='form-select w-100 p-1' defaultValue=''>
                      <option value=''>When</option>
                      <option>...</option>
                    </select>
                  </div>

                  <div className='col-12'>
                    <select id='stage' className='form-select w-100 p-1' defaultValue=''>
                      <option value=''>What stage of planning are you in?</option>
                      <option>...</option>
                    </select>
                  </div>

                  <div className='col-12'>
                    <button type='submit' className='btn btn-primary btn-block w-100'>
                      Submit
                    </button>
                  </div>

                  <p className='mt-4 mb-3 text-danger'>* Required</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripForm;
