import React from "react";
import { streamViewProps } from "./Models/ streamViewProps";
export const StreamView: React.FC<streamViewProps> = ({ hasPaid, hasLoggedIn }) => {
    return (
        <div className="container mw-100 streamViewParent">
            {
                (
                    hasLoggedIn ? (
                        hasPaid ? (
                            <iframe>
                            </iframe>
                        ) : (
                            <div>
                                <h1>Pay to watch the stream</h1>
                            </div>
                        )) : (
                        <div>
                            <h1>Log in to watch the stream</h1>
                        </div>
                    )
                )
            }
        </div>
    );
}