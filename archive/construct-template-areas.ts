type TemplateAreaMatrix = Array<number | Array<number>>;

const templateAreaMatrix: TemplateAreaMatrix = [1, [1, 2], [1, 1]];

const constructTemplateAreas = (matrix: TemplateAreaMatrix) => {
  const requiredColumns = 6; // given required columns to avoid expensive calculation

  const areas = matrix.map((row, rowIndex) => {
    if (Array.isArray(row)) {
      const rowColumns = row.reduce((acc, val) => acc + val, 0);
      return `"${row
        .map((colSpan, colIndex) => {
          const repeatFactor = Math.floor(
            (colSpan / rowColumns) * requiredColumns
          );
          return `key${rowIndex}${colIndex} `.repeat(repeatFactor);
        })
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()}"`;
    }

    return `"${Array(requiredColumns).fill(`key${rowIndex}`).join(" ")}"`;
  });

  return areas.join(" ");
};

constructTemplateAreas(templateAreaMatrix);
// "key0 key0 key0 key0 key0 key0"
// "key10 key10 key11 key11 key11 key11"
// "key20 key20 key20 key21 key21 key21"
