import Link from "next/link";
import RedCaret from "../v2/RedCaret";
import HomeVideoCard from "../HomeVideoCard";

const HomeVideoSection = ({ videos }) => {
  return (
    <>
      <div className="new-video-card" style={{ borderRadius: 8 }}>
        <div className="d-flex gap-2 pt-3">
          <RedCaret />
          <h3 className="text-dark fw-bold m-0 jawlatt-news-small-title">
            فيديو
            <Link href={"/video"}>المزيد</Link>
          </h3>
        </div>
        <div className="p-4">
          <div className="row g-3">
            {Array.isArray(videos) &&
              videos?.slice(0, 3).map((item) => (
                <div key={item?.id} className="col-sm-6 col-lg-4">
                  <HomeVideoCard item={item} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeVideoSection;
