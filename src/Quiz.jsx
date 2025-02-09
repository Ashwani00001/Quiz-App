// import React, { useState, useEffect } from 'react';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/Uw5CrX')
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//     //   .then(data => {
//     //     setQuestions(data);
//     //     setLoading(false);
//     //   })
//     .then(data => {
//         // Check if data contains a 'questions' field and use that
//         setQuestions(Array.isArray(data.questions) ? data.questions : []);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {/* Quiz content will go here */}
//       {questions.map((question, index) => (
//         <div key={index}>
//           {/* Display each question */}
//           <p>{question.question}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Quiz;


// import React, { useState, useEffect } from 'react';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/Uw5CrX')
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(data => {
//         if (Array.isArray(data)) {
//           setQuestions(data);
//         } else if (data && Array.isArray(data.questions)) {
//           setQuestions(data.questions);
//         } else {
//           throw new Error('Unexpected data format');
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       {Array.isArray(questions) && questions.length > 0 ? (
//         questions.map((question, index) => (
//           <div key={index}>
//             <p>{question.question}</p>
//           </div>
//         ))
//       ) : (
//         <p>No questions available.</p>
//       )}
//     </div>
//   );
// }

// export default Quiz;



// import React, { useState, useEffect } from 'react';

// function Quiz() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/Uw5CrX')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('API Response:', data); // Log API response for debugging
//         setQuestions(Array.isArray(data.questions) ? data.questions : []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Fetch Error:', err);
//         setError(err);
//         setLoading(false);
//       });
//   }, []);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   const handleNextQuestion = () => {
//     if (selectedOption === questions[currentQuestionIndex]?.answer) {
//       setScore((prevScore) => prevScore + 1);
//     }
//     setSelectedOption('');
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (showResult) {
//     return (
//       <div>
//         <h2>Quiz Completed!</h2>
//         <p>Your Score: {score} out of {questions.length}</p>
//       </div>
//     );
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div>
//       <h2>Quiz App</h2>
//       {currentQuestion ? (
//         <div>
//           <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
//           <p>{currentQuestion.question}</p>
//           {Array.isArray(currentQuestion.options) ? (
//             currentQuestion.options.map((option, i) => (
//               <div key={i}>
//                 <label>
//                   <input
//                     type="radio"
//                     name="option"
//                     value={option.description} // Ensure correct field is used
//                     checked={selectedOption === option.description}
//                     onChange={() => handleOptionSelect(option.description)}
//                   />
//                   {option.description} {/* Ensure the correct field is displayed */}
//                 </label>
//               </div>
//             ))
//           ) : (
//             <p>No options available</p>
//           )}
//           <button onClick={handleNextQuestion} disabled={!selectedOption}>
//             {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       ) : (
//         <p>No questions available</p>
//       )}
//     </div>
//   );
// }

// export default Quiz;



import React, { useState, useEffect } from 'react';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[toggle, setToggle]=useState(0);

  useEffect(() => {
    fetch('/api/Uw5CrX')
      .then((response) => response.json())
      .then((data) => {
        console.log('API Response:', data); // Debug API response
        setQuestions(Array.isArray(data.questions) ? data.questions : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch Error:', err);
        setError(err);
        setLoading(false);
      });
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };


  const handleNextQuestion = () => {
    setToggle(toggle+1);
    if (selectedOption === questions[currentQuestionIndex]?.answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (showResult) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score} out of {questions.length}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4'>
      <h1 className='text-3xl font-bold text-blue-400'>Quiz App</h1>
      <div className='max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-lg'>
      
      {currentQuestion ? (
        <div className='mt-4'>
          <p className='text-gray-400 text-sm text-center'>Question {currentQuestionIndex + 1} of {questions.length}</p>
          
          <p className='mt-2 text-purple-400 font-semibold'>{questions[toggle].description}</p>
          {Array.isArray(currentQuestion.options) ? (
           
            currentQuestion.options.map((option, i) => (
              <div className='mt-2 px-1 flex items-center space-x-3 rounded-md hover:bg-gray-600 transition' key={i}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option.description} // Use 'description' from API
                    checked={selectedOption === option.description}
                    onChange={() => handleOptionSelect(option.description)}
                 className='w-4 h-4 text-blue-400 bg-gray-700 border-gray-600 focus:ring-2 focus:ring-blue-400' />
                  {option.description} {/* Display correct field */}
                </label>
              </div>
            ))
          ) : (
            <p className='text-red-500'>No options available</p>
          )}
          <button className='w-full mt-5 py-2 text-lg font-semibold rounded-md transition :' onClick={handleNextQuestion} disabled={!selectedOption}>
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <p>No questions available</p>
      )}

    </div>
    </div>
  
  );
}

export default Quiz;