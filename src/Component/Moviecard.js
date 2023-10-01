import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  
function Moviecard({title,description,rating,photo}) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={photo} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">

        </Typography>
        Title: <Typography color="blue-gray" className="font-medium" textGradient>
        {title}
        </Typography>

        
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
      <Typography  color="blue-gray" className="font-bold" textGradient>
          rating : <Typography color="gray">{rating}</Typography>
        </Typography>
        <br/>
        <Typography color="blue-gray" className="font-bold" textGradient>
          description : <Typography color="gray">{description}</Typography>
        </Typography>

        
        
      </CardFooter>
    </Card>
  );
}

export default Moviecard;
