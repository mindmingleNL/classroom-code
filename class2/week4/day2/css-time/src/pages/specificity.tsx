export default function Specificity() {
  return (
    <main>
      <h1>Specificity</h1>

      <div className="target">This is the target</div>
      <div className="target target-with-green">This is the target</div>
      <div className="target">This is the target</div>
      <div className="target target-with-green target-with-blue">
        This is the target
      </div>
    </main>
  );
}
