import "./TodayLesson.css";
function TodayLesson({content}) {
  return (
    <div>
      <h1>Today lesson is {''}
        <span className="red">{content}</span>
      </h1>
    </div>
  );
}

export default TodayLesson;