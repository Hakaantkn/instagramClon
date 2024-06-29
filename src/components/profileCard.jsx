import { Box, Stack, Avatar  } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { LikesAndCommends } from "./likesAndCommends";
export const ProfileCard = ({id}) => {

    return (
        <>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={'center'}>
                    <Stack direction={"row"} gap={3} alignItems={'center'} marginTop={'20px'}>
                        {/* <Box sx={{backgroundColor: "orange", padding: '1rem', borderRadius: '50%'}}>PP</Box> */}
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>HT</Avatar>
                        <Box>nick name</Box>
                    </Stack>
                    <Box>...</Box>
            </Stack>
                    <Stack height="300px" width="500px" marginTop="20px" marginBottom="40px" sx={{marginInline: 'auto'}}>
                        <img src={`https://picsum.photos/500/300?random=${id}`}   alt="Reels or post"/>
                     <LikesAndCommends/>

                     </Stack>


        </>


    )
}