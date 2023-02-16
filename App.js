import React, { Component } from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  TextField,
  Checkbox,
  checked,
  handleChange
} from "@mui/material";
import logotip from "./images/logotip.png";
import font from "./images/font.png";
import { ReactVideoPlayer } from "video-player-for-react";
import "video-player-for-react/dist/index.css";
import one from "./images/poster/one.png";
import fon from "./images/123.png";
import kino from "./images/logotip.png";
import video1 from "./images/Jaloliddin Ahmadaliyev - Yaxshi qoling yaxshi qiz (Uxlamaysizmi ko'rsatuvida).mp4";
import video2 from "./images/Muhammadziyo - Ikkinchi muxabbat (consert 2022).mp4";
import video3 from "./images/poster/Imron - Dadajonim, Onajonim - Имрон - Дадажоним, Онажоним (VIDEO).mp4";
import video4 from "./images/ДОБРЫЙ Я - ПРЕМЬЕРА КЛИПА - TURAL EVEREST ft. RUSLAN DOBRY.mp4";
import video5 from "./images/Yulduz Usmonova - Muhabbat (official video).mp4";
import video6 from "./images/Og'abek Sobirov - Onamga teng bo'la olmas - Огабек Собиров - Онамга тенг бўла олмас.mp4";
import kadr1 from "./images/kadr1.png";
class App extends Component {
  render() {
    return (
      <Box className={"container"} sx={{ width: "100%", backgroundColor: "#1E2538", color: "white" }}>
        <Box className={"contend"} ml={"5%"} width={"90%"}>
          {/* Navbar start */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <img width={"100%"} src={logotip} alt="" />
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                fontSize={"20px"}
              >
                <Link href={"https://vk.com/"}>
                  <i class="bx bxl-vk"></i>
                </Link>
                <Link color={"#fff"} href={"https://instagram.com/"}>
                  <i class="bx bxl-instagram"></i>
                </Link>
                <Link href={"https://facebook.com/"}>
                  <i class="bx bxl-facebook"></i>
                </Link>
                <Link href={"https://twitter.com/"}>
                  <i class="bx bxl-twitter"></i>
                </Link>
              </Box>
            </Box>
            <Box>
              <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                <li>Афиша</li>
                <li> Медиа</li>
                <li>Фильмы</li>
                <li>Актёры</li>
                <li>Новости</li>
                <li>Подборки</li>
                <li>Категории</li>
              </ul>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              {/* <Button href="#text-buttons"><i class="bx bx-search"></i></Button> */}
              <Button
                sx={{ padding: "10px 0" }}
                variant="contained"
                href="#contained-buttons"
              >
                <i class="bx bx-search"></i>
              </Button>
              <Typography
                display={{ display: "flex", alignItems: "center", gap: "5%" }}
              >
                <i class="bx bxs-down-arrow"></i>
                <p style={{ fontSize: "14px" }}>Евгений</p>
              </Typography>
              <img
                width={"50%"}
                style={{ borderRadius: "50%", fontSize: "60px" }}
                src={font}
                alt=""
              />
            </Box>
          </Box>
          {/* Navbar end */}

          {/* Navtion */}
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <h1>Медиа</h1>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  marginLeft: "-25%",
                }}
              >
                <li style={{ color: "#4F5B7C" }}>Главная</li>
                <li style={{ color: "#4F5B7C" }}>
                  <i class="bx bxs-chevron-right"></i>
                </li>
                <li>Афиша</li>
              </ul>
            </Box>
            <Box sx={{ width: "8%", border: "2px solid #fff" }}></Box>
            <Box>
              <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
                <li>Трейлеры</li>
                <li style={{ color: "#4F5B7C" }}>Постеры</li>
                <li style={{ color: "#4F5B7C" }}>Кадры</li>
              </ul>
            </Box>
          </Box>
          {/* Navtion */}

          {/* Trayler start */}
          <Box className={"Teylercont"} width={"100%"}>
            <h1>Трейлеры</h1>
            <Box className={"Teyler"} display={"flex"}  gap={"35px"} flexWrap={"wrap"}>
              <Box className={"posterwid"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ReactVideoPlayer
                  width="580px"
                  height="400px"
                  url={video1}
                  poster="https://i.ytimg.com/vi/breZKOf8lRA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCxQrplWdb_yBSAUNvydk7BOg7lHQ"
                />
                <Box display={"flex"} alignContent={"center"} gap={"20px"}>
                  <p>Отель у озера</p>
                  <p>24 Апр 2020</p>
                  <p style={{ gap: "15px" }}>
                    <i class="bx bx-low-vision"></i> 97
                  </p>
                  <p style={{ gap: "15px" }}>
                    <i class="bx bx-time"></i> 01:24
                  </p>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ReactVideoPlayer
                  width="580px"
                  height="400px"
                  url={video2}
                  poster="https://i.ytimg.com/vi/js635bye0K0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDS40i9KBt1DYi4raOYbXD5I7X0zg"
                />
                <Box display={"flex"} alignContent={"center"} gap={"20px"}>
                  <p>Отель у озера</p>
                  <p>24 Апр 2020</p>
                  <p style={{ gap: "15px" }}>
                    <i class="bx bx-low-vision"></i> 97
                  </p>
                  <p style={{ gap: "15px" }}>
                    <i class="bx bx-time"></i> 01:24
                  </p>
                </Box>
              </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ReactVideoPlayer
                    width="580px"
                    height="400px"
                    url={video3}
                    poster="https://i.ytimg.com/an_webp/_j5irSA4XLE/mqdefault_6s.webp?du=3000&sqp=CPDKr58G&rs=AOn4CLBBiPacXF7M5et1xEkMWW9C-hVGXA"
                  />
                  <Box display={"flex"} alignContent={"center"} gap={"20px"}>
                    <p>Отель у озера</p>
                    <p>24 Апр 2020</p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-low-vision"></i> 97
                    </p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-time"></i> 01:24
                    </p>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ReactVideoPlayer
                    width="580px"
                    height="400px"
                    url={video4}
                    poster="https://i.ytimg.com/vi/GGIYURlRBGA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB531MW2xOcdGTuaaxteddlcEzsZg"
                  />
                  <Box display={"flex"} alignContent={"center"} gap={"20px"}>
                    <p>Отель у озера</p>
                    <p>24 Апр 2020</p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-low-vision"></i> 97
                    </p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-time"></i> 01:24
                    </p>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ReactVideoPlayer
                    width="580px"
                    height="400px"
                    url={video5}
                    poster="https://i.ytimg.com/an_webp/90vOUeGAj3Y/mqdefault_6s.webp?du=3000&sqp=CPDKr58G&rs=AOn4CLCtSIkVrvN2rVcsJ_PB0e1lkerCXw"
                  />
                  <Box display={"flex"} alignContent={"center"} gap={"20px"}>
                    <p>Отель у озера</p>
                    <p>24 Апр 2020</p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-low-vision"></i> 97
                    </p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-time"></i> 01:24
                    </p>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ReactVideoPlayer
                    width="580px"
                    height="400px"
                    url={video6}
                    poster="https://i.ytimg.com/vi/h1sRnINIZ1Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAgwBvlhxsvHtC-4MaGrOvWxJGTzg"
                  />
                  <Box display={"flex"} alignContent={"center"} gap={"20px"}>
                    <p>Отель у озера</p>
                    <p>24 Апр 2020</p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-low-vision"></i> 97
                    </p>
                    <p style={{ gap: "15px" }}>
                      <i class="bx bx-time"></i> 01:24
                    </p>
                  </Box>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} marginTop={"50px"}>
              <Button
                sx={{ border: "1px solid #fff", color: "white" }}
                variant="outlined"
              >
                Показать ещё
              </Button>
            </Box>
          </Box>
          {/* Trayler end */}

          {/* Poster start */}
          <Box width={"100%"}>
            <h1>Постеры</h1>
            <Box display={"flex"} justifyContent={"space-between"} gap={"20px"} flexWrap={"wrap"}>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              <Box width={"23%"}>
                <img
                  style={{ borderRadius: "10px", width: "100%" }}
                  src={one}
                  alt=""
                />
                <p>Черное море</p>
              </Box>
              
            </Box>
            <Box display={"flex"} justifyContent={"center"} marginTop={"50px"}>
              <Button
                sx={{ border: "1px solid #fff", color: "white" }}
                variant="outlined"
              >
                Показать ещё
              </Button>
            </Box>
          </Box>
          {/* Poster end */}

          {/*Kadr start*/}
          <Box width={"100%"}>
            <h1>Кадры</h1>
            <Box display={"flex"} justifyContent={"space-between"} gap={"20px"} flexWrap={"wrap"}>
              <Box width={"32%"}>
                <img
                  style={{
                    height: "300px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Побег из Шоушенка</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Зеленая миля</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Форрест Гамп</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    height: "300px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Побег из Шоушенка</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Зеленая миля</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Форрест Гамп</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    height: "300px",
                    borderRadius: "10px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Побег из Шоушенка</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Зеленая миля</p>
              </Box>
              <Box width={"32%"}>
                <img
                  style={{
                    borderRadius: "10px",
                    height: "300px",
                    width: "100%",
                  }}
                  src={kadr1}
                  alt=""
                />
                <p>Форрест Гамп</p>
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} marginTop={"50px"}>
              <Button
                sx={{ border: "1px solid #fff", color: "white" }}
                variant="outlined"
              >
                Показать ещё
              </Button>
            </Box>
          </Box>
          {/*Kadr end*/}

          {/* Footer start*/}
          <div className="footerfon" sx={{ bgcolor: "#151A26" }}>
            <Box
              sx={{
                marginTop: "20px",
              }}
              height="100vh"
            >
              <div className="font123">
                <img src="./images/123.png" alt="" />
                <img style={{marginTop:"30px", }} src={logotip} alt="" />
                <h1 style={{marginTop:"30px"}}>Подпишитесь на E-mail рассылку</h1>
                <p style={{marginTop:"30px"}}>
                  Если хотиет быть в курсе последних новостей и новинок кино -
                  заполните форму ниже и оформите бесплатную E-mail рассылку!{" "}
                </p>
                <div className="bottom">
                  <TextField
                    id="outlined_basic"
                    label="Введите свой E-mail адрес"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined_basic"
                    label="Подписаться"
                    variant="outlined"
                  />
                </div>
                <Box>
                {/* <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                /> */}
                 <p>Соглашаюсь на условия <ins style={{color:"yellow"}}>политики конфиденциальности</ins> </p>
              </Box>
              </div>
              <Box>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"20px"}
                gap={"20px"}
                mt={"50px"}
              >
                <Link href={"https://vk.com/"}>
                  <i class="bx bxl-vk"></i>
                </Link>
                <Link href={"https://instagram.com/"}>
                  <i class="bx bxl-instagram"></i>
                </Link>
                <Link href={"https://facebook.com/"}>
                  <i class="bx bxl-facebook"></i>
                </Link>
                <Link href={"https://twitter.com/"}>
                  <i class="bx bxl-twitter"></i>
                </Link>
                <Link href={"https://youtube.com/"}>
                <i class='bx bxl-youtube'></i>
                </Link>
              </Box>
              <Box>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                  }}
                >
                  <li>Афиша</li>
                  <li> Медиа</li>
                  <li>Фильмы</li>
                  <li>Актёры</li>
                  <li>Новости</li>
                  <li>Подборки</li>
                  <li>Категории</li>
                </ul>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", color:"#ccc" }}>
                <p>2020 © Kinoarea. Все права защищены</p>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center",color:"#ccc" }}>
                <p>Политика конфиденциальности</p>
              </Box>
            </Box>
            </Box>
           
          </div>
          {/* Footer end */}
        </Box>
      </Box>
    );
  }
}

export default App;
