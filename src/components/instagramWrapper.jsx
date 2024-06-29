import { Box, Stack, Avatar  } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { ProfileCard } from "./profileCard";
export const InstagramWrapper = () => {
    return (
        <Stack width="100%">
            {[...Array(10).keys()].map(element => {
                return (
                    <ProfileCard key={element} id={element}/>
                )
            })}
        </Stack>
    )
}