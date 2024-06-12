import React from 'react';

export function HotPage({ posts }) {
    return (
        <div>
            <div style={{ height: "40px" }} />
            <div style={{ paddingLeft: "3%", height: "400px" }}>
                <p style={{ fontWeight: "700", fontSize: "22px", lineHeight: "28px", color: "#262626" }}>
                    인기 게시글
                </p>
                <div style={{ display: 'flex', width: "100%", overflowX: "auto", overflowY: "hidden" }}>
                    {
                        posts.map((post) => (
                            <div key={post.id} style={{ width: "384px", height: "420px", padding: "1%" }}>
                                <img src={"./image/Hotpage1.png"}
                                     style={{ width: "384px", height: "256px", padding: "1%" }} />
                                <div style={{height: "100px", textAlign: "center"}}>
                                    <h3>{post.title}</h3>
                                    <p style={{
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: 3,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        maxHeight: '4.5em',
                                        lineHeight: '1.5em'
                                    }}>{post.postContent}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
