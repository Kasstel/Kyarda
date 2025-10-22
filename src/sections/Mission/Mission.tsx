import ShinyText from "../../UI-features/ShinyText/ShinyText";

export default function Mission() {
  return (
    <section className="mission">
      <div className="mission__block">
        <h2 className="mission__block-title section-title main-title">
          НАША МИССИЯ
        </h2>
        <div data-speed="1" className="mission-speech">
          <p className="text">
            <a className="special-text">
              <ShinyText
                text="Быть надёжным партнёром"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </a>
          </p>
          <p className="another_mission__text text">
            И
            <a className="another__special-text special-text">
              <ShinyText
                text="Быть надёжным партнёром"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
