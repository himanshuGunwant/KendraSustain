import { Container } from './Testimonial.style';

const Testimonial = () => {
  return (
    <Container>
      <div className={'heading-container'}>
        <p className={'p1'}>Testimonial</p>
        <img src="/images/logos_ibm.png" alt="IBM" />
        <p className={'p2'}>
          Most calenders are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>
      <div className={'container'}>
        <div className={'card-container'}>
          <div className={'card'}>
            <div className={'card-img'}>
              <img src="/images/avatar.png" alt="Avatar" />
            </div>
            <div className={'card-text'}>
              <p>Organize across</p>
              <p>UI designer</p>
            </div>
          </div>
        </div>
        <div className={'button-wrapper'}>
          <button>More Testimonial</button>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
