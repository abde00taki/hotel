import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import axios from 'axios';

const labels = {
  0.5: 0.5,
  1: 1,
  1.5: 1.5,
  2: 2,
  2.5: 2.5,
  3: 3,
  3.5: 3.5,
  4: 4,
  4.5: 4.5,
  5: 5,
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({ id, initialStar = 0 }) {
  const [star, setStar] = useState(initialStar);
  const [hover, setHover] = useState(-1);

  const handleUpdate = (value) => {
    axios
      .put(`http://localhost:8888/products/${id}/star`, { star: value })
      .then((res) => {
        console.log("Updated:", res.data);
        alert("Product updated successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update the product.");
      });
  };

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
      <Rating
        name="hover-feedback"
        value={star}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(e, newValue) => {
          setStar(newValue);
          handleUpdate(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {star !== null && (
        <Box sx={{ ml: 2 }}>
          {labels[hover !== -1 ? hover : star]}
        </Box>
      )}
    </Box>
  );
}
