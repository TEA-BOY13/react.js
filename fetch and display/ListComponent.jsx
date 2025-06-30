function ListComponent({ items, renderItem }) {
  return (
    <ul>
      {items.map((item, index) => renderItem(item, index))}
    </ul>
  );
}

export default ListComponent;
