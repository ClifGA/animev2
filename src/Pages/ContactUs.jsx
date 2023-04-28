import "../Pages/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-card">
      <h1 className="title">
        {" "}
        DO NOT CONTACT US WE ARE VERY BUSY
      </h1>
      <img
        style={{
          width: "50%",
          border: "2px solid black",
          margin: "10px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        src="https://static.fandomspot.com/images/07/7615/00-featured-umaru-chan-himouto-umaru-chan.jpg"
      ></img>
      <p
        style={{
          color: "black",
          fontSize: "20px",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        {" "}
        We are doing very important stuff, do not disturb us in the house of big
        business!!!{" "}
      </p>
      <p
        style={{
          color: "black",
          fontSize: "20px",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        Contact us at WeDoALotOfWorkHere@IPear.com
      </p>
    </div>
  );
};

export default ContactUs;
