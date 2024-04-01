// import * as React from "react";
// import { CardMedia, Button, Typography } from "@mui/material";
// import { Box, Stack } from "@mui/system";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import CloseIcon from "@mui/icons-material/Close";
// import { CustomContext } from "@/context/ShoppingCard";
// import { Backdrop, Fade, Modal } from "@mui/material";
// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "#fff",
//   borderRadius: "16px",
//   p: 4,
// };
// const btnStyle = {
//   bgcolor: "#18BA51",
//   padding: "5px",
//   color: "#fff",
// };
// const subTitle = {
//   fontFamily: "Poppins",
//   fontSize: "18px",
//   fontWeight: "600",
// };
// const ingeredientStyle = {
//   fontSize: "16px",
//   color: "#767676",
//   bgColor: "red",
// };
// type dataType = {
//   foodId: string;
//   title: string;
//   image: string;
//   ingeredient: string;
//   category: string;
//   price: number;
// };
// export const ModalCard = ({ food }: { food: dataType }) => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const [buyCount, setBuyCount] = React.useState(1);
//   const { foodList, setFoodList } = React.useContext(CustomContext);
//   const addFood = () => setBuyCount(buyCount + 1);
//   const subFood = () => {
//     const newCount = buyCount - 1;
//     newCount < 1 ? setBuyCount(1) : setBuyCount(newCount);
//   };
//   const handleHold = () => {
//     const hold = {
//       foodId: food.foodId,
//       title: food.title,
//       image: food.image,
//       ingeredient: food.ingeredient,
//       category: food.category,
//       price: food.price,
//       count: buyCount,
//     };
//     setFoodList([...foodList, hold]);
//     handleClose();
//   };
//   return (
//     <div>
//       <Button onClick={handleOpen}>Дэлгэрэнгүй</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             <Stack
//               direction={"row"}
//               alignItems={"center"}
//               justifyContent={"space-between"}
//               flexWrap={"nowrap"}
//               spacing="33px"
//             >
//               <CardMedia
//                 sx={{ height: "500px", width: "500px" }}
//                 image={food.image}
//                 title="green iguana"
//               />
//               <Stack width={"384px"} spacing={"32px"}>
//                 <Stack>
//                   <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
//                     {food.title}
//                   </Typography>
//                   <Typography sx={{ ...subTitle, color: "#18BA51" }}>
//                     {food.price + "₮"}
//                   </Typography>
//                 </Stack>
//                 <Stack spacing={"12px"}>
//                   <Typography sx={subTitle}>{"Орц:"}</Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       padding: "8px",
//                       borderRadius: "8px",
//                       bgcolor: "#F6F6F6",
//                     }}
//                   >
//                     <Typography sx={ingeredientStyle}>
//                       {food.ingeredient}
//                     </Typography>
//                   </Box>
//                 </Stack>
//                 <Typography sx={subTitle}>{"Тоо"}</Typography>
//                 <Stack
//                   direction={"row"}
//                   justifyContent={"space-between"}
//                   alignItems="center"
//                   spacing={"20px"}
//                   // flexWrap="nowrap"
//                 >
//                   <Button variant="outlined" onClick={subFood} sx={btnStyle}>
//                     <RemoveIcon />
//                   </Button>

//                   <Typography
//                     sx={{
//                       // padding: " 4px 30px",
//                       fontFamily: "Poppins",
//                       fontSize: "18px",
//                       color: "#333",
//                       fontWeight: "500",
//                     }}
//                   >
//                     {buyCount}
//                   </Typography>
//                   <Button variant="outlined" onClick={addFood} sx={btnStyle}>
//                     <AddIcon />
//                   </Button>
//                 </Stack>
//                 <Button onClick={handleHold} sx={btnStyle}>
//                   {"Сагслах"}
//                 </Button>
//               </Stack>
//               <Box
//                 onClick={handleClose}
//                 sx={{ position: "absolute", right: "32px", top: "32px" }}
//               >
//                 <CloseIcon />
//               </Box>
//             </Stack>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// };
