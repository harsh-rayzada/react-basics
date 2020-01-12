import React from 'react';

const Loading = (props) => <div><img src="https://faviconer.net/preloaders/35/Fading%20lines.gif" alt="loader" /><p>{props['message']}</p></div>;
// const Loading = ({message}) => <div>{message}</div>

export default Loading;