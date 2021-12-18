const Avatar = (props) => {
  return (
    <div>
      {/* add image here */}
      {props.user === '../assets/sophie.jpg' && (
        <div
          onClick={props.onClick}
          className="avatar"
          style={{
            backgroundImage: "url('../assets/sophie.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      )}

      {props.user !== '../assets/sophie.jpg'&& <div onClick={props.onClick} className="avatar"></div>}
    </div>
  );
};

export default Avatar;
