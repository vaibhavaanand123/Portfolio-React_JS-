

// eslint-disable-next-line react/prop-types
function SkillList({src,skill}) {
  return (
    <span>
    <img src={src} alt="checkMarkIcon" />
                <p>{skill}</p>
    </span>
  );
}

export default SkillList