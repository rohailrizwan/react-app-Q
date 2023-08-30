import React, { useState } from 'react';
import BasicButtons from './BUTTON';

type QuestionOption = {
  question: string;
  hopt: string[];
  c_option: string;
};

type def = {
  obj: QuestionOption[];
};

export default function RENDERquestion(props: def) {
  const [indexval, setIndexVal] = useState<number>(0);
  const [mark, setMark] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(true);
  const [showScore, setShowScore] = useState<boolean>(false);


  const nextques = () => {
    if (indexval < props.obj.length - 1) {
      setIndexVal(indexval + 1);
    } else {
      setShowQuestion(false);
      setShowScore(true);
    }
  };

  const backques = () => {
    if (indexval > 0) {
      setIndexVal(indexval - 1);
    }
  };

  const current_ques = props.obj[indexval];

  const checkans = (selected_opt: string) => {
    const correctOption = current_ques.c_option;
    if (selected_opt === correctOption) {
      setMark(mark + 1);
    }
    nextques();
  };

  return (
    <div>
      {showQuestion && (
        <div>
          <div style={{ display: 'flex' }}>
            <h1 style={{ marginRight: '50px' }}>{current_ques.question}</h1>
            <p>{indexval + 1}/5</p>
          </div>
          <div>
            {current_ques.hopt.map((opt, index) => (
              <div key={index}>
                <button
                  value={opt}
                  className="option-btn"
                  onClick={() => checkans(opt)}
                >
                  {opt}
                </button>
              </div>
            ))}
            <BasicButtons value="next" click={nextques} />
            <BasicButtons value="back" click={backques} />
          </div>
        </div>
      )}

      {showScore && (
        <div id="y_score" style={{ textAlign: 'center' }}>
          <h1>Your score is {mark}/5</h1>
        </div>
      )}
    </div>
  );
}
