import AliceCarousel from "react-alice-carousel";
import DashedHeading from "../../atoms/DashedHeading/DashedHeading";
import styles from "./Awards.module.scss";
import "react-alice-carousel/lib/alice-carousel.css";

let items = [];
const breakpoint = {
  1024: {
    items: 3,
  },
};

const handleDragStart = (e) => e.preventDefault();

for (let i = 1; i < 10; i++)
  items.push(
    <img
      className={i == 8 || i == 9 ? styles.image_specific : styles.image}
      src={`/awards/${i}.png`}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Award"
    />
  );

export const Awards = () => {
  return (
    <div id={styles.awards}>
      <div className={`header ${styles.heading}`}>
        <DashedHeading text="PLACES I STOOD OUT" />
        <span className="header-text">Awards & Recognitions</span>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoHeight
        animationDuration={5000}
        autoWidth
        keyboardNavigation
        paddingLeft="7rem"
        paddingRight="7rem"
        responsive={breakpoint}
        disableSlideInfo={false}
      />
    </div>
  );
};

export default Awards;
