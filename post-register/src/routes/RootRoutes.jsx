import { Route, Routes, useLocation, useNavigate } from "react-router";
import Layout from "../components/Layout/Layout";
import AuthRoutes from "./AuthRoutes";
import { useAuthentication } from "../hooks/queries/useAuthentication";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

function RootRoutes() {
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const authenticationQuery = useAuthentication(localStorage.getItem("accessToken"));


   useEffect(() => {
      if (!authenticationQuery.isLoading) {
         const status = authenticationQuery.data.status;
         if (status !== 200 && !pathname.startsWith("/auth/")) {
            navigate("/auth/signin", {
               replace: true, //true 일때 완전히 새로 들어간다. 뒤로가기 안됨 들어왔을때의 히스토리 삭제. 들어오기전 히스토리는 있음
            });
         }
         if (status === 200 && pathname.startsWith("/auth/")) {
            navigate("/", {
               replace: true, 
            });
         }
      }
   }, [authenticationQuery.data])




   // const queryClient = useQueryClient();

   // console.log(queryClient.getQueryCache());

   // console.log(authenticationQuery.isLoading);
   // console.log(authenticationQuery.data);

   return (
      <Routes>
         <Route path="/" element={<></>} />
         <Route path="/auth/*" element={<AuthRoutes />} />
         <Route path="*" element={<>페이지를 찾을 수 없습니다</>} />
      </Routes>
   )
}

export default RootRoutes;