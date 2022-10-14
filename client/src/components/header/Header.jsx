import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Share Here</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
        alt=""
      />
    </div>
  );
}
