export default function Header() {
  const onClickHomeBtn = () => {};
  const onClickEduBtn = () => {};
  const onClickSkillBtn = () => {};
  const onClickProjectBtn = () => {};

  return (
    <header className="flex row">
      <button onClick={() => onClickHomeBtn()}>신병규</button>
      <div className="flex row">
        <button onClick={() => onClickHomeBtn()}>Home</button>
        <button onClick={() => onClickEduBtn()}>Education</button>
        <button onClick={() => onClickSkillBtn()}>Skill</button>
        <button onClick={() => onClickProjectBtn()}>Project</button>
      </div>
    </header>
  );
}
