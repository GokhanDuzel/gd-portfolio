import Card from "../UI/Card";

const Recommendation = () => {
  return (
    <Card id="recommendations">
      <h2>Recommendations</h2>
      <div style="clear: both"></div>
      <div class="all_recommendations" id="all_recommendations">
        <div class="recommendation">
          <span>&#8220;</span>
          Gokhan is an exceptional talent in the world of web development. He's
          a quick learner who effortlessly grasps the fundamental concepts. His
          attitude is absolutely outstanding, and he's a true team player,
          always ready to collaborate and support others.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          Gokhan's proficiency in web development is truly impressive. He is a
          fast learner, consistently mastering key concepts with ease. His
          positive attitude is infectious, and he's an invaluable asset to any
          team.
          <span>&#8221;</span>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          In the realm of web development, Gokhan is a standout talent. His
          ability to quickly grasp complex concepts sets him apart. Beyond his
          technical skills, Gokhan's positive attitude and strong teamwork make
          him a joy to work with.
          <span>&#8221;</span>
        </div>
      </div>
    </Card>
  );
};
