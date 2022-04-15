import * as React from "react";
import img1 from "../../assets/images/image1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";
import img4 from "../../assets/images/img4.jpeg";
import img5 from "../../assets/images/img5.jpeg";
import "../../assets/css/imageList.css"
const PortfolioImageList = () => {
  return (
    <>
    <div className="mob-prevent">
      <div
        className="image-list"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <img src={img1} style={{ width: "396px", height: "572px", margin:"10px", borderRadius:"5px" }} />
        </div>
        <div>
          <img src={img2} style={{ width: "407px", height: "572px", margin:"10px", borderRadius:"5px"  }} />
        </div>
        <div>
          <img src={img3} style={{ width: "409px", height: "479px", margin:"10px", borderRadius:"5px"  }} />
        </div>
      </div>
      <div
        className="image-list"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <img src={img4} style={{ width: "396px", height: "572px", margin:"10px", borderRadius:"5px"  }} />
        </div>
        <div>
          <img src={img5} style={{ width: "407px", height: "572px", margin:"10px", borderRadius:"5px"  }} />
        </div>
        <div>
          <img src={img3} style={{ width: "409px", height: "479px", marginTop:"-81px", marginLeft:'10px', borderRadius:"5px"  }} />
        </div>
      </div>
    </div>
    {/* mobile view */}
    <div className="desk-prevent">
    <div
        className="image-list"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <img src={img1} style={{ width: "174px", height: "376px", marginRight:"6px", borderRadius:"5px" }} />
        </div>
        <div>
          <img src={img3} style={{ width: "174px", height: "338px", margin:"", borderRadius:"5px"  }} />
        </div>
      </div>
      <div
        className="image-list"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <img src={img5} style={{ width: "174px", height: "325px", marginTop:"7px", marginRight:"6px", borderRadius:"5px"  }} />
        </div>
        <div>
          <img src={img4} style={{ width: "174px", height: "284px", marginTop:"-33px",  borderRadius:"5px"  }} />
        </div>
      </div>
    </div>
    </>
  );
};
export default PortfolioImageList;
