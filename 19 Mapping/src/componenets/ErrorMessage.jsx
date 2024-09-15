function ErrorMessage({ items }) {
  return (
    <>
      {items.length === 0 && (
        <h3 className="text-danger">Ohh.. I have nothing to eat.</h3>
      )}
    </>
  );
}

export default ErrorMessage;
