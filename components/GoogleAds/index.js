import { Ad } from "react-ad-manager";

function GoogleAds({ id, slot, width, height }) {
  return (
    <>
      <div className="mb-1" key={slot}>
        <Ad adUnit={slot} name={id} size={[width, height]} />
      </div>
    </>
  );
}

export default GoogleAds;
