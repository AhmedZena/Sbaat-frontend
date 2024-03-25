import Header from "./Header/Header";
import Hero from "./Hero/Hero";
// import About from "./About US/About Us";
import Carousel from "./Serve/Serve";
import CustomCard from "./Cards/Card";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FourthCards from "../../components/FourthCards";
// const prdArr = [
//   {
//     imgSrc: ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"],
//     title: "product 1",
//   },
//   {
//     imgSrc: ["./2.jpg", "./4.jpg", "./3.jpg", "./1.jpg"],
//     title: "product 2",
//   },
//   {
//     imgSrc: ["./4.jpg", "./2.jpg", "./3.jpg", "./1.jpg"],
//     title: "product 3",
//   },
//   {
//     imgSrc: ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"],
//     title: "product 4",
//   },
// ];

function Home() {
  const [arr, setArr] = useState([]);

  //   const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://sb3aat.onrender.com/api/services/category/65f04379d93290b026515596`
      )
      .then((ser) => {
        console.log(ser.data);
        setArr(ser.data.slice(0, 4));
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <CustomCard />

      {/* <div className="flex justify-between m-10">
        <h3 className="text-3xl font-bold text-center text-gray-600">
          Web Development Services
        </h3>
        <button className="border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-500 font-bold py-2 px-4 rounded-full">
          View All
        </button>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4 mx-20 mb-20">
        {arr.map((item, index) => (
          <Link to={`/services/${item._id}`}>
            <Col key={index}>
              <Card className="max-w-xs  border-none  max-h-300">
                <Card.Img
                  variant="top"
                  src={item.serviceImgSrc}
                  className="object-cover w-full h-32"
                />
                <Card.Body className="h-52 flex flex-col justify-between">
                  <a href="#" className="font-bold text-blue-900">
                    {item.title}
                  </a>
                  <Card.Text className="text-sm text-black">
                    Category/sub Category
                  </Card.Text>

                  <div className="flex items-center">
                    {[...Array(5)].map((star, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-500 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                    ))}
                    <span className="text-xl text-yellow-500"> (7)</span>
                  </div>
                  <span className="ml-1 text-2xl text-yellow-500">
                    Start From {item.price}$
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        ))}
      </Row> */}

      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
      <FourthCards title="Web Development Services" arr={arr} />
    </>
  );
}

export default Home;
