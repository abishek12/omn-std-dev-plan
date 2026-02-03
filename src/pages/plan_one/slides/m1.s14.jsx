const M1S14 = () => {
  return (
    <div className="w-full p-6">
      {/* Heading */}
      <h2 className="text-center font-bold text-2xl mb-6">
        SAMPLE VALUES TO GET GOING...
      </h2>

      {/* Values Container */}
      <div className="border border-blue-500 rounded-lg p-6">
        <div className="flex flex-col md:flex-row flex-wrap">
          {[
            [
              "<strong>Respect</strong> – Treating others kindly and valuing their differences",
              "<strong>Integrity</strong> – Doing the right thing, even when no one is watching",
              "<strong>Responsibility</strong> – Owning your actions and choices",
              "<strong>Perseverance</strong> – Sticking with something, even when it's tough",
              "<strong>Empathy</strong> – Understanding and caring about how others feel",
              "<strong>Curiosity</strong> – Being eager to learn and explore new things",
            ],
            [
              "<strong>Accountability</strong> – Taking responsibility for your actions",
              "<strong>Honesty</strong> – Being truthful with yourself and others",
              "<strong>Creativity</strong> – Using imagination to think of new ideas",
              "<strong>Gratitude</strong> – Appreciating what you have and showing thankfulness",
              "<strong>Self-Discipline</strong> – Staying focused on goals and resisting distractions",
              "<strong>Teamwork</strong> – Working well with others to achieve a common goal",
            ],
            [
              "<strong>Kindness</strong> – Being friendly, generous, and considerate to others",
              "<strong>Open-Mindedness</strong> – Being willing to consider new ideas and perspectives",
              "<strong>Patience</strong> – Staying calm and persistent, even in challenging situations",
              "<strong>Leadership</strong> – Inspiring others and setting a good example",
              "<strong>Resilience</strong> – Bouncing back from challenges or setbacks",
              "<strong>Humility</strong> – Recognizing that there's always something new to learn",
            ],
            [
              "<strong>Compassion</strong> – Wanting to help those who are struggling",
              "<strong>Justice</strong> – Standing up for fairness and doing what's right",
              "<strong>Courage</strong> – Being brave enough to face fears or try new things",
              "<strong>Dedication</strong> – Putting in effort and commitment to reach goals",
              "<strong>Adaptability</strong> – Being flexible and open to change",
              "<strong>Self-Respect</strong> – Valuing yourself and your abilities",
            ],
            [
              "<strong>Optimism</strong> – Looking at situations with a positive outlook",
              "<strong>Growth</strong> – Always aiming to improve and learn",
              "<strong>Focus</strong> – Concentrating on the task or goal at hand",
              "<strong>Loyalty</strong> – Standing by friends, family, and commitments",
              "<strong>Service</strong> – Helping others and contributing to your community",
              "<strong>Ambition</strong> – Having strong goals and dreams for the future",
            ],
          ].map((column, colIndex) => (
            <div
              key={colIndex}
              className="w-full md:flex-1 border p-4"
            >
              {column.map((item, index) => (
                <p
                  key={index}
                  className="mb-3"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default M1S14;
