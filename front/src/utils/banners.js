const handleDragStart = (e) => e.preventDefault();
const banners = [
    <img
      className="sliderimg"
      alt=""
      src="https://images.squarespace-cdn.com/content/v1/550169a7e4b070aead4b1079/1433071346321-FGD0IC56NALOS7APRSJ7/ke17ZwdGBToddI8pDm48kPFqfE2v07lF_amGUIcLcokUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dqS7pmytFubNbAokx3Pse_YPYHCtOQ-VcYuyXVPEkqruZDqXZYzu2fuaodM4POSZ4w/ABSOLUT_AMBER_96SHEET.jpg"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://images.squarespace-cdn.com/content/v1/5c6150e04d546e3b8a4ded17/1562345308613-6XQU68RFHMY0NY9FLP03/ke17ZwdGBToddI8pDm48kEzLYSedLSGzFOX4t5uJTm4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYwL8IeDg6_3B-BRuF4nNrNcQkVuAT7tdErd0wQFEGFSnJ4jcPr0lK_C_XzJK4wbN16n97dhEotCkBxvF9JO0TM7IhXOqCcOtC_1HV7mqH8KMw/Alcohol-free+beer+bottle+lineup.png"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://images.squarespace-cdn.com/content/v1/53e15485e4b068f76d2b172e/1437414873696-X4L82HH0OAGK2ELYO544/ke17ZwdGBToddI8pDm48kD6B0hj0pC0U_ns_mUlqmh8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcjnGyVxz4_7fGUBBocNlg5FJFs2U28j8wg_7g5x2b7zk68Qg-OIBKW5Hop4sS8Azz/image-asset.jpeg"
      onDragStart={handleDragStart}
    />,
    <img
      className="sliderimg"
      alt=""
      src="https://worldbranddesign.com/wp-content/uploads/2019/04/United-Dutch-Breweries-%7C-In-House-Design-Studio---Oranjeboom-Beers-of-the-World1.jpg"
      onDragStart={handleDragStart}
    />,
  ]

export default banners;