import { useRef, useState } from "react";

const items = [
  {
    title: "Specific",
    description:
      "Be clear about what you want to do and why. Who is involved, andwhere will it happen?",
  },
  {
    title: "Measurable",
    description:
      "Figure out how you’ll track your progress and know when you’ve reached your goal.",
  },
  {
    title: "Achievable",
    description: "Make sure your goal matters and fits with your bigger plans.",
  },
  {
    title: "Realistic",
    description: "Pick a goal you can realistically achieve with effort",
  },
  {
    title: "Time",
    description: "Set a deadline for when you want to finish your goal.",
  },
];

const cardColorEven =
  "bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800";

const cardColorOdd =
  "bg-gradient-to-r from-yellow-100 to-orange-100 text-gray-800";

const M1S3 = () => {
  const inputRefs = useRef([]);
  const [values, setValues] = useState(items.map(() => ""));

  const handleChange = (index, value) => {
    setValues((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleKeyDown = (e, index) => {
    if (e.key !== "Enter") return;

    const currentValue = values[index].trim();

    // Prevent Enter if empty
    if (!currentValue) return;

    console.log({
      title: items[index].title,
      value: currentValue,
    });

    // Move focus to next input if exists
    const nextIndex = index + 1;
    if (inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex].focus();
    }
  };
  return (
    <div className="w-full h-full px-12 py-10">
      {/* top section of 5 measures*/}
      <div className="grid grid-cols-5 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border p-4 rounded-lg shadow-sm ${
              index % 2 === 0 ? cardColorEven : cardColorOdd
            }`}
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-8">
        Write down your SMART goals, breaking them up by each letter. This way,
        you’ll have 5 parts for each goal! Make sure each one is clear,
        something you can track, realistic, important to you, and has a
        deadline. This will help you stay focused and on track!
      </p>

      <table className="mt-8 w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left px-4 py-3 border">SMART Element</th>
            <th className="text-left px-4 py-3 border">Your Input</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={item.title} className="hover:bg-gray-50">
                <td className="px-4 py-3 border font-medium">{item.title}</td>
                <td className="px-4 py-3 border">
                  <input
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={values[index]}
                    placeholder={`Enter your ${item.title}...`}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default M1S3;
