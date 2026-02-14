function Child({ sendColor }) {
    return (
      <input
        type="text"
        placeholder="Enter color"
        onChange={(e) => sendColor(e.target.value)}
      />
    );
  }
  
  export default Child;
  