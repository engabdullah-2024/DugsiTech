import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const biology2024Answers = [
  {
    question: '1. The human circulatory system is made up of (i) heart, (ii), and (iii)',
    answer: 'blood and blood vessels',
  },
  {
    question: '2. Those animals which eat only plants are called',
    answer: 'herbivores',
  },
  {
    question: '3. The axial skeleton consists of 80 bones and appendicular skeleton consists of ____ bones.',
    answer: '126',
  },
  {
    question: '4. ____ is the branch of biology that deals with the study of interactions among organisms and their environment.',
    answer: 'Ecology',
  },
  {
    question: '5. ____ are gamete-producing organs (ovaries in females and testes in males).',
    answer: 'Gonads',
  },
  {
    question: '6. The liquid part (or fluid part) of blood is called',
    answer: 'Plasma',
  },
  {
    question: '7. ____ is the basic structural and functional unit of living organisms.',
    answer: 'Cell',
  },
  {
    question: '8. The two types of reflex actions are ____ and ____.',
    answer: 'Simple and conditioned',
  },
  {
    question: '9. The mass of the human brain is about 1.4kg and it uses 20% of the body ____ that reaches the ____.',
    answer: 'Oxygen',
  },
  {
    question: '10. In children who are still growing, too much growth hormone can cause a condition called',
    answer: 'Gigantism',
  },
];

const biologyMatchAnswers = [
  { columnA: '1. CNA', columnB: 'the brain and spinal cord' },
  { columnA: '2. Spermatophyta', columnB: 'seed producing plants' },
  { columnA: '3. Organ', columnB: 'a group of tissues working together' },
  { columnA: '4. Ligase', columnB: 'enzyme that joins the adjacent strands of DNA fragments' },
  { columnA: '5. Pancreas', columnB: 'acts as both endocrine and exocrine gland' },
  { columnA: '6. Pollution', columnB: 'atmospheric change that threatens biodiversity' },
  { columnA: '7. Botany', columnB: 'the scientific study of plants' },
  { columnA: '8. Arthritis', columnB: 'an inflammation of the joints' },
  { columnA: '9. Arteries', columnB: 'blood vessels that carry blood away from heart' },
  { columnA: '10. Eczema', columnB: 'one of the common skin disorders' },
];

const Answers = () => {
  const [showBiologyAnswers, setShowBiologyAnswers] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-100 to-white py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Section B & C Answers</h1>

        {/* Toggle Header */}
        <div
          onClick={() => setShowBiologyAnswers(!showBiologyAnswers)}
          className="flex justify-between items-center cursor-pointer p-4 bg-pink-50 rounded-lg border border-pink-200 hover:bg-pink-100 transition-all"
        >
          <div className="flex items-center gap-2 text-pink-700 font-semibold text-lg">
            <BookOpen />
            Biology - 2024
          </div>
          {showBiologyAnswers ? <ChevronUp /> : <ChevronDown />}
        </div>

        {/* Section B Answers */}
        {showBiologyAnswers && (
          <>
            <div className="mt-4 space-y-4">
              {biology2024Answers.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-white to-pink-50 border border-pink-100 shadow-sm"
                >
                  <p className="font-medium text-gray-800">{item.question}</p>
                  <p className="text-pink-600 mt-1">
                    Answer: <span className="font-semibold">{item.answer}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Section C Table */}
            <div className="mt-10">
              <h2 className="text-2xl font-bold text-pink-700 mb-4">Section C: Match The Following</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border border-pink-200 text-left">
                  <thead className="bg-pink-100 text-pink-800">
                    <tr>
                      <th className="px-4 py-2 border border-pink-200">Column A</th>
                      <th className="px-4 py-2 border border-pink-200">Column B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {biologyMatchAnswers.map((item, index) => (
                      <tr
                        key={index}
                        className="hover:bg-pink-50 transition-all even:bg-white odd:bg-pink-50"
                      >
                        <td className="px-4 py-2 border border-pink-200 font-medium text-gray-800">
                          {item.columnA}
                        </td>
                        <td className="px-4 py-2 border border-pink-200 text-pink-700">
                          {item.columnB}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Answers;
