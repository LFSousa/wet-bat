import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoPatterson } from "d3-geo-projection";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const projection = geoPatterson();

type Point = [number, number];

type Position = {
  coordinates: Point;
  zoom: number;
};

const markers: { name: string; coordinates: Point }[] = [
  {
    name: "La Paz",
    coordinates: [-68.1193, -16.4897],
  },
  {
    name: "Brasilia",
    coordinates: [-47.8825, -15.7942],
  },
  {
    name: "Santiago",
    coordinates: [-70.6693, -33.4489],
  },
  {
    name: "Bogotá",
    coordinates: [-74.0721, 4.711],
  },
  {
    name: "El Salvador",
    coordinates: [-88.9806, 13.7406],
  },
  {
    name: "Mexico City",
    coordinates: [-99.1332, 19.432],
  },
  {
    name: "Los Angeles",
    coordinates: [-118.2437, 34.0522],
  },
  {
    name: "Anchorage",
    coordinates: [-149.9006, 61.2181],
  },
  {
    name: "Somalia",
    coordinates: [46.1996, 5.1596],
  },
  {
    name: "United Arab Emirates",
    coordinates: [53.8478, 23.4241],
  },
  {
    name: "Portugal",
    coordinates: [-9.1355, 38.7227],
  },
  {
    name: "United Kingdom",
    coordinates: [-2.5966, 54.2287],
  },
  {
    name: "Italy",
    coordinates: [12.5674, 41.8719],
  },
  {
    name: "Paris",
    coordinates: [2.3522, 48.8566],
  },
  {
    name: "Moscow",
    coordinates: [37.6173, 55.7558],
  },
  {
    name: "Norway",
    coordinates: [8.4689, 60.472],
  },
];

function MapChart({
  setTooltipContent,
}: {
  setTooltipContent: (data: string) => void;
}) {
  const [position, setPosition] = useState<Position>({
    coordinates: [0, 0],
    zoom: 1,
  });

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(pos: Position) {
    setPosition(pos);
  }

  return (
    <Box position="relative">
      <ComposableMap
        data-tip=""
        projection={projection}
        projectionConfig={{ scale: 200 }}
        width={800}
        height={500}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#C9F1F0",
                      outline: "none",
                    },
                    hover: {
                      fill: "#5F6CAF",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates }) => (
            <Marker
              key={name}
              coordinates={coordinates}
              onMouseOver={() => setTooltipContent(name)}
              cursor="pointer"
              data-tip
              data-for="packageTip"
            >
              <g
                fill="#F67474"
                stroke="#F67474"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-8, -24)"
              >
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                <circle cx="12" cy="10" r="4" fill="white" />
              </g>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      <Box position="absolute" bottom={3} left={3}>
        <IconButton onClick={handleZoomOut} size="small">
          <RemoveCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={handleZoomIn} size="small">
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default memo(MapChart);
