import { Router } from "express";
import jadwalDoctorController from "../controller/jadwalDoctorController.js";
import userAdminController from "../controller/userAdminController.js";
import loginController from "../controller/loginController.js";

const router =Router();

router.get("/jadwaldoctormodels" ,loginController.checkTokenUser, jadwalDoctorController.findAllJadwalDoctormodels);
router.get("/jadwaldoctorquery" ,loginController.checkTokenUser, jadwalDoctorController.findAllJadwalDoctorQuery);
router.post("/postjadwal" ,loginController.checkTokenAdmin, jadwalDoctorController.PostJadwalDoctor)
router.post("/createuser" , userAdminController.CreateUserAdmin)
router.post("/login" , loginController.login)
export default router;