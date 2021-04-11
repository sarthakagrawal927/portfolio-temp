const contact = () => {
  return (
    <section className='section-contact'>
      <div className='row'>
        {" "}
        <div className='contact'>
          <div className='contact__form'>
            <form action='#' className='form'>
              <div className=' u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Making people happy</h2>
              </div>
              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  placeholder='Full Name'
                  id='name'
                  required
                />
                <label htmlFor='name' className='form__label'>
                  Full Name
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='email'
                  className='form__input'
                  placeholder='Email Address'
                  id='email'
                  required
                />
                <label htmlFor='email' className='form__label'>
                  Email Address
                </label>
              </div>
              <div className='form__group u-margin-bottom-small '>
                <div className='form__radio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='small'
                    name='size'
                  />
                  <label htmlFor='small' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Small Tour Group
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='large'
                    name='size'
                  />
                  <label htmlFor='large' className='form__radio-label'>
                    {" "}
                    <span className='form__radio-button'></span>
                    Large Tour Group
                  </label>
                </div>
              </div>
              <div className='form__group'>
                <button className='btn btn--green u-margin-top-small'>
                  lets go
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
