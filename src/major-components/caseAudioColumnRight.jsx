import React from "react";
import GenericImageSection from "../minor-components/genericImageSection";
const CaseAudioColumnRight = ({
  className,
  title,
  text,
  textClassName,
  topSectionClassName,
  topSectionText,
  topSectionTextClassName,
  topSectionImageUrl,
  topSectionImageAlternativeText,
  topSectionImageClassName,
  topSectionTitle,
  topSectionButtonClassName,
  topSectionButtonDisabled,
  topSectionButtonHasIcon,
  topSectionButtonIconClassName,
  topSectionButtonId,
  topSectionButtonlabel,
  topSectionButtonOnClick,
  topSectionHasButton,
  topSectionImageHasRank,
  topSectionImageRank,
  topSectionImageHasTextRank,
  topSectionImageRankText,
  topSectionTextRankClassName,
  bottomSectionClassName,
  bottomSectionText,
  bottomSectionTextClassName,
  bottomSectionImageUrl,
  bottomSectionImageAlternativeText,
  bottomSectionImageClassName,
  bottomSectionTitle,
  bottomSectionButtonClassName,
  bottomSectionButtonDisabled,
  bottomSectionButtonHasIcon,
  bottomSectionButtonIconClassName,
  bottomSectionButtonId,
  bottomSectionButtonlabel,
  bottomSectionButtonOnClick,
  bottomSectionHasButton,
  bottomSectionImageHasRank,
  bottomSectionImageRank,
  bottomSectionImageHasTextRank,
  bottomSectionImageRankText,
  bottomSectionTextRankClassName,
}) => {
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p className={textClassName}>{text}</p>
      <div className="audio-ranking-wrapper">
        <GenericImageSection
          title={topSectionTitle}
          imageClassName={topSectionImageClassName}
          hasButton={topSectionHasButton}
          className={topSectionClassName}
          text={topSectionText}
          textClassName={topSectionTextClassName}
          imageUrl={topSectionImageUrl}
          imageAlternativeText={topSectionImageAlternativeText}
          buttonClassName={topSectionButtonClassName}
          buttonDisabled={topSectionButtonDisabled}
          buttonHasIcon={topSectionButtonHasIcon}
          buttonIconClassName={topSectionButtonIconClassName}
          buttonId={topSectionButtonId}
          buttonlabel={topSectionButtonlabel}
          buttonOnClick={topSectionButtonOnClick}
          imageHasRank={topSectionImageHasRank}
          imageRank={topSectionImageRank}
          imageHasTextRank={topSectionImageHasTextRank}
          imageRankText={topSectionImageRankText}
          textRankClassName={topSectionTextRankClassName}
        />
        <GenericImageSection
          title={bottomSectionTitle}
          imageClassName={bottomSectionImageClassName}
          hasButton={bottomSectionHasButton}
          className={bottomSectionClassName}
          text={bottomSectionText}
          textClassName={bottomSectionTextClassName}
          imageUrl={bottomSectionImageUrl}
          imageAlternativeText={bottomSectionImageAlternativeText}
          buttonClassName={bottomSectionButtonClassName}
          buttonDisabled={bottomSectionButtonDisabled}
          buttonHasIcon={bottomSectionButtonHasIcon}
          buttonIconClassName={bottomSectionButtonIconClassName}
          buttonId={bottomSectionButtonId}
          buttonlabel={bottomSectionButtonlabel}
          buttonOnClick={bottomSectionButtonOnClick}
          imageHasRank={bottomSectionImageHasRank}
          imageRank={bottomSectionImageRank}
          imageHasTextRank={bottomSectionImageHasTextRank}
          imageRankText={bottomSectionImageRankText}
          textRankClassName={bottomSectionTextRankClassName}
        />
      </div>
    </div>
  );
};

export default CaseAudioColumnRight;
