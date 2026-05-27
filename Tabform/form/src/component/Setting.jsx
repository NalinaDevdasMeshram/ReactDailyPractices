const Setting = () => {
  return (
    <div>
      <input type="radio" id="dark" name="theme" />
      <label htmlFor="dark">Dark Mode</label>
      <input type="radio" id="light" name="theme" />
      <label htmlFor="light">Light Mode</label>
    </div>
  );
};

export default Setting;
