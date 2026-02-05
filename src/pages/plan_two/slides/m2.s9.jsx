import { useCallback, useEffect, useRef, useState } from "react";

const RecordSteps = ({ description }) => (
  <div className="bg-green-700 rounded-2xl shadow-lg">
    <p className="text-white px-4 py-2">{description}</p>
  </div>
);

const emptyRow = {
  action: "",
  timing: "",
  success: "",
  status: "",
};

const columns = ["action", "timing", "success", "status"];

const M2S9 = () => {
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem("m1s4_rows");
    return saved ? JSON.parse(saved) : [{ ...emptyRow }];
  });
  const inputRefs = useRef([]);

  /* -------------------- Persistence -------------------- */
  useEffect(() => {
    localStorage.setItem("m1s4_rows", JSON.stringify(rows));
  }, [rows]);

  /* -------------------- Helpers -------------------- */
  const isRowFilled = (row) => Object.values(row).some((v) => v.trim() !== "");

  const isRowComplete = (row) =>
    Object.values(row).every((v) => v.trim() !== "");

  /* -------------------- Ref Management -------------------- */
  const setInputRef = useCallback((rowIndex, colIndex, el) => {
    if (!inputRefs.current[rowIndex]) {
      inputRefs.current[rowIndex] = [];
    }
    inputRefs.current[rowIndex][colIndex] = el;
  }, []);

  /* -------------------- Handlers -------------------- */
  const handleChange = (rowIndex, field, value) => {
    setRows((prev) => {
      const updated = [...prev];
      updated[rowIndex][field] = value;

      const isLastRow = rowIndex === prev.length - 1;
      if (isLastRow && isRowFilled(updated[rowIndex])) {
        updated.push({ ...emptyRow });
      }

      return updated;
    });
  };

  const handleKeyDown = (e, rowIndex, colIndex) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const nextCol = colIndex + 1;
    const nextRow = rowIndex + 1;

    if (nextCol < columns.length) {
      inputRefs.current[rowIndex]?.[nextCol]?.focus();
    } else {
      inputRefs.current[nextRow]?.[0]?.focus();
    }
  };

  const handleBlur = (row) => {
    if (isRowFilled(row)) {
      console.log("Saving row:", row);
      // Replace with API call later
    }
  };

  const removeRow = (index) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  /* -------------------- Render -------------------- */
  return (
    <div className="w-full h-full px-12 py-10">
      <RecordSteps description="Record Steps, Goals, and Activities to Achieve This Milestone Inside School (Examples: LEEP Workshop, Engaging with Teachers, School Community Projects, and More)" />

      <div className="mt-8">
        <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 border text-left">
                Action Steps (Inside School)
              </th>
              <th className="px-4 py-3 border text-left">Timing</th>
              <th className="px-4 py-3 border text-left">Measure of Success</th>
              <th className="px-4 py-3 border text-left">Status</th>
              <th className="px-4 py-3 border"></th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className={isRowComplete(row) ? "bg-green-50" : ""}
                  onBlur={() => handleBlur(row)}
                >
                  {/* Action */}
                  <td className="px-4 py-3 border">
                    <input
                      ref={(el) => setInputRef(rowIndex, 0, el)}
                      value={row.action}
                      onChange={(e) =>
                        handleChange(rowIndex, "action", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e, rowIndex, 0)}
                      className="w-full py-2 focus:outline-none"
                    />
                  </td>

                  {/* Timing */}
                  <td className="px-4 py-3 border">
                    <input
                      ref={(el) => setInputRef(rowIndex, 1, el)}
                      value={row.timing}
                      onChange={(e) =>
                        handleChange(rowIndex, "timing", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e, rowIndex, 1)}
                      className="w-full py-2 focus:outline-none"
                    />
                  </td>

                  {/* Success */}
                  <td className="px-4 py-3 border">
                    <input
                      ref={(el) => setInputRef(rowIndex, 2, el)}
                      value={row.success}
                      onChange={(e) =>
                        handleChange(rowIndex, "success", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e, rowIndex, 2)}
                      className="w-full py-2 focus:outline-none"
                    />
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3 border">
                    <select
                      ref={(el) => setInputRef(rowIndex, 3, el)}
                      value={row.status}
                      onChange={(e) =>
                        handleChange(rowIndex, "status", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown(e, rowIndex, 3)}
                      className="w-full py-2 bg-transparent focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="pending">Pending</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>
                  </td>

                  {/* Delete */}
                  <td className="px-4 py-3 border text-center">
                    {isRowFilled(row) && (
                      <button
                        onClick={() => removeRow(rowIndex)}
                        className="text-red-500 text-sm"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default M2S9;
