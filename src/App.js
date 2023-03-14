function App() {
  const message = 'Enter age';
  return (
    <div>
      <h1>بسم الله</h1>
      <input
        type={'number'}
        style={{ backgroundColor: 'yellow' }}
        min="6"
        step={6}
        alt={message}
      ></input>
    </div>
  );
}

export default App;
