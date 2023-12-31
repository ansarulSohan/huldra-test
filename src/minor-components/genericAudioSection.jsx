import React from "react";
import GenericButton from "./genericButton";
import RankedAudio from "./rankedAudio";
import TextWithIcons from "./textWithIcons";

const GenericAudioSection = ({
  className,
  text,
  textClassName,
  audioUrl,
  imageAlternativeText,
  audioClassName,
  title,
  buttonClassName,
  buttonDisabled,
  buttonHasIcon,
  buttonIconClassName,
  buttonId,
  buttonLabel,
  buttonOnClick,
  hasButton,
  imageRank,
  imageHasRank,
  imageOnClick,
  textWithIconsHasLeftIcon,
  textWithIconLeftIconClassName,
  textWithIconsLabel,
  textWithIconsHasRightIcon,
  textWithIconsRightIconClassName,
  textWithIconsClassName,
  showTextWithIcons = false,
  audioHeight,
  audioWidth,
  audioLabel,
}) => {
  return (
    <div className={className}>
      <h5>{title}</h5>
      {text && <p className={textClassName}>{text}</p>}{" "}
      <RankedAudio
        url={audioUrl}
        width={audioWidth}
        height={audioHeight}
        alternativeText={imageAlternativeText}
        className={audioClassName}
        rank={imageRank}
        hasRank={imageHasRank}
        onClick={imageOnClick}
        label={audioLabel}
      />
      {hasButton && (
        <div className="generic-audio-section-button">
          {" "}
          <GenericButton
            className={buttonClassName}
            disabled={buttonDisabled}
            hasIcon={buttonHasIcon}
            iconClassName={buttonIconClassName}
            id={buttonId}
            label={buttonLabel}
            onClick={buttonOnClick}
          />
          {showTextWithIcons && (
            <TextWithIcons
              hasLeftIcon={textWithIconsHasLeftIcon}
              leftIconClassName={textWithIconLeftIconClassName}
              label={textWithIconsLabel}
              hasRightIcon={textWithIconsHasRightIcon}
              rightIconClassName={textWithIconsRightIconClassName}
              className={textWithIconsClassName}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GenericAudioSection;
