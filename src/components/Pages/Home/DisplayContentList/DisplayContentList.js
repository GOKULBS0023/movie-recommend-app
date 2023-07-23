import React from "react";
import Styles from "./DisplayContentList.module.css";
import ShowContent from "./ShowContent/ShowContent";
import Info from "../../../Shared/Info/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const DisplayContentList = ({ contentList, media }) => {
  return (
    <div className={Styles["content__lists-section"]}>
      {contentList?.length > 0 ? (
        contentList.map((content) => (
          <ShowContent content={content} media={media} />
        ))
      ) : (
        <Info
          value={"Sorry for that!! There are no contents found."}
          icon={<FontAwesomeIcon icon={faFaceFrown} />}
        />
      )}
    </div>
  );
};

export default DisplayContentList;
