import { Router } from "express";
import jadwalDoctorController from "../controller/jadwalDoctorController.js";

const router =Router();

router.get("/jadwaldoctormodels" , jadwalDoctorController.findAllJadwalDoctormodels);
router.get("/jadwaldoctorquery" , jadwalDoctorController.findAllJadwalDoctorQuery);
router.post("/postjadwal" , jadwalDoctorController.PostJadwalDoctor)
export default router;