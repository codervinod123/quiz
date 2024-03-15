import React from 'react'

const DetailAnswer = ({ques,markedAns}) => {
    // console.log(markedAns);
  return (
    <div>
        {
            ques.map((data,index)=>{
                return(
                    <div key={index}>
                      <h1 className={`text-[20px] font-bold ${markedAns[index].answer?"text-green-600":"text-red-600"} `}>{data.question}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DetailAnswer