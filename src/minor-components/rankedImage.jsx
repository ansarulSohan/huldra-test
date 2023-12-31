import React, { useEffect, useState } from "react";
import { getAsset } from "../utils/loadAssets";

const RankedImage = ({
  path = "/gallery/empty.png",
  alternativeText = "Image",
  className,
  onClick,
  rank,
  hasRank = false,
  hasTextRank = false,
  rankText,
  rankTextSectionClassName,
  wrapperClassName,
}) => {
  const [imagePath, setImagePath] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    setSubscribed(true);
    (async () => {
      const imagePath = await getAsset(path);
      setImagePath(imagePath);
    })();
    return () => setSubscribed(false);
  }, [path, subscribed]);

  return (
    <div className={wrapperClassName ? wrapperClassName : "ranked-image"}>
      {hasRank && (
        <div className="rank-placement">
          <h5>
            <strong>{rank}</strong>
          </h5>
        </div>
      )}
      {hasTextRank ? (
        <div onClick={onClick} className={rankTextSectionClassName}>
          <span className="ranked-image-rank-text">{rankText}</span>
        </div>
      ) : (
        <img onClick={onClick} src={imagePath} alt={alternativeText} className={className} />
      )}
    </div>
  );
};

export default RankedImage;
