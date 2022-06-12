import React from "react";
import "./PageHeader.css";

const PageHeader = (props) => {
    return(
        <>
            <div className="page-header">
                <p>❖</p>
                    <p>{props.page}</p>
                <p>❖</p>
            </div>
        </>
    );
}
export default PageHeader;