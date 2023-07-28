import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <Navbar />
        <br />
        <br />

        <div className="header">
          <img src="logo1.jpg"></img>
          <h3>Horizon University </h3>
        </div>
        <div className="navbar1">
          <div className="nav">
            <a href="#">Home</a>
            <a href="#course">Courses</a>
            <a href="#Academics">Academics</a>
            <a href="#Admissions">Admissions</a>
            <a href="#Exams">Exams</a>
            <a href="#aboutus">Aboutus</a>
          </div>
        </div>
        <div className="home">
          <div className="home-btn">
            <button
              className="btn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
            </button>
            <div id="course" className="space"></div>
          </div>
        </div>

        <div>
          <div className="course-head">
            <h1>Our Featured Courses</h1>
            <h2>Knowledge is power, and our courses empower you to succeed</h2>
          </div>
          <div className="card">
            <div className="cards">
              <Card className="content" sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image="software1.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Software Development
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>
                      {" "}
                      Software development is the process programmers use to
                      build computer programs. The process, also known as the
                      Software Development Life Cycle (SDLC), includes several
                      phases.
                    </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Course</Button>
                </CardActions>
              </Card>
              <Card className="content" sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="civil.jpg"
                  style={{ height: 140 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Civil Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>
                      Civil engineering is a professional engineering discipline
                      that deals with the design, construction, and maintenance
                      of the physical and naturally built environment.
                    </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Course</Button>
                </CardActions>
              </Card>
              <Card className="content" sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="electrical.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Electrical Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>
                      Electrical engineering is an engineering discipline
                      concerned with the study, design, and application of
                      equipment, devices, and systems which use electricity,
                      electronics, and electromagnetism.
                    </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Course</Button>
                </CardActions>
              </Card>
            </div>
            <div className="cards-down">
              <Card className="content" sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image="mechanical.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mechanical Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>
                      Mechanical engineering, the branch of engineering
                      concerned with the design, manufacture, installation, and
                      operation of engines and machines and with manufacturing
                      processes. It is particularly concerned with forces and
                      motion.
                    </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Course</Button>
                </CardActions>
              </Card>
              <Card className="content" sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image="ai.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Artificial Intelligence
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>
                      Artificial intelligence (AI) is intelligence demonstrated
                      by computers, as opposed to human or animal intelligence.
                      "Intelligence" encompasses the ability to learn and to
                      reason, to generalize, and to infer meaning.
                    </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Course</Button>
                </CardActions>
              </Card>
              <Card className="content" sx={{ maxWidth: 345 }}>
                <CardMedia sx={{ height: 140 }} image="space.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Aerospace Engineering
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <b>
                      Aerospace engineering, also called aeronautical
                      engineering, or astronautical engineering, field of
                      engineering concerned with the design, development,
                      construction, testing, and operation of vehicles operating
                      in the Earth's atmosphere or in outer space.
                    </b>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Course</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
        <div className="academics" id="Academics">
          <h1>Academics hello</h1>
        </div>
      </div>
    </>
  );
}

export default Homepage;
