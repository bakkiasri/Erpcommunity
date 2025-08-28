import { useState, useMemo } from "react";

function Calender() {
  const [cursor, setCursor] = useState(new Date(2019, 9, 1)); // Oct 2019
  const [range, setRange] = useState({ start: null, end: null }); // Date | null

  const year = cursor.getFullYear();
  const month = cursor.getMonth(); // 0=Jan

  // Build a 6x7 grid starting from the Sunday of the first week shown
  const calendarDays = useMemo(() => {
    const firstOfMonth = new Date(year, month, 1);
    const startDay = firstOfMonth.getDay(); // 0=Sun ... 6=Sat
    const gridStart = new Date(year, month, 1 - startDay); // previous Sunday (or same day if Sunday)

    return Array.from({ length: 36 }, (_, i) => {
      const d = new Date(gridStart);
      d.setDate(gridStart.getDate() + i);
      return { date: d, inCurrentMonth: d.getMonth() === month };
    });
  }, [year, month]);

  // Helpers
  const toKey = (d) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const isSameDay = (a, b) => a && b && toKey(a) === toKey(b);
  const isBetween = (d, s, e) => {
    if (!s || !e) return false;
    const t = toKey(d),
      ts = toKey(s),
      te = toKey(e);
    return t > ts && t < te;
  };

  // Range selection logic
  const handleSelect = (day) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: day, end: null });
    } else if (toKey(day) < toKey(range.start)) {
      setRange({ start: day, end: range.start });
    } else if (toKey(day) === toKey(range.start)) {
      setRange({ start: day, end: null }); // click same day again -> keep start only
    } else {
      setRange({ ...range, end: day });
    }
  };

  // Navigation
  const prevMonth = () => setCursor(new Date(year, month - 1, 1));
  const nextMonth = () => setCursor(new Date(year, month + 1, 1));
  const prevYear = () => setCursor(new Date(year - 1, month, 1));
  const nextYear = () => setCursor(new Date(year + 1, month, 1));

  const monthLabel = cursor.toLocaleString("default", { month: "long" });

  return (
    <div className=" text-white p-3 px-6  rounded-xl ">
      {/* Header: Month */}
      <div className="flex justify-between pt-5  items-center">
        <div className="flex justify-between space-x-6 items-center ">
          <button
            onClick={prevMonth}
            className="px-2 py-1 rounded hover:bg-[#3A3A5A]"
          >
            {"<"}
          </button>
          <div className="text-lg  font-normal">{monthLabel}</div>
          <button
            onClick={nextMonth}
            className="px-2 py-1 rounded hover:bg-[#3A3A5A]"
          >
            {">"}
          </button>
        </div>

        {/* Header: Year */}
        <div className="flex justify-between space-x-6 items-center ">
          <button
            onClick={prevYear}
            className="px-2 py-1 rounded hover:bg-[#3A3A5A]"
          >
            {"<"}
          </button>
          <div className="text-lg font-normal">{year}</div>
          <button
            onClick={nextYear}
            className="px-2 py-1 rounded hover:bg-[#3A3A5A]"
          >
            {">"}
          </button>
        </div>
      </div>
      {/* Weekday row (Sun-first). For Mon-first, change labels & math */}
      <div className="grid grid-cols-7 pe-4 py-4 text-center border-b-1 text-sm text-gray-400">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* 6x7 calendar grid */}
      <div className="grid grid-cols-7 gap-1  text-center">
        {calendarDays.map(({ date, inCurrentMonth }) => {
          const selectedStart = range.start && isSameDay(date, range.start);
          const selectedEnd = range.end && isSameDay(date, range.end);
          const inRange = isBetween(date, range.start, range.end);

          return (
            <button
              key={toKey(date)}
              onClick={() => handleSelect(date)}
              className={[
                "cursor-pointer select-none w-10 h-8 flex items-center justify-center rounded-full transition",
                inRange ? "bg-blue-200 text-blue-900" : "",
                selectedStart || selectedEnd ? "bg-blue-500 text-white" : "",
                !inCurrentMonth
                  ? "text-white/30 hover:bg-transparent"
                  : "hover:bg-[#3A3A5A]",
              ].join(" ")}
              disabled={!inCurrentMonth} // make out-of-month days non-interactive; remove if you want them clickable
              title={date.toDateString()}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex justify-around px-12 gap-3     ">
        <button
          className="px-8 py-1 border-1 border-white rounded-sm"
          onClick={() => setRange({ start: null, end: null })}
        >
          Cancel
        </button>
        <button
          className=" py-1 bg-blue-500 px-8 rounded-sm "
          onClick={() => console.log("Selected Range:", range)}
        >
          Filter
        </button>
      </div>
    </div>
  );
}
export default Calender;
