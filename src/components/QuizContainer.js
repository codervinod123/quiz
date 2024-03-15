import React, { useState } from "react";
import { questions } from "../utils/constants";
import { correctAnswer } from "../utils/constants";
import { MdOutlineRefresh } from "react-icons/md";
import DetailAnswer from "./DetailAnswer";

const QuizContainer = () => {

  const [ques, setQues] = useState(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQues, setCurrentQues] = useState(ques[currentIndex]);
  const [markedAns,setMarkedAns]=useState([]);
  const [correct,setCorrect]=useState(0);
  const [showAns,setShowAns]=useState(false);
  const [showDetails,setShowDetails]=useState(false);


  const handleNextClick = (opt) => {
    setMarkedAns([...markedAns,opt]);
    setCurrentIndex((prev) => prev + 1);
    if (currentIndex >= ques.length - 1) return;
    setCurrentQues(ques[currentIndex + 1]);
  };

  const submitAns=()=>{
    var count=0;
     markedAns.forEach((corretAns)=>{
         if(corretAns.answer==true){
           count++;
         }
    })
    setShowAns(!showAns);
    setCorrect(count);
  }


  const handleRefresh=()=>{
    setCurrentIndex(0);
    setShowAns(!showAns);
    setCurrentQues(ques[0]);
    setMarkedAns([]);
  }

  const handleShowDetails=()=>{
     setShowDetails(!showDetails);
  }


  return (
    <div className="h-[100vh] w-[100vw] bg-slate-700 flex justify-center pt-16">
      <div className="border h-[70%] w-[70%] flex flex-col items-center justify-center">
        {!showDetails?(
        <>
        {currentIndex >= ques.length ? (
            <>
             {!showAns?
              <button onClick={submitAns} className="text-white text-[20px] font-semibold border bg-slate-500 px-2 py-1 rounded">Submit</button>
              :
              <div className="flex items-center  justify-center text-white text-[20px] font-semibold">
                {`Hello vinod your score is ${correct}`} 
                 <MdOutlineRefresh onClick={handleRefresh} className="ml-4 cursor-pointer"/> 
                 <button onClick={handleShowDetails}>Show Detail</button>
              </div>}
            </>
        ) : (
         
          <div>
            {
              <p className="pb-12 text-white text-[20px] font-semibold">
                {currentQues.question}
              </p>
            }
            <div className="grid grid-cols-2 gap-x-16 gap-y-8">
              {currentQues.answer.map((option, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleNextClick(option)}
                    className="text-white text-[20px] font-semibold px-4 py-1 bg-slate-500 rounded"
                  >
                    {option.opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        </>
        ):
        (
           <DetailAnswer ques={ques} markedAns={markedAns}/>
        )
        }
      </div>
    </div>
  );
};

export default QuizContainer;
