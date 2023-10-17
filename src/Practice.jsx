

const AnimatedHeading = () => (
  <h1 className="wpr-advanced-text">
    <span className="wpr-advanced-text-preffix">Good Food Make</span>
    <span className="wpr-anim-text wpr-anim-text-type-push" data-anim-duration="1000,2000" data-anim-loop="yes">
      <span className="wpr-anim-text-inner">
        <b className="wpr-anim-text-visible">Fresh Mood</b>
        <b className="wpr-anim-text-hidden">Good Mood</b>
        <b className="wpr-anim-text-hidden">Good Mind</b>
      </span>
    </span>
  </h1>
);

export default AnimatedHeading;
