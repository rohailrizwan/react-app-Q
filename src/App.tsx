import React from 'react';
import './App.css';
import BrandExample from './components/NAV';
import BasicButtons from './components/BUTTON';
import RENDERquestion from './components/RENDERques';
import { Container } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [start,quizstart]=useState(false)
  const [startbutton,setstartbtn]=useState(true)
  let htmlobj = [
    {
      question: "What does HTML stand for ?",
      hopt: ["a) Hyper Text Markup Language", "b) Home Tool Markup Language", "c) Hyperlinks and Text Markup Language", "d) High Tech Markup Language"],
      c_option: "a) Hyper Text Markup Language"
    },
    {
      question: "Which HTML element is used to define the main heading of a document ?",
      hopt: ["a) h1", "b) header", "c) heading", "d) main"],
      c_option: "a) h1"
    },
    {
      question: "Which attribute is used to specify a unique identifier for an HTML element ?",
      hopt: ["a) class", "b) id", "c) name", "d) src"],
      c_option: "b) id"
    },
    {
      question: "How do you create a hyperlink in HTML",
      hopt: ["a) link", "b) a", " c) hyperlink", " d) url"],
      c_option: "b) a"
    },
    {
      question: "Which tag is used to insert an image in HTML",
      hopt: ["a) img", "b) image", "c) picture", "d) src"],
      c_option: "a) img"
    },
  ]
  let startbtn=()=>{
    quizstart(true)
    setstartbtn(false)
  }
  return (
    <div>
      <BrandExample />
      {startbutton &&(
        <>
        <div className='startQuiz'>
        <h1 className='heading'>Start Quiz</h1>
        <BasicButtons value="start" click={startbtn} />
      </div>
        </>
      )
        
      }
      

      <div style={{ paddingTop: '90px' }}>
        <Container style={{margin:"0px 100px"}}>
          {start?<RENDERquestion obj={htmlobj} />:false}
        </Container>
      </div>
    </div>
  );
}

export default App;

