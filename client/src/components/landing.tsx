import TripForm from "./tripForm";

const Landing = () => {
  return (
    <>
      <div className='landing-container'>
        <h4 className='mt-5'>We Care, So You Can Travel Carefree</h4>
        <h6>Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.</h6>
        <TripForm />
      </div>
      <div className='d-flex justify-content-center p-5 landing-exp'>
        <p className='text-center'>
          Experience a completely customized and flexible trip of a lifetime with experts you can trust. We are an&nbsp;
          <strong>award-winning team</strong>&nbsp;that offers&nbsp;
          <strong>round-the-clock&nbsp;local support</strong>
          &nbsp;during your trip and&nbsp;<strong>100% financial protection</strong>&nbsp;so you know you are in safe
          hands. That’s why over <strong>40,000+ enchanted guests</strong> vouch for us – because with us, you can{" "}
          <strong>dream, book and travel carefree</strong>.
        </p>
      </div>
    </>
  );
};

export default Landing;
