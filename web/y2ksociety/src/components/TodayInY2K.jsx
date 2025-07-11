const y2kEvents = [
  { date: "07-11", year: "1995", text: "Bill Gates predstavuje Windows 95 v Japonsku" },
  { date: "07-11", year: "2000", text: "MP3.com zaplatí pokutu 53 miliónov dolárov za porušenie autorských práv" },
  { date: "07-11", year: "2005", text: "MySpace sa stáva najnavštevovanejšou stránkou v USA" },
  { date: "07-12", year: "2001", text: "Napster definitívne končí svoju prevádzku" },
  // Pridaj ďalšie dátumy/udalosti podľa potreby
];

export default function TodayInY2K() {
  const today = new Date();
  const todayStr = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const todayEvents = y2kEvents.filter((e) => e.date === todayStr);

  return (
    <aside className="timeline-widget">
      <h3>📰 Dnes sa stalo</h3>
      {todayEvents.length > 0 ? (
        <ul>
          {todayEvents.map((e, i) => (
            <li key={i}>
              <strong>{e.year}</strong> – {e.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>Dnes sa nič nestalo počas najlepšieho obdobia 💾</p>
      )}
    </aside>
  );
}
