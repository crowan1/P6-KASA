import React from "react";
import '../../assets/tags.scss';


function Tags({ tags }) {

    return (
        <div>
            <ul className="liste-tag">
                {tags.map((tag, index) => (
                    <li key={index} className="tags">
                        {tag}
                    </li>
                )

                )}
            </ul>
        </div>
    )
}

export default Tags

