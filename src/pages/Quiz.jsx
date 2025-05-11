import React, { useState } from 'react';

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentPart, setCurrentPart] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredAll, setAnsweredAll] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showSelected, setShowSelected] = useState(false);

  const letterOptions = ['a', 'b', 'c', 'd'];

  const parts = {
    1: {
      title: 'True or False',
      questions: [
        { question: 'The sky is blue.', answer: 'True' },
        { question: 'Fish can walk.', answer: 'False' },
        { question: 'Water freezes at 0°C.', answer: 'True' },
        { question: 'Fire is cold.', answer: 'False' },
        { question: 'Books are made from paper.', answer: 'True' }
      ],
      options: ['True', 'False'],
      marks: 2
    },
    2: {
      title: 'Multiple Choice',
      questions: [
        {
          question: 'What is the synonym of "Happy"?',
          options: ['Sad', 'Joyful', 'Angry', 'Fearful'],
          answer: 'Joyful'
        },
        {
          question: 'Antonym of Brave?',
          options: ['Fearless', 'Coward', 'Strong', 'Bold'],
          answer: 'Coward'
        },
        {
          question: 'Correct sentence?',
          options: ['She can sings well.', 'She sings well.', 'She sing well.', 'She can well sings.'],
          answer: 'She sings well.'
        },
        {
          question: 'Homophone of "Right"?',
          options: ['Rite', 'Write', 'Fight', 'Bright'],
          answer: 'Write'
        },
        {
          question: 'Which is a noun?',
          options: ['Run', 'Quickly', 'Dog', 'Soft'],
          answer: 'Dog'
        }
      ],
      marks: 2
    },
    3: {
      title: 'Fill in the Blank',
      questions: [
        { question: 'The sun _____ in the east.', answer: 'rises' },
        { question: 'She _____ to school every day.', answer: 'goes' },
        { question: 'Cats like to eat _____.', answer: 'fish' },
        { question: 'The color of the grass is _____.', answer: 'green' },
        { question: 'The baby is _____. (cry)', answer: 'crying' }
      ],
      marks: 2
    },
    4: {
      title: 'Direct Questions',
      questions: [
        { question: 'What is your name?', answer: 'Eng Abdalla' },
        { question: 'What is the capital of Somalia?', answer: 'Mogadishu' },
        { question: 'How many days in a week?', answer: '7' },
        { question: 'Which planet is called the red planet?', answer: 'Mars' },
        { question: 'What is the past tense of "go"?', answer: 'went' }
      ],
      marks: 2
    }
  };

  const part = parts[currentPart];
  const current = part.questions[currentQuestion];

  const handleAnswer = (userAnswer) => {
    const correct = current.answer.toLowerCase().trim();
    const user = userAnswer.toLowerCase().trim();
    if (user === correct) setScore((prev) => prev + part.marks);
    else setScore((prev) => prev - part.marks);

    setSelectedAnswer(userAnswer);
    setShowSelected(true);

    setTimeout(() => {
      setShowSelected(false);
      if (currentQuestion < 4) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        if (currentPart < 4) {
          setCurrentPart((prev) => prev + 1);
          setCurrentQuestion(0);
        } else {
          setAnsweredAll(true);
        }
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-white p-6 flex items-center justify-center">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-8">
        {!answeredAll ? (
          <div>
            <h1 className="text-2xl font-bold text-pink-600 mb-4">
              Part {currentPart}: {part.title}
            </h1>
            <p className="text-lg mb-6">{current.question}</p>

            {part.options ? (
              <div className="space-y-2">
                {current.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="block w-full py-2 px-4 bg-pink-200 hover:bg-pink-300 rounded text-left"
                  >
                    {letterOptions[idx]}) {option}
                  </button>
                ))}
                {showSelected && (
                  <p className="text-pink-600 mt-2 font-semibold">
                    You selected:{' '}
                    <span className="underline">
                      {letterOptions[current.options.indexOf(selectedAnswer)]}) {selectedAnswer}
                    </span>
                  </p>
                )}
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  handleAnswer(form.answer.value);
                  form.reset();
                }}
                className="space-y-4"
              >
                <input
                  name="answer"
                  placeholder="Type your answer"
                  className="w-full p-2 border border-pink-300 rounded"
                  required
                />
                <button type="submit" className="bg-pink-400 text-white px-4 py-2 rounded hover:bg-pink-500">
                  Submit
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-pink-600">Exam Completed!</h2>
            <p className="text-lg mt-4">Your final score is:</p>
            <p className="text-3xl font-bold text-pink-500 mt-2">{score} / 40</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
