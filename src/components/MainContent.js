function MainContent() {
  return (
    <div>
      <h1 className="babel1">What is Babel</h1>
      <ul>
        <li>It provides an easy, convenient way to prototype with Babel</li>
        <li>
          Using @babel/standalone, you can get started using Babel with just a
          simple script tag in your HTML
        </li>
        <li>
          If you're using Babel in production, you should normally not use
          @babel/standalone. Instead, you should use a build system running on
          Node.js, such as Webpack, Rollup, or Parcel, to transpile your JS
          ahead of time.
        </li>
      </ul>
    </div>
  );
}

export default MainContent;
