import React, { ChangeEvent } from "react";
import cities from "../helper/indian_cities.json";
import no_of_travelers from "../helper/travelers.json";
import budget from "../helper/budget.json";
import interests from "../helper/interest.json";
import axios from "../util/axios";
import HTTP_STATUS from "../constants/http";
import Alert from "../util/alerts";

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

  const formFieldHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormField({ ...formField, [name]: value });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    document.getElementById("close-modal")?.click();
    try {
      const res = await axios.post(`/trip`, formField);
      if (res.status === HTTP_STATUS.OK) {
        setFormField({
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
        Alert.success(`Save`);
      } else {
        Alert.fail(`Something went wrong`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='d-flex travel-form-sm'>
        <select
          className='form-select mr-2'
          aria-label='Default select example'
          defaultValue=''
          name='destination'
          onChange={formFieldHandler}
        >
          <option value=''>Where do you want to go?</option>
          {cities.map((item) => (
            <option key={item.id} value={item.name} selected={item.name === formField.destination}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          className='form-select mr-2'
          aria-label='Default select example'
          defaultValue=''
          name='interest'
          onChange={formFieldHandler}
        >
          <option value=''>Your interest?</option>
          {interests.map((item) => (
            <option key={item.id} value={item.value} selected={item.value === formField.interest}>
              {item.value}
            </option>
          ))}
        </select>
        <select
          className='form-select mr-2'
          aria-label='Default select example'
          defaultValue=''
          name='travelers'
          onChange={formFieldHandler}
        >
          <option value=''>No. Of Traveler</option>
          {no_of_travelers.map((item) => (
            <option key={item.id} value={item.value} selected={item.value === formField.travelers}>
              {item.text}
            </option>
          ))}
        </select>
        <select
          className='form-select mr-2'
          aria-label='Default select example'
          defaultValue=''
          name='budgetPerPerson'
          onChange={formFieldHandler}
        >
          <option value=''>Budget Per Person</option>
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
                <button
                  type='button'
                  className='btn-close'
                  id='close-modal'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
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
                    <select
                      id='when'
                      className='form-select w-100 p-1'
                      defaultValue=''
                      name='when'
                      onChange={formFieldHandler}
                    >
                      <option value=''>When</option>
                      <option>...</option>
                    </select>
                  </div>

                  <div className='col-12'>
                    <select
                      id='stage'
                      className='form-select w-100 p-1'
                      defaultValue=''
                      name='stage'
                      onChange={formFieldHandler}
                    >
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
