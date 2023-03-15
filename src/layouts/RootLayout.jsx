import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.200">
      <GridItem as="aside" colSpan={1} bg="purple.200" p="30px">
        <span colspa>Sidebar</span>
      </GridItem>

      <GridItem as="main" colSpan={5}>
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
